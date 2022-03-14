import { readFile, writeFile } from 'fs/promises';

import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const messages = await this.getParsedMessages();

    return messages[id];
  }

  async findAll() {
    return this.getParsedMessages();
  }

  async create(content: string) {
    const messages = await this.getParsedMessages();
    const id = Math.floor(Math.random() * 999);

    messages[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(messages));
  }

  private async getParsedMessages() {
    const contents = await readFile('messages.json', 'utf8');

    return JSON.parse(contents);
  }
}
