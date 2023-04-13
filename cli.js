var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/@fast-csv/format/build/src/FormatterOptions.js
var require_FormatterOptions = __commonJS({
  "node_modules/@fast-csv/format/build/src/FormatterOptions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FormatterOptions = void 0;
    var FormatterOptions = class {
      constructor(opts = {}) {
        var _a;
        this.objectMode = true;
        this.delimiter = ",";
        this.rowDelimiter = "\n";
        this.quote = '"';
        this.escape = this.quote;
        this.quoteColumns = false;
        this.quoteHeaders = this.quoteColumns;
        this.headers = null;
        this.includeEndRowDelimiter = false;
        this.writeBOM = false;
        this.BOM = "\uFEFF";
        this.alwaysWriteHeaders = false;
        Object.assign(this, opts || {});
        if (typeof (opts === null || opts === void 0 ? void 0 : opts.quoteHeaders) === "undefined") {
          this.quoteHeaders = this.quoteColumns;
        }
        if ((opts === null || opts === void 0 ? void 0 : opts.quote) === true) {
          this.quote = '"';
        } else if ((opts === null || opts === void 0 ? void 0 : opts.quote) === false) {
          this.quote = "";
        }
        if (typeof (opts === null || opts === void 0 ? void 0 : opts.escape) !== "string") {
          this.escape = this.quote;
        }
        this.shouldWriteHeaders = !!this.headers && ((_a = opts.writeHeaders) !== null && _a !== void 0 ? _a : true);
        this.headers = Array.isArray(this.headers) ? this.headers : null;
        this.escapedQuote = `${this.escape}${this.quote}`;
      }
    };
    exports.FormatterOptions = FormatterOptions;
  }
});

// node_modules/lodash.isfunction/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.isfunction/index.js"(exports, module2) {
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var nullTag = "[object Null]";
    var proxyTag = "[object Proxy]";
    var undefinedTag = "[object Undefined]";
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var Symbol2 = root.Symbol;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module2.exports = isFunction;
  }
});

// node_modules/lodash.isequal/index.js
var require_lodash2 = __commonJS({
  "node_modules/lodash.isequal/index.js"(exports, module2) {
    var LARGE_ARRAY_SIZE = 200;
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var asyncTag = "[object AsyncFunction]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var nullTag = "[object Null]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var proxyTag = "[object Proxy]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var undefinedTag = "[object Undefined]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    function arraySome(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var nativeObjectToString = objectProto.toString;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var Symbol2 = root.Symbol;
    var Uint8Array2 = root.Uint8Array;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var splice = arrayProto.splice;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var nativeKeys = overArg(Object.keys, Object);
    var DataView = getNative(root, "DataView");
    var Map2 = getNative(root, "Map");
    var Promise2 = getNative(root, "Promise");
    var Set2 = getNative(root, "Set");
    var WeakMap = getNative(root, "WeakMap");
    var nativeCreate = getNative(Object, "create");
    var dataViewCtorString = toSource(DataView);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap);
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function SetCache(values) {
      var index = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    function stackGet(key) {
      return this.__data__.get(key);
    }
    function stackHas(key) {
      return this.__data__.has(key);
    }
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var stacked = stack.get(array);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index < arrLength) {
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var stacked = stack.get(object);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    var isArguments = baseIsArguments(function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    var isBuffer = nativeIsBuffer || stubFalse;
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    function stubArray() {
      return [];
    }
    function stubFalse() {
      return false;
    }
    module2.exports = isEqual;
  }
});

// node_modules/lodash.isboolean/index.js
var require_lodash3 = __commonJS({
  "node_modules/lodash.isboolean/index.js"(exports, module2) {
    var boolTag = "[object Boolean]";
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    function isBoolean(value) {
      return value === true || value === false || isObjectLike(value) && objectToString.call(value) == boolTag;
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    module2.exports = isBoolean;
  }
});

// node_modules/lodash.isnil/index.js
var require_lodash4 = __commonJS({
  "node_modules/lodash.isnil/index.js"(exports, module2) {
    function isNil(value) {
      return value == null;
    }
    module2.exports = isNil;
  }
});

// node_modules/lodash.escaperegexp/index.js
var require_lodash5 = __commonJS({
  "node_modules/lodash.escaperegexp/index.js"(exports, module2) {
    var INFINITY = 1 / 0;
    var symbolTag = "[object Symbol]";
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reHasRegExpChar = RegExp(reRegExpChar.source);
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var Symbol2 = root.Symbol;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    function escapeRegExp(string) {
      string = toString(string);
      return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
    }
    module2.exports = escapeRegExp;
  }
});

// node_modules/@fast-csv/format/build/src/formatter/FieldFormatter.js
var require_FieldFormatter = __commonJS({
  "node_modules/@fast-csv/format/build/src/formatter/FieldFormatter.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FieldFormatter = void 0;
    var lodash_isboolean_1 = __importDefault(require_lodash3());
    var lodash_isnil_1 = __importDefault(require_lodash4());
    var lodash_escaperegexp_1 = __importDefault(require_lodash5());
    var FieldFormatter = class {
      constructor(formatterOptions) {
        this._headers = null;
        this.formatterOptions = formatterOptions;
        if (formatterOptions.headers !== null) {
          this.headers = formatterOptions.headers;
        }
        this.REPLACE_REGEXP = new RegExp(formatterOptions.quote, "g");
        const escapePattern = `[${formatterOptions.delimiter}${lodash_escaperegexp_1.default(formatterOptions.rowDelimiter)}|\r|
]`;
        this.ESCAPE_REGEXP = new RegExp(escapePattern);
      }
      set headers(headers) {
        this._headers = headers;
      }
      shouldQuote(fieldIndex, isHeader) {
        const quoteConfig = isHeader ? this.formatterOptions.quoteHeaders : this.formatterOptions.quoteColumns;
        if (lodash_isboolean_1.default(quoteConfig)) {
          return quoteConfig;
        }
        if (Array.isArray(quoteConfig)) {
          return quoteConfig[fieldIndex];
        }
        if (this._headers !== null) {
          return quoteConfig[this._headers[fieldIndex]];
        }
        return false;
      }
      format(field, fieldIndex, isHeader) {
        const preparedField = `${lodash_isnil_1.default(field) ? "" : field}`.replace(/\0/g, "");
        const { formatterOptions } = this;
        if (formatterOptions.quote !== "") {
          const shouldEscape = preparedField.indexOf(formatterOptions.quote) !== -1;
          if (shouldEscape) {
            return this.quoteField(preparedField.replace(this.REPLACE_REGEXP, formatterOptions.escapedQuote));
          }
        }
        const hasEscapeCharacters = preparedField.search(this.ESCAPE_REGEXP) !== -1;
        if (hasEscapeCharacters || this.shouldQuote(fieldIndex, isHeader)) {
          return this.quoteField(preparedField);
        }
        return preparedField;
      }
      quoteField(field) {
        const { quote } = this.formatterOptions;
        return `${quote}${field}${quote}`;
      }
    };
    exports.FieldFormatter = FieldFormatter;
  }
});

// node_modules/@fast-csv/format/build/src/types.js
var require_types = __commonJS({
  "node_modules/@fast-csv/format/build/src/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isSyncTransform = void 0;
    exports.isSyncTransform = (transform) => transform.length === 1;
  }
});

// node_modules/@fast-csv/format/build/src/formatter/RowFormatter.js
var require_RowFormatter = __commonJS({
  "node_modules/@fast-csv/format/build/src/formatter/RowFormatter.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RowFormatter = void 0;
    var lodash_isfunction_1 = __importDefault(require_lodash());
    var lodash_isequal_1 = __importDefault(require_lodash2());
    var FieldFormatter_1 = require_FieldFormatter();
    var types_1 = require_types();
    var RowFormatter = class {
      constructor(formatterOptions) {
        this.rowCount = 0;
        this.formatterOptions = formatterOptions;
        this.fieldFormatter = new FieldFormatter_1.FieldFormatter(formatterOptions);
        this.headers = formatterOptions.headers;
        this.shouldWriteHeaders = formatterOptions.shouldWriteHeaders;
        this.hasWrittenHeaders = false;
        if (this.headers !== null) {
          this.fieldFormatter.headers = this.headers;
        }
        if (formatterOptions.transform) {
          this.rowTransform = formatterOptions.transform;
        }
      }
      static isRowHashArray(row) {
        if (Array.isArray(row)) {
          return Array.isArray(row[0]) && row[0].length === 2;
        }
        return false;
      }
      static isRowArray(row) {
        return Array.isArray(row) && !this.isRowHashArray(row);
      }
      // get headers from a row item
      static gatherHeaders(row) {
        if (RowFormatter.isRowHashArray(row)) {
          return row.map((it) => it[0]);
        }
        if (Array.isArray(row)) {
          return row;
        }
        return Object.keys(row);
      }
      // eslint-disable-next-line @typescript-eslint/no-shadow
      static createTransform(transformFunction) {
        if (types_1.isSyncTransform(transformFunction)) {
          return (row, cb) => {
            let transformedRow = null;
            try {
              transformedRow = transformFunction(row);
            } catch (e) {
              return cb(e);
            }
            return cb(null, transformedRow);
          };
        }
        return (row, cb) => {
          transformFunction(row, cb);
        };
      }
      set rowTransform(transformFunction) {
        if (!lodash_isfunction_1.default(transformFunction)) {
          throw new TypeError("The transform should be a function");
        }
        this._rowTransform = RowFormatter.createTransform(transformFunction);
      }
      format(row, cb) {
        this.callTransformer(row, (err, transformedRow) => {
          if (err) {
            return cb(err);
          }
          if (!row) {
            return cb(null);
          }
          const rows = [];
          if (transformedRow) {
            const { shouldFormatColumns, headers } = this.checkHeaders(transformedRow);
            if (this.shouldWriteHeaders && headers && !this.hasWrittenHeaders) {
              rows.push(this.formatColumns(headers, true));
              this.hasWrittenHeaders = true;
            }
            if (shouldFormatColumns) {
              const columns = this.gatherColumns(transformedRow);
              rows.push(this.formatColumns(columns, false));
            }
          }
          return cb(null, rows);
        });
      }
      finish(cb) {
        const rows = [];
        if (this.formatterOptions.alwaysWriteHeaders && this.rowCount === 0) {
          if (!this.headers) {
            return cb(new Error("`alwaysWriteHeaders` option is set to true but `headers` option not provided."));
          }
          rows.push(this.formatColumns(this.headers, true));
        }
        if (this.formatterOptions.includeEndRowDelimiter) {
          rows.push(this.formatterOptions.rowDelimiter);
        }
        return cb(null, rows);
      }
      // check if we need to write header return true if we should also write a row
      // could be false if headers is true and the header row(first item) is passed in
      checkHeaders(row) {
        if (this.headers) {
          return { shouldFormatColumns: true, headers: this.headers };
        }
        const headers = RowFormatter.gatherHeaders(row);
        this.headers = headers;
        this.fieldFormatter.headers = headers;
        if (!this.shouldWriteHeaders) {
          return { shouldFormatColumns: true, headers: null };
        }
        return { shouldFormatColumns: !lodash_isequal_1.default(headers, row), headers };
      }
      // todo change this method to unknown[]
      gatherColumns(row) {
        if (this.headers === null) {
          throw new Error("Headers is currently null");
        }
        if (!Array.isArray(row)) {
          return this.headers.map((header) => row[header]);
        }
        if (RowFormatter.isRowHashArray(row)) {
          return this.headers.map((header, i) => {
            const col = row[i];
            if (col) {
              return col[1];
            }
            return "";
          });
        }
        if (RowFormatter.isRowArray(row) && !this.shouldWriteHeaders) {
          return row;
        }
        return this.headers.map((header, i) => row[i]);
      }
      callTransformer(row, cb) {
        if (!this._rowTransform) {
          return cb(null, row);
        }
        return this._rowTransform(row, cb);
      }
      formatColumns(columns, isHeadersRow) {
        const formattedCols = columns.map((field, i) => this.fieldFormatter.format(field, i, isHeadersRow)).join(this.formatterOptions.delimiter);
        const { rowCount } = this;
        this.rowCount += 1;
        if (rowCount) {
          return [this.formatterOptions.rowDelimiter, formattedCols].join("");
        }
        return formattedCols;
      }
    };
    exports.RowFormatter = RowFormatter;
  }
});

// node_modules/@fast-csv/format/build/src/formatter/index.js
var require_formatter = __commonJS({
  "node_modules/@fast-csv/format/build/src/formatter/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FieldFormatter = exports.RowFormatter = void 0;
    var RowFormatter_1 = require_RowFormatter();
    Object.defineProperty(exports, "RowFormatter", { enumerable: true, get: function() {
      return RowFormatter_1.RowFormatter;
    } });
    var FieldFormatter_1 = require_FieldFormatter();
    Object.defineProperty(exports, "FieldFormatter", { enumerable: true, get: function() {
      return FieldFormatter_1.FieldFormatter;
    } });
  }
});

// node_modules/@fast-csv/format/build/src/CsvFormatterStream.js
var require_CsvFormatterStream = __commonJS({
  "node_modules/@fast-csv/format/build/src/CsvFormatterStream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CsvFormatterStream = void 0;
    var stream_1 = require("stream");
    var formatter_1 = require_formatter();
    var CsvFormatterStream = class extends stream_1.Transform {
      constructor(formatterOptions) {
        super({ writableObjectMode: formatterOptions.objectMode });
        this.hasWrittenBOM = false;
        this.formatterOptions = formatterOptions;
        this.rowFormatter = new formatter_1.RowFormatter(formatterOptions);
        this.hasWrittenBOM = !formatterOptions.writeBOM;
      }
      transform(transformFunction) {
        this.rowFormatter.rowTransform = transformFunction;
        return this;
      }
      _transform(row, encoding, cb) {
        let cbCalled = false;
        try {
          if (!this.hasWrittenBOM) {
            this.push(this.formatterOptions.BOM);
            this.hasWrittenBOM = true;
          }
          this.rowFormatter.format(row, (err, rows) => {
            if (err) {
              cbCalled = true;
              return cb(err);
            }
            if (rows) {
              rows.forEach((r) => {
                this.push(Buffer.from(r, "utf8"));
              });
            }
            cbCalled = true;
            return cb();
          });
        } catch (e) {
          if (cbCalled) {
            throw e;
          }
          cb(e);
        }
      }
      _flush(cb) {
        this.rowFormatter.finish((err, rows) => {
          if (err) {
            return cb(err);
          }
          if (rows) {
            rows.forEach((r) => {
              this.push(Buffer.from(r, "utf8"));
            });
          }
          return cb();
        });
      }
    };
    exports.CsvFormatterStream = CsvFormatterStream;
  }
});

// node_modules/@fast-csv/format/build/src/index.js
var require_src = __commonJS({
  "node_modules/@fast-csv/format/build/src/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.writeToPath = exports.writeToString = exports.writeToBuffer = exports.writeToStream = exports.write = exports.format = exports.FormatterOptions = exports.CsvFormatterStream = void 0;
    var util_1 = require("util");
    var stream_1 = require("stream");
    var fs2 = __importStar(require("fs"));
    var FormatterOptions_1 = require_FormatterOptions();
    var CsvFormatterStream_1 = require_CsvFormatterStream();
    __exportStar(require_types(), exports);
    var CsvFormatterStream_2 = require_CsvFormatterStream();
    Object.defineProperty(exports, "CsvFormatterStream", { enumerable: true, get: function() {
      return CsvFormatterStream_2.CsvFormatterStream;
    } });
    var FormatterOptions_2 = require_FormatterOptions();
    Object.defineProperty(exports, "FormatterOptions", { enumerable: true, get: function() {
      return FormatterOptions_2.FormatterOptions;
    } });
    exports.format = (options) => new CsvFormatterStream_1.CsvFormatterStream(new FormatterOptions_1.FormatterOptions(options));
    exports.write = (rows, options) => {
      const csvStream = exports.format(options);
      const promiseWrite = util_1.promisify((row, cb) => {
        csvStream.write(row, void 0, cb);
      });
      rows.reduce((prev, row) => prev.then(() => promiseWrite(row)), Promise.resolve()).then(() => csvStream.end()).catch((err) => {
        csvStream.emit("error", err);
      });
      return csvStream;
    };
    exports.writeToStream = (ws, rows, options) => exports.write(rows, options).pipe(ws);
    exports.writeToBuffer = (rows, opts = {}) => {
      const buffers = [];
      const ws = new stream_1.Writable({
        write(data, enc, writeCb) {
          buffers.push(data);
          writeCb();
        }
      });
      return new Promise((res, rej) => {
        ws.on("error", rej).on("finish", () => res(Buffer.concat(buffers)));
        exports.write(rows, opts).pipe(ws);
      });
    };
    exports.writeToString = (rows, options) => exports.writeToBuffer(rows, options).then((buffer) => buffer.toString());
    exports.writeToPath = (path, rows, options) => {
      const stream = fs2.createWriteStream(path, { encoding: "utf8" });
      return exports.write(rows, options).pipe(stream);
    };
  }
});

// node_modules/@fast-csv/parse/build/src/ParserOptions.js
var require_ParserOptions = __commonJS({
  "node_modules/@fast-csv/parse/build/src/ParserOptions.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ParserOptions = void 0;
    var lodash_escaperegexp_1 = __importDefault(require_lodash5());
    var lodash_isnil_1 = __importDefault(require_lodash4());
    var ParserOptions = class {
      constructor(opts) {
        var _a;
        this.objectMode = true;
        this.delimiter = ",";
        this.ignoreEmpty = false;
        this.quote = '"';
        this.escape = null;
        this.escapeChar = this.quote;
        this.comment = null;
        this.supportsComments = false;
        this.ltrim = false;
        this.rtrim = false;
        this.trim = false;
        this.headers = null;
        this.renameHeaders = false;
        this.strictColumnHandling = false;
        this.discardUnmappedColumns = false;
        this.carriageReturn = "\r";
        this.encoding = "utf8";
        this.limitRows = false;
        this.maxRows = 0;
        this.skipLines = 0;
        this.skipRows = 0;
        Object.assign(this, opts || {});
        if (this.delimiter.length > 1) {
          throw new Error("delimiter option must be one character long");
        }
        this.escapedDelimiter = lodash_escaperegexp_1.default(this.delimiter);
        this.escapeChar = (_a = this.escape) !== null && _a !== void 0 ? _a : this.quote;
        this.supportsComments = !lodash_isnil_1.default(this.comment);
        this.NEXT_TOKEN_REGEXP = new RegExp(`([^\\s]|\\r\\n|\\n|\\r|${this.escapedDelimiter})`);
        if (this.maxRows > 0) {
          this.limitRows = true;
        }
      }
    };
    exports.ParserOptions = ParserOptions;
  }
});

// node_modules/@fast-csv/parse/build/src/types.js
var require_types2 = __commonJS({
  "node_modules/@fast-csv/parse/build/src/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isSyncValidate = exports.isSyncTransform = void 0;
    exports.isSyncTransform = (transform) => transform.length === 1;
    exports.isSyncValidate = (validate) => validate.length === 1;
  }
});

// node_modules/@fast-csv/parse/build/src/transforms/RowTransformerValidator.js
var require_RowTransformerValidator = __commonJS({
  "node_modules/@fast-csv/parse/build/src/transforms/RowTransformerValidator.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RowTransformerValidator = void 0;
    var lodash_isfunction_1 = __importDefault(require_lodash());
    var types_1 = require_types2();
    var RowTransformerValidator = class {
      constructor() {
        this._rowTransform = null;
        this._rowValidator = null;
      }
      // eslint-disable-next-line @typescript-eslint/no-shadow
      static createTransform(transformFunction) {
        if (types_1.isSyncTransform(transformFunction)) {
          return (row, cb) => {
            let transformed = null;
            try {
              transformed = transformFunction(row);
            } catch (e) {
              return cb(e);
            }
            return cb(null, transformed);
          };
        }
        return transformFunction;
      }
      static createValidator(validateFunction) {
        if (types_1.isSyncValidate(validateFunction)) {
          return (row, cb) => {
            cb(null, { row, isValid: validateFunction(row) });
          };
        }
        return (row, cb) => {
          validateFunction(row, (err, isValid, reason) => {
            if (err) {
              return cb(err);
            }
            if (isValid) {
              return cb(null, { row, isValid, reason });
            }
            return cb(null, { row, isValid: false, reason });
          });
        };
      }
      set rowTransform(transformFunction) {
        if (!lodash_isfunction_1.default(transformFunction)) {
          throw new TypeError("The transform should be a function");
        }
        this._rowTransform = RowTransformerValidator.createTransform(transformFunction);
      }
      set rowValidator(validateFunction) {
        if (!lodash_isfunction_1.default(validateFunction)) {
          throw new TypeError("The validate should be a function");
        }
        this._rowValidator = RowTransformerValidator.createValidator(validateFunction);
      }
      transformAndValidate(row, cb) {
        return this.callTransformer(row, (transformErr, transformedRow) => {
          if (transformErr) {
            return cb(transformErr);
          }
          if (!transformedRow) {
            return cb(null, { row: null, isValid: true });
          }
          return this.callValidator(transformedRow, (validateErr, validationResult) => {
            if (validateErr) {
              return cb(validateErr);
            }
            if (validationResult && !validationResult.isValid) {
              return cb(null, { row: transformedRow, isValid: false, reason: validationResult.reason });
            }
            return cb(null, { row: transformedRow, isValid: true });
          });
        });
      }
      callTransformer(row, cb) {
        if (!this._rowTransform) {
          return cb(null, row);
        }
        return this._rowTransform(row, cb);
      }
      callValidator(row, cb) {
        if (!this._rowValidator) {
          return cb(null, { row, isValid: true });
        }
        return this._rowValidator(row, cb);
      }
    };
    exports.RowTransformerValidator = RowTransformerValidator;
  }
});

// node_modules/lodash.isundefined/index.js
var require_lodash6 = __commonJS({
  "node_modules/lodash.isundefined/index.js"(exports, module2) {
    function isUndefined(value) {
      return value === void 0;
    }
    module2.exports = isUndefined;
  }
});

// node_modules/lodash.uniq/index.js
var require_lodash7 = __commonJS({
  "node_modules/lodash.uniq/index.js"(exports, module2) {
    var LARGE_ARRAY_SIZE = 200;
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var INFINITY = 1 / 0;
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    function arrayIncludes(array, value) {
      var length = array ? array.length : 0;
      return !!length && baseIndexOf(array, value, 0) > -1;
    }
    function arrayIncludesWith(array, value, comparator) {
      var index = -1, length = array ? array.length : 0;
      while (++index < length) {
        if (comparator(value, array[index])) {
          return true;
        }
      }
      return false;
    }
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }
    function baseIndexOf(array, value, fromIndex) {
      if (value !== value) {
        return baseFindIndex(array, baseIsNaN, fromIndex);
      }
      var index = fromIndex - 1, length = array.length;
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    function baseIsNaN(value) {
      return value !== value;
    }
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    function isHostObject(value) {
      var result = false;
      if (value != null && typeof value.toString != "function") {
        try {
          result = !!(value + "");
        } catch (e) {
        }
      }
      return result;
    }
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectToString = objectProto.toString;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    var splice = arrayProto.splice;
    var Map2 = getNative(root, "Map");
    var Set2 = getNative(root, "Set");
    var nativeCreate = getNative(Object, "create");
    function Hash(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
    }
    function hashDelete(key) {
      return this.has(key) && delete this.__data__[key];
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      return getMapData(this, key)["delete"](key);
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      getMapData(this, key).set(key, value);
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function SetCache(values) {
      var index = -1, length = values ? values.length : 0;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function baseUniq(array, iteratee, comparator) {
      var index = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      } else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache();
      } else {
        seen = iteratee ? [] : result;
      }
      outer:
        while (++index < length) {
          var value = array[index], computed = iteratee ? iteratee(value) : value;
          value = comparator || value !== 0 ? value : 0;
          if (isCommon && computed === computed) {
            var seenIndex = seen.length;
            while (seenIndex--) {
              if (seen[seenIndex] === computed) {
                continue outer;
              }
            }
            if (iteratee) {
              seen.push(computed);
            }
            result.push(value);
          } else if (!includes(seen, computed, comparator)) {
            if (seen !== result) {
              seen.push(computed);
            }
            result.push(value);
          }
        }
      return result;
    }
    var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values) {
      return new Set2(values);
    };
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    function uniq(array) {
      return array && array.length ? baseUniq(array) : [];
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    function isFunction(value) {
      var tag = isObject(value) ? objectToString.call(value) : "";
      return tag == funcTag || tag == genTag;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function noop() {
    }
    module2.exports = uniq;
  }
});

// node_modules/lodash.groupby/index.js
var require_lodash8 = __commonJS({
  "node_modules/lodash.groupby/index.js"(exports, module2) {
    var LARGE_ARRAY_SIZE = 200;
    var FUNC_ERROR_TEXT = "Expected a function";
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var UNORDERED_COMPARE_FLAG = 1;
    var PARTIAL_COMPARE_FLAG = 2;
    var INFINITY = 1 / 0;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    var reLeadingDot = /^\./;
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reEscapeChar = /\\(\\)?/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        return freeProcess && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function arrayAggregator(array, setter, iteratee, accumulator) {
      var index = -1, length = array ? array.length : 0;
      while (++index < length) {
        var value = array[index];
        setter(accumulator, value, iteratee(value), array);
      }
      return accumulator;
    }
    function arraySome(array, predicate) {
      var index = -1, length = array ? array.length : 0;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    function baseProperty(key) {
      return function(object) {
        return object == null ? void 0 : object[key];
      };
    }
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    function isHostObject(value) {
      var result = false;
      if (value != null && typeof value.toString != "function") {
        try {
          result = !!(value + "");
        } catch (e) {
        }
      }
      return result;
    }
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectToString = objectProto.toString;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    var Symbol2 = root.Symbol;
    var Uint8Array2 = root.Uint8Array;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var splice = arrayProto.splice;
    var nativeKeys = overArg(Object.keys, Object);
    var DataView = getNative(root, "DataView");
    var Map2 = getNative(root, "Map");
    var Promise2 = getNative(root, "Promise");
    var Set2 = getNative(root, "Set");
    var WeakMap = getNative(root, "WeakMap");
    var nativeCreate = getNative(Object, "create");
    var dataViewCtorString = toSource(DataView);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap);
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function Hash(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
    }
    function hashDelete(key) {
      return this.has(key) && delete this.__data__[key];
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      return getMapData(this, key)["delete"](key);
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      getMapData(this, key).set(key, value);
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function SetCache(values) {
      var index = -1, length = values ? values.length : 0;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    function Stack(entries) {
      this.__data__ = new ListCache(entries);
    }
    function stackClear() {
      this.__data__ = new ListCache();
    }
    function stackDelete(key) {
      return this.__data__["delete"](key);
    }
    function stackGet(key) {
      return this.__data__.get(key);
    }
    function stackHas(key) {
      return this.__data__.has(key);
    }
    function stackSet(key, value) {
      var cache = this.__data__;
      if (cache instanceof ListCache) {
        var pairs = cache.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          return this;
        }
        cache = this.__data__ = new MapCache(pairs);
      }
      cache.set(key, value);
      return this;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    function arrayLikeKeys(value, inherited) {
      var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
      var length = result.length, skipIndexes = !!length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseAggregator(collection, setter, iteratee, accumulator) {
      baseEach(collection, function(value, key, collection2) {
        setter(accumulator, value, iteratee(value), collection2);
      });
      return accumulator;
    }
    var baseEach = createBaseEach(baseForOwn);
    var baseFor = createBaseFor();
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }
    function baseGet(object, path) {
      path = isKey(path, object) ? [path] : castPath(path);
      var index = 0, length = path.length;
      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return index && index == length ? object : void 0;
    }
    function baseGetTag(value) {
      return objectToString.call(value);
    }
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }
    function baseIsEqual(value, other, customizer, bitmask, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObject(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
    }
    function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
      var objIsArr = isArray(object), othIsArr = isArray(other), objTag = arrayTag, othTag = arrayTag;
      if (!objIsArr) {
        objTag = getTag(object);
        objTag = objTag == argsTag ? objectTag : objTag;
      }
      if (!othIsArr) {
        othTag = getTag(other);
        othTag = othTag == argsTag ? objectTag : othTag;
      }
      var objIsObj = objTag == objectTag && !isHostObject(object), othIsObj = othTag == objectTag && !isHostObject(other), isSameTag = objTag == othTag;
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, equalFunc, customizer, bitmask, stack) : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
      }
      if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
    }
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length, length = index, noCustomizer = !customizer;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0], objValue = object[key], srcValue = data[1];
        if (noCustomizer && data[2]) {
          if (objValue === void 0 && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack();
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === void 0 ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack) : result)) {
            return false;
          }
        }
      }
      return true;
    }
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
    }
    function baseIteratee(value) {
      if (typeof value == "function") {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == "object") {
        return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
      }
      return property(value);
    }
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, void 0, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
      };
    }
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function castPath(value) {
      return isArray(value) ? value : stringToPath(value);
    }
    function createAggregator(setter, initializer) {
      return function(collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
        return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
      };
    }
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
        while (fromRight ? index-- : ++index < length) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }
    function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var stacked = stack.get(array);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var index = -1, result = true, seen = bitmask & UNORDERED_COMPARE_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index < arrLength) {
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!seen.has(othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, customizer, bitmask, stack))) {
              return seen.add(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= UNORDERED_COMPARE_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG, objProps = keys(object), objLength = objProps.length, othProps = keys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var stacked = stack.get(object);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getMatchData(object) {
      var result = keys(object), length = result.length;
      while (length--) {
        var key = result[length], value = object[key];
        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function(value) {
        var result = objectToString.call(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : void 0;
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    function hasPath(object, path, hasFunc) {
      path = isKey(path, object) ? [path] : castPath(path);
      var result, index = -1, length = path.length;
      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result) {
        return result;
      }
      var length = object ? object.length : 0;
      return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
    }
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
      };
    }
    var stringToPath = memoize(function(string) {
      string = toString(string);
      var result = [];
      if (reLeadingDot.test(string)) {
        result.push("");
      }
      string.replace(rePropName, function(match2, number, quote, string2) {
        result.push(quote ? string2.replace(reEscapeChar, "$1") : number || match2);
      });
      return result;
    });
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    var groupBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        result[key] = [value];
      }
    });
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args2 = arguments, key = resolver ? resolver.apply(this, args2) : args2[0], cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args2);
        memoized.cache = cache.set(key, result);
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache)();
      return memoized;
    }
    memoize.Cache = MapCache;
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    function isArguments(value) {
      return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
    }
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    function isFunction(value) {
      var tag = isObject(value) ? objectToString.call(value) : "";
      return tag == funcTag || tag == genTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    function get(object, path, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path);
      return result === void 0 ? defaultValue : result;
    }
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    function identity(value) {
      return value;
    }
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }
    module2.exports = groupBy;
  }
});

// node_modules/@fast-csv/parse/build/src/transforms/HeaderTransformer.js
var require_HeaderTransformer = __commonJS({
  "node_modules/@fast-csv/parse/build/src/transforms/HeaderTransformer.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HeaderTransformer = void 0;
    var lodash_isundefined_1 = __importDefault(require_lodash6());
    var lodash_isfunction_1 = __importDefault(require_lodash());
    var lodash_uniq_1 = __importDefault(require_lodash7());
    var lodash_groupby_1 = __importDefault(require_lodash8());
    var HeaderTransformer = class {
      constructor(parserOptions) {
        this.headers = null;
        this.receivedHeaders = false;
        this.shouldUseFirstRow = false;
        this.processedFirstRow = false;
        this.headersLength = 0;
        this.parserOptions = parserOptions;
        if (parserOptions.headers === true) {
          this.shouldUseFirstRow = true;
        } else if (Array.isArray(parserOptions.headers)) {
          this.setHeaders(parserOptions.headers);
        } else if (lodash_isfunction_1.default(parserOptions.headers)) {
          this.headersTransform = parserOptions.headers;
        }
      }
      transform(row, cb) {
        if (!this.shouldMapRow(row)) {
          return cb(null, { row: null, isValid: true });
        }
        return cb(null, this.processRow(row));
      }
      shouldMapRow(row) {
        const { parserOptions } = this;
        if (!this.headersTransform && parserOptions.renameHeaders && !this.processedFirstRow) {
          if (!this.receivedHeaders) {
            throw new Error("Error renaming headers: new headers must be provided in an array");
          }
          this.processedFirstRow = true;
          return false;
        }
        if (!this.receivedHeaders && Array.isArray(row)) {
          if (this.headersTransform) {
            this.setHeaders(this.headersTransform(row));
          } else if (this.shouldUseFirstRow) {
            this.setHeaders(row);
          } else {
            return true;
          }
          return false;
        }
        return true;
      }
      processRow(row) {
        if (!this.headers) {
          return { row, isValid: true };
        }
        const { parserOptions } = this;
        if (!parserOptions.discardUnmappedColumns && row.length > this.headersLength) {
          if (!parserOptions.strictColumnHandling) {
            throw new Error(`Unexpected Error: column header mismatch expected: ${this.headersLength} columns got: ${row.length}`);
          }
          return {
            row,
            isValid: false,
            reason: `Column header mismatch expected: ${this.headersLength} columns got: ${row.length}`
          };
        }
        if (parserOptions.strictColumnHandling && row.length < this.headersLength) {
          return {
            row,
            isValid: false,
            reason: `Column header mismatch expected: ${this.headersLength} columns got: ${row.length}`
          };
        }
        return { row: this.mapHeaders(row), isValid: true };
      }
      mapHeaders(row) {
        const rowMap = {};
        const { headers, headersLength } = this;
        for (let i = 0; i < headersLength; i += 1) {
          const header = headers[i];
          if (!lodash_isundefined_1.default(header)) {
            const val = row[i];
            if (lodash_isundefined_1.default(val)) {
              rowMap[header] = "";
            } else {
              rowMap[header] = val;
            }
          }
        }
        return rowMap;
      }
      setHeaders(headers) {
        var _a;
        const filteredHeaders = headers.filter((h) => !!h);
        if (lodash_uniq_1.default(filteredHeaders).length !== filteredHeaders.length) {
          const grouped = lodash_groupby_1.default(filteredHeaders);
          const duplicates = Object.keys(grouped).filter((dup) => grouped[dup].length > 1);
          throw new Error(`Duplicate headers found ${JSON.stringify(duplicates)}`);
        }
        this.headers = headers;
        this.receivedHeaders = true;
        this.headersLength = ((_a = this.headers) === null || _a === void 0 ? void 0 : _a.length) || 0;
      }
    };
    exports.HeaderTransformer = HeaderTransformer;
  }
});

// node_modules/@fast-csv/parse/build/src/transforms/index.js
var require_transforms = __commonJS({
  "node_modules/@fast-csv/parse/build/src/transforms/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HeaderTransformer = exports.RowTransformerValidator = void 0;
    var RowTransformerValidator_1 = require_RowTransformerValidator();
    Object.defineProperty(exports, "RowTransformerValidator", { enumerable: true, get: function() {
      return RowTransformerValidator_1.RowTransformerValidator;
    } });
    var HeaderTransformer_1 = require_HeaderTransformer();
    Object.defineProperty(exports, "HeaderTransformer", { enumerable: true, get: function() {
      return HeaderTransformer_1.HeaderTransformer;
    } });
  }
});

// node_modules/@fast-csv/parse/build/src/parser/Token.js
var require_Token = __commonJS({
  "node_modules/@fast-csv/parse/build/src/parser/Token.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Token = void 0;
    var Token = class {
      constructor(tokenArgs) {
        this.token = tokenArgs.token;
        this.startCursor = tokenArgs.startCursor;
        this.endCursor = tokenArgs.endCursor;
      }
      static isTokenRowDelimiter(token) {
        const content = token.token;
        return content === "\r" || content === "\n" || content === "\r\n";
      }
      static isTokenCarriageReturn(token, parserOptions) {
        return token.token === parserOptions.carriageReturn;
      }
      static isTokenComment(token, parserOptions) {
        return parserOptions.supportsComments && !!token && token.token === parserOptions.comment;
      }
      static isTokenEscapeCharacter(token, parserOptions) {
        return token.token === parserOptions.escapeChar;
      }
      static isTokenQuote(token, parserOptions) {
        return token.token === parserOptions.quote;
      }
      static isTokenDelimiter(token, parserOptions) {
        return token.token === parserOptions.delimiter;
      }
    };
    exports.Token = Token;
  }
});

// node_modules/@fast-csv/parse/build/src/parser/Scanner.js
var require_Scanner = __commonJS({
  "node_modules/@fast-csv/parse/build/src/parser/Scanner.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Scanner = void 0;
    var Token_1 = require_Token();
    var ROW_DELIMITER = /((?:\r\n)|\n|\r)/;
    var Scanner = class {
      constructor(args2) {
        this.cursor = 0;
        this.line = args2.line;
        this.lineLength = this.line.length;
        this.parserOptions = args2.parserOptions;
        this.hasMoreData = args2.hasMoreData;
        this.cursor = args2.cursor || 0;
      }
      get hasMoreCharacters() {
        return this.lineLength > this.cursor;
      }
      get nextNonSpaceToken() {
        const { lineFromCursor } = this;
        const regex = this.parserOptions.NEXT_TOKEN_REGEXP;
        if (lineFromCursor.search(regex) === -1) {
          return null;
        }
        const match2 = regex.exec(lineFromCursor);
        if (match2 == null) {
          return null;
        }
        const token = match2[1];
        const startCursor = this.cursor + (match2.index || 0);
        return new Token_1.Token({
          token,
          startCursor,
          endCursor: startCursor + token.length - 1
        });
      }
      get nextCharacterToken() {
        const { cursor, lineLength } = this;
        if (lineLength <= cursor) {
          return null;
        }
        return new Token_1.Token({
          token: this.line[cursor],
          startCursor: cursor,
          endCursor: cursor
        });
      }
      get lineFromCursor() {
        return this.line.substr(this.cursor);
      }
      advancePastLine() {
        const match2 = ROW_DELIMITER.exec(this.lineFromCursor);
        if (!match2) {
          if (this.hasMoreData) {
            return null;
          }
          this.cursor = this.lineLength;
          return this;
        }
        this.cursor += (match2.index || 0) + match2[0].length;
        return this;
      }
      advanceTo(cursor) {
        this.cursor = cursor;
        return this;
      }
      advanceToToken(token) {
        this.cursor = token.startCursor;
        return this;
      }
      advancePastToken(token) {
        this.cursor = token.endCursor + 1;
        return this;
      }
      truncateToCursor() {
        this.line = this.lineFromCursor;
        this.lineLength = this.line.length;
        this.cursor = 0;
        return this;
      }
    };
    exports.Scanner = Scanner;
  }
});

// node_modules/@fast-csv/parse/build/src/parser/column/ColumnFormatter.js
var require_ColumnFormatter = __commonJS({
  "node_modules/@fast-csv/parse/build/src/parser/column/ColumnFormatter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ColumnFormatter = void 0;
    var ColumnFormatter = class {
      constructor(parserOptions) {
        if (parserOptions.trim) {
          this.format = (col) => col.trim();
        } else if (parserOptions.ltrim) {
          this.format = (col) => col.trimLeft();
        } else if (parserOptions.rtrim) {
          this.format = (col) => col.trimRight();
        } else {
          this.format = (col) => col;
        }
      }
    };
    exports.ColumnFormatter = ColumnFormatter;
  }
});

// node_modules/@fast-csv/parse/build/src/parser/column/NonQuotedColumnParser.js
var require_NonQuotedColumnParser = __commonJS({
  "node_modules/@fast-csv/parse/build/src/parser/column/NonQuotedColumnParser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NonQuotedColumnParser = void 0;
    var ColumnFormatter_1 = require_ColumnFormatter();
    var Token_1 = require_Token();
    var NonQuotedColumnParser = class {
      constructor(parserOptions) {
        this.parserOptions = parserOptions;
        this.columnFormatter = new ColumnFormatter_1.ColumnFormatter(parserOptions);
      }
      parse(scanner) {
        if (!scanner.hasMoreCharacters) {
          return null;
        }
        const { parserOptions } = this;
        const characters = [];
        let nextToken = scanner.nextCharacterToken;
        for (; nextToken; nextToken = scanner.nextCharacterToken) {
          if (Token_1.Token.isTokenDelimiter(nextToken, parserOptions) || Token_1.Token.isTokenRowDelimiter(nextToken)) {
            break;
          }
          characters.push(nextToken.token);
          scanner.advancePastToken(nextToken);
        }
        return this.columnFormatter.format(characters.join(""));
      }
    };
    exports.NonQuotedColumnParser = NonQuotedColumnParser;
  }
});

// node_modules/@fast-csv/parse/build/src/parser/column/QuotedColumnParser.js
var require_QuotedColumnParser = __commonJS({
  "node_modules/@fast-csv/parse/build/src/parser/column/QuotedColumnParser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.QuotedColumnParser = void 0;
    var ColumnFormatter_1 = require_ColumnFormatter();
    var Token_1 = require_Token();
    var QuotedColumnParser = class {
      constructor(parserOptions) {
        this.parserOptions = parserOptions;
        this.columnFormatter = new ColumnFormatter_1.ColumnFormatter(parserOptions);
      }
      parse(scanner) {
        if (!scanner.hasMoreCharacters) {
          return null;
        }
        const originalCursor = scanner.cursor;
        const { foundClosingQuote, col } = this.gatherDataBetweenQuotes(scanner);
        if (!foundClosingQuote) {
          scanner.advanceTo(originalCursor);
          if (!scanner.hasMoreData) {
            throw new Error(`Parse Error: missing closing: '${this.parserOptions.quote || ""}' in line: at '${scanner.lineFromCursor.replace(/[\r\n]/g, "\\n'")}'`);
          }
          return null;
        }
        this.checkForMalformedColumn(scanner);
        return col;
      }
      gatherDataBetweenQuotes(scanner) {
        const { parserOptions } = this;
        let foundStartingQuote = false;
        let foundClosingQuote = false;
        const characters = [];
        let nextToken = scanner.nextCharacterToken;
        for (; !foundClosingQuote && nextToken !== null; nextToken = scanner.nextCharacterToken) {
          const isQuote = Token_1.Token.isTokenQuote(nextToken, parserOptions);
          if (!foundStartingQuote && isQuote) {
            foundStartingQuote = true;
          } else if (foundStartingQuote) {
            if (Token_1.Token.isTokenEscapeCharacter(nextToken, parserOptions)) {
              scanner.advancePastToken(nextToken);
              const tokenFollowingEscape = scanner.nextCharacterToken;
              if (tokenFollowingEscape !== null && (Token_1.Token.isTokenQuote(tokenFollowingEscape, parserOptions) || Token_1.Token.isTokenEscapeCharacter(tokenFollowingEscape, parserOptions))) {
                characters.push(tokenFollowingEscape.token);
                nextToken = tokenFollowingEscape;
              } else if (isQuote) {
                foundClosingQuote = true;
              } else {
                characters.push(nextToken.token);
              }
            } else if (isQuote) {
              foundClosingQuote = true;
            } else {
              characters.push(nextToken.token);
            }
          }
          scanner.advancePastToken(nextToken);
        }
        return { col: this.columnFormatter.format(characters.join("")), foundClosingQuote };
      }
      checkForMalformedColumn(scanner) {
        const { parserOptions } = this;
        const { nextNonSpaceToken } = scanner;
        if (nextNonSpaceToken) {
          const isNextTokenADelimiter = Token_1.Token.isTokenDelimiter(nextNonSpaceToken, parserOptions);
          const isNextTokenARowDelimiter = Token_1.Token.isTokenRowDelimiter(nextNonSpaceToken);
          if (!(isNextTokenADelimiter || isNextTokenARowDelimiter)) {
            const linePreview = scanner.lineFromCursor.substr(0, 10).replace(/[\r\n]/g, "\\n'");
            throw new Error(`Parse Error: expected: '${parserOptions.escapedDelimiter}' OR new line got: '${nextNonSpaceToken.token}'. at '${linePreview}`);
          }
          scanner.advanceToToken(nextNonSpaceToken);
        } else if (!scanner.hasMoreData) {
          scanner.advancePastLine();
        }
      }
    };
    exports.QuotedColumnParser = QuotedColumnParser;
  }
});

// node_modules/@fast-csv/parse/build/src/parser/column/ColumnParser.js
var require_ColumnParser = __commonJS({
  "node_modules/@fast-csv/parse/build/src/parser/column/ColumnParser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ColumnParser = void 0;
    var NonQuotedColumnParser_1 = require_NonQuotedColumnParser();
    var QuotedColumnParser_1 = require_QuotedColumnParser();
    var Token_1 = require_Token();
    var ColumnParser = class {
      constructor(parserOptions) {
        this.parserOptions = parserOptions;
        this.quotedColumnParser = new QuotedColumnParser_1.QuotedColumnParser(parserOptions);
        this.nonQuotedColumnParser = new NonQuotedColumnParser_1.NonQuotedColumnParser(parserOptions);
      }
      parse(scanner) {
        const { nextNonSpaceToken } = scanner;
        if (nextNonSpaceToken !== null && Token_1.Token.isTokenQuote(nextNonSpaceToken, this.parserOptions)) {
          scanner.advanceToToken(nextNonSpaceToken);
          return this.quotedColumnParser.parse(scanner);
        }
        return this.nonQuotedColumnParser.parse(scanner);
      }
    };
    exports.ColumnParser = ColumnParser;
  }
});

// node_modules/@fast-csv/parse/build/src/parser/column/index.js
var require_column = __commonJS({
  "node_modules/@fast-csv/parse/build/src/parser/column/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ColumnFormatter = exports.QuotedColumnParser = exports.NonQuotedColumnParser = exports.ColumnParser = void 0;
    var ColumnParser_1 = require_ColumnParser();
    Object.defineProperty(exports, "ColumnParser", { enumerable: true, get: function() {
      return ColumnParser_1.ColumnParser;
    } });
    var NonQuotedColumnParser_1 = require_NonQuotedColumnParser();
    Object.defineProperty(exports, "NonQuotedColumnParser", { enumerable: true, get: function() {
      return NonQuotedColumnParser_1.NonQuotedColumnParser;
    } });
    var QuotedColumnParser_1 = require_QuotedColumnParser();
    Object.defineProperty(exports, "QuotedColumnParser", { enumerable: true, get: function() {
      return QuotedColumnParser_1.QuotedColumnParser;
    } });
    var ColumnFormatter_1 = require_ColumnFormatter();
    Object.defineProperty(exports, "ColumnFormatter", { enumerable: true, get: function() {
      return ColumnFormatter_1.ColumnFormatter;
    } });
  }
});

// node_modules/@fast-csv/parse/build/src/parser/RowParser.js
var require_RowParser = __commonJS({
  "node_modules/@fast-csv/parse/build/src/parser/RowParser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RowParser = void 0;
    var column_1 = require_column();
    var Token_1 = require_Token();
    var EMPTY_STRING = "";
    var RowParser = class {
      constructor(parserOptions) {
        this.parserOptions = parserOptions;
        this.columnParser = new column_1.ColumnParser(parserOptions);
      }
      static isEmptyRow(row) {
        return row.join(EMPTY_STRING).replace(/\s+/g, EMPTY_STRING) === EMPTY_STRING;
      }
      parse(scanner) {
        const { parserOptions } = this;
        const { hasMoreData } = scanner;
        const currentScanner = scanner;
        const columns = [];
        let currentToken = this.getStartToken(currentScanner, columns);
        while (currentToken) {
          if (Token_1.Token.isTokenRowDelimiter(currentToken)) {
            currentScanner.advancePastToken(currentToken);
            if (!currentScanner.hasMoreCharacters && Token_1.Token.isTokenCarriageReturn(currentToken, parserOptions) && hasMoreData) {
              return null;
            }
            currentScanner.truncateToCursor();
            return columns;
          }
          if (!this.shouldSkipColumnParse(currentScanner, currentToken, columns)) {
            const item = this.columnParser.parse(currentScanner);
            if (item === null) {
              return null;
            }
            columns.push(item);
          }
          currentToken = currentScanner.nextNonSpaceToken;
        }
        if (!hasMoreData) {
          currentScanner.truncateToCursor();
          return columns;
        }
        return null;
      }
      getStartToken(scanner, columns) {
        const currentToken = scanner.nextNonSpaceToken;
        if (currentToken !== null && Token_1.Token.isTokenDelimiter(currentToken, this.parserOptions)) {
          columns.push("");
          return scanner.nextNonSpaceToken;
        }
        return currentToken;
      }
      shouldSkipColumnParse(scanner, currentToken, columns) {
        const { parserOptions } = this;
        if (Token_1.Token.isTokenDelimiter(currentToken, parserOptions)) {
          scanner.advancePastToken(currentToken);
          const nextToken = scanner.nextCharacterToken;
          if (!scanner.hasMoreCharacters || nextToken !== null && Token_1.Token.isTokenRowDelimiter(nextToken)) {
            columns.push("");
            return true;
          }
          if (nextToken !== null && Token_1.Token.isTokenDelimiter(nextToken, parserOptions)) {
            columns.push("");
            return true;
          }
        }
        return false;
      }
    };
    exports.RowParser = RowParser;
  }
});

// node_modules/@fast-csv/parse/build/src/parser/Parser.js
var require_Parser = __commonJS({
  "node_modules/@fast-csv/parse/build/src/parser/Parser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Parser = void 0;
    var Scanner_1 = require_Scanner();
    var RowParser_1 = require_RowParser();
    var Token_1 = require_Token();
    var Parser = class {
      constructor(parserOptions) {
        this.parserOptions = parserOptions;
        this.rowParser = new RowParser_1.RowParser(this.parserOptions);
      }
      static removeBOM(line) {
        if (line && line.charCodeAt(0) === 65279) {
          return line.slice(1);
        }
        return line;
      }
      parse(line, hasMoreData) {
        const scanner = new Scanner_1.Scanner({
          line: Parser.removeBOM(line),
          parserOptions: this.parserOptions,
          hasMoreData
        });
        if (this.parserOptions.supportsComments) {
          return this.parseWithComments(scanner);
        }
        return this.parseWithoutComments(scanner);
      }
      parseWithoutComments(scanner) {
        const rows = [];
        let shouldContinue = true;
        while (shouldContinue) {
          shouldContinue = this.parseRow(scanner, rows);
        }
        return { line: scanner.line, rows };
      }
      parseWithComments(scanner) {
        const { parserOptions } = this;
        const rows = [];
        for (let nextToken = scanner.nextCharacterToken; nextToken !== null; nextToken = scanner.nextCharacterToken) {
          if (Token_1.Token.isTokenComment(nextToken, parserOptions)) {
            const cursor = scanner.advancePastLine();
            if (cursor === null) {
              return { line: scanner.lineFromCursor, rows };
            }
            if (!scanner.hasMoreCharacters) {
              return { line: scanner.lineFromCursor, rows };
            }
            scanner.truncateToCursor();
          } else if (!this.parseRow(scanner, rows)) {
            break;
          }
        }
        return { line: scanner.line, rows };
      }
      parseRow(scanner, rows) {
        const nextToken = scanner.nextNonSpaceToken;
        if (!nextToken) {
          return false;
        }
        const row = this.rowParser.parse(scanner);
        if (row === null) {
          return false;
        }
        if (this.parserOptions.ignoreEmpty && RowParser_1.RowParser.isEmptyRow(row)) {
          return true;
        }
        rows.push(row);
        return true;
      }
    };
    exports.Parser = Parser;
  }
});

// node_modules/@fast-csv/parse/build/src/parser/index.js
var require_parser = __commonJS({
  "node_modules/@fast-csv/parse/build/src/parser/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.QuotedColumnParser = exports.NonQuotedColumnParser = exports.ColumnParser = exports.Token = exports.Scanner = exports.RowParser = exports.Parser = void 0;
    var Parser_1 = require_Parser();
    Object.defineProperty(exports, "Parser", { enumerable: true, get: function() {
      return Parser_1.Parser;
    } });
    var RowParser_1 = require_RowParser();
    Object.defineProperty(exports, "RowParser", { enumerable: true, get: function() {
      return RowParser_1.RowParser;
    } });
    var Scanner_1 = require_Scanner();
    Object.defineProperty(exports, "Scanner", { enumerable: true, get: function() {
      return Scanner_1.Scanner;
    } });
    var Token_1 = require_Token();
    Object.defineProperty(exports, "Token", { enumerable: true, get: function() {
      return Token_1.Token;
    } });
    var column_1 = require_column();
    Object.defineProperty(exports, "ColumnParser", { enumerable: true, get: function() {
      return column_1.ColumnParser;
    } });
    Object.defineProperty(exports, "NonQuotedColumnParser", { enumerable: true, get: function() {
      return column_1.NonQuotedColumnParser;
    } });
    Object.defineProperty(exports, "QuotedColumnParser", { enumerable: true, get: function() {
      return column_1.QuotedColumnParser;
    } });
  }
});

// node_modules/@fast-csv/parse/build/src/CsvParserStream.js
var require_CsvParserStream = __commonJS({
  "node_modules/@fast-csv/parse/build/src/CsvParserStream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CsvParserStream = void 0;
    var string_decoder_1 = require("string_decoder");
    var stream_1 = require("stream");
    var transforms_1 = require_transforms();
    var parser_1 = require_parser();
    var CsvParserStream = class extends stream_1.Transform {
      constructor(parserOptions) {
        super({ objectMode: parserOptions.objectMode });
        this.lines = "";
        this.rowCount = 0;
        this.parsedRowCount = 0;
        this.parsedLineCount = 0;
        this.endEmitted = false;
        this.headersEmitted = false;
        this.parserOptions = parserOptions;
        this.parser = new parser_1.Parser(parserOptions);
        this.headerTransformer = new transforms_1.HeaderTransformer(parserOptions);
        this.decoder = new string_decoder_1.StringDecoder(parserOptions.encoding);
        this.rowTransformerValidator = new transforms_1.RowTransformerValidator();
      }
      get hasHitRowLimit() {
        return this.parserOptions.limitRows && this.rowCount >= this.parserOptions.maxRows;
      }
      get shouldEmitRows() {
        return this.parsedRowCount > this.parserOptions.skipRows;
      }
      get shouldSkipLine() {
        return this.parsedLineCount <= this.parserOptions.skipLines;
      }
      transform(transformFunction) {
        this.rowTransformerValidator.rowTransform = transformFunction;
        return this;
      }
      validate(validateFunction) {
        this.rowTransformerValidator.rowValidator = validateFunction;
        return this;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      emit(event, ...rest) {
        if (event === "end") {
          if (!this.endEmitted) {
            this.endEmitted = true;
            super.emit("end", this.rowCount);
          }
          return false;
        }
        return super.emit(event, ...rest);
      }
      _transform(data, encoding, done) {
        if (this.hasHitRowLimit) {
          return done();
        }
        const wrappedCallback = CsvParserStream.wrapDoneCallback(done);
        try {
          const { lines } = this;
          const newLine = lines + this.decoder.write(data);
          const rows = this.parse(newLine, true);
          return this.processRows(rows, wrappedCallback);
        } catch (e) {
          return wrappedCallback(e);
        }
      }
      _flush(done) {
        const wrappedCallback = CsvParserStream.wrapDoneCallback(done);
        if (this.hasHitRowLimit) {
          return wrappedCallback();
        }
        try {
          const newLine = this.lines + this.decoder.end();
          const rows = this.parse(newLine, false);
          return this.processRows(rows, wrappedCallback);
        } catch (e) {
          return wrappedCallback(e);
        }
      }
      parse(data, hasMoreData) {
        if (!data) {
          return [];
        }
        const { line, rows } = this.parser.parse(data, hasMoreData);
        this.lines = line;
        return rows;
      }
      processRows(rows, cb) {
        const rowsLength = rows.length;
        const iterate = (i) => {
          const callNext = (err) => {
            if (err) {
              return cb(err);
            }
            if (i % 100 === 0) {
              setImmediate(() => iterate(i + 1));
              return void 0;
            }
            return iterate(i + 1);
          };
          this.checkAndEmitHeaders();
          if (i >= rowsLength || this.hasHitRowLimit) {
            return cb();
          }
          this.parsedLineCount += 1;
          if (this.shouldSkipLine) {
            return callNext();
          }
          const row = rows[i];
          this.rowCount += 1;
          this.parsedRowCount += 1;
          const nextRowCount = this.rowCount;
          return this.transformRow(row, (err, transformResult) => {
            if (err) {
              this.rowCount -= 1;
              return callNext(err);
            }
            if (!transformResult) {
              return callNext(new Error("expected transform result"));
            }
            if (!transformResult.isValid) {
              this.emit("data-invalid", transformResult.row, nextRowCount, transformResult.reason);
            } else if (transformResult.row) {
              return this.pushRow(transformResult.row, callNext);
            }
            return callNext();
          });
        };
        iterate(0);
      }
      transformRow(parsedRow, cb) {
        try {
          this.headerTransformer.transform(parsedRow, (err, withHeaders) => {
            if (err) {
              return cb(err);
            }
            if (!withHeaders) {
              return cb(new Error("Expected result from header transform"));
            }
            if (!withHeaders.isValid) {
              if (this.shouldEmitRows) {
                return cb(null, { isValid: false, row: parsedRow });
              }
              return this.skipRow(cb);
            }
            if (withHeaders.row) {
              if (this.shouldEmitRows) {
                return this.rowTransformerValidator.transformAndValidate(withHeaders.row, cb);
              }
              return this.skipRow(cb);
            }
            this.rowCount -= 1;
            this.parsedRowCount -= 1;
            return cb(null, { row: null, isValid: true });
          });
        } catch (e) {
          cb(e);
        }
      }
      checkAndEmitHeaders() {
        if (!this.headersEmitted && this.headerTransformer.headers) {
          this.headersEmitted = true;
          this.emit("headers", this.headerTransformer.headers);
        }
      }
      skipRow(cb) {
        this.rowCount -= 1;
        return cb(null, { row: null, isValid: true });
      }
      pushRow(row, cb) {
        try {
          if (!this.parserOptions.objectMode) {
            this.push(JSON.stringify(row));
          } else {
            this.push(row);
          }
          cb();
        } catch (e) {
          cb(e);
        }
      }
      static wrapDoneCallback(done) {
        let errorCalled = false;
        return (err, ...args2) => {
          if (err) {
            if (errorCalled) {
              throw err;
            }
            errorCalled = true;
            done(err);
            return;
          }
          done(...args2);
        };
      }
    };
    exports.CsvParserStream = CsvParserStream;
  }
});

// node_modules/@fast-csv/parse/build/src/index.js
var require_src2 = __commonJS({
  "node_modules/@fast-csv/parse/build/src/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseString = exports.parseFile = exports.parseStream = exports.parse = exports.ParserOptions = exports.CsvParserStream = void 0;
    var fs2 = __importStar(require("fs"));
    var stream_1 = require("stream");
    var ParserOptions_1 = require_ParserOptions();
    var CsvParserStream_1 = require_CsvParserStream();
    __exportStar(require_types2(), exports);
    var CsvParserStream_2 = require_CsvParserStream();
    Object.defineProperty(exports, "CsvParserStream", { enumerable: true, get: function() {
      return CsvParserStream_2.CsvParserStream;
    } });
    var ParserOptions_2 = require_ParserOptions();
    Object.defineProperty(exports, "ParserOptions", { enumerable: true, get: function() {
      return ParserOptions_2.ParserOptions;
    } });
    exports.parse = (args2) => new CsvParserStream_1.CsvParserStream(new ParserOptions_1.ParserOptions(args2));
    exports.parseStream = (stream, options) => stream.pipe(new CsvParserStream_1.CsvParserStream(new ParserOptions_1.ParserOptions(options)));
    exports.parseFile = (location, options = {}) => fs2.createReadStream(location).pipe(new CsvParserStream_1.CsvParserStream(new ParserOptions_1.ParserOptions(options)));
    exports.parseString = (string, options) => {
      const rs = new stream_1.Readable();
      rs.push(string);
      rs.push(null);
      return rs.pipe(new CsvParserStream_1.CsvParserStream(new ParserOptions_1.ParserOptions(options)));
    };
  }
});

// node_modules/fast-csv/build/src/index.js
var require_src3 = __commonJS({
  "node_modules/fast-csv/build/src/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CsvParserStream = exports.ParserOptions = exports.parseFile = exports.parseStream = exports.parseString = exports.parse = exports.FormatterOptions = exports.CsvFormatterStream = exports.writeToPath = exports.writeToString = exports.writeToBuffer = exports.writeToStream = exports.write = exports.format = void 0;
    var format_1 = require_src();
    Object.defineProperty(exports, "format", { enumerable: true, get: function() {
      return format_1.format;
    } });
    Object.defineProperty(exports, "write", { enumerable: true, get: function() {
      return format_1.write;
    } });
    Object.defineProperty(exports, "writeToStream", { enumerable: true, get: function() {
      return format_1.writeToStream;
    } });
    Object.defineProperty(exports, "writeToBuffer", { enumerable: true, get: function() {
      return format_1.writeToBuffer;
    } });
    Object.defineProperty(exports, "writeToString", { enumerable: true, get: function() {
      return format_1.writeToString;
    } });
    Object.defineProperty(exports, "writeToPath", { enumerable: true, get: function() {
      return format_1.writeToPath;
    } });
    Object.defineProperty(exports, "CsvFormatterStream", { enumerable: true, get: function() {
      return format_1.CsvFormatterStream;
    } });
    Object.defineProperty(exports, "FormatterOptions", { enumerable: true, get: function() {
      return format_1.FormatterOptions;
    } });
    var parse_1 = require_src2();
    Object.defineProperty(exports, "parse", { enumerable: true, get: function() {
      return parse_1.parse;
    } });
    Object.defineProperty(exports, "parseString", { enumerable: true, get: function() {
      return parse_1.parseString;
    } });
    Object.defineProperty(exports, "parseStream", { enumerable: true, get: function() {
      return parse_1.parseStream;
    } });
    Object.defineProperty(exports, "parseFile", { enumerable: true, get: function() {
      return parse_1.parseFile;
    } });
    Object.defineProperty(exports, "ParserOptions", { enumerable: true, get: function() {
      return parse_1.ParserOptions;
    } });
    Object.defineProperty(exports, "CsvParserStream", { enumerable: true, get: function() {
      return parse_1.CsvParserStream;
    } });
  }
});

// node_modules/ts-pattern/lib/symbols.js
var require_symbols = __commonJS({
  "node_modules/ts-pattern/lib/symbols.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AnonymousSelectKey = exports.Select = exports.Not = exports.Guard = exports.PatternKind = void 0;
    exports.PatternKind = Symbol("@ts-pattern/pattern-kind");
    exports.Guard = Symbol("@ts-pattern/guard");
    exports.Not = Symbol("@ts-pattern/not");
    exports.Select = Symbol("@ts-pattern/select");
    exports.AnonymousSelectKey = "@ts-pattern/__anonymous-select-key";
  }
});

// node_modules/ts-pattern/lib/guards.js
var require_guards = __commonJS({
  "node_modules/ts-pattern/lib/guards.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.instanceOf = exports.select = exports.not = exports.when = void 0;
    var symbols = require_symbols();
    var when = (predicate) => ({
      [symbols.PatternKind]: symbols.Guard,
      [symbols.Guard]: predicate
    });
    exports.when = when;
    var not = (pattern) => ({
      [symbols.PatternKind]: symbols.Not,
      [symbols.Not]: pattern
    });
    exports.not = not;
    function select(key) {
      return key === void 0 ? {
        [symbols.PatternKind]: symbols.Select,
        [symbols.Select]: symbols.AnonymousSelectKey
      } : {
        [symbols.PatternKind]: symbols.Select,
        [symbols.Select]: key
      };
    }
    exports.select = select;
    function isInstanceOf(classConstructor) {
      return (val) => val instanceof classConstructor;
    }
    var instanceOf = (classConstructor) => (0, exports.when)(isInstanceOf(classConstructor));
    exports.instanceOf = instanceOf;
  }
});

// node_modules/ts-pattern/lib/wildcards.js
var require_wildcards = __commonJS({
  "node_modules/ts-pattern/lib/wildcards.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.__ = void 0;
    var guards_1 = require_guards();
    function isUnknown(x) {
      return true;
    }
    function isNumber(x) {
      return typeof x === "number";
    }
    function numberIsNaN(x) {
      return Number.isNaN(x);
    }
    function isString(x) {
      return typeof x === "string";
    }
    function isBoolean(x) {
      return typeof x === "boolean";
    }
    function isNullish(x) {
      return x === null || x === void 0;
    }
    var unknownGuard = (0, guards_1.when)(isUnknown);
    var stringGuard = (0, guards_1.when)(isString);
    var numberGuard = (0, guards_1.when)(isNumber);
    var NaNGuard = (0, guards_1.when)(numberIsNaN);
    var booleanGuard = (0, guards_1.when)(isBoolean);
    var nullishGuard = (0, guards_1.when)(isNullish);
    exports.__ = Object.assign(unknownGuard, {
      string: stringGuard,
      number: numberGuard,
      NaN: NaNGuard,
      boolean: booleanGuard,
      nullish: nullishGuard
    });
  }
});

// node_modules/ts-pattern/lib/index.js
var require_lib = __commonJS({
  "node_modules/ts-pattern/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isMatching = exports.match = exports.instanceOf = exports.select = exports.not = exports.when = exports.__ = void 0;
    var symbols = require_symbols();
    var guards_1 = require_guards();
    Object.defineProperty(exports, "when", { enumerable: true, get: function() {
      return guards_1.when;
    } });
    Object.defineProperty(exports, "not", { enumerable: true, get: function() {
      return guards_1.not;
    } });
    Object.defineProperty(exports, "select", { enumerable: true, get: function() {
      return guards_1.select;
    } });
    Object.defineProperty(exports, "instanceOf", { enumerable: true, get: function() {
      return guards_1.instanceOf;
    } });
    var wildcards_1 = require_wildcards();
    Object.defineProperty(exports, "__", { enumerable: true, get: function() {
      return wildcards_1.__;
    } });
    var match2 = (value) => builder(value, []);
    exports.match = match2;
    var builder = (value, cases) => {
      const run = () => {
        const entry = cases.find(({ test }) => test(value));
        if (!entry) {
          let displayedValue;
          try {
            displayedValue = JSON.stringify(value);
          } catch (e) {
            displayedValue = value;
          }
          throw new Error(`Pattern matching error: no pattern matches value ${displayedValue}`);
        }
        return entry.handler(entry.select(value), value);
      };
      return {
        with(...args2) {
          const handler = args2[args2.length - 1];
          const patterns = [];
          const predicates = [];
          for (let i = 0; i < args2.length - 1; i++) {
            const arg = args2[i];
            if (typeof arg === "function") {
              predicates.push(arg);
            } else {
              patterns.push(arg);
            }
          }
          let selected = {};
          const doesMatch = (value2) => Boolean(patterns.some((pattern) => matchPattern(pattern, value2, (key, value3) => {
            selected[key] = value3;
          })) && predicates.every((predicate) => predicate(value2)));
          return builder(value, cases.concat([
            {
              test: doesMatch,
              handler,
              select: (value2) => Object.keys(selected).length ? symbols.AnonymousSelectKey in selected ? selected[symbols.AnonymousSelectKey] : selected : value2
            }
          ]));
        },
        when: (predicate, handler) => builder(value, cases.concat([
          {
            test: predicate,
            handler,
            select: (value2) => value2
          }
        ])),
        otherwise: (handler) => builder(value, cases.concat([
          {
            test: () => true,
            handler,
            select: (value2) => value2
          }
        ])).run(),
        exhaustive: () => run(),
        run
      };
    };
    var isObject = (value) => Boolean(value && typeof value === "object");
    var isGuardPattern = (x) => {
      const pattern = x;
      return pattern && pattern[symbols.PatternKind] === symbols.Guard;
    };
    var isNotPattern = (x) => {
      const pattern = x;
      return pattern && pattern[symbols.PatternKind] === symbols.Not;
    };
    var isSelectPattern = (x) => {
      const pattern = x;
      return pattern && pattern[symbols.PatternKind] === symbols.Select;
    };
    var matchPattern = (pattern, value, select) => {
      if (isObject(pattern)) {
        if (isGuardPattern(pattern))
          return Boolean(pattern[symbols.Guard](value));
        if (isSelectPattern(pattern)) {
          select(pattern[symbols.Select], value);
          return true;
        }
        if (isNotPattern(pattern))
          return !matchPattern(pattern[symbols.Not], value, select);
        if (!isObject(value))
          return false;
        if (Array.isArray(pattern)) {
          if (!Array.isArray(value))
            return false;
          if (pattern.length === 1) {
            const selected = {};
            const listSelect = (key, value2) => {
              selected[key] = (selected[key] || []).concat([value2]);
            };
            const doesMatch = value.every((v) => matchPattern(pattern[0], v, listSelect));
            if (doesMatch) {
              Object.keys(selected).forEach((key) => select(key, selected[key]));
            }
            return doesMatch;
          }
          return pattern.length === value.length ? pattern.every((subPattern, i) => matchPattern(subPattern, value[i], select)) : false;
        }
        if (pattern instanceof Map) {
          if (!(value instanceof Map))
            return false;
          return [...pattern.keys()].every((key) => matchPattern(pattern.get(key), value.get(key), select));
        }
        if (pattern instanceof Set) {
          if (!(value instanceof Set))
            return false;
          if (pattern.size === 0)
            return value.size === 0;
          if (pattern.size === 1) {
            const [subPattern] = [...pattern.values()];
            return Object.values(wildcards_1.__).includes(subPattern) ? matchPattern([subPattern], [...value.values()], select) : value.has(subPattern);
          }
          return [...pattern.values()].every((subPattern) => value.has(subPattern));
        }
        return Object.keys(pattern).every((k) => k in value && matchPattern(
          // @ts-ignore
          pattern[k],
          // @ts-ignore
          value[k],
          select
        ));
      }
      return value === pattern;
    };
    function isMatching(...args2) {
      if (args2.length === 1) {
        const [pattern] = args2;
        return (value) => matchPattern(pattern, value, () => {
        });
      }
      if (args2.length === 2) {
        const [pattern, value] = args2;
        return matchPattern(pattern, value, () => {
        });
      }
      throw new Error(`isMatching wasn't given enough arguments: expected 1 or 2, received ${args2.length}.`);
    }
    exports.isMatching = isMatching;
  }
});

// src/csv/parse.ts
var fs = __toESM(require("fs"));
var os = __toESM(require("os"));
var import_stream = require("stream");
var csv = __toESM(require_src3());
var import_ts_pattern = __toESM(require_lib());

// src/core/table.ts
var getHighestLayer = (n) => {
  return Math.ceil(n / 2);
};

// src/core/utils.ts
var isSquare = (n) => {
  return n > 0 && Math.sqrt(n) % 1 === 0;
};

// src/core/verify.ts
var verifyLayer = (n, l) => {
  if (l < 0) {
    return false;
  } else if (l > getHighestLayer(n) - 1) {
    return false;
  }
  return true;
};
var verifyTableContent = (data) => {
  if (!isSquare(data.length)) {
    return false;
  }
  return true;
};

// src/core/layer.ts
var getStart = (n, l) => {
  verifyLayer(n, l);
  return l * (n + 1);
};
var getEnd = (n, l) => {
  verifyLayer(n, l);
  return n * n - 1 - (n + 1) * l;
};

// src/core/region.ts
var getRegionSize = (n, l) => {
  verifyLayer(n, l);
  return Math.max(1, n - 1 - 2 * l);
};
var getTopRegion = (n, l) => {
  verifyLayer(n, l);
  const offset = getStart(n, l);
  if (getRegionSize(n, l) === 1) {
    return /* @__PURE__ */ new Set([offset]);
  }
  return new Set(Array.from(Array(getRegionSize(n, l)).keys()).map((x) => offset + x));
};
var getLeftRegion = (n, l) => {
  verifyLayer(n, l);
  const offset = getStart(n, l);
  if (getRegionSize(n, l) === 1 && n % 2 == 1) {
    return /* @__PURE__ */ new Set([offset]);
  }
  return new Set(Array.from(Array(getRegionSize(n, l)).keys()).map((x) => offset + (x + 1) * n));
};
var getBottomRegion = (n, l) => {
  verifyLayer(n, l);
  const offset = getEnd(n, l);
  if (getRegionSize(n, l) === 1) {
    return /* @__PURE__ */ new Set([offset]);
  }
  return new Set(Array.from(Array(getRegionSize(n, l)).keys()).map((x) => offset - x));
};
var getRightRegion = (n, l) => {
  verifyLayer(n, l);
  const offset = getEnd(n, l);
  if (getRegionSize(n, l) === 1 && n % 2 == 1) {
    return /* @__PURE__ */ new Set([offset]);
  }
  return new Set(Array.from(Array(getRegionSize(n, l)).keys()).map((x) => offset - (x + 1) * n));
};

// src/core/rotate.ts
var rotateTableLeft = (data) => {
  if (!verifyTableContent(data)) {
    return null;
  }
  const n = Math.sqrt(data.length);
  if (n == 3) {
    return [
      data[1],
      data[2],
      data[5],
      data[0],
      data[4],
      data[8],
      data[3],
      data[6],
      data[7]
    ];
  } else if (n == 2) {
    return [
      data[1],
      data[3],
      data[0],
      data[2]
    ];
  } else if (n == 1) {
    return [...data];
  }
  const rotatedTableContent = [];
  for (let layer = 0; layer < getHighestLayer(n); layer++) {
    const topRegion = getTopRegion(n, layer);
    const leftRegion = getLeftRegion(n, layer);
    const bottomRegion = getBottomRegion(n, layer);
    const rightRegion = getRightRegion(n, layer);
    for (const element of Array.from(topRegion.values())) {
      rotatedTableContent[element] = data[element + 1];
    }
    for (const element of Array.from(leftRegion.values())) {
      rotatedTableContent[element] = data[element - n];
    }
    for (const element of Array.from(bottomRegion.values())) {
      rotatedTableContent[element] = data[element - 1];
    }
    for (const element of Array.from(rightRegion.values())) {
      rotatedTableContent[element] = data[element + n];
    }
  }
  return rotatedTableContent;
};

// src/csv/verify.ts
var verifyCsvHeaders = (headers) => {
  if (headers.length === 2 && headers[0] === "id" && headers[1] === "json") {
    return true;
  }
  return false;
};

// src/csv/parse.ts
var readTableFromRowAndRotateLeft = new import_stream.Transform({
  objectMode: true,
  transform(row, encoding, callback) {
    const table = { id: row.id, content: JSON.parse(row.json) };
    let outputRow = (0, import_ts_pattern.match)(verifyTableContent(table.content)).with(true, () => `${table.id},"${JSON.stringify(rotateTableLeft(table.content))}",true`).with(false, () => `${table.id},"[]",false`).exhaustive();
    outputRow += os.EOL;
    callback(null, outputRow);
  }
});
var rotateTablesFromCsv = (path, output) => {
  fs.createReadStream(path).pipe(csv.parse({ headers: true, delimiter: "," })).on("headers", (headers) => {
    if (verifyCsvHeaders(headers)) {
      output.write("id,json,is_valid");
      output.write(os.EOL);
    } else {
      throw Error("invalid headers in csv file");
    }
  }).pipe(readTableFromRowAndRotateLeft).pipe(output).on("error", (e) => {
    throw e;
  });
};

// src/cli/cli.ts
var args = process.argv;
var input = args[2];
rotateTablesFromCsv(input, process.stdout);
