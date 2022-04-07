function btnConnectWalletOnClick() {
    console.log('click');
}

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

}