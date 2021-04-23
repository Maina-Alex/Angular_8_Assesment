import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { first } from "rxjs/operators";
import { AuthServiceService} from "../auth-service.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  isValid:false;
  returnUrl: string;
  

  constructor(
    private authService: AuthServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/login']);
  }
  }

  ngOnInit() {
  }
  isLogggedIn(){
    return this.authService.isLogged;
  }

  onSubmit(myform: NgForm) {
    this.authService.login(myform.value.username, myform.value.password);
}

}
