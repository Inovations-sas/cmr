        const calendar =document.addEventListener('DOMContentLoaded', function() {
            var calendarEl = document.getElementById('calendar');
          
            var calendar = new FullCalendar.Calendar(calendarEl, {
              timeZone: 'UTC',
              initialView: 'dayGridMonth',
              editable: true,
              selectable: true
            });
          
            calendar.render();
          });
    export {calendar}