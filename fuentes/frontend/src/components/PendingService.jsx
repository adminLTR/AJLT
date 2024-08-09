/**
 * 
 * @param {{userImg:string, institutionImg:string, timeRemaining: string, titleService: string, descriptionService: string, workerInCharge: string, topics: Array}} param0 
 */
export default function PendingService({
    serviceImg = null,
    institutionImg = null,
    timeRemaining,
    titleService,
    descriptionService,
    workerInCharge,
    topics,
}) {
    return <div className="flex gap-4 items-center">
        <div className="relative">
            <img width={120} className="rounded-md" src={serviceImg === null ? 'https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg' : serviceImg} alt="user" />
            <img width={30} className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 rounded-full" src={institutionImg === null ? 'https://ieruraldelsurtunja.edu.co/rds-content/uploads/ie_rural_sur_tunja_institucion_icono.png' : institutionImg} alt="Institution"/>
        </div>
        <div className="flex-1 p-2">
            <div className="flex items-center justify-end gap-1">
                <i className="fa-regular fa-clock"></i>
                <p>{timeRemaining} h</p>
            </div>
            <div className="pt-1">
                <p className="bold text-xl">{titleService}</p>
                <p className="">{descriptionService}</p>
                <p>{workerInCharge}</p>
                <p>{topics.map((topic, i) => `${topic}${i!==topics.length-1?', ':''}`)}</p>
            </div>
        </div>
  </div>
}