import { isNotEmpty, isString } from 'class-validator';

export class BasicPromptDto {
  @isString()
  @isNotEmpty()
  prompt: string;
}
