function patron() {

    $.post(
        '/Mapa/cookieStart', {
            tipocookie: "mapapatron",
            valorcookie: "patron"
        },
        function (data) {
            var a = document.getElementById("poligono");
            a.setAttribute("fill", "#FFBE52");

            var a = document.getElementById("lineas");
            a.setAttribute("fill", "#C6F14E");

            var a = document.getElementById("rect1");
            a.setAttribute("fill", "#406CA8");

            var a = document.getElementById("rect2");
            a.setAttribute("fill", "#406CA8");

            var a = document.getElementById("lineainclinada");
            a.setAttribute("fill", "#C13E99");

            var a = document.getElementById("circulo");
            a.setAttribute("fill", "#C6F14E");


            var elements = document.getElementsByTagName("path");

            for (var i = 0; i < elements.length; i++) {
                var atributosclase = elements[i].getAttribute('class');
                if (atributosclase.search("seleccionado") > 0) {
                    elements[i].setAttribute("class", "land seleccionado");
                } else {
                    /*console.log(elements[i].getAttribute('class'));*/
                    elements[i].setAttribute("class", "land");
                }
            }

        }
    ).fail(function (res) {
        console.log("Error: en ajax1");
    });









}

function patronnegro() {

    $.post(
        '/Mapa/cookieStart', {
            tipocookie: "mapapatron",
            valorcookie: "patronnegro"
        },
        function (data) {
            var a = document.getElementById("poligono");
            a.setAttribute("fill", "#000000");

            var a = document.getElementById("lineas");
            a.setAttribute("fill", "#000000");

            var a = document.getElementById("rect1");
            a.setAttribute("fill", "#000000");

            var a = document.getElementById("rect2");
            a.setAttribute("fill", "#000000");

            var a = document.getElementById("lineainclinada");
            a.setAttribute("fill", "#000000");

            var a = document.getElementById("circulo");
            a.setAttribute("fill", "#000000");

            var elements = document.getElementsByTagName("path");

            for (var i = 0; i < elements.length; i++) {
                var atributosclase = elements[i].getAttribute('class');
                if (atributosclase.search("seleccionado") > 0) {
                    elements[i].setAttribute("class", "land seleccionado");
                } else {
                    console.log(elements[i].getAttribute('class'));
                    elements[i].setAttribute("class", "land");
                }
            }

        }
    ).fail(function (res) {
        console.log("Error: en ajax1");
    });





}

function patronoriginal() {

}