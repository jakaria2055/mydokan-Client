import { useEffect } from "react";
import Layout from "../components/layout/Layout";
import Brands from "../components/product/Brands";
import FeatureStore from "../store/FeatureStore";
import ProductStore from "../store/ProductStore";
import Slider from "../components/product/Slider";
import Features from "../components/features/Features";
import Categories from "../components/product/Categories";
import Products from "../components/product/Products";

const Home = () => {
  const {
    BrandListRequest,
    CategoryListRequest,
    SliderListRequest,
    ListByRemarkRequest,
  } = ProductStore();
  const { FeatureListRequest } = FeatureStore();

  useEffect(() => {
    (async () => {
      await SliderListRequest();
      await FeatureListRequest();
      await CategoryListRequest();
      await ListByRemarkRequest("new");
      await BrandListRequest();
    })();
  }, [SliderListRequest,FeatureListRequest,CategoryListRequest,ListByRemarkRequest,BrandListRequest]);

  return (
    <Layout>
      <Slider />
      <Products />
      <Categories />
      <Brands />
      <Features />
    </Layout>
  );
};

export default Home;
