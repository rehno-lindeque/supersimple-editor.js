  // Export supersimple to a CommonJS module if exports is available
  if (typeof(exports) !== "undefined" && exports !== null)
    exports.module = supersimple.editor;
  return;
})();
