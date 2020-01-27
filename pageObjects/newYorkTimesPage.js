// var tabCommand = {


// testRun: function(){
//     this 

//     return this

// }
// }
module.exports = {
    url: 'https://www.nytimes.com/',
   //commands: [tabCommands],
    elements: {
    worldTab: {
        selector: '(//a[@class="css-1wjnrbv"])[1]',
        locateStrategy: 'xpath'
    },
    usTab: {
        selector: '(//a[@class="css-1wjnrbv"])[2]',
        locateStrategy: 'xpath'
    },
    politicsTab: {
        selector: '(//a[@class="css-1wjnrbv"])[3]',
        locateStrategy: 'xpath'
    },
    nyTab: {
        selector: '(//a[@class="css-1wjnrbv"])[4]',
        locateStrategy: 'xpath'
    },
    businessTab: {
        selector: '(//a[@class="css-1wjnrbv"])[5]',
        locateStrategy: 'xpath'
    },
    opinionTab: {
        selector:'(//a[@class="css-1wjnrbv"])[6]',
        locateStrategy: 'xpath'
    },
    techTab: {
        selector: '(//a[@class="css-1wjnrbv"])[7]',
          locateStrategy: 'xpath'
    },
    scienceTab: {
        selector:'(//a[@class="css-1wjnrbv"])[8]',
           locateStrategy: 'xpath'
    },
    healthTab: {
        selector:'(//a[@class="css-1wjnrbv"])[9]',
        locagteStrategy: 'xpath'
    },
    sportsTab: {
        selector:'(//a[@class="css-1wjnrbv"])[10]',
        locateStrategy: 'xpath'
    },
    artsTab: {
        selector: '(//a[@class="css-1wjnrbv"])[11]',
        locateStrategy: 'xpath'
    },
    booksTab: {
        selector: '(//a[@class="css-1wjnrbv"])[12]',
        locateStrategy: 'xpath'
     },
     styleTab: {
         selector: '(//a[@class="css-1wjnrbv"])[13]',
         locateStrategy: 'xpath'
     },
     foodTab: {
         selector: '(//a[@class="css-1wjnrbv"])[14]',
         locateStrategy: 'xpath'
     },
     travelTab: {
         selector: '(//a[@class="css-1wjnrbv"])[15]',
         locateStrategy: 'xpath'
     },
     homeBanner: {
         selector: '//a[@class="css-nhjhh0 e1huz5gh1"]',
         locateStrategy: 'xpath'
     },
     burgerButton: '#desktop-sections-button',
     homeButton: 'a[data-name="Home Page"]',



     
   },

}
