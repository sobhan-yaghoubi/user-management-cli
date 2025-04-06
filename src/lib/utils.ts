export const setSafePrisma = async (callBack: Function) => {
  try {
    return await callBack()
  } catch (error) {
    console.error(`Getting Error From setSafePrisma: ${JSON.stringify(error)}`)
  }
}

export const getSafePrisma = async (callBack: Function) => {
  try {
    return await callBack()
  } catch (error) {
    console.error(`Getting Error From getSafePrisma: ${JSON.stringify(error)}`)
  }
}
