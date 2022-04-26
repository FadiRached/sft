class wallet {
  id;
  balance;
  SFTS;

  constructor(id, balance, SFTS) {
    this.id = id;
    this.balance = balance;
    this.SFTS = SFTS;
  }

  // This is Semaan edit to see if this visual studio code thing works
  
  ConnectWallet() {
    return this.id;
  }

  ConnectBlockchain() {
    return false;
  }

  /**
   *
   * @returns
   */
  GetWalletBalance() {
    return this.balance;
  }

  /**
   *
   * @returns
   */
  GetWalletSFTs() { 
    return this.SFTS;
  }

  StoreSFT(img) {
    this.SFTS.push(img);
  }

  /**
   *
   * @returns
   */
  EstablishRedirect() {
    return website.label;
  }
}