import Image from "next/image";

export default function Home() {
  return (
   <div>
<header>
  <nav className="bg-black h-15 flex items-center justify-between mt-5 ml-10 mr-10">
    <div className="flex items-center ml-6">
      <img src="/images/logo.jpeg" alt="logo" height={50} width={50} className="ml-5 pt-1"/>
      <h1 className="text-blue-300 ml-10 font-bold font-700 text-4xl "> Governorsindh.Com</h1>
    </div>

    
      <ul className="flex space-x-2 text-white mr-6 text-2xl">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
        <li>Login</li>
        <li>Sign Up</li>
        <li>result</li>
        <li>help</li>
      </ul>
  </nav>

</header>

        <div>

          <div className="flex w-full justify-center mt-10  space-x-4 px-10">
            <div className="bg-red-600 h-60 w-4/12"></div>
            <div className="bg-blue-600 h-60 w-4/12"></div>
            <div className="bg-green-600 h-60 w-4/12"></div>
          </div>

            <div className="flex w-full justify-center mt-10 space-x-4 px-10">
                <div className="bg-yellow-600 h-60 w-6/12"></div>
                <div className="bg-orange-600 h-60 w-6/12"></div>
            
            </div>

        </div>
        <br />
        <div className="text-center font-700 font-bold text-4xl">
          <br />
        <p> Develop By Abdul-Rehman</p>

        </div>

</div>
  );
}
