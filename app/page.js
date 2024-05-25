import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-[10px] items-center justify-center w-full h-[55vh] text-[white]">
        <div className="text-[45px] font-bold flex items-end">Get Me A Chai <span><img src="/tea.gif" width={'100px'} /></span></div>
        <p className="text-xs tracking-[0.7px]">A crowdfunding platform for creators to fund their projects.</p>
        <p className="text-xs tracking-[0.7px]">A place where yours fans can buy you a chai. Unlease the power of your fans and get your projects funded.</p>
        <div className="buttons mt-1">
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

      <div className="line1 h-0.5 opacity-10 bg-[white]"></div>

      <div className="w-full h-[55vh] text-[white] flex gap-10 flex-col items-center justify-center">
        <h2 className="font-bold text-[25px] tracking-[1px]">Your Fans can buy you a Chai</h2>

        <div className="items flex items-center justify-center gap-32">
          <div className="item1 flex gap-1 flex-col items-center justify-center">
            <img src="/help.gif" width={'70px'} className="border rounded-full mb-1" />
            <p className="text-xs font-bold tracking-[0.7px]">Fans want to help</p>
            <p className="text-xs">Your fans are available to support you</p>
          </div>

          <div className="item2 flex gap-1 flex-col items-center justify-center">
            <img src="/contribute.gif" width={'70px'} className="bg-[#9d59e6] rounded-full border mb-1" />
            <p className="text-xs font-bold tracking-[0.7px]">Fans want to contribute</p>
            <p className="text-xs">Your fans willing to contribute financially</p>
          </div>

          <div className="item3 flex gap-1 flex-col items-center justify-center">
            <img src="/collaborate.gif" width={'70px'} className="border rounded-full mb-1" />
            <p className="text-xs font-bold tracking-[0.7px]">Fans want to collaborate</p>
            <p className="text-xs">Your fans are ready to collaborate with you</p>
          </div>
        </div>
      </div>

      <div className="line2 h-0.5 opacity-10 bg-[white]"></div>

      <div className="w-full min-h-[60vh] py-10 text-[white] flex gap-5 flex-col items-center justify-center">
        <h2 className="font-bold text-[25px] tracking-[1px]">Learn more about us</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/pBXgoeywweE?si=646D3LTQLYC7_5Xk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h2 className="text-[15px] text-[#ffffff2b] tracking-[1px]">(This is a random video for demonstration)</h2>
      </div>
    </>
  );
}
