
export interface RegisterResponse {
    success: boolean;
    message: string;
    user?: {
      id: string;
      username: string;
      email: string;
    };
    person?: {
      cui?: string;
      firstname: string;
      secondname?: string;
      surname: string;
      secondsurname?: string;
      phone: string;
    };
  }
  