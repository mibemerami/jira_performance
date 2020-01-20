
const login = async (page, login_url, user) => {
    // console.log('login function: url: ', login_url, ' user.name: ', user.name, ' user.pw: ', user.pw)
    await page.goto(login_url)
    await page.type('#login-form-username', user.name)
    await page.type('#login-form-password', user.pw)
    await page.click('#login')
    await page.waitForSelector('#header-details-user-fullname')
    await page.waitFor(5000)
    Promise.resolve(page)
}

module.exports = {
    login
}
