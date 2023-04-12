import React, { lazy, Suspense } from "react";

const LazyProfileNotifications = lazy(() => import("./ProfileNotifications"));

const ProfileNotifications = (props) => (
  <Suspense fallback={null}>
    <LazyProfileNotifications {...props} />
  </Suspense>
);

export default ProfileNotifications;
