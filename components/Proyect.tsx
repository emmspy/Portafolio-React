import React from 'react'
import Image from 'next/image';

const Proyect = () => {
  return (
    <div className="mb-40 mt-10">
      <Image src="/banner.jpeg" width={210} height={63} alt="logo" />
      <div className='my-5'>
        <strong className="my-5">Aqui va el nombre del proyecto</strong>
        <p className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          illum sequi repellendus, est vel et. Animi aut, voluptatibus
          reiciendis totam itaque aliquam! Provident ea maiores iure excepturi
          ullam aperiam possimus?
        </p>
      </div>
    </div>
  );
}

export default Proyect