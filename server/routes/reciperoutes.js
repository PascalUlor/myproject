import express from 'express';
import recipesController from '../controller/more';

const router = express.Router();

// Route for all recipe verbs
router.route('/recipes')
    .post(recipesController.addRecipe)
    .get(recipesController.getRecipe);

router.route('/recipes/:id')
    .put(recipesController.updateRecipe)
    .delete(recipesController.deleteRecipe);

export default router;