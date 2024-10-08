import AboutImg from '../about.png';

export default function About () {
    const config  = {
        line1: 'Hi, My name is Veeramanikandan. I am a Full stack web developer, Mobile App developer.',
        line2: 'Frontend: React.js, HTML, CSS.',
        line3: 'Frameworks: Django, Flutter.',
        line4: 'Programming Languages: Python, Java, Dart, JavaScript.',
        line5: 'Database: SQL, MongoDB',
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
                <p className='pb-5'>{config.line4}</p>
                <p className='pb-5'>{config.line5}</p>
            </div>
        </div>
    </section>
}
