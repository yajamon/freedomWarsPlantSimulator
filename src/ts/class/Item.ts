module PlantSimulator {
    export class Item {

        constructor(private name:Name, private rarity:Rarity) {
        }

        static create(param : {name:string; rarity:number;}) :Item{
            var name = Name.create(param.name);
            var rarity = Rarity.create(param.rarity);
            return new Item(name, rarity);
        }
    }
}
