import React, { useEffect } from "react";
import FeatureStore from "../store/FeatureStore";
import LegalsContent from "../components/features/LegalsContent";
import Layout from "../components/layout/Layout";

function TermsPage() {
  const { LegalDetailsListRequest } = FeatureStore();
  useEffect(() => {
    (async () => {
      await LegalDetailsListRequest("terms");
    })();
  }, []);
  return (
    <Layout>
      <LegalsContent />
    </Layout>
  );
}

export default TermsPage;
