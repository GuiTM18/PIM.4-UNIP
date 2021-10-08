import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Clientes {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome_completo: string;

    @Column()
    cpf: number;    //Ta com limitação de números e não indetifica . ou -

    @Column()
    telefone: number;   //Ta com limitação de números e não indetifica . ou -

    @Column()
    email: string;

    @Column()
    senha: string;

    @CreateDateColumn()
    create_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
