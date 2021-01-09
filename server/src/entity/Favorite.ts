import {Entity, PrimaryColumn, OneToOne, JoinColumn} from "typeorm";
import { Post } from './Post'
import { User } from './User'

@Entity()
export class Favorite {

    @PrimaryColumn('int')
    userId: number

    @PrimaryColumn('int')
    postId: number

    @OneToOne(() => Post, post => post.id)
    @JoinColumn()
    post: Post

    @OneToOne(() => User, user => user.id)
    @JoinColumn()
    user: User
}