// Business Logic
function Account(accountName, currentBalance) {
  this.accountName = accountName;
  this.currentBalance = currentBalance;
};

Account.prototype.addTransaction = function(transactionAmount) {
  return this.currentBalance + transactionAmount;
};
// User Interface
