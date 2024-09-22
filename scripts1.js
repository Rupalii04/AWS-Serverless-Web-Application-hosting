//add your api here below
var API_ENDPOINT = "https://mfujm56kml.execute-api.ap-south-1.amazonaws.com/prod/"
//AJAX GET REQUEST
document.getElementById("saveprofile").onclick = function(){
  var inputData = {
    "stuId":$('#stuid').val(),
        "stuFirstName":$('#fname').val(),
        "stuLastName":$('#lname').val(),
    "stuAge":$('#empage').val()           
      };
  $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data:  JSON.stringify(inputData)  ,
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
          document.getElementById("profileSaved").innerHTML = "Profile Saved!";
        },
        error: function () {
            alert("error");
        }
    });
}
//AJAX GET REQUEST
document.getElementById("getprofile").onclick = function(){  
  $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
         contentType: 'application/json; charset=utf-8',
        success: function (response) {
          $('#studentProfile tr').slice(1).remove();
          jQuery.each(response, function(i,data) {          
            $("#studentProfile").append("<tr> \
                <td>" + data['stuid'] + "</td> \
                <td>" + data['stuFirstName'] + "</td> \
                <td>" + data['stuLastName'] + "</td> \
                <td>" + data['stuAge'] + "</td> \
                </tr>");
          });
        },
        error: function () {
            alert("error");
        }
    });
}