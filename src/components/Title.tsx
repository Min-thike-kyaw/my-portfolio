import '../css/title.css';
export default function Title(props : any) {

    return (<>
        <div className="title mb-6">
            <h1>{props.title}</h1>
        </div>
    </>);
}
