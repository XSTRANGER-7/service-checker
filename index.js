const checkWebsite = require('./services/websiteChecker');

(async () => {
    const websites = [
        'https://www.example.com',
        'https://www.google.com',
        'https://www.thirdpartywebsite.com',
    ];

    for (const website of websites) {
        await checkWebsite(website);
    }
})();