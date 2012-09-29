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
    html: function(textContents) {
      var 
        el = html.pre(
          {class: "supersimple-editor-input", contenteditable: "true"}, 
          typeof textContents === 'string'? textContents : "");
      // Events will not be attached in older versions of IE < 9.
      if (typeof el.addEventListener === 'function')
        attachEvents(el);
      return el;
    }
  };
