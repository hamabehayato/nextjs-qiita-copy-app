import { IsNotEmpty, MaxLength, IsEmail } from 'class-validator';

export class SignUpUserDto {
  @IsNotEmpty()
  @MaxLength(255)
  name: string = '';

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(255)
  email: string = '';

  @IsNotEmpty()
  @MaxLength(255)
  password: string = '';
}
