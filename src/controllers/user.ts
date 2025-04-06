import prisma from "../lib/prisma.js"
import { getSafePrisma, setSafePrisma } from "../lib/utils.js"
import { UserInputType } from "../types/user.js"

export const createUser = async (newUser: UserInputType) => {
  await setSafePrisma(async () => await prisma.user.create({ data: newUser }))
}

export const getUser = async (userId: string) => {
  await getSafePrisma(
    async () => await prisma.user.findFirst({ where: { id: userId } })
  )
}
