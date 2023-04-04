import React, { lazy, Suspense } from "react";

const LazyProfilePassword = lazy(() => import("./ProfilePassword"));

const ProfilePassword = (props) => (
  <Suspense fallback={null}>
    <LazyProfilePassword {...props} />
  </Suspense>
);

export default ProfilePassword;
