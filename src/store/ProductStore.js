import { create } from "zustand";
import axios from "axios";
const Base_Url = "https://e-commerce-mydokan.vercel.app";


const ProductStore = create((set) => ({
  BrandList: null,
  BrandListRequest: async () => {
    let res = await axios.get(`${Base_Url}/api/v1/productBrandList`);
    if (res.data["status"] === "success") {
      set({ BrandList: res.data["data"] });
    }
  },

  CategoryList: null,
  CategoryListRequest: async () => {
    let res = await axios.get(`${Base_Url}/api/v1/ProductCategoryList`);
    if (res.data["status"] === "success") {
      set({ CategoryList: res.data["data"] });
    }
  },

  SliderList: null,
  SliderListRequest: async () => {
    let res = await axios.get(`${Base_Url}/api/v1/ProductSliderList`);
    if (res.data["status"] === "success") {
      set({ SliderList: res.data["data"] });
    }
  },

  ListByRemark: null,
  ListByRemarkRequest: async (Remark) => {
    set({ ListByRemark: null });
    let res = await axios.get(`${Base_Url}/api/v1/ProductListByRemark/${Remark}`);
    if (res.data["status"] === "success") {
      set({ ListByRemark: res.data["data"] });
    }
  },

  ListProduct: null,
  ListByBrandRequest: async (BrandID) => {
    set({ ListProduct: null });
    let res = await axios.get(`${Base_Url}/api/v1/ProductListByBrand/${BrandID}`);
    if (res.data["status"] === "success") {
      set({ ListProduct: res.data["data"] });
    }
  },
  ListByCategoryRequest: async (CategoryID) => {
    set({ CategoListProductryListProduct: null });
    let res = await axios.get(`${Base_Url}/api/v1/ProductListByCategory/${CategoryID}`);
    if (res.data["status"] === "success") {
      set({ ListProduct: res.data["data"] });
    }
  },
  ListByKeywordRequest: async (Keyword) => {
    set({ ListProduct: null });
    let res = await axios.get(`${Base_Url}/api/v1/ProductListByKeyword/${Keyword}`);
    if (res.data["status"] === "success") {
      set({ ListProduct: res.data["data"] });
    }
  },
  ListByFilterRequest: async (postBody) => {
    set({ ListProduct: null });
    let res = await axios.post(`${Base_Url}/api/v1/list-by-filter`, postBody);
    if (res.data["status"] === "success") {
      set({ ListProduct: res.data["data"] });
    }
  },

  SearchKeyword: "",
  SetSearchKeyword: async (Keyword) => {
    set({ SearchKeyword: Keyword });
  },

  Details: null,
  DetailsRequest: async (id) => {
    set({ Details: null });
    let res = await axios.get(`${Base_Url}/api/v1/ProductDetails/${id}`);
    if (res.data["status"] === "success") {
      set({ Details: res.data["data"] });
    }
  },

  ReviewList: null,
  ReviewListRequest: async (id) => {
    set({ ReviewList: null });
    let res = await axios.get(`${Base_Url}/api/v1/review-list/${id}`);
    if (res.data["status"] === "success") {
      set({ ReviewList: res.data["data"] });
    }
  },
}));

export default ProductStore;
