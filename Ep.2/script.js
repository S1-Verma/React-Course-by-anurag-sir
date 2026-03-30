const leftBascket = document.querySelector('.leftBascket span');
const rigthBasket = document.querySelector('.rigthBascket span');

const leftBTN = document.querySelector('.leftBascket button');
const rightBTN = document.querySelector('.rigthBascket button');


leftBTN.addEventListener('click', (e)=>{
   rigthBasket.textContent = +(rigthBasket.innerText) - 1
   leftBascket.textContent = +(leftBascket.innerText) + 1
})

rightBTN.addEventListener('click', (e)=>{
    leftBascket.textContent = +(leftBascket.innerText) - 1
    rigthBasket.textContent = +(rigthBasket.innerText) + 1
})