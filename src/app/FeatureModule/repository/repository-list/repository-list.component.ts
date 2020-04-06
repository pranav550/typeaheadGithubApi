import { MockService } from './../../../SharedModule/services/mock.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css']
})
export class RepositoryListComponent implements OnInit {
  selected: string;
  names:string[];
 


  constructor(private service:MockService) { }

  ngOnInit(): void {
    this.repositoryList()
  }

  repositoryList(){
    this.names=[];
    this.service.getRepositoryService().subscribe(data=>{
      console.log(data)
      data.items.map(result=>{
      // console.log(result.name)
        this.names.push(result.name)
      })
     // console.log(this.names)
    })
      
   
  }

}
