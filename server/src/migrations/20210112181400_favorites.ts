import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema
    .createTable('favorites', (table:any) => {
        table.increments()

        table.integer('userId')
        .unsigned()
        .notNullable()
        .references('users.id')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')

        table.integer('postId')
        .unsigned()
        .notNullable()
        .references('posts.id')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('favorites')
}

