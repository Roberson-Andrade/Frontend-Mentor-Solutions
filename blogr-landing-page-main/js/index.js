
function dropdownButton() {
    const navBtns = document.querySelectorAll('.header__nav__link:not(:last-child)')
    console.log()
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if(!btn.classList.contains('header__nav__link--active')) {
                navBtns.forEach(navbtn => {
                    navbtn.classList.remove('header__nav__link--active')
                })
    
                btn.classList.add('header__nav__link--active')
    
            } else {
                btn.classList.remove('header__nav__link--active')
    
            }
            
        })
    })
}

function hamburgerButton() {
    const hamburgerBtn = document.querySelector('.header__hamburger-button')
    const navList = document.querySelector('.header__nav__list')
    console.log(navList)

    hamburgerBtn.addEventListener('click', () => {
        if(!navList.classList.contains('header__nav__list--active')) {
            navList.classList.add('header__nav__list--active')
            hamburgerBtn.classList.add('header__hamburger-button--active')
        } else {
            navList.classList.remove('header__nav__list--active')
            hamburgerBtn.classList.remove('header__hamburger-button--active')
        }
        console.log('ninja')
    })
}


function scrollMoviment() {
    const imgs = document.querySelectorAll('[data-anime]')
    const animationClass = 'animate'

    window.addEventListener('scroll', () => {
        const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4

        imgs.forEach(e => {
            if(windowTop > e.offsetTop) {
                e.classList.add(animationClass)
            } else {
                e.classList.remove(animationClass)
            }
        })
    })
}

hamburgerButton()
scrollMoviment()
dropdownButton()