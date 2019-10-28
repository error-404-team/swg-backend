// const os = require('os')
// const fs = require('fs');
// const url = require('url');
// const functions = require('firebase-functions');
const { updateObjectDatabase, updateArrayDatabase,
    updateValueDatabase, getDatabase, deleteDatabase } = require('./module')


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
    },
    history: {
        id: async (req, res) => {
            let path = `history/${req.params.id}`;
            let data = JSON.parse(req.body);

            try {

                await updateArrayDatabase(path, data)

                res.send(`บันทึกข้อมูล ${path} เสร็จสิ้น`);

            } catch (error) {
                return checkError(err, res)
            }
        },
        log: async (req, res) => {
            let path = `history/${req.params.id}/_log`;
            let data = JSON.parse(req.body);

            try {

                await updateArrayDatabase(path, data)

                res.send(`บันทึกข้อมูล ${path} เสร็จสิ้น`);

            } catch (error) {
                return checkError(err, res)
            }

        }
    }
}

exports.get = {
    users: {
        all: async (req, res) => {
            let path = `users`;

            try {

                await getDatabase(path).then(function (snapshot) {
                    let data = (snapshot.val())
                    return res.send(data)

                })

            } catch (err) {
                return checkError(err, res)
            }
        },
        id: async (req, res) => {
            let path = `users/${req.params.id}`;

            try {

                await getDatabase(path).then(function (snapshot) {
                    let data = (snapshot.val())
                    return res.send(data)

                })

            } catch (err) {
                return checkError(err, res)
            }
        },
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
                let path = `users/${req.params.id}/_log/user`;

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
                let path = `users/${req.params.id}/_log/location`;

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
                let path = `users/${req.params.id}/_log/profile`;

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
    },
    share: {
        all: async (req, res) => {
            let path = `share`;

            try {

                await getDatabase(path).then(function (snapshot) {
                    let data = (snapshot.val())
                    return res.send(data)

                })

            } catch (err) {
                return checkError(err, res)
            }
        },
        id: async (req, res) => {
            let path = `share/${req.params.id}`;

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
            let path = `share/${req.params.id}/location`;

            try {

                await getDatabase(path).then(function (snapshot) {
                    let data = (snapshot.val())
                    return res.send(data)

                })

            } catch (err) {
                return checkError(err, res)
            }
        },
        date: async (req, res) => {
            let path = `share/${req.params.id}/date`;

            try {

                await getDatabase(path).then(function (snapshot) {
                    let data = (snapshot.val())
                    return res.send(data)

                })

            } catch (err) {
                return checkError(err, res)
            }
        },
        max_number: async (req, res) => {
            let path = `share/${req.params.id}/max_number`;

            try {

                await getDatabase(path).then(function (snapshot) {
                    let data = (snapshot.val())
                    return res.send(data)

                })

            } catch (err) {
                return checkError(err, res)
            }
        },
        sex: async (req, res) => {
            let path = `share/${req.params.id}/sex`;

            try {

                await getDatabase(path).then(function (snapshot) {
                    let data = (snapshot.val())
                    return res.send(data)

                })

            } catch (err) {
                return checkError(err, res)
            }
        },
        owner: async (req, res) => {
            let path = `share/${req.params.id}/owner`;

            try {

                await getDatabase(path).then(function (snapshot) {
                    let data = (snapshot.val())
                    return res.send(data)

                })

            } catch (err) {
                return checkError(err, res)
            }
        },
        member: async (req, res) => {
            let path = `share/${req.params.id}/member`;

            try {

                await getDatabase(path).then(function (snapshot) {
                    let data = (snapshot.val())
                    return res.send(data)

                })

            } catch (err) {
                return checkError(err, res)
            }
        },
        chat: async (req, res) => {
            let path = `share/${req.params.id}/chat`;

            try {

                await getDatabase(path).then(function (snapshot) {
                    let data = (snapshot.val())
                    return res.send(data)

                })

            } catch (err) {
                return checkError(err, res)
            }
        },
        log: {
            location: async (req, res) => {
                let path = `share/${req.params.id}/_log/location`;

                try {

                    await getDatabase(path).then(function (snapshot) {
                        let data = (snapshot.val())
                        return res.send(data)

                    })

                } catch (err) {
                    return checkError(err, res)
                }
            },
            date: async (req, res) => {
                let path = `share/${req.params.id}/_log/date`;

                try {

                    await getDatabase(path).then(function (snapshot) {
                        let data = (snapshot.val())
                        return res.send(data)

                    })

                } catch (err) {
                    return checkError(err, res)
                }
            },
            max_number: async (req, res) => {
                let path = `share/${req.params.id}/_log/max_number`;

                try {

                    await getDatabase(path).then(function (snapshot) {
                        let data = (snapshot.val())
                        return res.send(data)

                    })

                } catch (err) {
                    return checkError(err, res)
                }
            },
            sex: async (req, res) => {
                let path = `share/${req.params.id}/_log/sex`;

                try {

                    await getDatabase(path).then(function (snapshot) {
                        let data = (snapshot.val())
                        return res.send(data)

                    })

                } catch (err) {
                    return checkError(err, res)
                }
            },
            owner: async (req, res) => {
                let path = `share/${req.params.id}/_log/owner`;

                try {

                    await getDatabase(path).then(function (snapshot) {
                        let data = (snapshot.val())
                        return res.send(data)

                    })

                } catch (err) {
                    return checkError(err, res)
                }
            },
            member: async (req, res) => {
                let path = `share/${req.params.id}/_log/member`;

                try {

                    await getDatabase(path).then(function (snapshot) {
                        let data = (snapshot.val())
                        return res.send(data)

                    })

                } catch (err) {
                    return checkError(err, res)
                }
            },
            chat: async (req, res) => {
                let path = `share/${req.params.id}/_log/chat`;

                try {

                    await getDatabase(path).then(function (snapshot) {
                        let data = (snapshot.val())
                        return res.send(data)

                    })

                } catch (err) {
                    return checkError(err, res)
                }
            }
        }
    },
    status: {
        all: async (req, res) => {
            let path = `status`;

            try {

                await getDatabase(path).then(function (snapshot) {
                    let data = (snapshot.val())
                    return res.send(data)

                })

            } catch (err) {
                return checkError(err, res)
            }
        },
        id: async (req, res) => {
            let path = `status/${req.params.id}`;

            try {

                await getDatabase(path).then(function (snapshot) {
                    let data = (snapshot.val())
                    return res.send(data)

                })

            } catch (err) {
                return checkError(err, res)
            }
        },
        process: async (req, res) => {
            let path = `status/${req.params.id}/process`;

            try {

                await getDatabase(path).then(function (snapshot) {
                    let data = (snapshot.val())
                    return res.send(data)

                })

            } catch (err) {
                return checkError(err, res)
            }
        },
        share: async (req, res) => {
            let path = `status/${req.params.id}/share`;

            try {

                await getDatabase(path).then(function (snapshot) {
                    let data = (snapshot.val())
                    if (data !== null) {
                        return res.send(data)
                    } else {
                        getDatabase(path).then(function (snapshot) {
                            let user = (snapshot.val())
                            console.log(user);

                            updateObjectDatabase(path, {
                                id: "",
                                uid: "",
                                value: "false"
                            })
                        })
                    }

                })

            } catch (err) {
                return checkError(err, res)
            }
        },
        owner: async (req, res) => {
            let path = `status/${req.params.id}/owner`;

            try {

                await getDatabase(path).then(function (snapshot) {
                    let data = (snapshot.val())
                    if (data !== null) {
                        return res.send(data)
                    } else {
                        getDatabase(path).then(function (snapshot) {
                            let user = (snapshot.val())
                            console.log(user);

                            updateObjectDatabase(path, {
                                share_id: "",
                                uid: "",
                                value: "false"

                            })
                        })
                    }

                })

            } catch (err) {
                return checkError(err, res)
            }
        },
        member: async (req, res) => {
            let path = `status/${req.params.id}/member`;

            try {

                await getDatabase(path).then(function (snapshot) {
                    let data = (snapshot.val())
                    if (data !== null) {
                        return res.send(data)
                    } else {
                        getDatabase(path).then(function (snapshot) {
                            let user = (snapshot.val())
                            console.log(user);

                            updateObjectDatabase(path, {
                                share_id: "",
                                uid: "",
                                value: "false"

                            })
                        })
                    }


                })

            } catch (err) {
                return checkError(err, res)
            }
        },
        alert: async (req, res) => {
            let path = `status/${req.params.id}/alert`;

            try {

                await getDatabase(path).then(function (snapshot) {
                    let data = (snapshot.val())
                    return res.send(data)

                })

            } catch (err) {
                return checkError(err, res)
            }
        },
        log: {
            process: async (req, res) => {
                let path = `status/${req.params.id}/_log/process`;

                try {

                    await getDatabase(path).then(function (snapshot) {
                        let data = (snapshot.val())
                        return res.send(data)

                    })

                } catch (err) {
                    return checkError(err, res)
                }
            },
            share: async (req, res) => {
                let path = `status/${req.params.id}/_log/share`;

                try {

                    await getDatabase(path).then(function (snapshot) {
                        let data = (snapshot.val())
                        return res.send(data)

                    })

                } catch (err) {
                    return checkError(err, res)
                }
            },
            owner: async (req, res) => {
                let path = `status/${req.params.id}/_log/owner`;

                try {

                    await getDatabase(path).then(function (snapshot) {
                        let data = (snapshot.val())
                        return res.send(data)

                    })

                } catch (err) {
                    return checkError(err, res)
                }
            },
            member: async (req, res) => {
                let path = `status/${req.params.id}/_log/member`;

                try {

                    await getDatabase(path).then(function (snapshot) {
                        let data = (snapshot.val())
                        return res.send(data)

                    })

                } catch (err) {
                    return checkError(err, res)
                }
            },
            alert: async (req, res) => {
                let path = `status/${req.params.id}/_log/alert`;

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

exports.d = {
    users: {
        user: async (req, res) => {
            let path = `users/${req.params.id}/user`

            try {

                await deleteDatabase(path, data)

                res.send(`ลบข้อมูล ${path} เสร็จสิ้น`);

            } catch (error) {
                return checkError(err, res)
            }
        },
        location: async (req, res) => {
            let path = `users/${req.params.id}/location`

            try {

                await deleteDatabase(path, data)

                res.send(`ลบข้อมูล ${path} เสร็จสิ้น`);

            } catch (error) {
                return checkError(err, res)
            }
        },
        profile: async (req, res) => {
            let path = `users/${req.params.id}/profile`

            try {

                await deleteDatabase(path, data)

                res.send(`ลบข้อมูล ${path} เสร็จสิ้น`);

            } catch (error) {
                return checkError(err, res)
            }
        },
        log: {
            user: async (req, res) => {
                let path = `users/${req.params.id}/_log/user`;

                try {

                    await deleteDatabase(path, data)

                    res.send(`ลบข้อมูล ${path} เสร็จสิ้น`);

                } catch (error) {
                    return checkError(err, res)
                }
            },
            location: async (req, res) => {
                let path = `users/${req.params.id}/_log/location`;

                try {

                    await deleteDatabase(path, data)

                    res.send(`ลบข้อมูล ${path} เสร็จสิ้น`);

                } catch (error) {
                    return checkError(err, res)
                }
            },
            profile: async (req, res) => {
                let path = `users/${req.params.id}/_log/profile`;

                try {

                    await deleteDatabase(path, data)

                    res.send(`ลบข้อมูล ${path} เสร็จสิ้น`);

                } catch (error) {
                    return checkError(err, res)
                }
            }
        }
    },
    share: {
        location: async (req, res) => {
            let path = `share/${req.params.id}/location`

            try {

                await deleteDatabase(path)

                res.send(`ลบข้อมูล ${path} เสร็จสิ้น`);

            } catch (error) {
                return checkError(err, res)
            }
        },
        date: async (req, res) => {
            let path = `share/${req.params.id}/date`

            try {

                await deleteDatabase(path)

                res.send(`ลบข้อมูล ${path} เสร็จสิ้น`);

            } catch (error) {
                return checkError(err, res)
            }
        },
        max_number: async (req, res) => {
            let path = `share/${req.params.id}/max_number`

            try {

                await deleteDatabase(path)

                res.send(`ลบข้อมูล ${path} เสร็จสิ้น`);

            } catch (error) {
                return checkError(err, res)
            }
        },
        sex: async (req, res) => {
            let path = `share/${req.params.id}/sex`

            try {

                await deleteDatabase(path)

                res.send(`ลบข้อมูล ${path} เสร็จสิ้น`);

            } catch (error) {
                return checkError(err, res)
            }
        },
        owner: async (req, res) => {
            let path = `share/${req.params.id}/owner`

            try {

                await deleteDatabase(path)

                res.send(`ลบข้อมูล ${path} เสร็จสิ้น`);

            } catch (error) {
                return checkError(err, res)
            }
        },
        member: async (req, res) => {
            let path = `share/${req.params.id}/member/${req.params.uid}`

            try {

                await deleteDatabase(path)

                res.send(`ลบข้อมูล ${path} เสร็จสิ้น`);

            } catch (error) {
                return checkError(err, res)
            }
        },
        chat: async (req, res) => {
            let path = `share/${req.params.id}/chat`

            try {

                await deleteDatabase(path)

                res.send(`ลบข้อมูล ${path} เสร็จสิ้น`);

            } catch (error) {
                return checkError(err, res)
            }
        },
        log: {
            location: async (req, res) => {
                let path = `share/${req.params.id}/_log/location`;

                try {

                    await deleteDatabase(path)

                    res.send(`ลบข้อมูล ${path} เสร็จสิ้น`);

                } catch (error) {
                    return checkError(err, res)
                }
            },
            date: async (req, res) => {
                let path = `share/${req.params.id}/_log/date`;

                try {

                    await deleteDatabase(path)

                    res.send(`ลบข้อมูล ${path} เสร็จสิ้น`);

                } catch (error) {
                    return checkError(err, res)
                }
            },
            max_number: async (req, res) => {
                let path = `share/${req.params.id}/_log/max_number`;

                try {

                    await deleteDatabase(path)

                    res.send(`ลบข้อมูล ${path} เสร็จสิ้น`);

                } catch (error) {
                    return checkError(err, res)
                }
            },
            sex: async (req, res) => {
                let path = `share/${req.params.id}/_log/sex`;

                try {

                    await deleteDatabase(path)

                    res.send(`ลบข้อมูล ${path} เสร็จสิ้น`);

                } catch (error) {
                    return checkError(err, res)
                }
            },
            owner: async (req, res) => {
                let path = `share/${req.params.id}/_log/owner`;

                try {

                    await deleteDatabase(path)

                    res.send(`ลบข้อมูล ${path} เสร็จสิ้น`);

                } catch (error) {
                    return checkError(err, res)
                }
            },
            member: async (req, res) => {
                let path = `share/${req.params.id}/_log/member`;

                try {

                    await deleteDatabase(path)

                    res.send(`ลบข้อมูล ${path} เสร็จสิ้น`);

                } catch (error) {
                    return checkError(err, res)
                }
            },
            chat: async (req, res) => {
                let path = `share/${req.params.id}/_log/chat`;

                try {

                    await deleteDatabase(path)

                    res.send(`ลบข้อมูล ${path} เสร็จสิ้น`);

                } catch (error) {
                    return checkError(err, res)
                }
            },
        }
    },
    status: {
        process: async (req, res) => {
            let path = `status/${req.params.id}/process`

            try {

                await deleteDatabase(path)

                res.send(`ลบข้อมูล ${path} เสร็จสิ้น`);

            } catch (error) {
                return checkError(err, res)
            }
        },
        share: async (req, res) => {
            let path = `status/${req.params.id}/share`

            try {

                await deleteDatabase(path)

                res.send(`ลบข้อมูล ${path} เสร็จสิ้น`);

            } catch (error) {
                return checkError(err, res)
            }
        },
        owner: async (req, res) => {
            let path = `status/${req.params.id}/owner`

            try {

                await deleteDatabase(path)

                res.send(`ลบข้อมูล ${path} เสร็จสิ้น`);

            } catch (error) {
                return checkError(err, res)
            }
        },
        member: async (req, res) => {
            let path = `status/${req.params.id}/member`

            try {

                await deleteDatabase(path)

                res.send(`ลบข้อมูล ${path} เสร็จสิ้น`);

            } catch (error) {
                return checkError(err, res)
            }
        },
        alert: async (req, res) => {
            let path = `status/${req.params.id}/alert`

            try {

                await deleteDatabase(path)

                res.send(`ลบข้อมูล ${path} เสร็จสิ้น`);

            } catch (error) {
                return checkError(err, res)
            }
        },
        log: {
            process: async (req, res) => {
                let path = `status/${req.params.id}/_log/process`;

                try {

                    await deleteDatabase(path)

                    res.send(`ลบข้อมูล ${path} เสร็จสิ้น`);

                } catch (error) {
                    return checkError(err, res)
                }
            },
            share: async (req, res) => {
                let path = `status/${req.params.id}/_log/share`;

                try {

                    await deleteDatabase(path)

                    res.send(`ลบข้อมูล ${path} เสร็จสิ้น`);

                } catch (error) {
                    return checkError(err, res)
                }
            },
            owner: async (req, res) => {
                let path = `status/${req.params.id}/_log/owner`;

                try {

                    await deleteDatabase(path)

                    res.send(`ลบข้อมูล ${path} เสร็จสิ้น`);

                } catch (error) {
                    return checkError(err, res)
                }
            },
            member: async (req, res) => {
                let path = `status/${req.params.id}/_log/member`;

                try {

                    await deleteDatabase(path)

                    res.send(`ลบข้อมูล ${path} เสร็จสิ้น`);

                } catch (error) {
                    return checkError(err, res)
                }
            },
            alert: async (req, res) => {
                let path = `status/${req.params.id}/_log/alert`;

                try {

                    await deleteDatabase(path)

                    res.send(`ลบข้อมูล ${path} เสร็จสิ้น`);

                } catch (error) {
                    return checkError(err, res)
                }
            },
        }
    }
}
