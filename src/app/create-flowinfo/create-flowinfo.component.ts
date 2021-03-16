import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FlowinfoService, FlowInfo,ConditionInfo } from "./../flowinfo.service";

@Component({
  selector: 'app-create-flowinfo',
  templateUrl: './create-flowinfo.component.html',
  styleUrls: ['./create-flowinfo.component.css']
})


export class CreateFlowinfoComponent implements OnInit {
  successed = false;
  RuleConditions: Observable<ConditionInfo[]>;
  flowInfo: FlowInfo = new FlowInfo();
  constructor(private flowInfoService: FlowinfoService) { }

  ngOnInit() {
    this.RuleConditions = this.flowInfoService.getConditionsList();
    console.log(this.RuleConditions.toPromise());
  }

  save() {
    this.flowInfoService.createFlow(this.flowInfo)
      .subscribe(data => console.log(data), error => console.log(error));
    //this.employee = new Employee();
  }

  onSubmit() {
    this.successed = true;
    this.save();
  }

  selectChangeHandler (event: any) {
    //update the ui
    this.flowInfo.conditionId = event.target.value;
    this.flowInfo.actionId = 1;
  }

}
