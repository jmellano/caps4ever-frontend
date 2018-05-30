import {Component, OnInit} from '@angular/core';
import {Donation} from './donation';
import {ClanService} from '../clan.service';
import {ClanInformation} from '../clanInformation';
import {ClanWarLogs} from '../clanWarLogs';

@Component({
  selector: 'app-donation-ranking',
  templateUrl: './donation-ranking.component.html',
  styleUrls: ['./donation-ranking.component.css']
})
export class DonationRankingComponent implements OnInit {

  ci: ClanInformation;

  cwl: ClanWarLogs;


  constructor(private clanService: ClanService) {
  }

  ngOnInit() {
    this.getClanInformations();
  }

  getClanInformations(): void {
    this.clanService.getClanInformations()
      .subscribe(clanInformation => this.ci =
        new ClanInformation(clanInformation.description,
          clanInformation.name,
          clanInformation.badge.image,
          clanInformation.members));

    this.clanService.getClanWarLogs()
      .subscribe(clanWarLogs => this.cwl =
        new ClanWarLogs(clanWarLogs.war_ranking));
  }

}
