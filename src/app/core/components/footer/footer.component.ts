import { Component, OnInit } from '@angular/core';
import { FooterConstants } from '../../constants/footer.constants';

@Component({
  selector: 'sc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  copyRightHeading = FooterConstants.copyRightHeading;
  copyRightName = FooterConstants.copyRightName;

  constructor() { }

  ngOnInit(): void {
  }

}
