import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ValidationService } from '../../services/validation/validation.service';

@Component({
  selector: 'app-control-messages',
  templateUrl: './control-messages.component.html',
  styleUrls: ['./control-messages.component.scss'],
})
export class ControlMessagesComponent {
  @Input()
  public control: FormControl;

  get errorMessage(): boolean {
    for (const propertyName in this.control.errors) {
      if (
        this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched
      ) {
        return ValidationService.getValidationErrorMessage(
          propertyName,
          this.control.errors[propertyName]
        );
      }
    }

    return undefined;
  }
}
