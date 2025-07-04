Feature('apply the font color ');
const selectCell = require('../../pages/table/SelectCell');
const cellTextBold = require('../../pages/styles/CellTextBold');


// Scenario('apply the bold format text', async ({ I }) => {
//   await I.amOnPage('/');
//   let region = 'USA';
//   let boldId = 'fontBold-b';

//   const fontPropertyValidation = {
//     property: 'font-weight',
//     regionName: region,
//     expectedValue: '600',
//   };
//   await selectCell.selectRow(region);
//   await cellTextBold.selectFontProperty(boldId);
//   await selectCell.validateCellTextProperty(fontPropertyValidation);
// })


// Scenario('apply the italic format text', async ({ I }) => {
//     await I.amOnPage('/');
//     let region = 'USA';
//     let italicId = 'fontItalic-b';
  
//     const fontPropertyValidation = {
//       property: 'font-style',
//       regionName: region,
//       expectedValue: 'italic',
//     };
//     await selectCell.selectRow(region);
//     await cellTextBold.selectFontProperty(italicId);
//     await selectCell.validateCellTextProperty(fontPropertyValidation);
//   })



Scenario('apply the underline format text', async ({ I }) => {
    await I.amOnPage('/');
    let region = 'USA';
    let italicId = 'underLine-b';
  
    const fontPropertyValidation = {
      property: 'text-decoration-line',
      regionName: region,
      expectedValue: 'underline',
    };
    await selectCell.selectRow(region);
    await cellTextBold.selectFontProperty(italicId);
    await selectCell.validateCellTextProperty(fontPropertyValidation);
  })