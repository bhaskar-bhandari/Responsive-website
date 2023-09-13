const burger = document.querySelector('.burger')
const navbar = document.querySelector('.navbar')
const navList = document.querySelector('.nav-list')
const rightNav = document.querySelector('.rightNav')
const textfooter = document.querySelector('.text-footer')

burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp')
    navList.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-nav-resp')
})


// const year =  new getFullYear()
// const month =  new getMonth()
// const date =  new getDay()
const date = new Date().toLocaleDateString()
textfooter.innerHTML = date
