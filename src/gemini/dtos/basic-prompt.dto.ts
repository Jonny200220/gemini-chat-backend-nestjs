import { IsNotEmpty, IsString } from "class-validator";

export class BasicPromptDto {
  @IsNotEmpty()
  @IsString()
  prompt: string;
}
