import { Component, OnInit, Input } from '@angular/core';
import { Ban } from 'src/app/models/Ban';
import { FaceitService } from 'src/app/services/faceit.service';

@Component({
	selector: 'app-bans-stats',
	templateUrl: './bans-stats.component.html',
	styleUrls: ['./bans-stats.component.scss']
})
export class BansStatsComponent implements OnInit {

	bansAnalized: number = 0;
	page: number = 0;
	step: number = 2000;

	reasonsNames: string[] = [];
	reasonsAmounts: number[] = [];
	reasonsAmountsEnded: number[] = [];

	dateSince: Date = new Date(0);
	dateTo: Date = new Date();
	dateNow: Date = new Date();

	constructor(private faceitService: FaceitService) { }

	ngOnInit(): void {
		this.getNewBans();
	}

	getNewBans(): void {
		this.faceitService.getBans(this.page, this.step).subscribe(bans => {
			this.analyzeBans(bans.payload);
		});
	}

	analyzeBans(bans: Ban[]) {
		this.bansAnalized += bans.length;
		bans.forEach(ban => {

			const startsAt = new Date(ban.starts_at);
			const endsAt = new Date(ban.ends_at);

			if (startsAt.valueOf() > this.dateSince.valueOf()) {
				this.dateSince = startsAt;
			}
			if (endsAt.valueOf() < this.dateTo.valueOf()) {
				this.dateTo = startsAt;
			}


			if (this.reasonsNames.includes(ban.reason)) {
				const index = this.reasonsNames.findIndex(reason => reason == ban.reason);
				this.reasonsAmounts[index]++;

				if (endsAt.valueOf() >= this.dateNow.valueOf()) {
					this.reasonsAmountsEnded[index]++;
				}

			} else {
				this.reasonsNames.push(ban.reason);
				this.reasonsAmounts.push(1);

				if (endsAt.valueOf() >= this.dateNow.valueOf()) {
					this.reasonsAmountsEnded.push(1);
				} else {
					this.reasonsAmountsEnded.push(0);
				}
			}


		});
	}

	analizeNext(): void {
		this.page++;
		this.getNewBans();
	}

}