import { Entity, property, model } from '@loopback/repository';

@model()
export class donation extends Entity {
  @property({
    type: 'number',
    id: true
  })
  iddonation: number;

  @property({
    type: 'number',
    id: true
  })
  stripeid: number;

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
}
