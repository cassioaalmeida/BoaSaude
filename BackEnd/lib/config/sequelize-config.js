const { Sequelize } = require("sequelize");

let sequelizeConfig;

const initSequelize = function () {
    sequelizeConfig = new Sequelize(
        'boasaudeidentity', 
        'cassio', 
        '@Zedumato12', {
            host: 'boasaude.database.windows.net',
            dialect: 'mssql',
            port: '1433'
        });
}

const sequelize = function () {
    return sequelizeConfig;
}


module.exports = {
    initSequelize,
    sequelize
}