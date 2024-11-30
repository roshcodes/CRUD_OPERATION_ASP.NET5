
$("#btnAddAuthority").on("click", function () {
    var rowHtml = '<tr><td><div class="form-group">' + $(".AuthorityDropdown").html() + '</div></td>'
        + '<td class="text-center"><a onclick="deleteRow(this)" class="menu-link px-3 common-Icon"><i class="far fa-solid fa-trash text-hover-primary text-danger"></i></a></td>';
    $("#tbl").append(rowHtml);
    $("#tbl tr:last").slideDown();
});
function deleteRow(ele) {
    var table = $('#tbl')[0];
    var rowCount = table.rows.length;
    if (rowCount <= 1) {
        alert("There is no row available to delete!");
        return;
    }
    if (ele) {
        // Delete specific row with slide-up animation
        $(ele).closest('tr').slideUp(function () {
            $(this).remove();
        });
    } else {
        // Delete last row with slide-up animation
        $(table.rows[rowCount - 1]).slideUp(function () {
            $(this).remove();
        });
    }
}
$('#AdharNo').change(function () {
    var AdharNo = $("#AdharNo").val();
    var url = "/ULBMaster/ValidateAdharNo?AdharNo=" + AdharNo;
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
    var url = "/ULBMaster/ValidatePANCardNo?PANCardNo=" + PANCardNo;
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
    var url = "/ULBMaster/ValidateEmail?Email=" + Email;
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
$('#ULBMobNo').change(function () {
    var ULBMobNo = $("#ULBMobNo").val();
    var url = "/ULBMaster/ValidateULBMobNo?ULBMobNo=" + ULBMobNo;
    $.ajax({
        cache: false,
        type: 'POST',
        url: url,
        success: function (data) {
            if (data.success != true) {
                toastr.error("Landline Number is already exist.. Please enter Another Landline Number");
                $('.save-data').prop('disabled', true);
                $("#ULBMobNo").val("");
            } else {
                $('.save-data').prop('disabled', false);
            }
        },
    });
});
$('#MobileNo').change(function () {
    var MobileNo = $("#MobileNo").val();
    var url = "/ULBMaster/ValidateMobileNo?MobileNo=" + MobileNo;
    $.ajax({
        cache: false,
        type: 'POST',
        url: url,
        success: function (data) {
            if (data.success != true) {
                toastr.error("Mobile Number is already exist.. Please enter Another Mobile No");
                $('.save-data').prop('disabled', true);
                $("#MobileNo").val("");
            } else {
                $('.save-data').prop('disabled', false);
            }
        },
    });
});
$('#ULBName').change(function () {
    var ULBName = $("#ULBName").val();
    var url = "/ULBMaster/ValidateULBName?ULBName=" + ULBName;
    $.ajax({
        cache: false,
        type: 'POST',
        url: url,
        success: function (data) {
            if (data.success != true) {
                toastr.error("ULB Name is already exist.. Please enter Another ULB Name");
                $('.save-data').prop('disabled', true);
                $("#ULBName").val("");
            } else {
                $('.save-data').prop('disabled', false);
            }
        },
    });
});
