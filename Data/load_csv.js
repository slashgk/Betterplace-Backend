var csv = require("fast-csv");
const path = require('path');
var {Channel} = require(path.join(__dirname, '../server/models/channel'));
var {mongoose} = require(path.join(__dirname, '../server/db/mongoose'));

csv
 .fromPath(__dirname+"/channels_yt1e0298c.csv")
 .on("data", function(data){
     console.log(data[5]);
     var obj = {
         rank: data[0],
         grade: data[1],
         channel_name: data[2],
         video_uploads:  parseInt(data[3], 10)|null,
         subscribers: parseInt(data[4], 10)|null,
         video_views: data[5]
     };

     var channel = new Channel(obj);
     // console.log(channel);
     channel.save().then((doc) => {
         // console.log('Done');
    }, (e) => {
        console.log(e);
    }); 
 })
 .on("end", function(){
     console.log("done");
 });

