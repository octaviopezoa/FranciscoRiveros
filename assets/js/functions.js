let firstClickPlanta = false;

$.ajax({
  url: "assets/php/getImages.php",
  method: "POST",
  data: "id=images",
  success: function(data) {
    let datos = data;
    console.log(datos);
    $("#plantas").append(datos);
  },
  complete: function() {
    let firstImg = $("#plantas").closest("div");
    let hrefFirstImg = firstImg.find("img").attr("src");
    $("#plantaSelected").attr("src", hrefFirstImg);

    $(".planta").click(function() {
      let plantaHref = $(this).attr("src");
      $("#plantaSelected").attr("src", plantaHref);
      $('[data-fancybox="gallery"]').fancybox();
      $("#plantaFancybox").attr("href", plantaHref);
      $(this)
        .parent()
        .siblings()
        .removeClass("selectedPlanta");
      $(this)
        .parent()
        .addClass("selectedPlanta");

      let metraje = $(this).attr("name");

      switch (metraje) {
        case "1":
          $("#depto").text("DEPTO. TIPO A");
          $("#dorms").text("3 DORMS.");
          $("#banos").text("2 BAÑOS");
          $("#mUtiles").text("109");
          $("#mTerraza").text("37");
          $("#mTotal").text("146");
          break;
        case "2":
          $("#depto").text("DEPTO. TIPO B1J");
          $("#dorms").text("2 DORMS.");
          $("#banos").text("2 BAÑOS");
          $("#mUtiles").text("55");
          $("#mTerraza").text("5.9");
          $("#mTotal").text("60.9");
          break;
        case "3":
          $("#depto").text("DEPTO. TIPO B2J");
          $("#dorms").text("2 DORMS.");
          $("#banos").text("2 BAÑOS");
          $("#mUtiles").text("55");
          $("#mTerraza").text("12");
          $("#mTotal").text("67");
          break;
        case "4":
          $("#depto").text("DEPTO. TIPO B3");
          $("#dorms").text("3 DORMS.");
          $("#banos").text("3 BAÑOS");
          $("#mUtiles").text("111.40");
          $("#mTerraza").text("17.90");
          $("#mTotal").text("129.30");
          break;
        /*         case "5":
          $("#depto").text("DEPTO. TIPO D");
          $("#dorms").text("3 DORMS.");
          $("#banos").text("3 BAÑOS");
          $("#mUtiles").text("135.70");
          $("#mTerraza").text("27.75");
          $("#mTotal").text("163.45");
          break; */
      }
      if (!firstClickPlanta) {
        firstClickPlanta = true;
      } else {
        $("#plantasLink").click();
      }
    });

    firstImg.find("img:first").click();
  }
});

$.ajax({
  url: "assets/php/getGaleria.php",
  method: "POST",
  data: "id=images2",
  success: function(data) {
    let datos = data;
    $(".galeria").append(datos);
  },
  complete: function() {
    $(".galeria").slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      nextArrow:
        '<a class="slick-next"><i class="fas fa-chevron-right"></i></a>',
      prevArrow:
        '<a class="slick-prev"><i class="fas fa-chevron-left"></i></a>',
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }
});

$.ajax({
  url: "assets/php/getEntorno.php",
  method: "POST",
  data: "id=images2",
  success: function(data) {
    let datos = data;
    $(".carousel").append(datos);
  },
  complete: function() {
    $(".carousel").slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow:
        '<a class="slick-next"><i class="fas fa-chevron-right"></i></a>',
      prevArrow:
        '<a class="slick-prev"><i class="fas fa-chevron-left"></i></a>',
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            infinite: true,
            arrows: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }
});

$(document).ready(function() {
  // //imagen popoup
  // $.fancybox.open({
  //   src: "assets/img/promocion/promocion.jpg",
  //   type: "image",
  //   opts: {
  //     animationEffect: "zoom-in-out",
  //     animationDuration: 400,
  //     smallBtn: true
  //   }
  // });

  console.log("live");
  //
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function() {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }

  //

  //Inicialización ScrollSpy
  $("#navspace").css({ height: $("#nav").height() });
  $("#nav").scrollspy({
    animate: true
  });
});

//Navbar fixed

let distance = $("#navspace").offset().top;

$(window).scroll(function() {
  if ($(this).scrollTop() >= distance) {
    $("#nav").addClass("is-fixed-top");
  } else {
    $("#nav").removeClass("is-fixed-top");
  }
});

//
$("#conoce").click(function() {
  $("#section2").click();
});

//Descarga Plantas

$("#planta-download").click(function() {
  downloadFile($("#plantaSelected").attr("src"));
});

//Formulario

$("#form-cotizar").validate({
  rules: {
    proyecto: "required",
    nombre: "required",
    rut: {
      required: true,
      validateRut: true
    },
    telefono: {
      required: true,
      number: true
    },
    email: {
      required: true,
      email: true
    },
    planta: {
      selectedPlanta: true
    },
    plazo: {
      selectedPlazo: true
    },
    comentarios: {
      required: true,
      maxlength: 300
    }
  },
  messages: {
    proyecto: "no existe proyecto",
    nombre: "Por favor ingrese su nombre",
    rut: {
      required: "Por favor ingrese su rut",
      validateRut: "Por favor ingrese un rut válido"
    },
    telefono: {
      required: "Por favor ingrese su número de teléfono",
      number: "Este campo acepta sólamente números"
    },
    email: {
      required: "Por favor ingrese su e-mail",
      email: "Por favor ingrese un email válido"
    },
    planta: {
      selectedPlanta: "Por favor seleccione una planta"
    },
    plazo: {
      selectedPlazo: "Por favor seleccione una planta"
    },
    comentarios: {
      required: "Por favor ingrese comentarios",
      maxlength:
        "Por favor ingrese comentarios que no superen los 300 caractéres"
    }
  },
  submitHandler: function(form) {
    let datosFormulario = new FormData(form);
    // fancybox "Loading"

    $.ajax({
      url: "assets/php/cotizar.php",
      method: "POST",
      data: datosFormulario,
      cache: false,
      contentType: false,
      processData: false,
      success: function(response) {
        if (response == "success") {
          $.fancybox.open({
            src:
              '<div class="mensaje-form" style="background: rgba(0,0,0,0);color: #FFF"><h2 class="has-text-centered">Cotización Exitosa</h2><p>Pronto estaremos en contacto</p></div>',
            type: "html",
            opts: {
              afterClose: function() {
                $("#form-cotizar").trigger("reset");
              },
              smallBtn: false
            }
          });
        } else {
          console.log("error");
          $.fancybox.open({
            src:
              '<div class="mensaje-form" style="background: rgba(0,0,0,0);color: #FFF"><h2 class="has-text-centered">Error</h2><p>Lo sentimos, por favor intentalo nuevamente.</p></div>',
            type: "html",
            opts: {
              afterClose: function() {
                $("#form-cotizar").trigger("reset");
              },
              smallBtn: false
            }
          });
          console.log(response);
        }
      }
    });
  }
});

//Función para Rut
function clean(elrut) {
  return typeof elrut === "string"
    ? elrut.replace(/^0+|[^0-9kK]+/g, "").toUpperCase()
    : "";
}

function validateR(elrut) {
  if (typeof elrut !== "string") {
    return false;
  }
  if (!/^0*(\d{1,3}(\.?\d{3})*)-?([\dkK])$/.test(elrut)) {
    return false;
  }

  elrut = clean(elrut);

  var t = parseInt(elrut.slice(0, -1), 10);
  var m = 0;
  var s = 1;

  while (t > 0) {
    s = (s + (t % 10) * (9 - (m++ % 6))) % 11;
    t = Math.floor(t / 10);
  }

  var v = s > 0 ? "" + (s - 1) : "K";
  return v === elrut.slice(-1);
}

function format(elrut) {
  elrut = clean(elrut);

  var result = elrut.slice(-4, -1) + "-" + elrut.substr(elrut.length - 1);
  for (var i = 4; i < elrut.length; i += 3) {
    result = elrut.slice(-3 - i, -i) + "." + result;
  }

  return result;
}

$.validator.addMethod(
  "validateRut",
  function() {
    if (validateR($("#rut").val())) {
      return true;
    } else {
      return false;
    }
  },
  "Por favor ingresar un rut válido"
);

$.validator.addMethod("selectedPlanta", function() {
  if ($("#planta").val() == "") {
    $("#control-planta").css("height", "54px");
    return false;
  } else {
    $("#control-planta").css("height", "30px");
    return true;
  }
});

$.validator.addMethod("selectedPlazo", function() {
  if ($("#plazo").val() == "") {
    $("#control-plazo").css("height", "54px");
    return false;
  } else {
    $("#control-plazo").css("height", "30px");
    return true;
  }
});
