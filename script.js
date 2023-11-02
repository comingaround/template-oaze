// GALLERY_ONE ROTATION

var swiper = new Swiper(".gallery_one", {
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  }
});

// GALLERY_ONE BUTTON

document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector('.gallery_button a').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.mySwiper .swiper-button-prev').click();
  });
});
document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector('.gallery_button a:last-child').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.mySwiper .swiper-button-next').click();
  });
});

// GALLERY_ONE TEXT

window.addEventListener('load', function() {
  if(window.innerWidth > 992){
  let images = document.querySelectorAll(".swiper-slide img, .swiper-slide-text");
  for(let i = 0; i < images.length; i++) {
    images[i].addEventListener('mouseenter', function(e) {
        e.target.closest('.swiper-slide').querySelector('.swiper-slide-text').style = "color:black; transition:2s;";
    });
    images[i].addEventListener('mouseleave', function(e) {
        e.target.closest('.swiper-slide').querySelector('.swiper-slide-text').style = "color:white; transition:1s;";
    });
    }
  }
});

// GALLERY_TWO TEXT

window.addEventListener('load', function() {
  if(window.innerWidth > 992){
    let images = document.querySelectorAll(".gallery_two_block img, .gallery_two_text");
    for(let i = 0; i < images.length; i++) {
      images[i].addEventListener('mouseenter', function(e) {
        e.target.closest('.gallery_two_block').querySelector('.gallery_two_text').style.color = "black";
        e.target.closest('.gallery_two_block').querySelector('.gallery_two_text').style.transition = "2s";
      });
      images[i].addEventListener('mouseleave', function(e) {
        e.target.closest('.gallery_two_block').querySelector('.gallery_two_text').style.color = "white";
        e.target.closest('.gallery_two_block').querySelector('.gallery_two_text').style.transition = "1s";
      });
    }
  }
});

// GALLERY_TWO_TEXT RESIZE

function matchWidth() {
  let imgs = document.querySelectorAll('.gallery_two .gallery_two_block img');
  let texts = document.querySelectorAll('.gallery_two .gallery_two_block .gallery_two_text');
  
  if (imgs.length && texts.length) {
    for (let i = 0; i < imgs.length; i++) {
      texts[i].style.width = `${imgs[i].clientWidth}px`;
    } 
  }
}
window.addEventListener('load', matchWidth);
window.addEventListener('resize', matchWidth);


// GALLERY_THREE

var swiper = new Swiper(".gallery_three", {
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

// FOOTER SUBSCRIBTION demo

window.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = document.querySelector('input[name="email"]');
      const emailAddress = emailInput.value;

      // Send confirmation email
      const message = "demo";
      const emailData = {
          to: emailAddress,
          subject: "Subscription Confirmation",
          body: message
      };

      // Simulating email delivery
      setTimeout(function() {
          alert(`Confirmation email sent to ${emailAddress} with the message: "${message}"`);
          form.reset();
      }, 1000);
  });
});

// HERO_TWO ALTERNATIVE HOVER EFFECT

// window.addEventListener('load', function() {
//   let heroTwo1 = document.querySelectorAll(".hero_two1");
//   let heroTwo2 = document.querySelectorAll(".hero_two2");

//   heroTwo1.forEach(el => {
//     el.addEventListener('mouseenter', function() {
//       heroTwo2.forEach(hero => {
//         hero.style.transition = "2s";
//         hero.style.opacity = "0.5";
//       });
//     });
//     el.addEventListener('mouseleave', function() {
//       heroTwo2.forEach(hero => {
//         hero.style.opacity = "1";
//         hero.style.transition = "1s";
//       });
//     });
//   });

//   heroTwo2.forEach(el => {
//     el.addEventListener('mouseenter', function() {
//       heroTwo1.forEach(hero => {
//         hero.style.transition = "2s";
//         hero.style.opacity = "0.5";
//       });
//     });
//     el.addEventListener('mouseleave', function() {
//       heroTwo1.forEach(hero => {
//         hero.style.opacity = "1";
//         hero.style.transition = "1s";
//       });
//     });
//   });
// });









  



  
