// var models = require('../models');

// exports.view = function(req, res) {
//     //var data = {data: [req.body.email, req.body.content, req.body.created]};
//     var data = {data: []};
//     models.Message
//         .find()
//         .exec(function displayMessage(err, res) {
//             if(err) {
//                 console.log(err);
//                 res.send(500);
//             }
//         });

//     res.render('index', data);
// }

// var models = require('../models');

// exports.view = function(req, res) {
//     var data = {data: [req.body.email, req.body.content, req.body.created]};
//     var findParams = req.query;
//     var myQuery = models.find();

//     myQuery.exec(function(err,recs){
//         if (err) {
//             console.log('Error in view ' + err);
//             res.send({success: false, messages: []});
//         } else {
//             console.log('Found ' + recs.length + ' message');
//             res.send({success: true, messages: recs});
//         }
//     });
//     res.render('index', data);
// }
    
// var models = require('../models');

// exports.view = function(req, res){
//     var data = models.find({}, function(err,res){
//         if (err) {
//             console.log('Error in view ' + err);
//             res.send({success: false}); 
//         } else{
//             res.send({success: true, Message: rec});
//         }
//     });
//     res.render('index', data);
// }

// var models = require('../models');

// exports.view = function(req, res) {
//     var data = {data: [req.body.email, req.body.content, req.body.created]};
//     models.Message
//         .find()
//         .exec(function displayMessage(err, res) {
//             if(err) {
//                 console.log(err);
//                 res.send(500);
//             }
//             console.log(res.render('index', data));
//         });
//     }

// var models = require('../models');

// exports.view = function(req, res) {
//     //var data = {data: [req.body.email, req.body.content, req.body.created]};
//     var data = {Data:["Test"]}

//     function displayMessage(err, res) {
//             if(err) {
//                 console.log(err);
//                 res.send(500);
//             }
//         };

//     res.render('index', data);
// }

var models = require('../models');

exports.view = function(req, res) {
    var data = {data: []};
    var findParams = req.query;

    var mQuery = models.Message.find();

    mQuery.exec(function(err, recs){
    if (err) {
      console.log("Error in find " + err);
      res.send({success: false, data});
      } 
    else {
    data = {data: recs}
    res.render("index", data);
    }});
};
