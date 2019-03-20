const helper = require('../helpers/questionsDB')

module.exports = server =>{

}

getAllQuestions = (req, res)=>{
    helper.allQuestions().then(questions =>{
        res.json(questions)
    }).catch(err=>{
        res.status(500).send({error:err})
    })
}

questionsById = (req, res) =>{
    const { id } = req.params;
    helper.questionsById(id).then(questions =>{
        res.json(questions)
    }).catch(err=>{
        res.status(500).send({error:err})
    })
}

addNewQuestion = (req, res)=>{
    const newQ = req.body
    helper.addQuestion(newQ).then(id =>{
        res.status(201).json({message: "Question Added"})
    }).catch(err=>{
        res.status(500).send({error:err})
    })
}

editQuestion = (res, req) =>{
    const question = req.body
    const { id } = req.params
    // need to check for ID and return 404 if false
    helper.updateQuestion(id, question).then(number=>{
        res.status(202).json({message: "Question Updated"})
    }).catch(err=>{
        res.status(500).send({error:err})
    })
}

removeQuestion = (req, body) =>{
    const { id } = req.params
    helper.deleteQuestion(id).then(number=>{
        number ? res.status(404).json({
            message: 'Question Not Found'
          }) : res.json({
            message: "Its gone!"
          })
        }).catch(err => {
          res.status(500).send({
            error: err
          })
    })
}
