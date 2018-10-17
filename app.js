const express = require('express');
const app = express();
const port = process.env.PORT || 30001

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
   res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');

   next();
});

app.get("/",function(req,res){




  res.status(200).send([


    {"lattitude":47.372065 ,"longitude":8.569153},
    {"lattitude":47.365669 ,"longitude":8.573093},
      {"lattitude":47.360651 ,"longitude":8.597976},
        {"lattitude":47.372199 ,"longitude":8.527955},
          {"lattitude":47.373015 ,"longitude":8.508044},
            {"lattitude":47.375455 ,"longitude":8.483326},
              {"lattitude":47.381714 ,"longitude":8.568479}

])

});










app.listen(port,function(req,res){
  console.log(`Server is listening ${port}`);
})
