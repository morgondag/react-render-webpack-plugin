# react-render-webpack-plugin
react serverside rendering for webpack.


```npm i react-render-webpack-plugin```


``` webpack.prod.config.js ```:

```js
const reactRenderPlugin = require('react-render-webpack-plugin.js');
module.exports = {
    plugins: [
        new reactRenderPlugin({
            'file': 'src/app.jsx', // The entry file of your app
      		'parentClass': 'app-react' // the class-selector to render into
        })
    ]
}
```


``` index.html ```:
```html
<!DOCTYPE html>
<html lang="en">
<body>
	<div class="app-react"></div>
	<script src="app.min.js"></script>
</body>
</html>
```

