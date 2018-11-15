$(document).ready(function(){

  $(".btn").click(function(){
    var city = $("input[name=city]").val();

    if(city != ""){
      
      $.ajax({
        url: "https://api.openweathermap.org/data/2.5/find?",
        type: "GET",
        dataType: "JSON",
        data:{
        q:city,
        units: "imperial",
        appid: "5bb22714a08c3c5316ba025775e800a7"
        },

        success: function(data) {
          console.log(data);
          console.log(data.list[0].main.temp);
          $("h1").html("The temp is:" + data.list[0].main.temp);
          //based on below/over freezing point of water
          var temp = data.list[0].main.temp;
            if(temp < "32"){
              $("h1").css("color", "blue")
            } 
            else if (temp > "32"){ 
            $("div").css("color", "red");
            }
        },
        error: function(data, textStatus, errorThrown) {
          console.log("Error");
          console.log(errorThrown);
        }
      });

    };
  });

});