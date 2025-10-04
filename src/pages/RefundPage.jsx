import React, { useEffect } from "react";
import FeatureStore from "../store/FeatureStore";
import LegalsContent from "../components/features/LegalsContent";
import Layout from "../components/layout/Layout";

function RefundPage() {
  const { LegalDetailsListRequest } = FeatureStore();
  useEffect(() => {
    (async () => {
      await LegalDetailsListRequest("refund");
    })();
  }, []);
  return (
    <Layout>
      <LegalsContent />
    </Layout>
  );
}

export default RefundPage;
