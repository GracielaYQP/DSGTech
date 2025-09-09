import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PortfolioModule } from './portfolio/portfolio.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // ← lee .env
    PortfolioModule,
    ContactModule, 
  ],
})
export class AppModule {}
