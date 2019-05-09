import { Component, OnInit } from '@angular/core';
import { InfosService } from '../infos.service';
import { Cep } from '../cep';
import { Data } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  address: Cep;
  data: Data;

  constructor(private infos: InfosService) {}

  ngOnInit() {
    this.infos.currentAddress.subscribe( address => this.address = address );
    this.infos.currentData.subscribe( data => this.data = data );
  }

}
