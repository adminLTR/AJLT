import GeneralServiceImg from "../assets/classes.jpg"

export default function PendingService({
    imgService,
    typeService,
    timeRemaining,
    workerName,
    topics,
}) { 
    return <div className="flex gap-3 border-b border-gray-200 py-3"> 
        <div className="md:flex w-1/3 hidden">
            <img src={imgService ?? GeneralServiceImg} alt="Service" 
            className="h-full w-full block"/>
        </div>
        <div className="w-full md:w-2/3 flex flex-col justify-between">
            <div className="flex justify-end items-center text-xs">
                <p>{timeRemaining}&nbsp;</p> 
                <i className="fa-regular fa-clock"></i> 
            </div> 
            <div className="flex-grow"> 
                <h3 className="text-lg leading-3">{typeService}</h3> 
                <h4 className="text-sm">{workerName}</h4> 
            </div> 
            <div className="flex gap-2 flex-wrap"> 
                {/* {topics.map(topic=><span key={topic}>{topic}&nbsp;&nbsp;&nbsp;</span> )} */}
                <i className="fa-brands fa-bootstrap"></i>
                <i className="fa-brands fa-css3-alt"></i>
                <i className="fa-brands fa-python"></i>
            </div>
        </div> 
  </div>
}  