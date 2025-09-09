import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { MAIL_TRANSPORT } from './mail.tokens';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService implements OnModuleInit {
  constructor(@Inject(MAIL_TRANSPORT) private transporter: any) {}

  async onModuleInit() {
    try {
      // En transports “dev/json/stream” verify puede no aplicar
      if (this.transporter.verify) {
        await this.transporter.verify();
        console.log('✅ SMTP listo');
      } else {
        console.log('✅ Mail DEV listo (sin envío real)');
      }
    } catch (e) {
      console.error('❌ SMTP error:', e);
    }
  }

  async enviarContacto(data: { name: string; email: string; message: string }) {
    const { name, email, message } = data;

    const info = await this.transporter.sendMail({
      from: `"DSGTech Web" <${process.env.SMTP_USER || 'no-reply@local.dev'}>`,
      to: process.env.CONTACT_TO || 'dev@local.dev',
      subject: `Nuevo contacto de ${name}`,
      replyTo: email,
      text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <h3>Nuevo contacto</h3>
        <p><b>Nombre:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mensaje:</b><br/>${message.replace(/\n/g,'<br/>')}</p>
      `,
    });

    // Ayudas en modo TEST
    if (process.env.MAIL_PROVIDER?.toLowerCase() === 'ethereal') {
      const url = nodemailer.getTestMessageUrl(info);
      if (url) console.log('🔗 Vista previa Ethereal:', url);
    } else if (!process.env.MAIL_PROVIDER || process.env.MAIL_PROVIDER === 'dev') {
      console.log('🧪 Mail DEV (JSON/stream):', info);
    }
  }
}
