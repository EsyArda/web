$(document).ready(function(){
    //If user submits the form
    $("#submitmsg").click(function(){
        var clientmsg = $("#usermsg").val();
        $.post("htbin/chatsend.py", {msg: clientmsg});
        $("#usermsg").attr("value", "");
        return false;
    });
}

    //Load the file containing the chat log
    function loadLog(){
        $.getJSON("htbin/chatget.py", function(data)) {
            var msg_data = '';
            .each(data, function(key, value)) {
                msg_data = msg_data + value.user + ' ' + value.msg;
            }
            $('#chatbox').append("TEST");
        }
    }
