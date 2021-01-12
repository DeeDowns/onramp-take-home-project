import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema
    .createTable('users',(table:any) => {
        table.increments()

        table.string('username', 128)
        .notNullable()
        .unique()

        table.string('email', 128)
        .notNullable()
        .unique()

        table.string('password', 256)
        .notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('users')
}

