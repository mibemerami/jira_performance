const { extractDataFromPerformanceTiming } = require('./helpers');
const {login} = require('./navigation')

async function testPage(page, url, user) {
  await login(page, url, user);

  const performanceTiming = JSON.parse(
    await page.evaluate(() => JSON.stringify(window.performance.timing))
  );

  return extractDataFromPerformanceTiming(
    performanceTiming,
    'responseEnd',
    'domInteractive',
    'domContentLoadedEventEnd',
    'loadEventEnd'
  );
}

module.exports = testPage;
