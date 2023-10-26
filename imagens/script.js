const painels = document.querySelectorAll('.painel')

painels.forEach(painel => {
    painel.addEventListener('click', () => {
        removeActiveClasses()
        painel.classList.add('active')
    })
})

function removeActiveClasses() {
    painels.forEach(painel => {
        painel.classList.remove('active')
    })
}