import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ClanInformation} from './clanInformation';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ClanWarLogs} from './clanWarLogs';


@Injectable({
  providedIn: 'root'
})
export class ClanService {
  private clanInformationUrl = 'http://localhost:4200/clan';  // URL to web api
  private clanWarLogsUrl = 'http://localhost:4200/stats';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getClanInformations(): Observable<ClanInformation> {
    const clanInfos =  this.http.get<ClanInformation>(this.clanInformationUrl);
    return clanInfos;
  }

  getClanWarLogs(): Observable<ClanWarLogs> {
    const clanWarLogs =  this.http.get<ClanWarLogs>(this.clanWarLogsUrl);
    return clanWarLogs;
  }

}
