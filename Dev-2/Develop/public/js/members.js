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
    });
  });

  $("#save-button").click (function(){
    $.post("/api/saveMember",{ 
      name : $("#fname").val(),
      m_initial: $("#mname").val(), 
      last_name: $("#lname").val(),
      ss_number: $("#ssn").val(),
      d_o_b: $("#dob").val(),
      spouse_first_name: $("#Sfname").val(),
      spouse_middle_initial: $("#smname").val(),
      spouse_last_name: $("#Slname").val(),
      spouse_ss_number: $("#spousessn").val(),
      spouse_d_o_b: $("#sdob").val(),
      address_one: $("#addressOne").val(),
      address_two: $("#addressTwo").val(),
      apartment_number: $("#addressThree").val(),
      city: $("#city").val(),
      state: $("#state").val(),
      zip: $("#zipCode").val(),
      foreign_country_name: $("#foreignCountryName").val(),
      foreign_province_state: $("#foreignProvinceState").val(),
      foreign_postal_code: $("#foreignPostalCode").val(),
      phone_number: $("#phone").val(),
      email: $("#email").val()
    })
    // } ).then(function(data){
    //   $.get("/api/member").then(function(data) {
    //     console.log(data)
    //   });
    // });
      });

  $("#client").change (function() {
    // console.log($(this).val())
       var id = $(this).val();
      console.log(id);
      $.get("/api/renderClient/:id").then(function(data) {
        console.log(data)

      });
  })
  

});

