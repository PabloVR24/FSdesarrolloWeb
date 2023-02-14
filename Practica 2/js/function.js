function validate() {
    let formulario = document.getElementById("forms")
    let patFname = document.getElementById("fname").value.trim();

    if (patFname.length < 3) {
        message(
            "error",
            "Verificar Campo: Nombre de quien realiza",
            "Ingresa un nombre valido"
        );
        return false
    }

    let patCURP = document.getElementById("lCurp").value.trim();
    let expCRUP = /^[a-zA-Z]{4}(\d{6})([a-zA-Z]{6})(([a-zA-Z0-9]){2})?$/;

    if (!expCRUP.test(patCURP)) {
        message("error", "Verificar Campo: CURP", "Campo no cumple con patron");
    } else {
        let year = patCURP[4] + patCURP[5];
        let mth = patCURP[6] + patCURP[7];
        let day = patCURP[8] + patCURP[9];

        edad = getDate(day, mth, year);
        let gradoEscolar = "";
        if (edad >= 3 && edad < 6) {
            gradoEscolar = "Preescolar";
        } else if (edad >= 6 && edad < 12) {
            gradoEscolar = "Primaria";
        } else if (edad >= 12 && edad < 15) {
            gradoEscolar = "Secundaria";
        } else {
            message("error", "No se podra agendar la cita en Linea", "Acudir personalmente");
            formulario.reset()
            return false;
        }
        console.log(gradoEscolar);
    }

    function getDate(day, mth, year) {
        let today = new Date();
        if (year > 30) {
            yr = 19;
        } else {
            yr = 20;
        }
        let cumple = new Date(yr + "" + year + "-" + mth + "-" + day);
        let age = today.getFullYear() - cumple.getFullYear();

        if (
            today.getMonth() < cumple.getMonth() ||
            (today.getMonth() == cumple.getMonth() &&
                today.getDate() < cumple.getDate())
        ) {
            age--;
        }
        return age;
    }

    let patName = document.getElementById("name").value.trim();

    if (patName.length < 3) {
        message("warning", "Verificar Campo: Nombre", "Ingresa un nombre valido");
    }

    let patfirstName = document.getElementById("firstName").value.trim();

    if (patfirstName.length < 3) {
        message(
            "warning",
            "Verificar Campo: Apellido Paterno",
            "Ingresa un apellido valido"
        );
    }

    let patlastName = document.getElementById("lastName").value.trim();

    if (patlastName.length < 3) {
        message(
            "warning",
            "Verificar Campo: Apellido Materno",
            "Ingresa un apellido valido"
        );
    }

    let patTel = document.getElementById("tel").value.trim();
    let expTel = /^(\d{10})$/;

    if (!expTel.test(patTel)) {
        message(
            "error",
            "Verificar Campo: Telefono",
            "Campo no cumple con patron: XXXXXXXXXX"
        );
    }

    let patCel = document.getElementById("cel").value.trim();
    let expCel = /^(\d{10})$/;

    if (!expCel.test(patCel)) {
        message(
            "error",
            "Verificar Campo: Celular",
            "Campo no cumple con patron: XXXXXXXXXX"
        );
    }



    let patNivel = document.getElementById("mes").value.trim();

    if (patNivel.length == 0) {
        message("info", "Verificar Campo: Nivel", "Selecciona una opcion");
    }

    let patAsunto = document.getElementById("mes1").value.trim();

    if (patAsunto.length == 0) {}

    function message(icono, texto, pie) {
        Swal.fire({
            icon: icono,
            text: texto,
            footer: pie,
        });
    }
}