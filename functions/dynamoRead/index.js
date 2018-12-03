console.log('starting function')

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});


exports.handle = function(e, ctx, cb) {
  

  var params = {

      TableName: 'clothPicker',
      

      Key: {
          pantherID: "588210",
      }

  };

 

    docClient.get(params, function(err, data){

        if(err){
            cb(err, null);
        }else{
             cb(null, data);
        }


    });


}
