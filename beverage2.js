const yargs = require('yargs');
const fs = require('fs');

const displaySavedTransaction = function (txn) {
  console.log('Employee ID,Beverage,Quantity,Date');
  console.log(`${txn.empId},${txn.beverage},${txn.qty},${txn.date.toJSON()}`);
};

const getAllTransaction = function () {
  const data = fs.readFileSync('data.txt', 'utf8');
  return JSON.parse(data);
};
const saveTransaction = function (txnDetail) {
  const txn = {
    empId: txnDetail.empId,
    beverage: txnDetail.beverage,
    qty: txnDetail.qty,
    date: new Date(),
  };
  const data = getAllTransaction();
  data.push(txn);
  fs.writeFileSync('data.txt', JSON.stringify(data));
  return txn;
};

const main = function () {
  if (yargs.argv.operation === 'query') {
    const txn = saveTransaction(yargs.argv);
    displaySavedTransaction(txn);
  }
};

main();
