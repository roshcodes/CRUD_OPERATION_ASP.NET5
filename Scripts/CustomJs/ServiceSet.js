$("#btnAddServiceNote").on("click", function () {
    var rowHtml = '<tr><td><div class="form-group"><input type="text" class="form-control" name="ServiceSetNoteArray" /></div></td>'
        + '<td class="text-center"><a onclick="deleteRow(this)" class="menu-link px-3 common-Icon" data-kt-customer-table-filter="delete_row"><i class="far fa-solid fa-trash text-hover-primary text-danger"></i></a></td>';

    $("#tbl").append(rowHtml);
});
$("#btnAddPricingNote").on("click", function () {
    var rowHtml = '<tr><td><div class="form-group"><input type="text" class="form-control" name="PricingSetNoteArray" /></div></td>'
        + '<td class="text-center"><a onclick="deleteRow(this)" class="menu-link px-3 common-Icon" data-kt-customer-table-filter="delete_row"><i class="far fa-solid fa-trash text-hover-primary text-danger"></i></a></td>';
    
    $("#tbl1").append(rowHtml);
});