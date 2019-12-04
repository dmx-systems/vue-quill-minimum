# vue-quill-minimum

A minimal [Vue.js](https://vuejs.org) wrapper component for the [Quill](https://quilljs.com) editor.

## Version History

**1.8.1** -- Dec 4, 2019

* Fix: distro file name

**1.8** -- Dec 4, 2019

* Add script to build standalone library

**1.7** -- Nov 21, 2019

* `setHTML()` method does *not* change focus
* Add `focus()` component method to set focus manually
* Update to Quill 1.3.7

**1.6** -- Jul 22, 2019

* Change license to `AGPL-3.0`

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

* The `quill-ready` event gives the host application access to the quill instance, e.g. to register toolbar handlers dynamically.

**1.0** -- Jun 3, 2017

------------
Jörg Richter  
Dec 4, 2019
