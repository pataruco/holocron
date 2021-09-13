# Holocron

![](https://media.giphy.com/media/l2JJmXRcFoEJNXyEM/giphy.gif)

It's a Markdown presentation tool using the new [Webpack server](https://github.com/webpack-contrib/webpack-serve) and [remarkjs](https://github.com/gnab/remark)

## How to install?

- Clone this repo

  ```shell
  git clone git@github.com:pataruco/holocron.git
  ```

- Install dependencies
  ```shell
  yarn
  ```

## How to run it

- On [`./src/index.js`](./src/index.js) add the path of your new presentation to the lesson object
  ```js
  const lessons = {
    flexbox: '../slides/flexbox/flexbox.md',
    ...
  };
  ```
- Then on `showSlides` instantiation method, replace `lessons.flexbox` value to the new path

  ```js
  showSlides(lessons.flexbox),
  ```

- To start the server just run
  ```shell
    yarn start
  ```

## Presentation

Presentation mode can be activated/deactivated by pressing the `P` key on your keyboard while having the window focused.

You will be presented with your current slide, a preview of the next slide, your current and next slide notes as well as a timer.

Additionally you can press `C` to create a new window where the same presentation will be displayed. This window is linked to the main window. Changing slides on one will cause the slide to change on the other.

## Keyboard shortcuts

All of these shortcuts can also be seen during a presentation by pressing **H** or **?**

- **h** or **?**: Toggle the help window
- **j**: Jump to next slide
- **k**: Jump to previous slide
- **b**: Toggle blackout mode
- **m**: Toggle mirrored mode.
- **c**: Create a clone presentation on a new window
- **p**: Toggle PresenterMode
- **f**: Toggle Fullscreen
- **t**: Reset presentation timer
- **&lt;number&gt;** + **&lt;Return&gt;**: Jump to slide &lt;number&gt;

## How to print

Just save as PDF from the browser
