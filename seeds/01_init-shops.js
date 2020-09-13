const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
};

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shops').del()
    .then(function () {
      // Inserts seed entries
      return knex('shops').del()
        .then(function () {
            return knex('shops').insert([
              { id: 1, name: '店铺1', thumb_url: '1.png', ...timestamps },
              { id: 2, name: '店铺2', thumb_url: '2.png', ...timestamps },
              { id: 3, name: '店铺3', thumb_url: '3.png', ...timestamps },
              { id: 4, name: '店铺4', thumb_url: '4.png', ...timestamps },
            ]);
        })
    });
};
