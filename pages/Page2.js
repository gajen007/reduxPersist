import React, { useState } from "react"
import { getCurrentData } from "../redux/myreducer";
import store from "../redux/store";

export default function Page2() {
    const [dataFromStore] = useState(store.getState().forTest.dataValue);

return <div>Stored Data is {dataFromStore}</div>
}
