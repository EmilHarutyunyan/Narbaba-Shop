import React, { lazy, Suspense } from "react";

const LazyProfileNewAddresses = lazy(() => import("./ProfileNewAddresses"));

const ProfileNewAddresses = (props) => (
  <Suspense fallback={null}>
    <LazyProfileNewAddresses {...props} />
  </Suspense>
);

export default ProfileNewAddresses;
