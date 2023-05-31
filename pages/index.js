import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';

export default function index() {
  return (
    <>
    <Head>
      <title> </title>
    </Head>

    <div class="text-center">
  <Image src="/ras.png" class="rounded" alt="ras" width={300} height={200} />
</div>

<div class="text-center"> <button type="button" class="btn btn-success">Hello Rasberry pi</button> </div>


    </>
  )
}
