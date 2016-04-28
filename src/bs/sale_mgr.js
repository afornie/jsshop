var stockMgr = require("./stock_mgr.js");
var saleDao = require("./sale_dao.js");
var exports = module.exports = {};

function  createSale(user, product, amount) {

    if (stockMgr.checkStock(product) > amount) {
        saleDao.createSale(user, product, amount);
    } else {
        console.log("Not enough stock");
    }
}

exports.createSale = createSale;

createSale("Ana", "Etrusco Football", 3);
createSale("Ana", "Etrusco Football", 300);
