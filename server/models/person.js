var mongoose=require('mongoose');

module.exports=mongoose.model('Person',{
  firstName:'String',
  lastName:'String'
});
