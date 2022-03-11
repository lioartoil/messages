import { readFile } from 'fs/promises';

export class MessagesRepository {
  async findOne(id: string) {
    const messages = await this.getParsedMessages();

    return messages[id];
  }

  async findAll() {
    return this.getParsedMessages();
  }

  private async getParsedMessages() {
    const contents = await readFile('messages.json', 'utf8');

    return JSON.parse(contents);
  }
}
