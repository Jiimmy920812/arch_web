import { defineStore } from 'pinia';

export const usePageData = defineStore({
  id: 'pageData',
  state: () => ({
    scorllUse: false,
  }),
  actions: {
    toTop(){
      window.scrollTo(0, 0);
      this.scorllUse = false
    },
    toTopSmooth(){
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      this.scorllUse = false
    }
  },
});
