import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'


@Entity('usuarios')
export default class Usuarios{
    //colocar os campos da tabela
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    latititude: number

    @Column()
    longitude: number

    @Column()
    about: string

    @Column()
    instructions: string

    @Column()
    open_in_hours: string

    @Column()
    open_on_weekends: boolean

    @Column()
    telefone: number
}