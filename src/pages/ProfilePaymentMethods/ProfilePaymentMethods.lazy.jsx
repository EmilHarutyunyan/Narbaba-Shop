import React, { lazy, Suspense } from "react";

const LazyProfilePaymentMethods = lazy(() => import("./ProfilePaymentMethods"));

const ProfilePaymentMethods = (props) => (
  <Suspense fallback={null}>
    <LazyProfilePaymentMethods {...props} />
  </Suspense>
);

export default ProfilePaymentMethods;
