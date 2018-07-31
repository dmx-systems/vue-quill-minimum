# vue-quill-minimum

A minimum vue quill component.

## Version History

**1.3** -- Jul 31, 2018

* Webpack build: support for CSS extraction
* Add GitLab CI/CD

**1.2** -- Mar 25, 2018

* The `vue-quill-minimum` component can be loaded asynchronously. That is the host application loads the `quill` package only when needed.
    * A new `quill-imported` event gives the host application access to the `Quill` constructor function (e.g. to register extensions) without depending on the `quill` package. This allows Webpack to split the Quill code from the host application's code.
* Support for Quill's `bubble` theme
    * Depending on the selected theme only the required CSS is loaded

**1.1** -- Sep 7, 2017

* A new `quill-ready` event gives the host application access to the quill instance, e.g. to register toolbar handlers dynamically.

**1.0** -- Jun 3, 2017

------------
Jörg Richter  
Jul 31, 2018
