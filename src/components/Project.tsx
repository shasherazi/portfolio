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
    <div className='project-item mb-20'>
      <img src={image} alt={imageAlt} />
      <div className='project-item-description'>
        <h2 className='font-bold text-lg'>{title}</h2>
        <div className='tech-used flex items-center gap-1 mb-2'>
          <span className=''>Tech used: </span>
          {
            techUsed && techUsed.map((Icon, index) => (
              <Icon key={index} />
            ))
          }
        </div>
        <p className='description leading-5 tracking-wide mb-1'>
          {description}
        </p>
        <div className='project-item-links flex gap-2'>
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
