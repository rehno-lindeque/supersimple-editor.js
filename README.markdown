# supersimple-editor.js

**supersimple-editor.js** is a super simple, but highly extendable text/code editor.

## Usage

Currently unreleased homefry!

## Version 0 (unreleased)

Not supported:

* IE < 9 (no event handling due to missing [addEventHandler](https://developer.mozilla.org/en/DOM/element.addEventListener))

## Implementation details

**supersimple-editor.js** uses a `<pre>` tag with the html5 (contentEditable)[http://www.whatwg.org/specs/web-apps/current-work/multipage/editing.html#contenteditable] attribute.
To avoid the many problems associated with contentEditable, we prevent a bunch of keyboard events and overide a couple of others with our own.
Then we also simply get rid of html elements that do not belong.

## References

* [A brutal odyssey to the dark side of the DOM tree](http://codemirror.net/1/story.html)
* [CodeMirror Internals](http://codemirror.net/doc/internals.html)
* [What’s wrong with extending the DOM](http://perfectionkills.com/whats-wrong-with-extending-the-dom/)

## General information

### Super simple?

    supersimple libraries provide the simplest, robust, feature-poor implementations of a concept.

* **Feature-poor:** Super simple libraries are intended to form base set of minimal functionality that can be ripped out and reused for unconventional projects without slogging through a massive, incomprehensible code base.
* **Robust:** No memory leaks (in sane browsers), decent performance (in sane browsers), no logical bugs.
* **Public domain:** Just grab the code you want and reuse it freely - no need to worry about licensing (however, please make sure to delete legal notices to avoid confusion for others!)
* **THE BIG CAVEATS:** 
  * **supersimple** is being developed for personal use and sometimes personal needs will trump ideology (a.k.a. having a day job).
  * At the moment **supersimple** relies on [adt.js](https://github.com/rehno-lindeque/adt.js) (minimum version 1.0) and [adt-html.js](https://github.com/rehno-lindeque/adt-html.js), partly to simplify things and partly because they're my libraries and I want to use them.
  * By "super simple" we do not mean *superficially simple*, we mean *superbly simple*. Where appropriate supersimple uses any number of clever tricks in order to get the basics Exactly Right (TM).

Note that **supersimple-editor.js** has not been released yet and therefore does not guarantee any sort of robustness right now!

#### Version 0 releases

All supersimple libraries provide a version 0 release based on only *the latest relevant specifications*.
At version 0, the libraries make a point of not concerning themselves with non-compliant browsers or stupid browser bugs, except to occasionally turn off the offending features.
After all, the hope is that, at some arbitrary point in the future, these shiny new specifications will be properly supported by all the major browsers - otherwise what would be the point?
In practice this means that older browsers may have trouble and therefore version 0 releases are not recommended for production use.
