// const os = require('os')
// const fs = require('fs');
// const url = require('url');
// const functions = require('firebase-functions');
const admin = require("firebase-admin");

const serviceAccount = require("../serviceAccountKey.json");

// const response = require('./response')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://share-we-go.firebaseio.com"
});

// function checkRes (res) {
//     response.map((dataRes)=> {
//         if(res.status === dataRes.statusCode) {
//             res.send(dataRes.data())
//         }
//     })
// }

exports.setUser = (req, res) => {
    // checkRes(res)
    // const userRef = admin.database.ref(`users/${req.params.id}/`)
    // const test = JSON.parse(req.body)
    // console.log(test);
    res.send(`Hello ${req.params.id}`);
    // userRef.set(JSON.parse(req.body))
}

exports.setGEOLocation = (req, res) => {
    // checkRes(res)
    // const geoLocationRef = admin.database.ref(`geolocation/${req.params.id}/`)
    // const test = JSON.parse(req.body)
    res.send(`Hello ${req.params.id}`);
    // console.log(test);
    // geoLocationRef.set(JSON.parse(req.body))
}

exports.setDateTime = (req, res) => {
    // checkRes(res)
    // const dateTimeRef = admin.database.ref(`dateTime/${req.params.id}/`)
    // dateTimeRef.set(JSON.parse(req.body))
}

exports.setOS = (req, res) => {
    // checkRes(res)
    // const osRef = admin.database.ref(`os/${req.params.id}/`)
    // osRef.set(JSON.parse(req.body))
}

exports.createShareLocation = (req, res) => {
    // checkRes(res)
    // const shareLocationRef = admin.database.ref(`shareLocation/${req.params.id}/`)
    // shareLocationRef.set(JSON.parse(req.body))
}