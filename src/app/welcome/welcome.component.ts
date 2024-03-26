/**
 * Modify this file to fetch and display the login details
 */
import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"]
})
export class WelcomeComponent implements OnInit {
  user: any
  constructor( private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.authenticationService.getUserData().subscribe((userData: any) => {
       this.user = userData.data
      console.log(userData);
    })
  }

  ngOnDestroy() {}
}
