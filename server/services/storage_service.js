const { Player } = require('../db/models');

class StorageService {

  getPlayers = () => Player.findAll();

  getPlayer = async (player_id) => {
    return Player.findByPk(player_id);
  };

  createPlayer = async player => {
    //TODO 2: Use Player sequelize model to create a player
  };

  getSalary = async (salary_id) => {
    return "TODO";
    //TODO 3: Use Salary sequelize model after migration
  };
}

module.exports = new StorageService();
