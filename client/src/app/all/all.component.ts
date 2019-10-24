import { Component, OnInit} from '@angular/core';
import { TasksService } from '../familly.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  public myTasks

  constructor(public taskService: TasksService) { }
  ngOnInit() {

    this.taskService.gettasks().subscribe(
      res => {
        console.log(res)
        this.myTasks = res
      },
      err => console.log(err)
    )
  }

  public deleteTask(event){
    //console.log(event.target.id);
    this.taskService.deletetask({id_task:event.target.id}).subscribe(
      res=>{console.log(res)
        event.target.parentElement.parentElement.removeChild(event.target.parentElement)
      },
      err=>console.log(err)
    )
  }

}
