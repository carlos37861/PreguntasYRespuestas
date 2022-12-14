import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario} from '../../../../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading=false;
  login:FormGroup;

  constructor(private fb:FormBuilder,private toastr: ToastrService,private router:Router) { 
    this.login=this.fb.group({
      usuario:['',Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  log():void{
    const usuario: Usuario={
      nombreUsuario:this.login.value.usuario,
      password:this.login.value.password
    }
    this.loading=true;
    setTimeout(()=>{
      if(usuario.nombreUsuario==="cperez" && usuario.password==="carlos310521"){
        this.login.reset();
        this.router.navigate(['/dashboard']);
      }else{
        this.toastr.error('Usuario o contraseña invalida','error');
        this.login.reset();
      }
      this.loading=false;
    },1000);

    
  }
}
