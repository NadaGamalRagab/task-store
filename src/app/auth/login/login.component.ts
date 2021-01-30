import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/_model/person';
import { UserData } from 'src/app/_model/userData';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  person: Person = { email: '', password: ''};
  userData: UserData ={name:"",password:''};

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.person);

    this.authService.login(this.person).subscribe(

      (response) => {
        localStorage.setItem('token', response['token']);
        console.log(response);
      },
      (error) => {
        console.log(error);
       },
      () => { },

    )
  }
  login(form) {
    console.log(form.value);
  }
}
