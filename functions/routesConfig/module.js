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



exports.setUser = async (req, res) => {

    try {

        await admin.database().ref(`users/${req.params.id}`).set(JSON.parse(req.body))
        await admin.database().ref(`user_and_location/${req.params.id}/user`).set(JSON.parse(req.body))
        await admin.database().ref(`user_and_location/${req.params.id}/id`).set(req.params.id)
        // res.status(201).json(req)
        res.send(`บันทึกข้อมูลผู้ใช้ เสร็จสิ้น`);
        // console.log(req.body);


    } catch (err) {

        res.send(err.message);

        console.log(err.message);

        return res.sendStatus(500)
    }

};

exports.setGEOLocation = async (req, res) => {

    try {
        await admin.database().ref(`geolocation/${req.params.id}`).set(JSON.parse(req.body))
        await admin.database().ref(`user_and_location/${req.params.id}/location`).set(JSON.parse(req.body))
        await admin.database().ref(`user_and_location/${req.params.id}/id`).set(req.params.id)
        // res.status(201).json(req)
        res.send(`บันทึกข้อมูล geoLocation เสร็จสิ้น`);

        // console.log(req.body);


    } catch (err) {

        res.send(err.message);

        console.log(err.message);

        return res.sendStatus(500)
    }
};

exports.setDateTime = async (req, res) => {

    try {

        await admin.database().ref(`dateTime/${req.params.id}`).set(JSON.parse(req.body))

        // res.status(201).json(req)
        // res.send(`บันทึกข้อมูล date time เสร็จสิ้น`);

        // console.log(res);

    } catch (err) {

        res.send(err.message);

        console.log(err.message);

        return res.sendStatus(500)
    }
};

exports.setOS = async (req, res) => {

    try {

        await admin.database().ref(`os/${req.params.id}`).set(JSON.parse(req.body))

        // res.status(201).json(req)
        res.send(`บันทึกข้อมูล os เสร็จสิ้น`);

        console.log(req.body);

    } catch (err) {

        res.send(err.message);

        console.log(err.message);

        return res.sendStatus(500)
    }
};

exports.createShareLocation = async (req, res) => {

    try {

        await admin.database().ref(`shareLocation/${req.params.id}`).set(req.body)

        // res.status(201).json(req)
        res.send(`บันทึกข้อมูล share location เสร็จสิ้น`);

        console.log(res);

    } catch (err) {

        res.send(err.message);

        console.log(err.message);

        return res.sendStatus(500)
    }
};