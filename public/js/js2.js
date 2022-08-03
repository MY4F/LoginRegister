const navButtton = document.querySelector(".nav-button");
const list=document.querySelector(".nav-burger");
const listItems= document.querySelectorAll('li');
const desktopContainer=document.querySelector('.desktop-container');
const bodyy=document.querySelector('body');
const imgClick=document.querySelectorAll('.h3-click');
const homeImg = document.querySelectorAll('.img1');
const homeText= document.querySelectorAll('.text1');
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');
const rdStandard = document.querySelectorAll('.rd-standard');
const standardPrice = document.querySelectorAll('.standard-price');
const rdPremium = document.querySelectorAll('.rdPremium');
const premiumPrice = document.querySelectorAll('.premiumPrice');
const rdElite = document.querySelectorAll('.rdElite');
const elitePrice = document.querySelectorAll('.elitePrice');
const requestedText=document.querySelector('.requested-type');
const quantityInput = document.querySelectorAll('.order-quality-input');
const options = {
  root:null,
  threshold:0,
  rootMargin:"0px 0px -150px 0px"
}
const observer = new IntersectionObserver((entries,observer)=>{
  entries.forEach(entry =>{
      if(!entry.isIntersecting){
        return;
      }
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
  })
},options);
faders.forEach(section=>{
  observer.observe(section);
})
sliders.forEach(slide=>{
  observer.observe(slide);
})
navButtton.addEventListener('click',()=>{
  if(list.style.top==='-560px' && window.innerWidth<751|| list.style.top==='-560px'  && window.innerWidth<751 ){
    list.style.top = '58px';
    setTimeout(()=>{
      document.querySelector('.container').style.top = "0px";
    },0);
  }
  else{
    list.style.top = "-560px";
  }
});
listItems[0].addEventListener('click',()=>{
  if(list.style.display==='none'  && window.innerWidth<751|| list.style.display===''  && window.innerWidth<751){
    list.style.display='flex';
  }
  else{
    list.style.display='';
  }
});

listItems[1].addEventListener('click',()=>{
  if(list.style.display==='none' && window.innerWidth<751|| list.style.display==='' && window.innerWidth<751){
    list.style.display='flex';
  }
  else{
    list.style.display='';
  }
});

listItems[2].addEventListener('click',()=>{
  if(list.style.display==='none'  && window.innerWidth<751|| list.style.display===''  && window.innerWidth<751){
    list.style.display='flex';
  }
  else{
    list.style.display='';
  }
});
rdStandard[0].addEventListener('click',()=>{
  standardPrice[0].childNodes[0].textContent='130 EGP ';
  standardPrice[0].childNodes[1].textContent='/card';
  requestedText.value='1-10';
  quantityInput[0].placeholder="How many cards you need: 1-10";
  console.log(quantityInput.placeholder);
})
rdStandard[1].addEventListener('click',()=>{
  standardPrice[0].childNodes[0].textContent='114 EGP ';
  standardPrice[0].childNodes[1].textContent='/card';
  quantityInput[0].placeholder="How many cards you need: 11-20";
  requestedText.value='11-20';
})
rdStandard[2].addEventListener('click',()=>{
  standardPrice[0].childNodes[0].textContent='104 EGP ';
  standardPrice[0].childNodes[1].textContent='/card';
  quantityInput[0].placeholder="How many cards you need: 21-30";
  requestedText.value='21-30';
})
rdStandard[3].addEventListener('click',()=>{
  standardPrice[0].childNodes[0].textContent='Custom price';
  standardPrice[0].childNodes[1].textContent='';
  quantityInput[0].placeholder="How many cards you need: 31+";
  requestedText.value='31+';
})

rdPremium[0].addEventListener('click',()=>{
  premiumPrice[0].childNodes[0].textContent='159 EGP ';
  premiumPrice[0].childNodes[1].textContent='/card';
  quantityInput[0].placeholder="How many cards you need: 1-10";
  requestedText.value='1-10';
})
rdPremium[1].addEventListener('click',()=>{
  premiumPrice[0].childNodes[0].textContent='143 EGP ';
  premiumPrice[0].childNodes[1].textContent='/card';
  quantityInput[0].placeholder="How many cards you need: 11-20";
  requestedText.value='11-20';
})
rdPremium[2].addEventListener('click',()=>{
  premiumPrice[0].childNodes[0].textContent='123 EGP ';
  premiumPrice[0].childNodes[1].textContent='/card';
  quantityInput[0].placeholder="How many cards you need: 21-30";
  requestedText.value='21-30';
})
rdPremium[3].addEventListener('click',()=>{
  premiumPrice[0].childNodes[0].textContent='Custom price';
  premiumPrice[0].childNodes[1].textContent='';
  quantityInput[0].placeholder="How many cards you need: 31+";
  requestedText.value='31+';
})

rdElite[0].addEventListener('click',()=>{
  elitePrice[0].childNodes[0].textContent='227 EGP ';
  elitePrice[0].childNodes[1].textContent='/card';
  quantityInput[0].placeholder="How many cards you need: 1-10";
  requestedText.value='1-10';
})
rdElite[1].addEventListener('click',()=>{
  elitePrice[0].childNodes[0].textContent='195 EGP ';
  elitePrice[0].childNodes[1].textContent='/card';
  quantityInput[0].placeholder="How many cards you need: 11-20";
  requestedText.value='11-20';
})
rdElite[2].addEventListener('click',()=>{
  elitePrice[0].childNodes[0].textContent='162 EGP ';
  elitePrice[0].childNodes[1].textContent='/card';
  quantityInput[0].placeholder="How many cards you need: 21-30";
  requestedText.value='21-30';
})
rdElite[3].addEventListener('click',()=>{
  elitePrice[0].childNodes[0].textContent='Custom price';
  elitePrice[0].childNodes[1].textContent='';
  quantityInput[0].placeholder="How many cards you need: 31+";
  requestedText.value='31+';
})
if(window.innerWidth<751){
  imgClick[1].addEventListener('click',()=>{
    window.scrollTo(0,670);
  });
}
window.addEventListener('resize',()=>{
  if(window.innerWidth<751){
    imgClick[1].addEventListener('click',()=>{
      window.scrollTo(0,670);
    });
  }
})