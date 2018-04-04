# Ferzos React Template
This project is a further development project base on [Create React App](https://github.com/facebookincubator/create-react-app) from facebook. This project have 2 branch:
* master (if you don't need redux for your project)
* with-redux (if you need redux for your project)

### Prerequisites
```
npm or yarn
```
### Installing
```
open package.json
change the project's name (and/or project's version if necessary)
npm install or yarn install
```

### Project Structure
```
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── assets
│   │   └── logo.svg
│   ├── components
│   │   └── Heading.js
│   ├── pages
│   │   └── App.js
│   ├── style
│   │   ├── sass                
│   │   │   ├── web               # Add new style here
│   │   │   │   └── _app.scss
│   │   │   ├── _color.scss       # Application color style
│   │   │   ├── _font.scss        # Application font style
│   │   │   ├── _normalize.scss   # Normalize style
│   │   │   └── _utils.scss       # Utility style
│   │   └── index.scss            # Entry point for sass
│   ├── __tests__
│   │   └── App.test.js
│   ├── index.css                 # Compiled sass result
│   ├── index.js                  
│   └── registerServiceWorker.js
├── package.json
└── README.md
```

## Notes
```
1. File naming on scss file: always start with "_"
Example: _example.scss

2. If you make a new scss file under web folder, don't forget to import it. Write it in index.scss
Example: @import 'sass/web/example';
```

## Built With

* [Create React App](https://github.com/facebookincubator/create-react-app) - From Facebook
* [Sass](https://sass-lang.com/) - CSS Preprocessor
* [React Fontawesome](https://github.com/FortAwesome/react-fontawesome) - Icon Library
* [React Router](https://github.com/ReactTraining/react-router)
* [Husky](https://github.com/typicode/husky)
* [Lint-Staged](https://github.com/okonet/lint-staged)
* [Prettier](https://github.com/prettier/prettier) - Code Formatter
## Authors

* **Ferdinand**
