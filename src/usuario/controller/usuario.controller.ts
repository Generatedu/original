import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard";
import { Usuario } from "../entities/usuario.entity";
import { UsuarioService } from "../service/usuario.service";

@ApiTags('Usuario')
@Controller('/usuarios')
@ApiBearerAuth()
export class UsuarioController {

    constructor (private readonly usuarioService: UsuarioService) {}

@UseGuards(JwtAuthGuard)
@Get('/all')
@HttpCode (HttpStatus.OK)
findAll(): Promise <Usuario[]> {
    return this.usuarioService.findAll()
}

@HttpCode(HttpStatus.OK)
@Get("/:id")
findById(@Param('id', ParseIntPipe) id: number): Promise<Usuario> {
    return this.usuarioService.findById(id)
}
    

@UseGuards(JwtAuthGuard)
@Get('/usuario/:usuario')
@HttpCode (HttpStatus.OK)
findByUsuario (@Param('usuario') usuario: string): Promise<Usuario> {
    return this.usuarioService.findByUsuario(usuario)
}

@UseGuards(JwtAuthGuard)
@Get('/nome/:nome')
@HttpCode (HttpStatus.OK)
findByNome (@Param('nome') nome: string): Promise<Usuario> {
    return this.usuarioService.findByNome(nome)
}

@Post('/cadastrar')
@HttpCode (HttpStatus.CREATED)
async create(@Body() usuario: Usuario): Promise<Usuario> {
    return this.usuarioService.create(usuario)
}

@UseGuards(JwtAuthGuard)
@Put('/atualizar')
@HttpCode (HttpStatus.OK)
async update (@Body() usuario: Usuario): Promise<Usuario> {
    return this.usuarioService.update(usuario)
}
}
