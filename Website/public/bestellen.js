var socket = io();

socket.on('returnCart', function(ret) {
  document.getElementById("cart").innerHTML = ret;
})

document.getElementById("contadina").addEventListener("click", () => {
  Swal.fire({
    title: '<strong>Pizza Contadina</strong>',
    iconHtml: '<img src="" id="popupImg">',
    html:
      'Een geweldige pizza met, <br>' +
      'Tomatensaus, cherrytomaten, rucola en Parmezaanse kaas <br>',
    showCloseButton: false,
    showCancelButton: true,
    width: "1000px",
    focusConfirm: false,
    confirmButtonText:
      'Toevoegen aan winkelwagen',
    confirmButtonAriaLabel: 'Thumbs up, great!',

    cancelButtonText:'Back',
    cancelButtonAriaLabel: 'Thumbs down'

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        customClass: 'confirmTitle',
        position: 'top',
        icon: 'success',
        title: 'Added to cart',
        showConfirmButton: false,
        timer: 850,
        width: "300px",
      })

      socket.emit("add", 1);
    }
  })
})

document.getElementById("margarita").addEventListener("click", () => {
  Swal.fire({
    title: '<strong>Pizza Margherita</strong>',
    iconHtml: '<img src="" id="popupImg">',
    html:
      'Een geweldige pizza met, <br>' +
      'Tomatensaus, mozzarella en basilicum<br>',
    showCloseButton: false,
    showCancelButton: true,
    width: "1000px",
    focusConfirm: false,
    confirmButtonText:
      'Toevoegen aan winkelwagen',
    confirmButtonAriaLabel: 'Thumbs up, great!',

    cancelButtonText:'Back',
    cancelButtonAriaLabel: 'Thumbs down'

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        customClass: 'confirmTitle',
        position: 'top',
        icon: 'success',
        title: 'Added to cart',
        showConfirmButton: false,
        timer: 850,
        width: "300px",
      })

      socket.emit("add", 2);
    }
  })
})

document.getElementById("tonno").addEventListener("click", () => {
  Swal.fire({
    title: '<strong>Pizza Tonno</strong>',
    iconHtml: '<img src="" id="popupImg">',
    html:
      'Een geweldige pizza met, <br>' +
      'Tomatensaus, tonijn, ansjovis, rode paprika, zwarte olijven en kappertjes<br>',
    showCloseButton: false,
    showCancelButton: true,
    width: "1000px",
    focusConfirm: false,
    confirmButtonText:
      'Toevoegen aan winkelwagen',
    confirmButtonAriaLabel: 'Thumbs up, great!',

    cancelButtonText:'Back',
    cancelButtonAriaLabel: 'Thumbs down'

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        customClass: 'confirmTitle',
        position: 'top',
        icon: 'success',
        title: 'Added to cart',
        showConfirmButton: false,
        timer: 850,
        width: "300px",
      })

      socket.emit("add", 3);
    }
  })
})

document.getElementById("delizioza").addEventListener("click", () => {
  Swal.fire({
    title: '<strong>Pizza Delizioza</strong>',
    iconHtml: '<img src="" id="popupImg">',
    html:
      'Een geweldige pizza met, <br>' +
      'Tomatensaus, mozzarella, rode paprika en basilicum<br>',
    showCloseButton: false,
    showCancelButton: true,
    width: "1000px",
    focusConfirm: false,
    confirmButtonText:
      'Toevoegen aan winkelwagen',
    confirmButtonAriaLabel: 'Thumbs up, great!',

    cancelButtonText:'Back',
    cancelButtonAriaLabel: 'Thumbs down'

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        customClass: 'confirmTitle',
        position: 'top',
        icon: 'success',
        title: 'Added to cart',
        showConfirmButton: false,
        timer: 850,
        width: "300px",
      })

      socket.emit("add", 4);
    }
  })
})

document.getElementById("kaas").addEventListener("click", () => {
  Swal.fire({
    title: '<strong>Pizza Quattro formaggi</strong>',
    iconHtml: '<img src="" id="popupImg">',
    html:
      'Een geweldige pizza met, <br>' +
      'Mozzarella, gorgonzola, provolone en Parmezaanse kaas<br>',
    showCloseButton: false,
    showCancelButton: true,
    width: "1000px",
    focusConfirm: false,
    confirmButtonText:
      'Toevoegen aan winkelwagen',
    confirmButtonAriaLabel: 'Thumbs up, great!',

    cancelButtonText:'Back',
    cancelButtonAriaLabel: 'Thumbs down'

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        customClass: 'confirmTitle',
        position: 'top',
        icon: 'success',
        title: 'Added to cart',
        showConfirmButton: false,
        timer: 850,
        width: "300px",
      })

      socket.emit("add", 5);
    }
  })
})

document.getElementById("pepperoni").addEventListener("click", () => {
  Swal.fire({
    title: '<strong>Pizza Salame</strong>',
    iconHtml: '<img src="" id="popupImg">',
    html:
      'Een geweldige pizza met, <br>' +
      'Tomatensaus, mozzarella en salami Milano<br>',
    showCloseButton: false,
    showCancelButton: true,
    width: "1000px",
    focusConfirm: false,
    confirmButtonText:
      'Toevoegen aan winkelwagen',
    confirmButtonAriaLabel: 'Thumbs up, great!',

    cancelButtonText:'Back',
    cancelButtonAriaLabel: 'Thumbs down'

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        customClass: 'confirmTitle',
        position: 'top',
        icon: 'success',
        title: 'Added to cart',
        showConfirmButton: false,
        timer: 850,
        width: "300px",
      })

      socket.emit("add", 6);
    }
  })
})

document.getElementById("rustica").addEventListener("click", () => {
  Swal.fire({
    title: '<strong>Pizza Rustica</strong>',
    iconHtml: '<img src="" id="popupImg">',
    html:
      'Een geweldige pizza met, <br>' +
      'Tomatensaus, mozzarella, gekruid rundergehakt en rode pepers<br>',
    showCloseButton: false,
    showCancelButton: true,
    width: "1000px",
    focusConfirm: false,
    confirmButtonText:
      'Toevoegen aan winkelwagen',
    confirmButtonAriaLabel: 'Thumbs up, great!',

    cancelButtonText:'Back',
    cancelButtonAriaLabel: 'Thumbs down'

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        customClass: 'confirmTitle',
        position: 'top',
        icon: 'success',
        title: 'Added to cart',
        showConfirmButton: false,
        timer: 850,
        width: "300px",
      })

      socket.emit("add", 7);
    }
  })
})

document.getElementById("fiamma").addEventListener("click", () => {
  Swal.fire({
    title: '<strong>Pizza Fiamma</strong>',
    iconHtml: '<img src="" id="popupImg">',
    html:
      'Een geweldige pizza met, <br>' +
      'Tomatensaus, mozzarella, salami pepperone en rode pepers<br>',
    showCloseButton: false,
    showCancelButton: true,
    width: "1000px",
    focusConfirm: false,
    confirmButtonText:
      'Toevoegen aan winkelwagen',
    confirmButtonAriaLabel: 'Thumbs up, great!',

    cancelButtonText:'Back',
    cancelButtonAriaLabel: 'Thumbs down'

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        customClass: 'confirmTitle',
        position: 'top',
        icon: 'success',
        title: 'Added to cart',
        showConfirmButton: false,
        timer: 850,
        width: "300px",
      })

      socket.emit("add", 8);
    }
  })
})

document.getElementById("lusso-margherita").addEventListener("click", () => {
  Swal.fire({
    title: '<strong>Pizza Di Lusso Margherita</strong>',
    iconHtml: '<img src="" id="popupImg">',
    html:
      'Een geweldige pizza met, <br>' +
      'Tomatensaus, buffelmozzarella en pesto<br>',
    showCloseButton: false,
    showCancelButton: true,
    width: "1000px",
    focusConfirm: false,
    confirmButtonText:
      'Toevoegen aan winkelwagen',
    confirmButtonAriaLabel: 'Thumbs up, great!',

    cancelButtonText:'Back',
    cancelButtonAriaLabel: 'Thumbs down'

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        customClass: 'confirmTitle',
        position: 'top',
        icon: 'success',
        title: 'Added to cart',
        showConfirmButton: false,
        timer: 850,
        width: "300px",
      })

      socket.emit("add", 9);
    }
  })
})

document.getElementById("stagioni").addEventListener("click", () => {
  Swal.fire({
    title: '<strong>Pizza Quattro Stagioni</strong>',
    iconHtml: '<img src="" id="popupImg">',
    html:
      'Een geweldige pizza met, <br>' +
      'Tomatensaus, mozzarella, prosciutto cotto, salami Milano, champignons en artisjokken<br>',
    showCloseButton: false,
    showCancelButton: true,
    width: "1000px",
    focusConfirm: false,
    confirmButtonText:
      'Toevoegen aan winkelwagen',
    confirmButtonAriaLabel: 'Thumbs up, great!',

    cancelButtonText:'Back',
    cancelButtonAriaLabel: 'Thumbs down'

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        customClass: 'confirmTitle',
        position: 'top',
        icon: 'success',
        title: 'Added to cart',
        showConfirmButton: false,
        timer: 850,
        width: "300px",
      })

      socket.emit("add", 10);
    }
  })
})

document.getElementById("prosciutto").addEventListener("click", () => {
  Swal.fire({
    title: '<strong>Pizza Prosciutto di Parma</strong>',
    iconHtml: '<img src="" id="popupImg">',
    html:
      'Een geweldige pizza met, <br>' +
      'Tomatensaus, mozzarella, Parmaham, zongedroogde tomaat, mascarpone, rucola en Parmezaanse kaas<br>',
    showCloseButton: false,
    showCancelButton: true,
    width: "1000px",
    focusConfirm: false,
    confirmButtonText:
      'Toevoegen aan winkelwagen',
    confirmButtonAriaLabel: 'Thumbs up, great!',

    cancelButtonText:'Back',
    cancelButtonAriaLabel: 'Thumbs down'

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        customClass: 'confirmTitle',
        position: 'top',
        icon: 'success',
        title: 'Added to cart',
        showConfirmButton: false,
        timer: 850,
        width: "300px",
      })

      socket.emit("add", 11);
    }
  })
})

document.getElementById("pollo").addEventListener("click", () => {
  Swal.fire({
    title: '<strong>Pizza Pollo con Extra</strong>',
    iconHtml: '<img src="" id="popupImg">',
    html:
      'Een geweldige pizza met, <br>' +
      'Tomatensaus, mozzarella, gegrilde kip, rode ui, rode paprika en champignons<br>',
    showCloseButton: false,
    showCancelButton: true,
    width: "1000px",
    focusConfirm: false,
    confirmButtonText:
      'Toevoegen aan winkelwagen',
    confirmButtonAriaLabel: 'Thumbs up, great!',

    cancelButtonText:'Back',
    cancelButtonAriaLabel: 'Thumbs down'

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        customClass: 'confirmTitle',
        position: 'top',
        icon: 'success',
        title: 'Added to cart',
        showConfirmButton: false,
        timer: 850,
        width: "300px",
      })

      socket.emit("add", 12);
    }
  })
})

document.getElementById("funghi").addEventListener("click", () => {
  Swal.fire({
    title: '<strong>Pizza Ai funghi</strong>',
    iconHtml: '<img src="" id="popupImg">',
    html:
      'Een geweldige pizza met, <br>' +
      'Tomatensaus, mozzarella, champignons en knoflookolie<br>',
    showCloseButton: false,
    showCancelButton: true,
    width: "1000px",
    focusConfirm: false,
    confirmButtonText:
      'Toevoegen aan winkelwagen',
    confirmButtonAriaLabel: 'Thumbs up, great!',

    cancelButtonText:'Back',
    cancelButtonAriaLabel: 'Thumbs down'

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        customClass: 'confirmTitle',
        position: 'top',
        icon: 'success',
        title: 'Added to cart',
        showConfirmButton: false,
        timer: 850,
        width: "300px",
      })

      socket.emit("add", 13);
    }
  })
})

document.getElementById("hawaii").addEventListener("click", () => {
  Swal.fire({
    title: '<strong>Pizza Hawaii</strong>',
    iconHtml: '<img src="" id="popupImg">',
    html:
      'Een geweldige pizza met, <br>' +
      'Tomatensaus, mozzarella, prosciutto cotto en ananas<br>',
    showCloseButton: false,
    showCancelButton: true,
    width: "1000px",
    focusConfirm: false,
    confirmButtonText:
      'Toevoegen aan winkelwagen',
    confirmButtonAriaLabel: 'Thumbs up, great!',

    cancelButtonText:'Back',
    cancelButtonAriaLabel: 'Thumbs down'

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        customClass: 'confirmTitle',
        position: 'top',
        icon: 'success',
        title: 'Added to cart',
        showConfirmButton: false,
        timer: 850,
        width: "300px",
      })

      socket.emit("add", 14);
    }
  })
})

document.getElementById("pollo-p").addEventListener("click", () => {
  Swal.fire({
    title: '<strong>Pizza Pollo Pesto</strong>',
    iconHtml: '<img src="" id="popupImg">',
    html:
      'Een geweldige pizza met, <br>' +
      'Tomatensaus, mozzarella, gegrilde kip, cherrytomaten, champignons, zoete ui, rode paprika en pesto<br>',
    showCloseButton: false,
    showCancelButton: true,
    width: "1000px",
    focusConfirm: false,
    confirmButtonText:
      'Toevoegen aan winkelwagen',
    confirmButtonAriaLabel: 'Thumbs up, great!',

    cancelButtonText:'Back',
    cancelButtonAriaLabel: 'Thumbs down'

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        customClass: 'confirmTitle',
        position: 'top',
        icon: 'success',
        title: 'Added to cart',
        showConfirmButton: false,
        timer: 850,
        width: "300px",
      })

      socket.emit("add", 15);
    }
  })
})

document.getElementById("doner").addEventListener("click", () => {
  Swal.fire({
    title: '<strong>Pizza Döner</strong>',
    iconHtml: '<img src="" id="popupImg">',
    html:
      'Een geweldige pizza met, <br>' +
      'Tomatensaus, kipdöner, mozzarella, rode ui en knoflooksaus.<br> extra kipdöner +2,95<br>',
    showCloseButton: false,
    showCancelButton: true,
    width: "1000px",
    focusConfirm: false,
    confirmButtonText:
      'Toevoegen aan winkelwagen',
    confirmButtonAriaLabel: 'Thumbs up, great!',

    cancelButtonText:'Back',
    cancelButtonAriaLabel: 'Thumbs down'

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        customClass: 'confirmTitle',
        position: 'top',
        icon: 'success',
        title: 'Added to cart',
        showConfirmButton: false,
        timer: 850,
        width: "300px",
      })

      socket.emit("add", 16);
    }
  })
})

document.getElementById("cotto").addEventListener("click", () => {
  Swal.fire({
    title: '<strong>Pizza Con Cotto</strong>',
    iconHtml: '<img src="" id="popupImg">',
    html:
      'Een geweldige pizza met, <br>' +
      'Tomatensaus, mozzarella, prosciutto cotto en basilicum<br>',
    showCloseButton: false,
    showCancelButton: true,
    width: "1000px",
    focusConfirm: false,
    confirmButtonText:
      'Toevoegen aan winkelwagen',
    confirmButtonAriaLabel: 'Thumbs up, great!',

    cancelButtonText:'Back',
    cancelButtonAriaLabel: 'Thumbs down'

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        customClass: 'confirmTitle',
        position: 'top',
        icon: 'success',
        title: 'Added to cart',
        showConfirmButton: false,
        timer: 850,
        width: "300px",
      })

      socket.emit("add", 17);
    }
  })
})

document.getElementById("carpaccio").addEventListener("click", () => {
  Swal.fire({
    title: '<strong>Pizza Carpaccio</strong>',
    iconHtml: '<img src="" id="popupImg">',
    html:
      'Een geweldige pizza met, <br>' +
      'Gemengde sla, carpaccio, Parmezaanse kaas, pijnboompitten, truffelmayonaise<br>',
    showCloseButton: false,
    showCancelButton: true,
    width: "1000px",
    focusConfirm: false,
    confirmButtonText:
      'Toevoegen aan winkelwagen',
    confirmButtonAriaLabel: 'Thumbs up, great!',

    cancelButtonText:'Back',
    cancelButtonAriaLabel: 'Thumbs down'

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        customClass: 'confirmTitle',
        position: 'top',
        icon: 'success',
        title: 'Added to cart',
        showConfirmButton: false,
        timer: 850,
        width: "300px",
      })

      socket.emit("add", 18);
    }
  })
})

document.getElementById("bbq-C").addEventListener("click", () => {
  Swal.fire({
    title: '<strong>Pizza BBQ Chicken</strong>',
    iconHtml: '<img src="" id="popupImg">',
    html:
      'Een geweldige pizza met, <br>' +
      'Tomatensaus, mozzarella, kipdöner, gegrilde kip, rode pepers, rode ui en barbecuesaus<br>',
    showCloseButton: false,
    showCancelButton: true,
    width: "1000px",
    focusConfirm: false,
    confirmButtonText:
      'Toevoegen aan winkelwagen',
    confirmButtonAriaLabel: 'Thumbs up, great!',

    cancelButtonText:'Back',
    cancelButtonAriaLabel: 'Thumbs down'

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        customClass: 'confirmTitle',
        position: 'top',
        icon: 'success',
        title: 'Added to cart',
        showConfirmButton: false,
        timer: 850,
        width: "300px",
      })

      socket.emit("add", 19);
    }
  })
})

document.getElementById("bbq-M").addEventListener("click", () => {
  Swal.fire({
    title: '<strong>Pizza BBQ Meatlovers</strong>',
    iconHtml: '<img src="" id="popupImg">',
    html:
      'Een geweldige pizza met, <br>' +
      'Tomatensaus, mozzarella, gehakt, kipdöner, pittige salami, rode ui, paprika en barbecuesaus<br>',
    showCloseButton: false,
    showCancelButton: true,
    width: "1000px",
    focusConfirm: false,
    confirmButtonText:
      'Toevoegen aan winkelwagen',
    confirmButtonAriaLabel: 'Thumbs up, great!',

    cancelButtonText:'Back',
    cancelButtonAriaLabel: 'Thumbs down'

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        customClass: 'confirmTitle',
        position: 'top',
        icon: 'success',
        title: 'Added to cart',
        showConfirmButton: false,
        timer: 850,
        width: "300px",
      })

      socket.emit("add", 20);
    }
  })
})

document.getElementById("bufala").addEventListener("click", () => {
  Swal.fire({
    title: '<strong>Pizza Bufala Bruschetta</strong>',
    iconHtml: '<img src="" id="popupImg">',
    html:
      'Een geweldige pizza met, <br>' +
      'Buffelmozzarella, gemarineerde tomatenblokjes, rucola, pesto en Parmezaanse kaas<br>',
    showCloseButton: false,
    showCancelButton: true,
    width: "1000px",
    focusConfirm: false,
    confirmButtonText:
      'Toevoegen aan winkelwagen',
    confirmButtonAriaLabel: 'Thumbs up, great!',

    cancelButtonText:'Back',
    cancelButtonAriaLabel: 'Thumbs down'

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        customClass: 'confirmTitle',
        position: 'top',
        icon: 'success',
        title: 'Added to cart',
        showConfirmButton: false,
        timer: 850,
        width: "300px",
      })

      socket.emit("add", 21);
    }
  })
})

document.getElementById("margarita-v").addEventListener("click", () => {
  Swal.fire({
    title: '<strong>Pizza Vegan Margherita</strong>',
    iconHtml: '<img src="" id="popupImg">',
    html:
      'Een geweldige pizza met, <br>' +
      'Tomatensaus, vegan pizzakaas en basilicum<br>',
    showCloseButton: false,
    showCancelButton: true,
    width: "1000px",
    focusConfirm: false,
    confirmButtonText:
      'Toevoegen aan winkelwagen',
    confirmButtonAriaLabel: 'Thumbs up, great!',

    cancelButtonText:'Back',
    cancelButtonAriaLabel: 'Thumbs down'

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        customClass: 'confirmTitle',
        position: 'top',
        icon: 'success',
        title: 'Added to cart',
        showConfirmButton: false,
        timer: 850,
        width: "300px",
      })

      socket.emit("add", 22);
    }
  })
})

document.getElementById("funghi-v").addEventListener("click", () => {
  Swal.fire({
    title: '<strong>Pizza Vegan Funghi</strong>',
    iconHtml: '<img src="" id="popupImg">',
    html:
      'Een geweldige pizza met, <br>' +
      'Tomatensaus, vegan mozzarella, champignons en knoflookolie<br>',
    showCloseButton: false,
    showCancelButton: true,
    width: "1000px",
    focusConfirm: false,
    confirmButtonText:
      'Toevoegen aan winkelwagen',
    confirmButtonAriaLabel: 'Thumbs up, great!',

    cancelButtonText:'Back',
    cancelButtonAriaLabel: 'Thumbs down'

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        customClass: 'confirmTitle',
        position: 'top',
        icon: 'success',
        title: 'Added to cart',
        showConfirmButton: false,
        timer: 850,
        width: "300px",
      })

      socket.emit("add", 23);
    }
  })
})

document.getElementById("doner-v").addEventListener("click", () => {
  Swal.fire({
    title: '<strong>Pizza Vegan Döner</strong>',
    iconHtml: '<img src="" id="popupImg">',
    html:
      'Een geweldige pizza met, <br>' +
      'Tomatensaus, vegan pizzakaas, vegan kebab, rode ui en vegan knoflooksaus<br>',
    showCloseButton: false,
    showCancelButton: true,
    width: "1000px",
    focusConfirm: false,
    confirmButtonText:
      'Toevoegen aan winkelwagen',
    confirmButtonAriaLabel: 'Thumbs up, great!',

    cancelButtonText:'Back',
    cancelButtonAriaLabel: 'Thumbs down'

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        customClass: 'confirmTitle',
        position: 'top',
        icon: 'success',
        title: 'Added to cart',
        showConfirmButton: false,
        timer: 850,
        width: "300px",
      })

      socket.emit("add", 24);
    }
  })
})

document.getElementById("pollo-p-v").addEventListener("click", () => {
  Swal.fire({
    title: '<strong>Pizza Vegan Pollo Pesto</strong>',
    iconHtml: '<img src="" id="popupImg">',
    html:
      'Een geweldige pizza met, <br>' +
      'Tomatensaus, vegan mozzarella, vegan kipreepjes, cherrytomaten, champignons, zoete ui, gegrilde paprika en vega pesto<br>',
    showCloseButton: false,
    showCancelButton: true,
    width: "1000px",
    focusConfirm: false,
    confirmButtonText:
      'Toevoegen aan winkelwagen',
    confirmButtonAriaLabel: 'Thumbs up, great!',

    cancelButtonText:'Back',
    cancelButtonAriaLabel: 'Thumbs down'

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        customClass: 'confirmTitle',
        position: 'top',
        icon: 'success',
        title: 'Added to cart',
        showConfirmButton: false,
        timer: 850,
        width: "300px",
      })

      socket.emit("add", 25);
    }
  })
})

document.getElementById("bbq-C-v").addEventListener("click", () => {
  Swal.fire({
    title: '<strong>Pizza Vegan BBQ Chicken</strong>',
    iconHtml: '<img src="" id="popupImg">',
    html:
      'Een geweldige pizza met, <br>' +
      'Tomatensaus, vegan pizzakaas, vega kipreepjes, rode pepers, rode ui en vegan barbecuesaus<br>',
    showCloseButton: false,
    showCancelButton: true,
    width: "1000px",
    focusConfirm: false,
    confirmButtonText:
      'Toevoegen aan winkelwagen',
    confirmButtonAriaLabel: 'Thumbs up, great!',

    cancelButtonText:'Back',
    cancelButtonAriaLabel: 'Thumbs down'

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        customClass: 'confirmTitle',
        position: 'top',
        icon: 'success',
        title: 'Added to cart',
        showConfirmButton: false,
        timer: 850,
        width: "300px",
      })

      socket.emit("add", 26);
    }
  })
})


function changeValue(html, int){
  socket.emit("change", html, int)
}