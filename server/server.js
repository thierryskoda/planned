const fastify = require("fastify")
const faker = require("faker")
const cors = require("fastify-cors")

const PORT = 8099
const server = fastify({ logger: true })

server.register(cors, { origin: true })

function createUser(minAge, maxAge) {
  return {
    age: Math.floor(Math.random() * (maxAge - minAge + 1) + minAge),
    country: faker.address.country(),
    email: faker.internet.email(),
    name: {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
    },
  }
}

function createUsers(minAge, maxAge, limit) {
  const users = []

  for (let i = 0; i < limit; i++) {
    users.push(createUser(minAge, maxAge))
  }

  const duplicatedUser = createUser(minAge, maxAge)
  duplicatedUser.name.firstName = "Bob"
  duplicatedUser.name.lastName = "Bissonnette"
  users.push(duplicatedUser)

  return users
}

server.get("/users/kids", async (req) => {
  const { query } = req
  const users = createUsers(query?.min || 0, query?.max || 50, 15)
  return { data: users }
})

server.get("/users/adults", async (req) => {
  const { query } = req
  console.log("query")
  const users = createUsers(query?.min || 0, query?.max || 50, 15)
  return { data: users }
})

server.get("/users/seniors", async (req) => {
  const { query } = req
  const users = createUsers(query?.min || 0, query?.max || 50, 15)
  return users
})

async function start() {
  try {
    await server.listen(PORT)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

start()
