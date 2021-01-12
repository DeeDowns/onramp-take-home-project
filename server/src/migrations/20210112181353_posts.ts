import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema
    .createTable('posts', (table:any)=> {
        table.increments()

        table.string('title', 256)
        .notNullable()
        .index()
        
        table.string('content', 256)
        .notNullable()

        table.string('image', 256)
        .nullable()

        table.integer('userId')
        .unsigned()
        .notNullable()
        .references('users.id')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('posts')
}

