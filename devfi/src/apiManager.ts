// This file is used for the different API requests of Convee.
import axios from "axios";
import { ProjectCreate } from "./Types";

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

export const GetUserInfo = async(userId:string)=>{
  try {
      let response = await axios.get(URL + `/user/info/:id/${userId}`);
  
      return response.data;
    } catch (e) {
      console.log(e);
    }

}

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

export const CreateProject = async(project:ProjectCreate, userId:string)=>{
    try{
        let res = await axios.post(`http://localhost:8080/api/project/${userId}`,project );
        return res;
    }catch(e){
        console.log(e);
    }
}

export const EditProject = async (project:ProjectCreate, projectId:string)=>{
    try{
        let res = await axios.put(`http://localhost:8080/api/project/${projectId}`,project );
        return res;
    }catch(e){
        console.log(e);
    }
}

export const DeleteProject = async(projectId:string)=>{
    try{
        let res = await axios.delete(`http://localhost:8080/api/project/${projectId}`);
        console.log(res);
        return res;
    }catch(e){
        console.log(e);
    }
}