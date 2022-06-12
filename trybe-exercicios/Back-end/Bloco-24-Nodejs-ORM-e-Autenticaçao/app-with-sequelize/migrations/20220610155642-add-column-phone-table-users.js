// além de adicionar ou remover colunas, o objeto queryInterface também permite que você altere a estrutura de uma coluna, como seu tipo, valor default, entre outros detalhes, assim como o ALTER TABLE também permite.

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
      await queryInterface.addColumn('Users', 'phone_num', {
        type: Sequelize.STRING,
      });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.removeColumn('Users', 'phone_num');
  }
};
