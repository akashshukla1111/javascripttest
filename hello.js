var settings = {
    "url": "http://ndof-trip-execution.p1302947079.scus-dev-a2.cluster.k8s.us.walmart.net/heartbeat",
    "method": "GET",
    "timeout": 0,
    "headers": {
        "Content-Type": "application/json"
    },
};

$(document).ready(function(){
    $("button").click(function(){
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    });
});

