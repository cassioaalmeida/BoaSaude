export const testeFunc = async (req: any, res: any, next: any) => {
  try {
    console.log('user')
    res.sendStatus(201)
    next()
  } catch(e) {
    console.log(e.message)
    res.sendStatus(500) && next(e)
  }
}
