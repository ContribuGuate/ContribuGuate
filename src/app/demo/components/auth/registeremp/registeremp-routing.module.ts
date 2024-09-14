import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterempComponent  } from './registeremp.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: RegisterempComponent  }
    ])],
    exports: [RouterModule]
})
export class RegisterempRoutingModule { }
