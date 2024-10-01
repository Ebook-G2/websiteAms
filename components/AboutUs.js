import React from 'react'

function AboutUs() {
  const about =[
    { src: '/assets/svg/automation.svg', alt: '1', title: 'Automated Content Creation', content:'Use AI to automate the video content creation process, from ideation, scripting to editing and finishing.'},
    { src: '/assets/svg/automatic.svg', alt: '2', title: 'AI-generated Images and Graphics' , content:'Create images and graphics automatically, making videos and media products more eye-catching and professional.'},
    { src: '/assets/svg/social-media.svg', alt: '3', title: 'AI-powered Social Media Management' , content:'Manage and automatically post videos to social media platforms, optimize posting time and engage with audiences.'},
    { src: '/assets/svg/seo-optimization.svg', alt: '4', title: 'SEO Optimization' , content:'Use AI to optimize keywords, titles and descriptions to increase video visibility on YouTube and search platforms.'},
    { src: '/assets/svg/data-analytics.svg', alt: '5', title: 'Data Analytics' , content:'Analyze video performance data and user behavior to adjust and optimize communication strategies.'}  
  ];
  const work =[
    { src: '/assets/svg/handshake.svg', alt: '1', title: 'Requests From Customers', content:'Gather information about client goals and requirements. Analyze target audience and content purpose.'},
    { src: '/assets/svg/brainstorming.svg', alt: '2', title: 'Research and Ideate' , content:'Research the market, competitors and trends. Propose preliminary ideas for titles, topics and content structure.'},
    { src: '/assets/svg/discussion.svg', alt: '3', title: 'Conceptualize and Refine' , content:'Present and discuss ideas with client, get feedback and make adjustments to reach consensus.'},
    { src: '/assets/svg/video.svg', alt: '4', title: 'Content Production' , content:'Write rough content, then edit and proofread thoroughly before sending to client for approval.'},
    { src: '/assets/svg/feedback.svg', alt: '5', title: 'Client Feedback' , content:'Send drafts to client, get feedback and make final edits.'},
    { src: '/assets/svg/deliver.svg', alt: '6', title: 'Finish and Deliver' , content:'Do final quality checks and deliver completed content in required format.'},
    { src: '/assets/svg/support.svg', alt: '7', title: 'Post-Project Support' , content:'Monitor performance and be available to support clients after content is used.'}  
  ];
  return (
    <div className='flex flex-col custom-shadow'>
    <div className="flex flex-col relative w-full bg-[url('/assets/img/about1.jpg')] bg-cover bg-center items-center justify-center text-white text pb-20">
    <div className="absolute inset-0 bg-[#491caa] opacity-70"></div>
    <div className="relative z-10 mb-4 w-10/12 pt-7">
      <h1 className="w-10/12 font-bold text-4xl text-center mx-auto max-sm:text-xl max-lg:text-2xl">Automate Video Content With AI</h1>
    </div>
    <div className='flex flex-row gap-20 w-10/12 z-10 text-xl pt-6 max-sm:flex-wrap max-lg:flex-wrap'>
      <div className='flex flex-col w-1/2 max-sm:w-full max-lg:w-full'> 
      <h2 className="uppercase font-semibold py-4 text-2xl max-sm:text-lg max-lg:text-xl">What we do</h2>
      <div className="w-60 h-[5px] bg-[#144189] mb-10 max-sm:w-40 max-lg:w-40"></div>
        <section className='max-sm:text-base'>
         <p className='text-justify'>
          <span className='font-semibold'>Automate Video Content With AI </span>
          AMS is a pioneer in using AI to create and manage video content on platforms such as YouTube, 
          TikTok, Facebook, Instagram,.v.v.. With<span className='font-semibold'> Automated Content Creation </span>technology, 
          AMS automates the entire video production process, 
          from ideas, scripts to finished products, ensuring quality and optimizing time.
          <span className='font-semibold'>AI-generated Images and Graphics </span>helps create unique images and graphics, increasing the appeal of videos. In addition, 
          AMS's <span className='font-semibold'> AI-powered Social Media Management </span>automatically posts, analyzes and optimizes 
          communication strategies based on user behavior.
          To ensure content reaches the right audience, AMS uses <span className='font-semibold'>SEO Optimization </span> and <span className='font-semibold'>Data Analytics</span>, optimizes keywords and measures 
          video performance. All of these help businesses increase interactions and maximize communication effectiveness on social networks.
        </p>
        </section>
        {about.map((about , index) => (
        <section className='pt-6 flex items-center' key={index}>
        <img
            src={about.src}
            alt={about.alt}
            className="w-10 h-10 mx-3"
            width={10}
            height={10}
          />
          <p className='font-semibold pl-6 max-sm:text-base max-lg:text-lg'>{about.title} - <span className='font-medium max-sm:text-base'>{about.content}</span></p>
        </section> 
        ))} 
      </div>
      <div className='flex flex-col w-1/2 max-sm:w-full max-lg:w-full'> 
      <h2 className="uppercase font-semibold py-4 text-2xl max-sm:text-xl max-lg:text-xl">Workflow</h2>
      <div className="w-60 h-[5px] bg-[#144189] mb-10 max-sm:w-40 max-lg:w-40"></div>
        {work.map((work , index) => (
        <section className='' key={index}> 
        <div className='flex flex-row items-center relative'>
          <div className="w-24 h-24 flex items-center justify-center bg-blue-500 hover:bg-pink-500 transition-colors duration-300 rounded-full flex-shrink-0 max-sm:w-20 max-sm:h-20">
            <img
              src={work.src}
              alt={work.alt}
              className="w-16 h-16 object-cover rounded-full max-sm:w-12 max-sm:h-12"
              width={100}
              height={100}
            />
          </div>
          <div className='font-semibold pl-8 items-center justify-center text-xl max-sm:text-base'>{work.title}</div>
        </div>
        <div className='font-medium pl-32 2xl:mt-0 -mt-3 max-sm:text-base max-sm:pl-28'>{work.content}</div>

      </section>
        ))} 
      </div>
    </div>
  </div> 
</div>
  )
}

export default AboutUs