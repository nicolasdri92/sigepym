import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  public static getValidationErrorMessage(
    validatorName: string,
    validatorValue?: any
  ): any {
    const config = {
      required: `Campo requerido.`,
      email: `Email invalido.`,
      invalidPassword: `Contraseña invalida.`,
      maxlength: `El campo no debe contener mas de ${validatorValue.requiredLength} caracteres.`,
      minlength: `El campo debe contener al menos ${validatorValue.requiredLength} caracteres.`,
    };
    return config[validatorName];
  }
}
