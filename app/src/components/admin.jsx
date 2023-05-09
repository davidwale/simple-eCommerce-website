import React, { Component, useEffect, useRef, useState } from "react";
import ReactPaginate from 'react-paginate';
import product from "./product";
import { Link } from "react-router-dom";


export default function Admin({ userData }) {
 const [data, setData] = useState([]);
 const [limit, setLimit] = useState(10);
 const [pageCount, setPageCount] = useState([]);
 const currentPage = useRef();

 useEffect(() => {
  currentPage.current = 1;
    getAllUser();
    getPaginatedUsers();
  }, []);
  
  const getAllUser = () => {
    fetch("http://localhost:4000/getAllUser")
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setData(data.data);
      });
  };
  



  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./login";
  };

  const deleteUser = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}`)) {
        fetch("http://localhost:4000/deleteUser", {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
             userid: id,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
                alert(data.data);
                getAllUser();
            });
    } else {
        
    } 
  }; 

  function handlePageClick(e) {
    console.log(e);
    currentPage.current = e.selected+1;
    getPaginatedUsers();
  }

  function changeLimit(){
    getPaginatedUsers();
  }


  function getPaginatedUsers() {
    fetch(`http://localhost:4000/paginateUser?page=${currentPage.current}&limit=${limit}`, {
      method: "GET",
      
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setData(data.result);
        setPageCount(data.pageCount);

      });
  }

  return (
    <div>
      <div>
        <div style={{ width: "auto" }}>
          <h1>Welcome Admin</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>User Type</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((i) => {
                return (
                  <tr key={i._id}>
                    <td>{i.fname}</td>
                    <td>{i.email}</td>
                    <td>{i.userType}</td>
                    
                    <td>
                      <button onClick={() => deleteUser(i._id, i.fname)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <ReactPaginate
  breakLabel="..."
  nextLabel="next >"
  onPageChange={handlePageClick}
  pageRangeDisplayed={5}
  pageCount={pageCount}
  previousLabel="< previous"
  renderOnZeroPageCount={null}
  marginPagesDisplayed={2}
  containerClassName="pagination justify-content-center"
  pageClassName="page-item"
  pageLinkClassName="page-link"
  previousClassName="page-item"
  previousLinkClassName="page-link"
  nextClassName="page-item"
  nextLinkClassName="page-link"
  activeClassName="active"
/>


<a href="/products">View All Products</a>
      
          <button onClick={logOut} className="btn">
           <p> Log Out</p>
          </button>
        </div>
      </div>
    </div>
  );
  
}