const encryption = require('../util/encryption')

module.exports = {
    registerGet: (req, res) => {
       res.render('user/register')
    },
    registerPost: async (req, res) => {
       const userBody = req.body
       if(!userBody.username || !userBody.password || !userBody.repeatPassword){
           userBody.error = 'Please fill all fields!'
           res.render('user/register', userBody);
           return; 
       }
       if(userBody.password !== userBody.repeatPassword){
           userBody.error = 'Both passwords should match'
           res.render('user/register', userBody);
           return;
       }
const salt = encryption.generateSalt();
const hashedPass 



    },
    logout: (req, res) => {
        // TODO:
    },
    loginGet: (req, res) => {
        // TODO:
    },
    loginPost: async (req, res) => {
        // TODO:
    }
};