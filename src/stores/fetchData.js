import { defineStore } from 'pinia';

// eslint-disable-next-line import/prefer-default-export
export const useFetch = defineStore({
  id: 'fetchData',
  state: () => ({
    admin_uid: '',
    loading: '',
    render: false,
    webProblemStatus: false,
  }),
  actions: {
    /// /fetch_工具
    async fetchAPI(method, api, data = {}) {
      const obj = {
        method,
        credentials: 'include',
        headers: { 'Content-Type': 'application/json ; charset=UTF-8' },
      };
      if (method !== 'GET') {
        obj.body = JSON.stringify(data);
      }
      const res = await fetch(`${import.meta.env.VITE_API_URL}${api}?apiKey=dummy_apikey`, obj);
      // const res = await fetch(`${import.meta.env.VITE_API_URL}${api}`, obj);
      if (res.ok) {
        return res.json();
      }
      this.webProblemStatus = true;
      return Promise.reject(new Error(res.status));
    },
    /// /fetch_工具 for formData格式
    async fetchAPI_formData(method, api, data) {
      const obj = {
        method,
        body: data,
      };
      const res = await fetch(`${import.meta.env.VITE_API_URL}${api}?apiKey=dummy_apikey`, obj);
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error(res.status));
    },
  },
});
