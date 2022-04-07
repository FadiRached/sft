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
  //var count = 0;
  //var m1SFT = document.querySelector('#M1R0')
  //var num = document.querySelector('#M1');
  //var rank = document.querySelector('#R0')
  //var SFTID = "M" + num + "R" + rank;
  


}

function ranking(SFTID, count){
  if(count < 100 && SFTID == "M1R0"){
    //rank = 
    //SFTID = "M" + num + "R" + rank;
    SFTID = document.querySelector('M1R0');
    return SFTID;
  }
  if(count >= 100 && count < 1000 && SFTID == "M1R0"){
    SFTID = document.querySelector('M1R1');
    return SFTID;
  }
  if(count >= 1000 && count < 2000 && SFTID == "M1R1"){
    SFTID = document.querySelector('M1R2')
    return SFTID;
  }
  if(count >= 2000 && SFTID == "M1R2"){
    SFTID = document.querySelector('M1R3');
    return SFTID;
  }
 

}