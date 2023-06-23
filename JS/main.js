let nav = document.querySelector(".main nav")

let landSpan = document.querySelector(".main .land .land-items > span")

let h1 = document.querySelector(".main .land .land-items > h1")

let prag = document.querySelector(".main .land .land-items p")

let btns = document.querySelector(".main .land .land-items .btns")

document.addEventListener('DOMContentLoaded', function() {

    setTimeout(() => {

        nav.style.opacity = "1"

    }, 3000)

    setTimeout(() => {

        landSpan.style.transform = "rotateY(0deg)"

    }, 2000)

    setTimeout(() => {

        h1.style.transform = "rotateY(0deg)"

    }, 2000)

    setTimeout(() => {

        prag.style.transform = "translateY(0)"

        prag.style.opacity = "1"

    }, 2000)

    setTimeout(() => {

        btns.style.transform = "translateY(0)"

        btns.style.opacity = "1"

    }, 2000)

    setTimeout(() => {

        mackbook.style.transform = "rotateX(0deg)"

    }, 2000)

})

let mackbook = document.querySelector(".main .land .mackbook")

let landItems = document.querySelector(".land .land-items")

let background = document.querySelector(".mackbook img:last-of-type")

let appItems = document.querySelectorAll(".app .app-items > div")

let sponsorImg = document.querySelectorAll(".app .sponsor img")

let product = document.querySelector(".app .sponsor")

let producth1 = document.querySelector(".app .sponsor h1")

let products = document.querySelector("#products")

let productsHeadh1 = document.querySelector("#products .products-items .products-head h1")

let productsHeadP = document.querySelector("#products .products-items .products-head p")

let productImg1 = document.querySelector("#products .products-items .products-1 > div:first-of-type img")

let productImg2 = document.querySelector("#products .products-items .products-1 > div:nth-of-type(2) img:last-of-type")

let productDivh5 = document.querySelector("#products .products-items .products-1 > div:last-of-type h5")

let productDivh2 = document.querySelector("#products .products-items .products-1 > div:last-of-type h2")

let productDivP = document.querySelector("#products .products-items .products-1 > div:last-of-type p")

let productDivA = document.querySelector("#products .products-items .products-1 > div:last-of-type a")

let product2Img = document.querySelector("#products .products-items .products-2 > div:last-of-type img:nth-of-type(2)")

let product2Img2 = document.querySelector("#products .products-items .products-2 > div:last-of-type img:last-of-type")

let product2Divh5 = document.querySelector("#products .products-items .products-2 > div:first-of-type h5")

let product2Divh2 = document.querySelector("#products .products-items .products-2 > div:first-of-type h2")

let product2DivP = document.querySelector("#products .products-items .products-2 > div:first-of-type p")

let produc2tDivA = document.querySelector("#products .products-items .products-2 > div:first-of-type a")

let solutions = document.querySelector("#solutions")

let solutionsHead = document.querySelector("#solutions .solutions-items .solutions-head")

let solutionsImg = document.querySelectorAll("#solutions .solutions-items .solutions-ele > div > div > div img:last-of-type")

let testimonials = document.querySelector("#what-they-said")

let testimonialsTitle = document.querySelector("#what-they-said .testimonials-head h1")

let testimonialsParaghrap = document.querySelector("#what-they-said .testimonials-head p")

let testimonialsDiv = document.querySelectorAll("#what-they-said .testimonials-items > div")

let pricing = document.querySelector("#pricing")

let pricingH1 = document.querySelector("#pricing .pricing-head h1")

let pricingDiv = document.querySelectorAll("#pricing .pricing-items .basic > div")

let pricingDiv2 = document.querySelectorAll("#pricing .pricing-items .ultra > div")

let pricingP = document.querySelector("#pricing .pricing-head p")

let signUp = document.querySelector(".sign-up")

let signUpH1 = document.querySelector(".sign-up .sign-up-title h1")

let signUpP = document.querySelector(".sign-up .sign-up-title p") 

let signUpImg = document.querySelector(".sign-up .sign-up-items img:first-of-type")

let signUpDiv = document.querySelector(".sign-up .sign-up-items div")

let signUpitems = document.querySelector(".sign-up .sign-up-items")

let signUpBefore = window.getComputedStyle(signUpitems, '::before')

let nav1th = document.querySelector(".main nav ul li:first-of-type a")

let nav2th = document.querySelector(".main nav ul li:nth-of-type(2) a")

let nav3th = document.querySelector(".main nav ul li:nth-of-type(3) a")

let nav4th = document.querySelector(".main nav ul li:last-of-type a")

window.onscroll = function() {

    mackbook.style.transform = 'translateY(-'+scrollY / 3+'px)'

    landItems.style.transform = 'translateY(-'+scrollY / 2+'px)'

    background.style.transform = 'scale(0.'+parseInt(4+scrollY / 70)+')'

    if (scrollY == 0) {

            mackbook.style.transform = "translateY(0)"

            landItems.style.transform = "translateY(0)"

            background.style.transform = 'scale(0.4)'

        }

    if (scrollY >= 320) {

            mackbook.style.transform = "translateY(-100px)"

            landItems.style.transform = "translateY(-200px)"

            background.style.transform = 'scale(1)'

        }

    if (window.scrollY >= (product.offsetTop - 1300)) {

            appItems.forEach(app => {

                app.style.opacity = "1"

            })

        }

        if (window.scrollY >= (product.offsetTop - 500)) {

            producth1.style.opacity = "1"

            producth1.style.transform = "translateY(0)"

            sponsorImg.forEach(img => {

                img.style.opacity = "1"

                img.style.transform = "translateY(0)"

            })

        }

        if (window.scrollY >= (productsHeadh1.offsetTop - 500)) {

            productsHeadh1.style.opacity = "1"

            productsHeadh1.style.transform = "translateY(0)"

            productsHeadP.style.opacity = "1"

            productsHeadP.style.transform = "translateY(0)"

        }

        if (window.scrollY >= productsHeadh1.offsetTop) {

            productImg1.style.transform = "translateY(0) rotateY(0)"

            productImg1.style.opacity = "1"

            productImg2.style.transform = "translateY(0) rotateY(0)"

            productImg2.style.opacity = "1"

            productDivh5.style.transform = "translateY(0)"

            productDivh5.style.opacity = "1"

            productDivh2.style.transform = "translateY(0)"

            productDivh2.style.opacity = "1"

            productDivP.style.transform = "translateY(0)"

            productDivP.style.opacity = "1"

            productDivA.style.transform = "translateY(0)"

            productDivA.style.opacity = "1"

        }

        if (window.scrollY >= (product2Img.clientHeight + 3000)) {

            product2Img.style.transform = "translateY(0) rotateY(0deg)"

            product2Img.style.opacity = "1"

            product2Img2.style.transform = "translateY(0) rotateY(0deg)"

            product2Img2.style.opacity = "1"

            product2Divh5.style.transform = "translateY(0)"

            product2Divh5.style.opacity = "1"

            product2Divh2.style.transform = "translateY(0)"

            product2Divh2.style.opacity = "1"

            product2DivP.style.transform = "translateY(0)"

            product2DivP.style.opacity = "1"

        }

        if (window.scrollY >= (solutions.offsetTop - 200)) {

            solutionsImg.forEach(img => {

                img.style.transform = "translateX(0)"

                img.style.opacity = "1"

            })

            solutionsHead.style.transform = "translateY(0)"

            solutionsHead.style.opacity = "1"

        }

        if (window.scrollY >= (testimonials.offsetTop - 200)) {

            testimonialsTitle.style.transform = "translateY(0)"

            testimonialsTitle.style.opacity = "1"

            testimonialsParaghrap.style.transform = "translateY(0)"

            testimonialsParaghrap.style.opacity = "1"

            testimonialsDiv.forEach(div => {

               div.style.opacity = "1"

            })

        }

        if (window.scrollY >= (pricing.offsetTop - 200)) {

            pricingH1.style.transform = "translateY(0)"

            pricingH1.style.opacity = "1"

            pricingP.style.transform = "translateY(0)"

            pricingP.style.opacity = "1"

            pricingDiv.forEach(div => {

                div.style.opacity = "1"

            })

            pricingDiv2.forEach(div => {

                div.style.opacity = "1"

            })

        }

        if (window.scrollY >= (signUp.offsetTop - 200)) {

            signUpH1.style.transform = "translateY(0)"

            signUpH1.style.opacity = "1"

            signUpP.style.transform = "translateY(0)"
            
            signUpP.style.opacity = "1"

        }

        if (window.scrollY >= (signUp.offsetTop - 100)) {

            signUpImg.style.transform = "translateY(80px)"

            signUpitems.style.setProperty("--HeightBefore", "80px")

            setTimeout(() => {

                signUpImg.style.boxShadow = "0px 0px 75px 20px rgb(33 121 255 / 62%)"

                signUpDiv.style.opacity = "1"

            }, 1000)



        }

        if (window.scrollY >= (products.offsetTop - 50)) {

            nav1th.classList.add("active")

        } else {

            nav1th.classList.remove("active")

        }

        if (window.scrollY >= (solutions.offsetTop - 50)) {

            nav2th.classList.add("active")

            nav1th.classList.remove("active")

        } else {

            nav2th.classList.remove("active")

        }

        if (window.scrollY >= (testimonials.offsetTop - 50)) {

            nav3th.classList.add("active")

            nav2th.classList.remove("active")

        } else {

            nav3th.classList.remove("active")

        }

        if (window.scrollY >= (pricing.offsetTop - 50)) {

            nav4th.classList.add("active")

            nav3th.classList.remove("active")

        } else {

            nav4th.classList.remove("active")

        }

        if (window.scrollY > (pricing.offsetTop + pricing.clientHeight - 50)) {

            nav4th.classList.remove("active")

        }

}

var swiper = new Swiper(".mySwiper", {

      navigation: {

        nextEl: ".swiper-button-next",

        prevEl: ".swiper-button-prev",

      },

      pagination: {

        el: ".swiper-pagination",

        clickable: true,

      },

      loop: true,

})

var swiper = new Swiper(".mySwiper2", {

    slidesPerView: 1.5,

    navigation: {

        nextEl: ".swiper-button-next",

        prevEl: ".swiper-button-prev",

      },

      pagination: {

        el: ".swiper-pagination",

        clickable: true,

      },

      loop: true,

})