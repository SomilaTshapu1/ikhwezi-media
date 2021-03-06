const navbarTogglerBtn = document.querySelector('.navbar-toggler');
const navbarCollapseDiv = document.querySelector('.navbar-collapse');

navbarTogglerBtn.addEventListener('click', () =>{
    navbarCollapseDiv.classList.toggle('show-navbar-collapse');
    if(navbarCollapseDiv.classList.contains('show-navbar-collapse')){
        navbarTogglerBtn.querySelector('img').src = "close.png"
    }
    else(navbarTogglerBtn.querySelector('img').src = "menu.png")
})
//fixed margin nav bar
const header = document.querySelector('.header');
window.addEventListener('scroll', () =>{
    if(window.pageYOffset > 100){
        header.classList.add('fixed-navbar');
    }
    else{
        header.classList.remove('fixed-navbar');
    }
})
