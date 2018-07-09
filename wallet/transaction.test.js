const Transaction = require ('./transaction');
const Wallet = require ('./index');

describe ('Transaction', () => {
  let transaction, wallet, recepient, amount;

  beforeEach (() => {
    wallet = new Wallet();
    amount = 50;
    recepient = 'r3c1p13nt';
    transaction = Transaction.newTransaction(wallet, recepient, amount);
  });

  it ('outputs the `amount` subtracted from the wallet balance', () => {
    expect(transaction.outputs.find(output => output.address === wallet.publicKey).amount)
     .toEqual(wallet.balance - amount);
  });

  it ('outputs the `amount` added to the recepient', () => {
    expect(transaction.outputs.find(output => output.address === recepient).amount)
     .toEqual(amount);
  });

  it ('input the balance of the wallet', () => {
    expect(transaction.input.amount).toEqual(wallet.balance);
  });

  describe ('transacting with an amount that exceeds the balance', () => {
    beforeEach (() => {
      amount = 50000;
      transaction = Transaction.newTransaction(wallet, recepient, amount);
    });
  
    it ('does not create the transaction', () => {
      expect(transaction).toEqual(undefined);
    });
  });
});