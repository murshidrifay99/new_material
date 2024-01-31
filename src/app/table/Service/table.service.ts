import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeriodicData } from '../model/PeriodicData';
import { Observable } from "rxjs";
import { colorentity } from '../model/para';



@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http:HttpClient) { }
  // url: string = "http://localhost:9000";
  Url: string = "http://localhost:4500";
  
  getdata():Observable<PeriodicData[]>{
    return this.http.get<PeriodicData[]>(this.Url+"/NewPeriodicElements");
  }

  saveData(data:any){
    console.log(data)
    return this.http.post(this.Url+"/NewPeriodicElements",data);
  }

  getCode(id:any){
    console.log(id)
    return this.http.get(`${this.Url+"/NewPeriodicElements"}/${id}`);
  }

  deleteData(id:any){
    console.log(id)
    return this.http.delete(`${this.Url+"/NewPeriodicElements"}/${id}`);
  } 
  updateData(id:any,data:any)
  {
    return this.http.put(`${this.Url+"/NewPeriodicElements"}/${id}`,data);
  }
  GetColorList(): colorentity[] {
    return [
      { code: 'c0', name: 'black' },
      { code: 'c1', name: 'Red' },
      { code: 'c2', name: 'Green' },
      { code: 'c3', name: 'Yellow' },
      { code: 'c4', name: 'White' }
    ]
  }
}
