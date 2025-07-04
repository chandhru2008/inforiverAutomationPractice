const { I } = inject();

const cellColorManager = {
    locators: {
        fillColorIcon: '((//div[contains(@class,"editor-colorpicker-icon")])[1]/i)[2]',
        selectColor: (color) => `//div[contains(@class,'bf-ui-colopicker-Palette')]//*[@fill='${color}']`
        
    },

    async applyColorToRow(fillColor) {
        await I.click(this.locators.fillColorIcon);
        await I.click(this.locators.selectColor(fillColor));
    },
};

module.exports = cellColorManager;
