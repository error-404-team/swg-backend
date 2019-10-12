const os = require('os')
const fs = require('fs');
const url = require('url');
const functions = require('firebase-functions');
const admin = require("firebase-admin");

const serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://share-we-go.firebaseio.com"
});


exports.setUser = (req, res,next) => {
const userRef = admin.database.ref(`users/${req.params.userId}`)
userRef.set(req.body)
}