import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { User } from './User'

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", nullable: false })
    title: string;

    @Column({ type: 'date', nullable: true  })
    date: Date = new Date();

    @Column({ type: 'text', nullable: true })
    img: string | null;

    @Column({ type: "text", nullable: false})
    content: string

    @OneToOne(() => User, user => user.post)
    @JoinColumn({ name: 'userId', referencedColumnName: 'id'})
    user: User

}