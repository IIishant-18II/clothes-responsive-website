/*========== show menu ============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      /* Menu show */
      if(navToggle){
        navToggle.addEventListener('click',()=>{
            navMenu.classList.add('show-menu')
        }) 
      }
      /* Menu hidden */
      if(navClose){
        navClose.addEventListener('click',()=>{
            navMenu.classList.remove('show-menu')
        })
      }

      /*==================  REMOVE MENU MOBILE  ====================*/
      const navlink = document.querySelectorAll('.nav__link')

      const linkAction = () =>{
        const navMenu = document.getElementById('nav-menu')
        // when we click on each nav__link,we remove the show-menu class
        navMenu.classList.remove('show-menu')
      }
      navlink.forEach(n => n.addEventListener('click',linkAction))

      /*================= SWIPER CLOTHING =================*/
      let swiperHome = new Swiper('.home__swiper', {

  loop: true,
  grabCursor : true,
  slidesPerView: 'auto',
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    768:{
      slidesPerView: 3,
      centeredSlides: 'auto',
    },
    1152:{
      centeredSlides:'auto',
      spaceBetween: -64,
    }
  }
})

/*===================== change background header ================*/
const bgHeader = () =>{
  const header = document.getElementById('header')
  //add a class if the bottom offset is greater than 50 of the value
  this.scrollY >= 50 ? header.classList.add('bg-header')
                     : header.classList.remove('bg-header')
  window.addEventListener('scroll',bgHeader)
}

/* =================== Social reveal animation ==========*/

sr.reveal('.home__swiper, .home__footer')
sr.reveal('.home__circle', {scale: 1.5, delay: 300})
sr.reveal('.home__subcircle',{scale: 1.5,delay:300})
sr.reveal('.home__title',{scale:1,origin:'bottom',delay:1200})
sr.reveal('.swiper-button-prev,.swiper-button-next',{origin:'bottom'})