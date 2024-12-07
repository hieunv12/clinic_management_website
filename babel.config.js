module.exports = {
    "presets": ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
    "plugins": [
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      // ... existing code ...
    ["module-resolver", {
      "root": ["./src"],
      "alias": {
        "@types": "./src/types",
        "@services": "./src/services",
        "@hooks": "./src/hooks",
        "@components": "./src/components",
        "@pages": "./src/pages",
        "@assets": "./src/assets",
        "@utils": "./src/utils",
        "@constants": "./src/constants",
        "@contexts": "./src/contexts",
        "@styles": "./src/styles",
        "@features": "./src/features",
        "@routes": "./src/routes"
      }
    }]
  ]
};