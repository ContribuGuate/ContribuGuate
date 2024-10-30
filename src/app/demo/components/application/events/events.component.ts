import { Component, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  displayDialog: boolean = false;
  selectedEvent: any;
  public events: any[] = [
  ]
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    locale: 'es',
    noEventsText: 'Sin eventos',
    editable: false,
    timeZone: 'America/Guatemala',
    eventDisplay: 'auto',
    displayEventTime: true,
    headerToolbar: {
      left: 'prev',
      center: 'title',
      right: 'next today'
    },
    eventClick: this.handleEventClick.bind(this),
    buttonText: {
      today: 'Hoy'
    },
    dayHeaders: true,
    eventContent: this.customEventContent.bind(this)
  };

  customEventContent(eventInfo) {
    return {
      html: `
        <div class="custom-event">
          <strong>${eventInfo.event.title}</strong><br/>
          <small>${eventInfo.timeText}</small><br/>
        </div>
      `
    };
  }

  handleEventClick(clickInfo: any) {
    this.selectedEvent = clickInfo.event; 
    this.displayDialog = true; 
  }

  constructor(private eventService: EventService){
    this.getEvents()
  }

  public getEvents(){
    this.eventService.getEvents()
    .subscribe((e)  => {
      if(e.success == true){
        this.events = e.events.map(event => ({
          title: event.name,  // Transforma 'name' a 'title'
          start: event.date,  // Transforma 'date' a 'start'
          extendedProps: {
            description: event.description,  // Incluye otros datos adicionales
            address: event.address,
            link: event.link,
            image: event.image
          }
        }));
      }
    })
  }
}
