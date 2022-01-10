const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/', moviesController.list);
router.get('/new', moviesController.new);
router.get('/recommended', moviesController.recomended);
router.get('/detail/:id', moviesController.detail);


//Rutas exigidas para la creación del CRUD
router.get('/add', moviesController.add);
router.post('/create', moviesController.create);
router.get('', moviesController.edit);
router.put('', moviesController.update);
router.get('', moviesController.delete);
router.delete('', moviesController.destroy);

module.exports = router;