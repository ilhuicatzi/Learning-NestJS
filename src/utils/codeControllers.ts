export const CodeControllers_1 = `
  import { Controller } from '@nestjs/common';

  @Controller('auth')
  export class AuthController {

      // Aquí irán los métodos de la clase AuthController

  }
`;

export const CodeControllers_2 = `
  import {
  Get,
  Req,
  Post,
  Param
  HttpCode,
  Controller,
  } from '@nestjs/common';

  @Controller('auth')
  export class AuthController {

    @Get() // ruta GET /auth
    getHello(): string {
      return 'Hello World!';
    }

    @Get(':id') // ruta GET /auth/:id
    getProfile(@Param() params: any): string {
      console.log(params.id);
      return \`This action returns a #\${params.id} profile\`;
    }

    @Post() // ruta POST /auth
    @HttpCode(204)  // Código de respuesta HTTP
    register(): string {
      return 'Register user';
    }

    @Post('login') // ruta POST /auth/login
    login(@Req() request: Request): string {
      return 'Login user';
    }
  }
`;
