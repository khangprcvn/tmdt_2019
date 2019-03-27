const express = require('express');
const app = express();
const path = require('path');

// connect database
const database = require('./config/database');
database.connectToServer();

// export package
const package = require('./config/package');
package.parseData(app);

// use css, js 
app.use(express.static(path.join(__dirname + '/views/public')));

// render view
const renderView = require('./routes/renderView');
app.use('/', renderView);

// render user 
const userView = require('./routes/user');
app.use('/user', userView);


let PORT = 5000;
app.listen(PORT, () => {
	console.log('Server is up and running on PORT numner ' + PORT);
});