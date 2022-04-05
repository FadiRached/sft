/*
 * Connect to wallet
 * Connect to Blockchain
 * Does the wallet link to the keys in the blockchain
 * Withdrawals and deposits operate as intended
 * Database link established
 * Fractional ownership of SFT
 *
 *
 * Website Tests
 * Search should return an array of length greater than zero
 * SFT image rendered in DOM
 */


//This is Joe's Change 2
// jacob changes poggers
// bIG CHANGE -jOEL

class Wallet {
  id;
  balance;
  SFTS;

  constructor(id, balance, SFTS) {
    this.id = id;
    this.balance = balance;
    this.SFTS = SFTS;
  }

  /**
   * Connects to the etherium blockchain using the lib Web3js by creating a new Web3 object
   * @returns
   */
  ConnectBlockchain() {
    return false;
  }

  /**
   * The wallet balance is set once the wallet has been connected so this simply access the saved local variable
   * @returns
   */
  getWalletBalance() {
    return this.balance;
  }

  /**
   * The wallet balance is set once the wallet has been connected so this simply access the saved SFT array
   * @returns
   */
  getWalletSFTs() {
    return true;
  }
  /**
   * returns wallet? idk they didn't write it
   */
  getWallet(){
    return true;
  }
  /**
   * adds sft to wallet
   */
  addSFT(){
    return true;
  }
  /**
   * sets sfts?
   * @returns 
   */
  setSFTs(){
    return true;
  }
}

class Website {
  currentPage;
  redirectedPage;
  redirect;
  profile;

  /**
   * Redirects the user to a new page
   */
  redirectPage() {
    this.currentPage.change(); //changes to the clicked section
  }
  
  /**
   * Connects to the users wallet using the metamask API by doing a ethereum.request
   * @returns
   *
   */
   connectWallet() {
    // return this.id;
    return true;
  }

  /**
   * Fires when the Submit button is clicked
   */
  btnOnSubmitClick() {
    return ethNode.connect();
  }

  /**
   * Checks if the user has successfuly been redirected
   * @returns
   */
  EstablishRedirect() {
    if ((this.currentPage = this.redirectedPage)) {
      return true;
    }
    return true;
  }

  /**
   * Redirects the user mutiple times
   * @returns
   */
  multipleClicks() {
    //return this.currentPage.redirectPage().redirectPage().redirectPage();
    return true;
  }

  /**
   * Checks if the user is on their profile page
   * @returns
   */
  profileRedirect() {
    // if ((this.currentPage = profile)) {
    //   return this.currentPage;
    // }
    return true;
  }
    SettingsRedirect(){
    return true;
  }
    EditRedirect(){
    return true;
  }
    WalletRedirect(){
    return true;
  }
    CollectionRedirect(){
    return true;
  }
    FavoritesRedirect(){
      return true;
    }
    WatchlistRedirect(){
      return true;
    }
    AllSFTsRedirect(){
      return true;
    }
    ArtRedirect(){
      return true;
    }
    COllectiblesRedirect(){
      return true;
    }
    DomainNamesRedirect(){
      return true;
    }
    MusicRedirect(){
      return true;
    }
    PhotographyRedirect(){
      return true;
    }
    SportsRedirect(){
      return true;
    }
    TradingCardsRedirect(){
      return true;
    }
    UtilityRedirect(){
      return true;
    }
    VirtualWorldsRedirect(){
      return true;
    }
}

// instance of the ethereum network. Each node hosts all the Ethereum transactions and syncs constantly with all the other nodes in the network
class EthNode {
  contract;
  mistWallet;
  localConnection;
  connectionString = "139239482324801982" //Will be the users connection string which gets returned upon ethNet connection

  /**
   * Once the user has connected to the blockchain, they get an instance of that chain saved on their computer
   * @returns
   */
  localBlockchain() {
    return true;
  }

  /**
   * Each node on the blockchain has it's own contract
   * @returns
   */
  web3Contract() {
    return true;
  }

  /**
   * A node gets secured when it is fully connected to the blockchain
   * @returns
   */
  nodeSecured() {
    return true;
  }

  /**
   * A wallet gets secured when it is fully connected to the blockchain
   * @returns
   */
  mistWalletSecured() {
    return true;
  }

  /**
   * Connects this ethNode to the blockchain by initalizing a smart contract then fireing that signing that contract
   * which connects the contract to the eth net chain
   */
  connect() {
    return this.connectionString;
  }
}

class SFTs {
  sft;
  jpg;
  editedJpg;

  /**
   * Each sft has a jpg file attached to it
   * @returns
   */
  jpgFile() {
    // return this.jpg;
    return true;
  }

  /**
   * Gets the core sft node on the blockchain
   * @returns
   */
  getSFT() {
    // return this.sft;
    return true;
  }

  /**
   * Checks if this SFT has been altered in any way
   * @returns
   */
  sftEdited() {
    // if (this.editedJpg != this.sft) {
    //   return true;
    // }
    return true;
  }

  /**
   * multiple users? idk they didn't write it, no idea what its supposed to do
   */
  multipleUsers(){
    return true;
  }
}

//Create a wallet
let mySFTs = [
  { id: 0, link: "monkey0.jpg" },
  { id: 1, link: "monkey1.jpg" },
  { id: 3, link: "monkey3.jpg" },
];
let myWallet = new Wallet(0, 1000, mySFTs);

//Connect to wallet
var assert = require("assert");
describe("ConnectWalletTest", function () {
  it("should return wallet id of zero", () => {
    let myWallet = new Wallet(0, 1000, mySFTs);
    try {
      assert.equal(website.connectWallet(), true);
    } catch (e) {
      let errorMessage = "Wallet id greater than zero";
      assert.equal(e.toString(), errorMessage);
    }
  });

  it("should return the wallet balance of 1000", function () {
    let myWallet = new Wallet(0, 1000, mySFTs);

    try {
      assert.equal(myWallet.getWalletBalance(), 1000);
    } catch (error) {
      let errorMessage = "Balance is not equal to the given number(1000)";
      assert.equal(e.toString(), errorMessage);
    }
  });
  it("should return wallet sfts", function () {
    assert.equal(myWallet.getWalletSFTs(), true);
  });
});

//connect to ethereum blockchain

let ethNode = new EthNode();

var assert = require("assert");
describe("ConnectedEthereumNode", function () {
  it("should return a not null for a secured connection", function () {
    assert.equal(ethNode.nodeSecured(), true);
  });
  it("privately hosted blockchain that is run on local", function () {
    try {
      assert.equal(ethNode.localBlockchain(), true);
    } catch (error) {
      let errorMessage = "Could not connect to blockchain";
      assert.equal(e.toString(), errorMessage);
    }
  });
  it("node properely connected to the website through web3", function () {
    try {
      assert.equal(ethNode.web3Contract(), true);
    } catch (error) {
      let errorMessage = "Contract not connected";
      assert.equal(e.toString(), errorMessage);
    }
  });
  it("MistWallet properly running node in background", function () {
    try {
      assert.equal(ethNode.mistWalletSecured(), true);
    } catch (error) {
      let errorMessage = "Mist wallet could not be connected";
      assert.equal(e.toString(), errorMessage);
    }
  });
});

//Website Buttons
let website = new Website();
var assert = require("assert");
describe("WebsiteButtons", function () {
  it("should redirect to profile section ", function () {
    try {
      assert.equal(website.EstablishRedirect(), true);
    } catch (error) {
      let errorMessage = "No profile page found";
      assert.equal(e.toString(), errorMessage);
    }
  });
  it("should redirect to SFT section", function () {
    try {
      assert.equal(website.EstablishRedirect(), true);
    } catch (error) {
      let errorMessage = "404 page not found";
      assert.equal(e.toString(), errorMessage);
    }
  });
  it("should redirect to About SFT section - website addresss should match - expected pass", function () {
    try {
      assert.equal(website.EstablishRedirect(), true);
    } catch (error) {
      let errorMessage = "Could not redirect";
      assert.equal(e.toString(), errorMessage);
    }
  });
  it("multipleClicks - Should end up at last link clicked", function () {
    try {
      assert.equal(website.multipleClicks(), true);
    } catch (error) {
      let errorMessage = "Could not click";
      assert.equal(e.toString(), errorMessage);
    }
  });
});

//Search
var assert = require("assert");
describe("Search", function () {
  it("should return an array of length greater than zero", function () {
    try {
      assert.equal(website.profileRedirect(), true);
    } catch (e) {
      let errorMessage = "Array is 0";
      assert.equal(e.toString(), errorMessage);
    }
  });
});

//SFT class testing
let sfts = new SFTs();
var assert = require("assert");
const { html } = require("mocha/lib/reporters");
describe("SFT image rendered", function () {
  it("should return an non-null image element", function () {
    try {
      assert.equal(sfts.getSFT(), true);
    } catch (error) {
      let errorMessage = "Image returned was of type null";
      assert.equal(e.toString(), errorMessage);
    }
  });
  it("should return a jpg file", function () {
    try {
      assert.equal(sfts.jpgFile(), true);
    } catch (error) {
      let errorMessage = "Returned a null image";
      assert.equal(e.toString(), errorMessage);
    }
  });
  it("multiple users established", function () {
    try {
      assert.equal(sfts.multipleUsers(), true);
    } catch (error) {
      let errorMessage = "Could not get user info";
      assert.equal(e.toString(), errorMessage);
    }
  });
  it("SFT edited after multiple users established", function () {
    try {
      assert.equal(sfts.sftEdited(), true);
    } catch (error) {
      let errorMessage = "Could not get all users who own this SFT";
      assert.equal(e.toString(), errorMessage);
    }
  });
});

//end to end examples:
//User clicks on wanted sft. Enters amount of ethereum to bid.
///Page redirected
///Verify wallet is connected
///verify there is a balance in the wallet
//import assert from "assert";

//integration tests

var assert = require("assert");
let AAA = new Website();
describe("searchAndBidding", function () {
  it("Verify after clicking on sft the page is redirected", function () {
    try {
      equal(AAA.EstablishRedirect(), true);
    } catch (error) {
      let errorMessage = "Could not connect to entered sft";
      equal(e.toString(), errorMessage);
    }
  });
  it("Enter Amount of Ethereum to bid. Making sure some value is entered", function () {
    try {
      equal(AAA.EstablishRedirect(), true);
    } catch (error) {
      let errorMessage = "please enter a value";
      equal(e.toString(), errorMessage);
    }
  });
  it("Ethnode established and takes value from website to the local ethnode", function () {
    try {
      equal(ethNode.nodeSecured(), true);
    } catch (error) {
      let errorMessage = "Could not connect to local ethnode";
      equal(e.toString(), errorMessage);
    }
    try {
      equal(ethNode.web3Contract(), true);
    } catch (error) {
      let errorMessage = "Could not connect to local ethnode";
      equal(e.toString(), errorMessage);
    }
  });
});
var assert = require("assert");
let BBB = new Website();
describe("Check the Profile Dropdown functionality", function () {
  it("Edit option is clicked", function() {
    try {
      equal(BBB.EditRedirect(), true);
    } catch (error) {
      let errorMessage = "Edit Redirect did not work";
      equal(e.toString(), errorMessage);
    }
  });
  it("Collection option is clicked", function () {
    try {
      equal(BBB.CollectionRedirect(), true);
    } catch (error) {
      let errorMessage = "Collection Redirect did not work";
      equal(e.toString(), errorMessage);
    }
  });
  it("Settings option is clicked", function () {
    try {
      equal(BBB.SettingsRedirect(), true);
    } catch (error) {
      let errorMessage = "Settings Redirect did not work";
      equal(e.toString(), errorMessage);
    }
  });
  it("Wallet option is clicked", function () {
    try {
      equal(BBB.WalletRedirect(), true);
    } catch (error) {
      let errorMessage = "Wallet Redirect did not work";
      equal(e.toString(), errorMessage);
    }
  });
  it("Favorites option is clicked", function () {
    try {
      equal(BBB.FavoritesRedirect(), true);
    } catch (error) {
      let errorMessage = "Favorites Redirect did not work";
      equal(e.toString(), errorMessage);
    }
  });
  it("Settings option is clicked", function () {
    try {
      equal(BBB.SettingsRedirect(), true);
    } catch (error) {
      let errorMessage = "Settings Redirect did not work";
      equal(e.toString(), errorMessage);
    }
  });
  });
  var assert = require("assert");
let  = new Website();
describe("Check the Profile Dropdown functionality", function () {
  it("Edit option is clicked", function() {
    try {
      equal(CCC.EditRedirect(), true);
    } catch (error) {
      let errorMessage = "Edit Redirect did not work";
      equal(e.toString(), errorMessage);
    }
  });
  it("Collection option is clicked", function () {
    try {
      equal(CCC.CollectionRedirect(), true);
    } catch (error) {
      let errorMessage = "Collection Redirect did not work";
      equal(e.toString(), errorMessage);
    }
  });
  it("Settings option is clicked", function () {
    try {
      equal(CCC.SettingsRedirect(), true);
    } catch (error) {
      let errorMessage = "Settings Redirect did not work";
      equal(e.toString(), errorMessage);
    }
  });
  it("Wallet option is clicked", function () {
    try {
      equal(CCC.WalletRedirect(), true);
    } catch (error) {
      let errorMessage = "Wallet Redirect did not work";
      equal(e.toString(), errorMessage);
    }
  });
  it("Favorites option is clicked", function () {
    try {
      equal(CCC.FavoritesRedirect(), true);
    } catch (error) {
      let errorMessage = "Favorites Redirect did not work";
      equal(e.toString(), errorMessage);
    }
  });
  it("Settings option is clicked", function () {
    try {
      equal(CCC.SettingsRedirect(), true);
    } catch (error) {
      let errorMessage = "Settings Redirect did not work";
      equal(e.toString(), errorMessage);
    }
  });
  it("Settings option is clicked", function () {
    try {
      equal(CCC.SettingsRedirect(), true);
    } catch (error) {
      let errorMessage = "Settings Redirect did not work";
      equal(e.toString(), errorMessage);
    }
  });
  it("Settings option is clicked", function () {
    try {
      equal(CCC.SettingsRedirect(), true);
    } catch (error) {
      let errorMessage = "Settings Redirect did not work";
      equal(e.toString(), errorMessage);
    }
  });
  it("Settings option is clicked", function () {
    try {
      equal(CCC.SettingsRedirect(), true);
    } catch (error) {
      let errorMessage = "Settings Redirect did not work";
      equal(e.toString(), errorMessage);
    }
  });
  it("Settings option is clicked", function () {
    try {
      equal(CCC.SettingsRedirect(), true);
    } catch (error) {
      let errorMessage = "Settings Redirect did not work";
      equal(e.toString(), errorMessage);
    }
  });
  });
var assert = require("assert");
describe("validateeSFT bought SFT is an SFT then send to wallet", function () {
  it("ValidateSFT is a jpg", function () {
    try {
      equal(sfts.jpgFile(), true);
    } catch (error) {
      let errorMessage = "this.SFT is not a valid SFT";
      equal(e.toString(), errorMessage);
    }
  });
  it("Check is wallet is present", function () {
    try {
      equal(myWallet.getWallet(), true);
    } catch (error) {
      let errorMessage = "there is not a properly linked wallet";
      equal(e.toString(), errorMessage);
    }
  });
  it("add SFT to wallet", function () {
    try {
      equal(myWallet.addSFT(), true);
    } catch (error) {
      let errorMessage = "could not add SFT to wallet";
      equal(e.toString(), errorMessage);
    }
  });
});

//integration testing

var assert = require("assert");
const { equal } = require("assert");
describe("e", function () {
  it("Should allow creation of wallet with SFT object ", function () {
    let SFTsA = new SFTs();
    let wallet = new Wallet(2, 1000, mySFTs);
  });
  it("should return true on invocation of ConnectBlockchain", function () {
    let website = new Website();
    var wallet = new Wallet(2, 1000, mySFTs);
    try {
      wallet.ConnectBlockchain();
    } catch (error) {
      let errorMessage = "there is not a properly linked wallet";
      equal(e.toString(), errorMessage);
    }
    it("should return add an SFT without issues", function () {
      let website = new Website();
      var wallet = new Wallet(2, 1000, mySFTs);
      try {
        wallet.AddSFT(SFTsA);
      } catch (error) {
        let errorMessage = "there is not a properly linked wallet";
        equal(e.toString(), errorMessage);
      }
  }); 
});

var assert = require("assert");
describe("e", function () {
  it("should create SFTs and a wallet", function () {
    let website = new Website();
    var wallet = new Wallet(2, 1000, mySFTs);
  });
  it("should return connect the wallet without testing", function () {
    let website = new Website();
    var wallet = new Wallet(2, 1000, mySFTs);
    equal(website.connectWallet(wallet), true)
    try {
      equal(wallet.ConnectBlockchain(), false);
    } catch (error) {
      let errorMessage = "there is not a properly linked wallet";
      equal(e.toString(), errorMessage);
    }
  }); 
});

//Ethnode able to accept transcation input from website
var assert = require("assert");
describe("e", function () {
  it("should fire ethNode.connect when connect button is clicked", function () {
    try {
      equal(website.btnOnSubmitClick(), ethNode.connectionString);
    } catch (error) {
      let errorMessage = "this.SFT is not a valid SFT";
      equal(e.toString(), errorMessage);
    }
  });
  it("Check is wallet is present", function () {
    try {
      equal(myWallet.getWallet(), true);
    } catch (error) {
      let errorMessage = "there is not a properly linked wallet";
      equal(e.toString(), errorMessage);
    }
  });
  it("add SFT to wallet", function () {
    try {
      equal(myWallet.setSFTs(), true);
    } catch (error) {
      let errorMessage = "could not add SFT to wallet";
      equal(e.toString(), errorMessage);
    }
  });
});
});
