$(document).ready(function(){
    $("#letter").submit(function(event){
        const houseInput = $("#house").val();
        const localInput = $("#local").val ();
        const stateInput  = $("#State") .val();
        const countryInput = $("#Country").val();
        const dateInput    = $("#date").val();


        $(".house").text(houseInput);
        $(".local").text(localInput);
        $(".state").text(stateInput);
        $(".country").text(countryInput);
        $(".date").text(dateInput);


        $("#official").show();
       
        

  });
});