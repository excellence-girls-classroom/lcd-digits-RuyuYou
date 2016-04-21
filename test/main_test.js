describe('Unit Test',function () {
    var inputs;
    var allItems;

    beforeEach(function () {
        allItems = loadAllItems ();
        inputs = "910";
    });

    describe('stringSplit()',function () {
        it('should print correct string',function () {
            var newInputs = stringSplit (inputs);
            var expectNewInputs = [
                '9',
                '1',
                '0'
            ];
            expect(newInputs).toEqual(expectNewInputs);
        });
    });

});
