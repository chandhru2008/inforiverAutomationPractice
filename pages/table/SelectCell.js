const { I } = inject();

const assert = require('assert')

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
    
        for (let i = 1; i <= totalCells; i++) {
            const currentCell = `(${cellXPath})[${i}]`;
            const actualValue = await I.grabCssPropertyFrom(currentCell, cssValidation.property);
            assert.strictEqual(actualValue, cssValidation.expectedValue, ` Mismatch in '${cssValidation.property}' at cell ${i}: Expected ${cssValidation.expectedValue}, Found ${actualValue}`);
        }
    },
    
    

    // async validateTheColorApply(color, region, colorvalue) {
    //     const rowFullId = await I.grabAttributeFrom(this.locators.getRowByRegion(region), 'id');
    //     console.log("rowFullId", rowFullId);

    //     const rowId = rowFullId.split('_')[0];
    //     console.log("rowId", rowId)
    //     const cellXpath = this.locators.cellXpath(rowId);
    //     const count = await I.grabNumberOfVisibleElements(cellXpath)
    //     for (let i = 1; i <= count; i++) {
    //         const eachCell = `(${cellXpath})[${i}]`;
    //         const bgColor = await I.grabCssPropertyFrom(eachCell, color);
    //         console.log(color, region, colorvalue)
    //         assert.ok(colorvalue === bgColor, "color is mismatching");
    //         console.log(color, region, colorvalue)
    //     }

    // }

};

module.exports = tableRowSelector;
