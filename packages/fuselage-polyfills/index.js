/* eslint-disable @typescript-eslint/no-require-imports */
require('focus-within-polyfill');
require('focus-visible');
window.ResizeObserver =
  window.ResizeObserver || require('@juggle/resize-observer').ResizeObserver;

if (!navigator.clipboard) {
  navigator.clipboard = require('clipboard-polyfill');
}
require('element-closest-polyfill');
require('new-event-polyfill');
