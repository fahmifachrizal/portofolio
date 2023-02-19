const ProjectCard = function() {

  return (
    <div className="first:ml-56 group last:mr-56">
      <div className="w-[640px]">
        <div className='h-[360px] w-full bg-black group-hover:scale-110 duration-75 cursor-pointer'>

        </div>
        <div className="py-2 group-hover:py-6 duration-75">
          <div className="flex flex-row justify-between">
            <h1 className="text-lg font-semibold text-white">PROJECT NAME</h1>
            <div>
              <div className="bg-zinc-700 rounded-xl"><span className="text-white px-2 tracking-wider text-sm font-semibold">React</span></div>
            </div>
          </div>
          <div className="pt-1">
            <span className="text-gray-300 font-light">
              description description description description description description description description description description description description description description description description
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard