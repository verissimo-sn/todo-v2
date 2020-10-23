import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('task_priorities', table => {
    table.increments('id').primary();
    table.integer('task_id')
      .notNullable()
      .references('id')
      .inTable('tasks');

    table.integer('priority_id')
      .notNullable()
      .references('id')
      .inTable('priorities');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('task_priorities');
}