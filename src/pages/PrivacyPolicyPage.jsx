import React, { useEffect } from "react";
import FeatureStore from "../store/FeatureStore";
import LegalsContent from "../components/features/LegalsContent";
import Layout from "../components/layout/Layout";

function PrivacyPolicyPage() {
  const { LegalDetailsListRequest } = FeatureStore();
  useEffect(() => {
    (async () => {
      await LegalDetailsListRequest("privacy");
    })();
  }, []);
  return (
    <Layout>
      <LegalsContent />
    </Layout>
  );
}

export default PrivacyPolicyPage;
