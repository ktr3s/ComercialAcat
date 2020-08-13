import { Component, OnInit } from '@angular/core';
import { AdminService} from 'src/app/service/admin.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import {AuthServiceService} from 'src/app/auth-service.service';
import { Admin } from 'src/app/models/admin';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  nombreusuario: string ='';
  claveusuario: string ='';
  //formGroup: FormGroup;
 

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
   
  }


  loginProces(){
    
    const admin =new Admin(this.nombreusuario,this.claveusuario);
    
      this.authService.login(admin).subscribe(result=>{
        if(result.succcess){
          console.log(result);
          alert(result.message);
        }else{
          console.log(result);
          alert(result.message);
        }
      })
    
  }

}
