import { Module } from '@nestjs/common';
import { MicrocreditsController } from './microcredits.controller';
import { MicrocreditsService } from './microcredits.service';

@Module({
    controllers: [MicrocreditsController],
    providers: [MicrocreditsService]
})
export class MicrocreditModule {}
