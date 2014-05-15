System.register("greeter", [], function($__0) {
  "use strict";
  var __moduleName = "greeter";
  var greeter;
  return {
    exports: {
      get greeter() {
        return greeter;
      },
      set greeter(value) {
        greeter = value;
      }
    },
    execute: function() {
      greeter = (function() {
        var greeter = function greeter() {};
        return ($traceurRuntime.createClass)(greeter, {sayHi: function() {
            console.log('hi');
          }}, {});
      }());
    }
  };
});
System.register("app", ["./greeter"], function($__2) {
  "use strict";
  var __moduleName = "app";
  var greeter;
  function say() {
    $__2[0]["greeter"].sayHi();
  }
  return {
    exports: {},
    execute: function() {
      ;
      $__2[0]["greeter"] = new $__2[0]["greeter"]();
      ;
      say($__2[0]["greeter"]);
    }
  };
});
