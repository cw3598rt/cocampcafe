import { useState } from "react";
import MakeWriteUI from "./marketWrite.presenter";

export default function MakeWrite() {
  const [imgUrl, setImgUrl] = useState(["", "", ""]);
  return <MakeWriteUI imgUrl={imgUrl} />;
}
