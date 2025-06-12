import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column("text")
  descricao: string;

  @CreateDateColumn()
  criado_em: Date;
}
