import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateArticleDto {
  @IsNotEmpty()
  @MaxLength(255)
  userId: number = 0;

  @IsNotEmpty()
  @MaxLength(255)
  title: string = '';

  @IsNotEmpty()
  body: string = '';
}
