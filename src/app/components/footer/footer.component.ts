import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CampaignsService } from "../../services/campaigns.service";
import { Campaign } from '../../model/campaign';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    newsletterMessage : String
    public formGroup: FormGroup;
    submitted : boolean = false
    projectList: Array<Campaign>;
    constructor(public fb: FormBuilder, public campaignsService: CampaignsService){  
      this.formGroup = fb.group({
        email: ['', Validators.compose([Validators.email, Validators.required])],
        project: ['']
      });

      this.campaignsService
      .getAll()
      .then(response => {
          let rProjectList = []
          for (let camp in response) {
              rProjectList.push(response[camp])
          }
          this.projectList = rProjectList;
        
      });


    }
    public submitNewsletter() {
        this.newsletterMessage = '';
        if(this.formGroup.valid) {
          window.open('https://gmail.us10.list-manage.com/subscribe/post?u=34c72ae7cd29d3ec62b506511&amp;id=3e5cb2fca9&MERGE0='+this.formGroup.value.email);
          this.newsletterMessage = '¡Perfecto! Siga las instrucciones de la página de subscripción';
          this.submitted = true;
          /*
          this.httpService
            .post('api/v1/subscribe', JSON.stringify(this.formGroup.value))
            .then(response => {
              this.newsletterMessage = response;
              this.submitted = true;
            });*/
        } else {
          this.newsletterMessage = 'Ingrese un email válido';
        }
    }
  
}