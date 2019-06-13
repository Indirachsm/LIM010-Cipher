window.cipher = {
  encode: (offsetC, string) => {
    let mensajeCifrado = "";
  for (let i = 0; i < string.length; i++) {
    let asciiNumber = string.charCodeAt(i);
    if (asciiNumber >= 65 && asciiNumber <= 90) {
    mensajeCifrado += String.fromCharCode((asciiNumber - 65 + parseInt(offsetC)) % 26 + 65);
    }
    else {
    mensajeCifrado+= string[i];
    }
  }
  return mensajeCifrado;
  },
  decode: (offsetC, string) => {
    let caractercifrado='';
    let mensajeDescifrado = '';
  for (let i = 0; i < string.length; i++) {
    let asciiNumber = string.charCodeAt(i);
    if (asciiNumber >= 65 && asciiNumber <= 90) {
    caractercifrado = (asciiNumber - 65 - parseInt(offsetC)) % 26 + 65;
    if (caractercifrado<65) {
    caractercifrado = caractercifrado+26;
    }
    mensajeDescifrado += String.fromCharCode(caractercifrado);
    }
    else if (asciiNumber >= 97 && asciiNumber <= 122) {
        mensajeDescifrado += String.fromCharCode((asciiNumber - 97 - parseInt(offsetC)) % 26 + 97);
      }
      else {
        mensajeDescifrado+=string[i];
      }
    }
    return mensajeDescifrado;
  }
};
