import app from './app.js'
import { sequelize } from './database.js' 

app.listen(3000, () => console.log('listening on port 3000'))
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }