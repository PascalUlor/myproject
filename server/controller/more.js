import modelData from '../model/recipes';

/**
 * Class implementation for /api/recipes routes
 * @class recipesController
 */
export default class recipesController {
    /**
     * Add recipe to recipes model
     * @param {obj} req
     * @param {obj} res
     * @returns {obj} insertion error messages or success messages
     */
    static addRecipe(req, res) {
        let newDataId;

        if (modelData.length === 0) {
            newDataId = 1;
        } else {
            newDataId = (modelData[modelData.length - 1].id) + 1;
        }

        try {
            modelData.push({
                id: newDataId,
                title: req.body.title,
                ingridient: req.body.ingridient,
                description: req.body.description,
                upVote: 30,
                downVote: 10,
                favorites: 5,
                views: 50
            });
            res.status(201);
            res.json({
                status: 'Success',
                message: 'Successfully added new recipe',
                modelData
            });
        } catch (e) {
            res.status(500);
            res.json({
                status: 'Failed',
                message: 'Error adding new recipe'
            });
        }
    }
    /**
     * API method to modify recipes
     * @param {obj} req
     * @param {obj} res
     * @returns {obj} with success or error message
     */
    static updateRecipe(req, res) {
        const { title, ingridient, description } = req.body;
        for (let i = 0; i < modelData.length; i += 1) {
            if (modelData[i].id === parseInt(req.params.id, 10)) {
                if (title || ingridient || description) {
                    modelData[i].title = (title) || modelData[i].title;
                    modelData[i].ingridient = (ingridient) || modelData[i].ingridient;
                    modelData[i].description = (description) || modelData[i].description;
                    res.status(200);
                    res.json({
                        status: 'successfull',
                        message: 'update successful',
                        modelData
                    });
                } else {
                    res.status(400);
                    res.json({
                        status: 'failed',
                        message: 'specify data to update'
                    });
                }
            }
        }
        res.status(400);
        res.json({
            status: 'failed',
            message: 'Recipe ID does not exist'
        });
    }
}// End of RecipeClass