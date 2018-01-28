module.exports = {
    getusercharacter: (req, res) => {
        const db = req.app.get('db')

        // var {id} = req.user

        db.get_user_character(1).then(result => res.send(result))
    },

    getallcharacter: (req, res) => {
        const db = req.app.get('db')

        // var {id} = req.user

        db.get_all_characters(1).then(result => res.send(result))
    }
}