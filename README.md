# QuRL
Chrome extension to generate a QR code of the page URL I am viewing. This makes it easy to swap a website you're viewing from your desktop or laptop to your phone.

## Development

To run the development environment, navigate to the project root and use the provided makefile:
```shell
$ make run
```

If your machine does not have [Make](gnu.org/software/make/) use:

```shell
$ npm run watch
```

Then open your chrome browser and navigate to `chrome://extensions`, enable "Developer Mode" in the top-right, then click "Load Unpacked" in the top-left and open the `/build` folder of the project.

## Acknowledgements

This project was bootstrapped with [Chrome Extension CLI](https://github.com/dutiyesh/chrome-extension-cli)