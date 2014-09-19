
var values = [];

values.push("Company Name: " + $("#app_questions_name").val());
values.push("Company URL: " + $("#app_questions_url").val());
values.push($('label[for="app_questions_demo"]').text() + " " + $("#app_questions_demo").val());
values.push($('label[for="app_questions_make"]').text() + " " + $("#app_questions_make").val());
values.push($('label[for="app_questions_rfs2"]').text() + " " + $("#app_questions_rfs2").val());
values.push($('label[for="app_questions_demo"]').text() + " " + $("#app_questions_demo").val());
values.push($('label[for="app_questions_demo"]').text() + " " + $("#app_questions_demo").val());

values.join('<br/>');
