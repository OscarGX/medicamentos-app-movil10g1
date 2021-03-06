export interface IUsernameExists {
  usernameExists: boolean;
}

export interface ICorreoExists {
  correoExists: boolean;
}

// Generated by https://quicktype.io

export interface IUserRegistroRequest {
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  telefono: string;
  perfil: IPerfil;
}

export interface IPerfil {
  correoElectronico: string;
  username: string;
  contrasena: string;
}

