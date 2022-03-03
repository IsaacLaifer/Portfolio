//FLAT SCREEN SCRIPT

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
  
          setTimeout(()=>{
              logoSpan.forEach((span, idx)=>{
                  setTimeout(()=>{
                      span.classList.remove('active');
                      span.classList.add('fade');
                  }, (idx + 1)*50)
              })
          },2000);
  
          setTimeout(()=>{
              intro.style.top = '-100vh';
          },2300)
      })
  }
  
  if (document.readyState !== "loading") {
      onReady(); 
  } else {
      document.addEventListener("DOMContentLoaded", onReady);
  }
  
  // NAVBAR SCRIPT
  
  const hamburger = document.querySelector('.hamburger');
  const mobile_menu = document.querySelector('.mobile-nav')
  hamburger.addEventListener('click', function(){
      hamburger.classList.toggle('is-active');
      mobile_menu.classList.toggle('is-active');
      
  });
  
  
  // POP UP BOX 
  const serviceItems = document.getElementsByClassName("service-items");
  const popup = document.querySelector(".popup-box")
  const popupCloseBtn = popup.querySelector(".popup-close-btn");
  const popupCloseIcon = popup.querySelector(".popup-close-icon");
  for(let i=0;i<6;i++){
  serviceItems[i].addEventListener("click",function(event){
    console.log("ok")
    if(event.target.tagName.toLowerCase() == "button"){
       const item =event.target.parentElement;
       const h3 = item.querySelector("h3").innerHTML;
       const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
       popup.querySelector("h3").innerHTML = h3;
       popup.querySelector(".popup-body").innerHTML = readMoreCont;
       popupBox();
    }
  
  })}
  
  
  
  
  popupCloseBtn.addEventListener("click", popupBox);
  popupCloseIcon.addEventListener("click", popupBox);
  
  popup.addEventListener("click", function(event){
     if(event.target == popup){
        popupBox();
     }
  })
  
  function popupBox(){
    popup.classList.toggle("open");
  }
  