const { testeServiceFunc } = require('../modules/services/teste-service')

const testeFunc = async (req, res, next) => {
  try {
    await testeServiceFunc()
    
    res.sendStatus(201)
    next()
  } catch(e) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}

module.exports = {
  testeFunc
}
