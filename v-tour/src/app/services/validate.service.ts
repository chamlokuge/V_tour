import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }
  
  validateUserRegister(user){
    if(user.username==undefined||user.password==undefined){
      return false;
    }else{
      return true;
    }
  }
}
