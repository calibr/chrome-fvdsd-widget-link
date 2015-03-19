(function() {
  var fvdSpeedDialInfo = {
    name: "Speed Dial [FVD] - New Tab Page, 3D, Sync...",
    id: "llaficoajjainaijghjlofdfmbjpebpa"
  };

  var fvdSpeedDialLink = {
    _fvdsdId: null,
    _info: null,
    /**
     * @param {Object} [info] - is optional if already called with info
     * @param {String} info.path - local path to widget html file("/widget.html")
     * @param {Number} info.widthCells - width of widget in cells
     * @param {Number} info.heightCells - height of widget in cells
     */
    setWidgetInfo: function(info) {
      if(info) {
        this._info = info;
      }
      if(!this._info) {
        throw new Error("Info is required for first call");
      }
      this._sendInfo();
    },
    _getId: function(cb) {
      var self = this;
      if(self._fvdsdId) {
        cb(self._fvdsdId);
        return;
      }
      // search for speed dial
      chrome.management.getAll(function(addons) {
        var found = false;
        addons.forEach( function( addon ) {
          if( fvdSpeedDialInfo.id == addon.id || fvdSpeedDialInfo.name == addon.name ){
            found = true;
            self._fvdsdId = addon.id;
            cb(addon.id);
          }
        });
        if(!found) {
          cb(null);
        }
      });
    },
    _sendInfo: function() {
      var info = {
        apiv: 2,
      };
      for(var k in this._info) {
        info[k] = this._info[k];
      }
      this._getId(function(id) {
        if(!id) {
          return;
        }
        chrome.extension.sendMessage(
          id, {
          action: "fvdSpeedDial:Widgets:Widget:setWidgetInfo",
          body: info
        });
      });
    }
  };

  chrome.extension.onMessageExternal.addListener(function(request, sender, sendResponse) {
    if (request && request.action == "fvdSpeedDial:Widgets:Server:isWidget") {
      fvdSpeedDialLink.setWidgetInfo();
    }
  });

  window.fvdSpeedDialLink = fvdSpeedDialLink;
})();