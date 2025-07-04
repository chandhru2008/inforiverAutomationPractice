const fontColorManger = require("../../pages/styles/FontColor");
const tableRowSelector = require("../../pages/table/SelectCell");

Feature('Change font color');

Scenario('Changing font color', async ({ I }) => {
    let region = 'USA';
    let fontColor = '#e83030';
    const cssValidation = {
        property: 'color',
        regionName: region,
        expectedValue: fontColor,
    };
    I.amOnPage('/');
    await tableRowSelector.selectRow(region);
    await fontColorManger.applyFontColorToRow(fontColor);
    await tableRowSelector.validateCellCssProperty(cssValidation);
})