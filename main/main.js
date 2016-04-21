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

function buildItems(newInputs , allItems) {
    var items = [];

    for (var i=0; i<newInputs.length; i++) {
        for (var j=0; j<allItems.length; j++) {
            if (newInputs[i] === allItems[j].number) {
                items.push ({ number:allItems[j].number ,lcd:allItems[j].lcd });
            }
        }
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
