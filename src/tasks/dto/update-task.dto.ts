import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../task.model';

export class UpdateTaskDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status: TaskStatus;
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  title: string;
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description: string;
}
