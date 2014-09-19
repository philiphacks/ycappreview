//The code that is fired upon page load
//to check your plugin js is working uncomment the next line.

console.log('loaded!');
chrome.browserAction.onClicked.addListener(function (activeTab) {
  console.log('CLICKED!!');
  chrome.tabs.executeScript(null, { file: "content.js" });
});
