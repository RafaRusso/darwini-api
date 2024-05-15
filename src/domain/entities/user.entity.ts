import { randomUUID } from 'crypto';

export interface UserProps {
  login: string;
  name: string;
  cpf: string;
  email: string;
}

export class User<Props> {
  protected id: string;
  protected props: Props & UserProps;

  constructor(props: Props & UserProps, id?: string) {
    this.id = id ?? randomUUID();
    this.props = props;
  }
  public getId() {
    return this.id;
  }
  public get login() {
    return this.props.login;
  }
  public get name() {
    return this.props.name;
  }
  public get cpf() {
    return this.props.cpf;
  }
  public get email() {
    return this.props.email;
  }
}
