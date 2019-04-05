const db = require('../dbConfig')
const upload = require('../photoBucket/file-uploader')
const singleUpload = upload.single('image')

module.exports = server => {
  server.post('/users/:id/upload', addImage)
  server.get('/users/:id/live-photos', GetLivePhotos)
}

addImage = (req, res) => {
  const userId = req.params.id
  singleUpload(req, res, err => {
    const { name, caption } = req.body
    if (err) {
      res.status(422).send({
        errors: [
          {
            title: 'Image Upload Error',
            detail: err.message,
          },
        ],
      })
    }
    const image = req.file.location
    console.log(image)
    const newImage = {
      imgUrl: image,
      name,
      user_id: userId,
      caption,
    }
    db('livePhotos')
      .insert(newImage)
      .then(id => {
        res.status(201).send(newImage)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send({
          error: err,
        })
      })
  })
}

GetLivePhotos = (req, res) => {
  const { id } = req.params
  console.log(id)
  db('livePhotos')
    .where('user_id', id)
    .then(tbl => res.json(tbl))
    .catch(err => {
      res.status(500).send(err)
    })
}
