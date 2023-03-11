import pkg from 'sequelize'
export const { Sequelize, Model, DataTypes } = pkg

export const sequelize = new Sequelize('postgres://postgres:example@localhost:5432/postgres')

//? EXAMPLE WITHOUT SEQUELIZE
// import pkg from 'pg'
// const { Pool } = pkg

// export const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'API',
//     password: 'example',
//     port: 5432,
//   })