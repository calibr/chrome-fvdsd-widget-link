function setWidgetInfo() {
  fvdSpeedDialLink.setWidgetInfo({
    path: "/widget.html",
    widthCells: localStorage["widget_width"] || 1,
    heightCells: localStorage["widget_height"] || 1
  });
}

setWidgetInfo();

chrome.runtime.onMessage.addListener(function(msg) {
  if(msg.a == "set_widget_info") {
    setWidgetInfo();
  }
});