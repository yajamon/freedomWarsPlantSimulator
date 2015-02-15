module PlantSimulator {
    export class Item {

        constructor(private name:Name, private reality:Reality) {
        }

        static create(param : {name:string; reality:number;}) :Item{
            var name = Name.create(param.name);
            var reality = Reality.create(param.reality);
            return new Item(name, reality);
        }
    }
}
