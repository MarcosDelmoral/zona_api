import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { ReportLineModule } from './report_line/report_line.module';
import { ReportFormModule } from './report_form/report_form.module';
import { HeadEndModule } from './head_end/head_end.module';
import { ChannelListModule } from './channel_list/channel_list.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mariadb',
        host: 'zonapdb1',
        port: 3306,
        username: 'head-end',
        password: 'head1234.',
        database: 'ZONA_P',
        entities: [join(process.cwd(), 'dist/**/*.entity.js')],
        synchronize: true,
      }),
    }),
    UserModule,
    RoleModule,
    ReportLineModule,
    ReportFormModule,
    HeadEndModule,
    ChannelListModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
