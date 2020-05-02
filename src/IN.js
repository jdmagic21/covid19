// Generated by Selenium IDE
const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const moment = require('moment');

function getPercentage(total, percentage)
{
  return Math.floor(total * (percentage / 100));
}

async function getStats()
{
  let driver = await new Builder().forBrowser('chrome')
    .setChromeOptions(new chrome.Options().headless())
    .build();
  await driver.get("https://www.coronavirus.in.gov/map-test/test.htm");
  await driver.wait(until.elementLocated(By.css(".m-stats-cards-card-wrapper:nth-child(4) .h1")), 10000)
  let totalPositiveCases = await driver.findElement(By.css(".m-stats-cards-card-wrapper:nth-child(4) .h1")).getText();
  let totalDeaths = await driver.findElement(By.css(".m-stats-cards-card-wrapper:nth-child(5) .h1")).getText();
  let totalTested = await driver.findElement(By.css(".d-block:nth-child(1)")).getText();
  let icuBedCapacity = await driver.findElement(By.css("#beds-chart .recharts-layer:nth-child(1) > .recharts-layer:nth-child(1) text:nth-child(1)")).getText();
  let availableIcuBeds = await driver.findElement(By.css("#beds-chart .card-inner-card:nth-child(1) .h4")).getText();
  let usedCovidIcuBeds = await driver.findElement(By.css("#beds-chart .card-inner-card:nth-child(2) .h4")).getText();
  let usedNonCovidIcuBeds = await driver.findElement(By.css("#beds-chart .card-inner-card:nth-child(3) .h4")).getText();
  let ventsCapacity = await driver.findElement(By.css("#ventilators-chart .recharts-layer:nth-child(1) > .recharts-layer:nth-child(1) text:nth-child(1)")).getText();
  let availableVents = await driver.findElement(By.css("#ventilators-chart .card-inner-card:nth-child(1) .h4")).getText();
  let usedCovidVents = await driver.findElement(By.css("#ventilators-chart .card-inner-card:nth-child(2) .h4")).getText();
  let usedNonCovidVents = await driver.findElement(By.css("#ventilators-chart .card-inner-card:nth-child(3) .h4")).getText();

  totalPositiveCases = totalPositiveCases.replace(',', '');
  totalTested = totalTested.replace(',', '');

  icuBedCapacity = icuBedCapacity.replace(',', '');
  availableIcuBeds = availableIcuBeds.replace('%', '');
  availableIcuBeds = getPercentage(icuBedCapacity, availableIcuBeds);
  usedCovidIcuBeds = usedCovidIcuBeds.replace('%', '');
  usedCovidIcuBeds = getPercentage(icuBedCapacity, usedCovidIcuBeds)
  usedNonCovidIcuBeds = usedNonCovidIcuBeds.replace('%', '');
  usedNonCovidIcuBeds = getPercentage(icuBedCapacity, usedNonCovidIcuBeds)

  ventsCapacity = ventsCapacity.replace(',', '');
  availableVents = availableVents.replace('%', '');
  availableVents = getPercentage(ventsCapacity, availableVents)
  usedCovidVents = usedCovidVents.replace('%', '');
  usedCovidVents = getPercentage(ventsCapacity, usedCovidVents)
  usedNonCovidVents = usedNonCovidVents.replace('%', '');
  usedNonCovidVents = getPercentage(ventsCapacity, usedNonCovidVents)

  driver.close();
  return {
    'IN': {
      totalPositiveCases,
      totalDeaths,
      totalTested,
      icuBedCapacity,
      availableIcuBeds,
      usedCovidIcuBeds,
      usedNonCovidIcuBeds,
      ventsCapacity,
      availableVents,
      usedCovidVents,
      usedNonCovidVents
    }
  };
}

async function setStats(doc, sheetId)
{
  let sheet = doc.sheetsById[sheetId];
  await getStats().then((stats) =>
  {
    sheet.addRow({
      "Date": moment().format('MM/DD/YYYY'),
      "Cases": stats.IN.totalPositiveCases,
      "Deaths": stats.IN.totalDeaths,
      "Total Tested": stats.IN.totalTested,
      "ICU Bed Capacity": stats.IN.icuBedCapacity,
      "Available ICU Beds": stats.IN.availableIcuBeds,
      "Used COVID ICU Beds": stats.IN.usedCovidIcuBeds,
      "Non-COVID ICU Beds": stats.IN.usedNonCovidIcuBeds,
      "Vents Capacity": stats.IN.ventsCapacity,
      "Available Vents": stats.IN.availableVents,
      "Used Covid Vents": stats.IN.usedCovidVents,
      "Used Non-Covid Vents": stats.IN.usedNonCovidVents
    });
  });
}

module.exports.setStats = setStats; 
