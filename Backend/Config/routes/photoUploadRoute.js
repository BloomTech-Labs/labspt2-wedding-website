const db = require('../dbConfig');
const upload = require('../Photobucket/file-uploader');
const singleUpload = upload.single('image')

module.exports = server => {
    server.post('/users/:id/upload', addImage)
    server.get('/:id/live-photos', GetLivePhotos)
}

addImage = (req, res) => {
    const userId= req.params.id;
    singleUpload(req, res, err =>{
        if(err){
            res.status(422).send({
                errors:[{
                    title: 'Image Upload Error',
                    detail: err.message
                }]
            })
        }
        const image = req.file.location;
        console.log(image)
        const newImage={
            imgUrl: image,
            name: 'test',
            user_id: userId
        }
        db('livePhoto').insert(newImage).then(id=>{
            res.status(201).send(newImage)
        }).catch(err=>{
            res.status(500).send({error: err})
        })
    })
}

GetLivePhotos = (req, res)=>{
    const { id }=req.params
    db('livePhoto').select(id, 'user_id').then(tbl=>
        res.json(tbl)).catch(err=>{
            res.status(500).send(err)
        })
}