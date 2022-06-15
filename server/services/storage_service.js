const { Player } = require('../db/models');

class StorageService {

  getPlayers = () => Player.findAll();

  getPlayer = async (player_id) => {
    return Player.findByPk(player_id);
  };

  createPlayer = async player => {
    await Player.create({"player_id":player.player_id, "player_name":player.player_name,"age":player.age,"position":player.position,"country":player.country});
  };

  createSalary = async salary => {
    //TODO 4: Use Salary sequelize model to create a salary
  };

  getSalary = async (salary_id) => {
    return "TODO";
    //TODO 5: Use Salary sequelize model to get salary
  };


}

module.exports = new StorageService();
