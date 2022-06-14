const { Player } = require('../db/models');

class StorageService {

  getPlayers = () => Player.findAll();

  getPlayer = async (player_id) => {
    return "TODO";
    //TODO 1: Use Player sequelize model to retrieve the specific player
  };

  createPlayer = async player => {
    //TODO 2: Use Player sequelize model to create a player
  };
}

module.exports = new StorageService();
