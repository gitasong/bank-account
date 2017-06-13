// Business Logic
function Account(accountName, currentBalance) {
  this.accountName = accountName;
  this.currentBalance = currentBalance;
};

Account.prototype.addTransaction = function(transactionAmount) {
  return this.currentBalance + transactionAmount;
};

// User Interface
$(document).ready(function() {
  $("form#registration").submit(function(event) {
    event.preventDefault();
    var customerName = $("input#customer-name").val();
      console.log(customerName);
    var initialDeposit = parseInt($("input#initial-deposit").val());
      console.log(initialDeposit);
  });
});
