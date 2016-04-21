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

    describe('buildItems()',function () {
        it ('should print correct Items',function () {
            var inputs = [
                '9',
                '1',
                '0'
            ];
            var items = buildItems (inputs,allItems);
            var expectItems = [
                {
                    number:'9',
                    lcd :[
                        '._.',
                        '|_|',
                        '..|'
                    ]
                },
                {
                    number:'1',
                    lcd :[
                        '...',
                        '..|',
                        '..|'
                    ]
                },
                {
                    number:'0',
                    lcd :[
                        '._.',
                        '|.|',
                        '|_|'
                    ]
                }
            ];
            expect(items).toEqual(expectItems);
        });
    });

    describe('buildPrintDisplay()',function () {
        it ('should print correct printLCD',function () {
            var inputItems = [
                {
                    number:'9',
                    lcd :[
                        '._.',
                        '|_|',
                        '..|'
                    ]
                },
                {
                    number:'1',
                    lcd :[
                        '...',
                        '..|',
                        '..|'
                    ]
                },
                {
                    number:'0',
                    lcd :[
                        '._.',
                        '|.|',
                        '|_|'
                    ]
                }
            ];
            var display =buildPrintDisplay (inputItems);
            var expectDisplay =
                '...\n'+
                '._. ... ._.\n'+
                '|_| ..| |.|\n'+
                '..| ..| |_|\n';
            expect(display).toEqual(expectDisplay);
        });
    });

});
