import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-recipient',
  templateUrl: './new-recipient.component.html',
  styleUrls: ['./new-recipient.component.css']
})
export class NewRecipientComponent implements OnInit {

  public connect: Boolean = false;
  public phoneNumberEntered: Boolean = false;
  public otpVerified: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onConnect() {
    this.connect = true;
  }
  getOtp() {
    this.phoneNumberEntered = true;
  }
  verifyOtp() {
    this.otpVerified = true;
  }


}
