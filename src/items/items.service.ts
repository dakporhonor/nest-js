import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/items.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '123451',
      name: 'Item One',
      qty: 5,
      description: 'This is item one',
    },
    {
      id: '123452',
      name: 'Item Two',
      qty: 10,
      description: 'This is item two',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }
}
