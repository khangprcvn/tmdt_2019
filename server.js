const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
// connect database
const database = require('./config/database');
database.connectToServer();

// export package
const package = require('./config/package');
package.parseData(app);

// use css, js 
app.use(express.static(path.join(__dirname + '/views/public')));



app.use(cookieParser());

app.use(session({
  key: 'user_id',
  secret: 'somerandonstuffs',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 60000
  }
}));


// middleware function to check for logged-in users
// const sessionChecker = (req, res, next) => {
//   if (req.session.user && req.cookies.user_id) {
//     res.redirect('/dashboard');
//   } else {
//     next();
//   }
// };

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