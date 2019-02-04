const restrictedPages = require('./auth');
const router = require('express').Router();
const homeController = require('../controllers/home');
const userController = require('../controllers/user');
const carController = require('../controllers/car');


module.exports = app => {
    app.get('/', homeController.index);
    app.get('/user/register', restrictedPages.isAnonymous, userController.registerGet);
    app.post('/user/register', restrictedPages.isAnonymous, userController.registerPost);
    app.get('/user/login', userController.loginGet);
    app.post('/user/login', userController.loginPost);
    app.post('/user/logout', userController.logout);


    app.get('/car/add', restrictedPages.hasRole('Admin'), carController.addGet);
    app.post('/car/add', restrictedPages.hasRole('Admin'), carController.addPost);
    app.get('/car/all', carController.allCars); // This route should be available for all. 
    app.get('/car/rents', restrictedPages.isAuthed, carController.myRent);
    app.get('/car/rent/:id', restrictedPages.isAuthed, carController.rent); // This route should be available for all registered users. Including admins.
    app.get('/car/edit/:id', restrictedPages.isAuthed, carController.editGet);
    app.post('/car/edit/:id', restrictedPages.isAuthed, carController.editPost);

    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};