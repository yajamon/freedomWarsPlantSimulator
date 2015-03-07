module PlantSimulator {
    export class Rarity {
        constructor(private value:number) {
        }

        static create(value:number) :Rarity{
            return new Rarity(value);
        }
    }
}
