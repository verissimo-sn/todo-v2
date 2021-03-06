import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('tasks', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('priority').notNullable();
    table.string('description', 100).notNullable();
    table.boolean('done').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('tasks');
}