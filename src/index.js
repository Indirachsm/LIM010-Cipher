
const contrasena = getElementById('validar').value;
const btn1 = getElementById('btn1');

btn1.addEventListener('click', () => {
  if (contrasena == "LABORATORIA")
  {
  document.getElementById('div1').style.display = "none"
  document.getElementById('div2').style.display = "block"
}
  else {
  document.getElementById('div1').style.display = "none"
  document.getElementById('div3').style.display = "block"
}});
