#!/usr/bin/env node

import { program } from "commander"
import { createUser } from "./controllers/user.js"
import inquirer from "inquirer"
import { hashPassword } from "./lib/bcrypt.js"

program.version("1.0.0").description("Client Management System")

program
  .command("add customer")
  .alias("a")
  .description("Add Customer")
  .action(async () => {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "first_name",
        message: "First Name",
      },
      {
        type: "input",
        name: "last_name",
        message: "Last Name",
      },
      {
        type: "input",
        name: "email",
        message: "Email",
        validate: (input: string) => {
          const regex = /\S+@\S+\.\S+/
          return regex.test(input) || "Please Enter Valid Email"
        },
      },
      {
        type: "password",
        name: "password",
        message: "Password",
        mask: "*",
      },
    ])

    const hashedPassword = await hashPassword(answers.password)

    await createUser({
      first_name: answers.first_name,
      last_name: answers.last_name,
      email: answers.email,
      password: hashedPassword,
    })
  })

program.parse(process.argv)
