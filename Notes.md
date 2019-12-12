# Notes

## Vuetify

### Footer Fix

Remove `app` property from the `v-footer` component and that fixes it.

Otherwise, you have to add the `absolute` prop.

---

### Customizing Styles

This greatly increasing build time

```scss
$font-size-root: 18px;
$btn-letter-spacing: 0;
$btn-font-weight: 900;

@import '~vuetify/src/styles/styles.sass';
```

You should create an additional `scss` file like `main.scss` and import it via
`css` option in `nuxt.config`.

---

## NOW

### Local Modules

This was needed in `now.json` to add local modules:

```js
"config": {
    "serverFiles": ["server-middleware/**", "modules/**"]
}
```

### Vuetify

To import the `colors` file there are 2 options:

1. Just change `@nuxtjs/vuetify` to a regular Dependency instead of a DevDependency

2. Use a vuetify config file and import it there and set the path of the file in
   the module options like:

   ```js
   export default {
     vuetify: {
       customVariables: ['~/assets/variables.scss'],
       optionsPath: './vuetify.config.js'
     }
   }
   ```
