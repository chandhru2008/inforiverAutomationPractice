const { I } = inject();

const assert = require('assert')

const hexa = require('../../utils/hexaToRgbConverterUtils');

const tableRowSelector = {
    locators: {
        getRowByRegion: (region) =>
            `(//span[text()='${region}']/ancestor::div[contains(@id,'table-row-')])[1]`,

        cellXPath: (rowId) => `//div[contains(@id,'${rowId}')]`
    },



    async selectRow(region) {
        I.waitForElement(this.locators.getRowByRegion(region), 5)
        await I.click(this.locators.getRowByRegion(region));
        I.wait(4);
    },

    async validateCellCssProperty(cssValidation) {
        const rowFullId = await I.grabAttributeFrom(this.locators.getRowByRegion(cssValidation.regionName), 'id');
        const rowId = rowFullId.split('_')[0];
        const cellXPath = this.locators.cellXPath(rowId);

        const totalCells = await I.grabNumberOfVisibleElements(cellXPath);
        console.log("totalCells", totalCells);

        for (let i = 1; i <= totalCells; i++) {
            let currentCell = `(${cellXPath})[${i}]`;
            if (cssValidation.property == 'color') {
                currentCell = `(${cellXPath})[${i}]//span`;
            }
            const actualValue = await I.grabCssPropertyFrom(currentCell, cssValidation.property);
            console.log("actualValue", actualValue);
            assert.equal(actualValue, hexa.hexToRgb(cssValidation.expectedValue), ` Mismatch in '${cssValidation.property}' at cell ${i}: Expected ${hexa.hexToRgb(cssValidation.expectedValue)}, Found ${actualValue}`);
            console.log(actualValue, hexa.hexToRgb(cssValidation.expectedValue), cssValidation.property);
        }

    },

    async validateCellTextProperty(cssValidation) {
        const rowFullId = await I.grabAttributeFrom(this.locators.getRowByRegion(cssValidation.regionName), 'id');
        const rowId = rowFullId.split('_')[0];
        const cellXPath = this.locators.cellXPath(rowId);
        const totalCells = await I.grabNumberOfVisibleElements(cellXPath);
        console.log("totalCells", totalCells);

        for (let i = 1; i <= totalCells; i++) {
             const currentCell = `(${cellXPath})[${i}]//span`;
            const actualValue = await I.grabCssPropertyFrom(currentCell, cssValidation.property);
            console.log("actualValue", actualValue);
            assert.equal(actualValue, cssValidation.expectedValue, ` Mismatch in '${cssValidation.property}' at cell ${i}: Expected ${cssValidation.expectedValue}, Found ${actualValue}`);
            console.log(actualValue,cssValidation.expectedValue, cssValidation.property);
        }
    }

};

module.exports = tableRowSelector;
