import React, { lazy, Suspense } from "react";

const LazyProfileMyOrders = lazy(() => import("./ProfileMyOrders"));

const ProfileMyOrders = (props) => (
  <Suspense fallback={null}>
    <LazyProfileMyOrders {...props} />
  </Suspense>
);

export default ProfileMyOrders;
