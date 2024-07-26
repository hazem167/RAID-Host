let loginbtn = document.querySelector(".login-btn");
let droplogin = document.querySelector(".drop-login");
loginbtn.onclick = () => {
    droplogin.classList.toggle("drop-login-open")
}
//menu icon
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar ul");




menu.onclick = () => {
    menu.classList.toggle('move');
    navbar.classList.toggle("open-menu");
}

// Header BackGround here it is problem
let header = document.querySelector("header");
window.onscroll = function () {
    header.classList.toggle('shadow',window.scrollY > 0);
}
//home swiper 
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction:false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable:true
    },
});

/*accordian  */
const accoridanitmees = document.querySelectorAll(".accordian-item");
accoridanitmees.forEach((item) => {
    const accrodianheader = item.querySelector(".accordian-header");

    accrodianheader.addEventListener('click', () => {
        const openitem = document.querySelector(".accordion-open");
        toggleItem(item);
        if (openitem && openitem !== item) {
            toggleItem(openitem);
        }
    })
})
const toggleItem = (item) => {
    const accordioncontent = item.querySelector(".accrodion-content");

    if (item.classList.contains("accordion-open")){
        accordioncontent.removeAttribute('style');
        item.classList.remove('accordion-open');
    }
    else {
        accordioncontent.style.height = accordioncontent.scrollHeight+"px";
        item.classList.add('accordion-open');
    }
}

//controll panel
var swiper = new Swiper(".control-images", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction:false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable:true
    },
    navigation: {
        nextEl:"swiper-button-next",
        prevEl:"swiper-button-prev"
    }
});

