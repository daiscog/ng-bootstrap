import { Component } from '@angular/core';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'ngbd-progressbar-height',
	imports: [NgbProgressbarModule],
	templateUrl: './progressbar-height.html',
})
export class NgbdProgressbarHeight {
	height = '20px';
}
