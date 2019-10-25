// const os = require('os')
// const fs = require('fs');
// const url = require('url');
// const functions = require('firebase-functions');
const { updateObjectDatabase, updateArrayDatabase, updateValueDatabase, getDatabase } = require('./module')


function checkError(err, res) {
    res.send(err.message);

    console.log(err.message);

    return res.sendStatus(500)
}

exports.post = {
    users: {
        user: async (req, res) => {
            let path = `users/${req.params.id}/user`;
            let data = JSON.parse(req.body);

            try {

                await updateObjectDatabase(path, data)

                res.send(`บันทึกข้อมูล ${path} เสร็จสิ้น`);

            } catch (error) {
                return checkError(err, res)
            }
        },
        location: async (req, res) => {
            let path = `users/${req.params.id}/location`;
            let data = JSON.parse(req.body);

            try {

                await updateObjectDatabase(path, data)

                res.send(`บันทึกข้อมูล ${path} เสร็จสิ้น`);

            } catch (error) {
                return checkError(err, res)
            }
        },
        profile: async (req, res) => {
            let path = `users/${req.params.id}/profile`;
            let data = JSON.parse(req.body);

            try {

                await updateObjectDatabase(path, data)

                res.send(`บันทึกข้อมูล ${path} เสร็จสิ้น`);

            } catch (error) {
                return checkError(err, res)
            }
        },
        log: {
            user: async (req, res) => {
                let path = `users/${req.params.id}/_log/user`;
                let data = JSON.parse(req.body);

                try {

                    await updateArrayDatabase(path, data)

                    res.send(`บันทึกข้อมูล ${path} เสร็จสิ้น`);

                } catch (error) {
                    return checkError(err, res)
                }
            },
            location: async (req, res) => {
                let path = `users/${req.params.id}/_log/location`;
                let data = JSON.parse(req.body);

                try {

                    await updateArrayDatabase(path, data)

                    res.send(`บันทึกข้อมูล ${path} เสร็จสิ้น`);

                } catch (error) {
                    return checkError(err, res)
                }
            },
            profile: async (req, res) => {
                let path = `users/${req.params.id}/_log/profile`;
                let data = JSON.parse(req.body);

                try {

                    await updateArrayDatabase(path, data)

                    res.send(`บันทึกข้อมูล ${path} เสร็จสิ้น`);

                } catch (error) {
                    return checkError(err, res)
                }
            }
        }
    },
    share: {
        location: async (req, res) => {
            let path = `share/${req.params.id}/location`;
            let data = JSON.parse(req.body);

            try {

                await updateObjectDatabase(path, data)

                res.send(`บันทึกข้อมูล ${path} เสร็จสิ้น`);

            } catch (error) {
                return checkError(err, res)
            }
        },
        date: async (req, res) => {
            let path = `share/${req.params.id}/date`;
            let data = JSON.parse(req.body);

            try {

                await updateObjectDatabase(path, data)

                res.send(`บันทึกข้อมูล ${path} เสร็จสิ้น`);

            } catch (error) {
                return checkError(err, res)
            }
        },
        max_number: async (req, res) => {
            let path = `share/${req.params.id}/max_number`;
            let data = JSON.parse(req.body);

            try {

                await updateValueDatabase(path, data)

                res.send(`บันทึกข้อมูล ${path} เสร็จสิ้น`);

            } catch (error) {
                return checkError(err, res)
            }
        },
        sex: async (req, res) => {
            let path = `share/${req.params.id}/sex`;
            let data = JSON.parse(req.body);

            try {

                await updateValueDatabase(path, data)

                res.send(`บันทึกข้อมูล ${path} เสร็จสิ้น`);

            } catch (error) {
                return checkError(err, res)
            }
        },
        owner: async (req, res) => {
            let path = `share/${req.params.id}/owner`;
            let data = JSON.parse(req.body);

            try {

                await updateValueDatabase(path, data)

                res.send(`บันทึกข้อมูล ${path} เสร็จสิ้น`);

            } catch (error) {
                return checkError(err, res)
            }
        },
        member: async (req, res) => {
            let path = `share/${req.params.id}/member`;
            let data = JSON.parse(req.body);

            try {

                await updateObjectDatabase(path, data)

                res.send(`บันทึกข้อมูล ${path} เสร็จสิ้น`);

            } catch (error) {
                return checkError(err, res)
            }
        },
        chat: async (req, res) => {
            let path = `share/${req.params.id}/chat`;
            let data = JSON.parse(req.body);

            try {

                await updateObjectDatabase(path, data)

                res.send(`บันทึกข้อมูล ${path} เสร็จสิ้น`);

            } catch (error) {
                return checkError(err, res)
            }
        },
        log: {
            location: async (req, res) => {
                let path = `share/${req.params.id}/_log/location`;
                let data = JSON.parse(req.body);

                try {

                    await updateArrayDatabase(path, data)

                    res.send(`บันทึกข้อมูล ${path} เสร็จสิ้น`);

                } catch (error) {
                    return checkError(err, res)
                }
            },
            date: async (req, res) => {
                let path = `share/${req.params.id}/_log/date`;
                let data = JSON.parse(req.body);

                try {

                    await updateArrayDatabase(path, data)

                    res.send(`บันทึกข้อมูล ${path} เสร็จสิ้น`);

                } catch (error) {
                    return checkError(err, res)
                }
            },
            max_number: async (req, res) => {
                let path = `share/${req.params.id}/_log/max_number`;
                let data = JSON.parse(req.body);

                try {

                    await updateArrayDatabase(path, data)

                    res.send(`บันทึกข้อมูล ${path} เสร็จสิ้น`);

                } catch (error) {
                    return checkError(err, res)
                }
            },
            sex: async (req, res) => {
                let path = `share/${req.params.id}/_log/sex`;
                let data = JSON.parse(req.body);

                try {

                    await updateArrayDatabase(path, data)

                    res.send(`บันทึกข้อมูล ${path} เสร็จสิ้น`);

                } catch (error) {
                    return checkError(err, res)
                }
            },
            owner: async (req, res) => {
                let path = `share/${req.params.id}/_log/owner`;
                let data = JSON.parse(req.body);

                try {

                    await updateArrayDatabase(path, data)

                    res.send(`บันทึกข้อมูล ${path} เสร็จสิ้น`);

                } catch (error) {
                    return checkError(err, res)
                }
            },
            member: async (req, res) => {
                let path = `share/${req.params.id}/_log/member`;
                let data = JSON.parse(req.body);

                try {

                    await updateArrayDatabase(path, data)

                    res.send(`บันทึกข้อมูล ${path} เสร็จสิ้น`);

                } catch (error) {
                    return checkError(err, res)
                }
            },
            chat: async (req, res) => {
                let path = `share/${req.params.id}/_log/chat`;
                let data = JSON.parse(req.body);

                try {

                    await updateArrayDatabase(path, data)

                    res.send(`บันทึกข้อมูล ${path} เสร็จสิ้น`);

                } catch (error) {
                    return checkError(err, res)
                }
            },
        }
    },
    status: {
        process: async (req, res) => {
            let path = `status/${req.params.id}/process`;
            let data = JSON.parse(req.body);

            try {

                await updateValueDatabase(path, data)

                res.send(`บันทึกข้อมูล ${path} เสร็จสิ้น`);

            } catch (error) {
                return checkError(err, res)
            }
        },
        share: async (req, res) => {
            let path = `status/${req.params.id}/share`;
            let data = JSON.parse(req.body);

            try {

                await updateValueDatabase(path, data)

                res.send(`บันทึกข้อมูล ${path} เสร็จสิ้น`);

            } catch (error) {
                return checkError(err, res)
            }
        },
        owner: async (req, res) => {
            let path = `status/${req.params.id}/owner`;
            let data = JSON.parse(req.body);

            try {

                await updateValueDatabase(path, data)

                res.send(`บันทึกข้อมูล ${path} เสร็จสิ้น`);

            } catch (error) {
                return checkError(err, res)
            }
        },
        member: async (req, res) => {
            let path = `status/${req.params.id}/member`;
            let data = JSON.parse(req.body);

            try {

                await updateValueDatabase(path, data)

                res.send(`บันทึกข้อมูล ${path} เสร็จสิ้น`);

            } catch (error) {
                return checkError(err, res)
            }
        },
        alert: async (req, res) => {
            let path = `status/${req.params.id}/alert`;
            let data = JSON.parse(req.body);

            try {

                await updateValueDatabase(path, data)

                res.send(`บันทึกข้อมูล ${path} เสร็จสิ้น`);

            } catch (error) {
                return checkError(err, res)
            }
        },
        log: {
            process: async (req, res) => {
                let path = `status/${req.params.id}/_log/process`;
                let data = JSON.parse(req.body);

                try {

                    await updateArrayDatabase(path, data)

                    res.send(`บันทึกข้อมูล ${path} เสร็จสิ้น`);

                } catch (error) {
                    return checkError(err, res)
                }
            },
            share: async (req, res) => {
                let path = `status/${req.params.id}/_log/share`;
                let data = JSON.parse(req.body);

                try {

                    await updateArrayDatabase(path, data)

                    res.send(`บันทึกข้อมูล ${path} เสร็จสิ้น`);

                } catch (error) {
                    return checkError(err, res)
                }
            },
            owner: async (req, res) => {
                let path = `status/${req.params.id}/_log/owner`;
                let data = JSON.parse(req.body);

                try {

                    await updateArrayDatabase(path, data)

                    res.send(`บันทึกข้อมูล ${path} เสร็จสิ้น`);

                } catch (error) {
                    return checkError(err, res)
                }
            },
            member: async (req, res) => {
                let path = `status/${req.params.id}/_log/member`;
                let data = JSON.parse(req.body);

                try {

                    await updateArrayDatabase(path, data)

                    res.send(`บันทึกข้อมูล ${path} เสร็จสิ้น`);

                } catch (error) {
                    return checkError(err, res)
                }
            },
            alert: async (req, res) => {
                let path = `status/${req.params.id}/_log/alert`;
                let data = JSON.parse(req.body);

                try {

                    await updateArrayDatabase(path, data)

                    res.send(`บันทึกข้อมูล ${path} เสร็จสิ้น`);

                } catch (error) {
                    return checkError(err, res)
                }
            },
        }
    }
}

exports.get = {
    users: {
        user: async (req, res) => {
            let path = `users/${req.params.id}/user`;

            try {

                await getDatabase(path).then(function (snapshot) {
                    let data = (snapshot.val())
                    return res.send(data)

                })

            } catch (err) {
                return checkError(err, res)
            }
        },
        location: async (req, res) => {
            let path = `users/${req.params.id}/location`;

            try {

                await getDatabase(path).then(function (snapshot) {
                    let data = (snapshot.val())
                    return res.send(data)

                })

            } catch (err) {
                return checkError(err, res)
            }
        },
        profile: async (req, res) => {
            let path_profile = `users/${req.params.id}/profile`;
            let path_user = `users/${req.params.id}/user`;

            try {

                await getDatabase(path_profile).then(function (snapshot) {
                    let data = (snapshot.val())
                    if (data !== null) {
                        return res.send(data)
                    } else {
                        getDatabase(path_user).then(function (snapshot) {
                            let user = (snapshot.val())
                            console.log(user);

                            updateObjectDatabase(path_profile, user.providerData[0])
                        })
                    }
                })

            } catch (err) {
                return checkError(err, res)
            }
        },
        log: {
            user: async (req, res) => {
                let path = `users/${req.params.id}/user`;
    
                try {
    
                    await getDatabase(path).then(function (snapshot) {
                        let data = (snapshot.val())
                        return res.send(data)
    
                    })
    
                } catch (err) {
                    return checkError(err, res)
                }
            },
            location: async (req, res) => {
                let path = `users/${req.params.id}/location`;
    
                try {
    
                    await getDatabase(path).then(function (snapshot) {
                        let data = (snapshot.val())
                        return res.send(data)
    
                    })
    
                } catch (err) {
                    return checkError(err, res)
                }
            },
            profile: async (req, res) => {
                let path = `users/${req.params.id}/profile`;
    
                try {
    
                    await getDatabase(path).then(function (snapshot) {
                        let data = (snapshot.val())
                        return res.send(data)
    
                    })
    
                } catch (err) {
                    return checkError(err, res)
                }
            },
        }
    }
}

// exports.postUser = async (req, res) => {

//     try {

//         await admin.database().ref(`users/${req.params.id}`).set(JSON.parse(req.body))
//         // res.status(201).json(req)
//         res.send(`บันทึกข้อมูลผู้ใช้ เสร็จสิ้น`);
//         // console.log(req.body);


//     } catch (err) {

//         return checkError(err, res)
//     }

// };

// exports.postGEOLocation = async (req, res) => {

//     try {
//         await admin.database().ref(`geolocation/${req.params.id}`).set(JSON.parse(req.body))
//         // res.status(201).json(req)
//         res.send(`บันทึกข้อมูล geoLocation เสร็จสิ้น`);

//         // console.log(req.body);


//     } catch (err) {

//         res.send(err.message);

//         console.log(err.message);

//         return res.sendStatus(500)
//     }
// };

// exports.getGEOLocation = async (req, res) => {

//     try {

//         await admin.database().ref(`geolocation/${req.params.id}`).once("value").then(function (snapshot) {
//             let data = (snapshot.val())
//             return res.send(data.data)
//         })

//     } catch (err) {

//         res.send(err.message);

//         console.log(err.message);

//         return res.sendStatus(500)
//     }
// };

// exports.postStatusProcess = async (req, res) => {

//     try {

//         await admin.database().ref(`status/${req.params.id}/process`).set(JSON.parse(req.body))

//         // res.status(201).json(req)
//         // res.send(`บันทึกข้อมูล date time เสร็จสิ้น`);

//         // console.log(res);

//     } catch (err) {

//         res.send(err.message);

//         console.log(err.message);

//         return res.sendStatus(500)
//     }
// };


// exports.postBaseShareLocation = async (req, res) => {

//     try {

//         await admin.database().ref(`base_share_location/${req.params.id}`).update(JSON.parse(req.body))

//         // res.status(201).json(req)
//         res.send(`บันทึกข้อมูล base share location เสร็จสิ้น`);

//         // console.log(res);

//     } catch (err) {

//         res.send(err.message);

//         console.log(err.message);

//         return res.sendStatus(500)
//     }
// };

// exports.putShareLocationJoin = async (req, res) => {

//     try {

//         await admin.database().ref(`share_location/${req.params.hid}/join/${req.params.uid}`).set(JSON.parse(req.body))
//         // res.status(201).json(req)
//         res.send(`อัพเดต share location เสร็จสิ้น`);
//         // console.log(req.body);


//     } catch (err) {

//         res.send(err.message);

//         console.log(err.message);

//         return res.sendStatus(500)
//     }

// };

// exports.postShareLocationChat = async (req, res) => {

//     try {

//         await admin.database().ref(`share_location/${req.params.hid}/chat`).push(JSON.parse(req.body))
//         // res.status(201).json(req)
//         res.send(`อัพเดต share location เสร็จสิ้น`);
//         // console.log(req.body);


//     } catch (err) {

//         res.send(err.message);

//         console.log(err.message);

//         return res.sendStatus(500)
//     }

// };

// exports.getShareLocationPrivate = async (req, res) => {

//     try {

//         await admin.database().ref(`base_share_location/${req.params.id}`).once("value").then(function (snapshot) {
//             let data = (snapshot.val())
//             if (data !== null) {
//                 return res.send(data)
//             } else {
//                 admin.database().ref(`base_share_location/${req.params.id}`).once("value").then(function (snapshot) {
//                     let user = (snapshot.val())
//                     admin.database().ref(`share_location/${req.params.id}`).set(user)
//                 })
//             }
//         })

//     } catch (err) {

//         res.send(err.message);

//         console.log(err.message);

//         return res.sendStatus(500)
//     }
// };

// exports.getShareLocationPublic = async (req, res) => {

//     try {

//         await admin.database().ref(`share_location/`).once("value").then(function (snapshot) {
//             let data = (snapshot.val())
//             return res.send(data)
//         })

//     } catch (err) {

//         res.send(err.message);

//         console.log(err.message);

//         return res.sendStatus(500)
//     }
// };

// exports.postProfile = async (req, res) => {
//     // console.log(JSON.parse(req.body));

//     try {

//         await admin.database().ref(`profile/${req.params.id}`).update(JSON.parse(req.body))
//         // res.status(201).json(req)
//         res.send(`บันทึกข้อมูลผู้ใช้ profile เสร็จสิ้น`);
//         // console.log(req.body);


//     } catch (err) {

//         res.send(err.message);

//         console.log(err.message);

//         return res.sendStatus(500)
//     }

// };

// exports.putProfile = async (req, res) => {

//     try {

//         await admin.database().ref(`profile/${req.params.id}`).update(JSON.parse(req.body))
//         // res.status(201).json(req)
//         res.send(`อัพเดต profile เสร็จสิ้น`);
//         // console.log(req.body);


//     } catch (err) {

//         res.send(err.message);

//         console.log(err.message);

//         return res.sendStatus(500)
//     }

// };

// exports.getProfile = async (req, res) => {

//     try {

//         await admin.database().ref(`profile/${req.params.id}`).once("value").then(function (snapshot) {
//             let data = (snapshot.val())
//             if (data !== null) {
//                 return res.send(data)
//             } else {
//                 admin.database().ref(`users/${req.params.id}`).once("value").then(function (snapshot) {
//                     let user = (snapshot.val())
//                     admin.database().ref(`profile/${req.params.id}`).set(user.data.providerData[0])
//                 })
//             }
//         })


//     } catch (err) {

//         res.send(err.message);

//         console.log(err.message);

//         return res.sendStatus(500)
//     }

// };

// exports.postStatusShare = async (req, res) => {

//     try {

//         await admin.database().ref(`status/${req.params.share_id}/share`).set(JSON.parse(req.body))
//         // res.status(201).json(req)
//         res.send(`อัพเดต status share เสร็จสิ้น`);
//         // console.log(req.body);
//     } catch (err) {

//         res.send(err.message);

//         console.log(err.message);

//         return res.sendStatus(500)
//     }
// };

// exports.getStatusShare = async (req, res) => {

//     try {

//         await admin.database().ref(`status/${req.params.share_id}`).once("value").then(function (snapshot) {
//             let data = (snapshot.val())
//             if (data !== null) {
//                 return res.send(data)
//             } else {
//                 return res.send({ share: false })
//             }
//         })

//     } catch (err) {

//         res.send(err.message);

//         console.log(err.message);

//         return res.sendStatus(500)
//     }

// };