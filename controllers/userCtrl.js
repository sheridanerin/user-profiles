var users = [
    {
        name: 'Preston McNeil',
        password: 'password1',
        friends: ['Lindsey Mayer', 'Erin']
    },
    {
        name: 'Ryan Rasmussen',
        password: '$akgfl#',
        friends: ['Lindsey Mayer']
    },
    {
        name: 'Erin',
        password: 'pass',
        friends: ['Lindsey Mayer', 'Preston McNeil']
    },
    {
        name: 'Lindsey Mayer',
        password: '777mittens777',
        friends: ['Preston McNeil', 'Ryan Rasmussen', 'Erin']
    }
];

module.exports = {
	// login: function(req, res, next) {
	// 	users.forEach(function(user) {
	// 		if (req.body.name === user.userName && req.body.password === user.password) {
	// 			req.session.currentUser === user;
	// 			res.send({ userFound: true});
	// 		}
	// 		res.status(200).send({ userFound: false});
	// 	})
	// }
	login: function( req, res ) {
	        var userFound = false;
	        users.forEach(function( user ) {
	            if (user.userName === req.body.name && user.password === req.body.password) {
	                req.session.currentUser = user;
	                userFound = true
	            }
	        });
	        if (userFound) {
	            res.send({ userFound: true });
	        } else {
	            res.send({ userFound: false });
	        }
	    }

};