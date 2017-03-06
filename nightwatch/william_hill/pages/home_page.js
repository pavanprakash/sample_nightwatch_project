var HomePageFunctions = {
 Login: function(username,password) {
      this.waitForElementVisible('@Login_icon', 3000)
      this
          .click('@Login_icon')
      //.api.pause(1000)
          .setValue('@username',username)
          .setValue('@password',password)
          .click('@LoginButton')
      this.api.pause(3000);
    return this; // Return page object for chaining
  },
      Search: function(hometeam,awayteam) {
        //this is to cater the window based on which search button is present either on left or underneath
      this.getAttribute('.burger__box','class',function(value){
        if((value == undefined || value == "")){
            this.waitForElementVisible('@SearchLink', 3000)
            .click('@SearchLink')
        }
        else{
            this.click("div.toolbar__item > a.navSearch")
        }
        
      })

      this.api.pause(1000)
        this.setValue('@searchTextBox',hometeam+' vs '+awayteam)
      //that.Keys([this.Keys.ENTER])
      //.submit()
     this.waitForElementVisible('@SearchEventsLink', 10000)
     this.expect.element('@SearchEventsLink').text.not.contain('0')
     this.click('@searchListItem')
     this.api.pause(2000)
     this.waitForElementVisible('@PageHeader', 3000)
     this.expect.element('@PageHeader').text.to.contain(hometeam)
      //.api.pause(1000)
    return this; // Return page object for chaining
  }

}; 


module.exports = {
  url: 'http://sports.williamhill.com/betting/en-gb',
  commands: [HomePageFunctions],
  
    elements: {
      //login page objects
      Login_icon: { selector: "//span[@class='account-tab__text -login']", locateStrategy: 'xpath' },
      username: { selector: '#loginUsernameInput' },
      password: { selector: '#loginPasswordInput' },
      LoginButton: { selector: '#loginButton' },

      //search link page objects
       SearchLink: { selector: "#nav-Search >a" },       
       searchTextBox: { selector: '#search-input' },
       SearchEventsLink: { selector: "//span[@class='search-events__msg']", locateStrategy: 'xpath' },
       searchListItem: { selector: "li[class='search-events__item'] > a" },
       PageHeader: { selector: 'h1.header-panel__title' }
      }
    
  
};
