import { Component, OnInit } from '@angular/core';
import { FaceitService } from 'src/app/services/faceit.service';
import { Ban } from 'src/app/models/Ban';

@Component({
	selector: 'app-bans-list',
	templateUrl: './bans-list.component.html',
	styleUrls: ['./bans-list.component.scss']
})
export class BansListComponent implements OnInit {

	bansList: Ban[];

	constructor(private faceitService: FaceitService) { }

	ngOnInit(): void {
		this.faceitService.getBans(1, 100).subscribe(bans => this.bansList = bans.payload);
	}

}
