const request = require('postman-request');
request('http://api.weatherstack.com/current?access_key=b3eec7bb3813b1f5357db5da929c9101&query=19.833,-103.2345',(error,response,body)=>{
    let cuerpo=JSON.parse(body);
    if(cuerpo.success==false){
        console.log(cuerpo.error);
    }else{
        const request2= require('postman-request');
        request2('http://api.airvisual.com/v2/nearest_city?key=8ceab8e0-97c0-4127-b5bb-1ddb706a3f19',(error2,response2,body2)=>{
            let cuerpo2=JSON.parse(body2);
            if(cuerpo2.status=="fail"){
                console.log(cuerpo2.data);
            }else{
                console.log('{\n',cuerpo.location,',\n',cuerpo2.data.current.pollution,'\n}');
            }
        });
    }
});