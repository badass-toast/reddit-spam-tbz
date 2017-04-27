var snoocore = require('snoocore');
var request = require('request');

if (!process.env.KEY || !process.env.SECRET || !process.env.USER || !process.env.PASS) {
  console.log('Error: Specify env variables in environment');
  process.exit(1);
}

var reddit = new snoocore({
  userAgent: '/u/badass_toast TBZ Spammer v0.0.1',
  oauth: {
    type: 'script',
    key: process.env.KEY, // OAuth client key (provided at reddit app)
    secret: process.env.SECRET, // OAuth secret (provided at reddit app)
    username: process.env.USER, // Reddit username used to make the reddit app
    password: process.env.PASS
  }
});


function redPost(num, url) {
  reddit('/api/submit').post({
    title: 'TBZ picture every hour #' +num+ '',
    url: url,
    sr: 'TBZ',
    kind: 'link'
  });
}