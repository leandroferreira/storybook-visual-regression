## Visual Regression with Storybook

Very quick POC for running visual regression tests using [Storybook](https://storybook.js.org), [Storyshots](https://github.com/storybookjs/storybook/tree/next/addons/storyshots) and [Puppeteer](https://github.com/puppeteer/puppeteer).

### Install

```sh
$ yarn
```

### Run

```sh
$ yarn test:visual
```

### TODO (because I like ticking boxes)

- [ ] Run snapshots for different viewports / pixel density / device simulations
- [ ] Run snapshots of whole page templates
- [ ] Test accessibility with AxE
- [ ] Figure out a nice workflow for updating snapshots
- [ ] Run in watch mode
- [ ] Have a beer after a job well done!
