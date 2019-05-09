import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".loading>*").fadeIn();
    setTimeout(function() {
        $(".loading>*").fadeOut();
        setTimeout(function() {
            $(".loading").fadeOut();
        },600);
    }, 1600);
  }

}
