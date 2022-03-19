# QuRL
Chrome extension to generate a QR code of the page URL I am viewing. This makes it easy to swap a website you're viewing from your desktop or laptop to your phone.

## Development

To run the development environment, navigate to the project root and run:

```shell
$ npm run watch
```

Then open your chrome browser and navigate to `chrome://extensions`, enable "Developer Mode" in the top-right, then click "Load Unpacked" in the top-left and open the `/build` folder of the project.

## Production

Build the project by running:

```shell
$ npm run build
```

## Acknowledgements

This project was bootstrapped with [Chrome Extension CLI](https://github.com/dutiyesh/chrome-extension-cli)