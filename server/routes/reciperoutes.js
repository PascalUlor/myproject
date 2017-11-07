import express from 'express';
import recipesController from '../controller/more';

const router = express.Router();

// Route for all recipe verbs
router.route('/recipes')
    .post(recipesController.addRecipe);

router.route('/recipes/:id')
    .put(recipesController.updateRecipe);

export default router;