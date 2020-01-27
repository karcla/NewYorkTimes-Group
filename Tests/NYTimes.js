
var nyTimes = {}
module.exports = {
    beforeEach: browser => {
        nyTimes = browser.page.restPage()
        nyTimes.navigate()
    },
    after: browser => {
        nyTimes.end()
    },
    'First': browser => {
            nyTimes.testRun('@notRated', '@chinaTown', '@expensive', '@korean')
            // nyTimes.url('https://www.nytimes.com/reviews/dining/')
    },
    'Second': browser => {
            nyTimes.testRun('@extraordinary', '@sunsetPark', '@moderate', '@dimSum')
    },
    'Third': browser => {
            nyTimes.testRun('@good', '@belmont', '@inexpensive', '@mexican')
    },
    'Forth': browser => {
            nyTimes.testRun('@excellent', '@cityIsland', '@veryExpensive', '@vegan')
    },
    // 'Fifth': browser => {
    //         nyTimes.testRunThree ()
    // },
    // 'Last Test': browser => {
    //         nyTimes.testRunTwo ()
    // }
}
