$("#btnAddImage").on("click", function () {
    var rowHtml = '<tr><td><div class="form-group">' + $(".ServiceDropdown").html() + '</div></td>'
        + '<td><div class="form-group">' + $(".SetServiceDropdown").html() + '</div></td>'
        + '<td><div class="form-group"><input type="text" class="form-control requiredvalidation width-input floatvalue" id="Unit" name="UnitArray" oninput="calculateTotal()" placeholder="Unit"></div></td>'
        + '<td><div class="form-group"><input type="text" class="form-control requiredvalidation length-input floatvalue" id="Rate" name="RateArray" oninput="calculateTotal()" placeholder="Rate"></div></td>'
        + '<td><div class="form-group"><input type="text" class="form-control requiredvalidation total-input floatvalue" id="total-input" name="TotalAmountArray" placeholder="Total Amount"></div></td>'
        + '<td><a onclick="deleteRow(this)" class="menu-link px-3 common-Icon" data-kt-customer-table-filter="delete_row"><i class="far fa-solid fa-trash text-hover-primary text-danger"></i></a></td>';
    var newRow = $(rowHtml);
    $("#tbl").append(newRow);

    // Initialize Select2
    newRow.find('.ServiceSelect').select2();
    newRow.find('.ServiceSetSelect').select2();
});

$(document).on("input", ".width-input, .length-input", function () {
    var row = $(this).closest('tr');
    var width = parseFloat(row.find('.width-input').val());
    var length = parseFloat(row.find('.length-input').val());

    var total = width * length;
    row.find('.total-input').val(isNaN(total) ? '' : total.toFixed(2));
    calculateTotal();
});



function calculateTotal() {
    var totalsum = 0;
    $('.total-input').each(function () {

        const TotalAmount = parseFloat($(this).val());
        if (!isNaN(TotalAmount)) {
            totalsum += TotalAmount;
        }
    });

    var unit = parseFloat(document.getElementById("Unit").value);
    var rate = parseFloat(document.getElementById("Rate").value);
    var total = unit * rate;
    document.getElementById("TotalAmount").value = isNaN(total) ? '' : total.toFixed(2);
    sumTotal = total + totalsum;

    $('#GrandAmount').text(sumTotal.toFixed(2));

    var grandAmount = sumTotal;


    //var Total = parseFloat(document.getElementById("TotalAmount").value);
    //var STotal = parseFloat(document.getElementById("total-input").value);
    //var GrandAmount = Total+STotal;
    document.getElementById("GrandAmount").value = isNaN(grandAmount) ? '' : grandAmount.toFixed(2);


    var discount = parseFloat(document.getElementById("DiscountAmount").value);
    //  discount = (GrandAmount * discount) / 100;
    var FinalAmount = grandAmount - discount;

    document.getElementById("FinalAmount").value = isNaN(FinalAmount) ? '' : FinalAmount.toFixed(2);

    var GrossAmount = FinalAmount;
    document.getElementById("GrossAmount").value = isNaN(GrossAmount) ? '' : GrossAmount.toFixed(2);

    var percent = parseFloat(document.getElementById("Percentage").value);

    //percent = (GrossAmount * percent) / 100;
    var Amount = GrossAmount - (GrossAmount * percent) / 10;
    document.getElementById("Amount").value = isNaN(Amount) ? '' : Amount.toFixed(2);

    var TotalfinalAmount = Amount;
    document.getElementById("TotalFinalAmount").value = isNaN(TotalfinalAmount) ? '' : TotalfinalAmount.toFixed(2);

    var PaidAmount = parseFloat(document.getElementById("PaidAmount").value);

    var BalanceAmount = TotalfinalAmount - PaidAmount;
    document.getElementById("BalanceAmount").value = isNaN(BalanceAmount) ? '' : BalanceAmount.toFixed(2);

}
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
