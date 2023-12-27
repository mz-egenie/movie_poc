import React, { useEffect, useState } from "react";
import { PlusCircleOutlined, UploadOutlined } from "@ant-design/icons";
import Card from "./card";
import { Pagination, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import useMoviesApi from "../hooks/useMoviesApi";

var getMoviesTimeout;

export default function Movies() {
  const navigate = useNavigate();

  const { getMovies } = useMoviesApi();

  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(8);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return (
        <a className="prev_btn" href="#">
          Prev
        </a>
      );
    }
    if (type === "next") {
      return (
        <a className="next_btn" href="#">
          Next
        </a>
      );
    }
    return originalElement;
  };

  useEffect(() => {
    (() => {
      if (getMoviesTimeout) {
        clearTimeout(getMoviesTimeout);
      }

      getMoviesTimeout = setTimeout(async () => {
        try {
          setLoading(true);
          const {
            data: { data: movies, total },
          } = await getMovies(page, size);

          setMovieList(movies);
          setTotal(total);
          setLoading(false);
        } catch (ex) {
          console.log({ ex });
          setLoading(false);
        }
      }, 500);
    })();
  }, [page, size]);

  return (
    <div className={movieList.length > 0 ? "movies_main" : "movie_empty"}>
      <div className="movie">
        <div className="movie_header">
          <h2>
            My movies
            <span
              className="plus_icon"
              onClick={() => {
                navigate("/create-movie");
              }}
            >
              <PlusCircleOutlined />
            </span>
          </h2>
          <button
            className="logout_btn"
            onClick={() => {
              navigate("/");
            }}
          >
            Logout
            <span>
              <UploadOutlined className="logout_icon" />
            </span>
          </button>
        </div>

        {!loading && movieList && movieList.length > 0 ? (
          <>
            <div className="movies_cards">
              {movieList.map((movie) => {
                return <Card movie={movie} />;
              })}
            </div>
            <div className="pagination">
              <Pagination
                current={page}
                total={total}
                itemRender={itemRender}
                onChange={(page, pageSize) => {
                  setPage(page);
                  setSize(pageSize);
                }}
                pageSize={size}
              />
            </div>
          </>
        ) : (
          <>
            {loading ? (
              <Spin />
            ) : (
              <div className="emptyList">
                <h2>Your movie list is empty</h2>
                <button>Add a new movie</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
