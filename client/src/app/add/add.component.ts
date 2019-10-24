import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TasksService } from '../familly.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public familly
  public newTask
  constructor(public bs:TasksService, public fb:FormBuilder, public taskService: TasksService) { }

  ngOnInit() {

    this.taskService.getfamilly().subscribe(
      res => {
        console.log(res)
        this.familly = res
      },
      err => console.log(err)
    )

    this.newTask = this.fb.group({
      texttask:["", Validators.required],
      author:["", Validators.required],
    })
    console.log(this.newTask)
  }
public addTask(){
  console.log(this.newTask.value)
  this.bs.newtasks(this.newTask.value).subscribe(
    res=>{console.log(res)},
    err=>console.log(err)
  )
}

// public re(e){
// console.log(e.value)
// this.imgwidth = e.value
//}
}

