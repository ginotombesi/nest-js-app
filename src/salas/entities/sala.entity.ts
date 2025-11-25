import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()

export class Sala {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;
}