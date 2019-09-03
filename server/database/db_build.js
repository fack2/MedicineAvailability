const fs = require('fs')

const dbConnection = require('./db_connection')

const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString()

const runDbBuild = cb => dbConnection.query(sql, cb)

runDbBuild((err, res) => {
  if (err) {
    throw err
  }
  return res
})

module.exports = runDbBuild
