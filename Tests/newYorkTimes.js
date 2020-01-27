var object = {}
module.exports = {
    beforeEach: browser => {
        object = browser.page.newYorkTimesPage()
        object 
        .navigate()
    },
    after: browser => {
        object
        .end()
    },
    // 'main tab functionality test' : browser => {
    //     object
    //     .click('@worldTab')
    //     .waitForElementPresent()
    //     .click('@burgerButton')
    //     .waitForElementPresent('@homeButton')
    //     .moveToElement('@homeButton', 0, 0)
    //     .pause(300)
    //     .click('@homeButton')
    //     .pause(300)

// }
    'main tab functionality test': browser => {
        object
        .click('@worldTab')
        .pause(5000)
        object.assert.urlContains('world')
        object
         .click('@homeBanner')
         .click('@usTab')
         .pause(5000)
         object.assert.urlContains('us')
         object
         .click('@homeBanner')
         .click('@politicsTab')
         .pause(5000)
         object.assert.urlContains('politics')
         object
         .click('@homeBanner')
         .pause(5000)
         .click('@nyTab')
         .pause(5000)
         object.assert.urlContains('nyregion')
         object
         .click('@homeBanner')
         .pause(5000)
         .click('@businessTab')
         .pause(5000)
         object.assert.urlContains('business')
         object
         .click('@homeBanner')
         .pause(5000)
         .click('@opinionTab')
         .pause(5000)
         object.assert.urlContains('opinion')
         object
         .click('@homeBanner')
         .pause(5000)
         .click('@techTab')
         .pause(5000)
         object.assert.urlContains('technology')
         object
         .click('@homeBanner')
         .pause(5000)
         .click('@scienceTab')
         .pause(5000)
         object.assert.urlContains('science')
         object
         .click('@homeBanner')
         .pause(5000)
         .click('@sportsTab')
         object.assert.urlContains('sports')
         object
         .click('@homeBanner')
         .pause(5000)
         .click('@artsTab')
         object.assert.urlContains('arts')
         object
         .click('@homeBanner')
         .pause(5000)
         .click('@booksTab')
         object.assert.urlContains('books')
         object
         .click('@homeBanner')
         .pause(5000)
         .click('@styleTab')
         object.assert.urlContains('style')
         object
         .click('@homeBanner')
         .pause(5000)
         .click('@foodTab')
         object.assert.urlContains('food')
         object
         .click('@homeBanner')
         .pause(5000)
         .click('@travelTab')
         object.assert.urlContains('travel')
         object
         .click('@homeBanner')
         .pause(5000)
          },

}


