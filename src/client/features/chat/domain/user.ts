export class User implements UserData {
  private _id: Id;
  private _name: string = '';

  public constructor(data: UserData) {
    this._id = data.id;
    this._name = data.name;
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }
}

export interface UserData {
  id: Id;
  name: string;
}

export type Id = string;

