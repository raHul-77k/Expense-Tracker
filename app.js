const express = require('express');
const path1 = require('path');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const cors = require('cors');
const app = express();

app.use(cors());
app.set('view engine', 'ejs');
app.set('views','views');


const adminRoutes = require('./routes/admin');
app.use(bodyParser.json({ extended: false }));
app.use(express.static(path1.join(__dirname,'/public')));
app.use('/admin', adminRoutes);
sequelize.sync().then(result =>{
    console.log(result);
    app.listen(3000);
})
// .catch(err =>{
//     console.log(err);
// })