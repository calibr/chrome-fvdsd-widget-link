#Speed Dial [FVD] Widget communication lib

##Usage

###Include link.js in your extension background page:

```json

"background": {
  "scripts": [ "link.js" ]
}

```

This lib exposes global object `fvdSpeedDialLink`.

###Set widget info by calling `fvdSpeedDialLink.setWidgetInfo`:

```javascript
fvdSpeedDialLink.setWidgetInfo({
  path: "/widget.html",
  widthCells: 1,
  heightCells: 1
});
```

###If you want to update some widget info, like size, you need to call `fvdSpeedDialLink.setWidgetInfo` with new parameters.

See example for more info.