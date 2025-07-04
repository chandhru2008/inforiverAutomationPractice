const {I}=inject();
const cellTextBold={
    locaters:{
        fontProperty:(idValue)=>`//span[contains(@id,'${idValue}')]`
    },
    async selectFontProperty(value){
        await I.click(this.locaters.fontProperty(value));
    }
    

}
module.exports=cellTextBold;
