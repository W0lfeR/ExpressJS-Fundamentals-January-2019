const restrictedPages = require('./auth');
const router = require('express').Router();
const homeController = require('../controllers/home');
const userController = require('../controllers/user');

module.exports = app => {
    app.get('/', homeController.index);
    app.get('/user/register', restrictedPages.isAnonymous, userController.registerGet);
    app.post('/user/register', restrictedPages.isAnonymous, userController.registerPost);
    app.get('/user/login', restrictedPages.isAnonymous, userController.loginGet);
    app.post('/user/login', restrictedPages.isAnonymous, userController.loginGet);
    app.post('/user/logout', restrictedPages.isAnonymous, userController.logout)

    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};