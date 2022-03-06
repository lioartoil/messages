import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return `['Message', 'Message']`;
  }

  @Post()
  createMessage() {
    return { content: 'message' };
  }

  @Get(':id')
  getMessage(@Param('id') id: string) {
    return `${id}'s message`;
  }
}
