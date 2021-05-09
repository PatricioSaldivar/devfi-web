// This file is used for the different API requests of Convee.
import axios from "axios";

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
