import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';


export default function index() {
  return (
    <>
    <Head>
     <title>Film camera</title> <link rel="icon" href="/icon.png" type="image/icon"/> 
    </Head>

 
    

<header data-bs-theme="dark">
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">หน้าหลัก</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">เกี่ยวกับเรา</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">....</a>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</header>

<main>
<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval={4000}>
      <img src="film1.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval={4000}>
      <img src="film.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item"data-bs-interval={4000}>
      <img src="ras.png" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

<br></br>
<br></br>

<div className="text-center">
  <div className="row">
    <div className="col-lg-4">
      <svg className="bd-placeholder-img rounded-circle" width={140} height={140} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)" /></svg>
      <h2 className="fw-normal">Heading</h2>
      <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
      <p><a className="btn btn-secondary" href="#">View details »</a></p>
    </div>{/* /.col-lg-4 */}
    <div className="col-lg-4">
      <svg className="bd-placeholder-img rounded-circle" width={140} height={140} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)" /></svg>
      <h2 className="fw-normal">Heading</h2>
      <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
      <p><a className="btn btn-secondary" href="#">View details »</a></p>
    </div>{/* /.col-lg-4 */}
    <div className="col-lg-4">
      <svg className="bd-placeholder-img rounded-circle" width={140} height={140} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)" /></svg>
      <h2 className="fw-normal">Heading</h2>
      <p>And lastly this, the third column of representative placeholder content.</p>
      <p><a className="btn btn-secondary" href="#">View details »</a></p>
    </div>{/* /.col-lg-4 */}
  </div>{/* /.row */}</div>



<div class="text-center"> <h1>Test font โดยที่ประชาชนแห่งสหประชาชาติได้ยืนยันอีกครั้งไว้ในกฎบัตรถึงศรัทธาในสิทธิมนุษยชนขั้นพื้นฐาน</h1> </div>
</main>

<footer>


</footer>
    </>
  )
}
