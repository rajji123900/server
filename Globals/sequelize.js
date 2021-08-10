import Sequelize from 'sequelize'

const connectedDb = () => { 

    Op = Sequelize.Op;
    sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.USERNAME, process.env.PASSWORD, {
        host: 'localhost',
        dialect: 'postgres',
        operatorsAliases: false ,
        pool: {
            max: 100,
            min: 0,
            idle: 200000,
            acquire: 1000000,
          }
    });
    sequelize.authenticate().then(() => {
        console.log('Connection established successfully.');
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
    })
}


export default connectedDb;