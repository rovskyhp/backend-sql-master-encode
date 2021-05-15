function createKnexModel(knex, tableName, tableColumns, tableId) {
  const create = (body) => {
    return knex(tableName).insert(body);
  }

  const createTrx = (body, tablePrimaryKey, tableRelated, items, fieldRelated) => {
    // Using trx as a query builder:
    return knex.transaction(function(trx) {
      return trx
        .insert(body)
        .into({tableName})
        .transacting(trx)
        .returning(tablePrimaryKey)
        .then(tablePrimaryKey =>  {
          console.log("tablePrimaryKey");
          console.log(tablePrimaryKey);
          console.log("items");
          console.log(items);
          items.forEach((item) => item[fieldRelated] = Number(tablePrimaryKey));
          return trx(tableRelated).insert(items);
        });
    })
    .then(function(inserts) {
      console.log(inserts.length + ' new items saved.');
    })
    .catch(function(error) {
      // If we get here, that means that neither the 'Old Books' catalogues insert,
      // nor any of the books inserts will have taken place.
      console.error(error);
    });
  }

  // query -> { email: 'randy@gmail.com'}
  const find = (query, columns) => {
    return knex
      .select(columns)
      .from(tableName)
      .where({ ...query, is_active: true });
  }
  
  const findAll = () => {
    return knex
      .select(tableColumns)
      .from(tableName);
  }
  
  const findOneById = (id) => {
    return knex
      .select(tableColumns)
      .from(tableName)
      .where({ [tableId]: id, is_active: true });
  }
  
  const updateOneById = (id, updateBody) => {
    return knex
      .update(updateBody)
      .from(tableName)
      .where({ [tableId]: id });
  }
  
  // Borrado Lógico (desactivar)
  const deleteOneById = (id) => {
    return knex
      .update({ is_active: false })
      .from(tableName)
      .where({ [tableId]: id });
  }

  return {
    create,
    createTrx,
    find,
    findAll,
    findOneById,
    updateOneById,
    deleteOneById,
  }

}

module.exports = createKnexModel;