

const full_nav_menu = document.querySelector('.full_nav_menu');
document.addEventListener('scroll', ()=>{
    if (window.scrollY > 50) {

        full_nav_menu.classList.add('scroll_nav');
    }else{
        full_nav_menu.classList.remove('scroll_nav');
    }
})