import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    this.messagesService = new MessagesService();
  }

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() { content }: CreateMessageDto) {
    return this.messagesService.create(content);
  }

  @Get(':id')
  getMessage(@Param('id') id: string) {
    return this.messagesService.findOne(id);
  }
}
