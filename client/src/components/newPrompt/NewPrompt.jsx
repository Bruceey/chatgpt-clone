import { useEffect, useRef, useState } from "react";
import { Image } from "@imagekit/react";
import Upload from "../upload/Upload";
import "./newPrompt.css";

const NewPrompt = () => {
  const [imgResonse, setImgResonse] = useState(null);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      {imgResonse?.filePath && (
        <Image
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
          src={imgResonse.filePath}
          width="380"
          transformations={[{ width: 380 }]}
          alt="Picture of the author"
        />
      )}
      <div className="endChat" ref={endRef}></div>
      <form className="newForm">
        <Upload setImgResonse={setImgResonse} />
        <input id="file" type="file" multiple={false} hidden />
        <input type="text" placeholder="Ask me anything..." />
        <button>
          <img src="/arrow.png" alt="" />
        </button>
      </form>
    </>
  );
};

export default NewPrompt;
