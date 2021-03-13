const yargs = require('yargs');

const saveTransaction = function (txnDetail) {
  const txn = {
    empId: txnDetail.empId,
    beverage: txnDetail.beverage,
    qty: txnDetail.qty,
    date: new Date(),
  };
  console.log(txn);
};

const main = function () {
  if (yargs.argv.operation === 'save') {
    saveTransaction(yargs.argv);
  }
};

main();
