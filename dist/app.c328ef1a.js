// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Widget.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Widget = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Widget =
/*#__PURE__*/
function () {
  function Widget(_ref) {
    var _ref$position = _ref.position,
        position = _ref$position === void 0 ? 'bottom-right' : _ref$position;

    _classCallCheck(this, Widget);

    this.position = this.getPosition(position);
    this.open = false;
    this.initialise();
    this.createStyles();
    this.products = [];
    this.GiftIcon = "https://gregarious-cupcake-fa0626.netlify.app" + '/assets/gift.svg';
    this.StarIcon = "https://gregarious-cupcake-fa0626.netlify.app" + '/assets/star.svg';
  }

  _createClass(Widget, [{
    key: "getPosition",
    value: function getPosition(position) {
      var _ref2;

      var _position$split = position.split('-'),
          _position$split2 = _slicedToArray(_position$split, 2),
          vertical = _position$split2[0],
          horizontal = _position$split2[1];

      return _ref2 = {}, _defineProperty(_ref2, vertical, '30px'), _defineProperty(_ref2, horizontal, '30px'), _ref2;
    }
  }, {
    key: "initialise",
    value: function initialise() {
      var _this = this;

      console.log('window ', document.currentScript);
      console.log('script Url ', document.currentScript.getAttribute('brand'));
      setTimeout(function () {
        var container = document.createElement('div');
        container.style.position = 'fixed';
        Object.keys(_this.position).forEach(function (key) {
          return container.style[key] = _this.position[key];
        });
        console.log('document ', document.body);
        document.body.appendChild(container);
        var buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        buttonContainer.setAttribute("id", "widgetButton");
        var chatIcon = document.createElement('img');
        chatIcon.src = 'https://gregarious-cupcake-fa0626.netlify.app/assets/chat.svg';
        chatIcon.classList.add('icon');
        _this.chatIcon = chatIcon;
        var closeIcon = document.createElement('img');
        closeIcon.src = 'https://gregarious-cupcake-fa0626.netlify.app/assets/cross.svg';
        closeIcon.classList.add('icon', 'hidden');
        _this.closeIcon = closeIcon;
        buttonContainer.appendChild(_this.chatIcon);
        buttonContainer.appendChild(_this.closeIcon);
        buttonContainer.addEventListener('click', _this.toggleOpen.bind(_this));
        _this.messageContainer = document.createElement('div');

        _this.messageContainer.classList.add('hidden', 'message-container');

        fetch('https://sheetdb.io/api/v1/m95hi9ve95rqt').then(function (response) {
          return response.json();
        }).then(function (data) {
          var url = window.location.href;
          console.log(url, data);
          data.map(function (element, idx) {
            if (element.product_url === url) {
              document.getElementById("water").innerText = element.co2_ref_water;
              document.getElementById("car").innerText = element.co2_ref_car;
              document.getElementById("charge").innerText = element.co2_ref_smartphones;
              document.getElementById("tree").innerText = element.climate_action_trees;
            }
          });
        });

        _this.createMessageContainerContent();

        container.appendChild(_this.messageContainer);
        container.appendChild(buttonContainer);
      }, 500);
    }
  }, {
    key: "createMessageContainerContent",
    value: function createMessageContainerContent() {
      this.messageContainer.innerHTML = '';
      var main = document.createElement('div');
      main.innerHTML = this.createWidget();
      this.messageContainer.appendChild(main);
    }
  }, {
    key: "createStyles",
    value: function createStyles() {
      var styleTag = document.createElement('style');
      styleTag.innerHTML = "\n            .icon {\n                cursor       : pointer;\n                width        : 32px;\n                height       : 32px;\n                position     : absolute;\n                top          : 50%;\n                left         : 50%;\n                transform    : translate(-50%,-50%);\n                border-radius: 50%;\n                transition   : transform .3s ease;\n            }\n            .hidden {\n                transform: scale(0);\n            }\n            .button-container {\n                background-color: #2960EC;\n                width           : 48px;\n                height          : 48px;\n                position        : relative;\n                border-radius   : 50%;\n            }\n            .message-container {\n                border       : 2px solid #CFD5BE;\n                border-radius: 36px;\n                right        : 32px;\n                bottom       : 60px;\n                position     : absolute;\n                max-height   : 300px;\n                max-width    : 600px;\n                overflow-y   : auto;\n                transition   : max-height .2s ease;\n                font-family: 'Inter', sans-serif;\n            }\n\n            .message-container {\n                -ms-overflow-style: none;  /* Internet Explorer 10+ */\n                scrollbar-width: none;  /* Firefox */\n            }\n            .message-container::-webkit-scrollbar { \n                display: none;  /* Safari and Chrome */\n            }\n\n            .message-container.hidden {\n                max-height: 0px;\n            }\n            \n            .rowCircle{\n                margin-top: 8px;\n                width : 100%;\n                display: flex;\n                flex-direction : row;\n                justify-content: space-evenly;\n            }\n\n            .circle {\n                background: #CFD5BE;\n                border-radius: 50%;\n                width: 75px;\n                height: 75px;\n            }\n\n            .rowCircle .col-md-4{\n                text-align: -webkit-center;\n            }\n\n            .circle .glass{\n                padding: 16px 18px;\n                box-sizing: inherit;\n            }\n\n            \n            .circle .car{\n                padding: 27px 12px;\n                box-sizing: inherit;\n            }\n\n            \n            .circle .mobile{\n                padding: 14px 24px;\n                box-sizing: inherit;\n            }\n\n\n            .mainHead{\n                font-family: 'Roboto';\n                font-style: normal;\n                font-weight: 500;\n                font-size: 20px;\n                line-height: 23px;\n                text-align: center;\n                color: #000000;\n                margin-top: 14px;\n            }\n\n            .subHead {\n                font-family: 'Roboto';\n                font-style: normal;\n                font-weight: 700;\n                font-size: 16px;\n                line-height: 19px;\n                text-align: center;\n                color: #000000;\n                margin-top: 5px;\n            }\n\n            .text{\n                font-family: 'Roboto';\n                font-style: normal;\n                font-weight: 400;\n                font-size: 15.8834px;\n                line-height: 19px;\n                text-align: center;\n            }\n\n            .caption{\n                font-family: 'Roboto';\n                font-style: normal;\n                font-weight: 400;\n                font-size: 13px;\n                line-height: 14px;\n                text-align: center;\n                color: #000000;\n                margin-top: 12px;\n            }\n            \n            .tree{\n                display: flex;\n                padding: 8px 0px;\n                margin-left: 25%;\n                margin-top: 12px;\n                flex-direction : row;\n                justify-content: space-evenly;               \n                width: 50%;\n                background: rgba(237, 234, 211, 0.54);\n                border-radius: 8px;\n            }\n          \n\n            .treeHead {\n                font-family: 'Roboto';\n                font-style: normal;\n                font-weight: 400;\n                font-size: 13.6676px;\n                line-height: 16px;\n                text-align: right;\n                color: #333333; \n            }\n\n            .bold {\n                font-weight: 700;\n            }\n\n            .colTree {\n                text-align: center;\n                text-align-last: center;\n            }\n            \n\n\n        ".replace(/^\s+|\n/gm, '');
      document.head.appendChild(styleTag);
    }
  }, {
    key: "toggleOpen",
    value: function toggleOpen() {
      this.open = !this.open;

      if (this.open) {
        fetch('https://sheetdb.io/api/v1/m95hi9ve95rqt').then(function (response) {
          return response.json();
        }).then(function (data) {
          var url = window.location.href;
          console.log(url, data);
          data.map(function (element, idx) {
            if (element.product_url === url) {
              document.getElementById("water").innerText = element.co2_ref_water;
              document.getElementById("car").innerText = element.co2_ref_car;
              document.getElementById("charge").innerText = element.co2_ref_smartphones;
              document.getElementById("tree").innerText = element.climate_action_trees;
            }
          });
        });
        this.chatIcon.classList.add('hidden');
        this.closeIcon.classList.remove('hidden');
        this.messageContainer.classList.remove('hidden');
        var a = document.getElementById('widgetButton').style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";
      } else {
        fetch('https://sheetdb.io/api/v1/m95hi9ve95rqt').then(function (response) {
          return response.json();
        }).then(function (data) {
          var url = window.location.href;
          console.log(url, data);
          data.map(function (element, idx) {
            if (element.product_url === url) {
              document.getElementById("water").innerText = element.co2_ref_water;
              document.getElementById("car").innerText = element.co2_ref_car;
              document.getElementById("charge").innerText = element.co2_ref_smartphones;
              document.getElementById("tree").innerText = element.climate_action_trees;
            }
          });
        });
        this.createMessageContainerContent();
        this.chatIcon.classList.remove('hidden');
        this.closeIcon.classList.add('hidden');
        this.messageContainer.classList.add('hidden');

        var _a = document.getElementById('widgetButton').style.boxShadow = "none";
      }
    }
  }, {
    key: "createWidget",
    value: function createWidget() {
      return " <div class=\"flowSection w-100 bg-color-neutral0\" style=\"height: 300px !important; width: 600px !important; overflow: hidden;\">\n                    <div class=\"mainHead\">It is our mission to reduce waste and fashion pollution</div> \n                    <div class=\"subHead\">This is the impact of buying this item</div>\n\n                    <div class=\"rowCircle\">\n                        <div class=\"col-md-4\">\n                            <div class=\"circle\">\n                                <svg class=\"glass svg\" width=\"40\" height=\"47\" viewBox=\"0 0 40 47\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M36.6044 16.7613C31.4169 21.177 25.9848 19.9041 20.4931 18.6169C14.6776 17.2534 8.79165 15.8749 3.23165 21.8024L5.38962 42.9831C5.39545 43.0154 5.39862 43.0488 5.39862 43.0827C5.39862 43.5902 5.60433 44.0498 5.93686 44.3826C6.26938 44.7151 6.72899 44.9208 7.23678 44.9208C7.25319 44.9208 7.26908 44.9216 7.28496 44.923L31.9959 44.91C32.0174 44.9073 32.0393 44.906 32.0616 44.906C32.5694 44.906 33.0287 44.7003 33.3615 44.3678C33.6233 44.1059 33.8065 43.7652 33.8727 43.3842L33.8989 43.1298C33.8997 43.1091 33.9 43.0885 33.9 43.0678C33.9 43.0154 33.9071 42.9649 33.9206 42.9169L36.6044 16.7613ZM3.08603 20.374L1.31856 3.02551C1.32148 2.52222 1.52666 2.06685 1.8568 1.73671C2.18933 1.40418 2.64893 1.19847 3.15672 1.19847H36.176C36.6836 1.19847 37.1432 1.40418 37.476 1.73671C37.8056 2.06632 38.0105 2.5209 38.0142 3.02339L36.7749 15.1C31.7338 20.1133 26.2707 18.8337 20.7443 17.538C14.8438 16.1547 8.87479 14.7558 3.08603 20.374ZM0.218265 3.13618C0.212441 3.10388 0.209263 3.07052 0.209263 3.03663C0.209263 2.22279 0.539141 1.48599 1.07261 0.952521C1.60608 0.419315 2.34288 0.0891724 3.15672 0.0891724H36.176C36.9899 0.0891724 37.7267 0.419051 38.2602 0.952521C38.7936 1.48599 39.1235 2.22279 39.1235 3.03663C39.1235 3.06972 39.1206 3.10229 39.115 3.13379L35.0077 43.1634C34.9831 43.9394 34.6585 44.6397 34.1459 45.152C33.6125 45.6854 32.8757 46.0153 32.0618 46.0153C32.0547 46.0153 32.0478 46.0153 32.0407 46.0148L7.28655 46.028C7.27014 46.0296 7.25372 46.0301 7.23678 46.0301C6.42294 46.0301 5.68614 45.7003 5.15267 45.1668C4.62211 44.6362 4.29276 43.9039 4.28959 43.0951L0.218265 3.13618Z\" fill=\"black\"/>\n                                </svg>                            \n                            </div>\n                            <div class=\"subHead\"><span id=\"water\"></span> days</div>\n                            <div class=\"text\">of drink water saved</div>\n                        </div>\n\n                     \n                        <div class=\"col-md-4\">\n                            <div class=\"circle\">\n                                <svg class=\"car svg\" width=\"53\" height=\"21\" viewBox=\"0 0 53 21\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                <path d=\"M14.8828 15.4788C14.8828 17.7702 13.0254 19.6278 10.7338 19.6278C8.44252 19.6278 6.58493 17.7702 6.58493 15.4788C6.58493 13.1874 8.44252 11.3298 10.7338 11.3298C13.0254 11.3298 14.8828 13.1874 14.8828 15.4788Z\" stroke=\"black\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                                <path d=\"M14.8828 17.1384H38.9469\" stroke=\"black\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                                <path d=\"M11.3207 14.892L10.1472 16.0655\" stroke=\"black\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                                <path d=\"M47.2448 15.4788C47.2448 17.7702 45.3873 19.6278 43.0958 19.6278C40.8045 19.6278 38.9469 17.7702 38.9469 15.4788C38.9469 13.1874 40.8045 11.3298 43.0958 11.3298C45.3873 11.3298 47.2448 13.1874 47.2448 15.4788Z\" stroke=\"black\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                                <path d=\"M42.5091 14.892L43.6826 16.0655\" stroke=\"black\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                                <path d=\"M6.58492 16.3085L2.58187 15.1648C1.51318 14.8594 0.776352 13.8826 0.776352 12.7712V7.81601C0.776352 6.97908 1.39962 6.27311 2.23012 6.16928L5.29915 5.78565C6.6993 5.61061 8.0596 5.19882 9.32166 4.56769L13.2597 2.59872C14.8728 1.79212 16.6516 1.37227 18.455 1.37227H25.848C27.8997 1.37227 29.9086 1.95734 31.6395 3.05874L38.1171 7.18083C38.1171 7.18083 45.6391 7.18083 50.3317 9.36004C51.4938 9.89977 52.2236 11.0789 52.2236 12.3603V15.1151C52.2236 16.3996 51.4805 17.1383 50.564 17.1383\" stroke=\"black\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                                <path d=\"M16.5424 7.18085H14.9419C13.8415 7.18085 12.7862 6.7437 12.008 5.96557L10.7339 4.69151\" stroke=\"black\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                                <path d=\"M38.1171 7.18085H19.8617\" stroke=\"black\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                                <path d=\"M18.2021 13.8192H35.6277\" stroke=\"black\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                                <path d=\"M0.776375 9.67029H2.43594\" stroke=\"black\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                                <path d=\"M49.7342 11.3298H51.7395\" stroke=\"black\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                                <path d=\"M23.1808 7.18085V1.37228\" stroke=\"black\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                                <path d=\"M13.6382 6.84375L14.7185 2.07189\" stroke=\"black\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                                </svg>                          \n                            </div>\n                            <div class=\"subHead svg\"><span id=\"car\"></span>Km car</div>\n                            <div class=\"text\">emissions saved</div>\n                        </div>\n\n                        <div class=\"col-md-4\">\n                            <div class=\"circle\">\n                                <svg class=\"mobile\" width=\"28\" height=\"48\" viewBox=\"0 0 28 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                <path d=\"M23.8244 0H3.46957C1.5564 0 0 1.5564 0 3.46957V43.9016C0 45.8148 1.5564 47.3712 3.46957 47.3712H23.8244C25.7376 47.3712 27.294 45.8148 27.294 43.9016V3.46957C27.294 1.5564 25.7376 0 23.8244 0ZM25.9061 37.6564H6.24523C5.862 37.6564 5.55131 37.9671 5.55131 38.3503C5.55131 38.7336 5.862 39.0442 6.24523 39.0442H25.9061V43.9016C25.9061 45.0496 24.9723 45.9834 23.8244 45.9834H3.46957C2.32165 45.9834 1.38783 45.0496 1.38783 43.9016V39.0442H3.46957C3.8528 39.0442 4.16349 38.7336 4.16349 38.3503C4.16349 37.9671 3.8528 37.6564 3.46957 37.6564H1.38783V6.93914H25.9061V37.6564ZM25.9061 5.55131H1.38783V3.46957C1.38783 2.32165 2.32165 1.38783 3.46957 1.38783H23.8244C24.9723 1.38783 25.9061 2.32165 25.9061 3.46957V5.55131Z\" fill=\"black\"/>\n                                </svg>                 \n                            </div>\n                            <div class=\"subHead\"><span id=\"charge\"></span> smartphone</div>\n                            <div class=\"text\">charges saved</div>\n                        </div>\n\n                    </div>\n\n                    <div class=\"caption\">Figures when compared to a fast fashion item of the same weight</div>\n\n                    <div class=\"tree\">\n                            <div class=\"colTree\">\n                                <svg width=\"47\" height=\"46\" viewBox=\"0 0 47 46\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                <path d=\"M38.5492 21.2569C38.8241 21.2118 39.1053 21.1897 39.391 21.1897C42.7122 21.1897 45.4039 24.2342 45.4039 27.9897C45.4039 31.745 42.7122 34.7896 39.391 34.7896C36.0697 34.7896 33.378 31.745 33.378 27.9897C33.378 27.3061 33.4672 26.6464 33.6335 26.0248\" stroke=\"black\" stroke-width=\"1.70845\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                                <path d=\"M39.3909 28.195V45.1531\" stroke=\"black\" stroke-width=\"1.70845\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                                <path d=\"M39.3909 31.8411L41.6821 29.55\" stroke=\"black\" stroke-width=\"1.70845\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                                <path d=\"M40.5028 14.607C39.9297 13.2023 38.7987 12.0846 37.3854 11.5284C37.0804 11.408 36.8876 11.0968 36.9273 10.7705C36.9442 10.6299 36.9529 10.4875 36.9529 10.3417C36.9529 8.66062 35.7946 7.25023 34.233 6.8639C33.9009 6.78166 33.6706 6.47907 33.6706 6.13695V6.12996C33.6706 3.40989 31.4653 1.20544 28.7462 1.20544C26.0262 1.20544 23.8209 3.40989 23.8209 6.12996V6.13695C23.8209 6.47907 23.5906 6.78166 23.2585 6.8639C21.6969 7.25023 20.5385 8.66062 20.5385 10.3417C20.5385 10.4875 20.5474 10.6299 20.5642 10.7705C20.604 11.0968 20.4121 11.408 20.1061 11.5284C19.7259 11.6787 19.366 11.8687 19.0318 12.0952\" stroke=\"black\" stroke-width=\"1.70845\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                                <path d=\"M21.1389 23.8788C21.5059 24.565 22.0939 25.283 23.0348 25.7339C24.6715 26.5174 26.2499 25.9471 26.6213 25.8002C27.8151 25.3264 28.4845 24.481 28.7462 24.1087C29.0071 24.481 29.6764 25.3264 30.8702 25.8002C31.2416 25.9471 32.8201 26.5174 34.4567 25.7339C36.2361 24.8825 36.7569 23.0671 36.8971 22.3406C36.9329 22.1546 37.0642 22.003 37.2422 21.9385C39.1148 21.2604 40.5206 19.6063 40.8428 17.5901\" stroke=\"black\" stroke-width=\"1.70845\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                                <path d=\"M28.7459 14.7574V45.1531\" stroke=\"black\" stroke-width=\"1.70845\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                                <path d=\"M28.7459 19.4766L25.6544 16.3852\" stroke=\"black\" stroke-width=\"1.70845\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                                <path d=\"M28.7459 20.7494L31.8373 17.658\" stroke=\"black\" stroke-width=\"1.70845\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                                <path d=\"M1.45647 45.1531H45.4041\" stroke=\"black\" stroke-width=\"1.70845\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                                <path d=\"M4.56375 9.33663C6.32625 4.86095 8.69828 1.20552 11.3072 1.20552C16.7477 1.20552 21.1581 17.1018 21.1581 23.1836C21.1581 29.2653 16.7477 34.1954 11.3072 34.1954C5.86661 34.1954 1.4562 29.2653 1.4562 23.1836C1.4562 20.6302 2.23364 16.3467 3.53836 12.2359\" stroke=\"black\" stroke-width=\"1.70845\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                                <path d=\"M11.3072 20.9372V45.1531\" stroke=\"black\" stroke-width=\"1.70845\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                                <path d=\"M11.3072 25.3115L14.2692 22.3495\" stroke=\"black\" stroke-width=\"1.70845\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                                <path d=\"M11.3072 28.1225L8.3452 25.1605\" stroke=\"black\" stroke-width=\"1.70845\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                                </svg>\n\n                            </div>\n\n                            <div class=\"colTree\">\n                                <div class=\"treeHead bold\">CLIMATE ACTION</div>\n                                <div class=\"treeHead\">We will plant <span id=\"tree\"></span> trees when you<br/> \n                                make this purchase too</div>\n                            <div>\n                    </div>\n              </div>\n            ";
    }
  }]);

  return Widget;
}();

exports.Widget = Widget;
},{}],"app.js":[function(require,module,exports) {
"use strict";

var _Widget = require("./Widget");

var widget = new _Widget.Widget({
  position: 'bottom-right'
});
},{"./Widget":"Widget.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51815" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map