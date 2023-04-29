import data from '../config/skills.json';
import Title from './Title';
import '../css/card.css';
function SkillDiv(props: any) {
    return (
        <div className='block card'>
            <div className='p-10'>
                <div className="mb-1 text-2xl font-medium text-secondary">{props.expertise.name}</div>
                {props.expertise.skills.map((skill: any, index: number) => {
                    return (
                        <div key={index}>
                        <span>{skill.name}</span>
                        <div key={skill.name} className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                            <div className="bg-secondary h-2.5 rounded-full "  style={{width: skill.percent + '%'}}></div>
                        </div>
                        </div>
                    )
                })}
            </div>
            

        </div>);
}
export default function Skills() {
    return (
        <>
            <Title title="Skills" />
            {/* {data} */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.map((expertise: object, index: number) => {
                    return < SkillDiv expertise={expertise} key={index} />
                })}
            </div>

        </>
    );
}