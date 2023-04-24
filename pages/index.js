import React, { useEffect, useState } from "react";
import Link from "next/link";
export default function Home() {
  return (
        <div>
          <Link href="Page1">Page One</Link>
          <br/><br/><br/>
          <Link href="Page2">Page Two</Link>
        </div>
    )
}