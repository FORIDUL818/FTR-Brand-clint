

function Ragistration() {
  return (
    <div>
       <div className=" bg-[#a5b1c2] flex justify-center items-center h-screen">


<form className="w-[500px]  bg-[#130f40] p-8 rounded-xl shadow-xl">
  <h1 className="w-full text-center p-4 mb-6 uppercase text-3xl font-semibold text-white bg-gradient-to-r from-[#130f40] to-[#6C63FF] rounded-t-lg">Registration Form</h1>
  
  <div className="space-y-5">
    <input 
      className="border-2 border-gray-300 w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C63FF] placeholder-gray-500" 
      type="text" 
      placeholder="Enter your name" 
    />
    <input 
      className="border-2 border-gray-300 w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C63FF] placeholder-gray-500" 
      type="email" 
      placeholder="Enter your email" 
    />
    <input 
      className="border-2 border-gray-300 w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C63FF] placeholder-gray-500" 
      type="password" 
      placeholder="Enter your password" 
    />
    <input 
      className="border-2 border-gray-300 w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C63FF] placeholder-gray-500" 
      type="password" 
      placeholder="Confirm your password" 
    />
  </div>

  <button 
    className="w-full mt-8 bg-gradient-to-r from-[#130f40] to-[#6C63FF] text-white p-4 rounded-md font-semibold hover:opacity-90 transition-opacity duration-300"
    type="submit"
  >
    Register
  </button>

  <div className="mt-6 text-center">
    <span className="text-gray-600">Already have an account?</span>
    <button 
      className="ml-2 text-[#9a2394] font-semibold hover:underline"
      onClick={() => { /* switch to login form */ }}
    >
      Login
    </button>
  </div>
</form>

       </div>
    </div>
  )
}

export default Ragistration