import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function validateName(this: any, control: AbstractControl): ValidationErrors | null {
  const v: string[] = [ 'test' ];

  if(control.value && !this.validNames.includes(control.value)) {
    return {
      name: {
        validNames: this.validNames,
        actualLocationNames: control.value
      }
    };        
  }
  return null;
}

export function validateNameWithParams(validNames: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value && !validNames.includes(control.value)) {
      return {
        name: {
          validNames: validNames,
          actualLocationNames: control.value
        }
      };
    }

    return null;
  }
}