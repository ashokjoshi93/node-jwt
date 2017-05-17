
var Person=require('../models/person.js');

module.exports.getData=function(req,res){
  Person.find({},function(err,people){
    if(err){
      return res.status(500).send("No data found");
    }
    res.json({data:people});
  });
}

module.exports.postData=function(req,res){
  var person=new Person(req.body);
  person.save(function(err){
    if(err){
      return  res.status(500).send("Could not add the user");
    }
    res.status(200).send("User added successfully");
  });
}
