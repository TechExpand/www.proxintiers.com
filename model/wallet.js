const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const WalletSchema = new Schema({
    name: String,
    address: String,
  });

  const Wallet = mongoose.model('wallet', WalletSchema);

  module.exports = Wallet;