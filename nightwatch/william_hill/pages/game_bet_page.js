var game_bet_functions={
    PlaceABet_home_win : function(hometeam,bet_stake){
        this.api.pause(2000);
       
        this.waitForElementVisible("//h2[text()='90 Minutes']/../following-sibling::*//button[@data-name='"+hometeam+"']", 3000)
        this.click("//h2[text()='90 Minutes']/../following-sibling::*//button[@data-name='"+hometeam+"']")
        //this.useCss()
         this.getAttribute('.burger__box','class',function(value){
            //if((!value || value == undefined || value == "")){
            if(value ){
                this.click("//div[@id='betslip-btn-toolbar']//a")
            }
         })
        this.waitForElementVisible('@BetSlipStakeBox', 3000)
        
            .setValue('@BetSlipStakeBox',bet_stake)
        this.api.pause(2000);
        //this.waitForElementVisible('@PlaceBetButton', 3000)
       

    }
}
module.exports={
  commands: [game_bet_functions],
   elements:{
       BetSlipStakeBox: { selector: "//span[@class[contains(.,'betslip')]]/input",locateStrategy: 'xpath'},
       PlaceBetButton: { selector: "//input[@id='place-bet-button']"},locateStrategy: 'xpath',
       BetsConfirmNotification: { selector: "//*[@id='receipt-notice-box']",locateStrategy: 'xpath'},
    
  }

};