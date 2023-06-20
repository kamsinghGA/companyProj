const express = require('express');
const path = require('path');

const app = express();

const indexRouter = require('./routes/index');
const compRouter = require('./routes/compHistorys');
const pastRouter = require('./routes/pastWorks');
const staffRouter = require('./routes/staffs');
const contactRouter = require('./routes/contacts');
const linkRouter = require('./routes/links');

// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use('/', indexRouter);
app.use('/compHistorys', compRouter);
app.use('/pastWorks', pastRouter);
app.use('/staffs', staffRouter);
app.use('/contacts', contactRouter);
app.use('/links', linkRouter);


let PORT = 3000;
if(process.env.PORT){
	PORT = process.env.PORT
}

app.listen(PORT, ()=>{
	console.log('listening');
})