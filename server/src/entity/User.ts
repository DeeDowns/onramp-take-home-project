import {Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Post } from './Post'

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;
 
    @Column({ nullable: true })
    firstName: string | null;

    @Column({ nullable: true })
    lastName: string | null;

    @Column({ unique: true, nullable: false})
    username: string;

    @Column({ unique: true, nullable: false})
    email: string;

    @Column({ nullable: false })
    password: string

    @OneToMany(() => Post, post => post.user)
    post: Post[]

}
