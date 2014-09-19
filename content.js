var values = [];

var labels = $("label")
for (var i =0; i < labels.length; i++) { 
  var the_label = $(labels[i]); 
  var the_input = $("#" + $(labels[i]).attr("for"));
  var input_type = the_input.get(0);

  var label_txt = the_label.text();
  if (input_type !== undefined) {
    input_type = input_type.tagName;
    //console.log(input_type);
    if (input_type == "SELECT") {
      var input_val = $("#" + $(labels[i]).attr("for") + " option:selected").text();
    } else {
      var input_val = the_input.val();
    }

    console.log(label_txt + ": " + input_val);
  }
}


// values.push("Company Name: " + $("#app_questions_name").val());
// values.push("Company URL: " + $("#app_questions_url").val());
// values.push($('label[for="app_questions_demo"]').text() + " " + $("#app_questions_demo").val());
// values.push($('label[for="app_questions_make"]').text() + " " + $("#app_questions_make").val());
// values.push($('label[for="app_questions_rfs2"]').text() + " " + $("#app_questions_rfs2").val());
// values.push($('label[for="app_questions_demo"]').text() + " " + $("#app_questions_demo").val());
//values.push($('label[for="app_questions_demo"]').text() + " " + $("#app_questions_demo").val());

values.join('<br/>');
