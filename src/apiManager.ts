// This file is used for the different API requests of Convee.
import axios from "axios";
import { Profile, ProfileCreate, ProjectCreate, User } from "./Types";

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
        .post(URL + `user/login`, {
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
      let response = await axios.get(URL + `user/info/${userId}`);
      return response.data;
    } catch (e) {
      console.log(e);
    }

}

export const GetUser = async(token:string)=>{
    try{
        let res = await axios.get(URL + `user/me`, {
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
        let res = await axios.post(URL + `project/${userId}`,project );
        return res;
    }catch(e){
        console.log(e);
    }
}

export const EditProject = async (project:ProjectCreate, projectId:string)=>{
    try{
        let res = await axios.put(URL + `project/${projectId}`,project );
        return res;
    }catch(e){
        console.log(e);
    }
}

export const DeleteProject = async(projectId:string)=>{
    try{
        let res = await axios.delete(URL + `project/${projectId}`);
        console.log(res);
        return res;
    }catch(e){
        console.log(e);
    }
}

export const UpdateUserInfo = async(user: Profile, userId:string)=>{
  try{
    let res = await axios.put(URL + `user/${userId}`,user );
    return res;
  }catch(e){
      console.log(e);
  }
}