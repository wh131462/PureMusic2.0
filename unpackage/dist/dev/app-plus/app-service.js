var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
(function(vue) {
  "use strict";
  function _interopNamespace(e) {
    if (e && e.__esModule)
      return e;
    var n = { __proto__: null, [Symbol.toStringTag]: "Module" };
    if (e) {
      Object.keys(e).forEach(function(k) {
        if (k !== "default") {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function() {
              return e[k];
            }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }
  var vue__namespace = /* @__PURE__ */ _interopNamespace(vue);
  Object.freeze({});
  Object.freeze([]);
  const isString = (val) => typeof val === "string";
  const objectToString = Object.prototype.toString;
  const toTypeString = (value) => objectToString.call(value);
  const toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  function isDebugMode() {
    return typeof __channelId__ === "string" && __channelId__;
  }
  function jsonStringifyReplacer(k, p) {
    switch (toRawType(p)) {
      case "Function":
        return "function() { [native code] }";
      default:
        return p;
    }
  }
  function normalizeLog(type, filename, args) {
    if (isDebugMode()) {
      args.push(filename.replace("at ", "uni-app:///"));
      return console[type].apply(console, args);
    }
    const msgs = args.map(function(v) {
      const type2 = toTypeString(v).toLowerCase();
      if (type2 === "[object object]" || type2 === "[object array]") {
        try {
          v = "---BEGIN:JSON---" + JSON.stringify(v, jsonStringifyReplacer) + "---END:JSON---";
        } catch (e) {
          v = type2;
        }
      } else {
        if (v === null) {
          v = "---NULL---";
        } else if (v === void 0) {
          v = "---UNDEFINED---";
        } else {
          const vType = toRawType(v).toUpperCase();
          if (vType === "NUMBER" || vType === "BOOLEAN") {
            v = "---BEGIN:" + vType + "---" + v + "---END:" + vType + "---";
          } else {
            v = String(v);
          }
        }
      }
      return v;
    });
    return msgs.join("---COMMA---") + " " + filename;
  }
  function formatAppLog(type, filename, ...args) {
    const res = normalizeLog(type, filename, args);
    res && console[type](res);
  }
  var icons = {
    "id": "2852637",
    "name": "uniui\u56FE\u6807\u5E93",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const getVal$1 = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$e = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return unescape(`%u${code.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal$1(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("text", {
      style: vue.normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
      class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
    }, null, 6);
  }
  var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-a2e81f6e"]]);
  function resolveEasycom(component, easycom) {
    return isString(component) ? easycom : component;
  }
  const _sfc_main$d = {
    name: "UniStatusBar",
    data() {
      return {
        statusBarHeight: 20
      };
    },
    mounted() {
      this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + "px";
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      style: vue.normalizeStyle({ height: $data.statusBarHeight }),
      class: "uni-status-bar"
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 4);
  }
  var statusBar = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-f9a87a8e"]]);
  const getVal = (val) => typeof val === "number" ? val + "px" : val;
  const _sfc_main$c = {
    name: "UniNavBar",
    components: {
      statusBar
    },
    emits: ["clickLeft", "clickRight", "clickTitle"],
    props: {
      dark: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ""
      },
      leftText: {
        type: String,
        default: ""
      },
      rightText: {
        type: String,
        default: ""
      },
      leftIcon: {
        type: String,
        default: ""
      },
      rightIcon: {
        type: String,
        default: ""
      },
      fixed: {
        type: [Boolean, String],
        default: false
      },
      color: {
        type: String,
        default: ""
      },
      backgroundColor: {
        type: String,
        default: ""
      },
      statusBar: {
        type: [Boolean, String],
        default: false
      },
      shadow: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: [Boolean, String],
        default: true
      },
      height: {
        type: [Number, String],
        default: 44
      },
      leftWidth: {
        type: [Number, String],
        default: 60
      },
      rightWidth: {
        type: [Number, String],
        default: 60
      }
    },
    computed: {
      themeBgColor() {
        if (this.dark) {
          if (this.backgroundColor) {
            return this.backgroundColor;
          } else {
            return this.dark ? "#111" : "#FFF";
          }
        }
        return this.backgroundColor || "#FFF";
      },
      themeColor() {
        if (this.dark) {
          if (this.color) {
            return this.color;
          } else {
            return this.dark ? "#fff" : "#111";
          }
        }
        return this.color || "#111";
      },
      navbarHeight() {
        return getVal(this.height);
      },
      leftIconWidth() {
        return getVal(this.leftWidth);
      },
      rightIconWidth() {
        return getVal(this.rightWidth);
      }
    },
    mounted() {
      if (uni.report && this.title !== "") {
        uni.report("title", this.title);
      }
    },
    methods: {
      onClickLeft() {
        this.$emit("clickLeft");
      },
      onClickRight() {
        this.$emit("clickRight");
      },
      onClickTitle() {
        this.$emit("clickTitle");
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_2);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["uni-navbar", { "uni-dark": $props.dark }])
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass([{ "uni-navbar--fixed": $props.fixed, "uni-navbar--shadow": $props.shadow, "uni-navbar--border": $props.border }, "uni-navbar__content"]),
        style: vue.normalizeStyle({ "background-color": $options.themeBgColor })
      }, [
        $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", {
          style: vue.normalizeStyle({ color: $options.themeColor, backgroundColor: $options.themeBgColor, height: $options.navbarHeight }),
          class: "uni-navbar__header"
        }, [
          vue.createElementVNode("view", {
            onClick: _cache[0] || (_cache[0] = (...args) => $options.onClickLeft && $options.onClickLeft(...args)),
            class: "uni-navbar__header-btns uni-navbar__header-btns-left",
            style: vue.normalizeStyle({ width: $options.leftIconWidth })
          }, [
            vue.renderSlot(_ctx.$slots, "left", {}, () => [
              $props.leftIcon.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-navbar__content_view"
              }, [
                vue.createVNode(_component_uni_icons, {
                  color: $options.themeColor,
                  type: $props.leftIcon,
                  customPrefix: "iconfont",
                  size: "25"
                }, null, 8, ["color", "type"])
              ])) : vue.createCommentVNode("v-if", true),
              $props.leftText.length ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: vue.normalizeClass([{ "uni-navbar-btn-icon-left": !$props.leftIcon.length > 0 }, "uni-navbar-btn-text"])
              }, [
                vue.createElementVNode("text", {
                  style: vue.normalizeStyle({ color: $options.themeColor, fontSize: "12px" })
                }, vue.toDisplayString($props.leftText), 5)
              ], 2)) : vue.createCommentVNode("v-if", true)
            ], true)
          ], 4),
          vue.createElementVNode("view", {
            class: "uni-navbar__header-container",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.onClickTitle && $options.onClickTitle(...args))
          }, [
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              $props.title.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-navbar__header-container-inner"
              }, [
                vue.createElementVNode("text", {
                  class: "uni-nav-bar-text uni-ellipsis-1",
                  style: vue.normalizeStyle({ color: $options.themeColor })
                }, vue.toDisplayString($props.title), 5)
              ])) : vue.createCommentVNode("v-if", true)
            ], true)
          ]),
          vue.createElementVNode("view", {
            onClick: _cache[2] || (_cache[2] = (...args) => $options.onClickRight && $options.onClickRight(...args)),
            class: "uni-navbar__header-btns uni-navbar__header-btns-right",
            style: vue.normalizeStyle({ width: $options.rightIconWidth })
          }, [
            vue.renderSlot(_ctx.$slots, "right", {}, () => [
              $props.rightIcon.length ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
                vue.createVNode(_component_uni_icons, {
                  color: $options.themeColor,
                  type: $props.rightIcon,
                  customPrefix: "iconfont",
                  size: "25"
                }, null, 8, ["color", "type"])
              ])) : vue.createCommentVNode("v-if", true),
              $props.rightText.length && !$props.rightIcon.length ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "uni-navbar-btn-text"
              }, [
                vue.createElementVNode("text", {
                  class: "uni-nav-bar-right-text",
                  style: vue.normalizeStyle({ color: $options.themeColor })
                }, vue.toDisplayString($props.rightText), 5)
              ])) : vue.createCommentVNode("v-if", true)
            ], true)
          ], 4)
        ], 4)
      ], 6),
      $props.fixed ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-navbar__placeholder"
      }, [
        $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", {
          class: "uni-navbar__placeholder-view",
          style: vue.normalizeStyle({ height: $options.navbarHeight })
        }, null, 4)
      ])) : vue.createCommentVNode("v-if", true)
    ], 2);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-6bda1a90"]]);
  class MPAnimation {
    constructor(options, _this) {
      this.options = options;
      this.animation = uni.createAnimation(options);
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config = {}) {
      let ref = this.$.$refs["ani"].ref;
      if (!ref)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref, __spreadValues({
          styles
        }, config), (res) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config
        } = obj;
        this._animateRun(styles, config).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === "function" && fn();
        this.isEnd = true;
      }
    }
    step(config = {}) {
      this.animation.step(config);
      return this;
    }
    run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(() => {
        typeof fn === "function" && fn();
      }, this.$.durationTime);
    }
  }
  const animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  const animateTypes2 = ["opacity", "backgroundColor"];
  const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this.animation[type](...args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  const _sfc_main$b = {
    name: "uniTransition",
    emits: ["click", "change"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      modeClass: {
        type: [Array, String],
        default() {
          return "fade";
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      styles: {
        type: Object,
        default() {
          return {};
        }
      },
      customClass: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      stylesObject() {
        let styles = __spreadProps(__spreadValues({}, this.styles), {
          "transition-duration": this.duration / 1e3 + "s"
        });
        let transform = "";
        for (let i in styles) {
          let line = this.toLine(i);
          transform += line + ":" + styles[i] + ";";
        }
        return transform;
      },
      transformStyles() {
        return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: "ease",
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      step(obj, config = {}) {
        if (!this.animation)
          return;
        for (let i in obj) {
          try {
            if (typeof obj[i] === "object") {
              this.animation[i](...obj[i]);
            } else {
              this.animation[i](obj[i]);
            }
          } catch (e) {
            formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:139", `\u65B9\u6CD5 ${i} \u4E0D\u5B58\u5728`);
          }
        }
        this.animation.step(config);
        return this;
      },
      run(fn) {
        if (!this.animation)
          return;
        this.animation.run(fn);
      },
      open() {
        clearTimeout(this.timer);
        this.transform = "";
        this.isShow = true;
        let { opacity, transform } = this.styleInit(false);
        if (typeof opacity !== "undefined") {
          this.opacity = opacity;
        }
        this.transform = transform;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            this.animation.run();
            this.$emit("change", {
              detail: this.isShow
            });
          }, 20);
        });
      },
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      styleInit(type) {
        let styles = {
          transform: ""
        };
        let buildStyle = (type2, mode) => {
          if (mode === "fade") {
            styles.opacity = this.animationType(type2)[mode];
          } else {
            styles.transform += this.animationType(type2)[mode] + " ";
          }
        };
        if (typeof this.modeClass === "string") {
          buildStyle(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildStyle(type, mode);
          });
        }
        return styles;
      },
      tranfromInit(type) {
        let buildTranfrom = (type2, mode) => {
          let aniNum = null;
          if (mode === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode]](aniNum);
        };
        if (typeof this.modeClass === "string") {
          buildTranfrom(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildTranfrom(type, mode);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 1 : 0,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.isShow ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      ref: "ani",
      animation: $data.animationData,
      class: vue.normalizeClass($props.customClass),
      style: vue.normalizeStyle($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 14, ["animation"])) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a]]);
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = __spreadValues({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        }
      };
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && pluginDescriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(pluginDescriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * vuex v4.0.2
   * (c) 2021 Evan You
   * @license MIT
   */
  var storeKey = "store";
  function forEachValue(obj, fn) {
    Object.keys(obj).forEach(function(key) {
      return fn(obj[key], key);
    });
  }
  function isObject(obj) {
    return obj !== null && typeof obj === "object";
  }
  function isPromise(val) {
    return val && typeof val.then === "function";
  }
  function assert(condition, msg) {
    if (!condition) {
      throw new Error("[vuex] " + msg);
    }
  }
  function partial(fn, arg) {
    return function() {
      return fn(arg);
    };
  }
  function genericSubscribe(fn, subs, options) {
    if (subs.indexOf(fn) < 0) {
      options && options.prepend ? subs.unshift(fn) : subs.push(fn);
    }
    return function() {
      var i = subs.indexOf(fn);
      if (i > -1) {
        subs.splice(i, 1);
      }
    };
  }
  function resetStore(store2, hot) {
    store2._actions = /* @__PURE__ */ Object.create(null);
    store2._mutations = /* @__PURE__ */ Object.create(null);
    store2._wrappedGetters = /* @__PURE__ */ Object.create(null);
    store2._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    var state2 = store2.state;
    installModule(store2, state2, [], store2._modules.root, true);
    resetStoreState(store2, state2, hot);
  }
  function resetStoreState(store2, state2, hot) {
    var oldState = store2._state;
    store2.getters = {};
    store2._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    var wrappedGetters = store2._wrappedGetters;
    var computedObj = {};
    forEachValue(wrappedGetters, function(fn, key) {
      computedObj[key] = partial(fn, store2);
      Object.defineProperty(store2.getters, key, {
        get: function() {
          return computedObj[key]();
        },
        enumerable: true
      });
    });
    store2._state = vue.reactive({
      data: state2
    });
    if (store2.strict) {
      enableStrictMode(store2);
    }
    if (oldState) {
      if (hot) {
        store2._withCommit(function() {
          oldState.data = null;
        });
      }
    }
  }
  function installModule(store2, rootState, path, module, hot) {
    var isRoot = !path.length;
    var namespace = store2._modules.getNamespace(path);
    if (module.namespaced) {
      if (store2._modulesNamespaceMap[namespace] && true) {
        console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
      }
      store2._modulesNamespaceMap[namespace] = module;
    }
    if (!isRoot && !hot) {
      var parentState = getNestedState(rootState, path.slice(0, -1));
      var moduleName = path[path.length - 1];
      store2._withCommit(function() {
        {
          if (moduleName in parentState) {
            console.warn('[vuex] state field "' + moduleName + '" was overridden by a module with the same name at "' + path.join(".") + '"');
          }
        }
        parentState[moduleName] = module.state;
      });
    }
    var local = module.context = makeLocalContext(store2, namespace, path);
    module.forEachMutation(function(mutation, key) {
      var namespacedType = namespace + key;
      registerMutation(store2, namespacedType, mutation, local);
    });
    module.forEachAction(function(action, key) {
      var type = action.root ? key : namespace + key;
      var handler = action.handler || action;
      registerAction(store2, type, handler, local);
    });
    module.forEachGetter(function(getter, key) {
      var namespacedType = namespace + key;
      registerGetter(store2, namespacedType, getter, local);
    });
    module.forEachChild(function(child, key) {
      installModule(store2, rootState, path.concat(key), child, hot);
    });
  }
  function makeLocalContext(store2, namespace, path) {
    var noNamespace = namespace === "";
    var local = {
      dispatch: noNamespace ? store2.dispatch : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._actions[type]) {
            console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
            return;
          }
        }
        return store2.dispatch(type, payload);
      },
      commit: noNamespace ? store2.commit : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._mutations[type]) {
            console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
            return;
          }
        }
        store2.commit(type, payload, options);
      }
    };
    Object.defineProperties(local, {
      getters: {
        get: noNamespace ? function() {
          return store2.getters;
        } : function() {
          return makeLocalGetters(store2, namespace);
        }
      },
      state: {
        get: function() {
          return getNestedState(store2.state, path);
        }
      }
    });
    return local;
  }
  function makeLocalGetters(store2, namespace) {
    if (!store2._makeLocalGettersCache[namespace]) {
      var gettersProxy = {};
      var splitPos = namespace.length;
      Object.keys(store2.getters).forEach(function(type) {
        if (type.slice(0, splitPos) !== namespace) {
          return;
        }
        var localType = type.slice(splitPos);
        Object.defineProperty(gettersProxy, localType, {
          get: function() {
            return store2.getters[type];
          },
          enumerable: true
        });
      });
      store2._makeLocalGettersCache[namespace] = gettersProxy;
    }
    return store2._makeLocalGettersCache[namespace];
  }
  function registerMutation(store2, type, handler, local) {
    var entry = store2._mutations[type] || (store2._mutations[type] = []);
    entry.push(function wrappedMutationHandler(payload) {
      handler.call(store2, local.state, payload);
    });
  }
  function registerAction(store2, type, handler, local) {
    var entry = store2._actions[type] || (store2._actions[type] = []);
    entry.push(function wrappedActionHandler(payload) {
      var res = handler.call(store2, {
        dispatch: local.dispatch,
        commit: local.commit,
        getters: local.getters,
        state: local.state,
        rootGetters: store2.getters,
        rootState: store2.state
      }, payload);
      if (!isPromise(res)) {
        res = Promise.resolve(res);
      }
      if (store2._devtoolHook) {
        return res.catch(function(err2) {
          store2._devtoolHook.emit("vuex:error", err2);
          throw err2;
        });
      } else {
        return res;
      }
    });
  }
  function registerGetter(store2, type, rawGetter, local) {
    if (store2._wrappedGetters[type]) {
      {
        console.error("[vuex] duplicate getter key: " + type);
      }
      return;
    }
    store2._wrappedGetters[type] = function wrappedGetter(store3) {
      return rawGetter(local.state, local.getters, store3.state, store3.getters);
    };
  }
  function enableStrictMode(store2) {
    vue.watch(function() {
      return store2._state.data;
    }, function() {
      {
        assert(store2._committing, "do not mutate vuex store state outside mutation handlers.");
      }
    }, { deep: true, flush: "sync" });
  }
  function getNestedState(state2, path) {
    return path.reduce(function(state3, key) {
      return state3[key];
    }, state2);
  }
  function unifyObjectStyle(type, payload, options) {
    if (isObject(type) && type.type) {
      options = payload;
      payload = type;
      type = type.type;
    }
    {
      assert(typeof type === "string", "expects string as the type, but found " + typeof type + ".");
    }
    return { type, payload, options };
  }
  var LABEL_VUEX_BINDINGS = "vuex bindings";
  var MUTATIONS_LAYER_ID = "vuex:mutations";
  var ACTIONS_LAYER_ID = "vuex:actions";
  var INSPECTOR_ID = "vuex";
  var actionId = 0;
  function addDevtools(app, store2) {
    setupDevtoolsPlugin({
      id: "org.vuejs.vuex",
      app,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [LABEL_VUEX_BINDINGS]
    }, function(api2) {
      api2.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: "Vuex Mutations",
        color: COLOR_LIME_500
      });
      api2.addTimelineLayer({
        id: ACTIONS_LAYER_ID,
        label: "Vuex Actions",
        color: COLOR_LIME_500
      });
      api2.addInspector({
        id: INSPECTOR_ID,
        label: "Vuex",
        icon: "storage",
        treeFilterPlaceholder: "Filter stores..."
      });
      api2.on.getInspectorTree(function(payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          if (payload.filter) {
            var nodes = [];
            flattenStoreForInspectorTree(nodes, store2._modules.root, payload.filter, "");
            payload.rootNodes = nodes;
          } else {
            payload.rootNodes = [
              formatStoreForInspectorTree(store2._modules.root, "")
            ];
          }
        }
      });
      api2.on.getInspectorState(function(payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          var modulePath = payload.nodeId;
          makeLocalGetters(store2, modulePath);
          payload.state = formatStoreForInspectorState(getStoreModule(store2._modules, modulePath), modulePath === "root" ? store2.getters : store2._makeLocalGettersCache, modulePath);
        }
      });
      api2.on.editInspectorState(function(payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          var modulePath = payload.nodeId;
          var path = payload.path;
          if (modulePath !== "root") {
            path = modulePath.split("/").filter(Boolean).concat(path);
          }
          store2._withCommit(function() {
            payload.set(store2._state.data, path, payload.state.value);
          });
        }
      });
      store2.subscribe(function(mutation, state2) {
        var data = {};
        if (mutation.payload) {
          data.payload = mutation.payload;
        }
        data.state = state2;
        api2.notifyComponentUpdate();
        api2.sendInspectorTree(INSPECTOR_ID);
        api2.sendInspectorState(INSPECTOR_ID);
        api2.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: Date.now(),
            title: mutation.type,
            data
          }
        });
      });
      store2.subscribeAction({
        before: function(action, state2) {
          var data = {};
          if (action.payload) {
            data.payload = action.payload;
          }
          action._id = actionId++;
          action._time = Date.now();
          data.state = state2;
          api2.addTimelineEvent({
            layerId: ACTIONS_LAYER_ID,
            event: {
              time: action._time,
              title: action.type,
              groupId: action._id,
              subtitle: "start",
              data
            }
          });
        },
        after: function(action, state2) {
          var data = {};
          var duration = Date.now() - action._time;
          data.duration = {
            _custom: {
              type: "duration",
              display: duration + "ms",
              tooltip: "Action duration",
              value: duration
            }
          };
          if (action.payload) {
            data.payload = action.payload;
          }
          data.state = state2;
          api2.addTimelineEvent({
            layerId: ACTIONS_LAYER_ID,
            event: {
              time: Date.now(),
              title: action.type,
              groupId: action._id,
              subtitle: "end",
              data
            }
          });
        }
      });
    });
  }
  var COLOR_LIME_500 = 8702998;
  var COLOR_DARK = 6710886;
  var COLOR_WHITE = 16777215;
  var TAG_NAMESPACED = {
    label: "namespaced",
    textColor: COLOR_WHITE,
    backgroundColor: COLOR_DARK
  };
  function extractNameFromPath(path) {
    return path && path !== "root" ? path.split("/").slice(-2, -1)[0] : "Root";
  }
  function formatStoreForInspectorTree(module, path) {
    return {
      id: path || "root",
      label: extractNameFromPath(path),
      tags: module.namespaced ? [TAG_NAMESPACED] : [],
      children: Object.keys(module._children).map(function(moduleName) {
        return formatStoreForInspectorTree(module._children[moduleName], path + moduleName + "/");
      })
    };
  }
  function flattenStoreForInspectorTree(result, module, filter, path) {
    if (path.includes(filter)) {
      result.push({
        id: path || "root",
        label: path.endsWith("/") ? path.slice(0, path.length - 1) : path || "Root",
        tags: module.namespaced ? [TAG_NAMESPACED] : []
      });
    }
    Object.keys(module._children).forEach(function(moduleName) {
      flattenStoreForInspectorTree(result, module._children[moduleName], filter, path + moduleName + "/");
    });
  }
  function formatStoreForInspectorState(module, getters2, path) {
    getters2 = path === "root" ? getters2 : getters2[path];
    var gettersKeys = Object.keys(getters2);
    var storeState = {
      state: Object.keys(module.state).map(function(key) {
        return {
          key,
          editable: true,
          value: module.state[key]
        };
      })
    };
    if (gettersKeys.length) {
      var tree = transformPathsToObjectTree(getters2);
      storeState.getters = Object.keys(tree).map(function(key) {
        return {
          key: key.endsWith("/") ? extractNameFromPath(key) : key,
          editable: false,
          value: canThrow(function() {
            return tree[key];
          })
        };
      });
    }
    return storeState;
  }
  function transformPathsToObjectTree(getters2) {
    var result = {};
    Object.keys(getters2).forEach(function(key) {
      var path = key.split("/");
      if (path.length > 1) {
        var target = result;
        var leafKey = path.pop();
        path.forEach(function(p) {
          if (!target[p]) {
            target[p] = {
              _custom: {
                value: {},
                display: p,
                tooltip: "Module",
                abstract: true
              }
            };
          }
          target = target[p]._custom.value;
        });
        target[leafKey] = canThrow(function() {
          return getters2[key];
        });
      } else {
        result[key] = canThrow(function() {
          return getters2[key];
        });
      }
    });
    return result;
  }
  function getStoreModule(moduleMap, path) {
    var names = path.split("/").filter(function(n) {
      return n;
    });
    return names.reduce(function(module, moduleName, i) {
      var child = module[moduleName];
      if (!child) {
        throw new Error('Missing module "' + moduleName + '" for path "' + path + '".');
      }
      return i === names.length - 1 ? child : child._children;
    }, path === "root" ? moduleMap : moduleMap.root._children);
  }
  function canThrow(cb) {
    try {
      return cb();
    } catch (e) {
      return e;
    }
  }
  var Module = function Module2(rawModule, runtime) {
    this.runtime = runtime;
    this._children = /* @__PURE__ */ Object.create(null);
    this._rawModule = rawModule;
    var rawState = rawModule.state;
    this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
  };
  var prototypeAccessors$1 = { namespaced: { configurable: true } };
  prototypeAccessors$1.namespaced.get = function() {
    return !!this._rawModule.namespaced;
  };
  Module.prototype.addChild = function addChild(key, module) {
    this._children[key] = module;
  };
  Module.prototype.removeChild = function removeChild(key) {
    delete this._children[key];
  };
  Module.prototype.getChild = function getChild(key) {
    return this._children[key];
  };
  Module.prototype.hasChild = function hasChild(key) {
    return key in this._children;
  };
  Module.prototype.update = function update2(rawModule) {
    this._rawModule.namespaced = rawModule.namespaced;
    if (rawModule.actions) {
      this._rawModule.actions = rawModule.actions;
    }
    if (rawModule.mutations) {
      this._rawModule.mutations = rawModule.mutations;
    }
    if (rawModule.getters) {
      this._rawModule.getters = rawModule.getters;
    }
  };
  Module.prototype.forEachChild = function forEachChild(fn) {
    forEachValue(this._children, fn);
  };
  Module.prototype.forEachGetter = function forEachGetter(fn) {
    if (this._rawModule.getters) {
      forEachValue(this._rawModule.getters, fn);
    }
  };
  Module.prototype.forEachAction = function forEachAction(fn) {
    if (this._rawModule.actions) {
      forEachValue(this._rawModule.actions, fn);
    }
  };
  Module.prototype.forEachMutation = function forEachMutation(fn) {
    if (this._rawModule.mutations) {
      forEachValue(this._rawModule.mutations, fn);
    }
  };
  Object.defineProperties(Module.prototype, prototypeAccessors$1);
  var ModuleCollection = function ModuleCollection2(rawRootModule) {
    this.register([], rawRootModule, false);
  };
  ModuleCollection.prototype.get = function get(path) {
    return path.reduce(function(module, key) {
      return module.getChild(key);
    }, this.root);
  };
  ModuleCollection.prototype.getNamespace = function getNamespace(path) {
    var module = this.root;
    return path.reduce(function(namespace, key) {
      module = module.getChild(key);
      return namespace + (module.namespaced ? key + "/" : "");
    }, "");
  };
  ModuleCollection.prototype.update = function update$1(rawRootModule) {
    update([], this.root, rawRootModule);
  };
  ModuleCollection.prototype.register = function register2(path, rawModule, runtime) {
    var this$1$1 = this;
    if (runtime === void 0)
      runtime = true;
    {
      assertRawModule(path, rawModule);
    }
    var newModule = new Module(rawModule, runtime);
    if (path.length === 0) {
      this.root = newModule;
    } else {
      var parent = this.get(path.slice(0, -1));
      parent.addChild(path[path.length - 1], newModule);
    }
    if (rawModule.modules) {
      forEachValue(rawModule.modules, function(rawChildModule, key) {
        this$1$1.register(path.concat(key), rawChildModule, runtime);
      });
    }
  };
  ModuleCollection.prototype.unregister = function unregister(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    var child = parent.getChild(key);
    if (!child) {
      {
        console.warn("[vuex] trying to unregister module '" + key + "', which is not registered");
      }
      return;
    }
    if (!child.runtime) {
      return;
    }
    parent.removeChild(key);
  };
  ModuleCollection.prototype.isRegistered = function isRegistered(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    if (parent) {
      return parent.hasChild(key);
    }
    return false;
  };
  function update(path, targetModule, newModule) {
    {
      assertRawModule(path, newModule);
    }
    targetModule.update(newModule);
    if (newModule.modules) {
      for (var key in newModule.modules) {
        if (!targetModule.getChild(key)) {
          {
            console.warn("[vuex] trying to add a new module '" + key + "' on hot reloading, manual reload is needed");
          }
          return;
        }
        update(path.concat(key), targetModule.getChild(key), newModule.modules[key]);
      }
    }
  }
  var functionAssert = {
    assert: function(value) {
      return typeof value === "function";
    },
    expected: "function"
  };
  var objectAssert = {
    assert: function(value) {
      return typeof value === "function" || typeof value === "object" && typeof value.handler === "function";
    },
    expected: 'function or object with "handler" function'
  };
  var assertTypes = {
    getters: functionAssert,
    mutations: functionAssert,
    actions: objectAssert
  };
  function assertRawModule(path, rawModule) {
    Object.keys(assertTypes).forEach(function(key) {
      if (!rawModule[key]) {
        return;
      }
      var assertOptions = assertTypes[key];
      forEachValue(rawModule[key], function(value, type) {
        assert(assertOptions.assert(value), makeAssertionMessage(path, key, type, value, assertOptions.expected));
      });
    });
  }
  function makeAssertionMessage(path, key, type, value, expected) {
    var buf = key + " should be " + expected + ' but "' + key + "." + type + '"';
    if (path.length > 0) {
      buf += ' in module "' + path.join(".") + '"';
    }
    buf += " is " + JSON.stringify(value) + ".";
    return buf;
  }
  function createStore(options) {
    return new Store(options);
  }
  var Store = function Store2(options) {
    var this$1$1 = this;
    if (options === void 0)
      options = {};
    {
      assert(typeof Promise !== "undefined", "vuex requires a Promise polyfill in this browser.");
      assert(this instanceof Store2, "store must be called with the new operator.");
    }
    var plugins = options.plugins;
    if (plugins === void 0)
      plugins = [];
    var strict = options.strict;
    if (strict === void 0)
      strict = false;
    var devtools = options.devtools;
    this._committing = false;
    this._actions = /* @__PURE__ */ Object.create(null);
    this._actionSubscribers = [];
    this._mutations = /* @__PURE__ */ Object.create(null);
    this._wrappedGetters = /* @__PURE__ */ Object.create(null);
    this._modules = new ModuleCollection(options);
    this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    this._subscribers = [];
    this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    this._devtools = devtools;
    var store2 = this;
    var ref = this;
    var dispatch = ref.dispatch;
    var commit = ref.commit;
    this.dispatch = function boundDispatch(type, payload) {
      return dispatch.call(store2, type, payload);
    };
    this.commit = function boundCommit(type, payload, options2) {
      return commit.call(store2, type, payload, options2);
    };
    this.strict = strict;
    var state2 = this._modules.root.state;
    installModule(this, state2, [], this._modules.root);
    resetStoreState(this, state2);
    plugins.forEach(function(plugin) {
      return plugin(this$1$1);
    });
  };
  var prototypeAccessors = { state: { configurable: true } };
  Store.prototype.install = function install(app, injectKey) {
    app.provide(injectKey || storeKey, this);
    app.config.globalProperties.$store = this;
    var useDevtools = this._devtools !== void 0 ? this._devtools : true;
    if (useDevtools) {
      addDevtools(app, this);
    }
  };
  prototypeAccessors.state.get = function() {
    return this._state.data;
  };
  prototypeAccessors.state.set = function(v) {
    {
      assert(false, "use store.replaceState() to explicit replace store state.");
    }
  };
  Store.prototype.commit = function commit(_type, _payload, _options) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;
    var mutation = { type, payload };
    var entry = this._mutations[type];
    if (!entry) {
      {
        console.error("[vuex] unknown mutation type: " + type);
      }
      return;
    }
    this._withCommit(function() {
      entry.forEach(function commitIterator(handler) {
        handler(payload);
      });
    });
    this._subscribers.slice().forEach(function(sub) {
      return sub(mutation, this$1$1.state);
    });
    if (options && options.silent) {
      console.warn("[vuex] mutation type: " + type + ". Silent option has been removed. Use the filter functionality in the vue-devtools");
    }
  };
  Store.prototype.dispatch = function dispatch(_type, _payload) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;
    var action = { type, payload };
    var entry = this._actions[type];
    if (!entry) {
      {
        console.error("[vuex] unknown action type: " + type);
      }
      return;
    }
    try {
      this._actionSubscribers.slice().filter(function(sub) {
        return sub.before;
      }).forEach(function(sub) {
        return sub.before(action, this$1$1.state);
      });
    } catch (e) {
      {
        console.warn("[vuex] error in before action subscribers: ");
        console.error(e);
      }
    }
    var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
      return handler(payload);
    })) : entry[0](payload);
    return new Promise(function(resolve, reject) {
      result.then(function(res) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.after;
          }).forEach(function(sub) {
            return sub.after(action, this$1$1.state);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in after action subscribers: ");
            console.error(e);
          }
        }
        resolve(res);
      }, function(error) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.error;
          }).forEach(function(sub) {
            return sub.error(action, this$1$1.state, error);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in error action subscribers: ");
            console.error(e);
          }
        }
        reject(error);
      });
    });
  };
  Store.prototype.subscribe = function subscribe(fn, options) {
    return genericSubscribe(fn, this._subscribers, options);
  };
  Store.prototype.subscribeAction = function subscribeAction(fn, options) {
    var subs = typeof fn === "function" ? { before: fn } : fn;
    return genericSubscribe(subs, this._actionSubscribers, options);
  };
  Store.prototype.watch = function watch$1(getter, cb, options) {
    var this$1$1 = this;
    {
      assert(typeof getter === "function", "store.watch only accepts a function.");
    }
    return vue.watch(function() {
      return getter(this$1$1.state, this$1$1.getters);
    }, cb, Object.assign({}, options));
  };
  Store.prototype.replaceState = function replaceState(state2) {
    var this$1$1 = this;
    this._withCommit(function() {
      this$1$1._state.data = state2;
    });
  };
  Store.prototype.registerModule = function registerModule(path, rawModule, options) {
    if (options === void 0)
      options = {};
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
      assert(path.length > 0, "cannot register the root module by using registerModule.");
    }
    this._modules.register(path, rawModule);
    installModule(this, this.state, path, this._modules.get(path), options.preserveState);
    resetStoreState(this, this.state);
  };
  Store.prototype.unregisterModule = function unregisterModule(path) {
    var this$1$1 = this;
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    this._modules.unregister(path);
    this._withCommit(function() {
      var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
      delete parentState[path[path.length - 1]];
    });
    resetStore(this);
  };
  Store.prototype.hasModule = function hasModule(path) {
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    return this._modules.isRegistered(path);
  };
  Store.prototype.hotUpdate = function hotUpdate(newOptions) {
    this._modules.update(newOptions);
    resetStore(this, true);
  };
  Store.prototype._withCommit = function _withCommit(fn) {
    var committing = this._committing;
    this._committing = true;
    fn();
    this._committing = committing;
  };
  Object.defineProperties(Store.prototype, prototypeAccessors);
  var mapState = normalizeNamespace(function(namespace, states) {
    var res = {};
    if (!isValidMap(states)) {
      console.error("[vuex] mapState: mapper parameter must be either an Array or an Object");
    }
    normalizeMap(states).forEach(function(ref) {
      var key = ref.key;
      var val = ref.val;
      res[key] = function mappedState() {
        var state2 = this.$store.state;
        var getters2 = this.$store.getters;
        if (namespace) {
          var module = getModuleByNamespace(this.$store, "mapState", namespace);
          if (!module) {
            return;
          }
          state2 = module.context.state;
          getters2 = module.context.getters;
        }
        return typeof val === "function" ? val.call(this, state2, getters2) : state2[val];
      };
      res[key].vuex = true;
    });
    return res;
  });
  var mapMutations = normalizeNamespace(function(namespace, mutations2) {
    var res = {};
    if (!isValidMap(mutations2)) {
      console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object");
    }
    normalizeMap(mutations2).forEach(function(ref) {
      var key = ref.key;
      var val = ref.val;
      res[key] = function mappedMutation() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var commit = this.$store.commit;
        if (namespace) {
          var module = getModuleByNamespace(this.$store, "mapMutations", namespace);
          if (!module) {
            return;
          }
          commit = module.context.commit;
        }
        return typeof val === "function" ? val.apply(this, [commit].concat(args)) : commit.apply(this.$store, [val].concat(args));
      };
    });
    return res;
  });
  var mapGetters = normalizeNamespace(function(namespace, getters2) {
    var res = {};
    if (!isValidMap(getters2)) {
      console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object");
    }
    normalizeMap(getters2).forEach(function(ref) {
      var key = ref.key;
      var val = ref.val;
      val = namespace + val;
      res[key] = function mappedGetter() {
        if (namespace && !getModuleByNamespace(this.$store, "mapGetters", namespace)) {
          return;
        }
        if (!(val in this.$store.getters)) {
          console.error("[vuex] unknown getter: " + val);
          return;
        }
        return this.$store.getters[val];
      };
      res[key].vuex = true;
    });
    return res;
  });
  var mapActions = normalizeNamespace(function(namespace, actions2) {
    var res = {};
    if (!isValidMap(actions2)) {
      console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object");
    }
    normalizeMap(actions2).forEach(function(ref) {
      var key = ref.key;
      var val = ref.val;
      res[key] = function mappedAction() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var dispatch = this.$store.dispatch;
        if (namespace) {
          var module = getModuleByNamespace(this.$store, "mapActions", namespace);
          if (!module) {
            return;
          }
          dispatch = module.context.dispatch;
        }
        return typeof val === "function" ? val.apply(this, [dispatch].concat(args)) : dispatch.apply(this.$store, [val].concat(args));
      };
    });
    return res;
  });
  function normalizeMap(map) {
    if (!isValidMap(map)) {
      return [];
    }
    return Array.isArray(map) ? map.map(function(key) {
      return { key, val: key };
    }) : Object.keys(map).map(function(key) {
      return { key, val: map[key] };
    });
  }
  function isValidMap(map) {
    return Array.isArray(map) || isObject(map);
  }
  function normalizeNamespace(fn) {
    return function(namespace, map) {
      if (typeof namespace !== "string") {
        map = namespace;
        namespace = "";
      } else if (namespace.charAt(namespace.length - 1) !== "/") {
        namespace += "/";
      }
      return fn(namespace, map);
    };
  }
  function getModuleByNamespace(store2, helper, namespace) {
    var module = store2._modulesNamespaceMap[namespace];
    if (!module) {
      console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
    }
    return module;
  }
  const _sfc_main$a = {
    name: "music",
    props: {
      "tabHeight": null
    },
    emits: {
      "to-page": null
    },
    data() {
      return {
        isChanging: false,
        nowVal: 0,
        time: "0:00/0:00",
        interval: {},
        isMore: false,
        moreId: 0,
        isDialog: false,
        dialog: { title: "\u63D0\u793A", content: "\u5185\u5BB9" },
        dialogSureCallback: {},
        dialogCancelCallback: {}
      };
    },
    computed: __spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, mapState({
      Player: (state2) => state2.Player,
      isPlaying: (state2) => state2.isPlaying,
      isEnd: (state2) => state2.isEnd
    })), mapState("Music", {
      playNow: (state2) => state2.playNow,
      musicList: (state2) => state2.musicList,
      playList: (state2) => state2.playList
    })), mapGetters("Music", ["musicInfo"])), mapState("Setting", {
      setting: (state2) => state2.setting
    })), mapGetters("Setting", ["isNight"])), {
      themeColor() {
        if (this.isNight) {
          return "#FFF";
        } else {
          return "#FFF";
        }
      }
    }),
    watch: {
      isPlaying: {
        handler(n, o) {
          if (n) {
            let _this = this;
            this.interval = setInterval(() => {
              _this.changePrograss();
              _this.changeTime();
            }, 500);
          } else {
            clearInterval(this.interval);
          }
          formatAppLog("log", "at components/music/music.vue:169", "isPlaying", n);
        }
      },
      isEnd: {
        handler(n, o) {
          formatAppLog("log", "at components/music/music.vue:175", "isEnd", n);
          if (n) {
            this.NextSong();
          }
        }
      }
    },
    beforeMount() {
      formatAppLog("log", "at components/music/music.vue:183", "\u6302\u8F7D\u524D");
      if (this.Player.src) {
        let _this = this;
        if (this.isPlaying) {
          this.interval = setInterval(() => {
            _this.changePrograss();
            _this.changeTime();
          }, 100);
        }
      }
    },
    mounted() {
      this.isShowList = true;
      setTimeout(() => {
        this.changeTime();
      }, 1e3);
    },
    beforeUnmount() {
      clearInterval(this.interval);
    },
    methods: __spreadProps(__spreadValues(__spreadValues({}, mapMutations([
      "Play",
      "Pause",
      "Seek",
      "NextSong",
      "PreSong"
    ])), mapActions("Music", [
      "playMusic"
    ])), {
      convertTime(duration) {
        if (typeof duration === "string") {
          let arr = duration.split(":"), dur = 0;
          for (let i = arr.length - 1; i >= 0; i--) {
            dur += arr[i] * Math.pow(60, i);
          }
          return dur;
        } else {
          let seconds = parseInt(duration % 60), minutes = parseInt(duration % (60 * 60) / 60), hours = parseInt(duration / (60 * 60));
          return hours == 0 ? minutes + ":" + (seconds < 10 ? "0" + seconds : seconds) : (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
        }
      },
      changeTime() {
        var _this = this;
        let cur = _this.Player.currentTime, dur = _this.Player.duration;
        _this.time = _this.convertTime(cur) + "/" + _this.convertTime(dur);
      },
      prograssChanging() {
        this.isChanging = true;
      },
      prograssChanged(e) {
        this.isChanging = false;
        formatAppLog("log", "at components/music/music.vue:249", e.detail.value);
        let nowVal = e.detail.value;
        let newTime = nowVal / 100 * this.Player.duration;
        formatAppLog("log", "at components/music/music.vue:252", newTime);
        this.Seek(newTime);
      },
      changePrograss() {
        if (this.isChanging) {
          return;
        }
        let newVal = this.Player.currentTime / this.Player.duration * 100;
        this.nowVal = newVal;
      },
      More(mid) {
        this.isMore = !this.isMore;
        this.moreId = mid;
      },
      ShowDialog(title, content, sure, cancel, sureCallback, cancelCallback, sureparam, cancelparam) {
        this.isDialog = true;
        this.dialog.title = title;
        this.dialog.content = content;
        this.dialog.btnSure = sure;
        this.dialog.btnCancel = cancel;
        this.dialogSureCallback = sureCallback;
        this.dialogCancelCallback = cancelCallback;
        this.dialogSureParam = sureparam;
        this.dialogCancelParam = cancelparam;
      },
      doSureCallback() {
        if (this.dialogSureCallback != null) {
          this.dialogSureCallback(this.dialogSureParam);
          this.dialogSureCallback = null;
        }
        this.isDialog = false;
      },
      doCancelCallback() {
        if (this.dialogCancelCallback != null) {
          this.dialogCancelCallback(this.dialogCancelParam);
          this.dialogCancelCallback = null;
        }
        this.isDialog = false;
      }
    })
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_2);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" \u97F3\u4E50\u7EC4\u4EF6 "),
      vue.createCommentVNode(" \u97F3\u4E50\u64AD\u653E\u5217\u8868 "),
      _ctx.musicList[0] ? (vue.openBlock(), vue.createElementBlock("scroll-view", {
        key: 0,
        class: vue.normalizeClass([{ "musicList-night": _ctx.isNight }, "musicList"]),
        "scroll-y": "true",
        style: vue.normalizeStyle("height:calc(100% - 100rpx)")
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.musicList, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: vue.normalizeClass([_ctx.isPlaying && item.mid == _ctx.playNow.mid ? "music-item music-item-play" : "music-item"]),
            key: index
          }, [
            vue.createElementVNode("view", {
              class: "music-item-info",
              onClick: ($event) => _ctx.playMusic(item.mid)
            }, [
              vue.createElementVNode("text", { class: "info-title" }, vue.toDisplayString(item.title), 1),
              vue.createElementVNode("text", { class: "info-author" }, vue.toDisplayString(item.author) + "-" + vue.toDisplayString(item.albums), 1)
            ], 8, ["onClick"]),
            vue.createElementVNode("view", { class: "music-item-control" }, [
              vue.createVNode(_component_uni_icons, {
                class: "music-item-control-icon",
                color: $options.themeColor,
                type: "icon-more",
                customPrefix: "iconfont",
                size: "24",
                onClick: ($event) => $options.More(item.mid)
              }, null, 8, ["color", "onClick"])
            ])
          ], 2);
        }), 128)),
        vue.withDirectives(vue.createElementVNode("text", { id: "musicListButtom" }, "\u5DF2\u7ECF\u5230\u5E95\u4E86~", 512), [
          [vue.vShow, _ctx.musicList.length >= 10]
        ])
      ], 6)) : (vue.openBlock(), vue.createElementBlock("text", {
        key: 1,
        style: { "display": "block", "width": "100%", "height": "50px", "line-height": "50px", "text-align": "center", "color": "#FFFFFF" }
      }, "\u6682\u65E0\u6B4C\u66F2")),
      vue.createCommentVNode(" \u8BE6\u7EC6\u64CD\u4F5C\u5217\u8868 "),
      $data.isMore ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 2,
        class: vue.normalizeClass(["more", _ctx.isNight ? "more-night" : "more"])
      }, [
        vue.createElementVNode("view", { class: "more-info" }, [
          vue.createElementVNode("image", {
            src: _ctx.musicInfo($data.moreId).cover,
            mode: "aspectFill"
          }, null, 8, ["src"]),
          vue.createElementVNode("text", null, vue.toDisplayString(_ctx.musicInfo($data.moreId).title), 1)
        ]),
        vue.createElementVNode("view", { class: "more-btn" }, [
          vue.createVNode(_component_uni_icons, {
            class: "more-btn-icon",
            type: "icon-add",
            customPrefix: "iconfont",
            size: "28",
            color: "#000"
          }),
          vue.createElementVNode("text", null, "\u4E0B\u4E00\u9996\u64AD\u653E")
        ]),
        vue.createElementVNode("view", { class: "more-btn" }, [
          vue.createVNode(_component_uni_icons, {
            class: "more-btn-icon",
            type: "icon-add",
            customPrefix: "iconfont",
            size: "28",
            color: "#000"
          }),
          vue.createElementVNode("text", null, "\u52A0\u5165\u64AD\u653E\u5217\u8868")
        ]),
        vue.createElementVNode("view", { class: "more-btn" }, [
          vue.createVNode(_component_uni_icons, {
            class: "more-btn-icon",
            type: "icon-add",
            customPrefix: "iconfont",
            size: "28",
            color: "#000"
          }),
          vue.createElementVNode("text", null, "\u52A0\u5165\u6B4C\u5355")
        ]),
        vue.createElementVNode("view", {
          class: "more-btn",
          onClick: _cache[0] || (_cache[0] = ($event) => $options.ShowDialog("\u63D0\u793A", "\u662F\u5426\u8981\u5C06\u6B64\u6B4C\u66F2\u4ECE\u5217\u8868\u4E2D\u5220\u9664?\u6B64\u64CD\u4F5C\u4E0D\u4F1A\u5220\u9664\u672C\u5730\u6587\u4EF6\u3002", "\u786E\u5B9A", "\u53D6\u6D88", _ctx.deleteMusicItem, null, _ctx.moreIndex, null))
        }, [
          vue.createVNode(_component_uni_icons, {
            class: "more-btn-icon",
            type: "icon-add",
            customPrefix: "iconfont",
            size: "28",
            color: "#000"
          }),
          vue.createElementVNode("text", null, "\u5220\u9664\u6B64\u6B4C\u66F2")
        ]),
        vue.createElementVNode("view", { class: "more-btn" }, [
          vue.createVNode(_component_uni_icons, {
            class: "more-btn-icon",
            type: "icon-add",
            customPrefix: "iconfont",
            size: "28",
            color: "#000"
          }),
          vue.createElementVNode("text", null, "\u67E5\u770B\u8BE6\u60C5")
        ])
      ], 2)) : vue.createCommentVNode("v-if", true),
      $data.isMore ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 3,
        class: "more-other",
        onClick: _cache[1] || (_cache[1] = ($event) => $data.isMore = !$data.isMore)
      }, " \xA0 ")) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" \u6A21\u6001\u6846 "),
      $data.isDialog ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 4,
        class: "dialog"
      }, [
        vue.createElementVNode("view", { class: "dialog-title" }, [
          vue.createElementVNode("text", null, vue.toDisplayString($data.dialog.title), 1)
        ]),
        vue.createElementVNode("view", { class: "dialog-content" }, [
          vue.createElementVNode("text", null, vue.toDisplayString($data.dialog.content), 1)
        ]),
        vue.createElementVNode("view", { class: "dialog-btns" }, [
          vue.createElementVNode("view", {
            class: "dialog-btn",
            onClick: _cache[2] || (_cache[2] = ($event) => $options.doSureCallback())
          }, [
            vue.createElementVNode("text", null, vue.toDisplayString($data.dialog.btnSure), 1)
          ]),
          vue.createElementVNode("view", {
            class: "dialog-btn",
            onClick: _cache[3] || (_cache[3] = ($event) => $options.doCancelCallback())
          }, [
            vue.createElementVNode("text", null, vue.toDisplayString($data.dialog.btnCancel), 1)
          ])
        ])
      ])) : vue.createCommentVNode("v-if", true),
      $data.isDialog ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 5,
        class: "dialog-other"
      }, "\xA0")) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" \u97F3\u4E50\u64AD\u653E\u5668 "),
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["player", [_ctx.isNight ? "player-night" : "player"]]),
        style: vue.normalizeStyle("bottom:" + $props.tabHeight + "px")
      }, [
        vue.createCommentVNode(" \u5C01\u9762 "),
        vue.createElementVNode("view", { class: "player-cover" }, [
          vue.createElementVNode("image", {
            onClick: _cache[4] || (_cache[4] = ($event) => _ctx.$emit("to-page", "musicdetail")),
            src: _ctx.playNow.cover,
            mode: "aspectFit"
          }, null, 8, ["src"])
        ]),
        vue.createCommentVNode(" \u97F3\u4E50\u4FE1\u606F "),
        vue.createElementVNode("view", { class: "player-info" }, [
          vue.createElementVNode("view", { class: "player-info-top" }, [
            vue.createElementVNode("view", { class: "player-info-text" }, [
              vue.createElementVNode("text", null, vue.toDisplayString(_ctx.playNow.title + "-" + _ctx.playNow.author), 1)
            ]),
            vue.createElementVNode("view", { class: "player-info-time" }, [
              vue.createElementVNode("text", null, vue.toDisplayString($data.time), 1)
            ])
          ]),
          vue.createElementVNode("view", { class: "player-info-bottom" }, [
            vue.createElementVNode("view", { class: "player-info-prograss" }, [
              vue.createElementVNode("slider", {
                value: $data.nowVal,
                min: "0",
                max: "100",
                "block-size": "8",
                "block-color": "#FFFFFF",
                backgroundColor: "#d2d3d3",
                activeColor: "#9ae7e7",
                onChanging: _cache[5] || (_cache[5] = ($event) => $options.prograssChanging()),
                onChange: _cache[6] || (_cache[6] = (...args) => $options.prograssChanged && $options.prograssChanged(...args))
              }, null, 40, ["value"])
            ])
          ])
        ]),
        vue.createCommentVNode(" \u97F3\u4E50\u6309\u94AE "),
        vue.createElementVNode("view", { class: "player-controls" }, [
          !_ctx.isPlaying ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 0,
            color: $options.themeColor,
            type: "icon-Play",
            customPrefix: "iconfont",
            size: "28",
            onClick: _cache[7] || (_cache[7] = ($event) => _ctx.Play())
          }, null, 8, ["color"])) : (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 1,
            color: $options.themeColor,
            type: "icon-Pause",
            customPrefix: "iconfont",
            size: "28",
            onClick: _cache[8] || (_cache[8] = ($event) => _ctx.Pause())
          }, null, 8, ["color"]))
        ])
      ], 6)
    ]);
  }
  var music = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-41134650"]]);
  const _sfc_main$9 = {
    name: "my",
    emits: {
      "to-page": null
    },
    data() {
      return {};
    },
    computed: __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, mapState("User", {
      user: (state2) => state2.user,
      isLogin: (state2) => state2.isLogin
    })), mapState("Music", {
      myMusicLists: (state2) => state2.myMusicLists
    })), mapState("Setting", {
      setting: (state2) => state2.setting
    })), mapGetters("Setting", ["isNight"])),
    methods: __spreadProps(__spreadValues({}, mapMutations("Music", ["changeList"])), {
      startAddList() {
        formatAppLog("log", "at components/my/my.vue:91", "Add new list");
      },
      ToMyLove() {
        this.changeList({ list: "myFavor" });
        this.$emit("to-page", "musiclist");
      },
      ToTheRecent() {
        this.changeList({ list: "history" });
        this.$emit("to-page", "musiclist");
      },
      ToMusicList(index) {
        this.changeList({ list: index });
        this.myMusicLists[index];
        this.$emit("to-page", "musiclist");
      }
    })
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "my" }, [
      vue.createCommentVNode(" \u4E2A\u4EBA\u4FE1\u606F\u5E26\u5934\u50CF\u540D\u79F0 "),
      vue.createElementVNode("view", {
        class: "User-info",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.isLogin ? _ctx.$emit("to-page", "detail") : _ctx.$emit("to-page", "login"))
      }, [
        vue.createElementVNode("view", { class: "info-headpic" }, [
          vue.createElementVNode("image", {
            src: "/static/Image/background3.png",
            mode: "aspectFill"
          })
        ]),
        vue.createElementVNode("view", { class: "info-content" }, [
          vue.createElementVNode("text", { class: "info-username" }, vue.toDisplayString(_ctx.isLogin ? _ctx.user.username : "\u672A\u767B\u5F55"), 1),
          vue.createElementVNode("text", { class: "info-motto" }, vue.toDisplayString(_ctx.isLogin ? _ctx.user.motto : ""), 1)
        ])
      ]),
      vue.createCommentVNode(" \u6211\u559C\u6B22\u7684\u6B4C\u5355 "),
      vue.createElementVNode("view", { class: "LoveAndRecent-title" }, [
        vue.createElementVNode("text", null, "\u6211\u559C\u6B22\u7684\u6B4C\u66F2&\u6700\u8FD1\u64AD\u653E")
      ]),
      vue.createElementVNode("view", { class: "LoveAndRecent" }, [
        vue.createElementVNode("view", {
          class: "MyLove",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.ToMyLove && $options.ToMyLove(...args))
        }, [
          vue.createElementVNode("view", { class: "MyLove-cover" }, [
            vue.createVNode(_component_uni_icons, {
              class: "MyLove-icon",
              type: "icon-heart_full",
              customPrefix: "iconfont",
              size: "120rpx",
              color: "#FF0000"
            }),
            vue.createElementVNode("image", {
              class: "MyLove-back",
              src: _ctx.setting.backgroundSrc,
              mode: "aspectFill"
            }, null, 8, ["src"])
          ]),
          vue.createElementVNode("text", { class: "MyLove-title" }, "\u6211\u559C\u6B22\u7684\u6B4C\u66F2")
        ]),
        vue.createCommentVNode(" \u6700\u8FD1\u64AD\u653E "),
        vue.createElementVNode("view", { class: "RecentPlay" }, [
          vue.createElementVNode("view", {
            class: "RecentPlay-cover",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.ToTheRecent && $options.ToTheRecent(...args))
          }, [
            vue.createVNode(_component_uni_icons, {
              class: "RecentPlay-icon",
              type: "icon-history",
              customPrefix: "iconfont",
              size: "120rpx",
              color: "#FFFFFF"
            }),
            vue.createElementVNode("image", {
              class: "RecentPlay-back",
              src: _ctx.setting.backgroundSrc,
              mode: "aspectFill"
            }, null, 8, ["src"])
          ]),
          vue.createElementVNode("text", { class: "RecentPlay-title" }, "\u6700\u8FD1\u64AD\u653E")
        ])
      ]),
      vue.createCommentVNode(" \u81EA\u5EFA\u6B4C\u5355 "),
      vue.createElementVNode("view", { class: "MyList" }, [
        vue.createElementVNode("view", { class: "MyList-title" }, [
          vue.createElementVNode("text", null, "\u6211\u521B\u5EFA\u7684\u6B4C\u5355"),
          vue.createVNode(_component_uni_icons, {
            class: "MyList-title-btn",
            onClick: $options.startAddList,
            type: "icon-add",
            customPrefix: "iconfont",
            size: "1.2rem",
            color: "#FFFFFF"
          }, null, 8, ["onClick"])
        ]),
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.myMusicLists, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "MyList-item",
            key: index,
            onClick: ($event) => $options.ToMusicList(index)
          }, [
            vue.createElementVNode("view", { class: "MyList-item-cover" }, [
              vue.createElementVNode("image", {
                src: item.listcover,
                mode: "aspectFill"
              }, null, 8, ["src"])
            ]),
            vue.createElementVNode("view", { class: "MyList-item-info" }, [
              vue.createElementVNode("text", { class: "MyList-item-info-title" }, vue.toDisplayString(item.listname), 1),
              vue.createElementVNode("text", { class: "MyList-item-info-describe" }, vue.toDisplayString(item.listinfo), 1)
            ])
          ], 8, ["onClick"]);
        }), 128))
      ])
    ]);
  }
  var my = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-3f753d44"]]);
  const _sfc_main$8 = {
    name: "login",
    data() {
      return {};
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " \u767B\u5F55\u7EC4\u4EF6 ");
  }
  var login = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7]]);
  const _sfc_main$7 = {
    name: "register",
    data() {
      return {};
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " \u6CE8\u518C ");
  }
  var register = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6]]);
  const _sfc_main$6 = {
    name: "localsearch",
    data() {
      return {
        noClick: true,
        isSearching: false,
        isFinished: false,
        searchContent: "",
        searchInterval: {}
      };
    },
    computed: __spreadValues(__spreadValues({}, mapState("Music", {
      all: (state2) => state2.all,
      searchPrograss: (state2) => state2.searchPrograss,
      searchTarget: (state2) => state2.searchTarget
    })), mapGetters("Music", ["allMusicCount"])),
    watch: {},
    methods: __spreadProps(__spreadValues(__spreadValues({}, mapActions("Music", ["getAll", "getAllCovers"])), mapMutations("Music", ["updateSearchPrograss"])), {
      startSearch() {
        this.isSearching = true;
        setTimeout(() => {
          this.getAll().then(() => {
            formatAppLog("log", "at components/localsearch/localsearch.vue:54", "\u5B8C\u6210\u626B\u63CF");
            this.isSearching = false;
            this.isFinished = true;
            clearInterval(this.searchInterval);
          }).catch(() => {
            formatAppLog("log", "at components/localsearch/localsearch.vue:60", "\u5B8C\u6210\u626B\u63CF");
            this.isSearching = false;
            this.isFinished = true;
          });
        }, 500);
        formatAppLog("log", "at components/localsearch/localsearch.vue:66", "\u6211\u6267\u884C\uFF01");
      }
    }),
    beforeUnmount() {
      formatAppLog("log", "at components/localsearch/localsearch.vue:70", "\u5F00\u59CB\u91CD\u7F6E\uFF01");
      this.updateSearchPrograss({ key: "isFinish", val: false });
      this.updateSearchPrograss({ key: "now", val: "" });
      this.updateSearchPrograss({ key: "startCount", val: 0 });
      this.updateSearchPrograss({ key: "count", val: 0 });
      this.updateSearchPrograss({ key: "skipCount", val: 0 });
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_2);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      !$data.isFinished ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "search"
      }, [
        vue.createVNode(_component_uni_icons, {
          class: "search-icon",
          type: "icon-harddisk",
          customPrefix: "iconfont",
          size: "128",
          color: "rgb(38,193,248)"
        }),
        vue.createElementVNode("text", { class: "search-text" }, [
          vue.createTextVNode(vue.toDisplayString($data.isSearching ? "\u6B63\u5728\u626B\u63CF" : "\u672A\u8FDB\u884C\u626B\u63CF"), 1),
          vue.withDirectives(vue.createElementVNode("text", { class: "loading" }, null, 512), [
            [vue.vShow, $data.isSearching]
          ])
        ]),
        vue.createElementVNode("button", {
          type: "default",
          plain: "true",
          loading: $data.isSearching,
          disabled: $data.isSearching,
          onClick: _cache[0] || (_cache[0] = (...args) => $options.startSearch && $options.startSearch(...args))
        }, "\u5F00\u59CB\u672C\u5730\u626B\u63CF", 8, ["loading", "disabled"])
      ])) : (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "search-result"
      }, [
        vue.createVNode(_component_uni_icons, {
          class: "search-result-icon",
          type: "icon-harddisk",
          customPrefix: "iconfont",
          size: "128",
          color: "rgb(38,193,248)"
        }),
        vue.createElementVNode("text", null, "\u626B\u63CF\u5B8C\u6210!"),
        vue.createElementVNode("text", null, [
          vue.createTextVNode("\u672C\u6B21\u626B\u63CF\u5230\u672C\u5730\u97F3\u4E50 "),
          vue.createElementVNode("text", { style: { "color": "#2979FF", "font-size": "1.2rem" } }, vue.toDisplayString(_ctx.searchPrograss.count), 1),
          vue.createTextVNode("\u9996\uFF0C\u5176\u4E2D\u65F6\u95F4\u8FC7\u77ED\u8FC7\u6EE4\u6389\u7684\u6B4C\u66F2\u6709 "),
          vue.createElementVNode("text", { style: { "color": "#ff557f", "font-size": "1.2rem" } }, vue.toDisplayString(_ctx.searchPrograss.skipCount), 1),
          vue.createTextVNode(" \u9996\uFF0C\u672C\u5730\u6B4C\u66F2\u65B0\u589E"),
          vue.createElementVNode("text", { style: { "color": "#ff5500", "font-size": "1.2rem" } }, vue.toDisplayString(_ctx.searchPrograss.count - _ctx.searchPrograss.startCount - _ctx.searchPrograss.skipCount), 1),
          vue.createTextVNode(" \u9996\u3002")
        ])
      ]))
    ]);
  }
  var localsearch = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-05e586a8"]]);
  const _sfc_main$5 = {
    name: "search",
    props: {
      searchRes: null
    },
    data() {
      return {};
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("scroll-view", { "scroll-y": "true" }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.searchRes, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", { key: index }, [
            vue.createElementVNode("text", null, vue.toDisplayString(item.title), 1)
          ]);
        }), 128))
      ])
    ]);
  }
  var search = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4]]);
  const _sfc_main$4 = {
    name: "detail",
    props: {},
    data() {
      return {};
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " \u8BE6\u60C5 ");
  }
  var detail = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3]]);
  const _sfc_main$3 = {
    name: "musicdetail",
    props: {
      tabHeight: Number,
      statusHeight: Number
    },
    data() {
      return {
        vol: 100,
        isChanging: false,
        nowVal: 0,
        time: "0:00/0:00",
        interval: {}
      };
    },
    beforeMount() {
      formatAppLog("log", "at components/musicdetail/musicdetail.vue:64", "\u6302\u8F7D\u524D");
      if (this.Player.src) {
        let _this = this;
        _this.changePrograss();
        _this.changeTime();
        if (this.isPlaying) {
          this.interval = setInterval(() => {
            _this.changePrograss();
            _this.changeTime();
          }, 100);
        }
      }
    },
    mounted() {
      this.getVolume();
    },
    computed: __spreadValues(__spreadValues({}, mapState({
      isPlaying: (state2) => state2.isPlaying,
      isEnd: (state2) => state2.isEnd,
      Player: (state2) => state2.Player,
      playMode: (state2) => state2.playMode
    })), mapState("Music", {
      playNow: (state2) => state2.playNow,
      musicList: (state2) => state2.musicList,
      nowLrc: (state2) => state2.nowLrc
    })),
    watch: {
      isPlaying: {
        handler(n, o) {
          if (n) {
            let _this = this;
            this.interval = setInterval(() => {
              _this.changePrograss();
              _this.changeTime();
            }, 500);
          } else {
            clearInterval(this.interval);
          }
          formatAppLog("log", "at components/musicdetail/musicdetail.vue:108", "isPlaying", n);
        }
      },
      isEnd: {
        handler(n, o) {
          formatAppLog("log", "at components/musicdetail/musicdetail.vue:114", "isEnd", n);
          if (n) {
            this.NextSong();
          }
        }
      }
    },
    methods: __spreadProps(__spreadValues({}, mapMutations([
      "Play",
      "Pause",
      "changeMode",
      "Seek",
      "PreSong",
      "NextSong"
    ])), {
      getVolume() {
        let vol = plus.device.getVolume();
        formatAppLog("log", "at components/musicdetail/musicdetail.vue:139", vol);
        this.vol = vol * 100;
      },
      setVolume(e) {
        let vol = e.detail.value / 100;
        plus.device.setVolume(vol);
        formatAppLog("log", "at components/musicdetail/musicdetail.vue:148", "\u8BBE\u7F6E\u97F3\u91CF\u6210\u529F");
      },
      convertTime(duration) {
        if (typeof duration === "string") {
          let arr = duration.split(":"), dur = 0;
          for (let i = arr.length - 1; i >= 0; i--) {
            dur += arr[i] * Math.pow(60, i);
          }
          return dur;
        } else {
          let seconds = parseInt(duration % 60), minutes = parseInt(duration % (60 * 60) / 60), hours = parseInt(duration / (60 * 60));
          return hours == 0 ? minutes + ":" + (seconds < 10 ? "0" + seconds : seconds) : (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
        }
      },
      changeTime() {
        var _this = this;
        let cur = _this.Player.currentTime, dur = _this.Player.duration;
        _this.time = _this.convertTime(cur) + "/" + _this.convertTime(dur);
      },
      prograssChanging() {
        this.isChanging = true;
      },
      prograssChanged(e) {
        this.isChanging = false;
        formatAppLog("log", "at components/musicdetail/musicdetail.vue:183", e.detail.value);
        let nowVal = e.detail.value;
        let newTime = nowVal / 100 * this.Player.duration;
        formatAppLog("log", "at components/musicdetail/musicdetail.vue:186", newTime);
        this.Seek(newTime);
      },
      changePrograss() {
        if (this.isChanging) {
          return;
        }
        let newVal = this.Player.currentTime / this.Player.duration * 100;
        this.nowVal = newVal;
      }
    })
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_2);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", {
        class: "music-detail",
        style: vue.normalizeStyle("height:calc(100vh - " + (44 + $props.statusHeight) + "px)")
      }, [
        vue.createElementVNode("view", { class: "music-detail-info" }, [
          vue.createElementVNode("view", { class: "music-detail-info-cover" }, [
            vue.createElementVNode("image", {
              src: _ctx.playNow.cover,
              mode: ""
            }, null, 8, ["src"])
          ]),
          vue.createElementVNode("view", { class: "music-detail-info-text" }, [
            vue.createElementVNode("text", { class: "music-detail-info-text-title" }, vue.toDisplayString(_ctx.playNow.title), 1),
            vue.createElementVNode("text", { class: "music-detail-info-text-author" }, vue.toDisplayString(_ctx.playNow.author), 1),
            vue.createElementVNode("text", { class: "music-detail-info-text-lrc" }, vue.toDisplayString(_ctx.nowLrc), 1)
          ])
        ]),
        vue.createElementVNode("view", { class: "music-detail-controls" }, [
          vue.createElementVNode("view", { class: "music-detail-controls-prograss" }, [
            vue.createElementVNode("slider", {
              value: $data.nowVal,
              min: "0",
              max: "100",
              "block-size": "8",
              "block-color": "#FFFFFF",
              backgroundColor: "#d2d3d3",
              activeColor: "#9ae7e7",
              onChanging: _cache[0] || (_cache[0] = ($event) => $options.prograssChanging()),
              onChange: _cache[1] || (_cache[1] = (...args) => $options.prograssChanged && $options.prograssChanged(...args))
            }, null, 40, ["value"]),
            vue.createElementVNode("view", { class: "music-detail-controls-prograss-label" }, [
              vue.createElementVNode("text", { class: "music-detail-controls-prograss-label-now" }, vue.toDisplayString($options.convertTime(_ctx.Player.currentTime)), 1),
              vue.createElementVNode("text", { class: "music-detail-controls-prograss-label-dur" }, vue.toDisplayString($options.convertTime(_ctx.Player.duration)), 1)
            ])
          ]),
          vue.createElementVNode("view", { class: "music-detail-controls-main" }, [
            vue.createVNode(_component_uni_icons, {
              type: "icon-" + _ctx.playMode,
              customPrefix: "iconfont",
              size: "28",
              color: "white",
              onClick: _cache[2] || (_cache[2] = ($event) => _ctx.changeMode())
            }, null, 8, ["type"]),
            vue.createVNode(_component_uni_icons, {
              type: "icon-presong",
              customPrefix: "iconfont",
              size: "28",
              color: "white",
              onClick: _cache[3] || (_cache[3] = ($event) => _ctx.PreSong())
            }),
            vue.createCommentVNode(" Play | Pause "),
            !_ctx.isPlaying ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
              key: 0,
              type: "icon-Play",
              customPrefix: "iconfont",
              size: "56",
              color: "white",
              onClick: _cache[4] || (_cache[4] = ($event) => _ctx.Play())
            })) : (vue.openBlock(), vue.createBlock(_component_uni_icons, {
              key: 1,
              type: "icon-Pause",
              customPrefix: "iconfont",
              size: "56",
              color: "white",
              onClick: _ctx.Pause
            }, null, 8, ["onClick"])),
            vue.createVNode(_component_uni_icons, {
              type: "icon-nextsong",
              customPrefix: "iconfont",
              size: "28",
              color: "white",
              onClick: _cache[5] || (_cache[5] = ($event) => _ctx.NextSong())
            }),
            vue.createVNode(_component_uni_icons, {
              type: "icon-playlist",
              customPrefix: "iconfont",
              size: "28",
              color: "white"
            })
          ])
        ])
      ], 4)
    ]);
  }
  var musicdetail = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-6de3ee1c"]]);
  const _sfc_main$2 = {
    name: "musiclist",
    data() {
      return {
        isChanging: false,
        nowVal: 0,
        time: "0:00/0:00",
        interval: {},
        isMore: false,
        moreId: 0,
        isDialog: false,
        dialog: { title: "\u63D0\u793A", content: "\u5185\u5BB9" },
        dialogSureCallback: {},
        dialogCancelCallback: {}
      };
    },
    computed: __spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, mapState("Music", {
      myFavorList: (state2) => state2.myFavorList,
      myMusicLists: (state2) => state2.myMusicLists,
      historyList: (state2) => state2.historyList,
      nowList: (state2) => state2.nowList,
      playNow: (state2) => state2.playNow,
      musicListFromX: (state2) => state2.musicList
    })), mapGetters("Music", ["musicInfo"])), mapState("Setting", {
      setting: (state2) => state2.setting
    })), mapGetters("Setting", ["isNight"])), mapState({
      Player: (state2) => state2.Player,
      isPlaying: (state2) => state2.isPlaying,
      isEnd: (state2) => state2.isEnd
    })), {
      themeColor() {
        if (this.isNight) {
          return "#FFF";
        } else {
          return "#FFF";
        }
      },
      musicList() {
        if (typeof this.nowList == "number") {
          return this.myMusicLists[this.nowList];
        } else {
          if (this.nowList == "myFavor") {
            return this.myFavorList;
          } else if (this.nowList == "history") {
            return this.historyList;
          }
        }
      },
      list() {
        if (typeof this.nowList == "number") {
          return this.myMusicLists[this.nowList].list;
        } else {
          if (this.nowList == "myFavor") {
            return this.myFavorList.list;
          } else if (this.nowList == "history") {
            return this.historyList.list;
          }
        }
      }
    }),
    watch: {
      isPlaying: {
        handler(n, o) {
          if (n) {
            let _this = this;
            this.interval = setInterval(() => {
              _this.changePrograss();
              _this.changeTime();
            }, 500);
          } else {
            clearInterval(this.interval);
          }
          formatAppLog("log", "at components/musiclist/musiclist.vue:202", "isPlaying", n);
        }
      },
      isEnd: {
        handler(n, o) {
          formatAppLog("log", "at components/musiclist/musiclist.vue:208", "isEnd", n);
          if (n) {
            this.NextSong();
          }
        }
      }
    },
    methods: __spreadProps(__spreadValues(__spreadValues({}, mapMutations([
      "Play",
      "Pause",
      "Seek",
      "NextSong",
      "PreSong"
    ])), mapActions("Music", [
      "playMusic"
    ])), {
      convertTime(duration) {
        if (typeof duration === "string") {
          let arr = duration.split(":"), dur = 0;
          for (let i = arr.length - 1; i >= 0; i--) {
            dur += arr[i] * Math.pow(60, i);
          }
          return dur;
        } else {
          let seconds = parseInt(duration % 60), minutes = parseInt(duration % (60 * 60) / 60), hours = parseInt(duration / (60 * 60));
          return hours == 0 ? minutes + ":" + (seconds < 10 ? "0" + seconds : seconds) : (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
        }
      },
      changeTime() {
        var _this = this;
        let cur = _this.Player.currentTime, dur = _this.Player.duration;
        _this.time = _this.convertTime(cur) + "/" + _this.convertTime(dur);
      },
      prograssChanging() {
        this.isChanging = true;
      },
      prograssChanged(e) {
        this.isChanging = false;
        formatAppLog("log", "at components/musiclist/musiclist.vue:259", e.detail.value);
        let nowVal = e.detail.value;
        let newTime = nowVal / 100 * this.Player.duration;
        formatAppLog("log", "at components/musiclist/musiclist.vue:262", newTime);
        this.Seek(newTime);
      },
      changePrograss() {
        if (this.isChanging) {
          return;
        }
        let newVal = this.Player.currentTime / this.Player.duration * 100;
        this.nowVal = newVal;
      },
      More(mid) {
        this.isMore = !this.isMore;
        this.moreId = mid;
      },
      ShowDialog(title, content, sure, cancel, sureCallback, cancelCallback, sureparam, cancelparam) {
        this.isDialog = true;
        this.dialog.title = title;
        this.dialog.content = content;
        this.dialog.btnSure = sure;
        this.dialog.btnCancel = cancel;
        this.dialogSureCallback = sureCallback;
        this.dialogCancelCallback = cancelCallback;
        this.dialogSureParam = sureparam;
        this.dialogCancelParam = cancelparam;
      },
      doSureCallback() {
        if (this.dialogSureCallback != null) {
          this.dialogSureCallback(this.dialogSureParam);
          this.dialogSureCallback = null;
        }
        this.isDialog = false;
      },
      doCancelCallback() {
        if (this.dialogCancelCallback != null) {
          this.dialogCancelCallback(this.dialogCancelParam);
          this.dialogCancelCallback = null;
        }
        this.isDialog = false;
      }
    }),
    beforeMount() {
      formatAppLog("log", "at components/musiclist/musiclist.vue:309", "\u6302\u8F7D\u524D");
      if (this.Player.src) {
        let _this = this;
        if (this.isPlaying) {
          this.interval = setInterval(() => {
            _this.changePrograss();
            _this.changeTime();
          }, 100);
        }
      }
    },
    mounted() {
      this.isShowList = true;
      setTimeout(() => {
        this.changeTime();
      }, 1e3);
    },
    beforeUnmount() {
      clearInterval(this.interval);
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_2);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" \u6B4C\u5355\u4FE1\u606F "),
      vue.createElementVNode("view", { class: "musicListInfo" }, [
        vue.createElementVNode("view", { class: "musicListInfo-left" }, [
          vue.createElementVNode("image", {
            class: "musicListInfo-cover",
            src: $options.musicList.listcover,
            mode: "aspectFill"
          }, null, 8, ["src"])
        ]),
        vue.createElementVNode("view", { class: "musicListInfo-right" }, [
          vue.createElementVNode("text", { class: "musicListInfo-title" }, vue.toDisplayString($options.musicList.listname), 1),
          vue.createElementVNode("text", { class: "musicListInfo-descript" }, vue.toDisplayString($options.musicList.listinfo), 1)
        ])
      ]),
      vue.createElementVNode("view", { class: "musicListControls" }, " \u4E00\u4E9B\u64CD\u4F5C\u6309\u94AE "),
      vue.createCommentVNode(" \u6B4C\u5355\u5185\u5BB9 "),
      $options.list[0] ? (vue.openBlock(), vue.createElementBlock("scroll-view", {
        key: 0,
        class: vue.normalizeClass([{ "musicList-night": _ctx.isNight }, "musicList"]),
        "scroll-y": "true",
        style: vue.normalizeStyle("height:calc(100% - 100rpx)")
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.list, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: vue.normalizeClass([_ctx.isPlaying && item.mid == _ctx.playNow.mid ? "music-item music-item-play" : "music-item"]),
            key: index
          }, [
            vue.createElementVNode("view", {
              class: "music-item-info",
              onClick: ($event) => _ctx.playMusic(item.mid)
            }, [
              vue.createElementVNode("text", { class: "info-title" }, vue.toDisplayString(item.title), 1),
              vue.createElementVNode("text", { class: "info-author" }, vue.toDisplayString(item.author) + "-" + vue.toDisplayString(item.albums), 1)
            ], 8, ["onClick"]),
            vue.createElementVNode("view", { class: "music-item-control" }, [
              vue.createVNode(_component_uni_icons, {
                class: "music-item-control-icon",
                color: $options.themeColor,
                type: "icon-more",
                customPrefix: "iconfont",
                size: "24",
                onClick: ($event) => $options.More(item.mid)
              }, null, 8, ["color", "onClick"])
            ])
          ], 2);
        }), 128)),
        vue.withDirectives(vue.createElementVNode("text", { id: "musicListButtom" }, "\u5DF2\u7ECF\u5230\u5E95\u4E86~", 512), [
          [vue.vShow, $options.list.length >= 10]
        ])
      ], 6)) : (vue.openBlock(), vue.createElementBlock("text", {
        key: 1,
        style: { "display": "block", "width": "100%", "height": "50px", "line-height": "50px", "text-align": "center", "color": "#FFFFFF" }
      }, "\u6682\u65E0\u6B4C\u66F2")),
      vue.createCommentVNode(" \u8BE6\u7EC6\u64CD\u4F5C\u5217\u8868 "),
      $data.isMore ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 2,
        class: vue.normalizeClass(["more", _ctx.isNight ? "more-night" : "more"])
      }, [
        vue.createElementVNode("view", { class: "more-info" }, [
          vue.createElementVNode("image", {
            src: _ctx.musicInfo($data.moreId).cover,
            mode: "aspectFill"
          }, null, 8, ["src"]),
          vue.createElementVNode("text", null, vue.toDisplayString(_ctx.musicInfo($data.moreId).title), 1)
        ]),
        vue.createElementVNode("view", { class: "more-btn" }, [
          vue.createVNode(_component_uni_icons, {
            class: "more-btn-icon",
            type: "icon-add",
            customPrefix: "iconfont",
            size: "28",
            color: "#000"
          }),
          vue.createElementVNode("text", null, "\u4E0B\u4E00\u9996\u64AD\u653E")
        ]),
        vue.createElementVNode("view", { class: "more-btn" }, [
          vue.createVNode(_component_uni_icons, {
            class: "more-btn-icon",
            type: "icon-add",
            customPrefix: "iconfont",
            size: "28",
            color: "#000"
          }),
          vue.createElementVNode("text", null, "\u52A0\u5165\u64AD\u653E\u5217\u8868")
        ]),
        vue.createElementVNode("view", { class: "more-btn" }, [
          vue.createVNode(_component_uni_icons, {
            class: "more-btn-icon",
            type: "icon-add",
            customPrefix: "iconfont",
            size: "28",
            color: "#000"
          }),
          vue.createElementVNode("text", null, "\u52A0\u5165\u6B4C\u5355")
        ]),
        vue.createElementVNode("view", {
          class: "more-btn",
          onClick: _cache[0] || (_cache[0] = ($event) => $options.ShowDialog("\u63D0\u793A", "\u662F\u5426\u8981\u5C06\u6B64\u6B4C\u66F2\u4ECE\u5217\u8868\u4E2D\u5220\u9664?\u6B64\u64CD\u4F5C\u4E0D\u4F1A\u5220\u9664\u672C\u5730\u6587\u4EF6\u3002", "\u786E\u5B9A", "\u53D6\u6D88", _ctx.deleteMusicItem, null, _ctx.moreIndex, null))
        }, [
          vue.createVNode(_component_uni_icons, {
            class: "more-btn-icon",
            type: "icon-add",
            customPrefix: "iconfont",
            size: "28",
            color: "#000"
          }),
          vue.createElementVNode("text", null, "\u5220\u9664\u6B64\u6B4C\u66F2")
        ]),
        vue.createElementVNode("view", { class: "more-btn" }, [
          vue.createVNode(_component_uni_icons, {
            class: "more-btn-icon",
            type: "icon-add",
            customPrefix: "iconfont",
            size: "28",
            color: "#000"
          }),
          vue.createElementVNode("text", null, "\u67E5\u770B\u8BE6\u60C5")
        ])
      ], 2)) : vue.createCommentVNode("v-if", true),
      $data.isMore ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 3,
        class: "more-other",
        onClick: _cache[1] || (_cache[1] = ($event) => $data.isMore = !$data.isMore)
      }, " \xA0 ")) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" \u6A21\u6001\u6846 "),
      $data.isDialog ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 4,
        class: "dialog"
      }, [
        vue.createElementVNode("view", { class: "dialog-title" }, [
          vue.createElementVNode("text", null, vue.toDisplayString($data.dialog.title), 1)
        ]),
        vue.createElementVNode("view", { class: "dialog-content" }, [
          vue.createElementVNode("text", null, vue.toDisplayString($data.dialog.content), 1)
        ]),
        vue.createElementVNode("view", { class: "dialog-btns" }, [
          vue.createElementVNode("view", {
            class: "dialog-btn",
            onClick: _cache[2] || (_cache[2] = ($event) => $options.doSureCallback())
          }, [
            vue.createElementVNode("text", null, vue.toDisplayString($data.dialog.btnSure), 1)
          ]),
          vue.createElementVNode("view", {
            class: "dialog-btn",
            onClick: _cache[3] || (_cache[3] = ($event) => $options.doCancelCallback())
          }, [
            vue.createElementVNode("text", null, vue.toDisplayString($data.dialog.btnCancel), 1)
          ])
        ])
      ])) : vue.createCommentVNode("v-if", true),
      $data.isDialog ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 5,
        class: "dialog-other"
      }, "\xA0")) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" \u97F3\u4E50\u64AD\u653E\u5668 "),
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["player", [_ctx.isNight ? "player-night" : "player"]])
      }, [
        vue.createCommentVNode(" \u5C01\u9762 "),
        vue.createElementVNode("view", { class: "player-cover" }, [
          vue.createElementVNode("image", {
            onClick: _cache[4] || (_cache[4] = ($event) => _ctx.$emit("to-page", "musicdetail")),
            src: _ctx.playNow.cover,
            mode: "aspectFit"
          }, null, 8, ["src"])
        ]),
        vue.createCommentVNode(" \u97F3\u4E50\u4FE1\u606F "),
        vue.createElementVNode("view", { class: "player-info" }, [
          vue.createElementVNode("view", { class: "player-info-top" }, [
            vue.createElementVNode("view", { class: "player-info-text" }, [
              vue.createElementVNode("text", null, vue.toDisplayString(_ctx.playNow.title + "-" + _ctx.playNow.author), 1)
            ]),
            vue.createElementVNode("view", { class: "player-info-time" }, [
              vue.createElementVNode("text", null, vue.toDisplayString($data.time), 1)
            ])
          ]),
          vue.createElementVNode("view", { class: "player-info-bottom" }, [
            vue.createElementVNode("view", { class: "player-info-prograss" }, [
              vue.createElementVNode("slider", {
                value: $data.nowVal,
                min: "0",
                max: "100",
                "block-size": "8",
                "block-color": "#FFFFFF",
                backgroundColor: "#d2d3d3",
                activeColor: "#9ae7e7",
                onChanging: _cache[5] || (_cache[5] = ($event) => $options.prograssChanging()),
                onChange: _cache[6] || (_cache[6] = (...args) => $options.prograssChanged && $options.prograssChanged(...args))
              }, null, 40, ["value"])
            ])
          ])
        ]),
        vue.createCommentVNode(" \u97F3\u4E50\u6309\u94AE "),
        vue.createElementVNode("view", { class: "player-controls" }, [
          !_ctx.isPlaying ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 0,
            color: $options.themeColor,
            type: "icon-Play",
            customPrefix: "iconfont",
            size: "28",
            onClick: _cache[7] || (_cache[7] = ($event) => _ctx.Play())
          }, null, 8, ["color"])) : (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 1,
            color: $options.themeColor,
            type: "icon-Pause",
            customPrefix: "iconfont",
            size: "28",
            onClick: _cache[8] || (_cache[8] = ($event) => _ctx.Pause())
          }, null, 8, ["color"]))
        ])
      ], 2)
    ]);
  }
  var musiclist = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-1d7bc1e8"]]);
  const _sfc_main$1 = {
    components: {
      login,
      register,
      music,
      my,
      search,
      localsearch,
      detail,
      musicdetail,
      musiclist
    },
    data() {
      return {
        nowPage: {},
        LastPid: 0,
        Tabbars: [],
        navPaddingHeight: "",
        mainHeight: "",
        isSetting: false,
        searchRes: "",
        searchContent: "",
        isQuit: false,
        isToPage: true,
        tabHeight: 60,
        statusBarHeight: 0,
        playerHeight: 0
      };
    },
    beforeMount() {
      this.nowPage = this.Pages.find((val) => val.PID == 0);
      this.Tabbars = this.Pages.filter((val) => val.isTabbar);
    },
    mounted() {
      this.autoHeight();
    },
    onLoad() {
      this.Init();
    },
    onReady() {
      this.$refs.ani.init({
        duration: 250,
        timingFunction: "linear",
        delay: 0,
        transformOrigin: "50% 50%"
      });
    },
    onPullDownRefresh() {
    },
    onBackPress(e) {
      let _this = this;
      if (_this.isQuit) {
        this.setLocalData();
        this.saveLastMusic();
        formatAppLog("log", "at pages/index/index.vue:183", "\u9000\u51FA");
        _this.AppQuit();
      }
      const mainId = [0, 1];
      if (mainId.indexOf(this.nowPage.PID) != -1) {
        uni.showToast({
          icon: "none",
          duration: 1500,
          title: "\u518D\u6309\u4E00\u6B21\u9000\u51FA\uFF01",
          position: "bottom",
          success() {
            _this.isQuit = true;
            setTimeout(() => {
              _this.isQuit = false;
              formatAppLog("log", "at pages/index/index.vue:198", "\u91CD\u7F6E\u9000\u51FA");
            }, 1500);
          }
        });
      } else {
        _this.Back();
      }
      if (this.isSetting) {
        this.isSetting = false;
        formatAppLog("log", "at pages/index/index.vue:208", "\u9000\u51FA\u8BBE\u7F6E");
      }
      return true;
    },
    watch: {
      searchContent: {
        handler(n, o) {
          if (n != "") {
            this.Search();
          }
        }
      },
      playNow: {
        handler(n, o) {
          formatAppLog("log", "at pages/index/index.vue:225", "player\u53D8\u5316");
          if (n.src == void 0 || n.mid == -1) {
            return;
          }
          if (n.src != o.src) {
            let title = this.playNow.title, cover = this.playNow.cover, src = this.playNow.src, mid = this.playNow.mid;
            setTimeout(() => {
              this.isNeedCover({ "cover": cover, "title": title, "src": src, "mid": mid }).then(() => {
                formatAppLog("log", "at pages/index/index.vue:236", "\u83B7\u53D6\u5B8C\u6210");
              }).catch(() => {
                formatAppLog("log", "at pages/index/index.vue:239", "\u4E0D\u9700\u8981\u8FDB\u884C\u8F6Ccover");
              });
            }, 1e3);
            formatAppLog("log", "at pages/index/index.vue:242", "\u6211\u6267\u884C\u4E86");
          }
        }
      }
    },
    computed: __spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, mapState({
      pages: (state2) => state2.pages,
      Pages: (state2) => state2.Pages,
      Player: (state2) => state2.Player
    })), mapGetters("Music", ["searchByName"])), mapState("User", {
      isLogin: (state2) => state2.isLogin,
      user: (state2) => state2.user
    })), mapState("Setting", {
      setting: (state2) => state2.setting
    })), mapGetters("Setting", ["isNight"])), mapState("Music", {
      playNow: (state2) => state2.playNow,
      lastMusic: (state2) => state2.pages
    })), {
      musicHeight() {
        return "height:calc(100vh - " + (uni.getSystemInfoSync().statusBarHeight + 44 + this.tabHeight + this.playerHeight) + "px)";
      }
    }),
    methods: __spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, mapActions("User", ["login", "register"])), mapMutations("Setting", ["toggleNight"])), mapActions("Music", ["search", "getCover", "isNeedCover"])), mapMutations("Music", ["saveLastMusic", "getLastMusic", "getLocalData", "setLocalData", "updateMusicList"])), mapMutations(["InitPlayer"])), {
      Init() {
        uni.showLoading({
          mask: true,
          title: "\u521D\u59CB\u5316\u4E2D..."
        });
        this.getLocalData();
        this.updateMusicList();
        this.getLastMusic();
        this.InitPlayer();
        uni.hideLoading();
      },
      ToPage(p) {
        this.isSetting = false;
        let pid = p;
        if (typeof pid === "string") {
          pid = this.pages[pid];
        }
        if (pid == this.nowPage.PID) {
          return;
        }
        this.LastPid = this.nowPage.PID;
        let newPage = this.Pages.find((item) => item.PID == pid);
        this.nowPage = newPage;
        this.isToPage = false;
        setTimeout(() => {
          this.isToPage = true;
        }, 0);
        formatAppLog("log", "at pages/index/index.vue:313", "\u8FDB\u5165" + pid);
      },
      Back() {
        let pid = this.LastPid;
        let newPage = this.Pages.find((item) => item.PID == pid);
        this.nowPage = newPage;
        this.isToPage = false;
        setTimeout(() => {
          this.isToPage = true;
        }, 0);
        formatAppLog("log", "at pages/index/index.vue:325", "\u8FD4\u56DE" + pid);
      },
      Edit() {
        formatAppLog("log", "at pages/index/index.vue:329", "\u5F00\u542F\u7F16\u8F91\u6A21\u5F0F");
      },
      SunOrNight() {
        this.toggleNight();
        this.isSetting = false;
        this.isToPage = false;
        setTimeout(() => {
          this.isToPage = true;
        }, 25);
      },
      AppQuit() {
        plus.runtime.quit();
      },
      AppRestart() {
        plus.runtime.restart();
      },
      handleFunc(m, parms) {
        const _this = this;
        let methods = this.$options.methods;
        if (parms instanceof Array) {
          methods[m].bind(_this, ...parms)();
        } else {
          methods[m].bind(_this, parms)();
        }
      },
      autoHeight() {
        let dom = uni.createSelectorQuery().select(".tab-bar");
        dom.fields({
          size: true
        }, (res) => {
          if (!res) {
            return;
          }
          this.navPaddingHeight = "height:" + (uni.getSystemInfoSync().statusBarHeight + 44) + "px";
          this.mainHeight = "height:calc(100vh - " + (uni.getSystemInfoSync().statusBarHeight + 44 + res.height) + "px)";
          this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
          this.tabHeight = res.height;
        }).exec();
        let p = uni.createSelectorQuery().select(".player");
        p.fields({
          size: true
        }, (res) => {
          if (!res) {
            return;
          }
          this.playerHeight = res.height;
        }).exec();
      },
      ani() {
        this.$refs.ani.step({
          opacity: 1
        }, {
          duration: 500,
          timingFunction: "linear",
          delay: 0,
          transformOrigin: "50% 50%"
        });
        this.$refs.ani.run(() => {
          formatAppLog("log", "at pages/index/index.vue:401", "\u52A8\u753B\u6267\u884C");
        });
      },
      notification() {
        plus.android.importClass("android.app.Notification");
      },
      Search() {
        this.searchRes = this.searchByName(this.searchContent);
      },
      toggleSetting() {
        this.isSetting = !this.isSetting;
      },
      toDetail() {
        if (!this.isLogin) {
          this.ToPage("login");
        } else {
          this.ToPage("detail");
        }
      }
    })
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_nav_bar = resolveEasycom(vue.resolveDynamicComponent("uni-nav-bar"), __easycom_0);
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_1);
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createCommentVNode(" \u5BFC\u822A\u680F "),
      vue.createVNode(_component_uni_nav_bar, {
        backgroundColor: "rgba(255,255,255,0)",
        fixed: "true",
        shadow: "false",
        statusBar: "true",
        border: "false",
        title: $data.nowPage.title,
        leftIcon: $data.nowPage.navLeft != void 0 ? $data.nowPage.navLeft.icon : void 0,
        rightIcon: $data.nowPage.navRight != void 0 ? $data.nowPage.navRight.icon : void 0,
        onClickLeft: _cache[1] || (_cache[1] = ($event) => $data.nowPage.navLeft ? $options.handleFunc($data.nowPage.navLeft.event, $data.nowPage.navLeft.parms) : ""),
        onClickRight: _cache[2] || (_cache[2] = ($event) => $data.nowPage.navRight ? $options.handleFunc($data.nowPage.navRight.event, $data.nowPage.navRight.parms) : ""),
        leftWidth: $data.nowPage.navLeft != void 0 ? $data.nowPage.navLeft.width : void 0,
        rightWidth: $data.nowPage.navRight != void 0 ? $data.nowPage.navRight.width : void 0,
        dark: _ctx.isNight
      }, {
        default: vue.withCtx(() => [
          vue.createCommentVNode(" \u8FD9\u91CC\u53EA\u80FD\u7528v-if \u4E0D\u7136\u65E0\u6CD5\u6B63\u5E38\u663E\u793A\u6807\u9898  \u5E76\u4E14\u53EA\u80FD\u81EA\u5B9A\u4E49style "),
          $data.nowPage.title === null ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            style: { "display": "flex", "flex-direction": "row", "justify-content": "center", "align-items": "center", "width": "100%", "height": "100%" }
          }, [
            vue.withDirectives(vue.createElementVNode("input", {
              type: "text",
              style: { "display": "block", "margin": "0", "padding": "1rpx 1em 1rpx 0", "background-color": "rgba(255,255,255,0.3)", "color": "#EEE", "width": "100%", "height": "calc(100% - 30rpx)", "border-radius": "30rpx", "text-indent": "1em" },
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchContent = $event),
              placeholder: "\u6309\u5173\u952E\u8BCD\u641C\u7D22\u6B4C\u66F2",
              "placeholder-style": "color:rgba(255,255,255,0.5)"
            }, null, 512), [
              [vue.vModelText, $data.searchContent]
            ])
          ])) : vue.createCommentVNode("v-if", true)
        ]),
        _: 1
      }, 8, ["title", "leftIcon", "rightIcon", "leftWidth", "rightWidth", "dark"]),
      vue.createElementVNode("view", {
        class: vue.normalizeClass([_ctx.isNight ? "nav-padding-night" : "nav-padding"]),
        style: vue.normalizeStyle($data.navPaddingHeight)
      }, [
        vue.createElementVNode("image", {
          src: _ctx.setting.backgroundSrc,
          style: vue.normalizeStyle(_ctx.setting.backgroundStyle),
          mode: "aspectFill"
        }, null, 12, ["src"])
      ], 6),
      vue.createElementVNode("view", {
        class: vue.normalizeClass([_ctx.isNight ? "Background-night" : "Background"])
      }, [
        vue.createElementVNode("image", {
          src: _ctx.setting.backgroundSrc,
          style: vue.normalizeStyle(_ctx.setting.backgroundStyle),
          mode: "aspectFill"
        }, null, 12, ["src"])
      ], 2),
      vue.createCommentVNode(" \u4E3B\u663E\u793A\u754C\u9762 "),
      vue.createElementVNode("view", {
        class: vue.normalizeClass([_ctx.isNight ? "main-night" : "main"]),
        style: vue.normalizeStyle($data.nowPage.PID == 0 ? $options.musicHeight : $data.nowPage.hasTabbar ? $data.mainHeight : "height:calc(100vh - " + (44 + $data.statusBarHeight) + "px)")
      }, [
        vue.createVNode(_component_uni_transition, {
          ref: "ani",
          styles: { "opacity": "1" },
          show: $data.isToPage,
          onChange: $options.ani
        }, {
          default: vue.withCtx(() => [
            (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($data.nowPage.pageName), {
              onToPage: $options.ToPage,
              tabHeight: $data.tabHeight,
              statusHeight: $data.statusBarHeight,
              ref: $data.nowPage.pageName,
              searchRes: $data.searchRes
            }, null, 8, ["onToPage", "tabHeight", "statusHeight", "searchRes"]))
          ]),
          _: 1
        }, 8, ["show", "onChange"])
      ], 6),
      vue.createCommentVNode(" \u8BBE\u7F6E\u9762\u677F "),
      vue.createVNode(_component_uni_transition, {
        "mode-class": "slide-left",
        show: $data.isSetting,
        class: vue.normalizeClass([{ "setting-night": _ctx.isNight }, "setting"])
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("scroll-view", { "scroll-y": "true" }, [
            vue.createElementVNode("view", { class: "setting-user" }, [
              vue.createElementVNode("image", {
                class: vue.normalizeClass([{ "setting-user-background-night": _ctx.isNight, "setting-user-background": !_ctx.isNight }]),
                src: "/static/Image/background1.jpg",
                mode: "aspectFill"
              }, null, 2),
              vue.createElementVNode("image", {
                class: "setting-user-headpic",
                src: "/static/Image/background3.png",
                mode: "aspectFill",
                onClick: _cache[3] || (_cache[3] = ($event) => $options.toDetail())
              }),
              vue.createElementVNode("text", { class: "setting-user-name" }, vue.toDisplayString(_ctx.isLogin ? _ctx.user.username : "\u672A\u767B\u5F55"), 1)
            ]),
            vue.createElementVNode("view", {
              class: vue.normalizeClass(_ctx.isNight ? "setting-div-night" : "setting-div")
            }, [
              vue.createElementVNode("view", {
                class: "btn",
                onClick: _cache[4] || (_cache[4] = ($event) => $options.ToPage("localsearch"))
              }, [
                vue.createElementVNode("text", null, "\u626B\u63CF\u672C\u5730\u97F3\u4E50")
              ])
            ], 2),
            vue.createElementVNode("view", {
              class: vue.normalizeClass(_ctx.isNight ? "setting-div-night" : "setting-div")
            }, [
              vue.createCommentVNode(' <view class="btn" @click="SortMusicList()"><text>\u97F3\u4E50\u6392\u5E8F</text></view> '),
              vue.createElementVNode("view", { class: "btn" }, [
                vue.createElementVNode("text", null, "\u591C\u95F4\u6A21\u5F0F"),
                vue.createElementVNode("switch", {
                  color: "#bfbfbf",
                  checked: _ctx.isNight,
                  onChange: _cache[5] || (_cache[5] = ($event) => $options.SunOrNight())
                }, null, 40, ["checked"])
              ])
            ], 2),
            vue.createElementVNode("view", {
              class: vue.normalizeClass(_ctx.isNight ? "setting-div-night" : "setting-div")
            }, [
              vue.createCommentVNode(' <view class="btn" @click="SettingMore()"><text>\u66F4\u591A</text></view> ')
            ], 2),
            vue.createElementVNode("view", {
              class: vue.normalizeClass(_ctx.isNight ? "setting-div-night" : "setting-div")
            }, [
              vue.createElementVNode("view", {
                class: "btn",
                onClick: _cache[6] || (_cache[6] = ($event) => $options.AppRestart())
              }, [
                vue.createElementVNode("text", null, "\u91CD\u542F\u5E94\u7528")
              ]),
              vue.createElementVNode("view", {
                class: "btn",
                onClick: _cache[7] || (_cache[7] = ($event) => $options.AppQuit())
              }, [
                vue.createElementVNode("text", null, "\u9000\u51FA")
              ])
            ], 2)
          ])
        ]),
        _: 1
      }, 8, ["show", "class"]),
      vue.createVNode(_component_uni_transition, {
        "mode-class": "fade",
        show: $data.isSetting,
        class: "setting-other",
        onClick: _cache[8] || (_cache[8] = ($event) => $options.toggleSetting())
      }, null, 8, ["show"]),
      vue.createCommentVNode(" Tabbar "),
      vue.withDirectives(vue.createElementVNode("view", {
        class: vue.normalizeClass([_ctx.isNight ? "tab-bar-night" : "tab-bar"])
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.Tabbars, (item) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: vue.normalizeClass([{ "tab-item-active": item.PID == $data.nowPage.PID }, "tab-item"]),
            key: item.PID,
            onClick: ($event) => $options.ToPage(item.PID)
          }, [
            vue.createVNode(_component_uni_icons, {
              type: item.icon,
              customPrefix: "iconfont",
              size: "24",
              class: vue.normalizeClass([{ "tab-item-icon-active": item.PID == $data.nowPage.PID }, "tab-item-icon"])
            }, null, 8, ["type", "class"]),
            vue.createElementVNode("text", null, vue.toDisplayString(item.title), 1)
          ], 10, ["onClick"]);
        }), 128))
      ], 2), [
        [vue.vShow, $data.nowPage.hasTabbar]
      ])
    ]);
  }
  var PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-57280228"]]);
  if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
    Promise.prototype.finally = function(callback) {
      const promise = this.constructor;
      return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      }));
    };
  }
  if (uni && uni.base64ToArrayBuffer) {
    ArrayBuffer = uni.base64ToArrayBuffer("").constructor;
  }
  if (uni.restoreGlobal) {
    uni.restoreGlobal(vue__namespace, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
  }
  __definePage("pages/index/index", PagesIndexIndex);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  function noMoreClick(methods, info) {
    let that = this;
    if (that.noClick) {
      that.noClick = false;
      if (info && info !== "") {
        methods(info);
      } else {
        methods();
      }
      setTimeout(() => {
        that.noClick = true;
      }, 2e3);
    }
  }
  var common = {
    noMoreClick
  };
  const users = [{
    uid: 0,
    username: "wh131462",
    nickname: "VueMonopoly",
    motto: "\u52C7\u6562\u505A\u81EA\u5DF1~",
    password: "123456",
    Rtime: new Date("1998/11/22 22:55:55")
  }];
  var api = {
    async getUser(uid) {
      await wait(100);
      let user = await users.find(function(user2) {
        return user2.username === u;
      });
      return user;
    },
    async login(u2, p) {
      await wait(100);
      let res = {};
      let user = users.find(function(user2) {
        return user2.username === u2;
      });
      if (u2 == user.username) {
        if (p == user.password) {
          res.uid = user.uid;
          res.state = 1;
        } else {
          res.state = -1;
          res.err = "Password Error!";
        }
      } else {
        res.state = -1;
        err = "Non-User";
      }
      return JSON.stringify(res);
    },
    async register(u2, p) {
      await wait(100);
      let res = {};
      let id = users.length, time = new Date().now();
      users.push({
        uid: id,
        username: u2,
        nickname: "",
        motto: "",
        password: p,
        Rtime: time
      });
      res.uid = id;
      res.state = 1;
      return JSON.stringify(res);
    }
  };
  function wait(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  const state$2 = () => ({
    user: {
      uid: -1,
      headpic: "",
      username: "",
      nickname: "",
      motto: "",
      Rtime: 0
    },
    isLogin: false
  });
  const getters$2 = {
    getUserinfo: (state2) => {
      if (state2.isLogin) {
        return state2.user;
      } else {
        return null;
      }
    },
    getIsLogin: (state2, getters2) => {
      return state2.isLogin;
    }
  };
  const actions$2 = {
    async login({ commit, state: state2 }, { username, password }) {
      let res = await api.login(username, password);
      if (res.state == 1) {
        let user = await api.getUser(res.uid);
        commit("setUser", user);
        commit("isLogin", true);
        return { state: true, msg: "\u767B\u5F55\u6210\u529F" };
      } else {
        return { state: false, msg: res.err };
      }
    },
    async register({ commit, state: state2 }, { username, password }) {
      let res = await api.register(username, password);
      if (res.state == 1) {
        return { state: true, msg: "\u6CE8\u518C\u6210\u529F" };
      } else {
        return { state: false, msg: res.err };
      }
    }
  };
  const mutations$2 = {
    setUser(state2, user) {
      state2.user = user;
    },
    isLogin(state2, is) {
      state2.isLogin = is;
    }
  };
  var User = {
    namespaced: true,
    state: state$2,
    getters: getters$2,
    actions: actions$2,
    mutations: mutations$2
  };
  const state$1 = () => ({
    setting: {
      isNight: false,
      backgroundSrc: "../../static/Image/background3.png",
      backgroundStyle: ""
    }
  });
  const getters$1 = {
    isNight(state2) {
      return state2.isNight;
    }
  };
  const actions$1 = {};
  const mutations$1 = {
    toggleNight(state2) {
      state2.isNight = !state2.isNight;
      formatAppLog("log", "at store/modules/setting.js:29", "\u5207\u6362\u6A21\u5F0F", state2.isNight);
    },
    getLocalSetting(state2) {
      try {
        const res = uni.getStorageSync("Setting");
        if (res) {
          formatAppLog("log", "at store/modules/setting.js:36", res);
        }
      } catch (e) {
        formatAppLog("log", "at store/modules/setting.js:39", e);
      }
    },
    setLocalSetting(state2) {
      try {
        uni.setStorageSync("Setting", state2.setting);
        formatAppLog("log", "at store/modules/setting.js:46", "\u4FDD\u5B58\u6210\u529F");
      } catch (e) {
        formatAppLog("log", "at store/modules/setting.js:49", e);
      }
    }
  };
  var Setting = {
    namespaced: true,
    state: state$1,
    getters: getters$1,
    actions: actions$1,
    mutations: mutations$1
  };
  const state = () => ({
    lastMusic: {},
    playNow: {},
    defaultCover: "../../static/Image/cover.png",
    nowLrc: "\u6B4C\u8BCD",
    all: [],
    musicList: [],
    nowList: "",
    myFavorList: {
      listname: "\u6211\u559C\u6B22\u7684\u97F3\u4E50",
      listcover: "../../static/Image/background1.jpg",
      listinfo: "\u4EC5\u4EC5\u53EA\u662F\u56E0\u4E3A\u559C\u6B22......",
      listtags: [],
      listCreator: "",
      list: []
    },
    historyList: {
      listname: "\u5386\u53F2\u6B4C\u5355",
      listcover: "../../static/Image/background1.jpg",
      listinfo: "\u6211\u66FE\u7ECF\u542C\u89C1......",
      listtags: [],
      listCreator: "",
      list: []
    },
    myMusicLists: [{
      listname: "\u81EA\u5B9A\u4E49\u6B4C\u5355",
      listcover: "../../static/Image/background1.jpg",
      listinfo: "\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684\u6B4C\u5355",
      listtags: ["\u6CBB\u6108"],
      listCreator: "wh131462",
      list: []
    }, {
      listname: "\u81EA\u5B9A\u4E49\u6B4C\u53551",
      listcover: "../../static/Image/background1.jpg",
      listinfo: "\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684\u6B4C\u53551",
      listtags: ["\u6CBB\u6108"],
      listCreator: "wh131462",
      list: []
    }],
    searchPrograss: {
      isFinish: false,
      now: "",
      startCount: 0,
      count: 0,
      skipCount: 0
    },
    searchTarget: ""
  });
  const getters = {
    allMusicCount(state2) {
      return state2.all.length;
    },
    searchByName: (state2) => (name) => {
      formatAppLog("log", "at store/modules/music.js:74", "\u641C\u7D22", name);
      return state2.musicList.filter((music2) => {
        formatAppLog("log", "at store/modules/music.js:76", music2.title);
        return music2.title.includes(name);
      });
    },
    musicInfo: (state2, getters2, rootState) => (mid) => {
      if (mid == -1) {
        return rootState.defaultMusic;
      }
      return state2.musicList.find((m) => m.mid == mid);
    }
  };
  const actions = {
    async search({
      commit,
      state: state2,
      getters: getters2
    }, {
      searchContent
    }) {
      let res = await getters2.searchByName(searchContent);
      return res;
    },
    async playMusic({
      state: state2,
      rootState,
      commit
    }, mid) {
      if (mid == -1) {
        state2.playNow = rootState.defaultMusic;
        rootState.isPlaying = false;
        rootState.Player.src = state2.playNow.src;
        commit("Play", null, {
          root: true
        });
        commit("addToHistory");
        return;
      }
      state2.playNow = await state2.musicList.find((m) => m.mid == mid);
      rootState.isPlaying = false;
      rootState.Player.src = state2.playNow.src;
      commit("Play", null, {
        root: true
      });
      commit("addToHistory");
    },
    getLocalCoverById({
      state: state2
    }, albumId) {
      try {
        const MediaStore = plus.android.importClass("android.provider.MediaStore");
        const ContentResolver = plus.android.importClass("android.content.ContentResolver");
        const main = plus.android.runtimeMainActivity();
        plus.android.importClass(main.getContentResolver());
        let cursor = plus.android.invoke(main.getContentResolver(), "query", MediaStore.Audio.Albums.EXTERNAL_CONTENT_URI, [MediaStore.Audio.Albums._ID, MediaStore.Audio.Albums.ALBUM_ART], MediaStore.Audio.Albums._ID + "=?", albumId, null);
        formatAppLog("log", "at store/modules/music.js:140", cursor);
        let cover;
        formatAppLog("log", "at store/modules/music.js:142", "\u67E5\u8BE2", albumId);
        if (plus.android.invoke(cursor, "moveToFirst")) {
          let path = plus.android.invoke(cursor, "getString", plus.android.invoke(cursor, "getColumnIndex", MediaStore.Audio.Albums.ALBUM_ART));
          formatAppLog("log", "at store/modules/music.js:146", path);
          cover = path;
        }
        return cover;
      } catch (e) {
        formatAppLog("log", "at store/modules/music.js:153", e);
        return null;
      }
    },
    getLocalCover({
      state: state2
    }, albums) {
      getArtwork(context, song_id, album_id, true);
    },
    async isNeedCover({
      state: state2,
      commit,
      dispatch
    }, {
      cover,
      title,
      src,
      mid
    }) {
      return new Promise((resolve, reject) => {
        if (cover != state2.defaultCover) {
          reject("rejected");
        } else {
          dispatch("getCover", {
            "title": title,
            "src": src,
            "mid": mid
          });
          resolve("resolved");
        }
      });
    },
    async getCover({
      state: state2,
      commit
    }, {
      title,
      src,
      mid
    }) {
      try {
        let main = plus.android.runtimeMainActivity();
        let Context = plus.android.importClass("android.content.Context");
        let MediaMetadataRetriever = plus.android.importClass("android.media.MediaMetadataRetriever");
        let Bitmap = plus.android.importClass("android.graphics.Bitmap");
        let BitmapFactory = plus.android.importClass("android.graphics.BitmapFactory");
        let url = plus.io.convertAbsoluteFileSystem(src);
        formatAppLog("log", "at store/modules/music.js:320", "url", url);
        let mediaMetadataRetriever = plus.android.newObject("android.media.MediaMetadataRetriever");
        mediaMetadataRetriever.setDataSource(url);
        let pic = mediaMetadataRetriever.getEmbeddedPicture();
        formatAppLog("log", "at store/modules/music.js:326", "pic null", pic == null);
        if (pic == null) {
          formatAppLog("log", "at store/modules/music.js:329", "\u91CA\u653E\u5BF9\u8C61", title, src);
          mediaMetadataRetriever.release();
          return;
        }
        formatAppLog("log", "at store/modules/music.js:333", "\u5C06\u8981\u8F6C\u5316\u4E3Abim", title);
        let bim = BitmapFactory.decodeByteArray(pic, 0, pic.length);
        formatAppLog("log", "at store/modules/music.js:335", "bim", bim);
        let File = plus.android.importClass("java.io.File");
        let FileOutputStream = plus.android.importClass("java.io.FileOutputStream");
        let dir = plus.io.convertLocalFileSystemURL("_doc/");
        let f = new File(dir, title + ".png");
        formatAppLog("log", "at store/modules/music.js:343", "f", f);
        let albumSrc = dir + title + ".png";
        formatAppLog("log", "at store/modules/music.js:345", "\u5C06\u8981\u5904\u7406", title);
        if (f.exists()) {
          formatAppLog("log", "at store/modules/music.js:347", "\u5DF2\u7ECF\u5B58\u5728", albumSrc);
          f.delete();
        }
        let out = new FileOutputStream(f);
        bim.compress(Bitmap.CompressFormat.PNG, 100, out);
        formatAppLog("log", "at store/modules/music.js:353", "compress");
        out.flush();
        formatAppLog("log", "at store/modules/music.js:355", "flush");
        out.close();
        formatAppLog("log", "at store/modules/music.js:357", "close");
        formatAppLog("log", "at store/modules/music.js:359", "\u91CA\u653E\u5BF9\u8C61", title, src);
        mediaMetadataRetriever.release();
        formatAppLog("log", "at store/modules/music.js:361", mid, albumSrc);
        commit("setCover", {
          "mid": mid,
          "cover": albumSrc
        });
      } catch (e) {
        formatAppLog("log", "at store/modules/music.js:367", e);
        return;
      }
    },
    async getAll({
      state: state2,
      getters: getters2,
      dispatch,
      commit
    }) {
      formatAppLog("log", "at store/modules/music.js:378", "\u5F00\u59CB\u626B\u63CF");
      let main = plus.android.runtimeMainActivity();
      let id = getters2.allMusicCount;
      if (plus.os.name == "Android") {
        plus.android.importClass("android.os.Build");
        let MediaStore = plus.android.importClass("android.provider.MediaStore");
        plus.android.importClass(main.getContentResolver());
        let cursor = main.getContentResolver().query(MediaStore.Audio.Media.EXTERNAL_CONTENT_URI, [
          MediaStore.Audio.Media.TITLE,
          MediaStore.Audio.Media.ALBUM,
          MediaStore.Audio.Media.ARTIST,
          MediaStore.Audio.Media.YEAR,
          MediaStore.Audio.Media.DATA,
          MediaStore.Audio.Media.DURATION,
          MediaStore.Audio.Media.ALBUM_ID
        ], null, null, MediaStore.Audio.Media.DEFAULT_SORT_ORDER);
        plus.android.importClass(cursor);
        cursor.moveToFirst();
        if (cursor != null) {
          commit("updateSearchPrograss", {
            key: "isFinish",
            val: false
          });
          commit("updateSearchPrograss", {
            key: "startCount",
            val: getters2.allMusicCount
          });
          commit("updateSearchPrograss", {
            key: "count",
            val: 0
          });
          while (cursor.moveToNext()) {
            let data = [];
            data["title"] = cursor.getString(cursor.getColumnIndex(MediaStore.Audio.Media.TITLE));
            data["albums"] = cursor.getString(cursor.getColumnIndex(MediaStore.Audio.Media.ALBUM));
            data["artist"] = cursor.getString(cursor.getColumnIndex(MediaStore.Audio.Media.ARTIST));
            data["year"] = cursor.getString(cursor.getColumnIndex(MediaStore.Audio.Media.YEAR));
            data["src"] = cursor.getString(cursor.getColumnIndex(MediaStore.Audio.Media.DATA));
            data["duration"] = cursor.getString(cursor.getColumnIndex(MediaStore.Audio.Media.DURATION));
            data["albumId"] = cursor.getString(cursor.getColumnIndex(MediaStore.Audio.Media.ALBUM_ID));
            commit("updateSearchPrograss", {
              key: "count",
              val: ++state2.searchPrograss.count
            });
            if (state2.all.findIndex((m) => m.src == data["src"]) != -1) {
              formatAppLog("log", "at store/modules/music.js:435", data["title"] + "\u5DF2\u5B58\u5728");
              continue;
            }
            if (parseInt(data["duration"]) < 3e4 || data["duration"] == null) {
              formatAppLog("log", "at store/modules/music.js:439", data["title"] + " duration:" + data["duration"]);
              commit("updateSearchPrograss", {
                key: "skipCount",
                val: ++state2.searchPrograss.skipCount
              });
              continue;
            }
            let obj = {
              "mid": id++,
              "cover": "../../static/Image/cover.png",
              "title": data["title"],
              "author": data["artist"],
              "albums": data["albums"],
              "albumId": data["albumId"],
              "year": data["year"],
              "duration": data["duration"],
              "src": data["src"],
              "lrc": ""
            };
            formatAppLog("log", "at store/modules/music.js:460", obj);
            commit("addSong", obj);
          }
          cursor.close();
          commit("updateSearchPrograss", {
            key: "isFinish",
            val: true
          });
          commit("updateMusicList");
        }
      }
    }
  };
  const mutations = {
    setCover(state2, {
      index,
      mid,
      cover
    }) {
      let operation;
      formatAppLog("log", "at store/modules/music.js:485", "\u672C\u6B21\u63A5\u6536\u5230\u7684\u53C2\u6570\uFF1A", index, mid, cover);
      if (mid == void 0) {
        operation = state2.all[index].mid;
        formatAppLog("log", "at store/modules/music.js:488", "\u901A\u8FC7index\u8BBE\u7F6Ecover\u4E3A" + cover);
        state2.all[index].cover = cover;
        state2.musicList.find((m) => {
          return m.mid == operation;
        }).cover = cover;
      } else {
        operation = mid;
        formatAppLog("log", "at store/modules/music.js:495", "\u901A\u8FC7mid\u8BBE\u7F6Ecover\u4E3A" + cover);
        state2.all.find((m) => {
          return m.mid == mid;
        }).cover = cover;
        state2.musicList.find((m) => {
          return m.mid == mid;
        }).cover = cover;
      }
      if (state2.playNow.mid == operation) {
        state2.playNow.cover = cover;
      }
    },
    getLocalData(state2) {
      try {
        const res = uni.getStorageSync("all");
        if (res) {
          formatAppLog("log", "at store/modules/music.js:514", "\u83B7\u53D6\u4E0A\u6B21\u64AD\u653E\u6B4C\u66F2\u6210\u529F", res);
          state2.all = res;
        }
      } catch (e) {
        state2.all = null;
        formatAppLog("log", "at store/modules/music.js:519", e);
      }
    },
    setLocalData(state2) {
      try {
        uni.setStorageSync("all", state2.all);
        formatAppLog("log", "at store/modules/music.js:526", "\u4FDD\u5B58all\u6210\u529F");
      } catch (e) {
        formatAppLog("log", "at store/modules/music.js:529", e);
      }
    },
    getLastMusic(state2) {
      try {
        const res = uni.getStorageSync("LastMusic");
        if (res) {
          formatAppLog("log", "at store/modules/music.js:537", "\u83B7\u53D6\u4E0A\u6B21\u64AD\u653E\u6B4C\u66F2\u6210\u529F", res);
          state2.LastMusic = res;
        }
      } catch (e) {
        state2.LastMusic = null;
        formatAppLog("log", "at store/modules/music.js:542", e);
      }
    },
    saveLastMusic(state2) {
      try {
        uni.setStorageSync("LastMusic", state2.playNow);
        formatAppLog("log", "at store/modules/music.js:549", "\u4FDD\u5B58lastmusic\u6210\u529F");
      } catch (e) {
        formatAppLog("log", "at store/modules/music.js:552", e);
      }
    },
    addSong(state2, music2) {
      state2.all.push(music2);
    },
    noRepeat(state2) {
      state2.all = Array.from(new Set(...state2.all));
      formatAppLog("log", "at store/modules/music.js:563", "\u53BB\u91CD", state2.all.length);
    },
    updateMusicList(state2) {
      state2.musicList = state2.all;
    },
    changeList(state2, { list }) {
      state2.nowList = list;
    },
    addToHistory(state2) {
      let mindex = state2.historyList.list.indexOf(state2.playNow);
      if (mindex != -1) {
        state2.historyList.list.splice(mindex, 1);
      }
      state2.historyList.list.unshift(state2.playNow);
    },
    updateSearchPrograss(state2, {
      key,
      val
    }) {
      state2.searchPrograss[key] = val;
    },
    setTarget(state2, {
      target
    }) {
      formatAppLog("log", "at store/modules/music.js:595", "\u76EE\u6807\u5DF2\u7ECF\u4FEE\u6539\u4E3A" + target);
      state2.searchPrograss.now = target;
      state2.searchTarget = target;
    }
  };
  var Music = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  };
  const store = createStore({
    state: {
      pages: {
        "music": 0,
        "my": 1,
        "login": 2,
        "register": 3,
        "search": 4,
        "localsearch": 5,
        "detail": 6,
        "musicdetail": 7,
        "musiclist": 8
      },
      Pages: [
        {
          PID: 0,
          title: "\u97F3\u4E50",
          icon: "icon-music",
          pageName: "music",
          navLeft: {
            icon: "icon-list",
            text: "\u8BBE\u7F6E",
            width: void 0,
            event: "toggleSetting",
            parms: void 0
          },
          navRight: {
            icon: "icon-search",
            text: "\u641C\u7D22",
            width: void 0,
            event: "ToPage",
            parms: "search"
          },
          isTabbar: true,
          hasTabbar: true
        },
        {
          PID: 1,
          title: "\u6211\u7684",
          icon: "icon-my",
          pageName: "my",
          navLeft: void 0,
          navRight: void 0,
          isTabbar: true,
          hasTabbar: true
        },
        {
          PID: 2,
          title: "\u767B\u5F55",
          icon: void 0,
          pageName: "login",
          navLeft: {
            icon: "icon-back",
            text: "\u8FD4\u56DE",
            width: void 0,
            event: "Back",
            parms: void 0
          },
          navRight: void 0,
          isTabbar: false,
          hasTabbar: false
        },
        {
          PID: 3,
          title: "\u6CE8\u518C",
          icon: void 0,
          pageName: "register",
          navLeft: {
            icon: "icon-back",
            text: "\u8FD4\u56DE",
            width: void 0,
            event: "Back",
            parms: void 0
          },
          navRight: void 0,
          isTabbar: false,
          hasTabbar: false
        },
        {
          PID: 4,
          title: null,
          icon: void 0,
          pageName: "search",
          navLeft: {
            icon: "icon-back",
            text: "\u8FD4\u56DE",
            width: "50rpx",
            event: "Back",
            parms: void 0
          },
          navRight: {
            icon: "icon-search",
            text: "\u641C\u7D22",
            width: "50rpx",
            event: "Search",
            parms: void 0
          },
          isTabbar: false,
          hasTabbar: false
        },
        {
          PID: 5,
          title: "\u626B\u63CF\u672C\u5730\u97F3\u4E50",
          icon: void 0,
          pageName: "localsearch",
          navLeft: {
            icon: "icon-back",
            text: "\u8FD4\u56DE",
            width: void 0,
            event: "Back",
            parms: void 0
          },
          navRight: void 0,
          isTabbar: false,
          hasTabbar: false
        },
        {
          PID: 6,
          title: void 0,
          icon: void 0,
          pageName: "detail",
          navLeft: {
            icon: "icon-back",
            text: "\u8FD4\u56DE",
            width: void 0,
            event: "Back",
            parms: void 0
          },
          navRight: {
            icon: void 0,
            text: "\u7F16\u8F91",
            width: void 0,
            event: "Edit",
            parms: void 0
          },
          isTabbar: false,
          hasTabbar: false
        },
        {
          PID: 7,
          title: "\u97F3\u4E50\u8BE6\u60C5",
          icon: void 0,
          pageName: "musicdetail",
          navLeft: {
            icon: "icon-back",
            text: "\u8FD4\u56DE",
            width: void 0,
            event: "Back",
            parms: void 0
          },
          navRight: void 0,
          isTabbar: false,
          hasTabbar: false
        },
        {
          PID: 8,
          title: void 0,
          icon: void 0,
          pageName: "musiclist",
          navLeft: {
            icon: "icon-back",
            text: "\u8FD4\u56DE",
            width: void 0,
            event: "Back",
            parms: void 0
          },
          navRight: {
            icon: "icon-edit",
            text: "\u7F16\u8F91",
            width: void 0,
            event: "Edit",
            parms: void 0
          },
          isTabbar: false,
          hasTabbar: false
        }
      ],
      playModes: ["listloop", "random", "singleloop", "order"],
      Player: {},
      isPlaying: false,
      isEnd: false,
      playMode: "listloop",
      defaultMusic: {
        mid: -1,
        title: "\u541B\u306B\u6700\u5F8C\u306E\u53E3\u3065\u3051\u3092",
        author: "majiko",
        albums: "\u672A\u77E5",
        duration: "",
        src: "http://131462.wang/music/majiko - \u541B\u306B\u6700\u5F8C\u306E\u53E3\u3065\u3051\u3092.mp3",
        cover: "../../static/Image/cover.png",
        lrc: "https://131462.wang/lrc/%E5%90%9B%E3%81%AB%E6%9C%80%E5%BE%8C%E3%81%AE%E5%8F%A3%E3%81%A5%E3%81%91%E3%82%92.lrc"
      }
    },
    getters: {},
    mutations: {
      InitPlayer(state2) {
        state2.Player = uni.getBackgroundAudioManager();
        if (state2.Music.lastMusic.src != void 0) {
          state2.Music.playNow = state2.Music.lastMusic;
          state2.Player.src = state2.Music.lastMusic.src;
        } else {
          state2.Music.playNow = state2.defaultMusic;
          state2.Player.src = state2.defaultMusic.src;
        }
        let mindex = state2.Music.historyList.list.indexOf(state2.Music.playNow);
        if (mindex != -1) {
          state2.Music.historyList.list.splice(mindex, 1);
        }
        state2.Music.historyList.list.unshift(state2.Music.playNow);
        state2.Player.autoplay = false;
        state2.Player.volume = 0;
        setTimeout(() => {
          state2.Player.volume = 1;
          state2.Player.pause();
          state2.Player.seek(0);
        }, 1e3);
        state2.Player.onPlay(() => {
          state2.isPlaying = true;
          state2.isEnd = false;
          formatAppLog("log", "at store/index.js:270", "Player playing...");
        });
        state2.Player.onPause(function() {
          state2.isPlaying = false;
          formatAppLog("log", "at store/index.js:274", "Player paused...");
        });
        state2.Player.onStop(function() {
          state2.isPlaying = false;
          formatAppLog("log", "at store/index.js:279", "Player stop.");
        });
        state2.Player.onEnded(function() {
          state2.isEnd = true;
          formatAppLog("log", "at store/index.js:284", "Player end.");
        });
        state2.Player.onError((res) => {
          uni.showToast({
            icon: "none",
            duration: 750,
            position: "bottom",
            title: res.errCode + " \u7531\u4E8E" + res.errMsg + "\u65E0\u6CD5\u64AD\u653E\u6B64\u6B4C\u66F2\uFF0C\u8BF7\u64AD\u653E\u5176\u4ED6\u6B4C\u66F2\u3002"
          });
          if (res.errCode = -99)
            ;
          formatAppLog("log", "at store/index.js:296", "Player Err:" + res.errMsg + " ErrCode:" + res.errCode);
        });
        formatAppLog("log", "at store/index.js:298", "Player initialized.");
      },
      Play(state2) {
        state2.Player.play();
      },
      Pause(state2) {
        state2.Player.pause();
      },
      Seek(state2, newtime) {
        state2.Player.seek(newtime);
      },
      changeMode(state2) {
        state2.playMode = state2.playModes[(state2.playModes.indexOf(state2.playMode) + 1) % state2.playModes.length];
      },
      PreSong(state2) {
        if (state2.Music.musicList.length <= 0) {
          return;
        }
        let len = state2.Music.musicList.length, mid = state2.Music.playNow.mid, index = state2.Music.musicList.findIndex((music2) => {
          return music2.mid == mid;
        });
        switch (state2.playMode) {
          case "order":
            state2.Player.loop = false;
            if (index == 0) {
              state2.Player.pause();
              state2.isPlaying = false;
            } else {
              state2.Music.playNow = state2.Music.musicList[index - 1 < 0 ? 0 : index - 1];
              state2.isPlaying = false;
              state2.Player.src = state2.Music.playNow.src;
              state2.Player.play();
              state2.isPlaying = true;
            }
            break;
          case "listloop":
            state2.Player.loop = false;
            state2.Music.playNow = state2.Music.musicList[index - 1 < 0 ? 0 : index - 1];
            state2.isPlaying = false;
            state2.Player.src = state2.Music.playNow.src;
            state2.Player.play();
            state2.isPlaying = true;
            break;
          case "random":
            state2.Player.loop = false;
            let ran = Math.floor(Math.random() * len);
            state2.Music.playNow = state2.Music.musicList[ran];
            state2.isPlaying = false;
            state2.Player.src = state2.Music.playNow.src;
            state2.Player.play();
            state2.isPlaying = true;
            break;
          case "singleloop":
            state2.Player.loop = true;
            state2.Player.src = state2.Music.playNow.src;
            state2.Player.play();
            state2.isPlaying = true;
            break;
        }
        let mindex = state2.Music.historyList.list.indexOf(state2.Music.playNow);
        if (mindex != -1) {
          state2.Music.historyList.list.splice(mindex, 1);
        }
        state2.Music.historyList.list.unshift(state2.Music.playNow);
      },
      NextSong(state2) {
        if (state2.Music.musicList.length <= 0) {
          return;
        }
        let len = state2.Music.musicList.length, mid = state2.Music.playNow.mid, index = state2.Music.musicList.findIndex((music2) => {
          return music2.mid == mid;
        });
        formatAppLog("log", "at store/index.js:383", state2.playMode, index);
        switch (state2.playMode) {
          case "order":
            state2.Player.loop = false;
            if (index == len - 1) {
              state2.Player.pause();
              state2.isPlaying = false;
            } else {
              state2.Music.playNow = state2.Music.musicList[(index + 1) % len];
              state2.isPlaying = false;
              state2.Player.src = state2.Music.playNow.src;
              state2.Player.play();
              state2.isPlaying = true;
            }
            break;
          case "listloop":
            state2.Player.loop = false;
            state2.Music.playNow = state2.Music.musicList[(index + 1) % len];
            state2.isPlaying = false;
            state2.Player.src = state2.Music.playNow.src;
            state2.Player.play();
            state2.isPlaying = true;
            break;
          case "random":
            state2.Player.loop = false;
            let ran = Math.floor(Math.random() * len);
            state2.Music.playNow = state2.Music.musicList[ran];
            state2.isPlaying = false;
            state2.Player.src = state2.Music.playNow.src;
            state2.Player.play();
            state2.isPlaying = true;
            break;
          case "singleloop":
            state2.Player.loop = true;
            state2.Player.src = state2.Music.playNow.src;
            state2.Player.play();
            state2.isPlaying = true;
            break;
        }
        let mindex = state2.Music.historyList.list.indexOf(state2.Music.playNow);
        if (mindex != -1) {
          state2.Music.historyList.list.splice(mindex, 1);
        }
        state2.Music.historyList.list.unshift(state2.Music.playNow);
      }
    },
    modules: {
      User,
      Setting,
      Music
    }
  });
  function createApp() {
    const app = vue.createVueApp(_sfc_main);
    app.mixin({
      methods: {
        $noMoreClick: common.noMoreClick
      }
    });
    app.use(store);
    return {
      app
    };
  }
  const __app__ = createApp().app;
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.use(uni.__vuePlugin).mount("#app");
})(Vue);
