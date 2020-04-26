import { Component, OnInit, Input } from '@angular/core';
import { Ban } from 'src/app/models/Ban';

@Component({
	selector: 'app-ban-element',
	templateUrl: './ban-element.component.html',
	styleUrls: ['./ban-element.component.scss']
})
export class BanElementComponent implements OnInit {

	@Input() ban: Ban;

	constructor() { }

	ngOnInit(): void {
	}

}
