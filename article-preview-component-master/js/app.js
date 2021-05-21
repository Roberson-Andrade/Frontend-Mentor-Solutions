const btnShare = document.getElementById('btn-share')
const activeState = document.getElementById('active-state')
const shareIcon = document.getElementById('share-icon')
const bottom = document.getElementById('bottom')

btnShare.addEventListener('click', () => {
    
        if(activeState.classList.contains('active-state')) {
            activeState.classList.remove('active-state')
            btnShare.classList.add('profile-btn-active')
            shareIcon.style.fill = 'var(--bgBody-color)'
            if(window.matchMedia('(max-width:925px)').matches) bottom.style.backgroundColor = 'var(--heading-text)'
        } else {
            activeState.classList.add('active-state')
            btnShare.classList.remove('profile-btn-active')
            shareIcon.style.fill = 'var(--heading-text)'
            if(window.matchMedia('(max-width:925px)').matches) bottom.style.backgroundColor = '#fff'
        }
    console.log()
})

const windowChange = () => {
    if(window.matchMedia('(min-width:925px)').matches) {
        activeState.classList.add('active-state')
        btnShare.classList.remove('profile-btn-active')
        shareIcon.style.fill = 'var(--heading-text)'
        bottom.style.backgroundColor = '#fff'
    }
}

addEventListener('resize', windowChange)