var bnbhostapi = require('../bnbhostapi');

bnbhostapi.getUser('32703781')
.then(function(user){
  console.log(user);
}).catch(function(err){
  console.log('error', error);
});
