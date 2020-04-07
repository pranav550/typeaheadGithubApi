import { Mock } from './../../../SharedModule/models/mock';
import { MockService } from './../../../SharedModule/services/mock.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css']
})
export class RepositoryListComponent implements OnInit {
  selected: string;
  names: string[];
  selectedValue: string;
  apiUrl = "repositories?q=";

  constructor(private service: MockService) { }

  ngOnInit(): void {
    
  }

  changeValue(selected) {
    console.log(selected)
    this.selectedValue = selected
    this.repositoryList()
  }

  repositoryList() {
    this.names = [];
    this.service.getRepositoryService(this.apiUrl,this.selectedValue).subscribe((data:Mock) => {
      console.log(data.items)

      data.items.map((result: Mock) => {

        this.names.push(result.name)
      })

    })
  }

}
