const { I } = inject();

const tableRowSelector = {
  locators: {
    getRowByRegion: (region) => 
      `(//span[text()='${region}']/ancestor::div[contains(@id,'table-row-')])[1]`,
  },

  async selectRow(region) {
    await I.click(this.locators.getRowByRegion(region));
    I.wait(4); 
  },
};

module.exports = tableRowSelector;
