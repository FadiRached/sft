class wallet {
  id;
  balance;
  SFTS;

  constructor(id, balance, SFTS) {
    this.id = id;
    this.balance = balance;
    this.SFTS = SFTS;
  }

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
    let mySFTs = [
      { id: 0, link: "monkey0.jpg" },
      { id: 1, link: "monkey1.jpg" },
      { id: 3, link: "monkey3.jpg" },
    ];
    return mySFTs;
  }

  /**
   *
   * @returns
   */
  EstablishRedirect() {
    return website.label;
  }
}
