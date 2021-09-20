import express from "express"
import multer from "multer"
import cors from "cors"

const app = express()
const upload = multer({ dest: "uploads/" })
const port = 3000

app.use(cors())

app.post("/upload", upload.single("uploadedFile"), (req, res, next) => {
  let filedata = req.file
  if (!filedata) {
    res.sendStatus(422)
  } else {
    res.sendStatus(201)
  }
})

app.listen(port, () => console.log(`Running on port ${port}`))
