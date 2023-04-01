import img1 from './assets/bgp-1.png'
import { BsFacebook, BsInstagram, BsPlus, BsTwitter } from 'react-icons/bs'
import Lottie from 'lottie-react'
import animation1 from './assets/shape.json'
import writing from './assets/writing.json'
import speech from './assets/speech.json'
import speechText from './assets/listening.json'
import TextToImages from './assets/images.json'
import TextToVideo from './assets/video.json'
import line from './assets/line.png'
import circle from './assets/circle.png'
import cubes from './assets/spin.json'

import { useState } from 'react'

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

function App() {
  const [activeApplication, setActiveApplication] = useState(0)

  const handleActiveApplication = (id) => {
    setActiveApplication(id)
  }

  return (
    <div className='App'>
      <section className='h-[400px] md:min-h-[652px] bg-[#641F27]'>
        <div className='absolute 2xl:-top-32'>
          <Lottie animationData={cubes} className='mx-auto w-full scale-150' />
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
      <div className='pt-20 px-4 lg:px-20 pb-40 relative z-10 bg-[#121212]'>
        <div className='grid grid-cols-12 gap-8 items-center border-b border-gray-300 border-dashed pb-10 '>
          <div className='col-span-12 md:col-span-8'>
            <div className='uppercase text-white text-2xl lg:text-3xl 2xl:text-5xl lg:!leading-[50px] 2xl:!leading-[60px]'>
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
              <img src={img1} alt='' />
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
        <div className='max-w-screen-xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
            <div className='rounded-lg border border-gray-200 p-4 shadow-sm'>
              <div className='w-full h-52 relative overflow-hidden'>
                <Lottie animationData={writing} className='mx-auto w-full h-full scale-150' />
              </div>
              <div className='text-2xl font-bold text-black font-sulphur uppercase mt-4 text-center'>
                Content Creation
              </div>
            </div>
            <div className='rounded-lg border border-gray-200 p-4 shadow-sm'>
              <div className='w-full h-52 relative overflow-hidden'>
                <Lottie animationData={speech} className='mx-auto w-full h-full scale-105' />
              </div>
              <div className='text-2xl font-bold text-black font-sulphur uppercase mt-4 text-center'>
                Text to Speech
              </div>
            </div>
            <div className='rounded-lg border border-gray-200 p-4 shadow-sm'>
              <div className='w-full h-52 relative overflow-hidden'>
                <Lottie animationData={speechText} className='mx-auto w-full h-full scale-105' />
              </div>
              <div className='text-2xl font-bold text-black font-sulphur uppercase mt-4 text-center'>
                Speech to Text
              </div>
            </div>
            <div className='rounded-lg border border-gray-200 p-4 shadow-sm'>
              <div className='w-full h-52 relative overflow-hidden'>
                <Lottie animationData={TextToImages} className='mx-auto w-full h-full scale-150' />
              </div>
              <div className='text-2xl font-bold text-black font-sulphur uppercase mt-4 text-center'>
                Text to Image
              </div>
            </div>
            <div className='rounded-lg border border-gray-200 p-4 shadow-sm'>
              <div className='w-full h-52 relative overflow-hidden'>
                <Lottie animationData={TextToVideo} className='mx-auto w-full h-full scale-125' />
              </div>
              <div className='text-2xl font-bold text-black font-sulphur uppercase mt-4 text-center'>
                Text to Video
              </div>
            </div>
            <div className='rounded-lg border border-gray-400 p-4 shadow-lg h-full flex items-center justify-center bg-gradient-to-b from-[#2c090a] to-black'>
              <div className='text-3xl font-semibold text-center text-white font-macondo'>
                Many More
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-20 lg:py-40 px-4 lg:px-20'>
        <div className='relative'>
          <h2 className='text-5xl lg:text-8xl text-white font-bold mb-10 font-sulphur uppercase tracking-wide z-10'>
            BasedGPT Powerful <br /> <span className='text-red-1000'>Benefits</span>
          </h2>
          <div className='mx-auto max-w-screen-xl relative z-10'>
            <div className='grid grid-cols-12 gap-8 mt-10 items-end'>
              <div className='col-span-12 md:col-span-7 xl:p-5'>
                <div className='rounded-2xl p-5 lg:p-10 bg-white'>
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
                <div className='rounded-2xl p-5 lg:p-10 bg-[#641F27]'>
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
                <div className='rounded-2xl p-5 lg:p-10 bg-[#641F27]'>
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
                <div className='rounded-2xl p-5 lg:p-10 bg-white'>
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
          <img
            src={circle}
            className='hidden xl:flex absolute top-0 right-0 spin opacity-60'
            alt='circle'
          />
          {/* <img
            src={line}
            className='hidden xl:flex absolute top-[150px] right-[150px] opacity-60'
            alt='circle'
          /> */}
        </div>

        <div className='mt-20 lg:mt-40'>
          <h2 className='text-5xl lg:text-8xl text-white font-bold mb-10 font-sulphur uppercase tracking-wide'>
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
      <section className='py-12 lg:py-40 bg-white 2xl:px-4'>
        <div className='px-4 lg:px-20'>
          <small
            className='uppercase text-gray-500 text-sm
        '
          >
            Timeline
          </small>
          <h2 className='text-5xl lg:text-8xl text-black font-bold mb-10 font-sulphur uppercase tracking-wide'>
            Roadmap
          </h2>
        </div>
        <div className='mt-20 p-4 border border-gray-200 rounded-2xl'>
          <div className='grid grid-cols-12'>
            <div className='col-span-12 xl:col-span-2 flex items-center relative'>
              <div className='relative overflow-hidden z-20'>
                <Lottie animationData={cubes} className='mx-auto w-full 2xlscale-150' />
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

        <div className='mt-40 px-4 lg:px-20 max-w-screen-2xl'>
          <h2 className='text-xl font-semibold text-gray-700'>Based GPT TECHNOLOGY</h2>
          <div className='text-2xl lg:text-4xl 2xl:text-6xl font-sulphur font-semibold mt-10'>
            Artificial Intelligence (AI) has a significant impact on our world, with deep and
            far-reaching effects that are transforming the ways we live, work, and communicate with
            each other.
          </div>
        </div>

        <div className='px-4 lg:px-20'>
          <div className='pt-40 grid grid-cols-12 gap-8'>
            <div className='col-span-12 lg:col-span-5'>
              <div className='flex flex-col justify-between rounded-2xl h-[400px] lg:h-[800px] bg-gray-400 p-5 lg:p-10 2xl:p-20'>
                <div className='text-xl lg:text-6xl font-sulphur font-extrabold'>
                  <span className='text-red-1000'>STATISTICS</span> OF BasedGPT IN BUSINESS
                </div>
                <img src={img1} alt='image' />
              </div>
            </div>
            <div className='col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='flex flex-col justify-between p-5 lg:p-10 rounded-2xl bg-gradient-to-b from-red-1000 to-black min-h-[250px]'>
                <div className='text-xl lg:text-6xl font-sulphur font-extrabold text-white'>
                  891,456,783
                </div>
                <div className='text-xl lg:text-6xl font-macondo font-extrabold text-white'>
                  Generated Revenue by <span className='text-red-1000'>BasedGPT</span> Solutions
                </div>
              </div>
              <div className='grid grid-rows-2 gap-8'>
                <div className='bg-red-1000 p-5 lg:p-10 rounded-2xl flex flex-col justify-between min-h-[250px]'>
                  <div className='text-xl lg:text-6xl font-sulphur font-extrabold text-white'>
                    90,178
                  </div>
                  <div className='text-xl lg:text-4xl font-macondo font-extrabold text-white'>
                    Total Points Consumed with BasedGPT
                  </div>
                </div>
                <div className='bg-white border-2 border-red-1000 p-5 lg:p-10 rounded-2xl flex flex-col justify-between min-h-[250px]'>
                  <div className='text-xl lg:text-6xl font-sulphur font-extrabold text-black'>
                    90,178
                  </div>
                  <div className='text-xl lg:text-4xl font-macondo font-extrabold'>
                    <span className='text-red-1000'>Total</span> Words Generated with BasedGPT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
