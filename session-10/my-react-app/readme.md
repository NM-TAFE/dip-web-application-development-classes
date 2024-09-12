`npm install --save-dev css-loader style-loader`

**webpack rule:**

```test: /.css$/, // Match any .css file
use: [
    'style-loader', // Injects CSS into the DOM
    'css-loader', // Turns CSS into CommonJS
]
```

## Challenge 2 & 3

- these can be found ion the components section
