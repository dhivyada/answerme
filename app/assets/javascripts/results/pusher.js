Pusher.log = function(message) {
    if (window.console && window.console.log) {
        window.console.log(message);
    }
};

var pusher = new Pusher('10d324bbff6815ea189a');
var channel = pusher.subscribe('answerme');
channel.bind('refresh_with_data', function(data) {
    alert(data.message);
});