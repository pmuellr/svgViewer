svgViewer - an HTML element providing a nice SVG viewer
================================================================================

adds the following behaviors to an SVG element, to allow pan and zoom:

* drag the mouse over the SVG element to pan
* shift mouse wheel (two finger drag on trackpad) to zoom


usage
================================================================================

```js
const svgViewer = require('svgViewer')

// create a viewer
const svgElement = document.getElementById('svg')
svgViewer.create(svgElement)
```


install
================================================================================

    npm install pmuellr/svgViewer


license
================================================================================

This package is licensed under the MIT license.  See the
[LICENSE.md](LICENSE.md) file for more information.


contributing
================================================================================

Awesome!  We're happy that you want to contribute.

Please read the [CONTRIBUTING.md](CONTRIBUTING.md) file for more information.
