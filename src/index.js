const contrasena = document.getElementById("contrasena");
const btn1 = document.getElementById("btn1");
const respuestaCorrecta = "LABORATORIA"
let contador = 0;
const div1 = document.getElementById('div1')
const div2 = document.getElementById('div2')
const div3 = document.getElementById('div3')
let inputTexto = document.getElementById('inputTexto')
let btnCifrar = document.getElementById('btnCifrar')
let btnDescifrar = document.getElementById('btnDescifrar')
let outputResultado = document.getElementById('outputResultado')
let offset = document.getElementById('offset')
let textoCifrado = ""

btn1.addEventListener('click', () => {
  if (contrasena.value == respuestaCorrecta)
  {
    div1.classList.add('ocultar')
    div2.classList.remove('ocultar')
}
  else {
    document.getElementById('mensjPasswordIncorrecta').innerHTML="Contraseña incorrecta, inténtalo nuevamente"
    contador ++
    if(contador===3){
      div1.classList.add('ocultar')
      div2.classList.add('ocultar')
      div3.classList.remove('ocultar')
    }
}
})

btnCifrar.addEventListener("click", () =>{
  let string = inputTexto.value;
  let offsetC = offset.value;
  let mensajeCifrado = ""
for (let i = 0; i < string.length; i++) {
  let asciiNumber = string.charCodeAt(i);
  if (asciiNumber >= 65 && asciiNumber <= 90) {
  mensajeCifrado += String.fromCharCode((asciiNumber - 65 + parseInt(offsetC)) % 26 + 65);
  }
  else {
  mensajeCifrado+= string[i];
  }
}
outputResultado.value = mensajeCifrado
})

btnDescifrar.addEventListener("click", () =>{
  let string = inputTexto.value;
  let offsetC = offset.value;
  let caractercifrado='';
  let mensajeDescifrado = ""
for (let i = 0; i < string.length; i++) {
  let asciiNumber = string.charCodeAt(i);
  if (asciiNumber >= 65 && asciiNumber <= 90) {
    caractercifrado=(asciiNumber - 65 - parseInt(offsetC)) % 26 + 65;
    if (caractercifrado<65) {
      caractercifrado=caractercifrado+26;
    }
    mensajeDescifrado += String.fromCharCode(caractercifrado);



  }else if (asciiNumber >= 97 && asciiNumber <= 122) {
      mensajeCifrado += String.fromCharCode((asciiNumber - 97 - parseInt(offsetC)) % 26 + 97);
    }
    else {
      mensajeDescifrado+=string[i];
    }
  }
  outputResultado.value = mensajeDescifrado
})
