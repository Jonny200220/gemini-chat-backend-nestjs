import { Injectable } from '@nestjs/common';

@Injectable()
export class GeminiService {
  basicPrompt(): Promise<{ message: string }> {
    return Promise.resolve({ message: 'Hello World' });
  }
}
