/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/material-ripple-effects";
exports.ids = ["vendor-chunks/material-ripple-effects"];
exports.modules = {

/***/ "(ssr)/./node_modules/material-ripple-effects/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/material-ripple-effects/index.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("module.exports = class Ripple {\r\n  constructor() {\r\n    this.x = 0;\r\n    this.y = 0;\r\n    this.z = 0;\r\n  }\r\n\r\n  findFurthestPoint(\r\n    clickPointX,\r\n    elementWidth,\r\n    offsetX,\r\n    clickPointY,\r\n    elementHeight,\r\n    offsetY,\r\n  ) {\r\n    this.x = clickPointX - offsetX > elementWidth / 2 ? 0 : elementWidth;\r\n    this.y = clickPointY - offsetY > elementHeight / 2 ? 0 : elementHeight;\r\n    this.z = Math.hypot(\r\n      this.x - (clickPointX - offsetX),\r\n      this.y - (clickPointY - offsetY),\r\n    );\r\n\r\n    return this.z;\r\n  }\r\n\r\n  appyStyles(element, color, rect, radius, event) {\r\n    element.classList.add('ripple');\r\n    element.style.backgroundColor =\r\n      color === 'dark' ? 'rgba(0,0,0, 0.2)' : 'rgba(255,255,255, 0.3)';\r\n    element.style.borderRadius = '50%';\r\n    element.style.pointerEvents = 'none';\r\n    element.style.position = 'absolute';\r\n    element.style.left = event.clientX - rect.left - radius + 'px';\r\n    element.style.top = event.clientY - rect.top - radius + 'px';\r\n    element.style.width = element.style.height = radius * 2 + 'px';\r\n  }\r\n\r\n  applyAnimation(element) {\r\n    element.animate(\r\n      [\r\n        {\r\n          transform: 'scale(0)',\r\n          opacity: 1,\r\n        },\r\n        {\r\n          transform: 'scale(1.5)',\r\n          opacity: 0,\r\n        },\r\n      ],\r\n      {\r\n        duration: 500,\r\n        easing: 'linear',\r\n      },\r\n    );\r\n  }\r\n\r\n  create(event, color) {\r\n    const element = event.currentTarget;\r\n\r\n    element.style.position = 'relative';\r\n    element.style.overflow = 'hidden';\r\n\r\n    const rect = element.getBoundingClientRect();\r\n\r\n    const radius = this.findFurthestPoint(\r\n      event.clientX,\r\n      element.offsetWidth,\r\n      rect.left,\r\n      event.clientY,\r\n      element.offsetHeight,\r\n      rect.top,\r\n    );\r\n\r\n    const circle = document.createElement('span');\r\n\r\n    this.appyStyles(circle, color, rect, radius, event);\r\n    this.applyAnimation(circle);\r\n\r\n    element.appendChild(circle);\r\n\r\n    setTimeout(() => circle.remove(), 500);\r\n  }\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtcmlwcGxlLWVmZmVjdHMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BhdGllbmNlX2FsY2hlbXkvLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtcmlwcGxlLWVmZmVjdHMvaW5kZXguanM/MGIxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFJpcHBsZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnggPSAwO1xyXG4gICAgdGhpcy55ID0gMDtcclxuICAgIHRoaXMueiA9IDA7XHJcbiAgfVxyXG5cclxuICBmaW5kRnVydGhlc3RQb2ludChcclxuICAgIGNsaWNrUG9pbnRYLFxyXG4gICAgZWxlbWVudFdpZHRoLFxyXG4gICAgb2Zmc2V0WCxcclxuICAgIGNsaWNrUG9pbnRZLFxyXG4gICAgZWxlbWVudEhlaWdodCxcclxuICAgIG9mZnNldFksXHJcbiAgKSB7XHJcbiAgICB0aGlzLnggPSBjbGlja1BvaW50WCAtIG9mZnNldFggPiBlbGVtZW50V2lkdGggLyAyID8gMCA6IGVsZW1lbnRXaWR0aDtcclxuICAgIHRoaXMueSA9IGNsaWNrUG9pbnRZIC0gb2Zmc2V0WSA+IGVsZW1lbnRIZWlnaHQgLyAyID8gMCA6IGVsZW1lbnRIZWlnaHQ7XHJcbiAgICB0aGlzLnogPSBNYXRoLmh5cG90KFxyXG4gICAgICB0aGlzLnggLSAoY2xpY2tQb2ludFggLSBvZmZzZXRYKSxcclxuICAgICAgdGhpcy55IC0gKGNsaWNrUG9pbnRZIC0gb2Zmc2V0WSksXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB0aGlzLno7XHJcbiAgfVxyXG5cclxuICBhcHB5U3R5bGVzKGVsZW1lbnQsIGNvbG9yLCByZWN0LCByYWRpdXMsIGV2ZW50KSB7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3JpcHBsZScpO1xyXG4gICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPVxyXG4gICAgICBjb2xvciA9PT0gJ2RhcmsnID8gJ3JnYmEoMCwwLDAsIDAuMiknIDogJ3JnYmEoMjU1LDI1NSwyNTUsIDAuMyknO1xyXG4gICAgZWxlbWVudC5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNTAlJztcclxuICAgIGVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCAtIHJhZGl1cyArICdweCc7XHJcbiAgICBlbGVtZW50LnN0eWxlLnRvcCA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcCAtIHJhZGl1cyArICdweCc7XHJcbiAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gZWxlbWVudC5zdHlsZS5oZWlnaHQgPSByYWRpdXMgKiAyICsgJ3B4JztcclxuICB9XHJcblxyXG4gIGFwcGx5QW5pbWF0aW9uKGVsZW1lbnQpIHtcclxuICAgIGVsZW1lbnQuYW5pbWF0ZShcclxuICAgICAgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJyxcclxuICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjUpJyxcclxuICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAge1xyXG4gICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgZWFzaW5nOiAnbGluZWFyJyxcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoZXZlbnQsIGNvbG9yKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcclxuICAgIGVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuXHJcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICBjb25zdCByYWRpdXMgPSB0aGlzLmZpbmRGdXJ0aGVzdFBvaW50KFxyXG4gICAgICBldmVudC5jbGllbnRYLFxyXG4gICAgICBlbGVtZW50Lm9mZnNldFdpZHRoLFxyXG4gICAgICByZWN0LmxlZnQsXHJcbiAgICAgIGV2ZW50LmNsaWVudFksXHJcbiAgICAgIGVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxyXG4gICAgICByZWN0LnRvcCxcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuICAgIHRoaXMuYXBweVN0eWxlcyhjaXJjbGUsIGNvbG9yLCByZWN0LCByYWRpdXMsIGV2ZW50KTtcclxuICAgIHRoaXMuYXBwbHlBbmltYXRpb24oY2lyY2xlKTtcclxuXHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNpcmNsZSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiBjaXJjbGUucmVtb3ZlKCksIDUwMCk7XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/material-ripple-effects/index.js\n");

/***/ })

};
;