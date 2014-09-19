var values = [];

var labels = $("label");
for (var i =0; i < labels.length; i++) { 
  var the_label = $(labels[i]); 
  var the_input = $("#" + $(labels[i]).attr("for"));
  var input_type = the_input.get(0);

  var label_txt = the_label.text();
  if (input_type !== undefined) {
    input_type = input_type.tagName;

    if (input_type == "SELECT") {
      var input_val = $("#" + $(labels[i]).attr("for") + " option:selected").text();
    } else {
      var input_val = the_input.val();
    }

    values.push("<strong>" + label_txt + "</strong><p>" + input_val + "</p>");
  }
}

values.join('<br/>');
