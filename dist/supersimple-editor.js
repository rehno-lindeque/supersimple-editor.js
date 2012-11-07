/*
 * supersimple-editor.js - A super... simple... editor (in js)
 * supersimple-editor.js is free, public domain software (http://creativecommons.org/publicdomain/zero/1.0/)
 * Originally created by Rehno Lindeque of http://www.mischievousmeerkat.com
 */
var supersimple = supersimple || {};
(function() {
"use strict";
  var
    attachEvents = function(el) {
      /*
      var keys = { ctrl: false };
      el.addEventListener('keydown', function(e) {
        var 
          code = e.charCode? e.charCode : e.keyCode,
          c = String.fromCharCode(code);
        if (e.ctrlKey)
          keys.ctrl = true;
        if (keys.ctrl && (c === 'B' || c === 'I'))
          e.preventDefault();
        
      }, false);
      // TODO: (issue #1) can't press b/i keys when ctrl combination has been used
      el.addEventListener('keyup', function(e) { keys.ctrl = !e.ctrlKey; return true; }, false);
      el.addEventListener('blur', function(e) { keys.ctrl = false; return true; }, false);
      el.addEventListener('focus', function(e) { keys.ctrl = false; return true; }, false);
      */
    };

  supersimple.editor = {
    html: function(attributes, textContents) {
      var 
        attributesPrime = {class: "supersimple-editor-input", contenteditable: "true"},
        key,
        el;
      if (arguments.length === 1 && typeof arguments[0] === 'string')
        textContents = attributes;
      else for (key in attributes)
        if (key === 'class')
          attributesPrime.class += " " + attributes.class;
        else 
          attributesPrime[key] = attributes[key];
      el = html.pre(attributesPrime, typeof textContents === 'string'? textContents : "");
      // Events will not be attached in older versions of IE < 9.
      if (typeof el.addEventListener === 'function')
        attachEvents(el);
      return el;
    }
  };
  // Export supersimple to a CommonJS module if exports is available
  if (typeof(exports) !== "undefined" && exports !== null)
    exports.module = supersimple.editor;
  return;
})();
