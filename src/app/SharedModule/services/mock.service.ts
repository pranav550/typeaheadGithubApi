import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import {catchError} from "rxjs/operators";
import {Constant} from "../../Utils/constant";
@Injectable({
  providedIn: 'root'
})
export class MockService {
  
 
  constructor(private http:HttpClient) { }
  

  getRepositoryService(apiurl: string,data: string):Observable<any>{
     return this.http.get<any>(Constant.url+ apiurl+ data)
     .pipe(catchError(this.handleError))
  }

  getUserService(apiurl: string,data: string):Observable<any>{
    return this.http.get<any>(Constant.url+ apiurl + data)
    .pipe(catchError(this.handleError))
 }

  handleError(error){
    return throwError(error.message)
  }
}
