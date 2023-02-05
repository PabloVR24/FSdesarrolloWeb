function validate() {
    var patCURP = document.getElementById("fname").value;
    var expCRUP = /^[a-zA-Z]{4}\/;

    /*
  /^[A-Z]{1,2}\s\d{4}\s([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]){3}$/;
  ^: el emparejamiento se debe realizar desde el principio de la cadena.
[A-Z]: cualquier carácter entre la A mayúscula y la Z mayúscula.
{1,2}: uno o dos caracteres.
\s: un espacio en blanco.
\d: un dígito.
{4}: cuatro dígitos.
\s: un espacio en blanco.
([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]): cualquier carácter entre la B mayúscula y la Z mayúscula, excepto las vocales.
{3}: tres caracteres.
$: el emparejamiento se debe realizar hasta el final de la cadena.
  
VARA 971014 MCLLNN 09
VARP 991202 HCLLNB 05
*/
}