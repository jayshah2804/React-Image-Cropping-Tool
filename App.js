import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import Modal from "./Modal";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import image from "./SGL_EC_JAY SHAH.jpg";

function App() {
  const [val, setVal] = useState();
  const [myImg, setMyImg] = useState();
  const cropperRef = useRef(null);
  const onCrop = () => {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    // console.log(cropper.getCroppedCanvas().toDataURL());
    setVal(cropper.getCroppedCanvas().toDataURL());
    console.log(cropper);
  };
  const fileChangeHandler = (e) => {
    const [file] = e.target.files;
    setMyImg(URL.createObjectURL(file));
  }
  return (
    <div>
      <input type="file" onChange={fileChangeHandler} />
      {myImg && (
        <div className="modalBackground">
          <div className="modalContainer">
            <Cropper
              src={myImg}
              style={{ height: 400, width: "100%" }}
              // Cropper.js options
              initialAspectRatio={16 / 9}
              guides={false}
              crop={onCrop}
              ref={cropperRef}
            />
            <img src={val} style={{ width: "100px", height: "100px", marginLeft: "50%", marginTop: "10px" }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
