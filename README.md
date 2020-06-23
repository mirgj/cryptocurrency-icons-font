# cryptocurrency-icons-font
> A webfont for cryptocurrency symbols

## About
**cryptocurrency-icons-font** use SVG icons as base to create a webfont which can be easily integrated in your web site / application. It provides you also the option to include your font as an **SVG sprite**.

## Getting started
You can install **cryptocurrency-icons-font** from npm

```
npm install --save cryptocurrency-icons-font
```

or using the github package

```
npm install --save @mirgj/cryptocurrency-icons-font
```

Or you can just clone this repository and get the files into the [dist](https://github.com/mirgj/cryptocurrency-icons-font/tree/master/dist) directory.
```
git clone https://github.com/mirgj/cryptocurrency-icons-font.git
```

### WebFont
The webfont is available and to you it you can take the demo file into _dist/webfont_ as reference. Example:
```html
<i class='crypto-icon btc'></i>
```

### SVG Sprite
The svg sprites are located into the folder _dist/svg-sprite/css_ and there are three sprites for black, color and white.
```html
<i class='crypto-icon black btc'>crypto-icon.black.btc</i>
```
Colored version
```html
<i class='crypto-icon color btc'>crypto-icon.color.btc</i>
```
White version
```html
<i class='crypto-icon white btc'>crypto-icon.white.btc</i>
```
