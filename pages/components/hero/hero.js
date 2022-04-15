import Image from 'next/image'

// import marina from 'marina.png'


export default function Hero() {
    return(
        <div className='flex flex-col mt-12 xl:mt-28 w-11/12 max-w-[1000px] xl:space-x-32 xl:content-between  justify-center items-center xl:flex-row'>
            <img  layout='responsive'  placeholder='blur'  src={"marina.png"} alt='marina-portrait' />
            <div className='flex flex-col'>
                <h2 className='mt-[1em] xl:mt-0 text-center text-[2.6em] font-[800] text-white tracking-[.3em] xl:tracking-[.2em] font-serif xl:text-8xl xl:leading-snug'>            
                    Marina Salvucci
                </h2>
                <div className='flex items-center justify-center' >
                    <h2 className='relative items-center mt-5 z-10 text-[1.6em] xl:font-[500] xl:text-[2em] text-center tracking-[.2em] font-serif text-white '>
                    <div className='relative top-7 xl:top-9 -left-1 w-[300px] xl:w-[330px] h-3 bg-[#03254E] -z-10'/>
                        web developer
                    </h2>
                </div>
            </div>
        </div>
    )
}