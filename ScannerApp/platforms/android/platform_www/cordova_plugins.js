cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "org.apache.cordova.dialogs.notification",
    "file": "plugins/org.apache.cordova.dialogs/www/notification.js",
    "pluginId": "org.apache.cordova.dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "org.apache.cordova.dialogs.notification_android",
    "file": "plugins/org.apache.cordova.dialogs/www/android/notification.js",
    "pluginId": "org.apache.cordova.dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "org.apache.cordova.inappbrowser.inappbrowser",
    "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
    "pluginId": "org.apache.cordova.inappbrowser",
    "clobbers": [
      "window.open"
    ]
  },
  {
    "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
    "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
    "pluginId": "phonegap-plugin-barcodescanner",
    "clobbers": [
      "cordova.plugins.barcodeScanner"
    ]
  },
  {
    "id": "cordova-plugin-camera.Camera",
    "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "Camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverOptions",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverOptions"
    ]
  },
  {
    "id": "cordova-plugin-camera.camera",
    "file": "plugins/cordova-plugin-camera/www/Camera.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "navigator.camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverHandle",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverHandle"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "org.apache.cordova.dialogs": "0.3.0",
  "org.apache.cordova.inappbrowser": "0.6.0",
  "phonegap-plugin-barcodescanner": "7.0.3",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-camera": "4.0.2"
};
// BOTTOM OF METADATA
});