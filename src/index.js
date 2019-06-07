const contrasena = document.getElementById("contrasena");
const btn1 = document.getElementById("btn1");
const respuestaCorrecta = "LABORATORIA"
let contador = 0;

btn1.addEventListener('click', () => {
  if (contrasena.value == respuestaCorrecta)
  {
    document.getElementById('div1').style.display = "none"
    document.getElementById('div2').style.display = "block"
}
  else {
    document.getElementById('div1').style.display = "block"
    document.getElementById('div2').style.display = "none"
    document.getElementById('mensjPasswordIncorrecta').innerHTML="Contraseña incorrecta, inténtalo nuevamente"
    contador ++
    if(contador===3){
      document.getElementById('div1').style.display = "none"
      document.getElementById('div2').style.display = "none"
      document.getElementById('div4').style.display = "block"
    }
}
})
