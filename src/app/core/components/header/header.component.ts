import { Component, OnInit } from '@angular/core';
import { HeaderConstants } from '../../constants/header.constants';

@Component({
  selector: 'sc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logoImgSrc = HeaderConstants.logoImgPath;
  logoHeading = HeaderConstants.logoHeading;
  loginBtn = HeaderConstants.loginBtn

  constructor() { }

  ngOnInit(): void {
  }

}
