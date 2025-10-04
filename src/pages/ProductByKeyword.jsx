import { useParams } from "react-router-dom";
import ProductStore from "../store/ProductStore";
import { useEffect } from "react";
import Layout from "../components/layout/Layout";
import ProductList from "../components/product/ProductList";


function ProductByBrand() {
  const { ListByKeywordRequest } = ProductStore();
  const { keyword } = useParams();

  useEffect(() => {
    (async () => {
      await ListByKeywordRequest(keyword);
    })();
  },[keyword]);
  
  return (
    <Layout>
      <ProductList />
    </Layout>
  );
}




export default ProductByBrand;
