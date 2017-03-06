describe('Login to william hill site and place a bet on a premiership game', function(){

    var username='WHATA_FOG2';
    var password='F0gUaTtest';
    var hometeam='Bournemouth';
    var awayteam='West Ham';
    var betstake='0.1';

    var homepage;

    it('Login to william hill website',function (browser){
    homepage=browser.page.home_page();
    //browser.navigate();
   browser.url('http://sports.williamhill.com/betting/en-gb');
    browser.windowMaximize('current');
    homepage.Login(username,password);
    
    });

    it('search for the desired event and navigate to the page',function (browser){
    homepage=browser.page.home_page();
    homepage.Search(hometeam,awayteam);
    });

     it('PLace bets on the home team to win in 90 mins',function (browser){
    var BetsPage=browser.page.game_bet_page();
     browser.useXpath()
    BetsPage.PlaceABet_home_win(hometeam,betstake);
    browser.useXpath()
    //click on place bet button
    browser.click("//input[@id='place-bet-button']")
    browser.waitForElementVisible("//*[@id='receipt-notice-box']", 3000)
            //verify if Bets placed notification is displayed successfully
    browser.expect.element("//*[@id='receipt-notice-box']").text.to.contain('Bets placed')
    browser.end();
    });
   
});