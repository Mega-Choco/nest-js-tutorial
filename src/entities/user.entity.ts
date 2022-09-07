import internal from 'stream'
import { Entity, Column, PrimaryGeneratedColumn, IsNull } from 'typeorm'

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ nullable: false })
    public name: string;

    @Column()
    public description: string;

    @Column()
    public country: string;

    @Column()
    public bornIn: string;

    @Column({nullable:true})
    public age:number;
}