import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllGames,getAllGenres } from "../../redux/actions";


export default function LandingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGames());
    dispatch(getAllGenres());
  }, [dispatch]);
    return (
      <div >
        <h1 style={{ color: 'red' }}>Welcome to My VideoGame SPA</h1>
        <br />
  
        <Link to="/home">
          <button>
            <h3>Step in</h3>
          </button>
        </Link>
      </div>
    );
  }