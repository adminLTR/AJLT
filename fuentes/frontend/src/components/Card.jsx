
export default function Card({children, maxHeight=null, title="", scrollable=false, className=""}) {
    return <div className={`bg-white rounded-2xl p-4 ${className} ${scrollable ? 'overflow-scroll scroll-hide' : ''}`} 
    style={{maxHeight: maxHeight ?? 'fit-content'}}>
        <h3 className="text-black text-2xl">{title}</h3>
        {children}
    </div>
}