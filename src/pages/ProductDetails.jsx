import React from 'react'
import Layout from '../components/layout/Layout'
import { useParams } from 'react-router-dom'
import Details from '../components/product/Details';
import Brands from '../components/product/Brands';
import ProductStore from '../store/ProductStore';
import { useEffect } from 'react';

function ProductDetails() {
    const {BrandList, DetailsRequest, ReviewListRequest, BrandListRequest} = ProductStore();
    const {id} = useParams();

    useEffect(()=>{
        (async()=>{
            await DetailsRequest(id);
            await ReviewListRequest(id);
            BrandList===null?await BrandListRequest():null
        })()
    },[])
  return (
    <Layout>
        <Details />
        <Brands />
    </Layout>
  )
}

export default ProductDetails