import React, { useState } from "react";
import { Upload } from "antd";
import { showMessage } from "../utils/showMessage";
import { UploadOutlined } from "@ant-design/icons";
import {useNavigate} from 'react-router-dom'

function CreateMovie() {
  const navigate = useNavigate()
  const [image, setImage] = useState("");
  const [imageUploadLoading, setImageUploadLoading] = useState(false);
  const [editMovie, setEditMovie] = useState(false)

  const imageUploadProps = {
    name: "file",
    // action: "",
    // headers: {
    //   authorization: "authorization-text",
    // },
    onChange(info) {
      setImageUploadLoading(true);
      console.log(info,"info")
      if (info.file.status === "done") {
        showMessage(`${info.file.name} file uploaded successfully`, false);
        setImage(info.file.response.url);
        setImageUploadLoading(false);
      } else if (info.file.status === "error") {
        showMessage(`${info.file.name} file upload failed.`, true);
        setImageUploadLoading(false);
      }
    },
    showUploadList: false, // Set showUploadList to false to hide the flat list
  };

  return (
    <div className="create_movie_main">
      <div className="create_movie">
        <h2>{editMovie == true ? "Edit" : "Create a new movie"}</h2>
        <div className="create_movie_upload">
          <Upload {...imageUploadProps}>
            <div className="imageWrapper">
              <div className="imageUpload">
                {imageUploadLoading == true ? (
                  <div className="loader"></div>
                ) : image ? (
                  <img
                    src={image}
                    alt="placeholder image"
                    width={image ? 250 : 80}
                    height={image ? 250 : 80}
                  />
                ) : (
                  <div className="before_upload">
                    <UploadOutlined />
                    <p>Drop an image here</p>
                  </div>
                )}
              </div>
            </div>
          </Upload>
          <div>
          <div className="create_movie_inputField">
              <input
                className="title_inputField"
                required
                placeholder="Title"
                type="text"
                name="title"
                // value={""}
                // onChange={(e) => {}}
              />
              <input
                className="year_inputField"
                required
                placeholder="Publishing year"
                type="text"
                name="year"
                // value={""}
                // onChange={(e) => {}}
              />
          </div>
          <div className="button_main">
            <button className="cancel_btn" onClick={()=>{navigate('/my-movies')}}>
                Cancel
            </button>
            <button className="submit_btn">
                Submit
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateMovie;
