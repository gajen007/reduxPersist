import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import Link from "next/link";
export default function Home() {
  return (
      <Provider store={store}>
        <div>
          <Link href="Page1">Page One</Link>
          <br/><br/><br/>
          <Link href="Page2">Page Two</Link>
        </div>
      </Provider>
    )
}





