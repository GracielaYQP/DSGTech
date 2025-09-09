import { Module } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { MailService } from './mail.service';
import { MAIL_TRANSPORT } from './mail.tokens';

@Module({
  providers: [
    {
      provide: MAIL_TRANSPORT,
      useFactory: async () => {
        const provider = (process.env.MAIL_PROVIDER || '').toLowerCase(); // 'hostinger' | 'ethereal' | 'dev'
        const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

        if (provider === 'hostinger') {
          if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
            console.warn('⚠️ MAIL_PROVIDER=hostinger pero faltan envs. Paso a DEV.');
          } else {
            return nodemailer.createTransport({
              host: SMTP_HOST,
              port: Number(SMTP_PORT ?? 587),
              secure: Number(SMTP_PORT) === 465, // 465=SSL; 587=STARTTLS
              auth: { user: SMTP_USER, pass: SMTP_PASS },
            });
          }
        }

        if (provider === 'ethereal') {
          const acc = await nodemailer.createTestAccount();
          return nodemailer.createTransport({
            host: acc.smtp.host,
            port: acc.smtp.port,
            secure: acc.smtp.secure,
            auth: { user: acc.user, pass: acc.pass },
          });
        }

        // DEV por defecto: no envía, logea el mensaje
        console.warn('ℹ️ MAIL_PROVIDER=dev (sin envío real).');
        return nodemailer.createTransport({
          // elegí UNA de estas dos opciones DEV:

          // Opción A: JSON en consola
          jsonTransport: true,

          // Opción B (alternativa): stream en memoria
          // streamTransport: true, newline: 'unix', buffer: true,
        } as any);
      },
    },
    MailService,
  ],
  exports: [MAIL_TRANSPORT, MailService],
})
export class MailModule {}
