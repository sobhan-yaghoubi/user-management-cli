import { Prisma } from "@prisma/client"

export type UserInputType = Prisma.UserCreateInput

export const SelectUserDetails: Prisma.UserSelect = {
  first_name: true,
  last_name: true,
  email: true,
}
