import { Injectable } from '@angular/core';
import { Cep } from './cep';
import { Data } from './data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfosService {
  public address = new Cep();
  public data = new Data();

  public addressSource = new BehaviorSubject(this.address);
  currentAddress = this.addressSource.asObservable();

  public dataSource = new BehaviorSubject(this.data);
  currentData = this.dataSource.asObservable();

  constructor() {}

  changeAdress(address: Cep){
    this.addressSource.next(address);
    console.log(address);
  }
  changeData(data: Data){
    this.dataSource.next(data);
    console.log(data);
  }
}
