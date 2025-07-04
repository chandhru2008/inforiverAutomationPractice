Feature('Changing the background color');
const tableRowSelector = require('../../pages/table/SelectCell');

const cellColorManager = require('../../pages/styles/CellColor');


Scenario('Change bgcolor to user definded color', async ({ I }) => {
    let region = 'USA';
    let fillColor = '#e83030';
    const cssValidation = {
        property: 'background-color',
        regionName: region,
        expectedValue: fillColor
    };
    await I.amOnPage('/');
    await tableRowSelector.selectRow(region);
    await cellColorManager.applyColorToRow(fillColor);
    await tableRowSelector.validateCellCssProperty(cssValidation)
    I.wait(4);
    
});






