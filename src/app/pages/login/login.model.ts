export class Login {
  usuario: string;
  codUsuario: number;
  access_token: string;
  urlWebService: string;

  username: string;
  password: string;
  errorMessage: string;

  constructor() {
      this.codUsuario = 0;
      this.username = '';
      this.password = '';
      this.errorMessage = '';
  }
}
