module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb-base",
    "installedESLint": true,
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
      "indent": ["error", 2],
      "semi" : "off",
      "linebreak-style" : "off",
      "no-console" : "off",
      "no-underscore-dangle" : "off",
      "new-cap" : "off",
      "no-param-reassign" : ["error", {"props": false}],
      "import/no-extraneous-dependencies":  ["error", {"devDependencies": true, "optionalDependencies": true, "peerDependencies": true}],
      "no-undef" : "off",
   }
};
