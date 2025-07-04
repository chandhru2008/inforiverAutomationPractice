const { I } = inject();

const fontColorManger = {
    locators: {
        fontColorIcon: '((//div[contains(@class,"editor-colorpicker-icon")])[2]/i)[2]',
        selectColor: (color) => `//div[contains(@class,'bf-ui-colopicker-Palette')]//*[@fill='${color}']`
    },

    async applyFontColorToRow(fontColor) {
        await I.click(this.locators.fontColorIcon);
        await I.click(this.locators.selectColor(fontColor));
    },
};

module.exports = fontColorManger;