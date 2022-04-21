function btnConnectWalletOnClick() {
    console.log('click');
}

// When the user clicks on the button, open the modal
function btnBuyThis(btn) {
    var img = btn.nextElementSibling.cloneNode(false);
    var desc = btn.parentNode.children[3].cloneNode(true);
    var purchase = document.createElement("button");
    purchase.onclick = function() { purchaseSFT(img)};
    purchase.id = "purchasebtn";
    purchase.innerHTML = "Purchase SFT";
    document.querySelector(".modal-content").appendChild(img);
    document.querySelector(".modal-content").appendChild(desc);
    document.querySelector(".modal-content").appendChild(purchase);
    document.querySelector("#myModal").style.display = "block";
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
    clearModal();
  }
}

function clearModal(){
  while(document.querySelector(".modal-content").children[1] != null){
    document.querySelector(".modal-content").removeChild(document.querySelector(".modal-content").children[1]);
  }
}

function purchaseSFT(img){
  //Increase rank in store
  //apply sft to profile

  //Need to figure out a database to apply picture to. This is testing code.
  console.log(document.querySelector("h1").textContent);
  window.location.href = "collection.html";
  console.log(document.querySelector("h1").textContent);
  var newCard = document.querySelector(".card").cloneNode(true);
  newCard.children[0] = img;
  document.querySelector("#collectionCards").appendChild(newCard);
}
