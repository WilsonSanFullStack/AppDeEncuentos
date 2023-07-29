import {
  require_react
} from "./chunk-6DDWND5A.js";
import {
  __commonJS,
  __toESM
} from "./chunk-4EOJPDL2.js";

// node_modules/glob-to-regexp/index.js
var require_glob_to_regexp = __commonJS({
  "node_modules/glob-to-regexp/index.js"(exports, module) {
    module.exports = function(glob, opts) {
      if (typeof glob !== "string") {
        throw new TypeError("Expected a string");
      }
      var str = String(glob);
      var reStr = "";
      var extended = opts ? !!opts.extended : false;
      var globstar = opts ? !!opts.globstar : false;
      var inGroup = false;
      var flags = opts && typeof opts.flags === "string" ? opts.flags : "";
      var c;
      for (var i = 0, len = str.length; i < len; i++) {
        c = str[i];
        switch (c) {
          case "/":
          case "$":
          case "^":
          case "+":
          case ".":
          case "(":
          case ")":
          case "=":
          case "!":
          case "|":
            reStr += "\\" + c;
            break;
          case "?":
            if (extended) {
              reStr += ".";
              break;
            }
          case "[":
          case "]":
            if (extended) {
              reStr += c;
              break;
            }
          case "{":
            if (extended) {
              inGroup = true;
              reStr += "(";
              break;
            }
          case "}":
            if (extended) {
              inGroup = false;
              reStr += ")";
              break;
            }
          case ",":
            if (inGroup) {
              reStr += "|";
              break;
            }
            reStr += "\\" + c;
            break;
          case "*":
            var prevChar = str[i - 1];
            var starCount = 1;
            while (str[i + 1] === "*") {
              starCount++;
              i++;
            }
            var nextChar = str[i + 1];
            if (!globstar) {
              reStr += ".*";
            } else {
              var isGlobstar = starCount > 1 && (prevChar === "/" || prevChar === void 0) && (nextChar === "/" || nextChar === void 0);
              if (isGlobstar) {
                reStr += "((?:[^/]*(?:/|$))*)";
                i++;
              } else {
                reStr += "([^/]*)";
              }
            }
            break;
          default:
            reStr += c;
        }
      }
      if (!flags || !~flags.indexOf("g")) {
        reStr = "^" + reStr + "$";
      }
      return new RegExp(reStr, flags);
    };
  }
});

// node_modules/@clerk/clerk-react/dist/esm/chunk-UKSPFOP7.js
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// node_modules/@clerk/clerk-react/dist/esm/polyfills.js
if (typeof window !== "undefined" && !window.global) {
  window.global = typeof global === "undefined" ? window : global;
}

// node_modules/@clerk/shared/dist/esm/errors/thrower.js
var DefaultMessages = Object.freeze({
  InvalidFrontendApiErrorMessage: `The frontendApi passed to Clerk is invalid. You can get your Frontend API key at https://dashboard.clerk.com/last-active?path=api-keys. (key={{key}})`,
  InvalidProxyUrlErrorMessage: `The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})`,
  InvalidPublishableKeyErrorMessage: `The publishableKey passed to Clerk is invalid. You can get your Publishable key at https://dashboard.clerk.com/last-active?path=api-keys. (key={{key}})`,
  MissingPublishableKeyErrorMessage: `Missing publishableKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.`
});
function buildErrorThrower({ packageName, customMessages }) {
  let pkg = packageName;
  const messages = {
    ...DefaultMessages,
    ...customMessages
  };
  function buildMessage(rawMessage, replacements) {
    if (!replacements) {
      return `${pkg}: ${rawMessage}`;
    }
    let msg = rawMessage;
    const matches = rawMessage.matchAll(/{{([a-zA-Z0-9-_]+)}}/g);
    for (const match of matches) {
      const replacement = (replacements[match[1]] || "").toString();
      msg = msg.replace(`{{${match[1]}}}`, replacement);
    }
    return `${pkg}: ${msg}`;
  }
  return {
    setPackageName({ packageName: packageName2 }) {
      if (typeof packageName2 === "string") {
        pkg = packageName2;
      }
      return this;
    },
    setMessages({ customMessages: customMessages2 }) {
      Object.assign(messages, customMessages2 || {});
      return this;
    },
    throwInvalidPublishableKeyError(params) {
      throw new Error(buildMessage(messages.InvalidPublishableKeyErrorMessage, params));
    },
    throwInvalidFrontendApiError(params) {
      throw new Error(buildMessage(messages.InvalidFrontendApiErrorMessage, params));
    },
    throwInvalidProxyUrl(params) {
      throw new Error(buildMessage(messages.InvalidProxyUrlErrorMessage, params));
    },
    throwMissingPublishableKeyError() {
      throw new Error(buildMessage(messages.MissingPublishableKeyErrorMessage));
    }
  };
}

// node_modules/@clerk/shared/dist/esm/errors/Error.js
function isKnownError(error) {
  return isClerkAPIResponseError(error) || isMetamaskError(error);
}
function isClerkAPIResponseError(err) {
  return "clerkError" in err;
}
function isMetamaskError(err) {
  return "code" in err && [4001, 32602, 32603].includes(err.code) && "message" in err;
}
var MagicLinkError = class extends Error {
  constructor(code) {
    super(code);
    this.code = code;
    Object.setPrototypeOf(this, MagicLinkError.prototype);
  }
};
function isMagicLinkError(err) {
  return err instanceof MagicLinkError;
}
var MagicLinkErrorCode = {
  Expired: "expired",
  Failed: "failed"
};

// node_modules/@clerk/shared/dist/esm/utils/browser.js
var botAgents = [
  "bot",
  "spider",
  "crawl",
  "APIs-Google",
  "AdsBot",
  "Googlebot",
  "mediapartners",
  "Google Favicon",
  "FeedFetcher",
  "Google-Read-Aloud",
  "DuplexWeb-Google",
  "googleweblight",
  "bing",
  "yandex",
  "baidu",
  "duckduck",
  "yahoo",
  "ecosia",
  "ia_archiver",
  "facebook",
  "instagram",
  "pinterest",
  "reddit",
  "slack",
  "twitter",
  "whatsapp",
  "youtube",
  "semrush"
];
var botAgentRegex = new RegExp(botAgents.join("|"), "i");

// node_modules/js-cookie/dist/js.cookie.mjs
function assign(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target;
}
var defaultConverter = {
  read: function(value) {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(value) {
    return encodeURIComponent(value).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  }
};
function init(converter, defaultAttributes) {
  function set(key, value, attributes) {
    if (typeof document === "undefined") {
      return;
    }
    attributes = assign({}, defaultAttributes, attributes);
    if (typeof attributes.expires === "number") {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }
    key = encodeURIComponent(key).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
    var stringifiedAttributes = "";
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue;
      }
      stringifiedAttributes += "; " + attributeName;
      if (attributes[attributeName] === true) {
        continue;
      }
      stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
    }
    return document.cookie = key + "=" + converter.write(value, key) + stringifiedAttributes;
  }
  function get(key) {
    if (typeof document === "undefined" || arguments.length && !key) {
      return;
    }
    var cookies = document.cookie ? document.cookie.split("; ") : [];
    var jar = {};
    for (var i = 0; i < cookies.length; i++) {
      var parts = cookies[i].split("=");
      var value = parts.slice(1).join("=");
      try {
        var foundKey = decodeURIComponent(parts[0]);
        jar[foundKey] = converter.read(value, foundKey);
        if (key === foundKey) {
          break;
        }
      } catch (e) {
      }
    }
    return key ? jar[key] : jar;
  }
  return Object.create(
    {
      set,
      get,
      remove: function(key, attributes) {
        set(
          key,
          "",
          assign({}, attributes, {
            expires: -1
          })
        );
      },
      withAttributes: function(attributes) {
        return init(this.converter, assign({}, this.attributes, attributes));
      },
      withConverter: function(converter2) {
        return init(assign({}, this.converter, converter2), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(defaultAttributes) },
      converter: { value: Object.freeze(converter) }
    }
  );
}
var api = init(defaultConverter, { path: "/" });

// node_modules/@clerk/shared/dist/esm/utils/isomorphicAtob.js
var isomorphicAtob = (data) => {
  if (typeof atob !== "undefined" && typeof atob === "function") {
    return atob(data);
  } else if (typeof global !== "undefined" && global.Buffer) {
    return new global.Buffer(data, "base64").toString();
  }
  return data;
};

// node_modules/@clerk/shared/dist/esm/utils/keys.js
var PUBLISHABLE_KEY_LIVE_PREFIX = "pk_live_";
var PUBLISHABLE_KEY_TEST_PREFIX = "pk_test_";
function parsePublishableKey(key) {
  key = key || "";
  if (!isPublishableKey(key)) {
    return null;
  }
  const instanceType = key.startsWith(PUBLISHABLE_KEY_LIVE_PREFIX) ? "production" : "development";
  let frontendApi = isomorphicAtob(key.split("_")[2]);
  if (!frontendApi.endsWith("$")) {
    return null;
  }
  frontendApi = frontendApi.slice(0, -1);
  return {
    instanceType,
    frontendApi
  };
}
function isPublishableKey(key) {
  key = key || "";
  const hasValidPrefix = key.startsWith(PUBLISHABLE_KEY_LIVE_PREFIX) || key.startsWith(PUBLISHABLE_KEY_TEST_PREFIX);
  const hasValidFrontendApiPostfix = isomorphicAtob(key.split("_")[2] || "").endsWith("$");
  return hasValidPrefix && hasValidFrontendApiPostfix;
}
function isLegacyFrontendApiKey(key) {
  key = key || "";
  return key.startsWith("clerk.");
}
function createDevOrStagingUrlCache() {
  const DEV_OR_STAGING_SUFFIXES = [
    ".lcl.dev",
    ".stg.dev",
    ".lclstage.dev",
    ".stgstage.dev",
    ".dev.lclclerk.com",
    ".stg.lclclerk.com",
    ".accounts.lclclerk.com",
    "accountsstage.dev",
    "accounts.dev"
  ];
  const devOrStagingUrlCache = /* @__PURE__ */ new Map();
  return {
    isDevOrStagingUrl: (url) => {
      if (!url) {
        return false;
      }
      const hostname = typeof url === "string" ? url : url.hostname;
      let res = devOrStagingUrlCache.get(hostname);
      if (res === void 0) {
        res = DEV_OR_STAGING_SUFFIXES.some((s) => hostname.endsWith(s));
        devOrStagingUrlCache.set(hostname, res);
      }
      return res;
    }
  };
}

// node_modules/@clerk/shared/dist/esm/utils/mimeTypeExtensions.js
var MimeTypeToExtensionMap = Object.freeze({
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/gif": "gif",
  "image/webp": "webp",
  "image/x-icon": "ico",
  "image/vnd.microsoft.icon": "ico"
});

// node_modules/@clerk/shared/dist/esm/utils/multiDomain.js
function handleValueOrFn(value, url, defaultValue) {
  if (typeof value === "function") {
    return value(url);
  }
  if (typeof value !== "undefined") {
    return value;
  }
  if (typeof defaultValue !== "undefined") {
    return defaultValue;
  }
  return void 0;
}

// node_modules/@clerk/shared/dist/esm/utils/string.js
function snakeToCamel(str) {
  return str ? str.replace(/([-_][a-z])/g, (match) => match.toUpperCase().replace(/-|_/, "")) : "";
}
function camelToSnake(str) {
  return str ? str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`) : "";
}

// node_modules/@clerk/shared/dist/esm/utils/object.js
var createDeepObjectTransformer = (transform) => {
  const deepTransform = (obj) => {
    if (!obj) {
      return obj;
    }
    if (Array.isArray(obj)) {
      return obj.map((el) => {
        if (typeof el === "object" || Array.isArray(el)) {
          return deepTransform(el);
        }
        return el;
      });
    }
    const copy = { ...obj };
    const keys = Object.keys(copy);
    for (const oldName of keys) {
      const newName = transform(oldName.toString());
      if (newName !== oldName) {
        copy[newName] = copy[oldName];
        delete copy[oldName];
      }
      if (typeof copy[newName] === "object") {
        copy[newName] = deepTransform(copy[newName]);
      }
    }
    return copy;
  };
  return deepTransform;
};
var deepCamelToSnake = createDeepObjectTransformer(camelToSnake);
var deepSnakeToCamel = createDeepObjectTransformer(snakeToCamel);

// node_modules/@clerk/shared/dist/esm/utils/proxy.js
function isValidProxyUrl(key) {
  if (!key) {
    return true;
  }
  return isHttpOrHttps(key) || isProxyUrlRelative(key);
}
function isHttpOrHttps(key) {
  return /^http(s)?:\/\//.test(key || "");
}
function isProxyUrlRelative(key) {
  return key.startsWith("/");
}
function proxyUrlToAbsoluteURL(url) {
  if (!url) {
    return "";
  }
  return isProxyUrlRelative(url) ? new URL(url, window.location.origin).toString() : url;
}

// node_modules/@clerk/shared/dist/esm/utils/ssr.js
var inClientSide = () => {
  return typeof window !== "undefined";
};

// node_modules/@clerk/shared/dist/esm/utils/url.js
function addClerkPrefix(str) {
  if (!str) {
    return "";
  }
  let regex;
  if (str.match(/^(clerk\.)+\w*$/)) {
    regex = /(clerk\.)*(?=clerk\.)/;
  } else if (str.match(/\.clerk.accounts/)) {
    return str;
  } else {
    regex = /^(clerk\.)*/gi;
  }
  const stripped = str.replace(regex, "");
  return `clerk.${stripped}`;
}

// node_modules/@clerk/shared/dist/esm/utils/globs.js
var import_glob_to_regexp = __toESM(require_glob_to_regexp());

// node_modules/@clerk/shared/dist/esm/utils/loadScript.js
var NO_DOCUMENT_ERROR = "loadScript cannot be called when document does not exist";
var NO_SRC_ERROR = "loadScript cannot be called without a src";
async function loadScript(src = "", opts) {
  const { async, defer, beforeLoad, crossOrigin } = opts || {};
  return new Promise((resolve, reject) => {
    if (!src) {
      reject(NO_SRC_ERROR);
    }
    if (!document || !document.body) {
      reject(NO_DOCUMENT_ERROR);
    }
    const script = document.createElement("script");
    crossOrigin && script.setAttribute("crossorigin", crossOrigin);
    script.async = async || false;
    script.defer = defer || false;
    script.addEventListener("load", () => {
      script.remove();
      resolve(script);
    });
    script.addEventListener("error", () => {
      script.remove();
      reject();
    });
    script.src = src;
    beforeLoad == null ? void 0 : beforeLoad(script);
    document.body.appendChild(script);
  });
}

// node_modules/@clerk/shared/dist/esm/hooks/createContextAndHook.js
var import_react = __toESM(require_react());
function assertContextExists(contextVal, msgOrCtx) {
  if (!contextVal) {
    throw typeof msgOrCtx === "string" ? new Error(msgOrCtx) : new Error(`${msgOrCtx.displayName} not found`);
  }
}
var createContextAndHook = (displayName, options) => {
  const { assertCtxFn = assertContextExists } = options || {};
  const Ctx = import_react.default.createContext(void 0);
  Ctx.displayName = displayName;
  const useCtx = () => {
    const ctx = import_react.default.useContext(Ctx);
    assertCtxFn(ctx, `${displayName} not found`);
    return ctx.value;
  };
  const useCtxWithoutGuarantee = () => {
    const ctx = import_react.default.useContext(Ctx);
    return ctx ? ctx.value : {};
  };
  return [Ctx, useCtx, useCtxWithoutGuarantee];
};

// node_modules/swr/dist/index.mjs
var import_react2 = __toESM(require_react(), 1);
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
var noop2 = function() {
};
var UNDEFINED = (
  /*#__NOINLINE__*/
  noop2()
);
var OBJECT = Object;
var isUndefined = function(v) {
  return v === UNDEFINED;
};
var isFunction = function(v) {
  return typeof v == "function";
};
var mergeObjects = function(a, b) {
  return OBJECT.assign({}, a, b);
};
var STR_UNDEFINED = "undefined";
var hasWindow = function() {
  return typeof window != STR_UNDEFINED;
};
var hasDocument = function() {
  return typeof document != STR_UNDEFINED;
};
var hasRequestAnimationFrame = function() {
  return hasWindow() && typeof window["requestAnimationFrame"] != STR_UNDEFINED;
};
var table = /* @__PURE__ */ new WeakMap();
var counter = 0;
var stableHash = function(arg) {
  var type = typeof arg;
  var constructor = arg && arg.constructor;
  var isDate = constructor == Date;
  var result;
  var index;
  if (OBJECT(arg) === arg && !isDate && constructor != RegExp) {
    result = table.get(arg);
    if (result)
      return result;
    result = ++counter + "~";
    table.set(arg, result);
    if (constructor == Array) {
      result = "@";
      for (index = 0; index < arg.length; index++) {
        result += stableHash(arg[index]) + ",";
      }
      table.set(arg, result);
    }
    if (constructor == OBJECT) {
      result = "#";
      var keys = OBJECT.keys(arg).sort();
      while (!isUndefined(index = keys.pop())) {
        if (!isUndefined(arg[index])) {
          result += index + ":" + stableHash(arg[index]) + ",";
        }
      }
      table.set(arg, result);
    }
  } else {
    result = isDate ? arg.toJSON() : type == "symbol" ? arg.toString() : type == "string" ? JSON.stringify(arg) : "" + arg;
  }
  return result;
};
var online = true;
var isOnline = function() {
  return online;
};
var hasWin = hasWindow();
var hasDoc = hasDocument();
var onWindowEvent = hasWin && window.addEventListener ? window.addEventListener.bind(window) : noop2;
var onDocumentEvent = hasDoc ? document.addEventListener.bind(document) : noop2;
var offWindowEvent = hasWin && window.removeEventListener ? window.removeEventListener.bind(window) : noop2;
var offDocumentEvent = hasDoc ? document.removeEventListener.bind(document) : noop2;
var isVisible = function() {
  var visibilityState = hasDoc && document.visibilityState;
  return isUndefined(visibilityState) || visibilityState !== "hidden";
};
var initFocus = function(callback) {
  onDocumentEvent("visibilitychange", callback);
  onWindowEvent("focus", callback);
  return function() {
    offDocumentEvent("visibilitychange", callback);
    offWindowEvent("focus", callback);
  };
};
var initReconnect = function(callback) {
  var onOnline = function() {
    online = true;
    callback();
  };
  var onOffline = function() {
    online = false;
  };
  onWindowEvent("online", onOnline);
  onWindowEvent("offline", onOffline);
  return function() {
    offWindowEvent("online", onOnline);
    offWindowEvent("offline", onOffline);
  };
};
var preset = {
  isOnline,
  isVisible
};
var defaultConfigOptions = {
  initFocus,
  initReconnect
};
var IS_SERVER = !hasWindow() || "Deno" in window;
var rAF = function(f) {
  return hasRequestAnimationFrame() ? window["requestAnimationFrame"](f) : setTimeout(f, 1);
};
var useIsomorphicLayoutEffect = IS_SERVER ? import_react2.useEffect : import_react2.useLayoutEffect;
var navigatorConnection = typeof navigator !== "undefined" && navigator.connection;
var slowConnection = !IS_SERVER && navigatorConnection && (["slow-2g", "2g"].includes(navigatorConnection.effectiveType) || navigatorConnection.saveData);
var serialize = function(key) {
  if (isFunction(key)) {
    try {
      key = key();
    } catch (err) {
      key = "";
    }
  }
  var args = [].concat(key);
  key = typeof key == "string" ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : "";
  var infoKey = key ? "$swr$" + key : "";
  return [key, args, infoKey];
};
var SWRGlobalState = /* @__PURE__ */ new WeakMap();
var FOCUS_EVENT = 0;
var RECONNECT_EVENT = 1;
var MUTATE_EVENT = 2;
var broadcastState = function(cache2, key, data, error, isValidating, revalidate, broadcast) {
  if (broadcast === void 0) {
    broadcast = true;
  }
  var _a2 = SWRGlobalState.get(cache2), EVENT_REVALIDATORS = _a2[0], STATE_UPDATERS = _a2[1], FETCH = _a2[3];
  var revalidators = EVENT_REVALIDATORS[key];
  var updaters = STATE_UPDATERS[key];
  if (broadcast && updaters) {
    for (var i = 0; i < updaters.length; ++i) {
      updaters[i](data, error, isValidating);
    }
  }
  if (revalidate) {
    delete FETCH[key];
    if (revalidators && revalidators[0]) {
      return revalidators[0](MUTATE_EVENT).then(function() {
        return cache2.get(key);
      });
    }
  }
  return cache2.get(key);
};
var __timestamp = 0;
var getTimestamp = function() {
  return ++__timestamp;
};
var internalMutate = function() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return __awaiter(void 0, void 0, void 0, function() {
    var cache2, _key, _data, _opts, options, populateCache, revalidate, rollbackOnError, customOptimisticData, _a2, key, keyInfo, _b, MUTATION, data, error, beforeMutationTs, hasCustomOptimisticData, rollbackData, optimisticData, res;
    return __generator(this, function(_c) {
      switch (_c.label) {
        case 0:
          cache2 = args[0], _key = args[1], _data = args[2], _opts = args[3];
          options = typeof _opts === "boolean" ? { revalidate: _opts } : _opts || {};
          populateCache = isUndefined(options.populateCache) ? true : options.populateCache;
          revalidate = options.revalidate !== false;
          rollbackOnError = options.rollbackOnError !== false;
          customOptimisticData = options.optimisticData;
          _a2 = serialize(_key), key = _a2[0], keyInfo = _a2[2];
          if (!key)
            return [
              2
              /*return*/
            ];
          _b = SWRGlobalState.get(cache2), MUTATION = _b[2];
          if (args.length < 3) {
            return [2, broadcastState(cache2, key, cache2.get(key), UNDEFINED, UNDEFINED, revalidate, true)];
          }
          data = _data;
          beforeMutationTs = getTimestamp();
          MUTATION[key] = [beforeMutationTs, 0];
          hasCustomOptimisticData = !isUndefined(customOptimisticData);
          rollbackData = cache2.get(key);
          if (hasCustomOptimisticData) {
            optimisticData = isFunction(customOptimisticData) ? customOptimisticData(rollbackData) : customOptimisticData;
            cache2.set(key, optimisticData);
            broadcastState(cache2, key, optimisticData);
          }
          if (isFunction(data)) {
            try {
              data = data(cache2.get(key));
            } catch (err) {
              error = err;
            }
          }
          if (!(data && isFunction(data.then)))
            return [3, 2];
          return [
            4,
            data.catch(function(err) {
              error = err;
            })
            // Check if other mutations have occurred since we've started this mutation.
            // If there's a race we don't update cache or broadcast the change,
            // just return the data.
          ];
        case 1:
          data = _c.sent();
          if (beforeMutationTs !== MUTATION[key][0]) {
            if (error)
              throw error;
            return [2, data];
          } else if (error && hasCustomOptimisticData && rollbackOnError) {
            populateCache = true;
            data = rollbackData;
            cache2.set(key, rollbackData);
          }
          _c.label = 2;
        case 2:
          if (populateCache) {
            if (!error) {
              if (isFunction(populateCache)) {
                data = populateCache(data, rollbackData);
              }
              cache2.set(key, data);
            }
            cache2.set(keyInfo, mergeObjects(cache2.get(keyInfo), { error }));
          }
          MUTATION[key][1] = getTimestamp();
          return [
            4,
            broadcastState(cache2, key, data, error, UNDEFINED, revalidate, !!populateCache)
            // Throw error or return data
          ];
        case 3:
          res = _c.sent();
          if (error)
            throw error;
          return [2, populateCache ? res : data];
      }
    });
  });
};
var revalidateAllKeys = function(revalidators, type) {
  for (var key in revalidators) {
    if (revalidators[key][0])
      revalidators[key][0](type);
  }
};
var initCache = function(provider, options) {
  if (!SWRGlobalState.has(provider)) {
    var opts = mergeObjects(defaultConfigOptions, options);
    var EVENT_REVALIDATORS = {};
    var mutate2 = internalMutate.bind(UNDEFINED, provider);
    var unmount = noop2;
    SWRGlobalState.set(provider, [EVENT_REVALIDATORS, {}, {}, {}, mutate2]);
    if (!IS_SERVER) {
      var releaseFocus_1 = opts.initFocus(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, FOCUS_EVENT)));
      var releaseReconnect_1 = opts.initReconnect(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, RECONNECT_EVENT)));
      unmount = function() {
        releaseFocus_1 && releaseFocus_1();
        releaseReconnect_1 && releaseReconnect_1();
        SWRGlobalState.delete(provider);
      };
    }
    return [provider, mutate2, unmount];
  }
  return [provider, SWRGlobalState.get(provider)[4]];
};
var onErrorRetry = function(_, __, config, revalidate, opts) {
  var maxRetryCount = config.errorRetryCount;
  var currentRetryCount = opts.retryCount;
  var timeout = ~~((Math.random() + 0.5) * (1 << (currentRetryCount < 8 ? currentRetryCount : 8))) * config.errorRetryInterval;
  if (!isUndefined(maxRetryCount) && currentRetryCount > maxRetryCount) {
    return;
  }
  setTimeout(revalidate, timeout, opts);
};
var _a = initCache(/* @__PURE__ */ new Map());
var cache = _a[0];
var mutate = _a[1];
var defaultConfig = mergeObjects(
  {
    // events
    onLoadingSlow: noop2,
    onSuccess: noop2,
    onError: noop2,
    onErrorRetry,
    onDiscarded: noop2,
    // switches
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateIfStale: true,
    shouldRetryOnError: true,
    // timeouts
    errorRetryInterval: slowConnection ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: slowConnection ? 5e3 : 3e3,
    // providers
    compare: function(currentData, newData) {
      return stableHash(currentData) == stableHash(newData);
    },
    isPaused: function() {
      return false;
    },
    cache,
    mutate,
    fallback: {}
  },
  // use web preset by default
  preset
);
var mergeConfigs = function(a, b) {
  var v = mergeObjects(a, b);
  if (b) {
    var u1 = a.use, f1 = a.fallback;
    var u2 = b.use, f2 = b.fallback;
    if (u1 && u2) {
      v.use = u1.concat(u2);
    }
    if (f1 && f2) {
      v.fallback = mergeObjects(f1, f2);
    }
  }
  return v;
};
var SWRConfigContext = (0, import_react2.createContext)({});
var SWRConfig$1 = function(props) {
  var value = props.value;
  var extendedConfig = mergeConfigs((0, import_react2.useContext)(SWRConfigContext), value);
  var provider = value && value.provider;
  var cacheContext = (0, import_react2.useState)(function() {
    return provider ? initCache(provider(extendedConfig.cache || cache), value) : UNDEFINED;
  })[0];
  if (cacheContext) {
    extendedConfig.cache = cacheContext[0];
    extendedConfig.mutate = cacheContext[1];
  }
  useIsomorphicLayoutEffect(function() {
    return cacheContext ? cacheContext[2] : UNDEFINED;
  }, []);
  return (0, import_react2.createElement)(SWRConfigContext.Provider, mergeObjects(props, {
    value: extendedConfig
  }));
};
var useStateWithDeps = function(state, unmountedRef) {
  var rerender = (0, import_react2.useState)({})[1];
  var stateRef = (0, import_react2.useRef)(state);
  var stateDependenciesRef = (0, import_react2.useRef)({
    data: false,
    error: false,
    isValidating: false
  });
  var setState = (0, import_react2.useCallback)(
    function(payload) {
      var shouldRerender = false;
      var currentState = stateRef.current;
      for (var _ in payload) {
        var k = _;
        if (currentState[k] !== payload[k]) {
          currentState[k] = payload[k];
          if (stateDependenciesRef.current[k]) {
            shouldRerender = true;
          }
        }
      }
      if (shouldRerender && !unmountedRef.current) {
        rerender({});
      }
    },
    // config.suspense isn't allowed to change during the lifecycle
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  useIsomorphicLayoutEffect(function() {
    stateRef.current = state;
  });
  return [stateRef, stateDependenciesRef.current, setState];
};
var normalize = function(args) {
  return isFunction(args[1]) ? [args[0], args[1], args[2] || {}] : [args[0], null, (args[1] === null ? args[2] : args[1]) || {}];
};
var useSWRConfig = function() {
  return mergeObjects(defaultConfig, (0, import_react2.useContext)(SWRConfigContext));
};
var withArgs = function(hook) {
  return function useSWRArgs() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var fallbackConfig = useSWRConfig();
    var _a2 = normalize(args), key = _a2[0], fn = _a2[1], _config = _a2[2];
    var config = mergeConfigs(fallbackConfig, _config);
    var next = hook;
    var use = config.use;
    if (use) {
      for (var i = use.length; i-- > 0; ) {
        next = use[i](next);
      }
    }
    return next(key, fn || config.fetcher, config);
  };
};
var subscribeCallback = function(key, callbacks, callback) {
  var keyedRevalidators = callbacks[key] || (callbacks[key] = []);
  keyedRevalidators.push(callback);
  return function() {
    var index = keyedRevalidators.indexOf(callback);
    if (index >= 0) {
      keyedRevalidators[index] = keyedRevalidators[keyedRevalidators.length - 1];
      keyedRevalidators.pop();
    }
  };
};
var WITH_DEDUPE = { dedupe: true };
var useSWRHandler = function(_key, fetcher, config) {
  var cache2 = config.cache, compare = config.compare, fallbackData = config.fallbackData, suspense = config.suspense, revalidateOnMount = config.revalidateOnMount, refreshInterval = config.refreshInterval, refreshWhenHidden = config.refreshWhenHidden, refreshWhenOffline = config.refreshWhenOffline;
  var _a2 = SWRGlobalState.get(cache2), EVENT_REVALIDATORS = _a2[0], STATE_UPDATERS = _a2[1], MUTATION = _a2[2], FETCH = _a2[3];
  var _b = serialize(_key), key = _b[0], fnArgs = _b[1], keyInfo = _b[2];
  var initialMountedRef = (0, import_react2.useRef)(false);
  var unmountedRef = (0, import_react2.useRef)(false);
  var keyRef = (0, import_react2.useRef)(key);
  var fetcherRef = (0, import_react2.useRef)(fetcher);
  var configRef = (0, import_react2.useRef)(config);
  var getConfig = function() {
    return configRef.current;
  };
  var isActive = function() {
    return getConfig().isVisible() && getConfig().isOnline();
  };
  var patchFetchInfo = function(info2) {
    return cache2.set(keyInfo, mergeObjects(cache2.get(keyInfo), info2));
  };
  var cached = cache2.get(key);
  var fallback = isUndefined(fallbackData) ? config.fallback[key] : fallbackData;
  var data = isUndefined(cached) ? fallback : cached;
  var info = cache2.get(keyInfo) || {};
  var error = info.error;
  var isInitialMount = !initialMountedRef.current;
  var shouldRevalidate = function() {
    if (isInitialMount && !isUndefined(revalidateOnMount))
      return revalidateOnMount;
    if (getConfig().isPaused())
      return false;
    if (suspense)
      return isUndefined(data) ? false : config.revalidateIfStale;
    return isUndefined(data) || config.revalidateIfStale;
  };
  var resolveValidating = function() {
    if (!key || !fetcher)
      return false;
    if (info.isValidating)
      return true;
    return isInitialMount && shouldRevalidate();
  };
  var isValidating = resolveValidating();
  var _c = useStateWithDeps({
    data,
    error,
    isValidating
  }, unmountedRef), stateRef = _c[0], stateDependencies = _c[1], setState = _c[2];
  var revalidate = (0, import_react2.useCallback)(
    function(revalidateOpts) {
      return __awaiter(void 0, void 0, void 0, function() {
        var currentFetcher, newData, startAt, loading, opts, shouldStartNewRequest, isCurrentKeyMounted, cleanupState, newState, finishRequestAndUpdateState, mutationInfo, err_1;
        var _a3;
        return __generator(this, function(_b2) {
          switch (_b2.label) {
            case 0:
              currentFetcher = fetcherRef.current;
              if (!key || !currentFetcher || unmountedRef.current || getConfig().isPaused()) {
                return [2, false];
              }
              loading = true;
              opts = revalidateOpts || {};
              shouldStartNewRequest = !FETCH[key] || !opts.dedupe;
              isCurrentKeyMounted = function() {
                return !unmountedRef.current && key === keyRef.current && initialMountedRef.current;
              };
              cleanupState = function() {
                var requestInfo = FETCH[key];
                if (requestInfo && requestInfo[1] === startAt) {
                  delete FETCH[key];
                }
              };
              newState = { isValidating: false };
              finishRequestAndUpdateState = function() {
                patchFetchInfo({ isValidating: false });
                if (isCurrentKeyMounted()) {
                  setState(newState);
                }
              };
              patchFetchInfo({
                isValidating: true
              });
              setState({ isValidating: true });
              _b2.label = 1;
            case 1:
              _b2.trys.push([1, 3, , 4]);
              if (shouldStartNewRequest) {
                broadcastState(cache2, key, stateRef.current.data, stateRef.current.error, true);
                if (config.loadingTimeout && !cache2.get(key)) {
                  setTimeout(function() {
                    if (loading && isCurrentKeyMounted()) {
                      getConfig().onLoadingSlow(key, config);
                    }
                  }, config.loadingTimeout);
                }
                FETCH[key] = [currentFetcher.apply(void 0, fnArgs), getTimestamp()];
              }
              _a3 = FETCH[key], newData = _a3[0], startAt = _a3[1];
              return [4, newData];
            case 2:
              newData = _b2.sent();
              if (shouldStartNewRequest) {
                setTimeout(cleanupState, config.dedupingInterval);
              }
              if (!FETCH[key] || FETCH[key][1] !== startAt) {
                if (shouldStartNewRequest) {
                  if (isCurrentKeyMounted()) {
                    getConfig().onDiscarded(key);
                  }
                }
                return [2, false];
              }
              patchFetchInfo({
                error: UNDEFINED
              });
              newState.error = UNDEFINED;
              mutationInfo = MUTATION[key];
              if (!isUndefined(mutationInfo) && // case 1
              (startAt <= mutationInfo[0] || // case 2
              startAt <= mutationInfo[1] || // case 3
              mutationInfo[1] === 0)) {
                finishRequestAndUpdateState();
                if (shouldStartNewRequest) {
                  if (isCurrentKeyMounted()) {
                    getConfig().onDiscarded(key);
                  }
                }
                return [2, false];
              }
              if (!compare(stateRef.current.data, newData)) {
                newState.data = newData;
              } else {
                newState.data = stateRef.current.data;
              }
              if (!compare(cache2.get(key), newData)) {
                cache2.set(key, newData);
              }
              if (shouldStartNewRequest) {
                if (isCurrentKeyMounted()) {
                  getConfig().onSuccess(newData, key, config);
                }
              }
              return [3, 4];
            case 3:
              err_1 = _b2.sent();
              cleanupState();
              if (!getConfig().isPaused()) {
                patchFetchInfo({ error: err_1 });
                newState.error = err_1;
                if (shouldStartNewRequest && isCurrentKeyMounted()) {
                  getConfig().onError(err_1, key, config);
                  if (typeof config.shouldRetryOnError === "boolean" && config.shouldRetryOnError || isFunction(config.shouldRetryOnError) && config.shouldRetryOnError(err_1)) {
                    if (isActive()) {
                      getConfig().onErrorRetry(err_1, key, config, revalidate, {
                        retryCount: (opts.retryCount || 0) + 1,
                        dedupe: true
                      });
                    }
                  }
                }
              }
              return [3, 4];
            case 4:
              loading = false;
              finishRequestAndUpdateState();
              if (isCurrentKeyMounted() && shouldStartNewRequest) {
                broadcastState(cache2, key, newState.data, newState.error, false);
              }
              return [2, true];
          }
        });
      });
    },
    // `setState` is immutable, and `eventsCallback`, `fnArgs`, `keyInfo`,
    // and `keyValidating` are depending on `key`, so we can exclude them from
    // the deps array.
    //
    // FIXME:
    // `fn` and `config` might be changed during the lifecycle,
    // but they might be changed every render like this.
    // `useSWR('key', () => fetch('/api/'), { suspense: true })`
    // So we omit the values from the deps array
    // even though it might cause unexpected behaviors.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key]
  );
  var boundMutate = (0, import_react2.useCallback)(
    // By using `bind` we don't need to modify the size of the rest arguments.
    // Due to https://github.com/microsoft/TypeScript/issues/37181, we have to
    // cast it to any for now.
    internalMutate.bind(UNDEFINED, cache2, function() {
      return keyRef.current;
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  useIsomorphicLayoutEffect(function() {
    fetcherRef.current = fetcher;
    configRef.current = config;
  });
  useIsomorphicLayoutEffect(function() {
    if (!key)
      return;
    var keyChanged = key !== keyRef.current;
    var softRevalidate = revalidate.bind(UNDEFINED, WITH_DEDUPE);
    var onStateUpdate = function(updatedData, updatedError, updatedIsValidating) {
      setState(mergeObjects(
        {
          error: updatedError,
          isValidating: updatedIsValidating
        },
        // Since `setState` only shallowly compares states, we do a deep
        // comparison here.
        compare(stateRef.current.data, updatedData) ? UNDEFINED : {
          data: updatedData
        }
      ));
    };
    var nextFocusRevalidatedAt = 0;
    var onRevalidate = function(type) {
      if (type == FOCUS_EVENT) {
        var now = Date.now();
        if (getConfig().revalidateOnFocus && now > nextFocusRevalidatedAt && isActive()) {
          nextFocusRevalidatedAt = now + getConfig().focusThrottleInterval;
          softRevalidate();
        }
      } else if (type == RECONNECT_EVENT) {
        if (getConfig().revalidateOnReconnect && isActive()) {
          softRevalidate();
        }
      } else if (type == MUTATE_EVENT) {
        return revalidate();
      }
      return;
    };
    var unsubUpdate = subscribeCallback(key, STATE_UPDATERS, onStateUpdate);
    var unsubEvents = subscribeCallback(key, EVENT_REVALIDATORS, onRevalidate);
    unmountedRef.current = false;
    keyRef.current = key;
    initialMountedRef.current = true;
    if (keyChanged) {
      setState({
        data,
        error,
        isValidating
      });
    }
    if (shouldRevalidate()) {
      if (isUndefined(data) || IS_SERVER) {
        softRevalidate();
      } else {
        rAF(softRevalidate);
      }
    }
    return function() {
      unmountedRef.current = true;
      unsubUpdate();
      unsubEvents();
    };
  }, [key, revalidate]);
  useIsomorphicLayoutEffect(function() {
    var timer;
    function next() {
      var interval = isFunction(refreshInterval) ? refreshInterval(data) : refreshInterval;
      if (interval && timer !== -1) {
        timer = setTimeout(execute, interval);
      }
    }
    function execute() {
      if (!stateRef.current.error && (refreshWhenHidden || getConfig().isVisible()) && (refreshWhenOffline || getConfig().isOnline())) {
        revalidate(WITH_DEDUPE).then(next);
      } else {
        next();
      }
    }
    next();
    return function() {
      if (timer) {
        clearTimeout(timer);
        timer = -1;
      }
    };
  }, [refreshInterval, refreshWhenHidden, refreshWhenOffline, revalidate]);
  (0, import_react2.useDebugValue)(data);
  if (suspense && isUndefined(data) && key) {
    fetcherRef.current = fetcher;
    configRef.current = config;
    unmountedRef.current = false;
    throw isUndefined(error) ? revalidate(WITH_DEDUPE) : error;
  }
  return {
    mutate: boundMutate,
    get data() {
      stateDependencies.data = true;
      return data;
    },
    get error() {
      stateDependencies.error = true;
      return error;
    },
    get isValidating() {
      stateDependencies.isValidating = true;
      return isValidating;
    }
  };
};
var SWRConfig = OBJECT.defineProperty(SWRConfig$1, "default", {
  value: defaultConfig
});
var useSWR = withArgs(useSWRHandler);

// node_modules/@clerk/shared/dist/esm/hooks/contexts.js
var [ClerkInstanceContext, useClerkInstanceContext] = createContextAndHook("ClerkInstanceContext");
var [UserContext, useUserContext] = createContextAndHook("UserContext");
var [ClientContext, useClientContext] = createContextAndHook("ClientContext");
var [SessionContext, useSessionContext] = createContextAndHook(
  "SessionContext"
);
var [OrganizationContext, useOrganizationContext] = createContextAndHook("OrganizationContext");

// node_modules/@clerk/shared/dist/esm/hooks/useOrganization.js
var useOrganization = (params) => {
  const { invitationList: invitationListParams, membershipList: membershipListParams } = params || {};
  const { organization, lastOrganizationMember, lastOrganizationInvitation } = useOrganizationContext();
  const session = useSessionContext();
  const clerk = useClerkInstanceContext();
  const shouldFetch = clerk.loaded && session && organization;
  const pendingInvitations = !clerk.loaded ? () => [] : () => {
    var _a2;
    return (_a2 = clerk.organization) == null ? void 0 : _a2.getPendingInvitations(invitationListParams);
  };
  const currentOrganizationMemberships = !clerk.loaded ? () => [] : () => {
    var _a2;
    return (_a2 = clerk.organization) == null ? void 0 : _a2.getMemberships(membershipListParams);
  };
  const {
    data: invitationList,
    isValidating: isInvitationsLoading,
    mutate: mutateInvitationList
  } = useSWR(
    shouldFetch && invitationListParams ? cacheKey("invites", organization, lastOrganizationInvitation, invitationListParams) : null,
    pendingInvitations
  );
  const {
    data: membershipList,
    isValidating: isMembershipsLoading,
    mutate: mutateMembershipList
  } = useSWR(
    shouldFetch && membershipListParams ? cacheKey("memberships", organization, lastOrganizationMember, membershipListParams) : null,
    currentOrganizationMemberships
  );
  if (organization === void 0) {
    return {
      isLoaded: false,
      organization: void 0,
      invitationList: void 0,
      membershipList: void 0,
      membership: void 0
    };
  }
  if (organization === null) {
    return {
      isLoaded: true,
      organization: null,
      invitationList: null,
      membershipList: null,
      membership: null
    };
  }
  if (!clerk.loaded && organization) {
    return {
      isLoaded: true,
      organization,
      invitationList: void 0,
      membershipList: void 0,
      membership: void 0
    };
  }
  return {
    isLoaded: !isMembershipsLoading && !isInvitationsLoading,
    organization,
    membershipList,
    membership: getCurrentOrganizationMembership(session.user.organizationMemberships, organization.id),
    // your membership in the current org
    invitationList,
    unstable__mutate: () => {
      void mutateMembershipList();
      void mutateInvitationList();
    }
  };
};
function getCurrentOrganizationMembership(organizationMemberships, activeOrganizationId) {
  return organizationMemberships.find(
    (organizationMembership) => organizationMembership.organization.id === activeOrganizationId
  );
}
function cacheKey(type, organization, resource, pagination) {
  return [type, organization.id, resource == null ? void 0 : resource.id, resource == null ? void 0 : resource.updatedAt, pagination.offset, pagination.limit].filter(Boolean).join("-");
}

// node_modules/@clerk/shared/dist/esm/hooks/useOrganizationList.js
var useOrganizationList = () => {
  const clerk = useClerkInstanceContext();
  const user = useUserContext();
  if (!clerk.loaded || !user) {
    return { isLoaded: false, organizationList: void 0, createOrganization: void 0, setActive: void 0 };
  }
  return {
    isLoaded: true,
    organizationList: createOrganizationList(user.organizationMemberships),
    setActive: clerk.setActive,
    createOrganization: clerk.createOrganization
  };
};
function createOrganizationList(organizationMemberships) {
  return organizationMemberships.map((organizationMembership) => ({
    membership: organizationMembership,
    organization: organizationMembership.organization
  }));
}

// node_modules/@clerk/shared/dist/esm/hooks/useOrganizations.js
var useOrganizations = () => {
  const clerk = useClerkInstanceContext();
  if (!clerk.loaded) {
    return {
      isLoaded: false,
      createOrganization: void 0,
      getOrganizationMemberships: void 0,
      getOrganization: void 0
    };
  }
  return {
    isLoaded: true,
    createOrganization: clerk.createOrganization,
    getOrganizationMemberships: clerk.getOrganizationMemberships,
    getOrganization: clerk.getOrganization
  };
};

// node_modules/@clerk/shared/dist/esm/hooks/useSafeLayoutEffect.js
var import_react3 = __toESM(require_react());
var useSafeLayoutEffect = typeof window !== "undefined" ? import_react3.default.useLayoutEffect : import_react3.default.useEffect;

// node_modules/@clerk/clerk-react/dist/esm/contexts/ClerkProvider.js
var import_react8 = __toESM(require_react());

// node_modules/@clerk/clerk-react/dist/esm/errors.js
var noClerkProviderError = "Clerk: You must wrap your application in a <ClerkProvider> component.";
var multipleClerkProvidersError = "Clerk: You've added multiple <ClerkProvider> components in your React component tree. Wrap your components in a single <ClerkProvider>.";
var hocChildrenNotAFunctionError = "Clerk: Child of WithClerk must be a function.";
var multipleChildrenInButtonComponent = (name) => `Clerk: You've passed multiple children components to <${name}/>. You can only pass a single child component or text.`;
var invalidStateError = "Invalid state. Feel free to submit a bug or reach out to support here: https://clerk.com/support";
var unsupportedNonBrowserDomainOrProxyUrlFunction = "Unsupported usage of domain or proxyUrl. The usage of domain or proxyUrl as function is not supported in non-browser environments.";

// node_modules/@clerk/clerk-react/dist/esm/utils/childrenUtils.js
var import_react4 = __toESM(require_react());
var assertSingleChild = (children) => (name) => {
  try {
    return import_react4.default.Children.only(children);
  } catch (e) {
    throw new Error(multipleChildrenInButtonComponent(name));
  }
};
var normalizeWithDefaultValue = (children, defaultText) => {
  if (!children) {
    children = defaultText;
  }
  if (typeof children === "string") {
    children = import_react4.default.createElement("button", null, children);
  }
  return children;
};
var safeExecute = (cb) => (...args) => {
  if (cb && typeof cb === "function") {
    return cb(...args);
  }
};

// node_modules/@clerk/clerk-react/dist/esm/utils/errorThrower.js
var errorThrower = buildErrorThrower({ packageName: "@clerk/react" });
function __internal__setErrorThrowerOptions(options) {
  errorThrower.setMessages(options).setPackageName(options);
}

// node_modules/@clerk/clerk-react/dist/esm/utils/isConstructor.js
function isConstructor(f) {
  return typeof f === "function";
}

// node_modules/@clerk/clerk-react/dist/esm/utils/isDevOrStageUrl.js
var { isDevOrStagingUrl } = createDevOrStagingUrlCache();

// node_modules/@clerk/clerk-react/dist/esm/utils/loadClerkJsScript.js
var FAILED_TO_LOAD_ERROR = "Clerk: Failed to load Clerk";
var loadClerkJsScript = async (opts) => {
  const { frontendApi, publishableKey } = opts;
  if (!publishableKey && !frontendApi) {
    errorThrower.throwMissingPublishableKeyError();
  }
  return loadScript(clerkJsScriptUrl(opts), {
    async: true,
    crossOrigin: "anonymous",
    beforeLoad: applyClerkJsScriptAttributes(opts)
  }).catch(() => {
    throw new Error(FAILED_TO_LOAD_ERROR);
  });
};
var clerkJsScriptUrl = (opts) => {
  var _a2, _b;
  const { clerkJSUrl, clerkJSVariant, clerkJSVersion, proxyUrl, domain, publishableKey, frontendApi } = opts;
  if (clerkJSUrl) {
    return clerkJSUrl;
  }
  let scriptHost = "";
  if (!!proxyUrl && isValidProxyUrl(proxyUrl)) {
    scriptHost = proxyUrlToAbsoluteURL(proxyUrl).replace(/http(s)?:\/\//, "");
  } else if (domain && !isDevOrStagingUrl(((_a2 = parsePublishableKey(publishableKey)) == null ? void 0 : _a2.frontendApi) || frontendApi || "")) {
    scriptHost = addClerkPrefix(domain);
  } else {
    scriptHost = ((_b = parsePublishableKey(publishableKey)) == null ? void 0 : _b.frontendApi) || frontendApi || "";
  }
  const variant = clerkJSVariant ? `${clerkJSVariant.replace(/\.+$/, "")}.` : "";
  const version = clerkJSVersion || getPrereleaseTag("4.22.0") || getMajorVersion("4.22.0");
  return `https://${scriptHost}/npm/@clerk/clerk-js@${version}/dist/clerk.${variant}browser.js`;
};
var applyClerkJsScriptAttributes = (options) => (script) => {
  const { publishableKey, frontendApi, proxyUrl, domain } = options;
  if (publishableKey) {
    script.setAttribute("data-clerk-publishable-key", publishableKey);
  } else if (frontendApi) {
    script.setAttribute("data-clerk-frontend-api", frontendApi);
  }
  if (proxyUrl) {
    script.setAttribute("data-clerk-proxy-url", proxyUrl);
  }
  if (domain) {
    script.setAttribute("data-clerk-domain", domain);
  }
};
var getPrereleaseTag = (packageVersion) => {
  var _a2;
  return (_a2 = packageVersion.match(/-(.*)\./)) == null ? void 0 : _a2[1];
};
var getMajorVersion = (packageVersion) => packageVersion.split(".")[0];

// node_modules/@clerk/clerk-react/dist/esm/utils/useMaxAllowedInstancesGuard.js
var import_react5 = __toESM(require_react());
var counts = /* @__PURE__ */ new Map();
function useMaxAllowedInstancesGuard(name, error, maxCount = 1) {
  import_react5.default.useEffect(() => {
    const count = counts.get(name) || 0;
    if (count == maxCount) {
      throw new Error(error);
    }
    counts.set(name, count + 1);
    return () => {
      counts.set(name, (counts.get(name) || 1) - 1);
    };
  }, []);
}
function withMaxAllowedInstancesGuard(WrappedComponent, name, error) {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || name || "Component";
  const Hoc = (props) => {
    useMaxAllowedInstancesGuard(name, error);
    return import_react5.default.createElement(WrappedComponent, { ...props });
  };
  Hoc.displayName = `withMaxAllowedInstancesGuard(${displayName})`;
  return Hoc;
}

// node_modules/@clerk/clerk-react/dist/esm/contexts/ClerkContextProvider.js
var import_react6 = __toESM(require_react());

// node_modules/@clerk/clerk-react/dist/esm/isomorphicClerk.js
var _loaded;
var _domain;
var _proxyUrl;
var _instance;
var _IsomorphicClerk = class {
  constructor(options) {
    this.clerkjs = null;
    this.preopenSignIn = null;
    this.preopenSignUp = null;
    this.preopenUserProfile = null;
    this.preopenOrganizationProfile = null;
    this.preopenCreateOrganization = null;
    this.premountSignInNodes = /* @__PURE__ */ new Map();
    this.premountSignUpNodes = /* @__PURE__ */ new Map();
    this.premountUserProfileNodes = /* @__PURE__ */ new Map();
    this.premountUserButtonNodes = /* @__PURE__ */ new Map();
    this.premountOrganizationProfileNodes = /* @__PURE__ */ new Map();
    this.premountCreateOrganizationNodes = /* @__PURE__ */ new Map();
    this.premountOrganizationSwitcherNodes = /* @__PURE__ */ new Map();
    this.premountMethodCalls = /* @__PURE__ */ new Map();
    this.loadedListeners = [];
    __privateAdd(this, _loaded, false);
    __privateAdd(this, _domain, void 0);
    __privateAdd(this, _proxyUrl, void 0);
    this.addOnLoaded = (cb) => {
      this.loadedListeners.push(cb);
    };
    this.emitLoaded = () => {
      this.loadedListeners.forEach((cb) => cb());
      this.loadedListeners = [];
    };
    this.hydrateClerkJS = (clerkjs) => {
      if (!clerkjs) {
        throw new Error("Failed to hydrate latest Clerk JS");
      }
      this.clerkjs = clerkjs;
      this.premountMethodCalls.forEach((cb) => cb());
      if (this.preopenSignIn !== null) {
        clerkjs.openSignIn(this.preopenSignIn);
      }
      if (this.preopenSignUp !== null) {
        clerkjs.openSignUp(this.preopenSignUp);
      }
      if (this.preopenUserProfile !== null) {
        clerkjs.openUserProfile(this.preopenUserProfile);
      }
      if (this.preopenOrganizationProfile !== null) {
        clerkjs.openOrganizationProfile(this.preopenOrganizationProfile);
      }
      if (this.preopenCreateOrganization !== null) {
        clerkjs.openCreateOrganization(this.preopenCreateOrganization);
      }
      this.premountSignInNodes.forEach((props, node) => {
        clerkjs.mountSignIn(node, props);
      });
      this.premountSignUpNodes.forEach((props, node) => {
        clerkjs.mountSignUp(node, props);
      });
      this.premountUserProfileNodes.forEach((props, node) => {
        clerkjs.mountUserProfile(node, props);
      });
      this.premountUserButtonNodes.forEach((props, node) => {
        clerkjs.mountUserButton(node, props);
      });
      __privateSet(this, _loaded, true);
      this.emitLoaded();
      return this.clerkjs;
    };
    this.__unstable__updateProps = (props) => {
      if (this.clerkjs && "__unstable__updateProps" in this.clerkjs) {
        this.clerkjs.__unstable__updateProps(props);
      } else {
        return void 0;
      }
    };
    this.setActive = ({ session, organization, beforeEmit }) => {
      if (this.clerkjs) {
        return this.clerkjs.setActive({ session, organization, beforeEmit });
      } else {
        return Promise.reject();
      }
    };
    this.setSession = (session, beforeEmit) => {
      return this.setActive({ session, beforeEmit });
    };
    this.openSignIn = (props) => {
      if (this.clerkjs && __privateGet(this, _loaded)) {
        this.clerkjs.openSignIn(props);
      } else {
        this.preopenSignIn = props;
      }
    };
    this.closeSignIn = () => {
      if (this.clerkjs && __privateGet(this, _loaded)) {
        this.clerkjs.closeSignIn();
      } else {
        this.preopenSignIn = null;
      }
    };
    this.openUserProfile = (props) => {
      if (this.clerkjs && __privateGet(this, _loaded)) {
        this.clerkjs.openUserProfile(props);
      } else {
        this.preopenUserProfile = props;
      }
    };
    this.closeUserProfile = () => {
      if (this.clerkjs && __privateGet(this, _loaded)) {
        this.clerkjs.closeUserProfile();
      } else {
        this.preopenUserProfile = null;
      }
    };
    this.openOrganizationProfile = (props) => {
      if (this.clerkjs && __privateGet(this, _loaded)) {
        this.clerkjs.openOrganizationProfile(props);
      } else {
        this.preopenOrganizationProfile = props;
      }
    };
    this.closeOrganizationProfile = () => {
      if (this.clerkjs && __privateGet(this, _loaded)) {
        this.clerkjs.closeOrganizationProfile();
      } else {
        this.preopenOrganizationProfile = null;
      }
    };
    this.openCreateOrganization = (props) => {
      if (this.clerkjs && __privateGet(this, _loaded)) {
        this.clerkjs.openCreateOrganization(props);
      } else {
        this.preopenCreateOrganization = props;
      }
    };
    this.closeCreateOrganization = () => {
      if (this.clerkjs && __privateGet(this, _loaded)) {
        this.clerkjs.closeCreateOrganization();
      } else {
        this.preopenCreateOrganization = null;
      }
    };
    this.openSignUp = (props) => {
      if (this.clerkjs && __privateGet(this, _loaded)) {
        this.clerkjs.openSignUp(props);
      } else {
        this.preopenSignUp = props;
      }
    };
    this.closeSignUp = () => {
      if (this.clerkjs && __privateGet(this, _loaded)) {
        this.clerkjs.closeSignUp();
      } else {
        this.preopenSignUp = null;
      }
    };
    this.mountSignIn = (node, props) => {
      if (this.clerkjs && __privateGet(this, _loaded)) {
        this.clerkjs.mountSignIn(node, props);
      } else {
        this.premountSignInNodes.set(node, props);
      }
    };
    this.unmountSignIn = (node) => {
      if (this.clerkjs && __privateGet(this, _loaded)) {
        this.clerkjs.unmountSignIn(node);
      } else {
        this.premountSignInNodes.delete(node);
      }
    };
    this.mountSignUp = (node, props) => {
      if (this.clerkjs && __privateGet(this, _loaded)) {
        this.clerkjs.mountSignUp(node, props);
      } else {
        this.premountSignUpNodes.set(node, props);
      }
    };
    this.unmountSignUp = (node) => {
      if (this.clerkjs && __privateGet(this, _loaded)) {
        this.clerkjs.unmountSignUp(node);
      } else {
        this.premountSignUpNodes.delete(node);
      }
    };
    this.mountUserProfile = (node, props) => {
      if (this.clerkjs && __privateGet(this, _loaded)) {
        this.clerkjs.mountUserProfile(node, props);
      } else {
        this.premountUserProfileNodes.set(node, props);
      }
    };
    this.unmountUserProfile = (node) => {
      if (this.clerkjs && __privateGet(this, _loaded)) {
        this.clerkjs.unmountUserProfile(node);
      } else {
        this.premountUserProfileNodes.delete(node);
      }
    };
    this.mountOrganizationProfile = (node, props) => {
      if (this.clerkjs && __privateGet(this, _loaded)) {
        this.clerkjs.mountOrganizationProfile(node, props);
      } else {
        this.premountOrganizationProfileNodes.set(node, props);
      }
    };
    this.unmountOrganizationProfile = (node) => {
      if (this.clerkjs && __privateGet(this, _loaded)) {
        this.clerkjs.unmountOrganizationProfile(node);
      } else {
        this.premountOrganizationProfileNodes.delete(node);
      }
    };
    this.mountCreateOrganization = (node, props) => {
      if (this.clerkjs && __privateGet(this, _loaded)) {
        this.clerkjs.mountCreateOrganization(node, props);
      } else {
        this.premountCreateOrganizationNodes.set(node, props);
      }
    };
    this.unmountCreateOrganization = (node) => {
      if (this.clerkjs && __privateGet(this, _loaded)) {
        this.clerkjs.unmountCreateOrganization(node);
      } else {
        this.premountCreateOrganizationNodes.delete(node);
      }
    };
    this.mountOrganizationSwitcher = (node, props) => {
      if (this.clerkjs && __privateGet(this, _loaded)) {
        this.clerkjs.mountOrganizationSwitcher(node, props);
      } else {
        this.premountOrganizationSwitcherNodes.set(node, props);
      }
    };
    this.unmountOrganizationSwitcher = (node) => {
      if (this.clerkjs && __privateGet(this, _loaded)) {
        this.clerkjs.unmountOrganizationSwitcher(node);
      } else {
        this.premountOrganizationSwitcherNodes.delete(node);
      }
    };
    this.mountUserButton = (node, userButtonProps) => {
      if (this.clerkjs && __privateGet(this, _loaded)) {
        this.clerkjs.mountUserButton(node, userButtonProps);
      } else {
        this.premountUserButtonNodes.set(node, userButtonProps);
      }
    };
    this.unmountUserButton = (node) => {
      if (this.clerkjs && __privateGet(this, _loaded)) {
        this.clerkjs.unmountUserButton(node);
      } else {
        this.premountUserButtonNodes.delete(node);
      }
    };
    this.addListener = (listener) => {
      const callback = () => {
        var _a2;
        return (_a2 = this.clerkjs) == null ? void 0 : _a2.addListener(listener);
      };
      if (this.clerkjs) {
        return callback();
      } else {
        this.premountMethodCalls.set("addListener", callback);
        return () => this.premountMethodCalls.delete("addListener");
      }
    };
    this.navigate = (to) => {
      const callback = () => {
        var _a2;
        return (_a2 = this.clerkjs) == null ? void 0 : _a2.navigate(to);
      };
      if (this.clerkjs && __privateGet(this, _loaded)) {
        void callback();
      } else {
        this.premountMethodCalls.set("navigate", callback);
      }
    };
    this.redirectWithAuth = (...args) => {
      const callback = () => {
        var _a2;
        return (_a2 = this.clerkjs) == null ? void 0 : _a2.redirectWithAuth(...args);
      };
      if (this.clerkjs && __privateGet(this, _loaded)) {
        void callback();
      } else {
        this.premountMethodCalls.set("redirectWithAuth", callback);
      }
    };
    this.redirectToSignIn = (opts) => {
      const callback = () => {
        var _a2;
        return (_a2 = this.clerkjs) == null ? void 0 : _a2.redirectToSignIn(opts);
      };
      if (this.clerkjs && __privateGet(this, _loaded)) {
        void callback();
      } else {
        this.premountMethodCalls.set("redirectToSignIn", callback);
      }
    };
    this.redirectToSignUp = (opts) => {
      const callback = () => {
        var _a2;
        return (_a2 = this.clerkjs) == null ? void 0 : _a2.redirectToSignUp(opts);
      };
      if (this.clerkjs && __privateGet(this, _loaded)) {
        void callback();
      } else {
        this.premountMethodCalls.set("redirectToSignUp", callback);
      }
    };
    this.redirectToUserProfile = () => {
      const callback = () => {
        var _a2;
        return (_a2 = this.clerkjs) == null ? void 0 : _a2.redirectToUserProfile();
      };
      if (this.clerkjs && __privateGet(this, _loaded)) {
        callback();
      } else {
        this.premountMethodCalls.set("redirectToUserProfile", callback);
      }
    };
    this.redirectToHome = () => {
      const callback = () => {
        var _a2;
        return (_a2 = this.clerkjs) == null ? void 0 : _a2.redirectToHome();
      };
      if (this.clerkjs && __privateGet(this, _loaded)) {
        callback();
      } else {
        this.premountMethodCalls.set("redirectToHome", callback);
      }
    };
    this.redirectToOrganizationProfile = () => {
      const callback = () => {
        var _a2;
        return (_a2 = this.clerkjs) == null ? void 0 : _a2.redirectToOrganizationProfile();
      };
      if (this.clerkjs && __privateGet(this, _loaded)) {
        callback();
      } else {
        this.premountMethodCalls.set("redirectToOrganizationProfile", callback);
      }
    };
    this.redirectToCreateOrganization = () => {
      const callback = () => {
        var _a2;
        return (_a2 = this.clerkjs) == null ? void 0 : _a2.redirectToCreateOrganization();
      };
      if (this.clerkjs && __privateGet(this, _loaded)) {
        callback();
      } else {
        this.premountMethodCalls.set("redirectToCreateOrganization", callback);
      }
    };
    this.handleRedirectCallback = (params) => {
      var _a2;
      const callback = () => {
        var _a3;
        return (_a3 = this.clerkjs) == null ? void 0 : _a3.handleRedirectCallback(params);
      };
      if (this.clerkjs && __privateGet(this, _loaded)) {
        void ((_a2 = callback()) == null ? void 0 : _a2.catch(() => {
        }));
      } else {
        this.premountMethodCalls.set("handleRedirectCallback", callback);
      }
    };
    this.handleMagicLinkVerification = async (params) => {
      const callback = () => {
        var _a2;
        return (_a2 = this.clerkjs) == null ? void 0 : _a2.handleMagicLinkVerification(params);
      };
      if (this.clerkjs && __privateGet(this, _loaded)) {
        return callback();
      } else {
        this.premountMethodCalls.set("handleMagicLinkVerification", callback);
      }
    };
    this.authenticateWithMetamask = async (params) => {
      const callback = () => {
        var _a2;
        return (_a2 = this.clerkjs) == null ? void 0 : _a2.authenticateWithMetamask(params);
      };
      if (this.clerkjs && __privateGet(this, _loaded)) {
        return callback();
      } else {
        this.premountMethodCalls.set("authenticateWithMetamask", callback);
      }
    };
    this.createOrganization = async (params) => {
      const callback = () => {
        var _a2;
        return (_a2 = this.clerkjs) == null ? void 0 : _a2.createOrganization(params);
      };
      if (this.clerkjs && __privateGet(this, _loaded)) {
        return callback();
      } else {
        this.premountMethodCalls.set("createOrganization", callback);
      }
    };
    this.getOrganizationMemberships = async () => {
      const callback = () => {
        var _a2;
        return (_a2 = this.clerkjs) == null ? void 0 : _a2.getOrganizationMemberships();
      };
      if (this.clerkjs && __privateGet(this, _loaded)) {
        return callback();
      } else {
        this.premountMethodCalls.set("getOrganizationMemberships", callback);
      }
    };
    this.getOrganization = async (organizationId) => {
      const callback = () => {
        var _a2;
        return (_a2 = this.clerkjs) == null ? void 0 : _a2.getOrganization(organizationId);
      };
      if (this.clerkjs && __privateGet(this, _loaded)) {
        return callback();
      } else {
        this.premountMethodCalls.set("getOrganization", callback);
      }
    };
    this.signOut = async (signOutCallbackOrOptions, options2) => {
      const callback = () => {
        var _a2;
        return (_a2 = this.clerkjs) == null ? void 0 : _a2.signOut(signOutCallbackOrOptions, options2);
      };
      if (this.clerkjs && __privateGet(this, _loaded)) {
        return callback();
      } else {
        this.premountMethodCalls.set("signOut", callback);
      }
    };
    const { Clerk = null, frontendApi, publishableKey } = options || {};
    this.frontendApi = frontendApi;
    this.publishableKey = publishableKey;
    __privateSet(this, _proxyUrl, options == null ? void 0 : options.proxyUrl);
    __privateSet(this, _domain, options == null ? void 0 : options.domain);
    this.options = options;
    this.Clerk = Clerk;
    this.mode = inClientSide() ? "browser" : "server";
    void this.loadClerkJS();
  }
  get loaded() {
    return __privateGet(this, _loaded);
  }
  static getOrCreateInstance(options) {
    if (!inClientSide() || !__privateGet(this, _instance)) {
      __privateSet(this, _instance, new _IsomorphicClerk(options));
    }
    return __privateGet(this, _instance);
  }
  get domain() {
    if (typeof window !== "undefined" && window.location) {
      return handleValueOrFn(__privateGet(this, _domain), new URL(window.location.href), "");
    }
    if (typeof __privateGet(this, _domain) === "function") {
      throw new Error(unsupportedNonBrowserDomainOrProxyUrlFunction);
    }
    return __privateGet(this, _domain) || "";
  }
  get proxyUrl() {
    if (typeof window !== "undefined" && window.location) {
      return handleValueOrFn(__privateGet(this, _proxyUrl), new URL(window.location.href), "");
    }
    if (typeof __privateGet(this, _proxyUrl) === "function") {
      throw new Error(unsupportedNonBrowserDomainOrProxyUrlFunction);
    }
    return __privateGet(this, _proxyUrl) || "";
  }
  async loadClerkJS() {
    var _a2, _b;
    if (this.mode !== "browser" || __privateGet(this, _loaded)) {
      return;
    }
    if (typeof window !== "undefined") {
      window.__clerk_frontend_api = this.frontendApi;
      window.__clerk_publishable_key = this.publishableKey;
      window.__clerk_proxy_url = this.proxyUrl;
      window.__clerk_domain = this.domain;
    }
    try {
      if (this.Clerk) {
        let c;
        if (isConstructor(this.Clerk)) {
          c = new this.Clerk(this.publishableKey || this.frontendApi || "", {
            proxyUrl: this.proxyUrl,
            domain: this.domain
          });
          await c.load(this.options);
        } else {
          c = this.Clerk;
          if (!c.isReady()) {
            await c.load(this.options);
          }
        }
        global.Clerk = c;
      } else {
        if (!global.Clerk) {
          await loadClerkJsScript({
            ...this.options,
            frontendApi: this.frontendApi,
            publishableKey: this.publishableKey,
            proxyUrl: this.proxyUrl,
            domain: this.domain
          });
        }
        if (!global.Clerk) {
          throw new Error("Failed to download latest ClerkJS. Contact support@clerk.com.");
        }
        await global.Clerk.load(this.options);
      }
      if (((_a2 = global.Clerk) == null ? void 0 : _a2.loaded) || ((_b = global.Clerk) == null ? void 0 : _b.isReady())) {
        return this.hydrateClerkJS(global.Clerk);
      }
      return;
    } catch (err) {
      const error = err;
      if (false) {
        console.error(error.stack || error.message || error);
      } else {
        throw err;
      }
      return;
    }
  }
  get version() {
    var _a2;
    return (_a2 = this.clerkjs) == null ? void 0 : _a2.version;
  }
  get client() {
    if (this.clerkjs) {
      return this.clerkjs.client;
    } else {
      return void 0;
    }
  }
  get session() {
    if (this.clerkjs) {
      return this.clerkjs.session;
    } else {
      return void 0;
    }
  }
  get user() {
    if (this.clerkjs) {
      return this.clerkjs.user;
    } else {
      return void 0;
    }
  }
  get organization() {
    if (this.clerkjs) {
      return this.clerkjs.organization;
    } else {
      return void 0;
    }
  }
  get __unstable__environment() {
    if (this.clerkjs) {
      return this.clerkjs.__unstable__environment;
    } else {
      return void 0;
    }
  }
  __unstable__setEnvironment(...args) {
    if (this.clerkjs && "__unstable__setEnvironment" in this.clerkjs) {
      this.clerkjs.__unstable__setEnvironment(args);
    } else {
      return void 0;
    }
  }
};
var IsomorphicClerk = _IsomorphicClerk;
_loaded = /* @__PURE__ */ new WeakMap();
_domain = /* @__PURE__ */ new WeakMap();
_proxyUrl = /* @__PURE__ */ new WeakMap();
_instance = /* @__PURE__ */ new WeakMap();
__privateAdd(IsomorphicClerk, _instance, void 0);

// node_modules/@clerk/clerk-react/dist/esm/utils/deriveState.js
var deriveState = (clerkLoaded2, state, initialState) => {
  if (!clerkLoaded2 && initialState) {
    return deriveFromSsrInitialState(initialState);
  }
  return deriveFromClientSideState(state);
};
var deriveFromSsrInitialState = (initialState) => {
  const userId = initialState.userId;
  const user = initialState.user;
  const sessionId = initialState.sessionId;
  const session = initialState.session;
  const organization = initialState.organization;
  const orgId = initialState.orgId;
  const orgRole = initialState.orgRole;
  const orgSlug = initialState.orgSlug;
  const actor = initialState.actor;
  return {
    userId,
    user,
    sessionId,
    session,
    organization,
    orgId,
    orgRole,
    orgSlug,
    actor,
    lastOrganizationInvitation: null,
    lastOrganizationMember: null
  };
};
var deriveFromClientSideState = (state) => {
  var _a2;
  const userId = state.user ? state.user.id : state.user;
  const user = state.user;
  const sessionId = state.session ? state.session.id : state.session;
  const session = state.session;
  const actor = session == null ? void 0 : session.actor;
  const organization = state.organization;
  const orgId = state.organization ? state.organization.id : state.organization;
  const orgSlug = organization == null ? void 0 : organization.slug;
  const membership = organization ? (_a2 = user == null ? void 0 : user.organizationMemberships) == null ? void 0 : _a2.find((om) => om.organization.id === orgId) : organization;
  const orgRole = membership ? membership.role : membership;
  const lastOrganizationInvitation = state.lastOrganizationInvitation;
  const lastOrganizationMember = state.lastOrganizationMember;
  return {
    userId,
    user,
    sessionId,
    session,
    organization,
    orgId,
    orgRole,
    orgSlug,
    actor,
    lastOrganizationInvitation,
    lastOrganizationMember
  };
};

// node_modules/@clerk/clerk-react/dist/esm/contexts/AuthContext.js
var [AuthContext, useAuthContext] = createContextAndHook("AuthContext");

// node_modules/@clerk/clerk-react/dist/esm/contexts/IsomorphicClerkContext.js
var [IsomorphicClerkContext, useIsomorphicClerkContext] = [ClerkInstanceContext, useClerkInstanceContext];

// node_modules/@clerk/clerk-react/dist/esm/contexts/ClerkContextProvider.js
function ClerkContextProvider(props) {
  const { isomorphicClerkOptions, initialState, children } = props;
  const { isomorphicClerk: clerk, loaded: clerkLoaded2 } = useLoadedIsomorphicClerk(isomorphicClerkOptions);
  const [state, setState] = import_react6.default.useState({
    client: clerk.client,
    session: clerk.session,
    user: clerk.user,
    organization: clerk.organization,
    lastOrganizationInvitation: null,
    lastOrganizationMember: null
  });
  import_react6.default.useEffect(() => {
    return clerk.addListener((e) => setState({ ...e }));
  }, []);
  const derivedState = deriveState(clerkLoaded2, state, initialState);
  const clerkCtx = import_react6.default.useMemo(() => ({ value: clerk }), [clerkLoaded2]);
  const clientCtx = import_react6.default.useMemo(() => ({ value: state.client }), [state.client]);
  const {
    sessionId,
    session,
    userId,
    user,
    orgId,
    actor,
    lastOrganizationInvitation,
    lastOrganizationMember,
    organization,
    orgRole,
    orgSlug
  } = derivedState;
  const authCtx = import_react6.default.useMemo(() => {
    const value = { sessionId, userId, actor, orgId, orgRole, orgSlug };
    return { value };
  }, [sessionId, userId, actor, orgId, orgRole, orgSlug]);
  const userCtx = import_react6.default.useMemo(() => ({ value: user }), [userId, user]);
  const sessionCtx = import_react6.default.useMemo(() => ({ value: session }), [sessionId, session]);
  const organizationCtx = import_react6.default.useMemo(() => {
    const value = {
      organization,
      lastOrganizationInvitation,
      lastOrganizationMember
    };
    return { value };
  }, [orgId, organization, lastOrganizationInvitation, lastOrganizationMember]);
  return (
    // @ts-expect-error
    import_react6.default.createElement(IsomorphicClerkContext.Provider, { value: clerkCtx }, import_react6.default.createElement(ClientContext.Provider, { value: clientCtx }, import_react6.default.createElement(SessionContext.Provider, { value: sessionCtx }, import_react6.default.createElement(OrganizationContext.Provider, { value: organizationCtx }, import_react6.default.createElement(AuthContext.Provider, { value: authCtx }, import_react6.default.createElement(UserContext.Provider, { value: userCtx }, children))))))
  );
}
var useLoadedIsomorphicClerk = (options) => {
  const [loaded, setLoaded] = import_react6.default.useState(false);
  const isomorphicClerk = import_react6.default.useMemo(() => IsomorphicClerk.getOrCreateInstance(options), []);
  import_react6.default.useEffect(() => {
    isomorphicClerk.__unstable__updateProps({ appearance: options.appearance });
  }, [options.appearance]);
  import_react6.default.useEffect(() => {
    isomorphicClerk.__unstable__updateProps({ options });
  }, [options.localization]);
  import_react6.default.useEffect(() => {
    isomorphicClerk.addOnLoaded(() => setLoaded(true));
  }, []);
  return { isomorphicClerk, loaded };
};

// node_modules/@clerk/clerk-react/dist/esm/contexts/StructureContext.js
var import_react7 = __toESM(require_react());

// node_modules/@clerk/clerk-react/dist/esm/contexts/assertHelpers.js
function assertWrappedByClerkProvider(contextVal) {
  if (!contextVal) {
    throw new Error(noClerkProviderError);
  }
}

// node_modules/@clerk/clerk-react/dist/esm/contexts/StructureContext.js
var StructureContextStates = Object.freeze({
  noGuarantees: Object.freeze({
    guaranteedLoaded: false
  }),
  guaranteedLoaded: Object.freeze({
    guaranteedLoaded: true
  })
});
var StructureContext = import_react7.default.createContext(void 0);
StructureContext.displayName = "StructureContext";
var useStructureContext = () => {
  const structureCtx = import_react7.default.useContext(StructureContext);
  assertWrappedByClerkProvider(structureCtx);
  return structureCtx;
};
var LoadedGuarantee = ({ children }) => {
  const structure = useStructureContext();
  if (structure.guaranteedLoaded) {
    return import_react7.default.createElement(import_react7.default.Fragment, null, children);
  }
  return import_react7.default.createElement(StructureContext.Provider, { value: StructureContextStates.guaranteedLoaded }, children);
};

// node_modules/@clerk/clerk-react/dist/esm/contexts/ClerkProvider.js
__internal__setErrorThrowerOptions({
  packageName: "@clerk/clerk-react"
});
function ClerkProviderBase(props) {
  const { initialState, children, ...restIsomorphicClerkOptions } = props;
  const { frontendApi = "", publishableKey = "", Clerk: userInitialisedClerk } = restIsomorphicClerkOptions;
  if (!userInitialisedClerk) {
    if (!publishableKey && !frontendApi) {
      errorThrower.throwMissingPublishableKeyError();
    } else if (publishableKey && !isPublishableKey(publishableKey)) {
      errorThrower.throwInvalidPublishableKeyError({ key: publishableKey });
    } else if (!publishableKey && frontendApi && !isLegacyFrontendApiKey(frontendApi)) {
      errorThrower.throwInvalidFrontendApiError({ key: frontendApi });
    }
  }
  return import_react8.default.createElement(StructureContext.Provider, { value: StructureContextStates.noGuarantees }, import_react8.default.createElement(
    ClerkContextProvider,
    {
      initialState,
      isomorphicClerkOptions: restIsomorphicClerkOptions
    },
    children
  ));
}
var ClerkProvider = withMaxAllowedInstancesGuard(ClerkProviderBase, "ClerkProvider", multipleClerkProvidersError);
ClerkProvider.displayName = "ClerkProvider";

// node_modules/@clerk/clerk-react/dist/esm/components/uiComponents.js
var import_react10 = __toESM(require_react());

// node_modules/@clerk/clerk-react/dist/esm/components/withClerk.js
var import_react9 = __toESM(require_react());
var withClerk = (Component, displayName) => {
  displayName = displayName || Component.displayName || Component.name || "Component";
  Component.displayName = displayName;
  const HOC = (props) => {
    const clerk = useIsomorphicClerkContext();
    if (!clerk.loaded) {
      return null;
    }
    return import_react9.default.createElement(LoadedGuarantee, null, import_react9.default.createElement(
      Component,
      {
        ...props,
        clerk
      }
    ));
  };
  HOC.displayName = `withClerk(${displayName})`;
  return HOC;
};
var WithClerk = ({ children }) => {
  const clerk = useIsomorphicClerkContext();
  if (typeof children !== "function") {
    throw new Error(hocChildrenNotAFunctionError);
  }
  if (!clerk.loaded) {
    return null;
  }
  return import_react9.default.createElement(LoadedGuarantee, null, children(clerk));
};

// node_modules/@clerk/clerk-react/dist/esm/components/uiComponents.js
var Portal = class extends import_react10.default.PureComponent {
  constructor() {
    super(...arguments);
    this.portalRef = import_react10.default.createRef();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.props.appearance !== this.props.props.appearance) {
      this.props.updateProps({ node: this.portalRef.current, props: this.props.props });
    }
  }
  componentDidMount() {
    if (this.portalRef.current) {
      this.props.mount(this.portalRef.current, this.props.props);
    }
  }
  componentWillUnmount() {
    if (this.portalRef.current) {
      this.props.unmount(this.portalRef.current);
    }
  }
  render() {
    return import_react10.default.createElement("div", { ref: this.portalRef });
  }
};
var SignIn = withClerk(({ clerk, ...props }) => {
  return import_react10.default.createElement(
    Portal,
    {
      mount: clerk.mountSignIn,
      unmount: clerk.unmountSignIn,
      updateProps: clerk.__unstable__updateProps,
      props
    }
  );
}, "SignIn");
var SignUp = withClerk(({ clerk, ...props }) => {
  return import_react10.default.createElement(
    Portal,
    {
      mount: clerk.mountSignUp,
      unmount: clerk.unmountSignUp,
      updateProps: clerk.__unstable__updateProps,
      props
    }
  );
}, "SignUp");
var UserProfile = withClerk(({ clerk, ...props }) => {
  return import_react10.default.createElement(
    Portal,
    {
      mount: clerk.mountUserProfile,
      unmount: clerk.unmountUserProfile,
      updateProps: clerk.__unstable__updateProps,
      props
    }
  );
}, "UserProfile");
var UserButton = withClerk(({ clerk, ...props }) => {
  return import_react10.default.createElement(
    Portal,
    {
      mount: clerk.mountUserButton,
      unmount: clerk.unmountUserButton,
      updateProps: clerk.__unstable__updateProps,
      props
    }
  );
}, "UserButton");
var OrganizationProfile = withClerk(({ clerk, ...props }) => {
  return import_react10.default.createElement(
    Portal,
    {
      mount: clerk.mountOrganizationProfile,
      unmount: clerk.unmountOrganizationProfile,
      updateProps: clerk.__unstable__updateProps,
      props
    }
  );
}, "OrganizationProfile");
var CreateOrganization = withClerk(({ clerk, ...props }) => {
  return import_react10.default.createElement(
    Portal,
    {
      mount: clerk.mountCreateOrganization,
      unmount: clerk.unmountCreateOrganization,
      updateProps: clerk.__unstable__updateProps,
      props
    }
  );
}, "CreateOrganization");
var OrganizationSwitcher = withClerk(({ clerk, ...props }) => {
  return import_react10.default.createElement(
    Portal,
    {
      mount: clerk.mountOrganizationSwitcher,
      unmount: clerk.unmountOrganizationSwitcher,
      updateProps: clerk.__unstable__updateProps,
      props
    }
  );
}, "OrganizationSwitcher");

// node_modules/@clerk/clerk-react/dist/esm/components/controlComponents.js
var import_react11 = __toESM(require_react());
var SignedIn = ({ children }) => {
  const { userId } = useAuthContext();
  if (userId) {
    return import_react11.default.createElement(import_react11.default.Fragment, null, children);
  }
  return null;
};
var SignedOut = ({ children }) => {
  const { userId } = useAuthContext();
  if (userId === null) {
    return import_react11.default.createElement(import_react11.default.Fragment, null, children);
  }
  return null;
};
var ClerkLoaded = ({ children }) => {
  const isomorphicClerk = useIsomorphicClerkContext();
  if (!isomorphicClerk.loaded) {
    return null;
  }
  return import_react11.default.createElement(LoadedGuarantee, null, children);
};
var ClerkLoading = ({ children }) => {
  const isomorphicClerk = useIsomorphicClerkContext();
  if (isomorphicClerk.loaded) {
    return null;
  }
  return import_react11.default.createElement(import_react11.default.Fragment, null, children);
};
var RedirectToSignIn = withClerk(({ clerk, ...props }) => {
  const { client, session } = clerk;
  const { __unstable__environment } = clerk;
  const hasActiveSessions = client.activeSessions && client.activeSessions.length > 0;
  import_react11.default.useEffect(() => {
    if (session === null && hasActiveSessions && __unstable__environment) {
      const { afterSignOutOneUrl } = __unstable__environment.displayConfig;
      void clerk.navigate(afterSignOutOneUrl);
    } else {
      void clerk.redirectToSignIn(props);
    }
  }, []);
  return null;
}, "RedirectToSignIn");
var RedirectToSignUp = withClerk(({ clerk, ...props }) => {
  import_react11.default.useEffect(() => {
    void clerk.redirectToSignUp(props);
  }, []);
  return null;
}, "RedirectToSignUp");
var RedirectToUserProfile = withClerk(({ clerk }) => {
  import_react11.default.useEffect(() => {
    clerk.redirectToUserProfile();
  }, []);
  return null;
}, "RedirectToUserProfile");
var RedirectToOrganizationProfile = withClerk(({ clerk }) => {
  import_react11.default.useEffect(() => {
    clerk.redirectToOrganizationProfile();
  }, []);
  return null;
}, "RedirectToOrganizationProfile");
var RedirectToCreateOrganization = withClerk(({ clerk }) => {
  import_react11.default.useEffect(() => {
    clerk.redirectToCreateOrganization();
  }, []);
  return null;
}, "RedirectToCreateOrganization");
var AuthenticateWithRedirectCallback = withClerk(
  ({ clerk, ...handleRedirectCallbackParams }) => {
    import_react11.default.useEffect(() => {
      void clerk.handleRedirectCallback(handleRedirectCallbackParams);
    }, []);
    return null;
  },
  "AuthenticateWithRedirectCallback"
);
var MultisessionAppSupport = ({ children }) => {
  const session = useSessionContext();
  return import_react11.default.createElement(import_react11.default.Fragment, { key: session ? session.id : "no-users" }, children);
};

// node_modules/@clerk/clerk-react/dist/esm/components/withUser.js
var import_react12 = __toESM(require_react());
var withUser = (Component, displayName) => {
  displayName = displayName || Component.displayName || Component.name || "Component";
  Component.displayName = displayName;
  const HOC = (props) => {
    const user = useUserContext();
    if (!user) {
      return null;
    }
    return import_react12.default.createElement(
      Component,
      {
        ...props,
        user
      }
    );
  };
  HOC.displayName = `withUser(${displayName})`;
  return HOC;
};
var WithUser = ({ children }) => {
  const user = useUserContext();
  if (typeof children !== "function") {
    throw new Error(hocChildrenNotAFunctionError);
  }
  if (!user) {
    return null;
  }
  return import_react12.default.createElement(import_react12.default.Fragment, null, children(user));
};

// node_modules/@clerk/clerk-react/dist/esm/components/withSession.js
var import_react13 = __toESM(require_react());
var withSession = (Component, displayName) => {
  displayName = displayName || Component.displayName || Component.name || "Component";
  Component.displayName = displayName;
  const HOC = (props) => {
    const session = useSessionContext();
    if (!session) {
      return null;
    }
    return import_react13.default.createElement(
      Component,
      {
        ...props,
        session
      }
    );
  };
  HOC.displayName = `withSession(${displayName})`;
  return HOC;
};
var WithSession = ({ children }) => {
  const session = useSessionContext();
  if (typeof children !== "function") {
    throw new Error(hocChildrenNotAFunctionError);
  }
  if (!session) {
    return null;
  }
  return import_react13.default.createElement(import_react13.default.Fragment, null, children(session));
};

// node_modules/@clerk/clerk-react/dist/esm/components/SignInButton.js
var import_react14 = __toESM(require_react());
var SignInButton = withClerk(({ clerk, children, ...props }) => {
  const { afterSignInUrl, afterSignUpUrl, redirectUrl, mode, ...rest } = props;
  children = normalizeWithDefaultValue(children, "Sign in");
  const child = assertSingleChild(children)("SignInButton");
  const clickHandler = () => {
    const opts = { afterSignInUrl, afterSignUpUrl, redirectUrl };
    if (mode === "modal") {
      return clerk.openSignIn(opts);
    }
    return clerk.redirectToSignIn(opts);
  };
  const wrappedChildClickHandler = async (e) => {
    await safeExecute(child.props.onClick)(e);
    return clickHandler();
  };
  const childProps = { ...rest, onClick: wrappedChildClickHandler };
  return import_react14.default.cloneElement(child, childProps);
}, "SignInButton");

// node_modules/@clerk/clerk-react/dist/esm/components/SignUpButton.js
var import_react15 = __toESM(require_react());
var SignUpButton = withClerk(({ clerk, children, ...props }) => {
  const { afterSignInUrl, afterSignUpUrl, redirectUrl, mode, ...rest } = props;
  children = normalizeWithDefaultValue(children, "Sign up");
  const child = assertSingleChild(children)("SignUpButton");
  const clickHandler = () => {
    const opts = { afterSignInUrl, afterSignUpUrl, redirectUrl };
    if (mode === "modal") {
      return clerk.openSignUp(opts);
    }
    return clerk.redirectToSignUp(opts);
  };
  const wrappedChildClickHandler = async (e) => {
    await safeExecute(child.props.onClick)(e);
    return clickHandler();
  };
  const childProps = { ...rest, onClick: wrappedChildClickHandler };
  return import_react15.default.cloneElement(child, childProps);
}, "SignUpButton");

// node_modules/@clerk/clerk-react/dist/esm/components/SignOutButton.js
var import_react16 = __toESM(require_react());
var SignOutButton = withClerk(
  ({ clerk, children, ...props }) => {
    const { signOutCallback, signOutOptions, ...rest } = props;
    children = normalizeWithDefaultValue(children, "Sign out");
    const child = assertSingleChild(children)("SignOutButton");
    const clickHandler = () => {
      return clerk.signOut(signOutCallback, signOutOptions);
    };
    const wrappedChildClickHandler = async (e) => {
      await safeExecute(child.props.onClick)(e);
      return clickHandler();
    };
    const childProps = { ...rest, onClick: wrappedChildClickHandler };
    return import_react16.default.cloneElement(child, childProps);
  },
  "SignOutButton"
);

// node_modules/@clerk/clerk-react/dist/esm/components/SignInWithMetamaskButton.js
var import_react17 = __toESM(require_react());
var SignInWithMetamaskButton = withClerk(
  ({ clerk, children, ...props }) => {
    const { redirectUrl, ...rest } = props;
    children = normalizeWithDefaultValue(children, "Sign in with Metamask");
    const child = assertSingleChild(children)("SignInWithMetamaskButton");
    const clickHandler = async () => {
      async function authenticate() {
        await clerk.authenticateWithMetamask({ redirectUrl });
      }
      void authenticate();
    };
    const wrappedChildClickHandler = async (e) => {
      await safeExecute(child.props.onClick)(e);
      return clickHandler();
    };
    const childProps = { ...rest, onClick: wrappedChildClickHandler };
    return import_react17.default.cloneElement(child, childProps);
  },
  "SignInWithMetamask"
);

// node_modules/@clerk/clerk-react/dist/esm/hooks/useUser.js
function useUser() {
  const user = useUserContext();
  if (user === void 0) {
    return { isLoaded: false, isSignedIn: void 0, user: void 0 };
  }
  if (user === null) {
    return { isLoaded: true, isSignedIn: false, user: null };
  }
  return { isLoaded: true, isSignedIn: true, user };
}

// node_modules/@clerk/clerk-react/dist/esm/hooks/useAuth.js
var import_react18 = __toESM(require_react());

// node_modules/@clerk/clerk-react/dist/esm/hooks/utils.js
var clerkLoaded = (isomorphicClerk) => {
  return new Promise((resolve) => {
    if (isomorphicClerk.loaded) {
      resolve();
    }
    isomorphicClerk.addOnLoaded(resolve);
  });
};
var createGetToken = (isomorphicClerk) => {
  return async (options) => {
    await clerkLoaded(isomorphicClerk);
    if (!isomorphicClerk.session) {
      return null;
    }
    return isomorphicClerk.session.getToken(options);
  };
};
var createSignOut = (isomorphicClerk) => {
  return async (...args) => {
    await clerkLoaded(isomorphicClerk);
    return isomorphicClerk.signOut(...args);
  };
};

// node_modules/@clerk/clerk-react/dist/esm/hooks/useAuth.js
var useAuth = () => {
  const { sessionId, userId, actor, orgId, orgRole, orgSlug } = useAuthContext();
  const isomorphicClerk = useIsomorphicClerkContext();
  const getToken = (0, import_react18.useCallback)(createGetToken(isomorphicClerk), [isomorphicClerk]);
  const signOut = (0, import_react18.useCallback)(createSignOut(isomorphicClerk), [isomorphicClerk]);
  if (sessionId === void 0 && userId === void 0) {
    return {
      isLoaded: false,
      isSignedIn: void 0,
      sessionId,
      userId,
      actor: void 0,
      orgId: void 0,
      orgRole: void 0,
      orgSlug: void 0,
      signOut,
      getToken
    };
  }
  if (sessionId === null && userId === null) {
    return {
      isLoaded: true,
      isSignedIn: false,
      sessionId,
      userId,
      actor: null,
      orgId: null,
      orgRole: null,
      orgSlug: null,
      signOut,
      getToken
    };
  }
  if (!!sessionId && !!userId && !!orgId && !!orgRole) {
    return {
      isLoaded: true,
      isSignedIn: true,
      sessionId,
      userId,
      actor: actor || null,
      orgId,
      orgRole,
      orgSlug: orgSlug || null,
      signOut,
      getToken
    };
  }
  if (!!sessionId && !!userId && !orgId) {
    return {
      isLoaded: true,
      isSignedIn: true,
      sessionId,
      userId,
      actor: actor || null,
      orgId: null,
      orgRole: null,
      orgSlug: null,
      signOut,
      getToken
    };
  }
  throw new Error(invalidStateError);
};

// node_modules/@clerk/clerk-react/dist/esm/hooks/useSession.js
var useSession = () => {
  const session = useSessionContext();
  if (session === void 0) {
    return { isLoaded: false, isSignedIn: void 0, session: void 0 };
  }
  if (session === null) {
    return { isLoaded: true, isSignedIn: false, session: null };
  }
  return { isLoaded: true, isSignedIn: true, session };
};

// node_modules/@clerk/clerk-react/dist/esm/hooks/useClerk.js
var useClerk = () => {
  const isomorphicClerk = useIsomorphicClerkContext();
  return isomorphicClerk;
};

// node_modules/@clerk/clerk-react/dist/esm/hooks/useSignIn.js
var useSignIn = () => {
  const isomorphicClerk = useIsomorphicClerkContext();
  const client = useClientContext();
  if (!client) {
    return { isLoaded: false, signIn: void 0, setSession: void 0, setActive: void 0 };
  }
  return {
    isLoaded: true,
    signIn: client.signIn,
    setSession: isomorphicClerk.setSession,
    setActive: isomorphicClerk.setActive
  };
};

// node_modules/@clerk/clerk-react/dist/esm/hooks/useSignUp.js
var useSignUp = () => {
  const isomorphicClerk = useIsomorphicClerkContext();
  const client = useClientContext();
  if (!client) {
    return { isLoaded: false, signUp: void 0, setSession: void 0, setActive: void 0 };
  }
  return {
    isLoaded: true,
    signUp: client.signUp,
    setSession: isomorphicClerk.setSession,
    setActive: isomorphicClerk.setActive
  };
};

// node_modules/@clerk/clerk-react/dist/esm/hooks/useSessionList.js
var useSessionList = () => {
  const isomorphicClerk = useIsomorphicClerkContext();
  const client = useClientContext();
  if (!client) {
    return { isLoaded: false, sessions: void 0, setSession: void 0, setActive: void 0 };
  }
  return {
    isLoaded: true,
    sessions: client.sessions,
    setSession: isomorphicClerk.setSession,
    setActive: isomorphicClerk.setActive
  };
};

// node_modules/@clerk/clerk-react/dist/esm/hooks/useMagicLink.js
var import_react19 = __toESM(require_react());
function useMagicLink(resource) {
  const { startMagicLinkFlow, cancelMagicLinkFlow } = import_react19.default.useMemo(() => resource.createMagicLinkFlow(), [resource]);
  import_react19.default.useEffect(() => {
    return cancelMagicLinkFlow;
  }, []);
  return {
    startMagicLinkFlow,
    cancelMagicLinkFlow
  };
}
export {
  AuthenticateWithRedirectCallback,
  ClerkLoaded,
  ClerkLoading,
  ClerkProvider,
  CreateOrganization,
  MagicLinkErrorCode,
  MultisessionAppSupport,
  OrganizationProfile,
  OrganizationSwitcher,
  RedirectToCreateOrganization,
  RedirectToOrganizationProfile,
  RedirectToSignIn,
  RedirectToSignUp,
  RedirectToUserProfile,
  SignIn,
  SignInButton,
  SignInWithMetamaskButton,
  SignOutButton,
  SignUp,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  UserProfile,
  WithClerk,
  WithSession,
  WithUser,
  __internal__setErrorThrowerOptions,
  isClerkAPIResponseError,
  isKnownError,
  isMagicLinkError,
  isMetamaskError,
  useAuth,
  useClerk,
  useMagicLink,
  useOrganization,
  useOrganizationList,
  useOrganizations,
  useSession,
  useSessionList,
  useSignIn,
  useSignUp,
  useUser,
  withClerk,
  withSession,
  withUser
};
/*! Bundled license information:

js-cookie/dist/js.cookie.mjs:
  (*! js-cookie v3.0.1 | MIT *)

swr/dist/index.mjs:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=@clerk_clerk-react.js.map
