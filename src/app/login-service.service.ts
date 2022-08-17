import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler} from '@angular/common/http';

import { MessageService } from './message.service';
export class LoginServiceService {


  
  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
    
  ) { }
  
  // constructor(
    
  // ) { 
  // }
}
