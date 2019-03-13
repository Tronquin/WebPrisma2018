/* ################################# Menu Effects ################################# */
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");
const navImgPort = document.querySelector(".nav-img-portfolio");
const navImg = document.querySelector(".nav-img");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
    navImgPort.classList.add("appear");

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
    navImgPort.classList.remove("appear");

    // Set Menu State
    showMenu = false;
  }
}

/* ################################# Hide Footer for smartphone #################################*/
const mediumBp = matchMedia("(max-width: 768px)");
const hideFooter = mql => {
  mql.matches
    ? $("input").focusin(function() {
        $("footer").hide();
      })
    : $("input").focusout(function() {
        $("footer").show();
      });
};

mediumBp.addListener(hideFooter);

/* ################################# Fancybox Initialization ################################# */
$(document).ready(function() {
  $(".project").fancybox({
    touch: false,
    toolbar: "auto",
    smallBtn: false,
    btnTpl: {
      arrowLeft:
        '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
        '<div><svg width="60px" height="80px" viewBox="0 0 50 80" xml:space="preserve"><polyline fill="none" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 " /></svg></div>' +
        "</button>",

      arrowRight:
        '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
        '<div><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60px" height="80px" viewBox="0 0 50 80"xml:space="preserve"><polyline fill="none" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 " /></svg></div>' +
        "</button>",

      share:
        '<button data-fancybox-share="" class= "fancybox-button fancybox-button--share" title="{{SHARE}}" >' +
        '<div><svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 473.932 473.932" style="enable-background:new 0 0 473.932 473.932;" xml: space="preserve"><path d="M385.513,301.214c-27.438,0-51.64,13.072-67.452,33.09l-146.66-75.002    c1.92-7.161,3.3-14.56,3.3-22.347c0-8.477-1.639-16.458-3.926-24.224l146.013-74.656c15.725,20.924,40.553,34.6,68.746,34.6    c47.758,0,86.391-38.633,86.391-86.348C471.926,38.655,433.292,0,385.535,0c-47.65,0-86.326,38.655-86.326,86.326    c0,7.809,1.381,15.229,3.322,22.412L155.892,183.74c-15.833-20.039-40.079-33.154-67.56-33.154    c-47.715,0-86.326,38.676-86.326,86.369s38.612,86.348,86.326,86.348c28.236,0,53.043-13.719,68.832-34.664l145.948,74.656    c-2.287,7.744-3.947,15.79-3.947,24.289c0,47.693,38.676,86.348,86.326,86.348c47.758,0,86.391-38.655,86.391-86.348    C471.904,339.848,433.271,301.214,385.513,301.214z" /></svg></div>' +
        "</button>"
    },
    buttons: ["share", "fullScreen", "close"]
  });
});

/* ################################# Portfolio Filter ################################# */

/* ################################# Contact Form ################################# */

// function callback() {
//   $("#submit").removeAttr("disabled");
// }
$(document).ready(function(e) {
  $("#mensaje").keyup(function() {
    $(".word-counter").text(this.value.replace(/ /g, "").length + " / 200");
  });

  $("#contact-form").submit(function(e) {
    e.preventDefault();

    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
      alertify.success("Mensaje Enviado!");
    });
    $form.get(0).reset();
  });
});
// $(document).ready(function(e) {
//   $("#mensaje").keyup(function() {
//     $(".word-counter").text(this.value.replace(/ /g, "").length + " / 200");
//   });
//   $("#contact-form").submit(function(e) {
//     $.ajax({
//       url: "https://usebasin.com/f/f518961cffad.json",
//       method: "POST",
//       data: $(this).serialize(),
//       dataType: "json"
//     });
//     e.preventDefault();
//     $(this)
//       .get(0)
//       .reset();
//     alertify.success("Mensaje Enviado!");
//   });
// });

/* ################################# Google Translate API setup ################################# */

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "es",
      includedLanguages: "en,es",
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false,
      multilanguagePage: true
    },
    "google_translate_element"
  );
}

/* ################################# Disable right click on Portfolio Images  #################################*/
$(".portfolio-img").bind("contextmenu", function(e) {
  return false;
});

$(document).ready(function() {
  var $lists = $(".filter-btn");
  $(".filter-btn-all").click(function() {
    $lists.filter(".active").removeClass("active");
    $(".filter-btn-all").addClass("active");
  });

  $(".filter-btn").click(function() {
    $(".filter-btn-all").removeClass("active");
    $(this).toggleClass("active");
  });
});
