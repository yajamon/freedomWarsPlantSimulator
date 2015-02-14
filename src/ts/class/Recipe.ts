module PlantSimulator {
    export class Recipe {
        private datas :GenerationPercentage[] = [];

        constructor() {
        }

        add (item:Item, percent:number):void{
            this.datas.push(new GenerationPercentage(item, percent));
        }

    }

    class GenerationPercentage {

        constructor(item:Item, percent:number) {
        }
    }
}
