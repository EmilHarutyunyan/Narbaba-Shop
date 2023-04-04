import React, { lazy, Suspense } from "react";

const LazyProfileAccount = lazy(() => import("./ProfileAccount"));

const ProfileAccount = (props) => (
  <Suspense fallback={null}>
    <LazyProfileAccount {...props} />
  </Suspense>
);

export default ProfileAccount;
