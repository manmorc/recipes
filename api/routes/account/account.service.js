const AccountModel = require('../../db/schemas/account.schema').Account;

async function create(accountData){
  console.log('create');

  return AccountModel.create(accountData);
}

module.exports = {
  create
};
