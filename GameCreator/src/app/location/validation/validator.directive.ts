import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: 'input[location]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ValidatorDirective,
    multi: true
  }]
})
export class ValidatorDirective implements Validator {
  @Input('location') validNames: string[] = [ 'test' ];

  validate(control: AbstractControl): ValidationErrors | null {
     
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
  constructor() { }

}

// export function validateName(this: any, control: AbstractControl): ValidationErrors | null {
//   const validLocationNames: string[] = [ 'test' ];

//   if(control.value && !this.validLocationNames.includes(control.value)) {
//     return {
//       name: {
//         validNames: this.validLocationNames,
//         actualLocationNames: control.value
//       }
//     };        
//   }
//   return null;
// }
