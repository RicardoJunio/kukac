import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn} from '@angular/forms';
import { Data } from '../data';
import { CepService } from '../cep.service';
import * as $ from 'jquery';
import { InfosService } from '../infos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  data: Data;

  checked = false;
  invalidCep = false;
  cepMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
  
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private search: CepService, private infos: InfosService) {
    this.data = new Data();
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [this.data.name, Validators.minLength(3)]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.pattern('[0-9]{5}-[0-9]{3}')]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: [this.data.rm, Validators.minLength(3)]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: [this.data.nd, Validators.minLength(1)]
    });
  }
  unnamed(e){
    if(e.checked){
      this.firstFormGroup.controls['firstCtrl'].setValue('Anônimo');
    }else{
      this.firstFormGroup.controls['firstCtrl'].setValue('');
    }
  }
  cepTest(){
    this.search.getCep(this.data.cep).then(data =>{
      if(data.cep == null){
        this.invalidCep = true;
      }else{
        this.invalidCep = false;
        this.data.setRendaPerCapita();
        this.infos.changeData(this.data);
        this.infos.changeAdress(data);
        $(".loading").fadeIn();
        setTimeout(function() {
          $(".loading>*").fadeIn();
          setTimeout(function() {
              $(".loading>*").fadeOut();
              $(".form").hide();
              $(".result").show();
              setTimeout(function() {
                  $(".loading").fadeOut();
              },600);
          }, 1600);
        }, 600);
      }
    });
  }
}
