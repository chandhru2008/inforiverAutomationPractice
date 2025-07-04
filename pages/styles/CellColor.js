const { I } = inject();

const cellColorManager = {
  locators: {
    fillColorIcon: '((//div[contains(@class,"editor-colorpicker-icon")])[1]/i)[1]',
  },

  async applyColorToRow() {
    await I.click(this.locators.fillColorIcon);
    await I.wait(2); 
  },
};

module.exports = cellColorManager;
