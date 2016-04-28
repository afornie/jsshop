var saleMgr = require("../../src/bs/sale_mgr");

describe('my test suite', function() {
    it("should multiply 3 and 5", function () {
        var product = 3 * 5;
        expect(product).toBe(15);
    });
});

describe('SaleMgr', function() {
    it("should make a sale when there is stock", function () {
        saleMgr.createSale("Tom", "GameBoy", 9);
    });
});

