import axios from 'axios';

const appID = 'h9yx44CaRfzRwAuhZ8TXQL8k';
const appSecret = 'PRDWaz6y5uxQCJrCR1uLjx7u';

const axiosInstance = axios.create({
  baseURL: 'https://gp-server.hunger-valley.com/',
  headers: {
    't-app-id': appID,
    't-app-secret': appSecret
  }
});

// 添加请求拦截器
axiosInstance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const xToken = localStorage.getItem('x-token');
  if (xToken) {
    config.headers['Authorization'] = `Bearer ${xToken}`;
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  console.log(error);
  return Promise.reject(error);
});

// 添加响应拦截器
axiosInstance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if(response.headers['x-token']){
    localStorage.setItem('x-token', response.headers['x-token'])
  }
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default axiosInstance;