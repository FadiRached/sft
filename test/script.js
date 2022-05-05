const { text } = require("express");

function btnConnectWalletOnClick() {
    console.log('click');
}
//taylor
// When the user clicks on the button, open the modal
function btnBuyThis(btn) {
    var img = btn.nextElementSibling.cloneNode(false);
    var desc = btn.parentNode.children[3].cloneNode(true);
    var purchase = btn.cloneNode(true);
    purchase.onclick = purchaseSFT;
    purchase.id = "purchasebtn";
    purchase.innerHTML = "Purchase SFT";
    document.querySelector(".modal-content").appendChild(img);
    document.querySelector(".modal-content").appendChild(desc);
    document.querySelector(".modal-content").appendChild(purchase);
    document.querySelector("#myModal").style.display = "block";
}

//Opens a modal with a form that lets you list your SFT
function btnSell(btn){
  var title = document.createElement("h2");
  title.textContent = "Sell Your SFT";
  var div1 = document.createElement("div");
  var label1 = document.createElement("label");
  label1.innerHTML = "Please Select your SFT:";
  var div2 = document.createElement("div");
  var imageInput = document.createElement("input");
  imageInput.type = "file";
  imageInput.name = "image";
  imageInput.id = "newSFT";
  var div3 = document.createElement("div");
  var label2 = document.createElement("label");
  label2.innerHTML = "Please Provide a name for your SFT:";
  var div4 = document.createElement("div");
  var textInput = document.createElement("input");
  textInput.type = "text";
  textInput.name = "name";
  textInput.id = "name";
  textInput.placeholder = "Enter a Name";

  var div5 = document.createElement("div");
  var submitBtn = document.createElement("input");
  submitBtn.type = "submit";
  submitBtn.value = "Submit";
  submitBtn.id = "submit";

  div1.appendChild(label1);
  div2.appendChild(imageInput);
  div3.appendChild(label2);
  div4.appendChild(textInput);
  div5.appendChild(submitBtn);

  document.querySelector(".modal-content").appendChild(title);
  document.querySelector(".modal-content").appendChild(div1);
  document.querySelector(".modal-content").appendChild(div2);
  document.querySelector(".modal-content").appendChild(div3);
  document.querySelector(".modal-content").appendChild(div4);
  document.querySelector(".modal-content").appendChild(div5);

  document.querySelector("#myModal").style.display = "block";

  submitBtn.addEventListener('click', event => {
    var divParent = document.querySelector("#storeCards");
    var newCard = document.createElement("div");
    newCard.className = "card";
    var button = document.createElement("button");
    button.onclick = "btnBuyThis(this)";
    button.id = "btnBuyThis";
    button.textContent = "Buy This!";
    var image = document.createElement("img");
    image.id = "addedIMG";

    var name = document.createElement("p");
    name.textContent = document.querySelector("#name").value;

    newCard.appendChild(button);
    newCard.appendChild(image);
    newCard.appendChild(name);

    divParent.appendChild(newCard);
  });
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
  document.querySelector("#myModal").style.display = "none";
  while(document.querySelector(".modal-content").children[1] != null){
    document.querySelector(".modal-content").removeChild(document.querySelector(".modal-content").children[1]);
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == document.querySelector("#myModal")) {
    document.querySelector("#myModal").style.display = "none";
    while(document.querySelector(".modal-content").children[1] != null){
        document.querySelector(".modal-content").removeChild(document.querySelector(".modal-content").children[1]);
      }
  }
}

function purchaseSFT(){
  //var count = 0;
  //var m1SFT = document.querySelector('#M1R0')
  //var num = document.querySelector('#M1');
  //var rank = document.querySelector('#R0')
  //var SFTID = "M" + num + "R" + rank;
  


}

function ranking(SFTID, count){
  // checks the count thats tied to the number of SFTID of a certain monkey sold and then updates the rank if it reach a theashold
  if(count < 100 && SFTID == "M1R0"){
    // later on we need to create a string to get the right image by combing rank png with the monkey png
    // we would need to alter the img src by first setting the monkey to background and then overlaying ranking over them
    // not sure how to do that so for now we are cycling through them
    //rank = 
    //SFTID = "M" + num + "R" + rank;
    //return SFTID;
    SFTID = document.querySelector('M1R0');
    return SFTID;
  }
  // the non-rank and first rank have the same ID
  if(count >= 100 && count < 1000 && (SFTID == "M1R0" || SFTID == "M1R1")){
    SFTID = document.querySelector('M1R1');
    return SFTID;
  }
  // the next one has the new id from rank 1
  if(count >= 1000 && count < 2000 && (SFTID == "M1R1" || SFTID == "M1R2")){
    SFTID = document.querySelector('M1R2')
    return SFTID;
  }
  
  if(count >= 2000 && (SFTID == "M1R2" || SFTID == "M1R3")){
    SFTID = document.querySelector('M1R3');
    return SFTID;
  }
  // This is able to search for a SFT based on the charaters you put into the searchbar 
  // Later on want to include the ability to look for authors, kinds, and more detailed searches
 function search(input){
   //calls the searchbar under store.html
    var input = document.getElementById('search').value
    var input = input.toLowerCase();
    // gets the list of SFT based on the class SFT in the index
    var x = document.getElementsByClassName('SFT');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
  }
  // Need to get something from wallet and post it on the website as selling
  // Not sure how to get image from wallet or how to post it to website
  function selling(){

  }

  //New Code 


  
}
