// TODO: Require Controllers...

const cubeControler = require('../controllers/cube')
module.exports = (app) => {
    app.get('/details/:id', cubeControler.details);
    app.get('/about', cubeControler.about)
    app.get('/not-found', cubeControler.notFound)
    app.get('/create', cubeControler.getCreate);
    app.post('/create', cubeControler.postCreate)
    app.get('/', cubeControler.index);
    

};