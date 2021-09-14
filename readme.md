# Holocron

![](https://media.giphy.com/media/l2JJmXRcFoEJNXyEM/giphy.gif)

It's a Markdown presentation tool using ~~the new~~ [Webpack server](https://github.com/webpack/webpack-dev-server) and [remarkjs](https://github.com/gnab/remark)

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

1. To start the server just run

   ```shell
     yarn start
   ```

2. Choose your lesson from the prompt
3. 🚀

## Presentation

Presentation mode can be activated/deactivated by pressing the <kbd>P</kbd> key on your keyboard while having the window focused.

You will be presented with your current slide, a preview of the next slide, your current and next slide notes as well as a timer.

Additionally you can press <kbd>C</kbd> to create a new window where the same presentation will be displayed. This window is linked to the main window. Changing slides on one will cause the slide to change on the other.

## Keyboard shortcuts

All of these shortcuts can also be seen during a presentation by pressing <kbd>H</kbd> or <kbd>?</kbd>

- <kbd>h</kbd> or <kbd>?</kbd>: Toggle the help window
- <kbd>j</kbd>: Jump to next slide
- <kbd>k</kbd>: Jump to previous slide
- <kbd>b</kbd>: Toggle blackout mode
- <kbd>m</kbd>: Toggle mirrored mode.
- <kbd>c</kbd>: Create a clone presentation on a new window
- <kbd>p</kbd>: Toggle PresenterMode
- <kbd>f</kbd>: Toggle Fullscreen
- <kbd>t</kbd>: Reset presentation timer
- <kbd>number</kbd> + <kbd>Return</kbd>: Jump to slide `number`

## How to print

Just save as PDF from the browser (Chrome)
