const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

let arrMultidimecional = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
]

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado
  //* Se limpia el campo de la etiquetas "textarea"
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
  stringEncriptada = stringEncriptada.toLowerCase();
  
  for (let i = 0; i < arrMultidimecional.length; i++) {
    if (stringEncriptada.includes(arrMultidimecional[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(arrMultidimecional[i][0], arrMultidimecional[i][1]);
    }
  }
  
  return stringEncriptada;
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(textArea.value);
  mensaje.value = textoDesencriptado
  //* Se limpia el campo de la etiquetas "textarea"
  textArea.value = "";
  // mensaje.style.backgroundImage = "none";
}

function desencriptar(stringDesencriptada) {
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < arrMultidimecional.length; i++) {
    if (stringDesencriptada.includes(arrMultidimecional[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(arrMultidimecional[i][1], arrMultidimecional[i][0]);
    }
  }

  return stringDesencriptada;
}