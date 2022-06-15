const { Player } = require('../db/models');

class StorageService {

  getPlayers = () => Player.findAll();

  getPlayer = async (player_id) => {
    return Player.findByPk(player_id);
  };

  createPlayer = async player => {
    await Player.create({"player_id":player.player_id, "player_name":player.player_name,"age":player.age,"position":player.position,"country":player.country});
  };

  getSalary = async (salary_id) => {
    return "TODO";
    //TODO 3: Use Salary sequelize model after migration
  };
}

module.exports = new StorageService();
