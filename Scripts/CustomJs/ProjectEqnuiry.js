$("#btnAddService").on("click", function () {
    var rowHtml = '<tr><td><div class="form-group">' + $(".ServicesDropdown").html() + '</div></td>'
        + '<td class="text-center"><a onclick="deleteRow(this)" class="icon-btn"><i class="las la-trash text-danger"></i></a></td>';
    $("#tbl").append(rowHtml);
});

$("#btnAddDocument").on("click", function () {
    var rowHtml = '<tr><td><div class="form-group "><input type="file" class="form-control UploadDocuments requiredvalidation" name="fileupload" accept=".pdf, .xlsx, .pptx, .docx" /><span class="field-validation-error text-danger" style="display: none;">This field is required.</span></div></td>'
        + '<td class="text-center"><a onclick="deleteRow(this)" class="icon-btn"><i class="las la-trash text-danger"></i></a></td>';
    $("#DocumentTBL").append(rowHtml);
});

$("#btnAddImage").on("click", function () {
    var rowHtml = '<tr><td><div class="form-group "><input type="file" class="form-control UploadImage requiredvalidation" name="fileImage" /><span class="field-validation-error text-danger" style="display: none;">This field is required.</span></div></td>'
        + '<td class="text-center"><a onclick="deleteRow(this)" class="icon-btn"><i class="las la-trash text-danger"></i></a></td>';
    $("#imageTBL").append(rowHtml);
});

// Attach the event handler to a parent element that exists when the page loads
$("#DocumentTBL").on("change", ".UploadDocuments", function () {
    var fileInput = $(this);
    var selectedFiles = fileInput.prop("files");
    if (selectedFiles.length > 0) {
        var fileName = selectedFiles[0].name;
        var fileExtension = fileName.slice(((fileName.lastIndexOf(".") - 1) >>> 0) + 2);

        var allowedExtensions = ["pdf", "xlsx", "pptx", "docx"];
        if ($.inArray(fileExtension.toLowerCase(), allowedExtensions) === -1) {
            // File extension is not allowed; display an error message.
            alert("Invalid file type. Please select a PDF, Excel, PowerPoint, or Word document.");
            fileInput.val(""); // Clear the file input
        }
    }
});

// Similarly, for the UploadImage elements
$("#imageTBL").on("change", ".UploadImage", function () {
    var imageInput = $(this);
    var selectedFiles = imageInput.prop("files");
    if (selectedFiles.length > 0) {
        var fileName = selectedFiles[0].name;
        var fileExtension = fileName.slice(((fileName.lastIndexOf(".") - 1) >>> 0) + 2);

        var allowedExtensions = ["jpg", "jpeg", "png", "gif"];
        if ($.inArray(fileExtension.toLowerCase(), allowedExtensions) === -1) {
            // File extension is not allowed; display an error message.
            alert("Invalid image type. Please select a JPEG, PNG, or GIF image.");
            imageInput.val(""); // Clear the image input
        }
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

$("#frmData").validate({
    rules: {
        "ProjectEnquiry.CustomerMobNo": {
            required: true,
            minlength: 10,
            maxlength: 10,
            digits: true
        },
        "ProjectEnquiry.OwnerMobNo": {
            required: true,
            minlength: 10,
            maxlength: 10,
            digits: true
        },
        "ProjectEnquiry.AdharLinkMobNo": {
            required: true,
            minlength: 10,
            maxlength: 10,
            digits: true
        },
        "ProjectEnquiry.ReferencePersonNo": {
            required: true,
            minlength: 10,
            maxlength: 10,
            digits: true
        },
        "ProjectEnquiry.ResponsiblePersonNo": {
            required: true,
            minlength: 10,
            maxlength: 10,
            digits: true
        }

    },
    messages: {
        "ProjectEnquiry.CustomerMobNo": {
            required: "Please enter your mobile number",
            minlength: "Mobile number must be at least 10 characters long",
            maxlength: "Mobile number cannot exceed 10 characters"
        },
        "ProjectEnquiry.OwnerMobNo": {
            required: "Please enter your mobile number",
            minlength: "Mobile number must be at least 10 characters long",
            maxlength: "Mobile number cannot exceed 10 characters"
        },
        "ProjectEnquiry.AdharLinkMobNo": {
            required: "Please enter your mobile number",
            minlength: "Mobile number must be at least 10 characters long",
            maxlength: "Mobile number cannot exceed 10 characters"
        },
        "ProjectEnquiry.ReferencePersonNo": {
            required: "Please enter your mobile number",
            minlength: "Mobile number must be at least 10 characters long",
            maxlength: "Mobile number cannot exceed 10 characters"
        },
        "ProjectEnquiry.ResponsiblePersonNo": {
            required: "Please enter your mobile number",
            minlength: "Mobile number must be at least 10 characters long",
            maxlength: "Mobile number cannot exceed 10 characters"
        },
        errorClass: "error"
    }
});