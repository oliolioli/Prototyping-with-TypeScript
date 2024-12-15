# Readme

# Main structure of project

- Side drawer / menu: /src/components/app.html
- The single components are then to be found under /src/components/<component-name>/<component-name.[html|scss|ts]>

## Styles

Styles are to be set (centrally) under /src/app.scss


![](./screenshot.png)

## Build

### Development mode
* Injects the `services/config-dev.ts` config
* Starts hot reloading development server
```bash
npm start
```

### Build release
* Injects the `services/config-prod.ts` config
* Generates the application into `dist`
```bash
npm run build
```

## Utils

### Analyze package sizes
Generates visualization of package sizes
```bash
npm run analyze
```

### Update aurelia-mdc

```shell
npm install -g npm-check-updates
ncu -u "/aurelia-mdc-web/"
npm install
```

## References

- Material Framework: https://github.com/aurelia-ui-toolkits/aurelia-mdc-web
