import data from '../config/experience.json';
import Title from './Title';
import '../css/card.css';
import '../css/experience.css';
import { Work } from '@mui/icons-material';

function ExperienceCard({ job }: { job: { role: string; company: string; period: string; highlights: string[] } }) {
  return (
    <div className="experience-card card group">
      <div className="experience-card__icon">
        <Work className="text-secondary" sx={{ fontSize: 28 }} />
      </div>
      <div className="experience-card__content">
        <div className="experience-card__header">
          <h3 className="text-xl font-semibold text-secondary">{job.role}</h3>
          <span className="experience-card__company">{job.company}</span>
          <span className="experience-card__period">{job.period}</span>
        </div>
        <ul className="experience-card__highlights">
          {job.highlights.map((highlight, i) => (
            <li key={i} className="flex gap-2">
              <span className="experience-card__bullet text-secondary">▸</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <>
      <Title title="Experience" />
      <div className="experience-timeline">
        {data.map((job, index) => (
          <ExperienceCard key={index} job={job} />
        ))}
      </div>
    </>
  );
}
