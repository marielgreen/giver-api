import { Entity, property, model } from '@loopback/repository';

@model()
export class order extends Entity {
  @property({
    type: 'number',
    id: true
  })
  idorder: number;

  @property({
    type: 'date',
    id: true
  })
  date: Date;

  @property({
    type: 'number',
    id: true
  })
  iduser: number;

  @property({
    type: 'number',
    id: true
  })
  idshelter: number;

  @property({
    type: 'number',
    id: true
  })
  amazonid: number;
}
