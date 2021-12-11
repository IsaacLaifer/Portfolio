function onReady() {

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

    setTimeout(()=>{
        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1)*400)
        });

    })
}

if (document.readyState !== "loading") {
    onReady(); 
} else {
    document.addEventListener("DOMContentLoaded", onReady);
}
