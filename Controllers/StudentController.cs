using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class StudentController : Controller
    {
        Webapp1Entities db;
        public StudentController() 
        {
            db = new Webapp1Entities();
        }
        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing)
        //    {
        //        db.Dispose();
        //    }
        //    base.Dispose(disposing);
        //}
        public void BindDropdown(StudentsModel model)
        {
            var Data = db.Countries.Select(m => new { m.CountryId, m.CountryName }).OrderBy(m => m.CountryName).ToList();
            model.CountryList.Add(new SelectListItem { Text = "- Select Country -", Value = "0" });
            foreach (var item in Data)
            {
                model.CountryList.Add(new SelectListItem
                {
                    Text = item.CountryName.ToString(),
                    Value = item.CountryId.ToString()
                });
            }
            var EmpData = db.Employees.Select(m => new { m.EmployeeId, m.FirstName }).OrderBy(m => m.FirstName).ToList();
            model.EmployeeList.Add(new SelectListItem { Text = "- Select Employee -", Value = "0" });
            foreach (var item in EmpData)
            {
                model.EmployeeList.Add(new SelectListItem
                {
                    Text = item.FirstName.ToString(),
                    Value = item.EmployeeId.ToString()
                });
            }
        }
        public JsonResult GetState(int CountryId)
        {
            var StateData = db.States.Where(m=>m.CountryId ==  CountryId).OrderBy(m=>m.StateName).ToList();
            var StateList = new List<SelectListItem>();
            foreach (var item in StateData)
            {
                StateList.Add(new SelectListItem
                {
                    Text = item.StateName.ToString(),
                    Value = item.StateId.ToString()

                });
            }
            return Json(StateList, JsonRequestBehavior.AllowGet);
        }
        public JsonResult GetEmployeeDetails(int EmployeeId)
        {
            var employee = db.Employees
                             .Where(m => m.EmployeeId == EmployeeId)
                             .Select(m => new
                             {
                                 FirstName = m.FirstName,
                                 LastName = m.LastName,
                                 Email = m.Email,
                                 MobileNo = m.MobileNo,
                                 Address = m.Address
                             })
                             .FirstOrDefault();

            if (employee == null)
            {
                return Json(new { success = false, data = "Data Not Found" }, JsonRequestBehavior.AllowGet);
            }

            return Json(new { success = true, data = employee }, JsonRequestBehavior.AllowGet);
        }
        public JsonResult GetDistrict(int StateId)
        {
            var DistrictData = db.Districts.Where(m => m.StateId == StateId).OrderBy(m => m.DistrictName).ToList();
            var DistrictList = new List<SelectListItem>();
            foreach (var item in DistrictData)
            {
                DistrictList.Add(new SelectListItem
                {
                    Text = item.DistrictName.ToString(),
                    Value = item.DistrictId.ToString()
                });
            }
            return Json(DistrictList, JsonRequestBehavior.AllowGet);
        }
        public JsonResult GetStates(string term)
        {
            var CountryData = db.States
                                .Where(m => m.StateName.Contains(term))
                                .OrderBy(m => m.StateName)
                                .Select(m => new
                                {
                                    Text = m.StateName,
                                    Value = m.StateId
                                })
                                .ToList();

            return Json(CountryData, JsonRequestBehavior.AllowGet);
        }
        public JsonResult GetDistricts(string term)
        {
            var DistrictData = db.Districts
                                .Where(m => m.DistrictName.Contains(term))
                                .OrderBy(m => m.DistrictName)
                                .Select(m => new
                                {
                                    Text = m.DistrictName,
                                    Value = m.DistrictId
                                })
                                .ToList();
            return Json(DistrictData, JsonRequestBehavior.AllowGet);
        }
        // GET: Student
        public ActionResult List()
        {
            var model = new StudentsModel();
            var Data = db.StudentInfoes.Where(m=>!m.IsDeleted).ToList();
            if (Data.Count > 0)
            {
                foreach (var item in Data)
                {
                    var obj = new StudentsModel();
                    obj.StudentId = item.StudentId;
                    obj.FirstName = item.FirstName != null ? item.FirstName : "--";
                    obj.LastName = item.LastName != null ? item.LastName : "--";
                    obj.Email = item.Email != null ? item.Email : "--";
                    obj.MobileNo = item.MobileNo != null ? item.MobileNo : "--";
                    obj.Gender = item.Gender != null ? item.Gender : "--";
                    obj.Address = item.Address ?? "--";
                    obj.IsActive = item.IsActive;
                    obj.CreatedDateStr = item.CreatedDate.Value.ToString("dd/MM/yyyy") != null ? item.CreatedDate.Value.ToString() : "--";
                    model.StudentList.Add(obj);
                }
            }
            return View(model);
        }
        // GET: Student/Create
        public ActionResult Create()
        {
            var model = new StudentsModel();
            //var employeeList = db.Employees
            //          .Select(m => new SelectListItem
            //          {
            //              Text = m.FirstName,
            //              Value = m.EmployeeId.ToString()
            //          })
            //          .ToList();
            //ViewBag.EmployeeList = employeeList;
            BindDropdown(model);
            return View(model);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult SaveCreate(StudentsModel model)
        {
            if (ModelState.IsValid)
            {
                var Emodel = new StudentInfo();
                Emodel.FirstName = model.FirstName;
                Emodel.LastName = model.LastName;
                Emodel.Gender = model.Gender;
                Emodel.Country = model.Country;
                Emodel.Address = model.Address;
                Emodel.State = model.State;
                Emodel.District = model.District;
                Emodel.Email = model.Email;
                Emodel.MobileNo = model.MobileNo;
                Emodel.IsActive = model.IsActive;
                Emodel.CountryId = model.CountryId;
                Emodel.StateId = model.StateId;
                Emodel.DistrictId = model.DistrictId;
                Emodel.EmployeeId = model.EmployeeId;
                Emodel.CreatedDate = DateTime.Now;
                Emodel.UpdatedDate= DateTime.Now;
                db.StudentInfoes.Add(Emodel);
                db.SaveChanges();

                TempData["SuccessMsg"] = "Student Info Created Successfully";
            }
            return RedirectToAction("List");
        }

        // Edit: Student
        public ActionResult Edit(int StudentId = 0, bool IsView = false)
        {
            var model = new StudentsModel();
            if (StudentId>0)
            {
                if (IsView)
                {
                    model.IsView = true;
                }
                else
                {
                    model.IsView = false;
                }
                var Data = db.StudentInfoes.Find(StudentId);
                model.StudentId = Data.StudentId;
                model.FirstName = Data.FirstName;
                model.LastName = Data.LastName;
                model.Gender = Data.Gender;
                model.Country = Data.Country;
                model.State = Data.State;
                model.District = Data.District;
                model.Email = Data.Email;
                model.MobileNo = Data.MobileNo;
                model.Address = Data.Address;
                model.IsActive = Data.IsActive;
                model.DistrictId = Data.DistrictId;
                model.StateId = Data.StateId;
                model.CountryId = Data.CountryId;
                model.EmployeeId = Data.EmployeeId;
                ViewBag.StateId = new SelectList(db.States.Where(m=>m.CountryId == model.CountryId).ToList(),"StateId","StateName",model.StateId);
                ViewBag.DistrictId = new SelectList(db.Districts.Where(m=>m.StateId == model.StateId).ToList(),"DistrictId","DistrictName",model.DistrictId);
                BindDropdown(model);
                return View(model);
            }
            return RedirectToAction("List");
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult SaveEdit(StudentsModel model)
        {
            var Data = db.StudentInfoes.Find(model.StudentId);
            if (Data != null)
            {
                Data.FirstName = model.FirstName;
                Data.LastName = model.LastName;
                Data.Gender = model.Gender;
                Data.Country = model.Country;
                Data.State = model.State;
                Data.District = model.District;
                Data.Email = model.Email;
                Data.MobileNo = model.MobileNo;
                Data.Address = model.Address;
                Data.IsActive = model.IsActive;
                Data.CountryId = model.CountryId;
                Data.StateId = model.StateId;
                Data.DistrictId = model.DistrictId;
                Data.EmployeeId = model.EmployeeId;
                Data.UpdatedDate = DateTime.Now;
                db.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                TempData["SuccessMsg"] = "Student Info Update Successfully";
                return RedirectToAction("List");
            }
            return RedirectToAction("List");
        }

        // GET: Student/Delete/5
        public ActionResult Delete(int StudentId = 0)
        {
            var Data = db.StudentInfoes.Find(StudentId);
            if (Data != null)
            {
                Data.IsDeleted = true;
                db.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();

                TempData["ErrorMsg"] = "Student Info Deleted Successfully";
                return RedirectToAction("List");
            }
            return RedirectToAction("List");
        }

        public ActionResult View(int StudentId)
        {
            var model = new StudentsModel();
            if (StudentId > 0)
            {
                var Data = db.StudentInfoes.Find(StudentId);
                model.person = Data;
                return PartialView("Details", model);
            }
            return RedirectToAction("List");
        }

    }
}
