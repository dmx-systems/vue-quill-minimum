# vue-quill-minimum

A minimum vue quill component.

## Version History

**1.5** -- May 27, 2019

* Add `setHTML()` component method
* Make Quill instance available as `quill` component data
* Refactor CSS loading

**1.4** -- Jan 29, 2019

* Change license to `GPL-3.0-or-later`

**1.3** -- Jul 31, 2018

* Webpack build: support for CSS extraction
* Add GitLab CI/CD

**1.2** -- Mar 25, 2018

* The `vue-quill-minimum` component can be loaded asynchronously. That is the host application loads the `quill` package only when needed.
    * A new `quill-imported` event gives the host application access to the `Quill` constructor function (e.g. to register extensions) without depending on the `quill` package. This allows Webpack to split the Quill code from the host application's code.
* Fix: CSS for both standard themes (`snow` and `bubble`) is loaded

**1.1** -- Sep 7, 2017

* A new `quill-ready` event gives the host application access to the quill instance, e.g. to register toolbar handlers dynamically.

**1.0** -- Jun 3, 2017

------------
Jörg Richter  
May 27, 2019
