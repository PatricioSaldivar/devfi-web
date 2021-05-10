import { AxiosResponse } from "axios";
import { Dispatch, SetStateAction } from "react";

export interface LoginResponse {
    isValid:boolean;
    accessToken: string;
    refreshToken: string;
 };

export interface Project{
    _id:string;
    name:string;
    description: string;
    github?:string;
    colab:number;
    tags:string[];
    user:string;
};

export interface ProjectCreate{
    name:string;
    description: string;
    github?:string;
    colab:number;
    tags:string[];
};


export interface User{
    _id:string;
    email:string;
    fullName?: string;
}

export type UserContextState = {
    user: User;
    isAuthenticated:boolean;
    accessToken: string;
    refreshToken:string;
    LogIn?: (email:string,password:string) =>Promise<LoginResponse>;
    LogOut:()=>void;
}

