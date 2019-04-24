# #TheRailsCampProject

[Presentation
slides](https://failure-driven.github.io/railscamp-hobart-2018-slides/) for
[Ruby Melbourne 25th April
2019](https://www.meetup.com/Ruby-On-Rails-Oceania-Melbourne/events/hrznsqyzgbgc/)

-------------------------

## mdx-deck basic template

This was generated with [mdx-deck][]'s `npm init deck` command.

### Development

To run the presentation deck in development mode:

```sh
npm start
```

Edit the [`deck.mdx`](deck.mdx) file to get started.

### Exporting

To build the presentation deck as static HTML:

```sh
npm run build
```

To export a PDF:

```sh
npm run pdf
```

To export an image of the title slide:

```sh
npm run image
```

For more documentation see the [mdx-deck][] repo.

[mdx-deck]: https://github.com/jxnblk/mdx-deck

### Exporting to github pages

_experimental and needs some tweaking to copy images and use correct paths_

```sh
npm run build-github-pages
```

### presentation hack
```
cp src/Presenter.js node_modules/mdx-deck/dist/Presenter.js
```

