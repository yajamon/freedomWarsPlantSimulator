module PlantSimulator {
    export class RecipeSet {
        recipes :Recipe[] = [];
        constructor() {
        }

        add(recipe:Recipe) :void {
            this.recipes.push(recipe);
        }
    }
}
