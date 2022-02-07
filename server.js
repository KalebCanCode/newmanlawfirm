const express = require('express');
const cors = require('cors');
const path = require('path');
const nodemailer = require("nodemailer");
const router = express.Router();
const app = express();

app.use(cors());
app.use(express.json());



app.use(express.static(path.join(__dirname, './build')));
app.get('/*', (req, res) => {
  res.cookie('cookie1', 'value1', { sameSite: 'none', secure:true});
  res.cookie('cookie2', 'value2', { sameSite: 'lax'});
  res.sendFile(path.join(__dirname, './build/index.html'));

})
app.use("/", router);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${ port }`);
});
