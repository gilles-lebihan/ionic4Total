import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanInfoService {

    name: string;
    application: string[];
    customerBenefit: string;
    useAdvices: string;

  constructor() { }

  SetCanInfo(name: string, application: string[], customerBenefit: string, useAdvices: string ) {
    this.name = name;
    this.application = application;
    this.customerBenefit = customerBenefit;
    this.useAdvices = useAdvices;
  }
  GetCanName() {
    return this.name;
  }
  GetApplication() {
    return this.application;
  }
  GetCustomerBenefit() {
    return this.customerBenefit;
  }
  GetUseAdvices() {
    return this.useAdvices;
  }

}
