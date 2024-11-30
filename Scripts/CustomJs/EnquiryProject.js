$("#btnAddService").on("click", function () {
    var rowHtml = '<tr><td><div class="form-group">' + $(".ServicesDropdown").html() + '</div></td>'
        + '<td class="text-center"><a onclick="deleteRow(this)" class="menu-link px-3 common-Icon" data-kt-customer-table-filter="delete_row"><i class="far fa-solid fa-trash text-hover-primary text-danger"></i></a></td>';
    var newRow = $(rowHtml);
    $("#tbl").append(newRow);

    // Initialize Select2
    newRow.find('.ServicesSelect').select2();
});
$("#btnAddDocument").on("click", function () {
    var rowHtml = '<tr><td><div class="form-group">' + $(".DocumentsDropdown").html() + '</div></td>'
        + '<td class="text-center"><a onclick="deleteRowDoc(this)" class="menu-link px-3 common-Icon" data-kt-customer-table-filter="delete_row"><i class="far fa-solid fa-trash text-hover-primary text-danger"></i></a></td>';
    var newRow = $(rowHtml);
    $("#Doc").append(newRow);

    // Initialize Select2
    newRow.find('.DocumentsSelect').select2();
});
function deleteRow(ele) {
    var table = $('#tbl')[0];
    var rowCount = table.rows.length;
    if (rowCount <= 1) {
        alert("There is no row available to delete!");
        return;
    }
    if (ele) {
        //delete specific row
        $(ele).parent().parent().remove();
    }
    else {
        //delete last row
        table.deleteRow(rowCount - 1);
    }
}
function deleteRowDoc(ele) {
    var table = $('#Doc')[0];
    var rowCount = table.rows.length;

    if (rowCount <= 1) {
        alert("There is only one row available, which cannot be deleted!");
        return;
    }

    if (ele) {
        // Delete specific row
        $(ele).closest('tr').remove(); // Use closest('tr') to find the parent row
    }
    else {
        // Delete last row
        table.deleteRow(rowCount - 1);
    }
}