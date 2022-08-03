
    //var botonEncriptar = document.querySelector("#boton__encriptador")

    var textoPrincipal = document.querySelector("#cuadro__principal__texto");

    var textoSecundario = document.querySelector("#cuadro__secundario__contenido__texto2");


    function btnEncriptar(){
        var textoEncriptado = encriptarTexto(textoPrincipal.value);
        textoSecundario.value = textoEncriptado;
    }

    function encriptarTexto(stringEncriptar){
        let llaves = [["a", "ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
        for (let i = 0; i < llaves.length; i++) {
            if (stringEncriptar.includes(llaves[i][0])) {
                stringEncriptar = stringEncriptar.replaceAll(llaves[i][0], llaves[i][1])
            }
        } return stringEncriptar
    }
