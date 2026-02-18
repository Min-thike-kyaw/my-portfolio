import data from '../config/services.json';
import Title from './Title';
import  '../css/card.css'
function SerivceDiv(props: any) {
    return (
        <div className='block card'>
            <div className='p-10'>
                <div className="mb-1 text-2xl font-medium text-secondary">{props.service.name}</div>
                {/* <p>{JSON.stringify(props.service.skills)}</p> */}
                <span className='leading-relaxed tracking-wide'>
                    {props.service.description}
                </span>
            </div>
            

        </div>);
}
export default function Services() {
    return (
        <>
            <Title title="Services" />
            {/* {data} */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((service: object, index: number) => {
                    return <SerivceDiv service={service} key={index} />
                })}
            </div>

        </>
    );
}