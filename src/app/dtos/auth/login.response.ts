import { BaseResponse } from "../response";

export class LoginResponse extends BaseResponse{
    public token: string = null;
}