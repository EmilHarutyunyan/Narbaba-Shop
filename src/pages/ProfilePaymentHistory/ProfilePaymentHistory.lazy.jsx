import React, { lazy, Suspense } from "react";

const LazyProfilePaymentHistory = lazy(() => import("./ProfilePaymentHistory"));

const ProfilePaymentHistory = (props) => (
  <Suspense fallback={null}>
    <LazyProfilePaymentHistory {...props} />
  </Suspense>
);

export default ProfilePaymentHistory;
