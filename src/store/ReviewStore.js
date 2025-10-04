import axios from "axios";
import { create } from "zustand";
import { unauthorized } from "../utility/utility";
const Base_Url = "https://e-commerce-mydokan.vercel.app";


const ReviewStore = create((set) => ({
  isReviewSubmit: false,
  ReviewFormData: { des: "", rating: "5", productID: "" },
  ReviewFormOnChange: (name, value) => {
    set((state) => ({
      ReviewFormData: {
        ...state.ReviewFormData,
        [name]: value,
      },
    }));
  },

  ReviewSaveRequest: async (PostBody) => {
    try {
      set({ isReviewSubmit: true });
      let res = await axios.post(`${Base_Url}/api/v1/create-review`, PostBody);
      return res.data["status"] === "success";
    } catch (e) {
      unauthorized(e.response.status);
    } finally {
      set({ isReviewSubmit: false });
    }
  },
}));

export default ReviewStore;
