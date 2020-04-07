import { Component, OnInit } from '@angular/core';
import { MockService } from './../../../SharedModule/services/mock.service'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: string[];
  selected: string;
  selectedValue: string;
  apiUrl = "users?q=";
  constructor(private service: MockService) { }

  ngOnInit(): void {
    
   
    
  }

  changeValue(selected) {
    console.log(selected)
    this.selectedValue = selected
    this.userList()
  }

  userList() {
    this.users = [];
    this.service.getUserService(this.apiUrl,this.selectedValue).subscribe(data => {
      console.log(this.selectedValue)
      data.items.map(result => {
        this.users.push(result.login)
      })

    })
  }

}
