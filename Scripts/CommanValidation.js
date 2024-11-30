/*jQuery(document).ready(function () {
    //form submitting
    $(".submit-data").click(function (e) {
        e.preventDefault();
        var isAllValidated = true;
        $(".card-body").find(".requiredvalidation").each(function () {
            var validationField = $(this);
            if (validationField.val() == '') {
                isAllValidated = false;
                $(this).closest(".form-group").find(".field-validation-error").show();
            } else {
                $(this).closest(".form-group").find(".field-validation-error").hide();
            }
        });

        //submitting form
        if (isAllValidated) {
            //disable save buttons
            $(".submit-data").attr("disabled", "disabled")
            $("#frmData").submit();
        }
    });
});*/

jQuery(document).ready(function () {
    // Form submitting
    $(".submit-data").click(function (e) {
        e.preventDefault();
        var isAllValidated = true;
        var firstEmptyField = null; // Store the first empty field
        var firstInvalidField = null; // Store the first invalid field

        $(".card-body").find(".requiredvalidation").each(function () {
            var validationField = $(this);
            var fieldValue = validationField.val().trim(); // Trim any leading/trailing spaces

            if (fieldValue === '') {
                isAllValidated = false;
                var errorMessage = validationField.closest(".form-group").find(".field-validation-error");
                errorMessage.text("This field is required.").show();

                // Store the first empty field
                if (firstEmptyField === null) {
                    firstEmptyField = validationField;
                }
            } else {
                var errorMessage = validationField.closest(".form-group").find(".field-validation-error");
                errorMessage.hide();
            }
        });
        $(".card-body").find(".mobile").each(function () {
            var validationField = $(this);
            var fieldValue = validationField.val().trim(); // Trim any leading/trailing spaces

                if (fieldValue.length < 10) {
                isAllValidated = false;
                var errorMessage = validationField.closest(".form-group").find(".field-validation-error");
                errorMessage.text("").show();

                    // Focus on the invalid field
                    validationField.focus();
                    scrollToField(validationField);

                    return false;
            } else {
                var errorMessage = validationField.closest(".form-group").find(".field-validation-error");
                errorMessage.hide();

            }
        });
        $(".card-body").find(".email").each(function () {
            var validationField = $(this);
            var fieldValue = validationField.val().trim(); // Trim any leading/trailing spaces
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(fieldValue)) {
                isAllValidated = false;
                var errorMessage = validationField.closest(".form-group").find(".field-validation-error");
                errorMessage.text("Please enter a valid email address.").show();

                // Focus on the invalid field
                validationField.focus();
                scrollToField(validationField);

                return false;
            } else {
                var errorMessage = validationField.closest(".form-group").find(".field-validation-error");
                errorMessage.hide();
            }
        });

        $(".card-body").find(".adhar").each(function () {
            var validationField = $(this);
            var fieldValue = validationField.val().trim(); // Trim any leading/trailing spaces

            if (fieldValue.length !== 12) {
                isAllValidated = false;
                var errorMessage = validationField.closest(".form-group").find(".field-validation-error");
                errorMessage.text("Please enter a valid Aadhar card number.").show();

                // Focus on the invalid field
                validationField.focus();
                scrollToField(validationField);

                return false;
            } else {
                var errorMessage = validationField.closest(".form-group").find(".field-validation-error");
                errorMessage.hide();
            }
        });

        // Focus on the first empty or invalid required field
        if (!isAllValidated && firstEmptyField !== null) {
            scrollToField(firstEmptyField).focus();
        } else if (!isAllValidated && firstInvalidField !== null) {
            scrollToField(firstInvalidField).focus();//
        }

        function scrollToField(field) {
            var position = field.offset().top - 100;
            $("html, body").animate({
                scrollTop: position
            }, 2000);
            field.focus();
        }
        
        // Submitting form
        if (isAllValidated) {
            Swal.fire({
                title: "Confirm Submission",
                text: "Are you sure you want to submit the form?",
                icon: "warning",
                buttonsStyling: false,
                showCancelButton: true,
                confirmButtonText: "Yes, submit it!",
                cancelButtonText: "Cancel",
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-secondary ml-1"
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    // User confirmed, submit the form
                    $("#frmData").submit();
                } else {
                    // User canceled, enable the submit button again
                    $(".submit-data").removeAttr("disabled");
                }
            });

        }
    });
    // Hide error message when user starts typing
    $(".requiredvalidation, .email, .adhar, .mobile").on("input", function () {
        var validationField = $(this);
        var errorMessage = validationField.closest(".form-group").find(".field-validation-error");
        errorMessage.hide();
    });
});
/*Accept only characters*/
$(".txtOnly").keypress(function (e) {
    var key = e.keyCode;
    if (key >= 48 && key <= 57) {
        e.preventDefault();
    }
});

/*Accept only numbers*/
$('.numberonly').keypress(function (e) {
    var charCode = (e.which) ? e.which : e.keyCode
    if (String.fromCharCode(charCode).match(/[^0-9]/g))
        return false;
});
$(document).on('keypress','.floatvalue',function (e) {
    var charCode = (e.which) ? e.which : e.keyCode;
    var inputValue = $(this).val();

    // Check if the pressed key is not a digit or a decimal point
    if (String.fromCharCode(charCode).match(/[^0-9.]/g)) {
        return false;
    }

    // Check if there's already a decimal point and the pressed key is another decimal point
    if (inputValue.indexOf('.') !== -1 && String.fromCharCode(charCode) === '.') {
        return false;
    }
});

$('.PANCard').keypress(function (e) {
    var charCode = (e.which) ? e.which : e.keyCode;
    var charTyped = String.fromCharCode(charCode);
    var currentValue = $(this).val() + charTyped;

    // Allow backspace (keyCode 8) and delete (keyCode 46)
    if (charCode == 8 || charCode == 46)
        return true;

    // Check if the entered value matches the PAN card format
    if (currentValue.length <= 10) {
        if (currentValue.length <= 5) {
            // First five characters must be alphabets
            if (!/[a-zA-Z]/.test(charTyped)) {
                e.preventDefault();
                return false;
            }
        } else if (currentValue.length >= 6 && currentValue.length <= 9) {
            // Next four characters must be digits
            if (!/\d/.test(charTyped)) {
                e.preventDefault();
                return false;
            }
        } else if (currentValue.length === 10) {
            // Tenth character must be an alphabet
            if (!/[a-zA-Z]/.test(charTyped)) {
                e.preventDefault();
                return false;
            }
        }
    } else {
        // Prevent entering more than 10 characters
        e.preventDefault();
        return false;
    }
});
$(".PANCard").on('input', function () {
    var start = this.selectionStart,
        end = this.selectionEnd;
    this.value = this.value.toUpperCase();
    this.setSelectionRange(start, end);
});
$(".CapitalName").on('input', function () {
    var start = this.selectionStart,
        end = this.selectionEnd;
    this.value = this.value.toUpperCase();
    this.setSelectionRange(start, end);
});
function ConfirmBox(title, callbackfunction) {
    Swal.fire({
        title: title,
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            callbackfunction();
        }
    })
}

function successMessage(message) {
    Swal.fire({
        icon: 'success',
        title: message,
        showConfirmButton: true
    });
}

function errorMessage(message) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: message,
    });
}

function warningMessage(message) {
    Swal.fire({
        icon: 'warning',
        title: '',
        text: message,
    });
}

function ConfirmBox(title, callbackfunction) {
    Swal.fire({
        title: title,
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            callbackfunction();
        }
    })
}
// Delete Function
document.addEventListener("DOMContentLoaded", function () {

    var deleteLinks = document.querySelectorAll('.delete-link');

    deleteLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var deleteUrl = this.href;


            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',   
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {

                    window.location.href = deleteUrl;
                }
            });
            
            return false;
        });
    });
});
