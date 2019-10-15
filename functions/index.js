const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const multer = require('multer') // v1.0.5
const upload = multer() // for parsing multipart/form-data

const app = express();
const routesConfig = require('./routesConfig/index')



// Automatically allow cross-origin requests
app.use(cors({ origin: true }));
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// app.use('/app',routes);
routesConfig(app)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions


// Expose Express API as a single Cloud Function:
exports.api = functions.https.onRequest(app);
