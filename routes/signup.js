const express = require('express')
const { renameSync } = require('fs')
const { checkNotLogin } = require('../middlewares/check')
const router = express.Router()
const checkNotLogin = require('../middlewares/check').checkNotLogin

//GET /signup注册页
router.get('/', checkNotLogin, function(req, res, next){
    res.send('注册页')
})

//POST /signup用户注册
router.post('/', checkNotLogin, function(req, res, next){
    res.send('注册')
})

module.exports = router