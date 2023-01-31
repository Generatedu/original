import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { Postagem } from "src/postagem/entities/postagem.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_usuario'})
export class Usuario {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @MaxLength(255)
    @Column({length: 255, nullable: false})
    @ApiProperty()
    nome: string

    @IsEmail()
    @IsNotEmpty()
    @MaxLength(255)
    @Column({length: 255, nullable: false, unique: true})
    @ApiProperty({example: "email@email.com.br"})
    usuario: string

    @IsNotEmpty()
    @MinLength(8)
    @Column({length: 255, nullable: false})
    @ApiProperty()
    senha: string

    @Column({length: 5000, nullable: true})
    @ApiProperty()
    foto: string

    @ApiProperty({type:() => Postagem})
    @OneToMany(() => Postagem, (postagem) => postagem.usuario)
    postagem: Postagem[]
}