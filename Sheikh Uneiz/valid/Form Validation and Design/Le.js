function formValid(fieldId, event) {
    var allClasses = document.querySelectorAll('.fieldVal');
    for (var i = 0; i < allClasses.length; i++) {
        var inputId = allClasses[i].getAttribute('data-val-id');
        var fieldName = allClasses[i].getAttribute('data-field');
        var errorId = allClasses[i].getAttribute('data-error-id');
        if (allClasses[i].value == "") {
            var fieldName = allClasses[i].getAttribute('data-field');
            document.getElementById(errorId).innerHTML = `Please Enter Your ${fieldName}`;
        } else {
            document.getElementById(errorId).innerHTML = "";
            document.getElementById(inputId).innerHTML = allClasses[i].value;
        }
    }
}