import { Injectable } from '@nestjs/common';
import { MailService } from '../mail/mail.service';
import { ContactDto } from './dto/contact.dto';

@Injectable()
export class ContactService {
  constructor(private mail: MailService) {}

  async enviar(dto: ContactDto) {
    await this.mail.enviarContacto(dto);
    return { ok: true, message: 'Mensaje enviado' };
  }
}

