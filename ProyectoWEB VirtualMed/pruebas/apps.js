var getDatos = function () {
    var name =document.getElementById("name").value;
    var age =document.getElementById("age").value;
    console.log (name + "  -  " + age );
    if (name==""){
        document.getElementById("name").focus();
    }else {
        if (age == ""){
            document.getElementById("age").focus();
        } else {
            document.getElementById("name").value="";
            document.getElementById("age").value="";
            document.getElementById("name").focus();
        }
    }
}