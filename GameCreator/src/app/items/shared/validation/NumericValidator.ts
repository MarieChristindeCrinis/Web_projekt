import { AbstractControl, ValidationErrors } from "@angular/forms";


export const NumericValidations =
{
  IsNumeric(control: AbstractControl): ValidationErrors | null
  {
      const result = parseFloat(control.value);
      if(control.value && Number.isNaN(result))
      {
        return {
          IsNumeric: {
            expected: 'numeric value',
            actualInput: control.value}};
      }
      return null;
  },

  IsPositive(control: AbstractControl): ValidationErrors | null
  {
      const result = parseFloat(control.value);
      if(control.value && result < 0)
      {
        return {
          IsPositive: {
            expected: 'numeric value greater or equal 0',
            actualInput: control.value}};
      }
      return null;
  }
}
