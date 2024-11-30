      // Listen for input events on each input field
        $('#Prefix, #FirstName, #MiddleName, #LastName, #Suffix').on('input', function () {
            var prefix = $('#Prefix').val().trim();
            var firstName = $('#FirstName').val().trim();
            var middleName = $('#MiddleName').val().trim();
            var lastName = $('#LastName').val().trim();
            var suffix = $('#Suffix').val().trim();

            // Concatenate the values and update the DisplayName field
            var displayName = prefix + ' ' + firstName + ' ' + middleName + ' ' + lastName + ' ' + suffix;
            $('#DisplayName').val(displayName);
        });
$('#filladdress').change(function () {
    if ($(this).is(':checked')) {
        // Copy home address details to business address details
        $('#BusinessAddress1').val($('#HomeAddress2').val());
        $('#BusinessAddress2').val($('#HomeStreet').val());
        $('#BusinessLandmark').val($('#Landmark').val());
        $('#BusinessCity').val($('#HomeCity').val());
        $('#BusinessTaluka').val($('#HomeTaluka').val());
        $('#BusinessDistrict').val($('#HomeDistrict').val()).trigger('change');
        $('#BusinessPostalCode').val($('#HomePostalCode').val());
        $('#BusinessState').val($('#HomeState').val()).trigger('change');
        $('#BusinessCountry').val($('#HomeCountry').val()).trigger('change');
        $('#CountryCode').val($('#HomeCountryCode').val());
    } else {
        // Clear business address details
        $('#BusinessAddress1').val('');
        $('#BusinessAddress2').val('');
        $('#BusinessLandmark').val('');
        $('#BusinessCity').val('');
        $('#BusinessTaluka').val('');
        $('#BusinessDistrict').val('304').trigger('change');
        $('#BusinessPostalCode').val('');
        $('#BusinessState').val('19').trigger('change');
        $('#BusinessCountry').val('1').trigger('change');
        $('#CountryCode').val('+91');
    }
});
$('#AdharCard').change(function () {
    var AdharCard = $("#AdharCard").val();
    var url = "/ContactList/ValidateAdharNo?AdharCard=" + AdharCard;
    $.ajax({
        cache: false,
        type: 'POST',
        url: url,
        success: function (data) {
            if (data.success != true) {
                toastr.error("Adhar number is already exist.. Please enter Another");
                $('.save-data').prop('disabled', true);
                $("#AdharCard").val("");
            } else {
                $('.save-data').prop('disabled', false);
            }
        },
    });
});

$('#PANCard').change(function () {
    var PANCard = $("#PANCard").val();
    var url = "/ContactList/ValidatePANCardNo?PANCard=" + PANCard;
    $.ajax({
        cache: false,
        type: 'POST',
        url: url,
        success: function (data) {
            if (data.success != true) {
                toastr.error("PAN number is already exist.. Please enter Another");
                $('.save-data').prop('disabled', true);
                $("#PANCard").val("");
            } else {
                $('.save-data').prop('disabled', false);
            }
        },
    });
});
$('#Email1Address').change(function () {
    var Email1Address = $("#Email1Address").val();
    var url = "/ContactList/ValidateEmail1?Email1Address=" + Email1Address;
    $.ajax({
        cache: false,
        type: 'POST',
        url: url,
        success: function (data) {
            if (data.success != true) {
                toastr.error("Email1 is already exist.. Please enter Another Email");
                $('.save-data').prop('disabled', true);
                $("#Email1Address").val("");
            } else {
                $('.save-data').prop('disabled', false);
            }
        },
    });
});
$('#Email2Address').change(function () {
    var Email2Address = $("#Email2Address").val();
    var url = "/ContactList/ValidateEmail2?Email2Address=" + Email2Address;
    $.ajax({
        cache: false,
        type: 'POST',
        url: url,
        success: function (data) {
            if (data.success != true) {
                toastr.error("Email2 is already exist.. Please enter Another Email");
                $('.save-data').prop('disabled', true);
                $("#Email2Address").val("");
            } else {
                $('.save-data').prop('disabled', false);
            }
        },
    });
})
    ; $('#Email3Address').change(function () {
        var Email3Address = $("#Email3Address").val();
        var url = "/ContactList/ValidateEmail3?Email3Address=" + Email3Address;
    $.ajax({
        cache: false,
        type: 'POST',
        url: url,
        success: function (data) {
            if (data.success != true) {
                toastr.error("Business E-mail is already exist.. Please enter Another Business E-mail");
                $('.save-data').prop('disabled', true);
                $("#Email3Address").val("");
            } else {
                $('.save-data').prop('disabled', false);
            }
        },
    });
});
$('#Pager').change(function () {
    var Pager = $("#Pager").val();
    var url = "/ContactList/ValidatePager?Pager=" + Pager;
    $.ajax({
        cache: false,
        type: 'POST',
        url: url,
        success: function (data) {
            if (data.success != true) {
                toastr.error("WhatsApp Number is already exist.. Please enter Another WhatsApp No");
                $('.save-data').prop('disabled', true);
                $("#Pager").val("");
            } else {
                $('.save-data').prop('disabled', false);
            }
        },
    });
});
$('#MobilePhone').change(function () {
    var MobilePhone = $("#MobilePhone").val();
    var url = "/ContactList/ValidateMobilePhone?MobilePhone=" + MobilePhone;
    $.ajax({
        cache: false,
        type: 'POST',
        url: url,
        success: function (data) {
            if (data.success != true) {
                toastr.error("AdharLink Mobile Number is already exist.. Please enter Another AdharLink Mobile No");
                $('.save-data').prop('disabled', true);
                $("#MobilePhone").val("");
            } else {
                $('.save-data').prop('disabled', false);
            }
        },
    });
});
$('#BusinessPhone').change(function () {
    var BusinessPhone = $("#BusinessPhone").val();
    var url = "/ContactList/ValidateBusinessPhone?BusinessPhone=" + BusinessPhone;
    $.ajax({
        cache: false,
        type: 'POST',
        url: url,
        success: function (data) {
            if (data.success != true) {
                toastr.error("Home Landline No is already exist.. Please enter Another Home Landline No");
                $('.save-data').prop('disabled', true);
                $("#BusinessPhone").val("");
            } else {
                $('.save-data').prop('disabled', false);
            }
        },
    });
});
$('#HomePhone').change(function () {
    var HomePhone = $("#HomePhone").val();
    var url = "/ContactList/ValidateHomePhone?HomePhone=" + HomePhone;
    $.ajax({
        cache: false,
        type: 'POST',
        url: url,
        success: function (data) {
            if (data.success != true) {
                toastr.error("Home Contact Number is already exist.. Please enter Another Home Contact No");
                $('.save-data').prop('disabled', true);
                $("#HomePhone").val("");
            } else {
                $('.save-data').prop('disabled', false);
            }
        },
    });
});