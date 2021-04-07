const Login = require('./model/login')
const login = new Login({
    username: 'admin',
    password: '123123'
})
login.save().then(res => {
    console.log(res)
})