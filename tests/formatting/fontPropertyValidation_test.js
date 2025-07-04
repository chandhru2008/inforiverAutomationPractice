Feature('apply the font color ');
const selectCell = require('../../pages/table/SelectCell');
const cellTextBold = require('../../pages/styles/CellTextBold');


Scenario('apply the bold format text', async ({ I }) => {
  await I.amOnPage('/');
  let region = 'USA';
  let boldId = 'fontBold-b';

  const fontPropertyValidation = {
    property: 'font-weight',
    regionName: region,
    expectedValue: 600,
  };
  selectCell.selectRow(region);
  cellTextBold.selectFontProperty(boldId);
  selectCell.validateCellCssProperty(fontPropertyValidation);
})