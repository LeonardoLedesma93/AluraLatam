var textoPrincipal = document.querySelector("#cuadro__principal__texto");

    var textoSecundario = document.querySelector("#cuadro__secundario__contenido__texto2");


    function btnDesencriptar(){
        var textoEncriptado = desencriptarTexto(textoPrincipal.value);
        textoEncriptado = textoSecundario.value;
    }

    function desencriptarTexto(stringEncriptar){
        let llaves = [["ai", "a"],["enter","e"],["imes","i"],["ober","o"],["ufat","u"]];
        for (let i = 0; i < llaves.length; i++) {
            if (stringEncriptar.includes(llaves[i][0])) {
                stringEncriptar = stringEncriptar.replaceAll(llaves[i][0], llaves[i][1])
            }
        } return stringEncriptar
    }