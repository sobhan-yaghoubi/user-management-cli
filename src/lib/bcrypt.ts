import bcrypt from "bcryptjs"

export const hashPassword = async (password: string, rounds: number = 10) => {
  const hashedPassword = await bcrypt.hash(password, rounds)
  return hashedPassword
}

export const isPasswordMatch = async (
  password: string,
  hashedPassword: string
) => {
  const isMatch = await bcrypt.compare(password, hashedPassword)
  return isMatch
}
