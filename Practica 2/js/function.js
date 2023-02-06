function validate() {
    let messages = [];
    var patFname = document.getElementById("fname").value.trim();

    if (patFname.length < 3) {
        messages.push("Verificar dato: Nombre de quien realiza");

        Swal.fire({
            icon: "warning",
            text: "Verificar Campo: Nombre de quien realiza",
            footer: "Ingresa un nombre valido",
        });
        return false;
    }

    var patCURP = document.getElementById("lCurp").value.trim();
    var expCRUP = /^[a-zA-Z]{4}(\d{6})([a-zA-Z]{6})(([0-9]){2})?$/;

    if (!expCRUP.test(patCURP)) {
        Swal.fire({
            icon: "error",
            text: "Verificar Campo: CURP",
            footer: "Campo no cumple con patron",
        });
        return false;
    }

    var patName = document.getElementById("name").value.trim();

    if (patName.length < 3) {
        Swal.fire({
            icon: "warning",
            text: "Verificar Campo: Nombre",
            footer: "Ingresa un nombre valido",
        });
        return false;
    }

    var patfirstName = document.getElementById("firstName").value.trim();

    if (patfirstName.length < 3) {
        Swal.fire({
            icon: "warning",
            text: "Verificar Campo: Apellido Paterno",
            footer: "Ingresa un apellido valido",
        });
        return false;
    }

    var patlastName = document.getElementById("lastName").value.trim();

    if (patlastName.length < 3) {
        Swal.fire({
            icon: "warning",
            text: "Verificar Campo: Apellido Materno",
            footer: "Ingresa un apellido valido",
        });
        return false;
    }

    var patTel = document.getElementById("tel").value.trim();
    var expTel = /^(\d{10})$/;

    if (!expTel.test(patTel)) {
        Swal.fire({
            icon: "error",
            text: "Verificar Campo: Telefono",
            footer: "Campo no cumple con patron: XXXXXXXXXX",
        });
        return false;
    }

    var patCel = document.getElementById("cel").value.trim();
    var expCel = /^(\d{10})$/;

    if (!expCel.test(patCel)) {
        Swal.fire({
            icon: "error",
            text: "Verificar Campo: Celular",
            footer: "Campo no cumple con patron: XXXXXXXXXX",
        });
        return false;
    }

    var patMail = document.getElementById("mail").value.trim();
    var expMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!expMail.test(patMail)) {
        Swal.fire({
            icon: "error",
            text: "Verificar Campo: Correo",
            footer: "Campo no cumple con patron: algo@mail.com",
        });
        return false;
    }

    var patNivel = document.getElementById("mes").value.trim();

    if (patNivel.length == 0) {
        Swal.fire({
            icon: "info",
            text: "Verificar Campo: Nivel",
            footer: "Selecciona una opcion",
        });
        return false;
    }

    var patAsunto = document.getElementById("mes1").value.trim();

    if (patAsunto.length == 0) {
        Swal.fire({
            icon: "info",
            text: "Verificar Campo: Asunto",
            footer: "Selecciona una opcion",
        });
        return false;
    }
}