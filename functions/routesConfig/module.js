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



exports.postUser = async (req, res) => {

    try {

        await admin.database().ref(`users/${req.params.id}`).set(JSON.parse(req.body))
        // res.status(201).json(req)
        res.send(`บันทึกข้อมูลผู้ใช้ เสร็จสิ้น`);
        // console.log(req.body);


    } catch (err) {

        res.send(err.message);

        console.log(err.message);

        return res.sendStatus(500)
    }

};

exports.postGEOLocation = async (req, res) => {

    try {
        await admin.database().ref(`geolocation/${req.params.id}`).set(JSON.parse(req.body))
        // res.status(201).json(req)
        res.send(`บันทึกข้อมูล geoLocation เสร็จสิ้น`);

        // console.log(req.body);


    } catch (err) {

        res.send(err.message);

        console.log(err.message);

        return res.sendStatus(500)
    }
};

exports.getGEOLocation = async (req, res) => {

    try {

        await admin.database().ref(`geolocation/${req.params.id}`).once("value").then(function (snapshot) {
            let data = (snapshot.val())
            return res.send(data.data)
        })

    } catch (err) {

        res.send(err.message);

        console.log(err.message);

        return res.sendStatus(500)
    }
};

exports.postStatusProcess = async (req, res) => {

    try {

        await admin.database().ref(`status/process/${req.params.id}`).set(JSON.parse(req.body))

        // res.status(201).json(req)
        // res.send(`บันทึกข้อมูล date time เสร็จสิ้น`);

        // console.log(res);

    } catch (err) {

        res.send(err.message);

        console.log(err.message);

        return res.sendStatus(500)
    }
};


exports.postBaseShareLocation = async (req, res) => {

    try {

        await admin.database().ref(`base_share_location/${req.params.id}`).set(req.body)

        // res.status(201).json(req)
        res.send(`บันทึกข้อมูล base share location เสร็จสิ้น`);

        console.log(res);

    } catch (err) {

        res.send(err.message);

        console.log(err.message);

        return res.sendStatus(500)
    }
};

exports.putShareLocationJoin = async (req, res) => {

    try {

        await admin.database().ref(`share_location/${req.params.hid}/join/${req.params.uid}`).set(JSON.parse(req.body))
        // res.status(201).json(req)
        res.send(`อัพเดต share location เสร็จสิ้น`);
        // console.log(req.body);


    } catch (err) {

        res.send(err.message);

        console.log(err.message);

        return res.sendStatus(500)
    }

};

exports.postShareLocationChat = async (req, res) => {

    try {

        await admin.database().ref(`share_location/${req.params.hid}/chat`).push(JSON.parse(req.body))
        // res.status(201).json(req)
        res.send(`อัพเดต share location เสร็จสิ้น`);
        // console.log(req.body);


    } catch (err) {

        res.send(err.message);

        console.log(err.message);

        return res.sendStatus(500)
    }

};

exports.getShareLocationPrivate = async (req, res) => {

    try {

        await admin.database().ref(`base_share_location/${req.params.id}`).once("value").then(function (snapshot) {
            let data = (snapshot.val())
            if (data !== null) {
                return res.send(data)
            } else {
                admin.database().ref(`base_share_location/${req.params.id}`).once("value").then(function (snapshot) {
                    let user = (snapshot.val())
                    admin.database().ref(`share_location/${req.params.id}`).set(user)
                })
            }
        })

    } catch (err) {

        res.send(err.message);

        console.log(err.message);

        return res.sendStatus(500)
    }
};

exports.getShareLocationPublic = async (req, res) => {

    try {

        await admin.database().ref(`share_location/`).once("value").then(function (snapshot) {
            let data = (snapshot.val())
            return res.send(data)
        })

    } catch (err) {

        res.send(err.message);

        console.log(err.message);

        return res.sendStatus(500)
    }
};

exports.postProfile = async (req, res) => {

    try {

        await admin.database().ref(`profile/${req.params.id}`).set(JSON.parse(req.body))
        // res.status(201).json(req)
        res.send(`บันทึกข้อมูลผู้ใช้ profile เสร็จสิ้น`);
        // console.log(req.body);


    } catch (err) {

        res.send(err.message);

        console.log(err.message);

        return res.sendStatus(500)
    }

};

exports.putProfile = async (req, res) => {

    try {

        await admin.database().ref(`profile/${req.params.id}`).update(JSON.parse(req.body))
        // res.status(201).json(req)
        res.send(`อัพเดต profile เสร็จสิ้น`);
        // console.log(req.body);


    } catch (err) {

        res.send(err.message);

        console.log(err.message);

        return res.sendStatus(500)
    }

};

exports.getProfile = async (req, res) => {

    try {

        await admin.database().ref(`profile/${req.params.id}`).once("value").then(function (snapshot) {
            let data = (snapshot.val())
            if (data !== null) {
                return res.send(data)
            } else {
                admin.database().ref(`users/${req.params.id}`).once("value").then(function (snapshot) {
                    let user = (snapshot.val())
                    admin.database().ref(`profile/${req.params.id}`).set(user.data.providerData[0])
                })
            }
        })


    } catch (err) {

        res.send(err.message);

        console.log(err.message);

        return res.sendStatus(500)
    }

};

