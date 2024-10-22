import { Component, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  public events: any[] = [
    {
      title: 'Reunión de Proyecto',
      start: '2024-10-25T10:00:00',  // Agregando hora
      end: '2024-10-25T12:00:00',    // Hora de fin del evento
      description: 'Discusión sobre los avances del proyecto.',  // Descripción del evento
      icon: 'pi pi-briefcase',  // Icono de PrimeIcons
    },
    {
      title: 'Entrega de Reporte',
      start: '2024-10-28T09:00:00',
      end: '2024-10-28T11:00:00',
      description: 'Entrega final del reporte trimestral.',
      image: 'https://example.com/report-icon.png',  // Imagen del evento
    },
    {
      title: 'Conferencia Técnica',
      start: '2024-11-02T14:00:00',
      end: '2024-11-02T16:00:00',
      description: 'Conferencia sobre las nuevas tendencias tecnológicas.',
      icon: 'pi pi-globe',
    }
  ]
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    locale: 'es',
    noEventsText: 'Sin eventos',
    editable: false,
    timeZone: 'America/Guatemala',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: null
    },
    eventClick: (arg) => this.handleDateClick(arg),
  };

  handleDateClick(arg) {
    alert('date click! ' + JSON.stringify(arg))
  }

  constructor(){
  }
}
