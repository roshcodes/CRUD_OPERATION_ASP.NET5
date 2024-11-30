$("#btnAddBusiness").on("click", function () {
    var rowHtml = '<tr><td><div class="form-group"><input type="text" class="form-control" name="BusinessNameArray" required /></div></td>'
        + '<td><div class="form-group"><input type="text" class="form-control" name="BusinessTypeArray" required /></div></td>'
        + '<td><div class="form-group"><input type="text" maxlength="10" minlength="10" class="form-control numberonly" id="numberonly" name="BWhatsAppNoArray" required /></div></td>'
        + '<td><div class="form-group"><input type="text" maxlength="12" class="form-control numberonly" name="BusinessAdharArray" required /></div></td>'
        + '<td><div class="form-group"><input type="text" maxlength="10" class="form-control PANCard" name="BusinessPANArray" required /></div></td>'
        + '<td><div class="form-group"><input type="text" class="form-control" name="BAddressArray" required /></div></td>'
        + '<td class="text-center"><a onclick="deleteRow(this)" class="icon-btn"><i class="las la-trash text-danger"></i></a></td>';
        Notes

    $("#tbl").append(rowHtml);
});

$('#AdharNo').change(function () {
    var AdharNo = $("#AdharNo").val();
    var url = "/Customer/ValidateAdharNo?AdharNo=" + AdharNo;
    $.ajax({
        cache: false,
        type: 'POST',
        url: url,
        success: function (data) {
            if (data.success != true) {
                toastr.error("Adhar number is already exist.. Please enter Another");
                $('.save-data').prop('disabled', true);
                $("#AdharNo").val("");
            } else {
                $('.save-data').prop('disabled', false);
            }
        },
    });
});

$('#PANCardNo').change(function () {
    var PANCardNo = $("#PANCardNo").val();
    var url = "/Customer/ValidatePANCardNo?PANCardNo=" + PANCardNo;
    $.ajax({
        cache: false,
        type: 'POST',
        url: url,
        success: function (data) {
            if (data.success != true) {
                toastr.error("PAN number is already exist.. Please enter Another");
                $('.save-data').prop('disabled', true);
                $("#PANCardNo").val("");
            } else {
                $('.save-data').prop('disabled', false);
            }
        },
    });
});
$('#Email').change(function () {
    var Email = $("#Email").val();
    var url = "/Customer/ValidateEmail?Email=" + Email;
    $.ajax({
        cache: false,
        type: 'POST',
        url: url,
        success: function (data) {
            if (data.success != true) {
                toastr.error("Email is already exist.. Please enter Another Email");
                $('.save-data').prop('disabled', true);
                $("#Email").val("");
            } else {
                $('.save-data').prop('disabled', false);
            }
        },
    });
});
$('#WhatsAppNo').change(function () {
    var WhatsAppNo = $("#WhatsAppNo").val();
    var url = "/Customer/ValidateWhatsAppNo?WhatsAppNo=" + WhatsAppNo;
    $.ajax({
        cache: false,
        type: 'POST',
        url: url,
        success: function (data) {
            if (data.success != true) {
                toastr.error("WhatsApp Number is already exist.. Please enter Another WhatsApp Number");
                $('.save-data').prop('disabled', true);
                $("#WhatsAppNo").val("");
            } else {
                $('.save-data').prop('disabled', false);
            }
        },
    });
});
$('#AlternetContactNo').change(function () {
    var AlternetContactNo = $("#AlternetContactNo").val();
    var url = "/Customer/ValidateAlternetContactNo?AlternetContactNo=" + AlternetContactNo;
    $.ajax({
        cache: false,
        type: 'POST',
        url: url,
        success: function (data) {
            if (data.success != true) {
                toastr.error("Mobile Number is already exist.. Please enter Another Mobile No");
                $('.save-data').prop('disabled', true);
                $("#AlternetContactNo").val("");
            } else {
                $('.save-data').prop('disabled', false);
            }
        },
    });
});
