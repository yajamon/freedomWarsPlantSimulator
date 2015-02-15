module PlantSimulator {
    export class Name {
        constructor(private value:string) {
        }

        static create(value:string) :Name{
            return new Name(value);
        }
    }
}
