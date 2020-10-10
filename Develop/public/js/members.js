$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });
  $("#create-client").click (function(){
    let clientName = $(".client-name").val()
    $.post("/api/member",{ name : clientName} ).then(function(data){
      $.get("/api/member").then(function(data) {
        console.log(data)
        let dropDownData = $("#client")
        $.each(data.data, function() {
          dropDownData.append($("<option />").val(this.id).text(this.name));
      });
      });
    })
    
  })
});

