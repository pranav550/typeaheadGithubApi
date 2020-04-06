import { Component, OnInit } from '@angular/core';
import { MockService } from './../../../SharedModule/services/mock.service'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users:string[];
  selected: string;
  constructor(private service:MockService) { }

  ngOnInit(): void {
    this.userList()
  }

  changeValue(selected){
    console.log(selected)
  }

  userList(){
    this.users=[];
    this.service.getUserService().subscribe(data=>{
      console.log(data)
    //  console.log(data.items)
      data.items.map(result=>{
      //  console.log(result.name)
        this.users.push(result.login.toLowerCase())
      })
    //  console.log(this.users)

      })
      
   
  }

}
