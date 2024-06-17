import { Component } from '@angular/core';
import { NgbNavConfig, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-mybootstrapcomp',
  templateUrl: './mybootstrapcomp.component.html',
  styleUrls: ['./mybootstrapcomp.component.css'],
})
export class MybootstrapcompComponent {
  constructor(config: NgbNavConfig) {
		// customize default values of navs used by this component tree
		config.destroyOnHide = false;
		config.roles = false;
	}
}
