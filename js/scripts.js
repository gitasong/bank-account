// Business Logic
initialDeposit = 0;
depositAmount = 0;
withdrawalAmount = 0;
transactionAmount = 0;

function Account(accountName, currentBalance) {
  this.accountName = accountName;
  this.currentBalance = currentBalance;
};

Account.prototype.addTransaction = function(transactionAmount) {
  return this.currentBalance + transactionAmount;
};

function getCurrentBalanceFromInitialDeposit(initialDeposit) {
    console.log("Initial Deposit = " + initialDeposit);
  Account.currentBalance = initialDeposit;
    console.log("Current Balance = " + Account.currentBalance);
  return Account.currentBalance;
};

function getTransactionAmount(depositAmount, withdrawalAmount) {
  transactionAmount = depositAmount - withdrawalAmount;
  console.log("depositAmount: " + depositAmount);
  console.log("withdrawalAmount: " + withdrawalAmount);
  console.log("transaction amount: " + transactionAmount);
  return transactionAmount;
};

// function updateBalance(transactionAmount) {
//   accountCurrentBalance = Account.currentBalance + transactionAmount;
//     console.log(Account.currentBalance);
//   return accountCurrentBalance;
// };

// User Interface
$(document).ready(function() {
  var accountName;
  var initialDeposit;
  var newAccount;
  var accountCurrentBalance;
  var depositAmount;
  var withdrawalAmount;
  var transactionTotal;

  $("form#registration").submit(function(event) {
    event.preventDefault();
    accountName = $("input#account-name").val();
      // console.log(accountName);
    initialDeposit = parseInt($("input#initial-deposit").val());
      // console.log(initialDeposit);

    newAccount = new Account(accountName, initialDeposit);
      console.log("New Account = " + newAccount);

    accountCurrentBalance = getCurrentBalanceFromInitialDeposit(initialDeposit);
      console.log("Account Current Balance = " + accountCurrentBalance);
  });

  $("form#transaction").submit(function(event) {
    event.preventDefault();
    depositAmount = parseInt($("input#deposit-amount").val());
      // console.log(depositAmount);
    withdrawalAmount = parseInt($("input#withdrawal-amount").val());
      // console.log(withdrawalAmount);

    transactionTotal = getTransactionAmount(depositAmount, withdrawalAmount);
      console.log("Current Transaction Amount = " + transactionTotal);
  });

  $(".current-balance").text();
});
