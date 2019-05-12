require('dotenv').config()
const multer = require('multer')
const multerS3 = require('multer-s3')
const aws = require('aws-sdk')

aws.config.update({
  secretAccessKey:
    process.env.AWS_ACCESS_KEY || 'add the AWS access key to your .env file.',
  accessKeyId:
    process.env.AWS_KEY_ID || 'add the AWS key id to your .env file.',
  region: 'us-east-2'
})

const s3 = new aws.S3()

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'joinourbigday',
    limits: {
      filesize: 50,
    },
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'bucket-owner-full-control',
    metadata: (req, file, cb) => {
      const { id } = req.params
      //using id to be able to grab all images for a specific user page by custom field-name.
      console.log(file)
      cb(null, {
        fieldName: `user${id}`
      })
    },
    key: (req, file, cb) => {
      const user_id = req.params.id
      cb(null, (user_id + '_' + Date.now()).toString())
    },
  }),
})
module.exports = upload

// checkFileType = (file, cb) => {
//     //allowed extensions
//     const filetypes = /jpeg|jpg|png|gif|mp4|mov|m4v/;
//     const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//         const mimetype = filetypes.test(file.mimetype);
//     if (mimetype && extname) {
//         return cb(null, true);
//     } else {
//         cb('Error: images only!')
//     }
// }