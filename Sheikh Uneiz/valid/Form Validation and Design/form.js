function FormValidation() {

    let f_name = document.getElementById('fname').value;
    let l_name = document.getElementById('lname').value;
    let mail = document.getElementById('Email').value;
    let mobile = document.getElementById('num').value;
    let Qualification = document.getElementById('Qualification').value;
    let Address = document.getElementById('Address').value;
    let gender1 = document.getElementById('Gender1');
    let gender2 = document.getElementById('Gender2');
    let mArried = document.getElementById('married');
    let unMarried = document.getElementById('Unmarried');
    let html = document.getElementById('html');
    let css = document.getElementById('css');
    let bootstrap = document.getElementById('bootstrap');
    let java = document.getElementById('java');



    var validationFnameError = "Please Enter Your First Name !";
    var validationLnameError = "Please Enter Your Last Name !";
    var validationEmailError = "Please Enter Your Email ID !";
    var validationNumError = "Please Enter Your Mobile Number !";
    var qualifyError = "Please Enter Your Qualification !";
    var AddError = "Please Enter Your Proper Address !";
    var GenderError = "Please choose your Gender: (Male or Female) !";
    var maritalError = "Please choose your Marital Statis !";
    var skillError = "Please choose Options !"



    if (f_name == "") {
        document.getElementById('validationFname').innerHTML = validationFnameError;
    } else {
        document.getElementById('validationFname').innerHTML = '';
    }

    if (l_name == "") {
        document.getElementById('validationLname').innerHTML = validationLnameError;
    } else {
        document.getElementById('validationLname').innerHTML = '';
    }

    if (mail == "") {
        document.getElementById('validationEmail').innerHTML = validationEmailError;
    } else {
        document.getElementById('validationEmail').innerHTML = '';
    }

    if (mobile == "") {
        document.getElementById('validationNum').innerHTML = validationNumError
    } else {
        document.getElementById('validationNum').innerHTML = '';
    }

    if (Qualification == "") {
        document.getElementById('qualify').innerHTML = qualifyError;
    } else {
        document.getElementById('qualify').innerHTML = '';
    }

    if (Address == "") {
        document.getElementById('Add').innerHTML = AddError;
    } else {
        document.getElementById('Add').innerHTML = '';
    }

    if ((gender1.checked == false) && (gender2.checked == false)) {
        document.getElementById('Gender').innerHTML = GenderError;

    } else {
        document.getElementById('Gender').innerHTML = '';
    }

    if ((mArried.checked == false) && (unMarried.checked == false)) {
        document.getElementById('Marital').innerHTML = maritalError;

    } else {
        document.getElementById('Marital').innerHTML = '';
    }

    if ((html.checked == false) && (css.checked == false) && (bootstrap.checked == false) && (java.checked == false)) {
        document.getElementById('Skills').innerHTML = skillError;

    } else {
        document.getElementById('Skills').innerHTML = '';
    }
}





function removeError(fieldId, errorId) {
    var fieldValue = document.getElementById(fieldId).value;
    if (fieldValue != "") {
        document.getElementById(errorId).innerHTML = '';
    }



    let f_name = document.getElementById('fname').value;

    var element = document.getElementById("userDetails");

    if (f_name != "") {
        element.classList.remove("d-none");
    }



    var l_name = document.getElementById('lname').value;
    var mail = document.getElementById('Email').value;
    var mobile = document.getElementById('num').value;
    var Qualification = document.getElementById('Qualification').value;
    var Address = document.getElementById('Address').value;
    var gender1 = document.getElementById('Gender1');
    var gender2 = document.getElementById('Gender2');
    var mArried = document.getElementById('married');
    var unMarried = document.getElementById('Unmarried');
    var html = document.getElementById('html');
    var css = document.getElementById('css');
    var bootstrap = document.getElementById('bootstrap');
    var java = document.getElementById('java');


    document.getElementById('Fullname').innerHTML = f_name + " " + l_name;
    document.getElementById('E_mail').innerHTML = mail;
    document.getElementById('Mb_no').innerHTML = mobile;
    document.getElementById('qualifiy').innerHTML = Qualification;
    document.getElementById('addressShow').innerHTML = Address;


    if (gender1.checked) {
        document.getElementById('genderShow').innerHTML = gender1.value;
    }
    if (gender2.checked) {
        document.getElementById('genderShow').innerHTML = gender2.value;
    }


    if (mArried.checked) {
        document.getElementById('maritalShow').innerHTML = mArried.value;
    }
    if (unMarried.checked) {
        document.getElementById('maritalShow').innerHTML = unMarried.value;
    }

    var skillShow = '';

    if (html.checked == true) {
        skillShow += ' ' + html.value;
    }

    if (css.checked == true) {
        skillShow += ' ' + css.value;
    }

    if (bootstrap.checked == true) {
        skillShow += ' ' + bootstrap.value;
    }

    if (java.checked == true) {
        skillShow += ' ' + java.value;
    }

    document.getElementById('skillShow').innerHTML = skillShow;


    var userFname = document.getElementById("userFname");
    var userEmail = document.getElementById("userEmail");
    var userMb = document.getElementById("userMb");
    var userQualifiy = document.getElementById("userQualifiy");
    var userAddress = document.getElementById("userAddress");
    var userSkills = document.getElementById("userSkills");
    var userGender = document.getElementById("userGender");
    var userMarital = document.getElementById("userMarital");



    if (f_name != "") {
        userFname.classList.remove("d-none");
    }
    if (mail != "") {
        userEmail.classList.remove("d-none");
    }
    if (mobile != "") {
        userMb.classList.remove("d-none");
    }
    if (Qualification != "") {
        userQualifiy.classList.remove("d-none");
    }
    if (Address != "") {
        userAddress.classList.remove("d-none");
    }
    if ((html.checked == true) || (css.checked == true) || (bootstrap.checked == true) || (java.checked == true)) {
        userSkills.classList.remove("d-none");
    }
    if ((gender1.checked == true) || (gender2.checked == true)) {
        userGender.classList.remove("d-none");
    }
    if ((mArried.checked == true) || (unMarried.checked == true)) {
        userMarital.classList.remove("d-none");
    }


}