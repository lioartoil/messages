import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messageRepo: MessagesRepository;

  constructor() {
    this.messageRepo = new MessagesRepository();
  }

  async findOne(id: string) {
    return this.messageRepo.findOne(id);
  }

  async findAll() {
    return this.messageRepo.findAll();
  }

  async create(message: string) {
    return this.messageRepo.create(message);
  }
}
