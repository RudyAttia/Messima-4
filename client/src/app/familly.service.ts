import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(public http: HttpClient) { }

  public getfamilly(){
    return this.http.get('http://localhost:3000/familly')
  }

  public gettasks() {

    return this.http.get('http://localhost:3000/all')
  }

  public newtasks(task) {
    console.log("new task add")
    return this.http.post('http://localhost:3000/new', task)
  }

  public deletetask(task){
    console.log("task deleted")
    return this.http.post('http://localhost:3000/delete', task)
  }
}
