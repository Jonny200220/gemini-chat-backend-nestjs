import { Body, Controller, Get, Post } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { BasicPromptDto } from './dtos/basic-prompt.dto';

@Controller('gemini')
export class GeminiController {
  constructor(private readonly geminiService: GeminiService) {}

  @Get()
  getHello() {
    const apiKey = process.env.GEMINI_API_KEY;
    return { apiKey };
  }

  @Post('/basic-prompt')
  /*
   * Aqui le esta diciendo que en la peticion post extraiga el body
   * y lo guarde en la variable body
   * Tambien le esta diciendo que el tipo de dato de body sea BasicPromptDto
   */
  basicPrompt(@Body() body: BasicPromptDto) {
    // return this.geminiService.basicPrompt();
    return body;
  }
}
