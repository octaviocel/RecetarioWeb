import { ApiProperty } from "@nestjs/swagger";
import { Rol } from "src/rol/entities/rol.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    first_name: string;

    @Column({ type: 'text', unique: true })
    username: string;

    @Column({ type: 'text' })
    last_name: string;

    @Column({ type: 'text', unique: true })
    email: string;

    @Column({ type: 'text', select: false })
    password: string;

    @Column({type: 'timestamp without time zone'})
    birth_date: Date;

    @Column({ name: 'rol_id' })
    rol_id: number;

    @ManyToOne(type => Rol, (rol) => rol.id, {
        eager: true,
        cascade: ['update'],
        nullable: false
    })
    @JoinColumn({ name: 'rol_id' })
    rol: Rol;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}
