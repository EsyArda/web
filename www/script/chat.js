$(document).ready(function(){
    //If user submits the form
    $("#submitmsg").click(function(){
        var clientmsg = $("#usermsg").val();
        $.post("htbin/chatsend.py", {msg: clientmsg});
        $("#usermsg").attr("value", "");
        loadLog();
        return false;
    });
});

//Load the file containing the chat log
function loadLog() {
    $.getJSON("htbin/chatget.py", function(data) {
        console.log("Coucou");
        var msg_data = '';
        $.each(data, function(key, value) {
            msg_data = msg_data + '(' + value.date + ' ' + value.time + ')' + value.user + ' ' + value.msg + '<br>';
        });
        $('#chatbox').append(msg_data);
    });
}
// setInterval(loadLog, 10000);
