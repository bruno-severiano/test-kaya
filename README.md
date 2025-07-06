# test-kaya

This is a test developed by Bruno using VUE 3.

## Live Site

https://cozy-torrone-6ca149.netlify.app/

## NPM and Node

I've used NPM 10.9.2 and Node v22.17.0

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Design or technical decisions

1 - On CSS i've used bootstrao 5 as a base, it is clear it is not currently updated to run with the latest versions of NPM, version 6 may fix those problems, i've used it because it is still the most popular css framework;

2 - I've used the main Vue builder, i know that there are others but since i don't do anything for a while, i preferred the base one;

3 - I'm not very confortble working without any wireframes or designs, as i Front-End, my work is to translate images into interaction, leaving a huge array of the options clealy gets in the way of developing faster and can leave space for doubts and more back and forth;

4 - For the single pages, i've used routing and they will be created depending of the "path" of the arrays, i've made everything very simple and responsive;

5 - i've deployed the project live as well using netlify.

## Tradeoffs you made due to time or scope

My main problem with the test is having to deal with creating design, it would have been much better to have something already done, so i could focus on the coding and maybe enhancing some features.

## What you’d improve with more time

I would have worked more on the routing and server side rendering, right now it is a very simple render, it's ok for apps, but not ok for websites faced by the public.