import recipes from "../model/recipes"

class Recipe {
    constructor(req, res) {
      this.recipes = recipes;
    }
    
    addRecipe(){
      let item = req.body;
      if (!item.id) {
          return res.status(500);
      }
      recipes.push(item);
    }
  
  }