/*
 * @Author: your name
 * @Date: 2021-04-07 20:42:40
 * @LastEditTime: 2021-08-31 21:00:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-express-mongo\routes\index.js
 */
const Login = require('../model/login')
const fs = require('fs')

var express = require('express');
var router = express.Router();
const cors = require('cors')
//cors跨域
router.use(cors())
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '白茶清风无别事，我等风亦等自己' });
});

router.post('/getUserInfo', (req, res) => {
  // var username = req.body.username;
  // var password = req.body.password;
  // Login.find({ username, password }).then(mon => {
  //   if (mon.length > 0) {
  //     res.cookie('username', req.body.username)
  //     res.json({
  //       code: 200,
  //       msg: "登陆成功"
  //     })
  //   } else {
      // res.json({
      //   code: 101,
      //   msg: "用户名或者密码不正确"
      // })
      res.json({
        code: 200,
        list:[1,2,3,4]
      })
  //   }
  // })
})
router.post('/getList', (req,res)=> {
  res.json({
    code: 200,
    list:[{id:1},{id:2},{id:3},{id:4}]
  })
})
router.post('/getCount', (req,res)=> {
  res.json({
    code: 200,
    data: 99
  })
})

module.exports = router;
