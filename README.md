# My personal website

## Tech Stack
- React with Remix (SPA mode)
- Tailwind

## Some challenges

### Creating the ripple buttons
I used the `useRef()` hook to create a mutable array that was able to retain its state throughout the lifecycle of the button component. This allowed for multiple ripples to be created on top of each other (check it out!). Before adding the use of `useRef` and only using `useState`, creating a ripple would immediately destroy any ripples that were currently rippling, making the ripple effect less authentic.

### SVGs vs images
I initially opted for SVGs since who doesn't want infinitely scalable graphics. But I found that the draw paths of SVGs are tightly coupled with its `viewbox` property. This means it isn't trivial to alter the dimensions of the SVG which made aligning multiple SVGs together difficult. Images didn't have this issue. However, using `img` also made changing its color on hover more complicated (needed to use `hue-rotate`, `brightness`, `saturation`). I wouldn't have had this issue with SVGs where I could've simply declared the final HSL code I wanted (or Tailwind class in my specific case).

## Credits
All the code in this repository is original, but the design was heavily inspired by [Gazi Jarin](https://gazijarin.com/#about) and [Brittany Chiang](https://v4.brittanychiang.com/).