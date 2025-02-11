# Readme University Campus Management System

## Prototype on Marvel

See https://marvelapp.com/prototype/1bce0b7e/screen/96079502

## Main structure of project

- **Side drawer / menu:** /src/components/app.html
- **Single components** are then to be found under /src/components/<component-name>/<component-name.[html|scss|ts]>

## Styles

Styles are to be set (centrally) under **/src/app.scss**

## Routes

Routes are to be found under: **/src/app.ts**

## Screenshot: Main dashboard

![ucmt](https://github.com/user-attachments/assets/06772e04-d7e4-4d0d-85dd-1d5b4595751c)


## Build

To run this application, follow the following steps:
- clone this repository
- run npm install
- run npm start
  

### Development mode
* Injects the `services/config-dev.ts` config
* Starts hot reloading development server
```bash
npm start
```


## Utils

### Analyze package sizes
Generates visualization of package sizes
```bash
npm run analyze
```



## References

- Material Framework: https://github.com/aurelia-ui-toolkits/aurelia-mdc-web
