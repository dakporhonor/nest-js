import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Req,
  Res,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Request, Response } from 'express';
import { ItemsService } from './items.service';
import { Item } from './interfaces/items.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Post()
  async create(@Body() createItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<Item> {
    return this.itemsService.delete(id);
  }

  @Put(':id')
  async update(@Body() updateItemDto, @Param('id') id): Promise<Item> {
    return this.itemsService.update(id, updateItemDto);
  }
}

// Can still do the express pattern
// have to import {Request, Response } from 'express'

// @Get()
// findAll(@Req() req: Request, @Res() res: Response): Response {
//   console.log(req.url);
//   return res.send('Hello World');
// }
