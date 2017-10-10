describe('convertUahTo', function () {
    it('valid quantity successfully converts to EUR', function() {
        
        var quantity = 10;
        var convertedValue = convertUahTo(quantity, "eur");

        expect(convertedValue).toEqual(315);
    });

    it('valid quantity successfully converts to USD', function() {
        
        var quantity = 100;
        var convertedValue = convertUahTo(quantity, "usd");

        expect(convertedValue).toEqual(2670);
    });

    it('not supported currency returns Error', function() {
        
        var quantity = 100;
        var convertedValue = convertUahTo(quantity, "cad");

        expect(convertedValue).toEqual("error");
    });
});