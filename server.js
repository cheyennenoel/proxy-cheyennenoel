import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('*/bundle.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/bundle.js'));
});

app.use('/*', express.static('public'));

app.listen(port, () => console.log('Listening on port:', port));
