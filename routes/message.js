var models = require('../models');

exports.send = function(req, res) {
    // your solution here
    var newMessage = new models({
         email: req.body.email,
         content: req.body.content,
         created: req.body.created
    });
    console.log('newMessage', newMessage);
    newMessage.save();
    console.log('newMessage', newMessage);
    newMessage.save(function(err){
        console.log('test');
        if(err) {
            console.log('Error:', err);
            res.send(err);
        }
        else{
            res.redirect('/');
        }
        console.log('created');
    });
};