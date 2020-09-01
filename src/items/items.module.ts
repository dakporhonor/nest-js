import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
