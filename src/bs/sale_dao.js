var exports = module.exports = {};

function  createSale(user, product, amount) {
    console.log("Creating sale for " + user + ", " +
    product + " and amount " + amount);
}

exports.createSale = createSale;
