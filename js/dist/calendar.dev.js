"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calendar = void 0;
var calendar = document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    timeZone: 'UTC',
    initialView: 'dayGridMonth',
    editable: true,
    selectable: true
  });
  calendar.render();
});
exports.calendar = calendar;