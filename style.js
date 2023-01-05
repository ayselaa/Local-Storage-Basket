
//! Qeyd:  Session Storage brouzeri baglayana qeder datalari saxliyir, Local Storage ise omurluk saxliyir.



let addButtons = document.querySelectorAll(".addButton");
let BasketCount = document.querySelector(".count");

addButtons.forEach((n) => {

window.addEventListener('load', function(){
   SetCounter()
});

function SetCounter() {
   let basket = JSON.parse(localStorage.getItem("basket"));
   if (basket !== null) {
      BasketCount.innerText = basket.length;
   }
   else{
      BasketCount.innerText = 0;
   }
}



   n.addEventListener('click', function() {
      let dataid = this.getAttribute("id");

      let BasketItems = JSON.parse(localStorage.getItem("basket"));
      if (BasketItems === null) {
         BasketItems = [];
      }
      let obj = BasketItems.find((n) => n.id == dataid);
      console.log(obj);

      if (obj === undefined) {
   
          let obj = {
            id: dataid,
            count: 1
          };
   
         BasketItems.push(obj);
      }
      else{
       obj.count++;
      }
      localStorage.setItem("basket",JSON.stringify(BasketItems) )
      BasketCount.innerText = BasketItems.length;

   });
});



let removeFromStorage = document.querySelector(".removeFromStorage");
let resetStorage = document.querySelector(".resetStorage");

resetStorage.addEventListener('click', function(){
    localStorage.clear();
    SetCounter();
});

removeFromStorage.addEventListener('click', function(){
  localStorage.removeItem();
});

