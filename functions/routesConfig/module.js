const admin = require("firebase-admin");

const serviceAccount = require("../serviceAccountKey.json");


// const response = require('./response')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://share-we-go.firebaseio.com"
});

exports.updateObjectDatabase = async (path, data) => {
    await admin.database().ref(`${path}`).update(data)
}

exports.updateArrayDatabase = async (path, data) => {
    await admin.database().ref(`${path}`).push(data)
}

exports.updateValueDatabase = async (path, data) => {
    await admin.database().ref(`${path}`).update(data)
}

exports.createDatabase = async (path, data) => {
    await admin.database().ref(`${path}`).set(data)
}

exports.getDatabase = (path) => {
    return admin.database().ref(`${path}`).once("value").then(function (snapshot) {
        return snapshot
    })
}