import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
// import { Task } from './task.entity';

@Injectable()
export class TasksService {
  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }
  // getTasksFilter(filterDto: GetTasksFilterDto): Task[] {
  //   const { status, search } = filterDto;
  //   let tasks = this.getAllTasks();
  //   if (status) {
  //     tasks = tasks.filter((tasks) => tasks.status === status);
  //   }
  //   if (search) {
  //     tasks = this.tasks.filter((task) => {
  //       if (
  //         task.title.toLowerCase().includes(search.toLowerCase()) ||
  //         task.description.toLowerCase().includes(search.toLowerCase())
  //       ) {
  //         return true;
  //       }
  //       return false;
  //     });
  //   }
  //   return tasks;
  // }
  // getTaskById(id: string): Task {
  //   const task = this.tasks.find((task) => task.id === id);
  //   if (!task) {
  //     throw new NotFoundException(`Task with ID ${id} not found`);
  //   }
  //   return task;
  // }
  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;
  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
  // deleteTaskById(id: string): void {
  //   const task_id = this.tasks.findIndex((task) => task.id == id);
  //   if (!task_id) {
  //     throw new NotFoundException();
  //   }
  //   delete this.tasks[task_id];
  // }
  // updateTask(id: string, updateTaskDto: UpdateTaskDto): Task {
  //   const task = this.getTaskById(id);
  //   for (const key in updateTaskDto) {
  //     if (key in task) {
  //       task[key] = updateTaskDto[key];
  //     }
  //   }
  //   return task;
  // }
}
