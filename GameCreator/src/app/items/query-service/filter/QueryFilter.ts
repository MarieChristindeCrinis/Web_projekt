

export class QueryFilter
{
  public Key: string;
  public Values: string[];

  constructor(key: string, values: string[])
  {
    this.Key = key;
    this.Values = values;
  }

  public GenerateQuery() : string
  {
    return this.Values.map(value => this.Key + '=' + value).join('&');
  }
}
