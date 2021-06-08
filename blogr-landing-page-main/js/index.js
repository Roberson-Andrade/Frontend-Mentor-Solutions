
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

dropdownButton()