import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksRepository } from './tasks.repository';
import { TasksService } from './tasks.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  providers: [TasksService],
  controllers: [TasksController],
  imports: [AuthModule, TypeOrmModule.forFeature([TasksRepository])],
})
export class TasksModule {}
