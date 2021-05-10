// This file is used for the different API requests of Convee.
import axios from "axios";
import { LoginResponse } from "./Types";

let URL: string;

URL = "http://localhost:8080/api/";


export const GetProjects = async () => {
  try {
    let response = await axios.get(URL + `projects`);

    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const GetProjectsByUserId = async (userId:string) =>{
    try {
        console.log(userId)
        let response = await axios.get(URL + `projects/${userId}`);
    
        return response.data;
      } catch (e) {
        console.log(e);
      }
};

export const LoginUser = async(email:string, password:string)=>{
    try{
        let res = await axios
        .post("http://localhost:8080/api/user/login", {
        email,
        password,
        });
        return res;
    }catch(e){
        console.log(e);
    }
}

export const GetProjectById = async(projectId:string)=>{
    try {
        let response = await axios.get(URL + `project/${projectId}`);
    
        return response.data;
      } catch (e) {
        console.log(e);
      }
  
}



//Bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk0NjZkOGVhMWE1OTQ1NTI1ODgwYTkiLCJlbWFpbCI6ImVkaXRAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkRTE1bE04TXhuck1XaUlXeUczcTQvLnlxSlI5b2E5OXlvSnBqT0R5Z3NLWlVBUVozbVhhbjYiLCJfX3YiOjAsImlhdCI6MTYyMDYwNjMwMCwiZXhwIjoxNjIwNjE3MTAwfQ.flZecXFnAHCqsLcYMS6ARCIyBpREEHVr8DH4cTMYCDU
export const GetUser = async(token:string)=>{
    try{
        let res = await axios.get("http://localhost:8080/api/user/me", {
            headers: {
              'Authorization': `Bearer: ${token}`
            }
          });
        return res;
    }catch(e){
        console.log(e);
    }
}