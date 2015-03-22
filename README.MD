#Speed Dial [FVD] Widget lib

##Usage

**Include `link.js` in your extension background page:**

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

Each widget has size specified in cells. Single cell has size `250x200`, one-cell widget will have that size.
But if your widget width/height in cells more than 1, real size in pixels will be calculated by this formula:

`widthPX = 250 * widthCells + (widthCells-1) * 10`

`heightPX = 200 * heightCells + (heightCells-1) * 10`

For example widget `1x2` cells will have size in pixels `250x410`:

`widthPX = 250 * 1 + 0 * 10 = 250`

`heightPX = 200 * 2 + 1 * 10 = 410`