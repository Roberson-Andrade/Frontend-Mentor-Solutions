function dropDownMenu() {
    const dropBtn = document.querySelectorAll('li.faq-text__question')

    dropBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            if(!btn.classList.contains('active')){
                dropBtn.forEach(answer => {
                    answer.classList.remove('active')
                })

                btn.classList.add('active')
            } else {
                btn.classList.remove('active')
            }
        })
    })
}
