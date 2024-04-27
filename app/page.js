import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-[10px] items-center justify-center w-full h-[55vh] text-[white]">
        <h1 className="text-[45px] font-bold">Get Me A Chai <span><img src="assets/tea.gif" alt=""/></span></h1>
        <p className="text-xs tracking-[0.7px]">A crowdfunding platform for creators to fund their projects.</p>
        <p className="text-xs tracking-[0.7px]">A place where yours fans can buy you a chai. Unlease the power of your fans and get your projects funded.</p>
        <div className="mt-1">
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-800 to-blue-700 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span class="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Start Here
            </span>
          </button>
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-800 to-blue-700 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span class="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Read More
            </span>
          </button>
        </div>
      </div>

      <div className="line h-0.5 opacity-10 bg-[white]"></div>
    </>
  );
}
