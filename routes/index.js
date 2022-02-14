const express = require("express");
const router = express.Router()
const {user_game, user_game_biodata} = require('../models/');

router.get('/', (req, res) => {
    const name = req.query.name || 'Test data dinamis'
    res.render('../views/game')
})

router.get('/login', (req, res) => {
    const name = req.query.name || 'Test data dinamis'
    res.render('login')
})

router.get('/register', (req, res) => {
    const name = req.query.name || 'Test page register'
    res.render('register')
})

router.post('/register', (req, res) => {


    user_game.create({
        username: req.body.username,
        password: req.body.password

    })
    .then(game => {
        res.status(201).json(game)
    }) .catch(err => {
        res.status(422).json("Gagal registrasi")
    })

    user_game_biodata.create(
        {
        username: req.body.username}
    )
})

router.get('/suit', (req, res) => {
    const name = req.query.name || 'Test data dinamis'
    res.render('suit')
})


router.post('/login', (req,res) => {
    user_game.findOne({
        where:{
        username: req.body.username,
        password: req.body.password
        }
    })
    .then(game => {
        res.status(201).json(game)
    }) .catch(err => {
        res.status(422).json("User tidak ditemukan")
    })
})

module.exports = router