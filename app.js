asignarTexto('h1', 'WEB PARA ENCRIPTAR Y DESENCRIPTAR PALABRAS');

function asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//uso de diccionario
function encriptar() {
    var palabra = document.getElementById("palabra").value.toLowerCase(); //Pasar a minusculas
    var texto_encriptado = '';
    var conversion = {'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat'}; //diccionario
    if (/[^a-z]/.test(palabra)) {
        alert("No se permiten caracteres especiales");
        return;
    }else{
    for (var letra of palabra) {
        if (letra in conversion) {
            texto_encriptado += conversion[letra];
        } else {
            texto_encriptado += letra; // Mantiene letras que no están en la conversión
        }
    }
    }
    document.getElementById("resultado").value = texto_encriptado; //textarea
}
//uso de funcion replace
function desencriptar() {
    var palabra_encriptada = document.getElementById("resultado").value.toLowerCase;
    if (/[^a-z]/.test(palabra)) {
        alert("No se permiten caracteres especiales");
        return;
    }else{
    var texto_desencriptado = palabra_encriptada.replace(/enter/g, 'e')
                                               .replace(/imes/g, 'i')
                                               .replace(/ai/g, 'a')
                                               .replace(/ober/g, 'o')
                                               .replace(/ufat/g, 'u');
    }
     
    document.getElementById("resultado").value = texto_desencriptado;
}

function copiar(){
    var textoCopiar = document.getElementById("resultado").value;
    
    navigator.clipboard.writeText(textoCopiar)
  .then(() => {
    console.log('Texto copiado al portapapeles')
  })
  .catch(err => {
    console.error('Error al copiar al portapapeles:', err)
  })
}

