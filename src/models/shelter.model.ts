import { Entity, property, model } from '@loopback/repository';


@model()
export class Shelter extends Entity {
    @property({
        type: 'number',
        id: true,
    })
    id?: number;

    @property({
        type: 'string',
        id: true,

    })
    name: string;

    @property({
        type: 'string',
        id: true,
    })
    address: string;

    @property({
        type: 'string',
        id: true,
    })
    description: string;

    @property({
        type:'number',
        id: true,

    })
    amazonid: number;


    getID() {
        return this.id;
    }
}