import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from './dto';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({
    type: 'enum',
    enum: TaskStatus,
    array: false,
    default: TaskStatus.CREATED,
  })
  status: TaskStatus;

  @Column()
  description: string;
}
