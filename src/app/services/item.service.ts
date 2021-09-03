import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Item} from '../models/Item';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private url = 'http://localhost:3000/items/';
  private httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  constructor(private http:HttpClient) { }

  getItems():Observable<Item[]>{
    return this.http.get<Item[]>(this.url);
  }

  toggleCompleted(item:Item):Observable<any>{
    return this.http.put(this.url + item.id,item, this.httpOptions);
  }

  deleteItem(item:Item):Observable<Item>{
    return this.http.delete<Item>(this.url + item.id);
  }

  addItem(item:Item):Observable<Item>{
    return this.http.post<Item>(this.url, item, this.httpOptions);
  }

  
}
