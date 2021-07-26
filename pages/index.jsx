import Link from "next/link";
import React from "react";

const IndexPage = () => (
  <div>
    go to{" "}
    <Link href="/api">
      <a>
        <code>/api</code>
      </a>
    </Link>{" "}
    to see the repro
  </div>
);

export default IndexPage;
