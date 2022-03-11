import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return `['Message', 'Message']`;
  }

  @Post()
  createMessage(@Body() body: unknown) {
    return body;
  }

  @Get(':id')
  getMessage(@Param('id') id: string) {
    return `${id}'s message`;
  }
}
