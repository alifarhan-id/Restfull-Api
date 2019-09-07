const express = require('express');
const db = require('../db/db');
const bodyParser = require('body-parser')
const router = express.Router();

router.use(bodyParser.urlencoded({
    extended: false
}));

router.get('/', (req, res) => {
    res.status(200).json("server running");
});

router.get('/user/:id', (req, res) => {
    try {
        db.getUser(req.params.id, (err, data) => {
            if (err) {
                throw err;
            } else {
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
})

router.post('/user/create', (req, res) => {
    try {
        db.insertUser(req.body, function (err, data) {
            if (err) {
                throw err;
            } else {
                db.getUser(data.insertId, function (err, data) {
                    if (err) {
                        throw err;
                    } else {
                        res.send(data);
                    }
                })

            }
        })
    } catch (error) {
        res.status(500).send(error);
        // console.log(typeof (data));

    }
})

router.put('/user/update/:id', (req, res) => {
    try {
        db.updateUser(req.params.id, req.body, (err, data) => {
            if (err) {
                throw err;
            } else {
                db.getUser(req.params.id, (err, data) => {
                    if (err) {
                        throw err;
                    } else {
                        res.send(data);
                    }
                })
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
})

router.delete('/user/delete/:id', (req, res) => {
    try {
        db.deleteUser(req.params.id, (err, data) => {
            if (err) {
                throw err;
            } else {
                res.send(data)
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
})


module.exports = router;