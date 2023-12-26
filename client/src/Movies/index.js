import React, { useState } from "react";
import { PlusCircleOutlined, UploadOutlined } from "@ant-design/icons";
import Card from "./card";
import { Pagination } from 'antd';
import {useNavigate} from 'react-router-dom'

function Movies() {
    const navigate = useNavigate()
  const [movieList, setMovieList] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);

  return (
    <div className={movieList.length > 0 ? "movies_main" : "movie_empty"}>
      {movieList && movieList.length > 0 ? (
        <div className="movie">
          <div className="movie_header">
            <h2>
              My movies
              <span className="plus_icon" onClick={()=>{
                navigate('/create-movie')
              }}>
                <PlusCircleOutlined />
              </span>
            </h2>
            <button className="logout_btn" onClick={()=>{navigate('/')}}>
              Logout
              <span>
                <UploadOutlined className="logout_icon" />
              </span>
            </button>
          </div>
          <div className="movies_cards">
            {movieList.map((item) => {
              return <Card />;
            })}
          </div>
          <div className="pagination">
          <Pagination defaultCurrent={1} total={movieList.length} />
          </div>
        </div>
      ) : (
        <div className="emptyList">
          <h2>Your movie list is empty</h2>
          <button>Add a new movie</button>
        </div>
      )}
    </div>
  );
}

export default Movies;
