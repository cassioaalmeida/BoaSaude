const { testeDb } = require('../repository/teste-repository')

/*
  * if you need to make calls to additional tables, data stores (Redis, for example), 
  * or call an external endpoint as part of creating the blogpost, add them to this service
*/
const testeServiceFunc = async () => {
  try {
    return await testeDb()
  } catch(e) {
    throw new Error(e.message)
  }
}

module.exports = {
  testeServiceFunc
}
