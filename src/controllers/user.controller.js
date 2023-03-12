import { Users } from '../models/user.model.js'

export const getUsers = async(req, res) => {
    const users = await Users.findAll()
    res.status(200).json(users)
}

export const getUserByName = async(req, res) => {
    const user = await Users.findOne({ where: { name: `${req.params.name}`}})
    res.status(200).json(user)
}

export const postUser = async(req, res) => {
    const user = await Users.create({name: "Shinji"})
    console.log("User's auto-generated ID:", user.id);
    res.status(201).json({userCreated: true})
} 

//? EXAMPLE WITHOUT SEQUELIZE
// import { pool } from '../database.js'

// export const getUsers = (req, res) => {
//     pool.query('SELECT * FROM "User"', (error, results) => {
//         if (error) {
//           throw error
//         }
//         res.status(200).json(results.rows)
//       })
// }

// export const getUserByParam = (req, res) => {
//     let column

//     isNaN(req.params.param) 
//         ? column = "name" 
//         : column = "id"

//     const query = `SELECT * FROM "User" WHERE ${column} = $1`;
//     const values = [req.params.param];

//     pool.query(query, values, (error, results) => {
//         if(error) {
//             throw error
//         }
//         res.status(200).json(results.rows)
//     })
// }