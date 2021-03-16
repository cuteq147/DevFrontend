import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { FlowinfoService, FlowInfo } from "./../flowinfo.service";


@Component({
  selector: 'app-flowinfo-list',
  templateUrl: './flowinfo-list.component.html',
  styleUrls: ['./flowinfo-list.component.css']
})
export class FlowinfoListComponent implements OnInit {

  FlowInfos: Observable<FlowInfo[]>;
  constructor(private flowInfoService: FlowinfoService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.FlowInfos = this.flowInfoService.getFlowsList();
  }

  deleteFlowInfo(id: number) {
    this.flowInfoService.deleteFlow(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}
