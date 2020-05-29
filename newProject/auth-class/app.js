var createError = require('http-errors');
var express = require('express');
var exphbs = require("express-handlebars");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var {getHashedPassword} = require("./utils/password_hasher");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');



var app = express();

// view engine setup
app.engine("hbs", exphbs({
  extname: ".hbs"
}));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000,(err)=>{
  console.log(`listening on http://127.0.0.1:3000`);
});

//user array
const users = [
  // This user is added to the array to avoid creating a new user on each restart
  {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@email.com',
      // This is the SHA256 hash for value of `password`
      password: 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg='
  }
];

app.post('/register', (req, res) => {
  const { email, firstName, lastName, password, confirmPassword } = req.body;

  // Check if the password and confirm password fields match
  if (password === confirmPassword) {

      // Check if user with the same email is also registered
      if (users.find(user => user.email === email)) {

          res.render('register', {
              message: 'User already registered.',
              messageClass: 'alert-danger'
          });

          return;
      }

      const hashedPassword = getHashedPassword(password);

      // Store user into the database if you are using one
      users.push({
          firstName,
          lastName,
          email,
          password: hashedPassword
      });

      res.render('login', {
          message: 'Registration Complete. Please login to continue.',
          messageClass: 'alert-success'
      });
  } else {
      res.render('register', {
          message: 'Password does not match.',
          messageClass: 'alert-danger'
      });
  }
});

module.exports = app;
