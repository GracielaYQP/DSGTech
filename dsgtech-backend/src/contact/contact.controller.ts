// contact.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from '../mail/mail.service';
import { IsEmail, IsNotEmpty } from 'class-validator';

class ContactDto {
  @IsNotEmpty() name!: string;
  @IsEmail() email!: string;
  @IsNotEmpty() message!: string;
}

@Controller('contact')
export class ContactController {
  constructor(private readonly mail: MailService) {}

  @Post()
  async send(@Body() dto: ContactDto) {
    await this.mail.enviarContacto(dto);
    return { ok: true };
  }
}
