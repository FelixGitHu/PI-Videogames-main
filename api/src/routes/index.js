const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { routerGenres } = require('./genres');
const { routerVideogames } = require('./videogames');
const userRouter = require('./users');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames',routerVideogames);
router.use('/genres',routerGenres);
router.use('/user',userRouter);

module.exports = router;
