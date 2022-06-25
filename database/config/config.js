module.exports ={
  "development": {
    "username": "root",
    "password": "0000",
    "database": "devsign_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "devsign2022",
    "database": "devsign_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "devsign2022",
    "database": "devsign_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
} 

//* Al final del archivo index.js (/database/models/index.js) encontraremos la expórtación del objeto DB
