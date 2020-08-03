import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import {Messege} from '../models/messege';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Response } from '../models/response';
import { DefaultResponse } from '../models/default-response.mode';
@Injectable({
  providedIn: 'root'
})
export class Service {

  _headers: HttpHeaders;
  constructor() {
    this._headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  get headers() {
    return this._headers;
  }
  filter(response: DefaultResponse, calllback?: any) {
    if ((response.status && response.status.value === '0') || (response.codigo && response.codigo.valor === '0')) {
      if (calllback) {
        return calllback(response.data, response);
      }
      return response.data;
    } else if (response.status && response.status.description) {
      // console.log('description')
      throw new Error(response.status.description);
    } else if (response.codigo && response.codigo.descricao) {
      throw new Error(response.codigo.descricao);
    } else if (response.access_token) {
      return response;
    } else {
      throw new Error(Messege.erro_inesperado);
    }
  }
  handleError(err: any) {
    if (!(err instanceof Error)) {
      return new Error(Messege.erro_inesperado);
    } else {
      return err;
    }
  }
}
