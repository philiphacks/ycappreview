chrome.browserAction.onClicked.addListener(function (activeTab) {
  chrome.tabs.executeScript(null, {
    file: "js/content.js"
  }, function (result) {
    if (result == undefined) {
      result = 'ERROR: This script only works on <a href="https://apply.ycombinator.com/app/edit">https://apply.ycombinator.com/app/edit</a>!';
    } else {
      result = '<div style="margin-top: 0.3em;"><h1>Instructions</h1><ul><li><a href="http://docs.google.com/document/create?hl=en" target="_blank">CREATE NEW GOOGLE DOCUMENT TO SHARE</a> (opens new browser tab) </li><li>Select all of the text below</li><li>Copy and Paste into Google Docs (or any other collaboration software)</li><li>Available on Github: <a href="https://github.com/philipdesmedt/ycappreview" target="_blank">https://github.com/philipdesmedt/ycappreview</a> (new tab)</li></ul><hr></div>' + result;
    }
    var htmlCode = "<html style='background-color: #f6f6ef;'><head><link href='http://fonts.googleapis.com/css?family=Raleway:400,700' rel='stylesheet' type='text/css'></head><body style='font-family: Raleway, Helvetica, sans-serif; max-width: 992px; margin: 0 auto;'>" + result + "</body></html>";
    var url = "data:text/html," + encodeURIComponent(htmlCode);
    chrome.tabs.create({url: url});
  });
});
