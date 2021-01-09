import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BeforeInsert } from "typeorm";
import bcrypt from 'bcryptjs'
import { Post } from './Post'

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;
 
    // @Column({ nullable: true })
    // firstName: string;

    // @Column({ nullable: true })
    // lastName: string;

    @Column({ unique: true, nullable: false})
    username: string;

    @Column({ unique: true, nullable: false})
    email: string;

    @Column({ nullable: false })
    password: string

    @OneToMany(() => Post, post => post.user)
    post: Post[]

    @BeforeInsert() async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10)
    }

}
