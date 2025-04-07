#!/usr/bin/env node

import { program } from "commander"
import { createUserAction, getUsersAction } from "./commander.js"

program.version("1.0.0").description("Client Management System")

program.command("add user").description("Add user").action(createUserAction)

program.command("get users").description("Get users").action(getUsersAction)

program.parse(process.argv)
