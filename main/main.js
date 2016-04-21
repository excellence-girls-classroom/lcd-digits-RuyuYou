function printLcdDisplay (inputs) {
    var allItenms = loadAllItems();
    var newInputs = stringSplit(inputs);
    var items = buildItems(newInputs , allItenms);
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
