import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function validateName(this: any, control: AbstractControl): ValidationErrors | null {
  const validLocationNames: string[] = [ 'test' ];

  if(control.value && !this.validLocationNames.includes(control.value)) {
    return {
      name: {
        validNames: this.validLocationNames,
        actualLocationNames: control.value
      }
    };        
  }
  return null;
}

export function validateNameWithParams(validLocationNames: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value && !validLocationNames.includes(control.value)) {
      return {
        name: {
          validNames: validLocationNames,
          actualLocationNames: control.value
        }
      };
    }

    return null;
  }
}