import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cep } from './cep';

@Injectable({
  providedIn: 'root'
})
export class CepService {
    constructor(private http: HttpClient) {}

    getCep(cep: string) {
        cep = cep.replace(/\D/g, '');
        if (cep !== '') {
            const validacep = /^[0-9]{8}$/;
            if (validacep.test(cep)) {
                return this.http.get(`//viacep.com.br/ws/${cep}/json/`).toPromise().then(response => this.convert(response));
            }
        }
    }
    private convert(_data): Cep{
      let data = new Cep();

      data.cep = _data.cep;
      data.logradouro = _data.logradouro;
      data.bairro = _data.bairro;
      data.cidade = _data.localidade;
      data.estado = _data.uf;
      data.complemento = _data.complemento;

      console.log(data);

      return data;
    }
}