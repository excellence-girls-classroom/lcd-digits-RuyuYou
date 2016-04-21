function printLcdDisplay (inputs) {
    var allItenms = loadAllItems();
    var newInputs = stringSplit(inputs);
    var items = buildItems(newInputs , allItenms);
    var display = buildPrintDisplay(items);
    console.log (display);
}

function stringSplit(inputs) {
    var newInputs = inputs.split('');
    return newInputs;
}

function findItem (newInput , allItems) {
    for (var j=0; j<allItems.length; j++) {
        if (newInput === allItems[j].number) {
            return { number:allItems[j].number ,lcd:allItems[j].lcd };
        }
    }
}

function buildItems(newInputs , allItems) {
    var items = [];

    for (var i=0; i<newInputs.length; i++) {
        items.push (findItem(newInputs[i] , allItems));
    }
    return items;
}

function buildPrintDisplay (items) {
    var display = '...\n';


    for (var i=0 ; i < items.length ; i++) {
        for (var j=0 ; j<items[0].lcd.length ; j++) {
            display +=items[j].lcd[i]+' ';
        }
        display += '\n';
    }

    return display;
}
