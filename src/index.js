const contrasena = document.getElementById("contrasena");
const btn1 = document.getElementById("btn1");
const respuestaCorrecta = "LABORATORIA"

btn1.addEventListener('click', () => {
  if (contrasena.value == respuestaCorrecta)
  {
    document.getElementById('div1').style.display = "none"
    document.getElementById('div3').style.display = "none"
    document.getElementById('div2').style.display = "block"
}
  else {
    document.getElementById('div1').style.display = "none"
    document.getElementById('div2').style.display = "none"
    document.getElementById('div3').style.display = "block"
}});
