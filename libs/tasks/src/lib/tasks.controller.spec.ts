import { Test } from '@nestjs/testing';
import { TasksController } from './tasks.controller';

describe('TasksController', () => {
  let controller: TasksController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [TasksController],
    }).compile();

    controller = module.get(TasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
