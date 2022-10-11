import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  register:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.register=fb.group({});
  }

  ngOnInit(): void {
  }

}
