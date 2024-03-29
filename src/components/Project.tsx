import { IconType } from "react-icons";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  techUsed: IconType[];
  liveLink: string | undefined;
  githubLink: string;
}

export const Project = ({
  title,
  description,
  image,
  imageAlt,
  techUsed,
  liveLink,
  githubLink,
}: ProjectProps) => {
  return (
    <div className='project-item flex flex-col mb-20 md:flex-row'>
      <img src={image} alt={imageAlt} className="min-w-0 h-full flex-1" />
      <div className='project-item-description flex-1'>
        <h2 className='font-bold text-lg md:text-xl'>{title}</h2>
        <div className='tech-used flex items-center gap-1 mb-2 md:text-lg'>
          <span className=''>Tech used: </span>
          {
            techUsed && techUsed.map((Icon, index) => (
              <Icon key={index} />
            ))
          }
        </div>
        <p className='description leading-5 tracking-wide mb-1 md:text-lg'>
          {description}
        </p>
        <div className='project-item-links flex gap-2 md:text-lg'>
          {liveLink &&
            <a
              href={liveLink}
              target='_blank'
              rel='noreferrer'
              className='underline'
            >
              Live
            </a>
          }
          <a
            href={githubLink}
            target='_blank'
            rel='noreferrer'
            className='underline'
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
};
