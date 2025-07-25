"use client";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const courseDetails = [
    {
        title: 'Module 1: Introduction to Digital Marketing',
        duration: '1 Month (8 Classes) ',
        Objective: ' By the end of this module, students will be able to:',
        objectiveList:[
            'Understand the fundamentals of digital marketing.',
            'Identify the key components of a successful digital marketing strategy.',
            'Differentiate between traditional and digital marketing.',
            'Recognize the role of various digital marketing channels.',
        ],
        classBreakdown: [
            {
                class: 'Class 1',
                desc: 'Introduction to Digital Marketing',
                points: [
                    {
                        part: '',
                        points:[
                            'Definition and importance of digital marketing',
                            'Evolution from traditional to digital marketing.',
                        ]
                    }
                ]

            },
            {
                class: 'Class 2',
                desc: 'Key Digital Marketing Channels',
                points: [
                    {
                        part: '',
                        points:[
                            'Search Engine Optimization (SEO)',
                            'Search Engine Marketing (SEM)',
                            'Social Media Marketing (SMM)',
                        ]
                    }
                ]

            },
            {
                class: 'Class 3',
                desc: 'Key Digital Marketing Channels',
                points: [
                   { 
                        part: '',
                        points:[
                            'Content Marketing',
                            'Email Marketing',
                            'Affiliate Marketing',
                            'Pay-Per-Click Advertising (PPC)',
                            'Global reach and cost-effectiveness.',
                            'Targeted marketing and personalization.',
                            'Measurable results and real-time analytics.',
                        ]
                    }
                ]

            },
            {
                class: 'Class 4',
                desc: 'Traditional vs. Digital Marketing',
                points: [
                    {
                        part: '',
                        points:[
                            'Comparing reach, cost, engagement, and ROI.',
                            'Case study: A brand’s transition from traditional to digital.',
                            'Interactive Q&A Session ',
                        ]
                    }
                ]

            },
            {
                class: 'Class 5',
                desc: 'Developing a Digital Marketing Strategy',
                points: [
                    {
                        part: '',
                        points:[
                            'Setting goals and defining the target audience.',
                            'Creating customer personas.',
                            'Selecting appropriate marketing',
                            'Latest Trends in Digital Marketing',
                            'AI and automation in marketing.',
                            'Voice search and mobile optimization.',
                            'Influencer and video marketing.',
                        ]
                    }
                ]

            },
            {
                class: 'Class 6',
                desc: 'Case Studies & Best Practices',
                points: [
                    {
                        part: '',
                        points:[
                            'Examples of successful digital marketing campaigns.',
                            'Implement AI-driven strategies for better marketing performance.',
                            'Utilize AI tools for automation, content creation, and customer engagement.',
                            'Recap of important concepts.',
                            'Next steps for learning.',
                            'Addressing final queries.',
                            'Preview of the next module.',
                        ]
                    }
                ]

            },

        ],
    },
    {
        title: 'Module 2: Social Media Marketing (SMM)',
        duration: '1 Month (8 Classes) ',
        Objective: 'By the end of this module, students will be able to:',
        objectiveList:[
            'Understand the fundamentals of Social Media Marketing (SMM).',
            'Identify and leverage different social media platforms for marketing.',
            'Create engaging and effective content for social media.',
            'Develop paid and organic social media strategies.',
            'Utilize social media analytics tools to measure success.',
            'Implement influencer marketing and community engagement tactics.',
            'Utilisation of Meta Business Suite and Automations.',
            'Use Meta Business Manager for managing social media campaigns.',
            'Set up access rights and billing in Meta Business Manager.',
            'Leverage AI tools like ChatGPT for content creation and strategy.',
        ],
        classBreakdown: [
            {
                class: 'Class 1',
                desc: 'Introduction to Social Media Marketing',
                points: [
                    {
                        part: '',
                        points:[
                            'What is Social Media Marketing (SMM)?',
                            'The impact of social media on digital marketing',
                            'Overview of major social media platforms (Facebook, Instagram, LinkedIn, Pinterest, etc.)',
                            'Understanding user demographics and behaviour',
                            'The role of organic vs. paid social media marketing',
                            'Overview of AI in digital marketing',
                            'AI-powered content generation (ChatGPT, Jasper, etc.)',
                        ]
                    }
                ]

            },
            {
                class: 'Class 2',
                desc: 'Social Media Page Creation & Setup',
                points: [
                    {
                        part: '',
                        points:[
                            'Creation of Facebook Business Page and Standard Settings.',
                            'Integration of CTA like Phone No, Whatsapp and other Social profile connections.',
                            'Understanding the Media sizes of profile pictures, cover photos and other media.',
                            'Setup of Instagram Business and Creator accounts.',
                            'Importance of Hashtags and Captions, Alt-text and topics for Posts & Reels.',
                        ]
                    }
                ]

            },
            {
                class: 'Class 3',
                desc: 'Meta Business Suites and Automations',
                points: [
                   { 
                        part: '',
                        points:[
                            'Understanding the use of meta business suite.',
                            'Message Automations in Messenger & Instagram profiles.',
                            'Understanding Audience Engagement, Reports, Post Scheduling, etc. ',
                        ]
                    }
                ]

            },
            {
                class: 'Class 4',
                desc: 'Social Media Strategy & Planning',
                points: [
                    {
                        part: '',
                        points:[
                            'Setting SMART goals for social media marketing',
                            'Identifying and understanding target audiences',
                            'Competitor analysis and market research',
                            'Creating a social media content calendar',
                            'Best practices for brand voice and messaging',
                        ]
                    }
                ]

            },
            {
                class: 'Class 5',
                desc: 'Content Creation & Engagement',
                points: [
                    {
                        part: '',
                        points:[
                            'The importance of high-quality content',
                            'Importance of Ad content policy, rules and best practices.',
                            'Types of content: images, videos, stories, reels, live streams, etc.',
                            'Writing compelling captions and CTAs',
                            'Engaging with followers and community management',
                            'AI Tools for content creations (Chat GPT, Deepseek, Gemini, 11 Labs, Meta Llama, Adobe Firefly, Invideo AI) ',
                        ]
                    }
                ]

            },
            {
                class: 'Class 6',
                desc: 'Meta Business Manager Setup & Management',
                points: [
                    {
                        part: '',
                        points:[
                            'What is Meta Business Manager and why use it?',
                            'Setting up and configuring Meta Business Manager',
                            'Managing multiple accounts and pages',
                            'Assigning roles and permissions',
                            'Best practices for account security',
                            'Ad Account Creation',
                        ]
                    }
                ]

            },
            {
                class: 'Class 7',
                desc: 'Social Media Billing & Budgeting',
                points: [
                    {
                        part: '',
                        points:[
                            'Understanding billing in Meta Business Manager',
                            'Setting up payment methods for ad accounts',
                            'Managing ad budgets and spend tracking',
                            'Handling payment issues and disputes',
                            'Best practices for ad budget allocation',
                        ]
                    }
                ]

            },
            {
                class: 'Class 8',
                desc: 'Paid Social Media Advertising',
                points: [
                    {
                        part: '',
                        points:[
                            'Understanding social media campaign objectives',
                            'Facebook & Instagram Ads in-depth (Ad types, targeting, budgeting, and bidding)',
                        ]
                    }
                ]

            },
            {
                class: 'Class 9',
                desc: 'Paid Social Media Advertising',
                points: [
                    {
                        part: '',
                        points:[
                            'Introduction of Meta Pixels and Implementation.',
                            'Types of Audience, Variation of Custom Audience',
                            'How to Create Audience',
                            'Retargeting strategies and audience segmentation',
                            'Introduction to AI-powered ad automation',
                        ]
                    }
                ]

            },
            {
                class: 'Class 10',
                desc: 'Paid Social Media Advertising',
                points: [
                    {
                        part: '',
                        points:[
                            'Measuring ad performance and optimizing campaigns',
                            'Facebook Rules & Importance',
                            'Hidden Key Features for Ads Automations',
                        ]
                    }
                ]

            },
            {
                class: 'Class 11',
                desc: 'Social Media Analytics & Performance Tracking',
                points: [
                    {
                        part: '',
                        points:[
                            'Using analytics tools (Facebook Insights, Instagram Analytics, etc.)',
                            'Tracking key performance metrics (engagement, reach, impressions, conversions, etc.)',
                            'Interpreting data to improve strategy',
                            'A/B testing social media campaigns',
                            'Reporting and presenting social media performance',
                        ]
                    }
                ]

            },
            {
                class: 'Class 12',
                desc: 'LinkedIn Marketing & Influencer Marketing',
                points: [
                    {
                        part: '',
                        points:[
                            'LinkedIn for B2B marketing and networking',
                            'Optimizing LinkedIn company pages',
                            'LinkedIn content strategies and engagement tips',
                            'Ad account overview and Campaign Setup.',
                            'Understanding influencer marketing and its impact',
                            'Finding and collaborating with influencers',
                            'Creating and managing influencer campaigns',
                            'Community building and engagement strategies',
                            'Monitoring and measuring influencer performance',
                            'Case studies of successful SMM strategies  ',
                        ]
                    }
                ]

            },

        ],
    },
    {
        title: 'Module 3: Search Engine Marketing (SEM) & Google Ads',
        duration: '1 Month (8 Classes) ',
        Objective: 'By the end of this module, students will be able to:',
        objectiveList:[
            'Understand the fundamentals of Search Engine Marketing (SEM)',
            'Learn how Google Ads works and how to create effective campaigns.',
            'Conduct keyword research and ad targeting for maximum ROI.',
            'Master bidding strategies, ad formats, and extensions.',
            'Optimize campaigns for better performance and lower costs.',
            'Track and analyze SEM campaign performance using Google Analytics and other tools.',
        ],
        classBreakdown : [
            {
              class: 'Class 1',
              desc: 'Introduction to Search Engine Marketing (SEM)',
              points: [
                {
                  part: '',
                  points: [
                    'What is SEM, and how does it differ from SEO?',
                    'Benefits and challenges of paid search advertising',
                    'Overview of different SEM platforms (Google Ads, Bing Ads, Quora Ads, etc.)',
                    'Understanding the Google Ads auction and ranking system',
                    'Introduction to Pay-Per-Click (PPC) advertising',
                  ]
                }
              ]
            },
            {
              class: 'Class 2',
              desc: 'Keyword Research & Targeting for SEM',
              points: [
                {
                  part: '',
                  points: [
                    'Difference between SEO and SEM keyword strategies',
                    'Types of keywords (broad match, exact match, phrase match, negative keywords)',
                    'Using Google Keyword Planner, SEMRush, Ubersuggest for SEM',
                    'Competitor keyword analysis',
                    'Creating an effective keyword strategy',
                  ]
                }
              ]
            },
            {
              class: 'Class 3',
              desc: 'Google Ads Account Setup',
              points: [
                {
                  part: '',
                  points: [
                    'Google Ads account setup & Optimisation',
                    'Verification of brands and Role based access',
                    'Security & Access',
                    'Setting up business billing profile & Business verification',
                    'Understanding Google Manager Account',
                  ]
                }
              ]
            },
            {
              class: 'Class 4',
              desc: 'Types of Google Ads Campaigns',
              points: [
                {
                  part: '',
                  points: [
                    'Understanding Google Ads account structure (Campaigns, Ad Groups, Ads)',
                    'Types of Google Ads campaigns (Search, Display, Shopping, Video, etc.)',
                    'Budgeting and bidding strategies',
                    'Choosing the right geographic and demographic targeting',
                    'Conversion Codes Setup and Importance of Conversion count.',
                  ]
                }
              ]
            },
            {
              class: 'Class 5',
              desc: 'Setup of Search Ad Campaign',
              points: [
                {
                  part: '',
                  points: [
                    'Step-by-step guide to setting up a search campaign',
                    'Budgeting and bidding strategies',
                    'Choosing the right geographic and demographic targeting',
                  ]
                }
              ]
            },
            {
              class: 'Class 6',
              desc: 'Creating High-Converting Ads',
              points: [
                {
                  part: '',
                  points: [
                    'Best practices for writing compelling ad copy',
                    'Using ad extensions (sitelink, callout, structured snippet, etc.)',
                    'Importance of ad relevance and quality score',
                    'A/B testing ad creatives',
                    'Landing page optimization for better conversions',
                  ]
                }
              ]
            },
            {
              class: 'Class 7',
              desc: 'Bidding Strategies & Budget Management',
              points: [
                {
                  part: '',
                  points: [
                    'Manual vs. automated bidding strategies',
                    'Cost-per-click (CPC) vs. Cost-per-acquisition (CPA) bidding',
                    'Understanding Smart Bidding and AI-driven automation',
                    'Managing daily budgets and avoiding overspending',
                    'ROI and conversion tracking setup',
                  ]
                }
              ]
            },
            {
              class: 'Class 8',
              desc: 'Setup of Display Ad Campaigns',
              points: [
                {
                  part: '',
                  points: [
                    'Step-by-step guide to setting up a Display campaign',
                    'Budgeting and bidding strategies.',
                    'Choosing the right geographic and demographic targeting, placements.',
                    'Setting up banner and responsive display ads',
                    'Targeting options for display and video campaigns',
                  ]
                }
              ]
            },
            {
              class: 'Class 9',
              desc: 'Setup of YouTube Campaigns & Overview of Merchant Centers & Shopping Ads',
              points: [
                {
                  part: '',
                  points: [
                    'Introduction to YouTube Ads and video advertising',
                    'Step-by-step guide to setting up a YouTube campaign',
                    'Budgeting and bidding strategies.',
                    'Choosing the right geographic and demographic targeting, placements.',
                    'Understanding of Shopping Campaigns',
                    'Importance of Google Merchant Center & Account Setup',
                    'Inventory Management and Linking of Merchant Center with Google Ads',
                  ]
                }
              ]
            },
            {
              class: 'Class 10',
              desc: 'Campaign Optimization & Performance Analysis',
              points: [
                {
                  part: '',
                  points: [
                    'Monitoring key SEM metrics (CTR, CPC, Quality Score, etc.)',
                    'Using Google Analytics to track ad performance',
                    'Identifying underperforming campaigns and making adjustments',
                    'Strategies to improve click-through and conversion rates',
                  ]
                }
              ]
            },
            {
              class: 'Class 11',
              desc: 'Remarketing & Advanced SEM Strategies',
              points: [
                {
                  part: '',
                  points: [
                    'What is remarketing and how does it work?',
                    'Setting up remarketing lists in Google Ads',
                    'Advanced audience targeting techniques',
                    'Case studies of successful SEM campaigns',
                  ]
                }
              ]
            },
            {
              class: 'Class 12',
              desc: 'Bonus Class on Budgets & Planning',
              points: [
                {
                  part: '',
                  points: [
                    'Understanding of Brands and Suitable Channels for Advertising',
                    'Pilot Budget and its importance',
                    'How to prepare a marketing plan for a business',
                    'Important metrics to be considered while preparing the plan.',
                    'Importance of past analytics for a successful campaign.',
                  ]
                }
              ]
            }
          ]
          
    },
    {
        title: 'Module 4: Website Search Engine Optimization (SEO)',
        duration: '1 Month (8 Classes) ',
        Objective: 'By the end of this module, students will be able to:',
        objectiveList:[
            'Understand how search engines work.',
            'Implement on-page and off-page SEO strategies.',
            'Optimize website content for better rankings.',
            'Utilize SEO tools for analytics and keyword research.',
            'Improve website technical SEO for better performance.',
            'Develop a complete SEO strategy for a website.',
        ],
        classBreakdown : [
            {
              class: 'Class 1',
              desc: 'Introduction to SEO',
              points: [
                {
                  part: '',
                  points: [
                    'What is SEO and why it matters?',
                    'How search engines work (crawling, indexing, ranking)',
                    'Google’s ranking factors and algorithm updates',
                    'Types of SEO: On-page, Off-page, and Technical SEO',
                    'Overview of SEO tools (Google Search Console, SEMrush, Google Light House, Google Analytics, etc.)',
                  ]
                }
              ]
            },
            {
              class: 'Class 2',
              desc: 'Keyword Research & Strategy',
              points: [
                {
                  part: '',
                  points: [
                    'Importance of keyword research',
                    'Types of keywords (short-tail, long-tail, LSI, etc.)',
                    'Using keyword research tools (Google Keyword Planner, Ubersuggest, SEMRush, etc.)',
                    'Competitor analysis for keyword opportunities',
                    'Mapping keywords to website content',
                  ]
                }
              ]
            },
            {
              class: 'Class 3',
              desc: 'On-Page SEO Optimization',
              points: [
                {
                  part: '',
                  points: [
                    'Optimizing title tags and meta descriptions',
                    'Using header tags (H1, H2, H3, etc.) effectively',
                    'Use of canonical tag',
                    'URL structure and best practices',
                    'Image optimization and alt text usage',
                    'Internal linking strategies',
                    'URL rewriting & redirections',
                    'Understanding of Structured Data (Schema Tag briefing)',
                  ]
                }
              ]
            },
            {
              class: 'Class 4',
              desc: 'Content Optimization for SEO',
              points: [
                {
                  part: '',
                  points: [
                    'Importance of high-quality content in SEO',
                    'Writing SEO-friendly content',
                    'Blog structure and best practices',
                    'Content freshness and updating old content',
                    'HTML to Text ratio',
                    'Keyword Ingestion and Density.',
                  ]
                }
              ]
            },
            {
              class: 'Class 5',
              desc: 'Off-Page SEO & Link Building',
              points: [
                {
                  part: '',
                  points: [
                    'Importance of backlinks in SEO',
                    'Types of backlinks (dofollow, nofollow, etc.)',
                    'Guest blogging and outreach strategies',
                    'Social media signals and their impact on SEO',
                    'Avoiding black hat SEO techniques',
                  ]
                }
              ]
            },
            {
              class: 'Class 6',
              desc: 'Technical SEO & Website Performance',
              points: [
                {
                  part: '',
                  points: [
                    'Website speed optimization (Core Web Vitals)',
                    'Mobile-friendliness and responsive design',
                    'XML, HTML sitemaps and robots.txt',
                    'Canonical tags and duplicate content issues',
                    'Structured data and schema markup',
                  ]
                }
              ]
            },
            {
              class: 'Class 7',
              desc: 'SEO Analytics & Performance Tracking',
              points: [
                {
                  part: '',
                  points: [
                    'Using Google Search Console for SEO monitoring',
                    'Google Analytics for tracking SEO traffic',
                    'Understanding bounce rate, CTR, and dwell time',
                    'SEO audit tools and how to use them, SEMRush, Screaming Frog, Duplichecker, etc',
                    'Adjusting SEO strategies based on data',
                  ]
                }
              ]
            },
            {
              class: 'Class 8',
              desc: 'Google My Business Profile',
              points: [
                {
                  part: '',
                  points: [
                    'Creation of Google My Business profile',
                    'Optimisation of Google My Business profile',
                    'Understanding of Google My Business analytics',
                    'Importance of ratings and reviews and how to generate reviews',
                  ]
                }
              ]
            },
            {
              class: 'Class 9',
              desc: 'Local Business Listing',
              points: [
                {
                  part: '',
                  points: [
                    'Research on local listing websites and portals',
                    'Creating business profiles on local listing sites',
                    'Optimisation of business profiles on local listings',
                    'Importance of local listing in Global SEO.',
                  ]
                }
              ]
            },
            {
              class: 'Class 10',
              desc: 'SEO Strategy & Implementation',
              points: [
                {
                  part: '',
                  points: [
                    'Developing a complete SEO strategy for a website',
                    'Case studies of successful SEO campaigns',
                    'Future trends in SEO and adapting strategies.',
                    'Impact & Implementation of AI tools in latest SEO trends.',
                    'Keyword ranking reports and analysis.',
                    'Q&A and course wrap-up',
                  ]
                }
              ]
            }
          ]
          
    },
    {
        title: 'Module 5: Content Marketing & Blogging',
        duration: '1 Month (8 Classes) ',
        Objective: 'By the end of this module, students will be able to:',
        objectiveList:[
            'Understand the role of content marketing in digital strategy.',
            'Create engaging and valuable content for different platforms.',
            'Develop a content calendar and SEO-optimized blog strategy.',
            'Measure content performance and optimize for better results.',
        ],
        classBreakdown : [
            {
              class: 'Class 1',
              desc: 'Introduction to Content Marketing & Blogging',
              points: [
                {
                  part: '',
                  points: [
                    'What is content marketing and why is it important?',
                    'Types of content marketing (blogs, videos, infographics, etc.)',
                    'Blogging fundamentals and setting up a blog',
                  ]
                }
              ]
            },
            {
              class: 'Class 2',
              desc: 'SEO & Content Optimization',
              points: [
                {
                  part: '',
                  points: [
                    'Keyword research for blogs and content strategy',
                    'On-page SEO techniques (headlines, meta descriptions, etc.)',
                    'Content structuring and readability',
                    'Case studies of successful content marketing',
                  ]
                }
              ]
            }
          ]
          
    },
    {
        title: 'Module 6: Email & WhatsApp Marketing',
        duration: '1 Month (8 Classes) ',
        Objective: 'By the end of this module, students will be able to:',
        objectiveList:[
            'Understand the fundamentals of email and WhatsApp marketing.',
            'Build and manage email lists effectively.',
            'Create high-converting email and WhatsApp campaigns.',
            'Analyze campaign performance and optimize accordingly.',
        ],
        classBreakdown : [
            {
              class: 'Class 1',
              desc: 'Email Marketing Essentials',
              points: [
                {
                  part: '',
                  points: [
                    'Importance of email marketing',
                    'Building and segmenting an email list',
                    'Email marketing tools (Mailchimp, HubSpot, etc.)',
                    'Writing compelling subject lines and email copy',
                  ]
                }
              ]
            },
            {
              class: 'Class 2',
              desc: 'WhatsApp Marketing & Automation',
              points: [
                {
                  part: '',
                  points: [
                    'Introduction to WhatsApp Business API',
                    'Setting up automated WhatsApp campaigns',
                    'Strategies for customer engagement and retention',
                    'Compliance and best practices',
                  ]
                }
              ]
            }
          ]
          
    },
    {
        title: 'Module 7: Google Analytics & Data-Driven Marketing',
        duration: '1 Month (8 Classes) ',
        Objective: 'By the end of this module, students will be able to:',
        objectiveList:[
            'Understand the importance of data in digital marketing.',
            'Use Google Analytics and other tools to track website performance.',
            'Analyze user behavior and conversion data.',
            'Make data-driven decisions to optimize campaigns.',
        ],
        classBreakdown : [
            {
              class: 'Class 1',
              desc: 'Introduction to Web Analytics',
              points: [
                {
                  part: '',
                  points: [
                    'What is web analytics and why is it important?',
                    'Understanding key metrics (sessions, bounce rate, conversions, etc.)',
                    'Google Analytics setup and interface walkthrough',
                    'Setting up tracking codes and UTM parameters',
                  ]
                }
              ]
            },
            {
              class: 'Class 2',
              desc: 'Data Analysis & User Behavior',
              points: [
                {
                  part: '',
                  points: [
                    'Understanding user flow and journey mapping',
                    'Heatmaps and session recordings (Microsoft Clarity, Hotjar, Crazy Egg)',
                    'Conversion tracking and goal setting',
                    'Data segmentation for better insights',
                  ]
                }
              ]
            }
          ]
          
    },
    {
        title: 'Module 8: Interview Preparation & Grooming',
        duration: '',
        Objective: '',
        objectiveList:[],
        classBreakdown : [
            {
              class: 'Bonus Class',
              desc: '',
              points: [
                {
                  part: '',
                  points: [
                    'Understanding your skills and strength',
                    'How to present yourself with the core strengths you have',
                    'Google Analytics setup and interface walkthrough',
                    'Facts, Figures and Terms to be used while interview communications',
                  ]
                }
              ]
            },
          ]
          
    },
]

const CourseModuleAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className="w-full max-w-full mx-auto mt-5">
            {courseDetails.map((item, index) => {
                const isOpen = activeIndex === index;

                return (
                    <div key={index} className="bg-[#232428] border border-[#6bffca] mb-5">
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full flex justify-between items-center text-[16px] md:text-[20px] text-left text-[#6bffca] px-4 py-3 font-medium md:font-bold hover:bg-gray-700 transition"
                        >
                            <span>{item.title}</span>
                            <span className="text-xl">
                                {isOpen ? <RemoveIcon /> : <AddIcon />}
                            </span>
                        </button>


                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out bg-[#0f1011] px-5 ${isOpen ? "max-h-[3500px] opacity-100 py-4" : "max-h-0 opacity-0"
                                }`}
                        >
                            <div>
                                <p className="text-white mb-2"><b className="text-[#6bffca]">Duration: </b>{item.duration}</p>
                                <p className={`text-[#6bffca] ${item.Objective == '' ? 'hidden' : 'block'}`}>Learning Objectives</p>
                                <p className="text-white my-2">{item.Objective}</p>
                                <ul className="list-disc ps-5 text-white">
                                    {
                                        item.objectiveList.map((obj,i)=>{
                                            return(
                                                <li key={i}>
                                                    {obj}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="pt-5">
                                <ul className="list-decimal ps-4 lg:ps-5 text-white">
                                    {
                                        item.classBreakdown.map((breakdown, j) => {
                                            return (
                                                <li key={j} className="mb-3">
                                                    <h4 className="text-[18px] mb-3"><span className="text-[#6bffca] font-semibold">{breakdown.class} :</span> {breakdown.desc}</h4>
                                                    <ul className="list-disc ps-0 lg:ps-3">
                                                        {
                                                            breakdown.points.map((el, k) => {
                                                                return (
                                                                    <div className="mb-5" key={k}>
                                                                        <p className="mb-2">{el.part}</p>
                                                                        {
                                                                            <ul className="list-disc ps-5">
                                                                                {
                                                                                    el.points.map((point, l) => {
                                                                                        return (
                                                                                            <li className="text-[15px]" key={l}>
                                                                                                {point}
                                                                                            </li>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </ul>
                                                                        }
                                                                    </div>

                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </li>
                                            );
                                        })}

                                </ul>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CourseModuleAccordion;