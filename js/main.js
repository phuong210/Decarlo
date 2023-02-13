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

    document.querySelector('.btn-next').addEventListener('click', () => {
        if(currentSlider < (listItemSlider.length - 1) ) {
            // listItemSlider[currentSlider].classList.remove('active');
            // listItemSlider[currentSlider + 1].classList.add('active');
            // currentSlider++;
            goToSlider(currentSlider + 1);
        } else {
            // listItemSlider[currentSlider].classList.remove('active');
            // listItemSlider[0].classList.add('active');
            // currentSlider = 0;
            goToSlider(0);
        }
        
    })

    document.querySelector('.btn-prev').addEventListener('click', () => {
        if(currentSlider > 0 ) {
            // listItemSlider[currentSlider].classList.remove('active');
            // listItemSlider[currentSlider - 1].classList.add('active');
            // currentSlider--;
            goToSlider(currentSlider - 1);
        } else {
            // listItemSlider[currentSlider].classList.remove('active');
            // listItemSlider[listItemSlider.length - 1].classList.add('active');
            // currentSlider = listItemSlider.length -1;
            goToSlider(listItemSlider.length - 1);
        }
        
    })
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
    let tabText = document.querySelectorAll('.faq__tab .faq__tab-item');
    let tabList = document.querySelectorAll('.faq__accordion');
    tabText.addEventListener('click', () => {
        console.log(1);
    })
    // tabText.forEach((item, index) => {
    //     item.addEventListener('click', () => {
    //         console.log(1);
    //         tabText.forEach((tab) => {
    //             tab.classList.remove('active');
    //         })
    //         tabList.forEach((tabs) => {
    //             tabs.classList.remove('active');
    //         })
    //         item.classList.add('active');
    //         tabList[index].classList.add('active');
    //     })
    // })
}
faqTab();
