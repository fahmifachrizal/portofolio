import { Element } from 'react-scroll'
import ProjectCard from '../components/ProjectCard';
import * as BoxIcons from 'react-icons/bi';

const ProjectSection = function() {
  const projects = [1, 2, 3, 4, 5]
  const scrollLeft = () => {
    document.getElementById('project-carousel').scrollLeft -= 640
  }
  const scrollRight = () => {
    document.getElementById('project-carousel').scrollLeft += 640
  }


  return (
    <Element id='projects' name='projects'>
      <div className="my-20 w-full">
        <div className='px-56 mb-10 flex flex-row items-center justify-between'>
          <h1 className='text-white text-4xl font-bold'>Featured Projects</h1>
          <div className='flex flex-row items-center gap-6'>
            <BoxIcons.BiChevronLeftCircle className="text-4xl text-white cursor-pointer" onClick={scrollLeft}/>
            <BoxIcons.BiChevronRightCircle className="text-4xl text-white cursor-pointer" onClick={scrollRight}/>
          </div>
        </div>

        <div id='project-carousel' className='h-[560px] w-auto bg-[#181818] py-10 shadow-inner flex flex-row gap-x-10 overflow-x-auto no-scrollbar scroll-smooth peer'>
          { projects.map((project, index) => {
              return (
                <ProjectCard key={`project${index}`}/>
              )
            })
          }
        </div>
      </div>
    </Element>
  )
}

export default ProjectSection