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
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `Item ${id}`;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    console.log(createItemDto);
    return `Name: ${createItemDto.name} Desc: ${createItemDto.description} Qty: ${createItemDto.qty}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Deleted Item: ${id}`;
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
    return `Item Id: ${id} Update: ${updateItemDto.name}`;
  }
}

// Can still do the express pattern
// have to import {Request, Response } from 'express'

// @Get()
// findAll(@Req() req: Request, @Res() res: Response): Response {
//   console.log(req.url);
//   return res.send('Hello World');
// }
