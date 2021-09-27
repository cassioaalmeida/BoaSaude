import {testeDb} from '../repository/teste-repository'

/*
  * if you need to make calls to additional tables, data stores (Redis, for example), 
  * or call an external endpoint as part of creating the blogpost, add them to this service
*/
export const testeServiceFunc = async () => {
  try {
    return await testeDb()
  } catch(e) {
    throw e
  }
}