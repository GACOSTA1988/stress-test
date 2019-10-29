$(document).ready(function() {
  $("#stress-test").submit(function(event){
    event.preventDefault();

    // $("#recommendations2").show();
    // $("#recommendations3").show();

    var warnings =[];
    var symptoms = [];
    var copings = [];


    $("input:checkbox[name=warning-signs]:checked").each(function(){
      var warningResults = $(this).val();
      warnings.push(warningResults);
    });
    console.log(warnings.length);

    $("input:checkbox[name=symptoms]:checked").each(function(){
      var symptomsResults = $(this).val();
      symptoms.push(symptomsResults);
    });

    $("input:checkbox[name=coping-methods]:checked").each(function(){
      var copingResults = $(this).val();
      copings.push(copingResults);
    });

    if (warnings.length >= 3 && symptoms.length >= 3){
        $("#recommendations1").show()
    } else if (warnings.length >= 4 && copings.length >= 3) {
        $("#recommendations2").show()
      } else if (warnings.length <= 4 && warnings.length > 0 && symptoms.length <= 3 && symptoms.length > 0) {
        $("#recommendations3").show();
      } else {
        alert("Fill out the form a bit better")
      };






    $("#stress-test").hide();
  });
});
