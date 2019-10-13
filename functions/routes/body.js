// const os = require('os')
// const fs = require('fs');
// const url = require('url');
// const functions = require('firebase-functions');
const admin = require("firebase-admin");

const serviceAccount = require("../serviceAccountKey.json");

const response = require('./response')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://share-we-go.firebaseio.com"
});

function checkRes (res) {
    response.map((dataRes)=> {
        if(res.status === dataRes.statusCode) {
            res.send(dataRes.data())
        }
    })
}

exports.setUser = (req, res, next) => {
    checkRes(res)
    const userRef = admin.database.ref(`users/${req.params.id}/`)
    userRef.set(req.body)
}

exports.setGEOLocation = (req, res, next) => {
    checkRes(res)
    const geoLocationRef = admin.database.ref(`geolocation/${req.params.id}/`)
    geoLocationRef.set(req.body)
}

exports.setDateTime = (req, res, next) => {
    checkRes(res)
    const dateTimeRef = admin.database.ref(`dateTime/${req.params.id}/`)
    dateTimeRef.set(req.body)
}

exports.setOS = (req, res, next) => {
    checkRes(res)
    const osRef = admin.database.ref(`os/${req.params.id}/`)
    osRef.set(req.body)
}

exports.createShareLocation = (req, res, next) => {
    checkRes(res)
    const shareLocationRef = admin.database.ref(`shareLocation/${req.params.id}/`)
    shareLocationRef.set(req.body)
}