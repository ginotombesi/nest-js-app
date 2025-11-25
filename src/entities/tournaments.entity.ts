import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()

export class Tournaments {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    cash: number;
}