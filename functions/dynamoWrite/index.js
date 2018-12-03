console.log('starting function')

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});


exports.handle = function(e, ctx, cb) {
  

  var params = {

      Item: {
          pantherID: "5704911",
          message: e.message
      },

      TableName: 'clothPicker',
      

      Key: {
          pantherID: "588210",
      }

  };

 

    docClient.put(params, function(err, data){

        if(err){
            cb(err, null);
        }else{
             cb(null, data);
        }


    });


}
