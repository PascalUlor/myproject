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
                        message: `update successful ${i}th item in array`,
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
    /**
     * DELETE a particular recipe from modelData
     * @param {obj} req
     * @param {obj} res
     * @returns {obj} insert success message
     */
    static deleteRecipe(req, res) {
        if (parseInt(req.params.id, 10) in modelData.map(recipe => recipe.id)) {
            const newRecipeCatalog = modelData.filter(recipe => recipe.id !== parseInt(req.params.id, 10));
            res.status(200);
            res.json({
                status: 'successful',
                messsage: 'successfully deleted',
                newRecipeCatalog
            });
        } else {
            res.status(400);
            res.json({
                status: 'failed',
                message: 'Recipe ID does not exist'
            });
        }
    }
    /**
     * Retrieve all available recipe
     * @param {obj} req
     * @param {obj} res
     * @returns {obj} insert success message
     */
    static getRecipe(req, res) {
        if (modelData.length !== 0) {
            if (!req.query.sort) {
                res.status(200);
                res.json({
                    status: 'successful',
                    message: 'Successfully retrieved all data',
                    modelData
                });
            } else if (req.query.sort === 'upVotes') {
                if (req.query.order === 'des') {
                    modelData.sort((a, b) => b.upVote - a.upVote);
                    res.status(200);
                    res.json({
                        status: 'successful',
                        message: 'Successfully retrieved all sorted data',
                        modelData
                    });
                } else {
                    modelData.sort((a, b) => a.upVote - b.upVote);
                    res.status(200);
                    res.json({
                        status: 'successful',
                        message: 'Successfully retrieved all sorted data',
                        modelData
                    });
                }
            } else if (req.query.sort === 'downVote') {
                if (req.query.order === 'des') {
                    modelData.sort((a, b) => b.downVote - a.downVote);
                    res.status(200);
                    res.json({
                        status: 'successful',
                        message: 'Successfully retrieved all sorted data',
                        modelData
                    });
                } else {
                    modelData.sort((a, b) => a.downVote - b.downVote);
                    res.status(200);
                    res.json({
                        status: 'successful',
                        message: 'Successfully retrieved all sorted data',
                        modelData
                    });
                }
            }
        } else {
            res.status(400);
            res.json({
                status: 'failed',
                message: 'No recipes available'
            });
        }
    }
}// End of RecipeClass