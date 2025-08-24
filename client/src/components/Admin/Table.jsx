import React from "react";

const Table = ({ keys, data, heading, page, setPage }) => {
  return (
    <>
      <table className="background">
        <thead>
          <tr>
            {heading?.map((curEle) => (
              <th>{curEle}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((curEle) => (
            <tr>
              {keys?.map((ele) => {
                return ele == "avatar" ? (
                  <td>
                    <img src={curEle.avatar} />
                  </td>
                ) : (
                  <td>{curEle[ele]}</td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div id="btn-holder">
        {page > 1 && (
          <button
            id="pg-btn"
            onClick={() => {
              setPage((prev) => prev - 1);
            }}
          >
            previous
          </button>
        )}
        {data == 10 && (
          <button
            id="pg-btn"
            onClick={() => {
              setPage((prev) => prev + 1);
            }}
          >
            next
          </button>
        )}
      </div>
    </>
  );
};

export default Table;
