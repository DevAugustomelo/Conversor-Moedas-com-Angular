import { Component, Input } from "@angular/core";







@Component({
    selector: 'app-moeda',
    templateUrl: 'moeda.component.html'
})

export class MoedaComponent {
    
    @Input() code = ''
    @Input() description = ''
}