var nav = document.querySelector('#nav');

window.addEventListener('scroll',function(){
    if(window.scrollY > 80){
        nav.style.height = '70px';
    }
    else{
        nav.style.height = '80px';
    }
    if(window.scrollY > 600){
        nav.style.backgroundColor = 'white';
    }
    else{
        nav.style.backgroundColor = 'red';
    }
})