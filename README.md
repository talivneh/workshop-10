# Sequelize ORM workshop

In this workshop we will add Sequelize ORM to a simple node app.

## You will practice

**Sequelize models** - Use Sequelize model to execute queries on your DB

**Migrations** - Manage DB changes using Sequelize migrations


## Workshop steps:
1. Clone this repository: `git clone git@github.com:monday-u-com/workshop-10.git`
2. CD workshop-10 directory
3. Explore `server/db` folder files - config (where we set connection details to our db), migrations (migration files will be added here), models (model definition of player entity)
4. Run `npm install`
5. Run `npm start`
6. Open browser and go to "http://localhost:3042/players" - this will load all players from our db

### Task #1
Implement `getPlayer` function in `storage_service.js`. Use the Player model to find the specific player and return it. 
Verify it works: http://localhost:3042/player/1

### Task #2
Implement `createPlayer` function in `storage_service.js`. Use the Player model to create a new player in our DB.
Verify it works, insert new player using Postman or the command: `curl -X POST localhost:3042/player   -H 'Content-Type: application/json'   -d '{ "player_id":9999,"player_name":"player name","age":30,"position":"Attacker","country":"uk"}'` and load it's data: http://localhost:3042/player/9999

### Task #3
Using [`npx sequelize-cli model:generate`](https://sequelize.org/docs/v6/other-topics/migrations/#creating-the-first-model-and-migration) - create a new model for Salary (run the following from db folder) -  `npx sequelize-cli model:generate --name Salary --attributes start_date:date,end_date:date,amount:integer,player_id:integer`. 

Explore the new files that were generated in migrations and model folder. 

Now execute the migration: `npx sequelize-cli db:migrate`  - this will create the Saralies table in our DB. 

Insert a row to Salary table: ```INSERT INTO `mysql_workshop`.`Salaries` (`id`, `start_date`, `end_date`, `amount`, `player_id`) VALUES ('1', '2022-01-02', '2023-01-01', '1000', '9999', '2022-01-02', '2022-01-02')```

Implement the getSalary function, then go to browser and get the salary data via API: http://localhost:3042/salary/1


### Task #4
Add [association](https://sequelize.org/docs/v6/core-concepts/assocs/#:~:text=To%20do%20this%2C%20Sequelize%20provides,The%20HasMany%20association) between Salary's player_id field and Player model.

Include the Player model in getSalary response (use the `include` option `findByPk(id, { include: <model name>})`) 

Go to browser and get the salary data via API: http://localhost:3042/salary/1 , now it should include the player data as well!


### Prerequisites:
Following pre-requisites were covered in our last workshop. 
- Download and install [docker](https://docs.docker.com/get-docker/)
- Open console and pull latest mysql image: ```docker pull mysql/mysql-server ```
- Run mysql container and initialize it with the proper user, password, db name and permissions: ```docker run -p 3306:3306 --name mysql_workshop -e MYSQL_ROOT_PASSWORD=password -e MYSQL_ROOT_HOST=% -e MYSQL_DATABASE=mysql_workshop -d mysql/mysql-server```
- Validate container is up: ```docker ps``` 


## Usefull links:
[Initializing Sequelize](https://sequelize.org/docs/v6/getting-started/)

[Creating migrations](https://sequelize.org/docs/v6/other-topics/migrations/#creating-the-first-model-and-migration)

[DataTypes](https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types)

[Association](https://sequelize.org/docs/v6/core-concepts/assocs/#:~:text=To%20do%20this%2C%20Sequelize%20provides,The%20HasMany%20association)

[Sequelize documentation](https://sequelize.org/docs/v6/)
