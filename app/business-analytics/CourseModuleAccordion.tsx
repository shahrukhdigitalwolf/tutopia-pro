"use client";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const courseDetails = [
    {
        title: 'Module 1: Introduction to Business Analytics and Excel Basics',
        duration: '1 Month (8 Classes) ',
        Objective: 'Understand the basics of business analytics and master Excel for data analysis.',
        classBreakdown: [
            {
                class: 'Class 1',
                desc: 'Introduction to Business Analytics ',
                points: [
                    {
                        part: '',
                        points:[
                            'Welcome and Introduction',
                            'What is Business Analytics',
                            'Importance of Business Analytics in Decision-Making',
                            'Real-Life Applications of Business Analytics',
                            'Recap and Conclusion'
                        ]
                    }
                ]

            },
            {
                class: 'Class 2',
                desc: 'Data Types and Sources ',
                points: [
                    {
                        part: '',
                        points:[
                            'Introduction to Data',
                            'Types of Data',
                            'Sources and methods of data collection',
                            'Recap and practical example',
                        ]
                    }
                ]

            },
            {
                class: 'Class 3',
                desc: 'Basic Excel Functions',
                points: [
                   { 
                        part: '',
                        points:[
                            'Introduction to Excel Functions',
                            'Core Functions Explained [sum, subtract, multiply, divide]',
                            'Statistical Functions Explained [Average, Count, Min, Max, Median, Mode]',
                            'Hands On Experience – Practical Example of all the functions',
                            'Recap and Practice Assignment',

                        ]
                    }
                ]

            },
            {
                class: 'Class 4',
                desc: 'Data Cleaning Techniques',
                points: [
                    {
                        part: '',
                        points:[
                            'Introduction to data cleaning',
                            'Removing Duplicates',
                            'Handling blank and extra spaces',
                            'Fixing Misspelled words',
                            'Correcting poor formatting',
                            'Using data validation',
                            'Recap and practice assignment',
                        ]
                    }
                ]

            },
            {
                class: 'Class 5',
                desc: 'Formatting in Excel',
                points: [
                    {
                        part: '',
                        points:[
                            'Introduction to formatting in excel',
                            'Basic Formatting techniques',
                            'Number Formatting',
                            'Conditional Formatting',
                            'Data validation formatting',
                            'Best practices and common mistakes',
                            'Recap and practice assignment',
                        ]
                    }
                ]

            },
            {
                class: 'Class 6',
                desc: 'Introduction to Pivot Tables',
                points: [
                    {
                        part: '',
                        points:[
                            'What are pivot tables',
                            'Benefits of pivot table ',
                            'Creating a pivot table ',
                            'Customizing pivot table ',
                            'Data validation formatting',
                            'Pivot table formatting and visualization ',
                            'Best practices and common mistakes ',
                            'Recap and practice assignment',
                        ]
                    }
                ]

            },
            {
                class: 'Class 7',
                desc: 'Hands-on Practice ',
                points: [
                    {
                        part: '',
                        points:[
                            'Quick recap of previous topic',
                            'Exercise 1: using essential excel functions ',
                            'Exercise 2: data cleaning and formatting',
                            'Exercise 3: Creating and customizing pivot table ',
                            'Exercise 4: Data Visualisation and charts ',
                        ]
                    }
                ]

            },
            {
                class: 'Class 8',
                desc: 'Project Work',
                points: [
                    {
                        part: '',
                        points:[
                            'Perform data cleaning and create a basic Pivot Table report to summarize sales data.',
                        ]
                    }
                ]

            },

        ],
    },
    {
        title: 'Module 2: Advanced Excel and Introduction to Power Query',
        duration: '1 Month (8 Classes) ',
        Objective: 'Dive deeper into Excel’s advanced features and learn Power Query for data preparation.',
        classBreakdown: [
            {
                class: 'Class 1',
                desc: 'Basic Statistical Concepts & Advanced Excel Techniques',
                points: [
                    {
                        part: 'Part 1 : Basic Statistical Concepts',
                        points: [
                            'Descriptive vs. Inferential Statistics ',
                            'Types of data: Nominal, Ordinal, Interval, Ratio',
                            'Measures of central tendency: Mean, Median, Mode',
                            'Measures of dispersion: Range, Variance, Standard Deviation',
                        ]
                    },
                    {
                        part: 'Part 2 : Advanced Excel Techniques',
                        points: [
                            'Logical functions: IF, AND, OR, Nested IF',
                            'Lookup functions: VLOOKUP, HLOOKUP',
                            'Combining logical and lookup functions for decision-making',
                            'Common Excel errors and troubleshooting',
                            'Recap & practice assignments',

                        ]
                    },
                ]

            },
            {
                class: 'Class 2',
                desc: 'INDEX-MATCH and Nested Formulas',
                points: [
                    {
                        part: '',
                        points: [
                            'Introduction to INDEX and MATCH',
                            'Combining INDEX and MATCH for LOOKUPS',
                            'Nested formulas with INDEX-MATCH',
                            'Handling errors in lookups',
                            'Best practices for complex formulas',
                            'Setting up data validation rules',
                            'Handling data validating errors',
                            'Common excel build-in error handling',
                            'Best practices for data integrity ',
                        ]
                    },
                ]

            },
            {
                class: 'Class 3',
                desc: 'Conditional Formatting',
                points: [
                    {
                        part: '',
                        points: [
                            'Introduction to conditional formatting',
                            'Basic conditional formatting rules',
                            'Advanced rules custom formulas',
                            'Manging and editing rules',
                            'Practical scenarios and hands-on exercise',
                            'Common issues and fixes',
                        ]
                    },
                ]

            },
            {
                class: 'Class 4',
                desc: 'Introduction to Power Query ',
                points: [
                    {
                        part: '',
                        points: [
                            'Introduction to power query',
                            'Power query interface overview',
                            'Importing data from various sources',
                            'Basic data cleaning ',
                            'Loading data back into excel',
                            'Recap and practice assignment',
                        ]
                    },
                ]

            },
            {
                class: 'Class 5',
                desc: 'Transforming Data in Power Query',
                points: [
                    {
                        part: '',
                        points: [
                            'Introduction to data transformation',
                            'Splitting columns and merging columns',
                            'Filtering and sorting data',
                            'Replacing values and filling missing data',
                            'Creating calculated columns',
                            'Recap and practice assignments',
                        ]
                    },
                ]

            },
            {
                class: 'Class 6',
                desc: 'Data Consolidation',
                points: [
                    {
                        part: '',
                        points: [
                            'Introduction to data consolidation',
                            'Appending data from multiple sources',
                            'Merging queries',
                            'Handling duplicates and inconsistent data',
                            'Finalizing and loading consolidated data',
                            'Recap and practice assignment',
                        ]
                    },
                ]

            },
            {
                class: 'Class 7',
                desc: 'Data Visualization in Excel',
                points: [
                    {
                        part: '',
                        points: [
                            'Introduction to data visualization',
                            'Creating basic charts in excel',
                            'Enhancing charts with advanced features',
                            'Interactive dashboards with slicers',
                            'Best practices for data visualization',
                            'Recap and practice assignments',
                        ]
                    },
                ]

            },
            {
                class: 'Class 8',
                desc: 'Project Work',
                points: [
                    {
                        part: '',
                        points: [
                            'Use Power Query to clean and transform a dataset, then create an interactive Excel dashboard.',
                        ]
                    },
                ]

            },

        ],
    },
    {
        title: 'Module 3: SQL for Data Analysis',
        duration: '1 Month (8 Classes) ',
        Objective: ' Introduce SQL for querying and analysing structured data.',
        classBreakdown: [
            {
                class: 'Class 1',
                desc: 'Introduction to Databases and SQL',
                points: [
                    {
                        part: '',
                        points: [
                            'Introduction to databases',
                            'Types of databases',
                            'Understanding relational databases',
                            'What is sql and why use it',
                            'Introduction to sql syntax and commands',
                            'Recap and practice assignments',
                        ]
                    },
                ]

            },
            {
                class: 'Class 2',
                desc: 'SQL Basics',
                points: [
                    {
                        part: '',
                        points: [
                            'Introduction to SELECT statements',
                            'Filtering data with WHERE clase',
                            'Sorting data with ORDER BY clause',
                            'Aliasing columns and tables',
                            'Recap and practice assignments',
                        ]
                    },
                ]

            },
            {
                class: 'Class 3',
                desc: 'Filtering Data',
                points: [
                    {
                        part: '',
                        points: [
                            'Introduction to operators',
                            'Using wildcards in SQL',
                            'BETWEEN and IN operators',
                            'Combining conditions with AND/OR',
                            'Recap and practice assignments',
                        ]
                    },
                ]

            },
            {
                class: 'Class 4',
                desc: 'Joins in SQL',
                points: [
                    {
                        part: '',
                        points: [
                            'Understanding joins',
                            'Inner Join',
                            'LEFT JOIN and RIGHT JOIN',
                            'FULL OUTER JOIN',
                            'Recap and practice assignment',
                        ]
                    },
                ]

            },
            {
                class: 'Class 5',
                desc: 'Aggregation Techniques',
                points: [
                    {
                        part: '',
                        points: [
                            'Introduction to aggregation',
                            'COUNT, SUM, AVERAGE functions',
                            'MIN and MAX functions',
                            'GROUP BY clause',
                            'HAVING Clause',
                            'Recap and practice assignment',
                        ]
                    },
                ]

            },
            {
                class: 'Class 6',
                desc: 'Combining Multiple Tables',
                points: [
                    {
                        part: '',
                        points: [
                            'Introduction to combining tables',
                            'UNION and UNION ALL',
                            'Subqueries',
                            'Nested queries',
                            'Recap and practice assignments',
                        ]
                    },
                ]

            },
            {
                class: 'Class 7',
                desc: 'Practical Data Analysis',
                points: [
                    {
                        part: '',
                        points: [
                            'Introduction to writing queries for insights',
                            'Combining multiple clauses',
                            'Analysing customer data',
                            'Analysing sales performance',
                            'Recap and practice assignments',
                        ]
                    },
                ]

            },
            {
                class: 'Class 8',
                desc: 'Project Work',
                points: [
                    {
                        part: '',
                        points: [
                            'Query a mock business database to analyse sales performance.',
                        ]
                    },
                ]

            },

        ],
    },
    {
        title: 'Module 4: Power BI for Business Analytics',
        duration: '1 Month (8 Classes) ',
        Objective: 'Learn Power BI for creating dynamic and interactive dashboards.',
        classBreakdown: [
            {
                class: 'Class 1',
                desc: 'Setting Up Power BI Environment',
                points: [
                    {
                        part: '',
                        points: [
                            'Introduction to Power BI',
                            'Downloading and Installing power Bi desktop',
                            'Exploring the Power BI interface',
                            'Importing data from various sources',
                            'Saving and organizing projects',
                            'Recap and practice assignments',
                        ]
                    },
                ]

            },
            {
                class: 'Class 2',
                desc: 'Data Modelling in Power BI',
                points: [
                    {
                        part: '',
                        points: [
                            'Introduction to data modelling',
                            'Understanding relations between tables',
                            'Using primary and foreign keys',
                            'Creating and editing relationships',
                            'Handling data cardinality and direction',
                            'Recap and practice assignment',
                        ]
                    },
                ]

            },
            {
                class: 'Class 3',
                desc: 'Introduction to DAX (Data Analysis Expressions) ',
                points: [
                    {
                        part: '',
                        points: [
                            'What is DAX ',
                            'Basic syntax and calculations',
                            'Common DAX functions',
                            'Creating Simple measures and KPIs',
                            'Practical Use case: total sales calculation',
                            'Recap and practice assignment',
                        ]
                    },
                ]

            },
            {
                class: 'Class 4',
                desc: 'Creating Visuals in Power BI',
                points: [
                    {
                        part: '',
                        points: [
                            'Introduction to visualization',
                            'Creating bar charts and column charts',
                            'Line charts and pie charts',
                            'Using scatter plots and card visuals',
                            'Customising visual elements',
                            'Recap and practice assignments',
                        ]
                    },
                ]

            },
            {
                class: 'Class 5',
                desc: 'Using Filters and Slicers',
                points: [
                    {
                        part: '',
                        points: [
                            'What are filters and slicers',
                            'Adding filters to report',
                            'Adding and customising slicers',
                            'Using advanced filtering options',
                            'Practical use cases',
                            'Recap and practice assignments',
                        ]
                    },
                ]

            },
            {
                class: 'Class 6',
                desc: 'Dashboard Design Best Practices',
                points: [
                    {
                        part: '',
                        points: [
                            'Introduction to dashboard design',
                            'Layout and composition',
                            'Color schemes and visual hierarchy',
                            'Minimizing clutter and enhancing interactivity',
                            'Examples of well designed dashboard',
                            'Recap and practice assignments',
                        ]
                    },
                ]

            },
            {
                class: 'Class 7',
                desc: 'Publishing Reports',
                points: [
                    {
                        part: '',
                        points: [
                            'Introduction to publishing reports',
                            'Publishing to Power BI service',
                            'Sharing Dashboard and stakeholders',
                            'Refreshing data in published reports',
                            'Best practices for publishing secure reports',
                            'Recap and practice assignments',
                        ]
                    },
                ]

            },
            {
                class: 'Class 8',
                desc: 'Project Work',
                points: [
                    {
                        part: '',
                        points: [
                            'Build a Power BI dashboard to visualize sales trends and customer behaviour.',
                        ]
                    },
                ]

            },

        ],
    },
    {
        title: 'Module 5: Tableau for Data Visualization',
        duration: '1 Month (8 Classes) ',
        Objective: 'Master Tableau for advanced data visualization and storytelling. ',
        classBreakdown: [
            {
                class: 'Class 1',
                desc: 'Getting Started with Tableau',
                points: [
                    {
                        part: '',
                        points: [
                            'Introduction to tableau',
                            'Installing and setting up tableau',
                            'Connecting to data sources',
                            'Exploring tableau interface',
                            'Saving and organizing workbooks',
                            'Recap and practice assignment',
                        ]
                    },
                ]

            },
            {
                class: 'Class 2',
                desc: 'Basic Visualizations',
                points: [
                    {
                        part: '',
                        points: [
                            'Introduction to basic visualization',
                            'Creating Bar charts',
                            'Creating Line charts',
                            'Creating scatter plots',
                            'Enhancing basic visuals with labels and legends',
                            'Recap and practice assignment',
                        ]
                    },
                ]

            },
            {
                class: 'Class 3',
                desc: 'Calculated Fields and Parameters',
                points: [
                    {
                        part: '',
                        points: [
                            'Introduction to calculated fields',
                            'Creating calculated fields',
                            'Introduction to parameters',
                            'Using parameters in calculated fields',
                            'Practical use case: Dynamic pricing analysis',
                            'Recap and practice assignment',
                        ]
                    },
                ]

            },
            {
                class: 'Class 4',
                desc: ' Creating Dashboards',
                points: [
                    {
                        part: '',
                        points: [
                            'Introduction to dashboard',
                            'Combining multiple visuals',
                            'Adding interacting elements',
                            'Using containers for layouts',
                            'Formatting dashboards for presentation',
                            'Recap and practice assignments',
                        ]
                    },
                ]

            },
            {
                class: 'Class 5',
                desc: 'Geospatial Visualization',
                points: [
                    {
                        part: '',
                        points: [
                            'Introduction to maps in tableau',
                            'Creating basic maps',
                            'Customising map styles',
                            'Adding layers and data to maps',
                            'Practical example mapping regional sales performance',
                            'Recap and practice assignment',
                        ]
                    },
                ]

            },
            {
                class: 'Class 6',
                desc: 'Interactive Dashboards',
                points: [
                    {
                        part: '',
                        points: [
                            'Introduction to interactivity',
                            'Using filters',
                            'Adding tooltip and highlight actions',
                            'Adding URL action and navigation',
                            'Practical scenario: creating a dynamic sales report',
                            'Recap and practice assignments',
                        ]
                    },
                ]

            },
            {
                class: 'Class 7',
                desc: 'Exporting and Sharing Workbooks',
                points: [
                    {
                        part: '',
                        points: [
                            'Why sharing workbook is important',
                            'Exporting data and visuals',
                            'Publishing workbook online',
                            'Setting permission and collaboration',
                            'Updating shared workbooks',
                            'Recap and practice assignments',
                        ]
                    },
                ]

            },
            {
                class: 'Class 8',
                desc: 'Project Work',
                points: [
                    {
                        part: '',
                        points: [
                            'Develop an interactive Tableau dashboard to analyse customer segmentation data.',
                        ]
                    },
                ]

            },

        ],
    },
    {
        title: 'Module 6: Capstone Project and Business Process Optimization',
        duration: '1 Month (8 Classes) ',
        Objective: 'Apply all acquired skills to a real-world business analytics problem.',
        classBreakdown: [
            {
                class: 'Class 1',
                desc: 'Business Process Optimization',
                points: [
                    {
                        part: '',
                        points: [
                            'Introduction to business process optimization',
                            'Identifying Process bottlenecks',
                            'Analysing data to identifying issues',
                            'Developing data driven solutions',
                            'Recap and practice assignments',
                        ]
                    },
                ]

            },
            {
                class: 'Class 2',
                desc: 'Capstone Project Planning',
                points: [
                    {
                        part: '',
                        points: [
                            'Understanding capstone projects objectives',
                            'Choosing a business problem to solve',
                            'Defining project deliverables',
                            'Creating a project timeline',
                            'Recap and practice assignment',
                        ]
                    },
                ]

            },
            {
                class: 'Class 3',
                desc: 'Data Collection Techniques',
                points: [
                    {
                        part: '',
                        points: [
                            'Introduction to data collection',
                            'Collecting data from multiple sources',
                            'Cleaning and preparing data for analysis',
                            'Validating data accuracy',
                            'Recap and practice assignments',
                        ]
                    },
                ]

            },
            {
                class: 'Class 4',
                desc: 'Applying Tools for Analysis',
                points: [
                    {
                        part: '',
                        points: [
                            'Introduction to analytical tools',
                            'Analysing data using excel',
                            'SQL for data queries',
                            'Combining excel and sql for business analysis',
                            'Recap and practice assignment',
                        ]
                    },
                ]

            },
            {
                class: 'Class 5',
                desc: 'Building Visualizations',
                points: [
                    {
                        part: '',
                        points: [
                            'Importance of visualising data',
                            'Creating dashboard in power bi',
                            'Creating dashboard in tableau',
                            'Choosing the right visuals for business insights',
                            'Recap and practice assignment',
                        ]
                    },
                ]

            },
            {
                class: 'Class 6',
                desc: 'Insight Development',
                points: [
                    {
                        part: '',
                        points: [
                            'Introduction to generating insights',
                            'Interpreting analysis results',
                            'Aligning insights with business objectives',
                            'Developing recommendations based on data',
                            'Recap and practice assignment',
                        ]
                    },
                ]

            },
            {
                class: 'Class 7',
                desc: 'Preparing the Final Report',
                points: [
                    {
                        part: '',
                        points: [
                            'Introduction to report preparation',
                            'Structuring the report',
                            'Summarizing key findings',
                            'Designing a visually appealing report',
                            'Recap and practice assignment',
                        ]
                    },
                ]

            },
            {
                class: 'Class 8',
                desc: 'Presentation and Feedback',
                points: [
                    {
                        part: '',
                        points: [
                            'Presenting Findings to Stakeholders',
                        ]
                    },
                ]

            },

        ],
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
                                <p className={`text-white ${item.Objective == '' ? 'hidden' : 'block'}`}><b className="text-[#6bffca]">Objective: </b>{item.Objective}</p>
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