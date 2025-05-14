import React from 'react'

const Sponsor = () => {
    const data = [
        {
            img: '/images/logo1.png',
            color: '#ececec'
        },
        {
            img: '/images/logo2.png',
            color: 'black'
        },
        {
            img: '/images/logo3.png',
            color: '#ececec'
        },
        {
            img: '/images/logo4.png',
            color: 'black'
        },
        {
            img: '/images/logo5.png',
            color: '#ececec'
        },
        {
            img: '/images/logo6.png',
            color: 'black'
        },
        {
            img: '/images/logo7.png',
            color: '#ececec'
        },
        {
            img: '/images/logo8.png',
            color: '#ececec'
        },
    ];

 
    return (
        <section className="my-18 text-center">
            <h1 className="text-[#252525] text-4xl font-black">Our Sponsor</h1>
            <div className="mt-8 mb-18 flex w-full gap-[10px] [&::-webkit-scrollbar]:hidden overflow-x-auto px-4">
                {data.map((item, index) =>  {
                    return <div key={index} className="px-4 py-2 lg:px-32 lg:py-12 mr-6 flex rounded-[20px] min-w-[30%] " style={{ backgroundColor: item.color }}>
                       <img 
                            src={item.img}
                            alt={`Sponsor logo ${index + 1}`}
                            className="z-10 object-contain  "
                            />

                    </div>
})}
            </div>
        </section>
    );
}

export default Sponsor;
