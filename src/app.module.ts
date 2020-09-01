import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://danny:vicki@cluster0.hoftq.mongodb.net/nest?retryWrites=true&w=majority',
    ),
    ItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
