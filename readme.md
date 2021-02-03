# RGBA to transparency adjusted hex

[![Netlify Status](https://api.netlify.com/api/v1/badges/30757ade-981c-427c-8675-bd9705ffa18e/deploy-status)](https://app.netlify.com/sites/rgbatohexa/deploys)

This is an [online tool](https://rgbatohexa.shenato.com/) Hex alpha or HEXA as i like to call it, is an 8 digit hex code with transparency value #RRGGBBAA

## [Take me to the live project](https://rgbatohexa.shenato.com/)

## What does this project do?

It's an online tool to convert between rgba (and rgb) to hex code and vice versa, **while maintaining the opacity value through the conversion**, I haven't found many color conversion tools out that maintain transparency while converting from rgba to hex, if they supported converting from 8 digit hex at all.

## Why do i care about transparent hex codes, can't i just use rgba?

Transparency adjusted hex codes #RRGGBBAA allows you to attach alpha values next to a variable which is super helpful when you have a design system with style guide of colors if you define them all in hex and use them in a context where you want some opacity with rgb/rgba you have to do complex string manipulation where you need to open the variable up and change, but with HEX you can just attach the opacity after the variable

```js
const styleGuide = {
  hexColor: '#013370',
};

`${styleGuide.hexColor}80`; // #01337080 which is equal to rgba(1, 51, 112, 0.5)
```

You see it's easier to from #013370 to #01337080 than it is to go from rgba(1, 51, 112) to rgba(1, 51, 112, 0.5) therefore transparency adjusted hex can be very convenient and superior to rgba

This approach works very well with CSS-in-JS libraries like `styled-components`

```js
const theme = {
  backgroundColorInHex: '#013370',
};

// Using a theme color but with 0.25 opacity

const Background = styled.div`
  background: ${({ theme }) => `${theme.backgroundColorInHex}40`};
`;
```
