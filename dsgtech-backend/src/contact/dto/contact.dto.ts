import { IsEmail, IsOptional, IsString, Length } from 'class-validator';

export class ContactDto {
  @IsString()
  @Length(2, 80)
  name: string;          // <-- antes 'nombre'

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  @Length(0, 40)
  telefono?: string;

  @IsString()
  @Length(10, 2000)
  message: string;       // <-- antes 'mensaje'
}
