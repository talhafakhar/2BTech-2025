import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCode, faEye, faMagnifyingGlass, faTrophy} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const panes = [
    {
        bgColor: 'bg-gradient-to-r from-rose-400 via-pink-500 to-red-400',
        icon: faTrophy,
        title: '100% Client Satisfaction Rate',
        numberSVG: '/assets/svg/one.svg',
        subtitle: 'We have satisfied every single client we have worked with, and we look forward to maintaining this success rate throughout our future projects.',
    },
    {
        bgColor: 'bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-400',
        title: 'Client-Focused Approach',
        numberSVG: '/assets/svg/two.svg',
        icon: faEye,
        subtitle: 'We focus on delivering exceptional service, working closely with you to meet your needs and ensure satisfaction with the final product.',
    },
    {
        bgColor: 'bg-gradient-to-r from-green-300 via-teal-400 to-cyan-300',
        title: 'Visibility',
        numberSVG: '/assets/svg/three.svg',
        icon: faMagnifyingGlass,
        subtitle: 'We ensure that your business is visible to your target audience. We use the latest SEO techniques to help you reach the top of search engine results pages.',
    },
    {
        bgColor: 'bg-gradient-to-r from-purple-400 via-violet-500 to-fuchsia-400',
        title: 'Full Stack Team',
        icon: faCode,
        numberSVG: '/assets/svg/four.svg',
        subtitle: 'We have a full stack team that can handle all aspects of your project. From design to development, we have the skills and expertise to bring your vision to life.',
    },
];

export const Pane = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center p-4 lg:flex-row">
            <div className="flex flex-col w-full max-w-4xl lg:flex-row">
                {panes.map((pane, index) => (
                    <div key={index} className={`
                            cursor-pointer flex-grow m-2 min-h-[3.5rem] min-w-[3.5rem] overflow-hidden relative rounded-3xl transition-all duration-700 ease-in-out 
                            ${activeIndex === index ? 'flex-grow-[10] max-w-[200%] h-[280] lg:h-[310] xl:h-[320px]' : ''}
                            ${pane.bgColor}
                        `}
                         onClick={() => setActiveIndex(index)}
                         data-track-name='why_choose_slides'
                         data-track-hover="true"
                         data-track-click="true"
                    >
                        {activeIndex !== index && (
                            <Image
                                src={pane.numberSVG}
                                width={100}
                                height={100}
                                alt={`Number ${index + 1}`}
                                className={`absolute bg-white rounded-full inset-0 m-auto w-12 h-12 z-20 transition-transform duration-700 ease-in-out transform ${
                                    activeIndex === index ? 'scale-0' : 'scale-100'
                                }`}
                            />
                        )}
                        <div
                            className={`absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-black opacity-0 transition-opacity duration-700 ease-in-out  ${activeIndex === index ? 'opacity-75' : ''}`}/>
                        <div
                            className='absolute bottom-0 left-0 m-5 flex items-center transition-all duration-700 ease-in-out z-30'>
                            <div className="flex flex-col text-white">
                                <div
                                    className={`text-4xl  transition-opacity duration-800 ease-in-out transform  ${activeIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                                    <FontAwesomeIcon icon={pane.icon} className='bg-black px-3 py-4 rounded-full'/>
                                </div>
                                <div
                                    className={`font-bold  text-2xl transition-opacity duration-800 ease-in-out transform ${
                                        activeIndex === index
                                            ? 'opacity-100 translate-y-0 scale-100'
                                            : 'opacity-0 translate-y-4 scale-95'
                                    }`}>
                                    {pane.title}
                                </div>
                                <div
                                    className={`transition-all transform p-1 duration-700 ease-in-out ${
                                        activeIndex === index
                                            ? 'opacity-100 translate-y-0 scale-100 rotate-0 skew-y-0 skew-x-0'
                                            : 'opacity-0 translate-y-20 scale-75 rotate-45 skew-y-3 skew-x-3'
                                    }`}
                                >
                                    {pane.subtitle}
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
