const { Player } = require("../db/models");
const { Salary } = require("../db/models");

class StorageService {
  getPlayers = () => Player.findAll();

  getPlayer = async (player_id) => {
    return await Player.findOne({ where: { player_id } });
  };

  createPlayer = async (player) => {
    await Player.create(player);
  };

  createSalary = async (salary) => {
    //TODO 4: Use Salary sequelize model to create a salary
    await Salary.create(salary);
  };

  getSalary = async (salary_id) => {
    //TODO 5: Use Salary sequelize model to get salary
    return await Salary.findByPk(salary_id, { include: Player });
  };
}

module.exports = new StorageService();
