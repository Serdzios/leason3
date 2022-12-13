function completeAndRedirect() {
    var form = document.forms['myform'];
    text.innerHTML = "Веденні вами дані: <br> First name : " + form.elements.name.value + "<br> Last name : " + form.elements.lastname.value + "<br> Adress : " + form.elements.address.value;
}