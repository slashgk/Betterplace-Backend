const {Channel} = require('./../server/models/channel')


Channel.findOne({
    grade: 'A++'
}).then((channel) => {
    console.log('Channel:', channel);
}).catch((e) => {
    console.log('Error:',e);
})