
$('#AdharNo').change(function () {
    var AdharNo = $("#AdharNo").val();
    var url = "/Employee/ValidateAdharNo?AdharNo=" + AdharNo;
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
    var url = "/Employee/ValidatePANCardNo?PANCardNo=" + PANCardNo;
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
    var url = "/Employee/ValidateEmail?Email=" + Email;
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
$('#MobileNumber').change(function () {
    var MobileNumber = $("#MobileNumber").val();
    var url = "/Employee/ValidateMobileNumber?MobileNumber=" + MobileNumber;
    $.ajax({
        cache: false,
        type: 'POST',
        url: url,
        success: function (data) {
            if (data.success != true) {
                toastr.error("Mobile Number is already exist.. Please enter Another Mobile No");
                $('.save-data').prop('disabled', true);
                $("#MobileNumber").val("");
            } else {
                $('.save-data').prop('disabled', false);
            }
        },
    });
});