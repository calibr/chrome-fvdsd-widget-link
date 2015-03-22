document.addEventListener("DOMContentLoaded", function() {
  var widthEl = document.querySelector("#width");
  var heightEl = document.querySelector("#height");
  var saveButton = document.querySelector("#save");
  widthEl.value = localStorage["widget_width"] || 1;
  heightEl.value = localStorage["widget_height"] || 1;

  saveButton.addEventListener("click", function() {
    localStorage["widget_width"] = widthEl.value;
    localStorage["widget_height"] = heightEl.value;
    chrome.runtime.sendMessage({
      a: "set_widget_info"
    });
    alert("Saved!");
  }, false);
});