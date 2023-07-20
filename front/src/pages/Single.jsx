import React, { useEffect, useState } from "react";
import Edit from "../assets/img/edit.png";
import Delete from "../assets/img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {

  return (
    <div className="single">
        <div className="content">
            <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
           <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="info">
            <span>JOHN</span>
            <p>Posted 2 days ago</p>
          </div>
            <div className="edit">
              <Link to={`/write?edit`}>
                <img src={Edit} alt="" />
              </Link>
              <img src={Delete} alt="" />
            </div>
        </div>
        <h1>Lorem ipsum bis architecto in esse sapiente laudantium dolorum. Facilis autem deleniti architecto!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum praesentium delectus, qui sed recusandae similique odio harum dolorum, temporibus nesciunt esse voluptatem earum nulla! Consectetur itaque soluta iusto ratione labore?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam dolore odit laudantium quo, eum voluptatum nesciunt illo molestiae ducimus culpa laboriosam incidunt minus dolorum tempora soluta dolores obcaecati nulla numquam?  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti atque assumenda neque obcaecati adipisci tempore perferendis, quisquam qui. Ipsum nesciunt totam amet vero? Doloremque autem eveniet quos voluptatem officiis error!</p>
        </div>
        <Menu/>
    </div>
  );
};

export default Single;