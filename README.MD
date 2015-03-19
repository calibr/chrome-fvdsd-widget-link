#Speed Dial [FVD] Widget communication lib

##Usage

1. Include link.js in your extension background page, for example:

```json

"background": {
  "scripts": [ "link.js" ]
}

```

This lib exposes global object `fvdSpeedDialLink`.

2. Set widget info by calling `fvdSpeedDialLink.setWidgetInfo`, for example:

```
fvdSpeedDialLink.setWidgetInfo({
  path: "/widget.html",
  widthCells: 1,
  heightCells: 1
});
```

3. If you want to update some widget info, like size, you need to call `fvdSpeedDialLink.setWidgetInfo` with new parameters.

See example for more info.