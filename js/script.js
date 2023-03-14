document.getElementById('btn').onclick = function () {
    alert('Su mensaje me fue enviado. Muchas gracias!');
}

// DARK MODE
document.getElementById('id-sun').onclick = function(){
    document.getElementById('main_container').classList.remove('dark-mode')
    document.getElementById('id-moon').classList.remove('active')
    this.classList.add('active')
}

document.getElementById('id-moon').onclick = function(){
    document.getElementById('main_container').classList.add('dark-mode')
    document.getElementById('id-sun').classList.remove('active')
    this.classList.add('active')
}
const bodyEl = document.body
const hamburgerEl = document.querySelector('.hamburger')

hamburgerEl.addEventListener('click', () => {
	bodyEl.classList.toggle('active')
})