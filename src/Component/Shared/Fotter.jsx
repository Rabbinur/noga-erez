

const Fotter = () => {
  return (
    // <div className="relative">
    //   <img src={bg} alt="" className=" w-full h-[1000px] lg:h-96" />
    //   <div className=" mx-auto max-w-screen-2xl">
    //     <div
    //       aria-hidden="true"
    //       className="absolute h-full inset-0 flex items-center"
    //     >
    //       <div
    //         aria-hidden="true"
    //         className="bg-layers bg-scale w-2/5 h-full m-auto blur-xl bg-gradient-to-r from-green-200 via-blue-300 to-purple-400  rounded-full"
    //       ></div>
    //     </div>
    //     <div
    //       aria-hidden="true"
    //       className="absolute inset-0 w-full top-0 left-0 sm:h-[100px]  lg:h-96 bg-black opacity-60"
    //     ></div>

    //     <footer className="absolute w-[80%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] mx-auto px-4 text-white z-50">
    //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-items-center">
    //         <div className="w-full col-span-2 px-10">
    //           <img src={logo} alt="" />
    //           <h5 className="text-lg mt-0 mb-2 text-blueGray-600 w-4/5">
    //             Find us on any of these platforms, we respond 1-2 business days.
    //           </h5>
    //           <div className="mt-6 lg:mb-0 mb-6 flex items-center gap-x-5">
    //             <a href="/">
    //               <img
    //                 src={facebook}
    //                 alt=""
    //                 className="w-9 invert hover:-translate-y-2 duration-300 text-white"
    //               />
    //             </a>
    //             <a href="/">
    //               <img
    //                 src={youtube}
    //                 alt=""
    //                 className="w-10 invert hover:-translate-y-2 duration-300 text-white"
    //               />
    //             </a>
    //             <a href="/">
    //               <img
    //                 src={instagram}
    //                 alt=""
    //                 className="w-8 invert hover:-translate-y-2 duration-300 text-white"
    //               />
    //             </a>
    //             <a href="/">
    //               <img
    //                 src={twitter}
    //                 alt=""
    //                 className="w-8 invert hover:-translate-y-2 duration-300 text-white"
    //               />
    //             </a>
    //           </div>
    //         </div>

    //         <div className="w-full  px-10 ml-auto">
    //           <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
    //             Useful Links
    //           </span>
    //           <ul className="list-unstyled">
    //             <li>
    //               <a
    //                 className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:translate-x-2 duration-300"
    //                 href="https://www.creative-tim.com/presentation?ref=njs-profile"
    //               >
    //                 About Us
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 className="text-blueGray-600 hover:translate-x-2 duration-300 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
    //                 href="https://blog.creative-tim.com?ref=njs-profile"
    //               >
    //                 Blog
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 className="text-blueGray-600 hover:translate-x-2 duration-300 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
    //                 href="https://www.github.com/creativetimofficial?ref=njs-profile"
    //               >
    //                 Github
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 className="text-blueGray-600 hover:translate-x-2 duration-300 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
    //                 href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
    //               >
    //                 Free Products
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //         <div className="w-full  px-10">
    //           <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
    //             Other Resources
    //           </span>
    //           <ul className="list-unstyled">
    //             <li>
    //               <a
    //                 className="text-blueGray-600 hover:translate-x-2 duration-300 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
    //                 href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
    //               >
    //                 MIT License
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 className="text-blueGray-600 hover:translate-x-2 duration-300 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
    //                 href="https://creative-tim.com/terms?ref=njs-profile"
    //               >
    //                 Terms &amp; Conditions
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 className="text-blueGray-600 hover:translate-x-2 duration-300 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
    //                 href="https://creative-tim.com/privacy?ref=njs-profile"
    //               >
    //                 Privacy Policy
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 className="text-blueGray-600 hover:translate-x-2 duration-300 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
    //                 href="https://creative-tim.com/contact-us?ref=njs-profile"
    //               >
    //                 Contact Us
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //         <div className="w-full  px-10">
    //           <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
    //             Other Resources
    //           </span>
    //           <ul className="list-unstyled">
    //             <li>
    //               <a
    //                 className="text-blueGray-600 hover:translate-x-2 duration-300 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
    //                 href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
    //               >
    //                 MIT License
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 className="text-blueGray-600 hover:translate-x-2 duration-300 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
    //                 href="https://creative-tim.com/terms?ref=njs-profile"
    //               >
    //                 Terms &amp; Conditions
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 className="text-blueGray-600 hover:translate-x-2 duration-300 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
    //                 href="https://creative-tim.com/privacy?ref=njs-profile"
    //               >
    //                 Privacy Policy
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 className="text-blueGray-600 hover:translate-x-2 duration-300 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
    //                 href="https://creative-tim.com/contact-us?ref=njs-profile"
    //               >
    //                 Contact Us
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>

    //       <hr className="my-6 border-blueGray-300 " />

    //       <div className="flex  items-center justify-center">
    //         <div className="w-full md:w-4/12 px-4 mx-auto text-center">
    //           <div className="text-sm text-blueGray-500 font-semibold">
    //             Coppyright© All rights reserved
    //           </div>
    //         </div>
    //       </div>
    //     </footer>
    //   </div>
    // </div>
    <div className="bg-[url('../../assets/bg.png')]  py-5   ">
     <div className="flex flex-col items-center justify-center">
     <div className="py-10">
        <h1 className="text-white uppercase text-[34px]">Contact</h1>
      </div>
      <div className="py-10 text-center">
      <h1 className="text-white uppercase text-[24px]">Management</h1>
      <p className="text-white uppercase text-">KRISTAXSCHMIDT@GMAIL.COM</p>
      </div>
      <div className="py-10">
      <h1 className="text-white uppercase text-[24px]">IL MANAGEMENT</h1>
      <p className="text-white uppercase text-">GOVERASAF@GMAIL.COM</p>
      </div>
     </div>
    <div className="flex flex-col md:flex-row pt-28 justify-between items-center px-5 md:px-20">
    <div >
      <h1 className="text-white text-[24px] py-5">NOGAEREZ.COM</h1>
     </div>
     <div className="text-white">
   
      <ul className="flex  justify-center md:items-center gap-3 md:gap-5 md:text-xs text-[7px]" >
        <li>© 2023 COPYRIGHT </li>
        <li> TERMS OF USE</li>
        <li> PRIVACY POLICY</li>
        <li> AD CHOICES</li>
        <li>  COOKIES POLICY</li>
        <li> COOKIES SETTINGS</li>
      </ul>
     </div>
    </div>
    </div>
  );
};

export default Fotter;
