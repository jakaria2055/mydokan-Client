import axios from "axios";
import { create } from "zustand";
import { unauthorized } from "../utility/utility";
const Base_Url = "https://e-commerce-mydokan.vercel.app";

const CartStore = create((set) => ({
  isCartSubmit: false,
  CartForm: { productID: "", color: "", size: "" },
  CartFromChange: (name, value) => {
    set((state) => ({
      CartForm: {
        ...state.CartForm,
        [name]: value,
      },
    }));
  },

  CartSaveRequest: async (PostBody, productID, quantity) => {
    try {
      set({ isCartSubmit: true });
      PostBody.productID = productID;
      PostBody.qty = quantity;
      let res = await axios.post(`${Base_Url}/api/v1/SaveCartList`, PostBody);
      return res.data["status"] === "success";
    } catch (e) {
      unauthorized(e.response.status);
    } finally {
      set({ isCartSubmit: false });
    }
  },

  CartList: null,
  CartCount: 0,
  CartTotal: 0,
  CartVatTotal: 0,
  CartPaybleTotal: 0,
  CartListRequest: async () => {
    try {
      let res = await axios.get(`${Base_Url}/api/v1/CartList`);
      set({ CartList: res.data["data"] });
      set({ CartCount: res.data["data"].length });
      let total = 0;
      let vat = 0;
      let payble = 0;
      res.data["data"].forEach((item, i) => {
        if (item["product"]["discount"] === true) {
          total =
            total +
            parseInt(item["qty"]) * parseInt(item["product"]["discountPrice"]);
        } else {
          total =
            total + parseInt(item["qty"]) * parseInt(item["product"]["price"]);
        }
      });

      vat = total * 0.05;
      payble = vat + total;
      set({ CartTotal: total });
      set({ CartVatTotal: vat });
      set({ CartPaybleTotal: payble });
    } catch (e) {
      unauthorized(e.response.status);
    }
  },

  RemoveCartListRequest: async (cartID) => {
    try {
      set({ CartList: null });
      await axios.post(`${Base_Url}/api/v1/RemoveCartList`, { _id: cartID });
    } catch (e) {
      unauthorized(e.response.status);
    }
  },

  CreateInvoiceRequest: async () => {
    try {
      // Don't set isCartSubmit here to avoid re-render before redirect
      let res = await axios.get(`${Base_Url}/api/v1/CreateInvoice`);

      // Redirect immediately without touching store state
      if (
        res.data["status"] === "success" &&
        res.data["data"]["GatewayPageURL"]
      ) {
        // Fastest: direct redirect
        window.location.assign(res.data["data"]["GatewayPageURL"]);

        // Or, open in new tab to avoid any UI change
        // window.open(res.data["data"]["GatewayPageURL"], "_blank");
      } else {
        alert("Unable to redirect to payment gateway.");
      }
    } catch (e) {
      unauthorized(e.response?.status);
    }
  },

  InvoiceList: null,
  InvoiceListRequest: async () => {
    try {
      let res = await axios.get(`${Base_Url}/api/v1/InvoiceList`);
      set({ InvoiceList: res.data["data"] });
    } catch (e) {
      unauthorized(e.response.status);
    }
  },

  InvoiceDetails: null,
  InvoiceDetailsRequest: async (id) => {
    try {
      let res = await axios.get(`${Base_Url}/api/v1/InvoiceProductList/${id}`);
      set({ InvoiceDetails: res.data["data"] });
    } catch (e) {
      unauthorized(e.response.status);
    }
  },
}));

export default CartStore;
