import { IsNotEmpty, MaxLength, IsEmail } from 'class-validator';

export class LogInUserDto {
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(255)
  email: string = '';

  @IsNotEmpty()
  @MaxLength(255)
  password: string = '';
}
