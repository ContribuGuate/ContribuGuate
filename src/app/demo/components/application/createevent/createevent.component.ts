import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommunityService } from 'src/app/services/community.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.component.html',
  styleUrl: './createevent.component.scss'
})
export class CreateeventComponent {
  public registerEventForm: FormGroup;
  public communities: any[] = [];
  constructor(private fb: FormBuilder, private communityService: CommunityService, private eventService: EventService,
    private toast: ToastrService
  ){
    this.registerEventForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      address: [''],
      date: [null, Validators.required],
      link: [''],
      image: ['', Validators.required],
      community: [null]
    });
    this.getCommunities()
  }

  getCommunities(){
    this.communityService.getCommunities()
    .subscribe((e) => {
      if(e.success == true){
        this.communities = e.communities
      }else{
        this.communities = []
      }
    })
  }

  public async saveEvent(){
    this.eventService.addEvent(this.registerEventForm.value)
    .subscribe((e) => {
      if(e.success == true){
        this.toast.success(e.message ?? "Evento agregado", "Eventos", {
          timeOut: 3500
        });
      }else{
        this.toast.error(e.message ?? "Error al crear el evento", "Eventos", {
          timeOut: 3500
        });
      }
    })
  }
}
