

export default function Home() {
  return (
    
     <div className="w-[100vw] h-[100vh] flex  justify-start items-center ">
      <video width="700" height="500"  preload="none" muted loop autoPlay className="absolute  w-full h-full object-cover bg-top opacity-85 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <source src="/myVideoBg2.mp4" type="video/mp4" />
      
      
    </video>
    <div className=" z-10 ml-10 p-8 text-white w-[70%]">
        <h1 className="text-[170px] font-extrabold tracking-wide text-left w-full ">My e-Shop</h1>
        <p className="text-2xl text-left mt-4">Welcome to our website. Great deals await you!!!</p>
      </div>
     </div>
     
    
  );
}
