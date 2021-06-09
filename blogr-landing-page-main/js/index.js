
function dropdownButton() {
    const navBtns = document.querySelectorAll('.header__nav__link:not(:last-child)')

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

scrollMoviment()
dropdownButton()