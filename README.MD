#Speed Dial [FVD] Widget lib

##Usage

**Include `link.js` in your extension background page:**

File `manifest.json`:

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

##Widget size options

Each widget can be located in one or two cells height. Single cell size has `250x200`. Widget with the size of one cell has equal size of the cell. Widget can take up to `2` cells height and `4` cells width. Here are some example of widgets you can make and size calculation:

Width x Height

`widthPX = 250 * widthCells + (widthCells-1) * 10`

`heightPX = 200 * heightCells + (heightCells-1) * 10`

`1x1` - single cell widget(`250x200`)

`1x2`:

`widthPX = 250 * 1 + 0 * 10 = 250`

`heightPX = 200 * 2 + 1 * 10 = 410`

`4x2`:

`widthPX = 250 * 4 + 3 * 10 = 1030`

`heightPX = 200 * 2 + 1 * 10 = 410`

`3x1`:

`widthPX = 250 * 3 + 2 * 10 = 770`

`heightPX = 200 * 1 + 0 * 10 = 200`

##Backward Compatibility

This lib is compatible with old Speed Dial[FVD] widget system, it automatically calculate and set old `width` and `height` parameters if you don't set them explicitly.

[View Widget Example](https://github.com/calibr/chrome-fvdsd-widget-link/tree/master/widget-example)
