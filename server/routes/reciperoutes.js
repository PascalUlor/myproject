import express from 'express';
import recipesController from '../controller/recipeClasses';

const router = express.Router();

// Route for all recipe verbs
router.route('/recipes')
    .post(recipesController.addRecipe)
    .get(recipesController.getRecipe);

router.route('/recipes/:id')
    .put(recipesController.updateRecipe)
    .delete(recipesController.deleteRecipe);

router.route('/recipes/:id/reviews')
    .post(recipesController.postReview);

export default router;