const { GoogleSpreadsheet } = require('google-spreadsheet');
const IN = require('./src/IN');
const US = require('./src/US');
const state = require('./src/Api'); 

(async () => {
    const doc = new GoogleSpreadsheet('1Idoh2NG5IfyvWA8gMGLcpxfG9sUbeiEo6ltPUPVt4Gw');
    await doc.useServiceAccountAuth(require('./credentials.json'));
    await doc.loadInfo();

    await US.setStats(doc, 0); 
    await IN.setStats(doc, 953330401); 
    await state.setStats(doc, 'IL', 913962604); 
    await state.setStats(doc, 'AL', 1253988439);
    await state.setStats(doc, 'AK', 1745951127);
    await state.setStats(doc, 'AR', 163775774);
    await state.setStats(doc, 'AZ', 983727030);
    await state.setStats(doc, 'CA', 221116540);
    await state.setStats(doc, 'FL', 1861459331);
    await state.setStats(doc, 'CO', 810208271);
    await state.setStats(doc, 'CT', 1022831362);
    await state.setStats(doc, 'DC', 1504044713);
    await state.setStats(doc, 'DE', 1482457209);
    await state.setStats(doc, 'FL', 1861459331);
    await state.setStats(doc, 'FM', 128163852);
    await state.setStats(doc, 'GA', 781123810);
    await state.setStats(doc, 'GU', 1163157976);
    await state.setStats(doc, 'HI', 675754886);
    await state.setStats(doc, 'IA', 1128826716);
    await state.setStats(doc, 'ID', 1270769216);
    await state.setStats(doc, 'KS', 1829320898);
    await state.setStats(doc, 'KY', 784404140);
    await state.setStats(doc, 'LA', 617829069);
    await state.setStats(doc, 'MA', 941186915);
    await state.setStats(doc, 'ME', 180435756);
    await state.setStats(doc, 'MD', 928648458);
    await state.setStats(doc, 'MH', 349370450);
    await state.setStats(doc, 'MI', 1021033790);
    await state.setStats(doc, 'MN', 881145400);
    await state.setStats(doc, 'MO', 1045782123);
    await state.setStats(doc, 'MP', 728587331);
    await state.setStats(doc, 'MS', 662916453);
    await state.setStats(doc, 'MT', 1018248288);
    await state.setStats(doc, 'NC', 499208461);
    await state.setStats(doc, 'ND', 1229055439);
    await state.setStats(doc, 'NE', 1931850830);
    await state.setStats(doc, 'NH', 2146108554);
    await state.setStats(doc, 'NJ', 2041240553);
    await state.setStats(doc, 'NM', 1265431961);
    await state.setStats(doc, 'NV', 135695733);
    await state.setStats(doc, 'NY', 2129735546);
    await state.setStats(doc, 'OH', 1195559010);
    await state.setStats(doc, 'OK', 1287246313);
    await state.setStats(doc, 'OR', 1149723806);
    await state.setStats(doc, 'PA', 1334997390);
    await state.setStats(doc, 'PR', 1213613189);
    await state.setStats(doc, 'PW', 1958712550);
    await state.setStats(doc, 'RI', 1238190313);
    await state.setStats(doc, 'SC', 1809983148);
    await state.setStats(doc, 'SD', 1554607100);
    await state.setStats(doc, 'TN', 1921225610);
    await state.setStats(doc, 'TX', 795267842);
    await state.setStats(doc, 'UT', 1399288092);
    await state.setStats(doc, 'VI', 289346522);
    await state.setStats(doc, 'VT', 886876908);
    await state.setStats(doc, 'VA', 1976322719);
    await state.setStats(doc, 'WA', 997316596);
    await state.setStats(doc, 'WI', 59504538);
    await state.setStats(doc, 'WV', 2072403078);
    await state.setStats(doc, 'WY', 542740656);   
})();