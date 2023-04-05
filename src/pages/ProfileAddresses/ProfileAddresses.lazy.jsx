import React, { lazy, Suspense } from "react";

const LazyProfileAddresses = lazy(() => import("./ProfileAddresses"));

const ProfileAddresses = (props) => (
  <Suspense fallback={null}>
    <LazyProfileAddresses {...props} />
  </Suspense>
);

export default ProfileAddresses;
