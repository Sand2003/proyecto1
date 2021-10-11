
//dependencies
const morgan = require('morgan');
const express = require('express');
const app = express();
//routes
const routes = require('./routes/routes');
const user = require('./routes/user');
//middleware
const auth = require('./middleware/auth');
const notfound = require('./middleware/notfound');
const index = require('./middleware/index');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//rutas
app.get("/", index);

app.use("/user", user);
app.use(auth);
app.use("/inicio", routes);
app.use(notfound);

//servidor
app.listen(9000, () =>{
console.log("Server is running...");
});

