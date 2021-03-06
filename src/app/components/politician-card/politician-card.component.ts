import { Component, Input, OnInit, AfterViewChecked } from '@angular/core';
import { Action } from '../../model/action';
import { ConfigService } from '../../services/config.service';
import { environment } from '../../../environments/environment';
import { TranslateService } from "@ngx-translate/core";
import { Campaign } from '../../model/campaign';


@Component({
    selector: 'politician-card',
    templateUrl: './politician-card.component.html',
    styleUrls: ['./politician-card.component.scss']
})
export class PoliticianCardComponent implements OnInit {

    @Input() action: Action;
    @Input() project: Campaign;
    // @Input() set project(value: Project) {
    //     this._project = value;
    //     if (this._project.name) {
    //         //si la stance nunca se definió en el backend el forEach de abajo nunca llega y queda vacía
    //         this.stance = 'NoConfirmado';
    //         this.stance_postura = 'No confirmado';
    //         this.politician.stances.forEach(stance => {
    //             if (stance.project_id === this._project.id) {
    //                 this.stance = stance.name;
    //                 this.stance_id = stance.id;

    //                 let postura = '';
    //                 switch (stance.name) {
    //                   case 'AFavor':
    //                     postura = 'A favor';
    //                     break;
    //                   case 'EnContra':
    //                     postura = 'En contra';
    //                     break;
    //                   case 'SeAbstiene':
    //                     postura = 'Se abstiene';
    //                     break;
    //                   case 'NoConfirmado':
    //                   case 'SinDefinir':
    //                   default:
    //                     postura = 'No confirmado';
    //                     break;
    //                 }
    //                 this.stance_postura = postura;
    //             }
    //         });
    //     }
    // }

    public imgUrl: string;
    public stance: string;
    public stance_id: Number;
    public randomMessage: string;
    public last: boolean;
    public stance_postura: string;
    public showWhatsappHelp: boolean;

    public constructor(public configService: ConfigService,
        private translate: TranslateService) {
    }

    public ngOnInit(): void {
        this.imgUrl = environment.imgBase + this.action['actions_id']['icon']['id'];
        this.showWhatsappHelp = false;
        this.getRandomMessage();
    }

    public openTwitterWindow(): void {
        // this.tallyUp();
        // const randomTweet = this.getRandomMessage().replace(/@([^a-zA-Z0-9]|$)/g, '@' + this.politician.twitter + '$1');
        window.open(this.action['translations'][0]['call_to_action_url'], '_blank');
        // window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(randomTweet), '_blank');
    }

    public generateRandomMessage(): void {
        // console.log('gewnerate:' ,this.randomMessage)
        // this.randomMessage = this.getRandomMessage().replace(/@([^a-zA-Z0-9]|$)/g, this.politician.first_name + ' ' + this.politician.last_name + '$1');
    }
    public openURL (): void {
        window.open(this.action['translations'][0]['call_to_action_url'], '_blank');
        // console.log("url>", this.action['translations'][0]['call_to_action_url'] )
    }
    public openFacebookWindow(): void {
    //     this.tallyUp();
        window.open(this.action['translations'][0]['call_to_action_url'], '_blank');
     }

    public openInstagramWindow(): void {
        // this.tallyUp();
        window.open(this.action['translations'][0]['call_to_action_url'], '_blank');
    }

    public getRandomMessage()  {
        // let stanceTweets: Array<any>;
        // stanceTweets = this._project.stances.filter(stance => stance.id === this.stance_id);
        // if (!stanceTweets.length)
        //   stanceTweets = this._project.stances.filter(stance => stance.name === 'NoConfirmado');
        // let length = stanceTweets.length;
        // if (length > 0) {
        //     stanceTweets = stanceTweets[0].tweets;
        //     length = stanceTweets.length;
        //     const index = Math.floor(Math.random() * length);
        //     return stanceTweets[index].text;
        // }
        if (this.action['translations'][0]['suggested_text'] ){
            this.randomMessage= this.action['translations'][0]['suggested_text']

        }else {
            this.randomMessage='not suggested text for this action'
        }

        // console.log(this.action['translations'][0]['name'],' : ',this.action['translations'][0]['suggested_text'])
        
    }
    public encode(url:string) : string { 
        return encodeURIComponent(url);
    }
    public tallyUp(): void {
        // this.projectService
        //     .tallyUp(this._project)
        //     .then(ammount => {
        //         this._project.tally = ammount;
        //     });
    }

    public toggleWhatsappHelp() : void { 
        this.showWhatsappHelp = !this.showWhatsappHelp;
    }
    

}
