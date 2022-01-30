

export class SelectorItemViewModel<T>
{
  public Value: T;

  public FormattedValue: string;


  constructor(value: T, formattedValue: string)
  {
    this.Value = value;
    this.FormattedValue = formattedValue;
  }
}
