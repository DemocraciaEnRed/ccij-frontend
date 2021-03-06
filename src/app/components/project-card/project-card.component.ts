import { Component, Input, OnInit } from '@angular/core';
import { Campaign } from '../../model/campaign';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'project-card',
    templateUrl: 'project-card.component.html',
    styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

    @Input() project: Campaign;
    public backgroundImage: string;
    public projectTitle: SafeHtml;
    public projectDescription: SafeHtml;
    //agregados por nosotres
    public bgColor: string;
    public causa: string;
    public centerImg: Boolean;

    public constructor(public sanitizer: DomSanitizer) {
        
    }

    public sanitizeStyle(style): any {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    }

    public sanitizeHtml(html): any {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }

    public ngOnInit(): void {
        const backgroundAux = 'url(' +
            environment.imgBase + this.project['image_cover'].id + ')';
        this.backgroundImage = this.sanitizeStyle(backgroundAux);
        //this.projectDescription = this.sanitizeHtml(this.project.short_text);

        // evaluar el idioma aca y encerrar en un if segun corresponda
        this.projectTitle = this.project.name;
        this.projectDescription = this.project['translations'][0].short_description;

        let notCausas = ['debate-presidencial', 'derechos-en-juego', 'acuerdo-social-anticorrupcion'];
        this.centerImg = notCausas.indexOf(this.project.name) != -1;

        let bgCol='';
        let causa='';
        //this.project.slug es la url interna
        // switch(this.project.name.toLowerCase()){
        //   case 'genero':
        //   bgCol = 'rgb(119, 73, 151)';
        //   causa = 'Género';
        //   break;
        //   case 'ambiente':
        //   bgCol = '#2fac66';
        //   causa = 'Ambiente';
        //   break;
        //   case 'trabajo':
        //   bgCol = '#e71869';
        //   causa = 'Trabajo';
        //   break;
        //   case 'transparencia':
        //   bgCol = '#e61937';
        //   causa = 'Transparencia';
        //   break;
        //   case 'vivienda':
        //   bgCol = '#194a9a';
        //   causa = 'Vivienda';
        //   break;
        //   case 'drogas':
        //   bgCol = '#f9b112';
        //   causa = 'Drogas';
        //   break;
        // }
        this.bgColor = bgCol;
        this.causa = causa;
    }

}
