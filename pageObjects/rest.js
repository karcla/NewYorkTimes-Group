
var filterCommands = {
    testRun: function (filterRating, neighborRating, priceRating, cuisineRating) {
    this
        .click('@burgerButton')
        .waitForElementPresent('@foodButton')
        .moveToElement('@foodButton', 0, 0)
        .waitForElementPresent('@restSearch')
        .click('@restSearch')
        .waitForElementPresent('@genSearch')
        .pause(300)
        .click(filterRating)
        .pause(300)
        .click(neighborRating)
        .pause(300)
        .click(priceRating)
        .pause(300)
        .click(cuisineRating)
        .pause(300)
        .click('@criticsPick')
        .pause(300)
        // .click('@burgerButton')
        // .waitForElementPresent('@homeButton')
        // .moveToElement('@homeButton', 0, 0)
        // .pause(300)
        // .click('@homeButton')
        // .pause(300)
    return this

    },
    // testRunTwo: function () {
    // this
    //     .click('@burgerButton')
    //     .waitForElementPresent('@foodButton')
    //     .moveToElement('@foodButton', 0, 0)
    //     .waitForElementPresent('@restSearch')
    //     .click('@restSearch')
    //     .waitForElementPresent('@genSearch')
    //     .setValue('@genSearch', "The Four Horsemen")
    //     .pause(300)
    //     .click('@horseMen')
    //     .pause(300)
    //     .waitForElementPresent('@horseMenTitle')
    //     .pause(300)
        // .click('@burgerButton')
        // .waitForElementPresent('@homeButton')
        // .moveToElement('@homeButton', 0, 0)
        // .pause(300)
        // .click('@homeButton')
        // .pause(300)
    //  return this
    // },
    // testRunThree: function() {
    // this 
    //     .click('@burgerButton')
    //     .waitForElementPresent('@foodButton')
    //     .moveToElement('@foodButton', 0, 0)
    //     .waitForElementPresent('@restSearch')
    //     .click('@restSearch')
    //     .waitForElementPresent('@genSearch')
    //     .setValue('@genSearch', "Sushi Nakazawa")
    //     .pause(300)
    //     .click('@sushiN')
    //     .pause(300)
    //     .waitForElementPresent('@sushiImage')
    //     .pause(300)
        // .click('@burgerButton')
        // .waitForElementPresent('@homeButton')
        // .moveToElement('@homeButton', 0, 0)
        // .pause(300)
        // .click('@homeButton')
        // .pause(300)       
    // }
}

module.exports = {
    url: 'https://www.nytimes.com/',
    commands: [filterCommands],
    elements: {
        burgerButton: '#desktop-sections-button',
        foodButton: 'a[data-name="Food"]',
        homeButton: 'a[data-name="Home Page"]',
        restSearch: 'a[data-name="Restaurant Search"]',
        genSearch: '#stream-search-input',

        // horseMen: '.css-8aqwnr',
        // horseMenTitle: '.balancedHeadline',
        // sushiN: '.css-14bfyrc',
        // sushiImage: '.css-11cwn6f',

        // ratingDropDown: '#rating-filter',
        // neighborDropDown: '#neighborhood-filter',
        // priceDropDown: '#price-filter',
        // cuisineDropDown: '#cuisine-filter',
       

        criticsPick: '#critics-pick-filter',

        extraordinary: '#rating-filter option[value="EXTRAORDINARY"]',
        excellent: '#rating-filter option[value="EXCELLENT"]',
        veryGood: '#rating-filter option[value="VERY GOOD"]',
        good: '#rating-filter option[value="GOOD"]',
        satisfactory: '#rating-filter option[value="SATISFACTORY"]',
        fair: '#rating-filter option[value="FAIR"]',
        poor: '#rating-filter option[value="POOR"]',
        notRated: '#rating-filter option[value="NOT_RATED"]',

        chinaTown: '#neighborhood-filter option[value="chinatown"]',
        sunsetPark: '#neighborhood-filter option[value="sunset park"]',
        belmont: '#neighborhood-filter option[value="belmont"]',
        cityIsland: '#neighborhood-filter option[value="city island"]',
        roseBank: '#neighborhood-filter option[value="rosebank"]',

        veryExpensive: '#price-filter option[value="VERY_EXPENSIVE"]',
        expensive: '#price-filter option[value="EXPENSIVE"]',
        moderate: '#price-filter option[value="MODERATE"]',
        inexpensive: '#price-filter option[value="INEXPENSIVE"]',

        dimSum: '#cuisine-filter option[value="dim sum"]',
        korean: '#cuisine-filter option[value="korean"]',
        mexican: '#cuisine-filter option[value="mexican"]',
        vegan: '#cuisine-filter option[value="vegan"]',
    }
}