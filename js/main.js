// menu mobile
const menuMobile = () => {
    let navBar = document.querySelector('.nav__mobile');
    let btnMenu = document.querySelector('.btnmenu');
    btnMenu.addEventListener('click', () => {
        navBar.classList.toggle('active');
        btnMenu.classList.toggle('active');

    });
    window.addEventListener('resize', () => {
        if(window.innerWidth > 768) {
            btnMenu.classList.remove('active');
            navBar.classList.remove('active');
        }
    })
}
menuMobile();

// languages select
const langHandle = () => {
    let lang = document.querySelector('.header__lang');
    let currentLang = document.querySelector('.lang__current');
    let currentText = document.querySelector('.lang__current p');
    let optionLang = document.querySelector('.lang__option');

    lang.addEventListener('click', (e) => {
        currentLang.classList.toggle('active');
        optionLang.classList.toggle('active');
        e.stopPropagation();
    });

    optionLang.addEventListener('click', (e) => {
        let optionText = currentText.textContent;
        currentText.textContent = e.target.textContent;
        e.target.textContent = optionText;
    });

    document.addEventListener('click', () => {
        currentLang.classList.remove('active');
        optionLang.classList.remove('active');
    })
}
langHandle();

// slider
const slider = () => {
    let listItemSlider = document.querySelectorAll('.slider__item');
    let btnNext = document.querySelector('.btn-next');
    let btnPrev = document.querySelector('.btn-prev');
    let currentSlider = 0;
    listItemSlider.forEach((itemSlider, index) => {
        if(itemSlider.classList.contains('active')) {
            currentSlider = index;
        }
    })

    const goToSlider = (index) => {
        listItemSlider[currentSlider].classList.remove('active');
        listItemSlider[index].classList.add('active');
        currentSlider = index;
    }

    if(btnNext) {
        btnNext.addEventListener('click', () => {
            if(currentSlider < (listItemSlider.length - 1) ) {
                goToSlider(currentSlider + 1);
            } else {
                goToSlider(0);
            }
        })
    }
    
    if(btnPrev) {
        btnPrev.addEventListener('click', () => {
            if(currentSlider > 0 ) {
                goToSlider(currentSlider - 1);
            } else {
                goToSlider(listItemSlider.length - 1);
            }
        })
    }
}
slider();

// faq
const faq = () => {
    let answers = document.querySelectorAll(".faq__accordion-item");
        answers.forEach((event)=>{
            event.addEventListener('click',()=>{
                console.log(1);
                if(event.classList.contains("active")){
                    event.classList.remove("active");
                }
                else{
                    event.classList.add("active");
                }
            })
        })

}
faq();

// tab faq
const faqTab = () => {
    let tabText = document.querySelectorAll('.faq__tab-item');
    let tabList = document.querySelectorAll('.faq__accordion');
    
    tabText.forEach((item, index) => {
        item.addEventListener('click', () => {
            console.log(1);
            tabText.forEach((tab) => {
                tab.classList.remove('active');
            })
            tabList.forEach((tabs) => {
                tabs.classList.remove('active');
            })
            item.classList.add('active');
            tabList[index].classList.add('active');
        })
    })
    
}
faqTab();


// tab product detail
const productTab = () => {
    let tabText = document.querySelectorAll('.productInfo__tab li');
    let tabList = document.querySelectorAll('.productInfo__wrap');
    
    tabText.forEach((item, index) => {
        item.addEventListener('click', () => {
            tabText.forEach((tab) => {
                tab.classList.remove('active');
            })
            tabList.forEach((tabs) => {
                tabs.classList.remove('active');
            })
            item.classList.add('active');
            tabList[index].classList.add('active');
        })
    })
    
}
productTab();

// slider product detail
function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("buy__slider");
  var dots = document.getElementsByClassName("buy__slider-item");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].style.opacity = "0.5";
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].style.opacity = "1";
}
// slider img product detail
// const imgSlider = () => {
//     let wrap = document.querySelector('.productName__img-wrap');
//     let btnPrev = document.querySelector('.productName__icon-left');
//     let btnNext = document.querySelector('.productName__icon-right');
//     let itemWidth = document.querySelectorAll('.component__wrap-item')[0].clientWidth;
//     let items = document.querySelectorAll('.buy__slider-item');

//     let position = 0;
//     const showSlider = (element, pix, img) => {
//         position += pix;
//         if(position > 0) {
//             position = -element.clientWidth + pix;
//         }
//         else if(position < -element.clientWidth - pix) {
//             position = 0;
//         }
//         element.style.transform = "translateX(" + position +"px)";
//         // img.style.opacity = "1";
//     }
//     btnNext.addEventListener("click", function() {
//         showSlider(wrap, -itemWidth, items); 
//         console.log(1);
//     })

//     btnPrev.addEventListener("click", function() {
//         showSlider(wrap, itemWidth, items); 
//     })
// }
// imgSlider();

// popup video
const popupVideo = () => {
    let btnVideo = document.querySelector('.component__card-icon');
    let popupVideo = document.querySelector('.popup-video');
    let closeVideo = document.querySelector('.popup-video .close');
    let iframe = document.querySelector('.popup-video iframe');

    btnVideo.addEventListener('click', () => {
        let idVideo = btnVideo.getAttribute('data-video-id');
            iframe.setAttribute('src', `https://www.youtube.com/embed/${idVideo}?autoplay=1`);
            popupVideo.classList.add('active');
    })
    closeVideo.addEventListener('click', () => {
        iframe.setAttribute('src', '');
        popupVideo.classList.remove('active');
    })

    document.querySelector('.popup-video').addEventListener('click', () => {
        iframe.setAttribute('src', '');
        popupVideo.classList.remove('active');
    })
}
popupVideo();