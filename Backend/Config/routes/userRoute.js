const helper = require('../helpers/userDb')

module.exports = server => {
    server.get('/users', allUsers),
        server.post('/register', register),
        server.get('/users/:id', userById),
        server.put('/users/:id', editUser)

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

userById = (req, res) => {
    const {
        id
    } = req.params;
    helper.getUsers(id).then(row => {
        !row[0] ? res.status(404).json({
            error: "User with that ID not found"
        }) : res.json(row)
    }).catch(err => {
        res.status(500).send('internal server error, Its probably a typo.. maybe yours maybe ours....')
    })
}

editUser = (req, res) => {
    const {
        id
    } = req.params;
    const user = req.body;

    helper.updateUser(id, user).then(number => {
        res.json(number)
    }).catch(err => {
        res.status(500).send({
            error: "Internal server issue with the edit of the user."
        })
    })
}