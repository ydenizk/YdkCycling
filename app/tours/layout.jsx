import React from 'react'

function Layout({children}) {
  return (
    <div className='w-full  '>


      <h1 className="text-4xl font-semibold w-full mt-6 mb-12 text-center  ">GRAND TOURS</h1>
      {children}
    </div>
  );
}

export default Layout