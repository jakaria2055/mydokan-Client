import { create } from "zustand";
import axios from "axios";
const Base_Url = "https://e-commerce-mydokan.vercel.app";


const FeatureStore = create((set) => ({
  FeatureList: null,
  FeatureListRequest: async () => {
    let res = await axios.get(`${Base_Url}/api/v1/FeaturesList`);
    if (res.data["status"] === "success") {
      set({ FeatureList: res.data["data"] });
    }
  },

  LegalDetailsList: null,
  LegalDetailsListRequest: async (type) => {
    set({LegalDetailsList: null});
    let res = await axios.get(`${Base_Url}/api/v1/LegalDetails/${type}`);
    if (res.data["status"] === "success") {
      set({ LegalDetailsList: res.data["data"] });
    }
  },
}));

export default FeatureStore;
