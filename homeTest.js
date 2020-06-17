var home = {}
var homeArray = [
    {city: 'Herriman', price: '$450,000', down: '$20,000', address: '6629 W Black Sage Dr', cityStateZip: 'Herriman, UT 84096', first: 'Bob', last: 'Smith', email: 'bob@smith.com'},
    {city: 'Sandy', price: '$336,000', down: '$8,000', address: '109 E Rembrandt Ln', cityStateZip: 'Sandy, UT 84070', first: 'Sue', last: 'Doe', email: 'sue@doe.com'}
]
var homeCode = function(browser,data) {
    home
    .click('@button')
    .click('option[value="Home Purchase"]')
    .click('option[value="Single Family Home"]')
    .click('@button')
    .setValue('input[type="text"]', data.city)
    .click('@button')
    .click('button[value="Primary Home"]')
    .click('@yesButton')
    .click('@yesButton')
    .setValue('input[name="price"]', data.price)
    .setValue('input[name="down"]', data.down)
    .click('@button')
    .click('button[value="good"]')
    .click('button[value="Has never been in bankruptcy"]')
    .setValue('input[id="addressOne"]', data.address)
    .setValue('input[id="addressThree"]', data.cityStateZip)
    .click('@button')
    .setValue('input[id="first"]', data.first)
    .setValue('input[id="last"]', data.last)
    .setValue('input[id="email"]', data.email)
    .click('@button')
    .click('button[name="restartButton"]')
    }  
module.exports = {
    beforeEach: browser => {
        home = browser.page.homeObjects()
        home
        .navigate()
    },
    after: browser => {
        home
        .end()
    },
    'Array Test 1': browser => {
        homeArray.forEach(test => {
            homeCode(browser,test)
        })
    }        
}
