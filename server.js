import express from "express"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const port = Number(process.env.PORT) || 3000
const distDirectory = join(__dirname, "dist")

app.use(express.static(distDirectory))
app.get("/{*splat}", (_request, response) => {
  response.sendFile(join(distDirectory, "index.html"))
})

app.listen(port, "0.0.0.0", () => {
  console.log(`Production server listening on port ${port}`)
})
