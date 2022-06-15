const { Player, Salary } = require('../db/models');

class StorageService {

  getPlayers = () => Player.findAll();

  getPlayer = async (player_id) => {
    return Player.findByPk(player_id);
  };

  createPlayer = async player => {
    await Player.create({"player_id":player.player_id, "player_name":player.player_name,"age":player.age,"position":player.position,"country":player.country});
  };

  createSalary = async salary => {
    await Salary.create({ "start_date":salary.start_date,"end_date":salary.end_date,"amount":salary.amount,"player_id":salary.player_id});
  };

  getSalary = async (salary_id) => {
    return await Salary.findByPk(salary_id, {include: Player});
  };

}

module.exports = new StorageService();
