import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { VersesModule } from './components/verses/verses.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    VersesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
