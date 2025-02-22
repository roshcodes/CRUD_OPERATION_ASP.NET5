
$('#AdharNo').change(function () {
    var AdharNo = $("#AdharNo").val();
    var url = "/ResponsiblePerson/ValidateAdharNo?AdharNo=" + AdharNo;
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
    var url = "/ResponsiblePerson/ValidatePANCardNo?PANCardNo=" + PANCardNo;
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
    var url = "/ResponsiblePerson/ValidateEmail?Email=" + Email;
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
    var url = "/ResponsiblePerson/ValidateWhatsAppNo?WhatsAppNo=" + WhatsAppNo;
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
    var url = "/ResponsiblePerson/ValidateAlternetContactNo?AlternetContactNo=" + AlternetContactNo;
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
$('#ContactNo').change(function () {
    var ContactNo = $("#ContactNo").val();
    var url = "/ResponsiblePerson/ValidateContactNo?ContactNo=" + ContactNo;
    $.ajax({
        cache: false,
        type: 'POST',
        url: url,
        success: function (data) {
            if (data.success != true) {
                toastr.error("Mobile Number is already exist.. Please enter Another Mobile No");
                $('.save-data').prop('disabled', true);
                $("#ContactNo").val("");
            } else {
                $('.save-data').prop('disabled', false);
            }
        },
    });
});