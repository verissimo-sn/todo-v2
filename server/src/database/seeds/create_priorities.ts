import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('priorities').insert([
    { name: 'baixo', priority: 1 },
    { name: 'medio', priority: 2 },
    { name: 'alto', priority: 3 },
    { name: 'urgente', priority: 4 },
  ]);
}
