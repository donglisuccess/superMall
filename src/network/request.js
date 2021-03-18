import axios from "axios";

export function request(config){
  const instance1 = axios.create({
    baseURL:"http://123.207.32.32:8000",
    timeout:5000,
  });
  return instance1(config);
}