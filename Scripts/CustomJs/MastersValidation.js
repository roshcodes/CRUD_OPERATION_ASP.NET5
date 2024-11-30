
$("#frmData").validate({
    rules: {
        WhatsAppNo: {
            required: true,
            minlength: 10,
            maxlength: 10,
            number: true
        },
        AlternetContactNo: {
            required: true,
            minlength: 10,
            maxlength: 10,
            number: true
        },
        ContactNo: {
            required: true,
            minlength: 10,
            maxlength: 10,
            number: true
        },
        LandlineNo: {
            required: true,
            minlength: 10,
            maxlength: 20,
            number: true
        },
        MobileNo: {
            required: true,
            minlength: 10,
            maxlength: 10,
            number: true
        },
        Email: {
            required: true,
            email: true
        },
        BWhatsAppNoArray: {
            required: true,
            minlength: 10,
            maxlength: 10,
            number: true
        },
        BusinessPANArray: {
            required: true,
            minlength: 10,
            maxlength: 10,

        },
        BusinessAdharArray: {
            required: true,
            minlength: 12,
            maxlength: 12,
            number: true
        },
        PANCardNo: {
            required: true,
            minlength: 10,
            maxlength: 10,
        },
        AdharNo: {
            required: true,
            minlength: 12,
            maxlength: 12,
            number: true
        }
    },
    messages: {
        WhatsAppNo: {
            required: "Please enter your mobile number",
            minlength: "Mobile number must be at least 10 characters long",
            maxlength: "Mobile number cannot exceed 10 characters"
        },
        AlternetContactNo: {
            required: "Please enter your mobile number",
            minlength: "Mobile number must be at least 10 characters long",
            maxlength: "Mobile number cannot exceed 10 characters"
        },
        ContactNo: {
            required: "Please enter your mobile number",
            minlength: "Mobile number must be at least 10 characters long",
            maxlength: "Mobile number cannot exceed 10 characters"
        },
        LandlineNo: {
            required: "Please enter your Landline number",
            minlength: "Landline number must be at least 10 characters long",
            maxlength: "Landline number cannot exceed 20 characters"
        },
        MobileNo: {
            required: "Please enter your mobile number",
            minlength: "Mobile number must be at least 10 characters long",
            maxlength: "Mobile number cannot exceed 10 characters"
        },
        BWhatsAppNoArray: {
            required: "Please enter your mobile number",
            minlength: "Mobile number must be at least 10 characters long",
            maxlength: "Mobile number cannot exceed 10 characters"
        },
        Email: {
            required: "Please enter a Valid Email"
        },
        BusinessPANArray: {
            required: "Please enter your PanCard number",
            minlength: "PanCard number must be at least 10 characters long",
            maxlength: "PanCard number cannot exceed 10 characters"
        },
        BusinessAdharArray: {
            required: "Please enter your Adhar number",
            minlength: "Adhar number must be at least 12 characters long",
            maxlength: "Adhar number cannot exceed 12 characters"
        },
        PANCardNo: {
            required: "Please enter your PanCard number",
            minlength: "PanCard number must be 10 Characters Long With A-Z characters & 0-9 Digits",
            maxlength: "PanCard number cannot exceed 10 characters"
        },
        AdharNo: {
            required: "Please enter your Adhar number",
            minlength: "Adhar number must be at least 12 characters long",
            maxlength: "Adhar number cannot exceed 12 characters"
        },
        errorClass: "error"
    }
});

/* This method will delete a row */
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
