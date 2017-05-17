var jwt=require('jsonwebtoken');

module.exports.authenticate=function(req,res){

  var user={
    username:'test',
    email:'test@test.com'
  }
  var token=jwt.sign(user,process.env.SECRET_KEY,{
    expiresIn:5000
  });
  res.json({
    success:true,
    token:token
  })
}
