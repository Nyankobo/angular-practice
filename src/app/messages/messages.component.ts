import { Component, OnInit } from '@angular/core'; 
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) {
// PUBLIC b/c will be bound to template. Only bind PUBLIC component properties.

  }
  
  ngOnInit() {
  }

}
