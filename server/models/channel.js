var mongoose = require('mongoose');

var Channel = mongoose.model('channels', {
    rank: {
        type: String,
        required: true,
        minlength: 1,
    },
    grade: {
        type: String,
        required: true
    },
    channel_name: {
        type: String,
        required: true
    },
    video_uploads: {
        type: Number
    },
    subscribers: {
        type: Number
    },
    video_views: {
        type: String
    }
});

module.exports = {Channel};
