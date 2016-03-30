$(document).ready(function () {

    cookiesinicio();

    var offset = 250;

    var duration = 300;

    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });

    jQuery('.back-to-top').click(function (event) {

        event.preventDefault();

        jQuery('html, body').animate({
            scrollTop: 0
        }, duration);

        return false;

    })



    $("body").keypress(function (e) {
        if (e.which == 13) {
            var focused = $(':focus').parent();
            if (focused.attr("xlink:href")) {
                /* alert("redirect: " + focused.attr("xlink:href"));*/
                window.location.replace(focused.attr("xlink:href"));
            }
        }
    });

    $("#tamanioletra").change(function () {
        var nuevotamanio = $("#tamanioletra").val();
        tamanioletra(nuevotamanio);
    });

    $("#espaciado2").change(function () {
        var nuevoespaciado = $("#espaciado2").val();
        espaciadoletra(nuevoespaciado);
    });

    $("#tipoletra").change(function () {
        var nuevotipoletra = $("#tipoletra").val();
        tipoletra(nuevotipoletra);
    });

    $("#Saturation").change(function () {
        var nuevasaturacion = $("#Saturation").val();
        saturate(nuevasaturacion);
    });

    $("#Grayscale").change(function () {
        var nuevogris = $("#Grayscale").val();
        greyscale(nuevogris);
    });

    $("#Sepia").change(function () {
        var nuevosepia = $("#Sepia").val();
        sepia(nuevosepia);
    });

    $("#Hue").change(function () {
        var nuevohue = $("#Hue").val();
        hue(nuevohue);
    });

    $("#Invert").change(function () {
        var nuevoinvert = $("#Invert").val();
        invert(nuevoinvert);
    });

    $("#Opacity").change(function () {
        var nuevoopacity = $("#Opacity").val();
        opacity(nuevoopacity);
    });

    $("#Brightness").change(function () {
        var nuevobrightness = $("#Brightness").val();
        brightness(nuevobrightness);
    });

    $("#Contrast").change(function () {
        var nuevocontrast = $("#Contrast").val();
        contrast(nuevocontrast);
    });




});

/*function click() {
    $('body').keydown(function (e) {
        if (e.keyCode == 13) {
            $("#menucapitales").click();
        }
    });
}*/

function pulsar(parametro) {
    $.post(
        '/Mapa/cookieStart', {
            tipocookie: "estilo",
            valorcookie: parametro
        },
        function (data) {
            $("#estilo").attr("href", "/styles/css/accesibilidad/" + parametro);
        }
    ).fail(function (res) {
        alert("Error: en ajax");
    });
}

function tab() {
    var e = jQuery.Event("keypress");
    e.which = 13; //choose the one you want
    e.keyCode = 13;
    $("#theInputToTest").trigger(e);
}

function tamanioletra(nuevotamanio) {
    $.post(
        '/Mapa/cookieStart', {
            tipocookie: "tamanioletra",
            valorcookie: nuevotamanio
        },
        function (data) {
            var tamaniofinal = 14 * nuevotamanio;
            $("body").css("font-size", tamaniofinal + "px");
            document.getElementById("letra").value = nuevotamanio;
        }
    ).fail(function (res) {
        alert("Error: en ajax");
    });

}

function espaciadoletra(nuevoespaciado) {

    $.post(
        '/Mapa/cookieStart', {
            tipocookie: "espaciadoletra",
            valorcookie: nuevoespaciado
        },
        function (data) {
            var espaciadoletra = 1.42857143 * nuevoespaciado;
            $("body").css("line-height", espaciadoletra);
            document.getElementById("espaciado").value = nuevoespaciado;
        }
    ).fail(function (res) {
        alert("Error: en ajax");
    });

}

function tipoletra(nuevotipoletra) {
    //console.log(nuevotipoletra);
    //nuevotipoletra = "";
    //var tipoletra = "Arial";
    //console.log(nuevotipoletra);
    $.post(
        '/Mapa/cookieStart', {
            tipocookie: "tipoletra",
            valorcookie: nuevotipoletra
        },
        function (data) {
            $("body").css("font-family", nuevotipoletra);
        }
    ).fail(function (res) {
        alert("Error: en ajax");
    });

}

function saturate(nuevasaturacion) {
    $.post(
        '/Mapa/cookieStart', {
            tipocookie: "saturate",
            valorcookie: nuevasaturacion
        },
        function (data) {
            var satS = nuevasaturacion;
            var satG = "saturate(" + satS + ")";
            document.body.style.webkitFilter = satG;
            //document.getElementById("greyval").textContent = setG;

        }
    ).fail(function (res) {
        alert("Error: en ajax");
    });
}

function greyscale(nuevogris) {

    $.post(
        '/Mapa/cookieStart', {
            tipocookie: "greyscale",
            valorcookie: nuevogris
        },
        function (data) {
            var greyS = nuevogris;
            var setG = "grayscale(" + greyS + ")";
            document.body.style.webkitFilter = setG;
            //document.getElementById("greyval").textContent = setG;

        }
    ).fail(function (res) {
        alert("Error: en ajax");
    });
}

function sepia(nuevosepia) {


    $.post(
        '/Mapa/cookieStart', {
            tipocookie: "sepia",
            valorcookie: nuevosepia
        },
        function (data) {
            var sepS = nuevosepia;
            var sepG = "sepia(" + sepS + ")";
            document.body.style.webkitFilter = sepG;
            //document.getElementById("greyval").textContent = setG;

        }
    ).fail(function (res) {
        alert("Error: en ajax");
    });

}



function hue(nuevohue) {

    $.post(
        '/Mapa/cookieStart', {
            tipocookie: "hue",
            valorcookie: nuevohue
        },
        function (data) {
            var hueS = nuevohue;
            var hueG = "hue-rotate(" + hueS + "deg)";
            document.body.style.webkitFilter = hueG;
            //document.getElementById("greyval").textContent = setG;
        }
    ).fail(function (res) {
        alert("Error: en ajax");
    });

}

function invert(nuevoinvert) {
    $.post(
        '/Mapa/cookieStart', {
            tipocookie: "invert",
            valorcookie: nuevoinvert
        },
        function (data) {
            var invS = nuevoinvert;
            var invG = "invert(" + invS + ")";
            document.body.style.webkitFilter = invG;
            //document.getElementById("greyval").textContent = setG;
        }
    ).fail(function (res) {
        alert("Error: en ajax");
    });

}

function opacity(nuevoopacity) {
    $.post(
        '/Mapa/cookieStart', {
            tipocookie: "opacity",
            valorcookie: nuevoopacity
        },
        function (data) {
            var opaS = nuevoopacity;
            var opaG = "opacity(" + opaS + ")";
            document.body.style.webkitFilter = opaG;
            //document.getElementById("greyval").textContent = setG;
        }
    ).fail(function (res) {
        alert("Error: en ajax");
    });


}


function brightness(nuevobrightness) {

    $.post(
        '/Mapa/cookieStart', {
            tipocookie: "brightness",
            valorcookie: nuevobrightness
        },
        function (data) {
            var briS = nuevobrightness;
            var briG = "brightness(" + briS + ")";
            document.body.style.webkitFilter = briG;
            //document.getElementById("greyval").textContent = setG;

        }
    ).fail(function (res) {
        alert("Error: en ajax");
    });

}

function contrast(nuevocontrast) {


    $.post(
        '/Mapa/cookieStart', {
            tipocookie: "contrast",
            valorcookie: nuevocontrast
        },
        function (data) {
            var conS = nuevocontrast;
            var conG = "contrast(" + conS + ")";
            document.body.style.webkitFilter = conG;
            //document.getElementById("greyval").textContent = setG;

        }
    ).fail(function (res) {
        alert("Error: en ajax");
    });

}

function restart() {
    contrast(1);
    brightness(1);
    opacity(1);
    invert(0);
    hue(0);
    sepia(0);
    greyscale(0);
    saturate(1);
    $("#Contrast").val(2.5);
    $("#Brightness").val(1.1);
    $("#Opacity").val(0.6);
    $("#Invert").val(0.5);
    $("#Hue").val(180);
    $("#Sepia").val(0.5);
    $("#Grayscale").val(0.5);
    $("#Saturation").val(6);
}

function reiniciar() {
    pulsar('estilo.css');
    tamanioletra(1);
    espaciadoletra(1);
    tipoletra('Arial');
    $("#tamanioletra").val(1);
    $("#espaciado2").val(1);

}

function url() {
    var pathname = window.location.pathname; // Returns path only
    var url = window.location.href;
    /*
        console.log(pathname);
    console.log(url);
        return url;*/

    $("#original").attr("href", url);
}


//Inicio de cookies
function cookiesinicio() {
    $.post(
        '/Mapa/cookieRead',
        function (data) {
            //alert("tipo letra: " + data.tipoletra + "   espaciado letra: " + data.espaciadoletra);
            //$("#estilo").attr("href", "/styles/css/accesibilidad/" + data.estilo);

            pulsar(data.estilo);
            tipoletra(data.tipoLetra);
            espaciadoletra(data.espaciadoLetra);
            tamanioletra(data.tamanioLetra);
            saturate(data.saturacion);
            $("#tipoletra").val(data.tipoLetra);
            $("#espaciado2").val(data.espaciadoLetra);
            $("#tamanioletra").val(data.tamanioLetra);
            $("#Saturation").val(data.saturacion);
        }
    ).fail(function (res) {
        alert("Error: en ajax");
    });
}