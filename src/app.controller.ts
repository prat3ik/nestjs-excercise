import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  executeTest(): string {
    return `mocha --require ts-node/register /path/to/account-action/test`;
  }
}
