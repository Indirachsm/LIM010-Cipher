const contrasena = document.getElementById("contrasena");
const btnIngresar = document.getElementById("btnIngresar");
const respuestaCorrecta = "LABORATORIA"
let contador = 0;
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
let inputTexto = document.getElementById('inputTexto');
let btnCifrar = document.getElementById('btnCifrar');
let btnDescifrar = document.getElementById('btnDescifrar');
let outputResultado = document.getElementById('outputResultado');
let offset = document.getElementById('offset');

btnIngresar.addEventListener('click', () => {
  if (contrasena.value == respuestaCorrecta)
  {
    div1.classList.add('ocultar');
    div2.classList.remove('ocultar');
  }
  else {
    document.getElementById('mensjPasswordIncorrecta').innerHTML="Contraseña incorrecta, inténtalo nuevamente";
    contador ++;
    if(contador===3){
      div1.classList.add('ocultar');
      div2.classList.add('ocultar');
      div3.classList.remove('ocultar');
    }
}
});

btnCifrar.addEventListener("click", () =>{
  let string = inputTexto.value;
  let offsetC = offset.value;
  outputResultado.value = cipher.encode(offsetC, string);
  });

btnDescifrar.addEventListener("click", () =>{
  let string = inputTexto.value;
  let offsetC = offset.value;

  outputResultado.value = cipher.decode(offsetC, string);
});
