import img1 from './assets/bgp-1.png'
import { BsFacebook, BsInstagram, BsPlus, BsTwitter } from 'react-icons/bs'
import Lottie from 'lottie-react'
import line from './assets/line.png'
import circle from './assets/circle.png'
import ec from './assets/ec.svg'

import cubes from './assets/spin.json'
import cube2 from './assets/cube-2.json'

import stats from './assets/u.json'
import { ImPencil2 } from 'react-icons/im'
import { BsFillChatLeftTextFill, BsImageFill, BsCameraVideoFill } from 'react-icons/bs'
import { RiKakaoTalkFill } from 'react-icons/ri'

import { useEffect, useState } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

const applications = [
  {
    id: 1,
    name: 'Welcome Email',
    content:
      'Our AI-powered welcome email service creates personalized, engaging messages to enhance customer onboarding and retention for businesses.',
  },
  {
    id: 2,
    name: 'Amazon Product Description',
    content:
      'Generate Amazon product description service generates compelling and SEO-friendly descriptions that increase visibility and sales for sellers on the platform.',
  },
  {
    id: 3,
    name: 'Blog Caption',
    content:
      'Generate blog caption service creates catchy and relevant titles that improve the click-through rate and engagement of blog posts for content creators.',
  },
  {
    id: 4,
    name: 'Instagram Hashtags',
    content:
      'Our instagram hashtag service suggests optimized hashtags for posts that improve discoverability and engagement for businesses and influencers on the platform.',
  },
  {
    id: 5,
    name: 'Follow-up Emails',
    content:
      'Personalized follow-up email service automates emails to increase response rates and improve customer engagement for businesses.',
  },
  {
    id: 6,
    name: 'Facebook Ads',
    content:
      'Our AI-powered Facebook Ads service optimizes ad targeting, messaging, and creative to increase ROI and conversions for businesses on the platform.',
  },
]

const roadmap = [
  {
    id: 1,
    title: 'Platform Development',
    content: [
      'Develop and deploy the core content creation system using GPT-3 or a similar language model to generate AI prompts for various types of content.',
      'Integrate the system with the Arbitrum Layer2 blockchain to ensure security, scalability, and low transaction costs.',
      'Develop a point system that enables users to purchase points with BGPT tokens and use them to generate AI prompts.',
      'Implement a reward system for token holders to encourage participation in the platform.',
      // 'Develop creative tools for automatically generating different types of content such as videos, music, art, and more.',
    ],
  },
  {
    id: 2,
    title: 'Blockchain Integration',
    content: [
      "Integrate with other blockchain projects and chains such as Ethereum, Polkadot, and Binance Smart Chain to leverage their functionality and expand the platform's reach.",
      'Develop cross-chain functionality that enables users to use their BGPT tokens across different blockchains.',
    ],
  },
  {
    id: 3,
    title: 'Governance and Community Building',
    content: [
      'Implement a governance system that enables token holders to vote on different aspects of the project such as feature development, token economics, and more.',
      ' Build a community around the platform by engaging with users, hosting events, and creating educational resources.',
      "Expand the platform's functionality by partnering with other projects and integrating new AI technologies.",
    ],
  },
  {
    id: 4,
    title: 'Scaling and Growth',
    content: [
      'Explore scaling solutions such as sharding, sidechains, or state channels to ensure the platform can handle a large volume of transactions.',
      "Expand the platform's user base by marketing to creatives, entrepreneurs, and developers who are interested in AI content creation.",
      "Continuously improve the platform's AI capabilities by integrating new models and technologies.",
    ],
  },
]

const interactivity = {
  mode: 'scroll',
  actions: [
    {
      visibility: [0, 1],
      type: 'seek',
      frames: [0, 121],
    },
  ],
}

function App() {
  const [activeApplication, setActiveApplication] = useState(0)

  const handleActiveApplication = (id) => {
    setActiveApplication(id)
  }

  useEffect(() => {
    AOS.init({
      // duration: 120,
    })
  }, [])

  return (
    <div className='App'>
      <section className='h-[400px] lg:min-h-[652px] bg-gradient-to-b from-[#641F27] to-[#121212] relative overflow-hidden'>
        <div className=''>
          <div className='absolute -left-40 2xl:-left-20 md:-top-32 2xl:-top-40'>
            <Lottie
              animationData={cubes}
              className='mx-auto w-full h-full lg:scale-105 2xl:scale-150'
            />
            {/* <video playsInline autoPlay muted loop>
            <source src={bgVideo} type='video/mp4' />
          </video> */}
          </div>
          <div
            data-aos='fade-left'
            data-aos-once='false'
            data-aos-offset='200'
            data-aos-duration='1000'
            className='px-4 absolute md:right-20 bottom-12 md:max-w-sm md:text-right'
          >
            <h2 className='text-white font-sulphur uppercase font-bold text-xl'>BasedGPT</h2>
            <p className='mt-2 text-gray-300 lg:text-xl'>
              Based AI content creation project. It allows users to use their BGPT token to buy
              points and generate AI prompts with the help of these points.
            </p>
          </div>
        </div>
        <header className='px-4 lg:px-20 py-4 relative z-10'>
          <nav className='flex justify-between items-center'>
            <div className='text-white font-semibold'>BasedGPT</div>
            <div className='hidden md:flex space-x-4'>
              <div className='text-white hover:text-gray-200 cursor-pointer tracking-wide'>
                Services
              </div>
              <div className='text-white hover:text-gray-200 cursor-pointer tracking-wide'>
                Benefits
              </div>
              <div className='text-white hover:text-gray-200 cursor-pointer tracking-wide'>
                About
              </div>
              <div className='text-white hover:text-gray-200 cursor-pointer tracking-wide'>
                Tokenomics
              </div>
              <div className='text-white hover:text-gray-200 cursor-pointer tracking-wide'>
                Roadmap
              </div>
              <div className='text-white hover:text-gray-200 cursor-pointer tracking-wide'>
                Usecases
              </div>
            </div>
          </nav>
        </header>
        <div></div>
      </section>
      <div className='pt-20 px-4 lg:px-20 pb-40 relative z-10 bg-gradient-to-b from-[#121212]'>
        <div className='grid grid-cols-12 gap-8 items-center border-b border-gray-300 border-dashed pb-10 '>
          <div className='col-span-12 md:col-span-8'>
            <div
              data-aos='fade-right'
              data-aos-once='false'
              data-aos-offset='200'
              data-aos-duration='1000'
              className=' text-white text-2xl lg:text-3xl 2xl:text-5xl lg:!leading-[50px] 2xl:!leading-[60px]'
            >
              BasedGPT is a Arbitrum Layer-2 that lets you generate any form of AI prompt and share
              reward from revenue generated by the BasedAI
            </div>
            <p className='mt-4 text-gray-300 text-md lg:max-w-xs'>
              Every AI-generated content is an automatic income in your pocket.
            </p>
          </div>
          <div className='col-span-12 md:col-span-2'>
            <button className='outline-none px-6 py-2.5 rounded-full w-full border border-white text-white text-lg hover:bg-white hover:text-black transition ease-linear duration-200'>
              Start Now
            </button>
          </div>
        </div>
        <div className='mt-40'>
          <div className='grid grid-cols-12 gap-8'>
            <div className='col-span-12 md:col-span-8'>
              <img
                data-aos='zoom-in'
                data-aos-once='false'
                data-aos-offset='200'
                data-aos-duration='1000'
                src={img1}
                alt=''
              />
            </div>
            <div className='col-span-12 md:col-span-3'>
              <div className='flex space-x-4 mb-4'>
                <div className='border border-white rounded-full w-12 h-12 flex items-center justify-center'>
                  <BsTwitter className='text-white text-xl' />
                </div>
                <div className='border border-white rounded-full w-12 h-12 flex items-center justify-center'>
                  <BsFacebook className='text-white text-xl' />
                </div>
                <div className='border border-white rounded-full w-12 h-12 flex items-center justify-center'>
                  <BsInstagram className='text-white text-xl' />
                </div>
              </div>
              <div className='text-sm xl:text-2xl text-white xl:leading-8'>
                Be on the frontline of the BasedGPT real-yield reward mechanism with your staking
                power.
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='bg-white py-20 px-4 lg:px-20'>
        <small
          className='uppercase text-gray-500 text-sm
        '
        >
          Our Services
        </small>
        <h2 className='text-5xl lg:text-8xl text-black font-bold mb-10 font-sulphur uppercase tracking-wide'>
          Services
        </h2>
        <div className='max-w-screen-2xl mx-auto'>
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-12 lg:col-span-3'>
              <div
                data-aos='fade-right'
                data-aos-once='false'
                data-aos-offset='200'
                data-aos-duration='1000'
                className='rounded-2xl border border-gray-300 p-5 lg:p-10 2xl:p-16 h-full'
              >
                <div className='border border-gray-200 bg-teal-200 p-3 h-12 w-12 rounded-lg flex justify-center items-center mb-5'>
                  <ImPencil2 className='text-teal-700' />
                </div>
                <h2 className='text-lg lg:text-2xl font-sulphur font-bold text-black uppercase'>
                  Content Creation
                </h2>
                <p className='mt-4 text-md lg:text-lg 2xl:text-xl text-gray-600'>
                  Create high-quality, original content with ease. Our AI-powered content creation
                  service helps businesses save time and maintain a consistent brand voice.
                </p>
              </div>
            </div>
            <div className='col-span-12 lg:col-span-9'>
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <div
                  data-aos='fade-down'
                  data-aos-once='false'
                  data-aos-offset='200'
                  data-aos-duration='1000'
                  className='rounded-2xl border border-gray-300 p-5 lg:p-10 2xl:p-16 h-full'
                >
                  <div className='border border-gray-200 bg-red-200 p-3 h-12 w-12 rounded-lg flex justify-center items-center mb-5'>
                    <BsFillChatLeftTextFill className='text-red-700' />
                  </div>
                  <h2 className='text-lg lg:text-2xl font-sulphur font-bold text-black uppercase'>
                    Text to speech
                  </h2>
                  <p className='mt-4 text-md lg:text-lg 2xl:text-xl text-gray-600'>
                    Our AI-powered text to speech service converts written text into
                    natural-sounding speech, enabling accessibility and enhancing user experiences
                    across platforms.
                  </p>
                </div>
                <div
                  data-aos='fade-down'
                  data-aos-once='false'
                  data-aos-offset='200'
                  data-aos-duration='1000'
                  data-aos-delay='100'
                  className='rounded-2xl border border-gray-300 p-5 lg:p-10 2xl:p-16 h-full'
                >
                  <div className='border border-gray-200 bg-emerald-200 p-3 h-12 w-12 rounded-lg flex justify-center items-center mb-5'>
                    <RiKakaoTalkFill className='text-emerald-700 text-2xl' />
                  </div>
                  <h2 className='text-lg lg:text-2xl font-sulphur font-bold text-black uppercase'>
                    Speech to text
                  </h2>
                  <p className='mt-4 text-md lg:text-lg 2xl:text-xl text-gray-600'>
                    Our AI-powered speech-to-text service accurately transcribes audio and video
                    recordings, providing a time-efficient solution for businesses and individuals.
                  </p>
                </div>
                <div
                  data-aos='fade-down'
                  data-aos-once='false'
                  data-aos-offset='200'
                  data-aos-duration='1000'
                  data-aos-delay='150'
                  className='rounded-2xl border border-gray-300 p-5 lg:p-10 2xl:p-16 h-full'
                >
                  <div className='border border-gray-200 bg-yellow-200 p-3 h-12 w-12 rounded-lg flex justify-center items-center mb-5'>
                    <BsImageFill className='text-yellow-700 text-2xl' />
                  </div>
                  <h2 className='text-lg lg:text-2xl font-sulphur font-bold text-black uppercase'>
                    Text to image
                  </h2>
                  <p className='mt-4 text-md lg:text-lg 2xl:text-xl text-gray-600'>
                    Our AI-powered text-to-image service generates realistic and high-quality images
                    based on textual input, providing a new way to create visual content.
                  </p>
                </div>
              </div>
              <div
                data-aos='fade-left'
                data-aos-once='false'
                data-aos-offset='200'
                data-aos-duration='1000'
                className='rounded-2xl border border-gray-300 p-5 lg:p-10 2xl:p-16 mt-4'
              >
                <div className='border border-gray-200 bg-blue-200 p-3 h-12 w-12 rounded-lg flex justify-center items-center mb-5'>
                  <BsCameraVideoFill className='text-blue-700 text-2xl' />
                </div>
                <h2 className='text-lg lg:text-2xl font-sulphur font-bold text-black uppercase'>
                  Text to video
                </h2>
                <p className='mt-4 text-md lg:text-lg 2xl:text-xl text-gray-600'>
                  Our AI-powered text to video service creates engaging and dynamic videos by
                  converting text content into visually appealing animations and graphics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits */}
      <section className='py-20 lg:py-40 px-4 lg:px-32 relative'>
        <div className='relative'>
          <h2
            data-aos='fade-left'
            data-aos-once='false'
            data-aos-offset='200'
            data-aos-duration='1000'
            className='text-5xl lg:text-8xl text-white font-bold mb-10 font-sulphur uppercase tracking-wide z-10'
          >
            BasedGPT Powerful <br /> <span className='text-red-1000'>Benefits</span>
          </h2>
          <div className='mx-auto max-w-screen-xl relative z-10'>
            <div className='grid grid-cols-12 gap-8 mt-10 items-end'>
              <div className='col-span-12 md:col-span-7 xl:p-5'>
                <div
                  data-aos='zoom-in-right'
                  data-aos-once='false'
                  data-aos-offset='200'
                  data-aos-duration='1000'
                  className='rounded-2xl p-5 lg:p-10 bg-white'
                >
                  <h3 className='text-4xl lg:text-7xl font-bold text-gray-700'>
                    Latest AI Technology
                  </h3>
                  <p className='mt-10 text-xl text-gray-600'>
                    The latest AI technology enables BasedGPT to generate more compelling and
                    personalized content than ever before, allowing users to create content that is
                    powerful, interactive, and engaging
                  </p>
                </div>
              </div>
              <div className='col-span-12 md:col-span-5 xl:p-5'>
                <div
                  data-aos='zoom-in-left'
                  data-aos-once='false'
                  data-aos-offset='200'
                  data-aos-duration='1000'
                  className='rounded-2xl p-5 lg:p-10 bg-[#641F27]'
                >
                  <h3 className='text-4xl font-bold text-white'>Easily Edit AI Text </h3>
                  <p className='mt-10 text-xl text-gray-200'>
                    With BasedGPT, it is now easier than ever to edit AI text quickly and
                    accurately, enabling users to create unique content in a fraction of the time.
                  </p>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-12 gap-8 mt-10 items-start'>
              <div className='col-span-12 md:col-span-5 xl:p-5'>
                <div
                  data-aos='zoom-in-right'
                  data-aos-once='false'
                  data-aos-offset='200'
                  data-aos-duration='1000'
                  className='rounded-2xl p-5 lg:p-10 bg-[#641F27]'
                >
                  <h3 className='text-4xl font-bold text-white'>
                    Export Text Results in PDF & Word
                  </h3>
                  <p className='mt-10 text-xl text-gray-200'>
                    BasedGPT provides an efficient way to export project results in both PDF and
                    Word formats, with the convenience of keeping a digital copy of your project
                    results
                  </p>
                </div>
              </div>
              <div className='col-span-12 md:col-span-7 xl:p-5'>
                <div
                  data-aos='zoom-in-left'
                  data-aos-once='false'
                  data-aos-offset='200'
                  data-aos-duration='1000'
                  className='rounded-2xl p-5 lg:p-10 bg-white'
                >
                  <h3 className='text-4xl lg:text-7xl font-bold text-gray-700'>
                    More than +25 Languages
                  </h3>
                  <p className='mt-10 text-xl text-gray-600'>
                    BasedGPT supports more than 25 AI languages, allowing it to be used in a wide
                    range of applications and contexts. This makes it an ideal choice for developers
                    and businesses looking for a powerful AI platform with language flexibility
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img src={circle} className='hidden xl:flex absolute top-0 right-0 spin' alt='circle' />
          {/* <img
            src={line}
            className='hidden xl:flex absolute top-[150px] right-[150px] opacity-60'
            alt='circle'
          /> */}
        </div>
        <img src={ec} className='absolute left-0 top-[55rem] hidden lg:flex' alt='eclipse' />
        <div className='mt-20 lg:mt-40'>
          <h2
            data-aos='fade-right'
            data-aos-once='false'
            data-aos-offset='200'
            data-aos-duration='1000'
            className='text-5xl lg:text-8xl text-white font-bold mb-10 font-sulphur uppercase tracking-wide'
          >
            Applications
          </h2>
          <div className='py-20 border-t border-b border-gray-800'>
            <div className='grid grid-cols-12 gap-8 items-center'>
              <div className='col-span-12 md:col-span-4'>
                <ul className='w-full'>
                  {applications.map((item, index) => (
                    <li
                      className={`flex justify-between items-center text-2xl border-b border-gray-800 py-5 hover:text-[#b53a48] transition duration-150 ease-in cursor-pointer group ${
                        activeApplication === index ? 'text-[#b53a48]' : 'text-gray-500'
                      }`}
                      onClick={() => handleActiveApplication(index)}
                      key={item.id}
                    >
                      <span className=''>{item.name}</span>
                      <span>
                        <BsPlus className='text-2xl' />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='col-span-12 md:col-span-8'>
                <div className='lg:p-5 mx-auto max-w-3xl'>
                  <h2 className='text-xl lg:text-7xl font-semibold text-white tracking-wide max-w-xl'>
                    {applications[activeApplication].name}
                  </h2>
                  <p className='mt-5 text-2xl text-gray-300'>
                    {applications[activeApplication].content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Roadmap */}
      <section className='py-12 lg:py-40 bg-white 2xl:px-4'>
        <div className='px-4 lg:px-32'>
          <small
            className='uppercase text-gray-500 text-sm
        '
          >
            Timeline
          </small>
          <h2
            data-aos='fade-right'
            data-aos-once='false'
            data-aos-offset='200'
            data-aos-duration='1000'
            className='text-5xl lg:text-8xl text-black font-bold mb-10 font-sulphur uppercase tracking-wide'
          >
            Roadmap
          </h2>
        </div>
        <div className='mt-20 p-4 border border-gray-200 rounded-2xl'>
          <div className='grid grid-cols-12'>
            <div className='col-span-12 xl:col-span-2 flex items-center relative'>
              <div className='relative overflow-hidden z-20 rotate-90 lg:rotate-0'>
                <Lottie animationData={cube2} className='mx-auto w-full 2xl:scale-150' />
              </div>
              {/* <span className='w-28 h-[10px] bg-red-1000 flex-shrink-0 absolute right-0'></span> */}
            </div>
            <div className='col-span-12 xl:col-span-10 flex flex-col lg:flex-row'>
              {roadmap.map((item) => (
                <div
                  className='md:h-[500px] p-4 flex flex-col border border-gray-400 rounded-2xl group roadmap ease-transition cursor-pointer'
                  key={item.id}
                >
                  <div className='xl:pt-40 2xl:px-10 md:group-hover:pt-2 md:group-hover:px-5 ease-transition'>
                    <div className='xl:text-4xl 2xl:text-4xl xl:group-hover:text-4xl font-semibold font-sulphur ease-in-out phase flex items-baseline space-x-1'>
                      <span>
                        Phase 0{item.id}
                        <span className='w-2 h-2 rounded-full dot'></span>{' '}
                      </span>{' '}
                    </div>
                    <h2 className='text-lg md:text-xl font-sulphur uppercase font-bold mt-5 title'>
                      {item.title}
                    </h2>
                  </div>
                  {item.content.map((desc) => (
                    <p className='text-sm md:text-2xl xl:text-[5px] lg:group-hover:text-lg 2xl:group-hover:text-2xl mt-2 xl:opacity-0 xl:group-hover:opacity-100 description group-hover:show flex items-start'>
                      <span className='w-[6px] h-[6px] bg-teal-600 flex-shrink-0 mt-2 mr-2 rounded-full'></span>{' '}
                      <span>{desc}</span>
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='mt-40 px-4 lg:px-16 2xl:px-32 max-w-screen-3xl'>
          <h2 className='text-xl font-semibold text-gray-700'>Based GPT TECHNOLOGY</h2>
          <div className='text-2xl lg:text-4xl 2xl:text-6xl font-sulphur font-semibold mt-10'>
            Artificial Intelligence (AI) has a significant impact on our world, with deep and
            far-reaching effects that are transforming the ways we live, work, and communicate with
            each other.
          </div>
        </div>

        <div className='px-4 2xl:px-20'>
          <div className='pt-40 grid grid-cols-12 gap-8'>
            <div className='col-span-12 lg:col-span-5'>
              <div className='flex flex-col justify-between rounded-2xl h-[400px] lg:h-[800px] bg-black p-5 lg:p-10 2xl:p-20'>
                <div className='text-xl lg:text-6xl font-sulphur font-extrabold text-white'>
                  <span className='text-red-1000'>STATISTICS</span> OF BasedGPT IN BUSINESS
                </div>
                <img
                  data-aos='zoom-in'
                  data-aos-once='false'
                  data-aos-offset='200'
                  data-aos-duration='1000'
                  src={img1}
                  alt='stats'
                />
              </div>
            </div>
            <div className='col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='flex flex-col justify-between p-5 lg:p-10 rounded-2xl bg-gradient-to-b from-red-1000 to-black min-h-[250px]'>
                <div className='text-xl lg:text-6xl font-sulphur font-extrabold text-white'>
                  891,456,783
                </div>
                <Lottie
                  animationData={stats}
                  interactivity={interactivity}
                  className='mx-auto w-full h-full'
                />

                <div className='text-xl lg:text-4xl 2xl:text-6xl font-sulphur font-extrabold text-white'>
                  Generated Revenue by <span className='text-red-1000'>BasedGPT</span> Solutions
                </div>
              </div>
              <div className='grid grid-rows-2 gap-8'>
                <div className='bg-red-1000 p-5 lg:p-10 rounded-2xl flex flex-col justify-between min-h-[250px]'>
                  <div className='text-xl lg:text-6xl font-sulphur font-extrabold text-white'>
                    90,178
                  </div>
                  <div className='text-xl lg:text-4xl font-sulphur font-extrabold text-white'>
                    Total Points Consumed with BasedGPT
                  </div>
                </div>
                <div className='bg-white border-2 border-red-1000 p-5 lg:p-10 rounded-2xl flex flex-col justify-between min-h-[250px]'>
                  <div className='text-xl lg:text-6xl font-sulphur font-extrabold text-black'>
                    90,178
                  </div>
                  <div className='text-xl lg:text-4xl font-sulphur font-extrabold'>
                    <span className='text-red-1000'>Total</span> Words Generated with BasedGPT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section className='px-4 lg:px-16 2xl:px-32 py-40'>
        <div className='max-w-screen-2xl'>
          <h2 className='text-sm lg:text-xl font-semibold text-gray-400 uppercase font-sulphur'>
            Token Distribution
          </h2>
          <div className='text-4xl lg:text-4xl 2xl:text-6xl font-sulphur font-semibold mt-5 lg:mt-10 text-white'>
            Tokenomics
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 lg:mt-0 items-center'>
          <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='bg-red-1000 p-5 rounded-lg'>
                <span className='uppercase font-sulphur text-gray-400 font-bold'>Total Supply</span>
                <h2 className='mt-2 text-lg lg:text-2xl 2xl:text-4xl font-bold text-white font-sulphur'>
                  1 Billion BGPT
                </h2>
              </div>
              <div className='border border-gray-500 p-5 rounded-lg'>
                <span className='uppercase font-sulphur text-gray-400 font-bold'>1 Eth</span>
                <h2 className='mt-2 text-lg lg:text-2xl 2xl:text-4xl font-bold text-white font-sulphur'>
                  2,500,000 BGPT
                </h2>
              </div>
            </div>
            <div className='mt-4 grid grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='border border-gray-500 p-4 rounded-lg'>
                <h4 className='uppercase text-gray-400 text-sm'>Presale</h4>
                <h2 className='uppercase text-2xl font-semibold font-sulphur text-white'>50%</h2>
              </div>
              <div className='border border-teal-500 p-4 rounded-lg'>
                <h4 className='uppercase text-gray-400 text-sm'>Liquidity</h4>
                <h2 className='uppercase text-2xl font-semibold font-sulphur text-teal-500'>50%</h2>
              </div>
              <div className='border border-blue-500 p-4 rounded-lg'>
                <h4 className='uppercase text-gray-400 text-sm'>Marketing</h4>
                <h2 className='uppercase text-2xl font-semibold font-sulphur text-blue-500'>50%</h2>
              </div>
              <div className='border border-red-500 p-4 rounded-lg'>
                <h4 className='uppercase text-gray-400 text-sm'>Staking</h4>
                <h2 className='uppercase text-2xl font-semibold font-sulphur text-red-500'>50%</h2>
              </div>
              <div className='border border-purple-500 p-4 rounded-lg'>
                <h4 className='uppercase text-gray-400 text-sm'>Development</h4>
                <h2 className='uppercase text-2xl font-semibold font-sulphur text-purple-500'>
                  50%
                </h2>
              </div>
              <div className='border border-yellow-500 p-4 rounded-lg'>
                <h4 className='uppercase text-gray-400 text-sm'>Team</h4>
                <h2 className='uppercase text-2xl font-semibold font-sulphur text-yellow-500'>
                  50%
                </h2>
              </div>
            </div>
          </div>
          <div className='relative overflow-hidden'>
            <Lottie
              animationData={cubes}
              interactivity={interactivity}
              className='w-full mx-auto scale-150'
            />
          </div>
        </div>
      </section>
      {/* Usecases */}
      <section className='px-4 lg:px-16 2xl:px-32 pb-40'>
        <div className='max-w-screen-2xl'>
          <h2 className='text-xl font-semibold text-gray-400 uppercase font-sulphur'>Usecases</h2>
          <div className='text-4xl lg:text-6xl 2xl:text-6xl font-sulphur font-semibold mt-3 lg:mt-10 text-white'>
            Here are some potential use cases for BasedGPT on blockchain
          </div>
        </div>
        <div className='grid grid-cols-12 gap-8 mt-10 '>
          <div className='col-span-12 md:col-span-6 lg:col-span-5 '>
            <div
              data-aos='zoom-in-right'
              data-aos-once='false'
              data-aos-offset='200'
              data-aos-duration='1000'
              className="rounded-2xl p-5 h-full lg:p-10 bg-red-1000 bg-[url('./assets/bg-b1.png')] bg-cover bg-center bg-no-repeat lg:min-h-[450px] flex flex-col justify-between"
            >
              <div>
                <h2 className='text-lg lg:text-xl font-semibold text-gray-200 uppercase font-sulphur'>
                  Content Creation
                </h2>
                <p className='mt-4 text-white text-xl lg:text-3xl'>
                  BasedGPT allows users to generate various types of content such as videos, music,
                  art, and more, using AI-powered prompts.
                </p>
              </div>
              <button className='px-8 py-3.5 mt-10 lg:mt-0 rounded-full text-black bg-white w-fit font-semibold font-sulphur'>
                View Usecase
              </button>
            </div>
          </div>
          <div className='col-span-12 md:col-span-6 lg:col-span-7 '>
            <div
              data-aos='zoom-in-left'
              data-aos-once='false'
              data-aos-offset='200'
              data-aos-duration='1000'
              className="rounded-2xl p-5 h-full lg:p-10 bg-red-1000 bg-[url('./assets/bg-p1.png')] bg-cover bg-center bg-no-repeat lg:min-h-[450px] flex flex-col justify-between"
            >
              <div>
                <h2 className='text-lg lg:text-xl font-semibold text-gray-200 uppercase font-sulphur'>
                  Reward System
                </h2>
                <p className='mt-4 text-white text-xl lg:text-3xl'>
                  BasedGPT has a reward system for token holders who contribute to the platform.
                  This incentivizes participation and can encourage users to create high-quality
                  content to earn rewards
                </p>
              </div>
              <button className='px-8 py-3.5 mt-10 lg:mt-0 rounded-full text-black bg-white w-fit font-semibold font-sulphur'>
                View Usecase
              </button>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 gap-8 mt-10 '>
          <div
            data-aos='zoom-in-left'
            data-aos-once='false'
            data-aos-offset='200'
            data-aos-duration='1000'
            className='col-span-12 md:col-span-6 lg:col-span-7 '
          >
            <div className="rounded-2xl p-5 h-full lg:p-10 bg-red-1000 bg-[url('./assets/bg-p2.png')] bg-cover bg-center bg-no-repeat lg:min-h-[450px] flex flex-col justify-between">
              <div>
                <h2 className='text-lg lg:text-xl font-semibold text-gray-200 uppercase font-sulphur'>
                  Token Economy
                </h2>
                <p className='mt-4 text-white text-xl lg:text-3xl'>
                  The BGPT token is used to purchase points on the platform, which can be used to
                  generate AI prompts. The token economy can create a new market for content
                  creation and provide a way for content creators to monetize their work.
                </p>
              </div>
              <button className='px-8 py-3.5 mt-10 lg:mt-0 rounded-full text-black bg-white w-fit font-semibold font-sulphur'>
                View Usecase
              </button>
            </div>
          </div>
          <div className='col-span-12 md:col-span-6 lg:col-span-5 '>
            <div
              data-aos='zoom-in-right'
              data-aos-once='false'
              data-aos-offset='200'
              data-aos-duration='1000'
              className="rounded-2xl p-5 h-full lg:p-10 bg-black bg-[url('./assets/bg-b2.png')] bg-cover bg-center bg-no-repeat lg:min-h-[450px] flex flex-col justify-between"
            >
              <div>
                <h2 className='text-lg lg:text-xl font-semibold text-gray-200 uppercase font-sulphur'>
                  Security
                </h2>
                <p className='mt-4 text-white text-xl lg:text-3xl'>
                  BasedGPT utilizes blockchain technology to ensure the security of the platform.
                  This can be beneficial for content creators who want to protect their intellectual
                  property.
                </p>
              </div>
              <button className='px-8 py-3.5 mt-10 lg:mt-0 rounded-full text-black bg-white w-fit font-semibold font-sulphur'>
                View Usecase
              </button>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 mt-10'>
          <div className='col-span-12 lg:col-span-12'>
            <div
              data-aos='zoom-in-right'
              data-aos-once='false'
              data-aos-offset='200'
              data-aos-duration='1000'
              className='rounded-2xl p-5 lg:p-10 bg-black bg-cover bg-center bg-no-repeat max-h-[450px] flex flex-col justify-between'
            >
              <div>
                <h2 className='text-lg lg:text-xl font-semibold text-gray-200 uppercase font-sulphur'>
                  Governance
                </h2>
                <p className='mt-4 text-white text-xl lg:text-3xl'>
                  The token holders have a say in the direction of the project and can vote on
                  various aspects of the platform. This allows the community to shape the future of
                  the project and provides a democratic way to manage the platform.
                </p>
              </div>
              <button className='px-8 py-3.5 mt-10 rounded-full text-black bg-white w-fit font-semibold font-sulphur'>
                View Usecase
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
