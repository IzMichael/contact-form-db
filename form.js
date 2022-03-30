const { randomUUID } = require('crypto');
const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/:set', async (req, res) => {
    let db = JSON.parse(fs.readFileSync('./database.json', { encoding: 'utf8', flag: 'r' }));
    if (!db[req.params.set]) {
        db[req.params.set] = { 'list': [] };
    }
    res.status(200).send({'list': db[req.params.set].list, 'timestamp': new Date().getTime() });
});

router.post('/:set', async (req, res) => {
    let db = JSON.parse(fs.readFileSync('./database.json', { encoding: 'utf8', flag: 'r' }));
    req.body['_timestamp'] = new Date().getTime();
    req.body['_id'] = randomUUID();
    if (!db[req.params.set]) {
        db[req.params.set] = {};
    }
    if (!db[req.params.set].list) {
        db[req.params.set].list = [];
    }
    db[req.params.set].list.push(req.body);
    fs.writeFileSync('./database.json', JSON.stringify(db), { encoding: 'utf8', flag: 'w' });
    res.status(202).send();
});

module.exports = router;