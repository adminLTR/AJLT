
export default function Card({children, title, className=""}) {
    return <div className={`card p-4 m-4 ${className}`}>
        <h3 className="text-black text-2xl">{title}</h3>
        {children}
    </div>
}