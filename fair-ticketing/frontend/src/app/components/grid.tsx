'use client'

export default function Grid(props:any){
    let data=[
        { id: 1, name: 'Concert A', date: '2023-07-15', price: '0.5 SOL' ,img:'',desc:''},
        { id: 2, name: 'Festival B', date: '2023-08-20', price: '1.2 SOL',img:'' ,desc:''},
        { id: 3, name: 'Theater Show C', date: '2023-09-05', price: '0.8 SOL',img:'', desc:''},
        { id: 4, name: 'Sports Event D', date: '2023-10-10', price: '2.0 SOL',img:'' ,desc:'' },
]

    return(
        <>
        <div className='py-10'>
            <div className={`text-black dark:text-white text-6xl font-bold px-10 py-10`}>
                Events
            </div>
            <div className="grid grid-cols-3 gap-4  items-center px-10 justify-between w-full">
            {data.map((data:any) =>(
                <>
                    <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        <div
                            className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                            <div className="p-4 sm:p-6">
                                <time dateTime="2022-10-10" className="block text-xs text-white/90"> {data.date}
                                </time>

                                <a href="#">
                                    <h3 className="mt-0.5 text-lg text-white">{data.name}</h3>
                                </a>

                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores,
                                    possimus
                                    pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet
                                    corporis
                                    quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa
                                    eius
                                    atque dignissimos. Molestias explicabo corporis voluptatem?
                                </p>
                            </div>
                        </div>
                    </article>
                </>
            ))}
            </div>
                </div>

            </>
    )
}