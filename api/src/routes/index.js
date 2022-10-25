const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dietMiddleware = require('./diets');
const recipeMiddleware = require('./recipes');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/recipes', recipeMiddleware);
router.use('/diets', dietMiddleware);
module.exports = router;

