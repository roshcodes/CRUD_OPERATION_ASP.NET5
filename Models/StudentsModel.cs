using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Metadata.Edm;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Models
{
    public class StudentsModel
    {
        public StudentsModel()
        {
            this.StudentList = new List<StudentsModel>();
            this.CountryList = new List<SelectListItem>();
            this.StateList = new List<SelectListItem>();
            this.DistrictList = new List<SelectListItem>();
            this.EmployeeList = new List<SelectListItem>();
            this.EmpList = new List<Employee>();

            GenderList.Add(new SelectListItem { Text = "Male", Value = "Male" });
            GenderList.Add(new SelectListItem { Text = "Female", Value = "Female" });

        }
        public StudentInfo person { get; set; }
        public int StudentId { get; set; }
        public int CountryId { get; set; }
        public int StateId { get; set; }
        public int DistrictId { get; set; }
        public int EmployeeId { get; set; }
        public string FullName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string MobileNo { get; set; }
        public string Email { get; set; }
        public string EFirstName { get; set; }
        public string ELastName { get; set; }
        public string EMobileNo { get; set; }
        public string EEmail { get; set; }
        public string EAddress { get; set; }
        public string Gender { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string District { get; set; }
        public string Address { get; set; }
        public string CreatedDateStr { get; set; }
        public bool IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsView { get; set; }
        public Nullable<DateTime> CreatedDate { get; set; }
        public Nullable<DateTime> UpdatedDate { get; set; }

        public List<StudentsModel> StudentList = new List<StudentsModel>();
        public List<Employee> EmpList = new List<Employee>();
        public List<SelectListItem> CountryList = new List<SelectListItem>();
        public List<SelectListItem> StateList = new List<SelectListItem>();
        public List<SelectListItem> DistrictList = new List<SelectListItem>();
        public List<SelectListItem> EmployeeList = new List<SelectListItem>();
        public List<SelectListItem> GenderList = new List<SelectListItem>();
    }
}