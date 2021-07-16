const Demo = require('../models/demo.model');
const router = require('express').Router();

router.post('/add', (req, res) => {

    Demo.findOne({ name: req.body.name }).then(name => {
        if (name) {
            res.status(400).json({ name: "Name already added" })
        } else {
            const newName = new Demo({
                name: req.body.name,
            });



            newName
                .save()
                .then(name => res.json(name))
                .catch(err => console.log(err))
        };
    })
})


module.exports = router;