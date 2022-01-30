import {AbstractControl, ValidationErrors} from '@angular/forms';

export function validateClass(c: AbstractControl): ValidationErrors | null {
    if(c.value.match('[0-9]')) {
        return {
            class: {
                invalidValue: c.value
            }
        };
    }
    return null;
}