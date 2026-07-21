require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") })
const { neon } = require("@neondatabase/serverless")
const fs = require("fs")
const path = require("path")

async function runMigrations() {
  const sql = neon(process.env.DATABASE_URL)

  const schemaPath = path.join(__dirname, "001_schema.sql")
  const schema = fs.readFileSync(schemaPath, "utf-8")

  console.log("Running schema migration...")
  await sql(schema)
  console.log("Schema migration complete!")
}

runMigrations().catch((err) => {
  console.error("Migration failed:", err)
  process.exit(1)
})
