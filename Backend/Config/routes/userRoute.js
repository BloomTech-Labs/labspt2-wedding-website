const helper = require('../helpers/userDb')

module.exports = server => {
    server.get('/users', allUsers), server.post('/register', register)
}
allUsers = (req, res) => {
    helper.getUsers().then(users => {
        res.status(201).json({
            message: 'success'
        })
    })
}

register = (req, res) => {
    const creds = req.body
    //Need to add: first/last name and email required if statement
    helper
        .addUser(creds)
        .then(newUser => {
            res.status(201).json(newUser)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to add user'
            })
        })
}