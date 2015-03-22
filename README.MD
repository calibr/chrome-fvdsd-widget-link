#Speed Dial [FVD] Widget communication lib

##Usage

**Include link.js in your extension background page:**

```json

"background": {
  "scripts": [ "link.js", "bg.js" ]
}

```

This lib exposes global object `fvdSpeedDialLink`.

**Set widget info**

File `bg.js`:

```javascript
fvdSpeedDialLink.setWidgetInfo({
  path: "/widget.html",
  widthCells: 1,
  heightCells: 1
});
```

*If you want to update some widget info, like size, you need to call `fvdSpeedDialLink.setWidgetInfo` with new parameters.*

See example for more info.

##Widget sizing model

Each widget have size specified in cells. Single cell have size `250x200`, one-cell widget will have that size.
But if your widget width/height in cells more than 1, real size in pixels will be calculated by this formula:

`widthPX = 250 * widthCells + (widthCells-1) * 10`
`heightPX = 250 * heightCells + (heightCells-1) * 10`