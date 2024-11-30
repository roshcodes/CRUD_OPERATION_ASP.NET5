$("#btnAddOwner").on("click", function () {
    var rowHtml = '<tr><td><div class="form-group">' + $(".OwnersDropdown").html() + '</div></td>'
        + '<td><div class="form-group"><input type="text" maxlength="10" minlength="10" class="form-control numberonly maxlength mobile" id="numberonly" name="OwnerWhatsappNoArray" required /></div></td>'
        + '<td><div class="form-group"><input type="text" maxlength="10" class="form-control numberonly maxlength mobile" name="OwnerAdharlinkMobNoArray" required /></div></td>'
        + '<td><div class="form-group"><input type="text" class="form-control" name="OwnerDetailedAddressArray" required /></div></td>'
        + '<td class="text-center"><a onclick="deleteRow(this)" class="menu-link px-3 common-Icon" data-kt-customer-table-filter="delete_row"><i class="far fa-solid fa-trash text-hover-primary text-danger"></i></a></td>';

    var newRow = $(rowHtml);
    $("#tbl").append(newRow);

    // Initialize Select2
    newRow.find('.OwnersSelect').select2();
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
    var url = "/ProjectCreate/ValidateEmail?Email=" + Email;
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
$('#OwnerWhatsappNo').change(function () {
    var WhatsAppNo = $("#OwnerWhatsappNo").val();
    var url = "/ProjectCreate/ValidateWhatsAppNo?WhatsAppNo=" + WhatsAppNo;
    $.ajax({
        cache: false,
        type: 'POST',
        url: url,
        success: function (data) {
            if (data.success != true) {
                toastr.error("WhatsApp Number is already exist.. Please enter Another WhatsApp Number");
                $('.save-data').prop('disabled', true);
                $("#OwnerWhatsappNo").val("");
            } else {
                $('.save-data').prop('disabled', false);
            }
        },
    });
});
$('#OwnerAdharlinkMobNo').change(function () {
    var AlternetContactNo = $("#OwnerAdharlinkMobNo").val();
    var url = "/ProjectCreate/ValidateAdharlinkNo?OwnerAdharlinkMobNo=" + AlternetContactNo;
    $.ajax({
        cache: false,
        type: 'POST',
        url: url,
        success: function (data) {
            if (data.success != true) {
                toastr.error("Mobile Number is already exist.. Please enter Another Mobile No");
                $('.save-data').prop('disabled', true);
                $("#OwnerAdharlinkMobNo").val("");
            } else {
                $('.save-data').prop('disabled', false);
            }
        },
    });
});
