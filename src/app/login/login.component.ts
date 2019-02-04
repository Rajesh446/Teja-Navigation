import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  rquireParams: any

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  login() {
    if (this.model.username === "Rajesh" && this.model.password === "Rajesh") {
      console.log('admin Works');
      this.router.navigate(['/admin']);
    } else if(typeof(this.model.username) === "undefined" || typeof(this.model.password) === "undefined"){
      this.router.navigate(['/login']);
      this.rquireParams = "Please fill the required parameters for login";
      console.log(this.rquireParams);
    }else{
      console.log('student');
      this.router.navigate(['/student']);
    }

  }
}
