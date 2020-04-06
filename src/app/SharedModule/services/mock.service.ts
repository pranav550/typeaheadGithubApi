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

  getRepositoryService():Observable<any>{
     return this.http.get<any>(Constant.url)
     .pipe(catchError(this.handleError))
  }

  getUserService():Observable<any>{
    return this.http.get<any>(Constant.userUrl)
    .pipe(catchError(this.handleError))
 }

  handleError(error){
    return throwError(error.message)
  }
}
