import Overview from "@/components/Resources/Overview";
import React, { Suspense } from "react";

function Products() {
  return (
    <Suspense
      fallback={
        <div className=" absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50">
          <div className="animate-spin rounded-full h-[20px] w-[20px] border-t-2 border-b-2 border-primary"></div>
        </div>
      }
    >
      <Overview />
    </Suspense>
  );
}

export default Products;
