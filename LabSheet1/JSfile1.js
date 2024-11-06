function validateForm(event){
    var form=event.target;
    if(!form.checkValidity()){
        event.preventDefault();
    }else if (form.name.value===""){
        alert("Enter your name");
    }else if(form.email.value==="" || form.email.validity.valid){
        alert("Enter valid email");
    }
}