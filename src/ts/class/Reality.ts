module PlantSimulator {
    export class Reality {
        constructor(private value:number) {
        }

        static create(value:number) :Reality{
            return new Reality(value);
        }
    }
}
