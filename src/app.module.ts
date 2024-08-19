import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MicrocreditModule } from './microcredits/microcredit.module';
import { MicrocreditsController } from './microcredits/microcredits.controller';

@Module({
  imports: [UsersModule, MicrocreditModule],
  controllers: [AppController, MicrocreditsController],
  providers: [AppService],
})
export class AppModule {}
