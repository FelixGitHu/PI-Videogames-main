import React from "react";
import { useDispatch } from "react-redux";
import { prev, next } from "../../redux/actions";
import style from "./Paginado.module.css";

export default function Paginate({ numPage, cantPage }) {
  const dispatch = useDispatch();
  console.log("#####num page in paginate", numPage)
  return (
    <div className={style.container}>
      <div className={style.paginate}>
        {numPage <= 1 ? (
          <>
            <div></div>
            <div></div>
          </>
        ) : (
          <>
            <button onClick={() => dispatch(prev())}>PREV</button>
            <p>{numPage - 1}</p>
          </>
        )}
        <h3>{numPage}</h3>
        {numPage > cantPage ? (
          <>
            <div></div>
            <div></div>
          </>
        ) : (
          <>
            <p>{numPage + 1}</p>
            <button onClick={() => dispatch(next())}>NEXT</button>
          </>
        )}
      </div>
    </div>
  );
}