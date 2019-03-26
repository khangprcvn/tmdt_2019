module.exports = {

  // Get information from html forms
  parseData: (app) => {
    const bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({
      limit: '50mb',
      extended: true
    }));
    app.use(bodyParser.json({
      limit: '50mb'
    }));
  }
}