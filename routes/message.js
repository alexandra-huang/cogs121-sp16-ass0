var models = require('../models');

exports.send = function(req, res) {
    console.log(req.body); // help you see what is inside of req.body
    // your solution here
    console.log(models.Message); 
    var newMessage = models.Message({
         email: req.body.email,
         content: req.body.content,
         created: new Date()
    });
    console.log('newMessage', newMessage);

    newMessage.save(afterSaving);

    function afterSaving(err){
        if(err) {
            console.log(err); 
            res.send(500);
        }
        res.redirect('/');
    }
};