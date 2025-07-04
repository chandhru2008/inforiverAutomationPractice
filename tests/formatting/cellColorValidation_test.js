Feature('Changing the background color');
const tableRowSelector = require('../../pages/table/SelectCell');

const cellColorManager=require('../../pages/styles/CellColor');


Scenario('Change bgcolor to user definded color', async ({ I }) => {
    let region = 'USA';
    await I.amOnPage('/');
    await tableRowSelector.selectRow(region);
    await cellColorManager.applyColorToRow();
     I.wait(4)
});






