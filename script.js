/* 

To ensure full functionality, 
please add the API key for Gemini 1.5 Flash. For the contact form to work, 
you need to include the API key from Web3Form.

*/


let GeminiFlashKey='replace with your api key';

//* ------------------------------------------  *
//* ------------Template json-------------------------  *
//* ------------------------------------------  *

const templates = [{
        id: 'Language_Translator',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/3898/3898082.png",
        alt: "Language Translator",
        title: "Language Translator",
        description: "An AI tool that translates text from one language to another.",
        inputCheck: true,
        npInputLabel: 'Enter source language and target language',
        textareaCheck: true,
        nptextareaLabel: 'Enter text to translate',
        generatePrompt: function(input, textarea) {
            return `As a professional language translator, translate the provided text accurately. First, identify the source language and target language from the user input. Then, translate the following text: "${textarea}". The source language is "${input}" and the target language is "${input}". Return the translated text in a clean paragraph.`;
        }
    }, {
        id: 'Essay_Topic_Suggester',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/8121/8121644.png",
        alt: "Essay Topic Suggester",
        title: "Essay Topic Suggester",
        description: "An AI tool that suggests essay topics based on your subject or area of interest.",
        inputCheck: true,
        npInputLabel: 'Enter your subject or area of interest',
        textareaCheck: false,
        nptextareaLabel: '',
        generatePrompt: function(input) {
            return `As an essay topic suggestion expert, suggest engaging and relevant essay topics. First, identify the subject or area of interest from the user input. Then, generate a list of essay topics based on the provided subject: "${input}". Return the topics in a numbered or bulleted list format.`;
        }
    },
    {
        id: 'Essay_Outline_Generator',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/2275/2275561.png",
        alt: "Essay Outline Generator",
        title: "Essay Outline Generator",
        description: "An AI tool that generates a detailed essay outline based on your essay topic.",
        inputCheck: true,
        npInputLabel: 'Enter your essay topic',
        textareaCheck: false,
        nptextareaLabel: '',
        generatePrompt: function(input) {
            return `As an essay outline expert, generate a detailed and structured essay outline. First, identify the essay topic from the user input. Then, break down the topic into key sections like introduction, body, and conclusion, providing subtopics or arguments for each. The essay topic is: "${input}". Present the outline in a structured format, using bullet points or headings with subpoints.`;
        }
    },
    {
        id: 'Research_Paper_Ideas',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/9028/9028717.png",
        alt: "Research Paper Ideas",
        title: "Research Paper Ideas",
        description: "An AI tool that generates research paper ideas based on your field of study.",
        inputCheck: true,
        npInputLabel: 'Enter your field of study',
        textareaCheck: false,
        nptextareaLabel: '',
        generatePrompt: function(input) {
            return `As a research paper idea generation expert, generate innovative research paper ideas. First, identify the field of study from the user input. Then, analyze key topics, trends, or areas of research within that field. Generate a list of relevant research paper ideas for the field of study: "${input}". Present the ideas in a numbered or bulleted list format.`;
        }
    },
    {
        id: 'Thesis_Statement_Generator',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/10262/10262852.png",
        alt: "Thesis Statement Generator",
        title: "Thesis Statement Generator",
        description: "An AI tool that generates thesis statements based on your essay or research paper topic.",
        inputCheck: true,
        npInputLabel: 'Enter your essay or research paper topic',
        textareaCheck: false,
        nptextareaLabel: '',
        generatePrompt: function(input) {
            return `As a thesis statement generation expert, create a clear and concise thesis statement. First, identify the essay or research paper topic from the user input. Then, craft a thesis statement that clearly presents the central argument or claim for the topic: "${input}". Provide the thesis statement as a single, impactful sentence.`;
        }
    },
    {
        id: 'Study_Plan_Generator',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/3206/3206016.png",
        alt: "Study Plan Generator",
        title: "Study Plan Generator",
        description: "An AI tool that creates a personalized study plan based on your subjects and study goals.",
        inputCheck: true,
        npInputLabel: 'Enter your subjects and study goals',
        textareaCheck: false,
        nptextareaLabel: '',
        generatePrompt: function(input) {
            return `As a study plan creation expert, develop a personalized study plan. First, identify the subjects and study goals from the user input. Then, create a detailed plan that includes schedules, milestones, and recommended activities for achieving the study goals. The subjects and goals are: "${input}". Present the plan in a structured format, such as a timeline or list of actionable steps.`;
        }
    },
    {
        id: 'Exam_Question_Generator',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/5277/5277568.png",
        alt: "Exam Question Generator",
        title: "Exam Question Generator",
        description: "An AI tool that generates exam questions based on your topic or subject.",
        inputCheck: true,
        npInputLabel: 'Enter your topic or subject',
        textareaCheck: false,
        nptextareaLabel: '',
        generatePrompt: function(input) {
            return `As an exam question generation expert, create a set of exam questions. First, identify the topic or subject from the user input. Then, generate a range of relevant and challenging questions, including different types such as multiple-choice, short answer, or easy questions. For multiple-choice questions, provide each option on a new line. Provide the answers or key points for the questions at the end. The topic or subject is: "${input}". Present the questions in a numbered or bulleted list format, with answers listed separately at the end.`;
        }
    },
    {
        id: 'Lesson_Plan_Generator',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/7342/7342013.png",
        alt: "Lesson Plan Generator",
        title: "Lesson Plan Generator",
        description: "An AI tool that creates lesson plans based on your subject and class level.",
        inputCheck: true,
        npInputLabel: 'Enter your subject and class level',
        textareaCheck: false,
        nptextareaLabel: '',
        generatePrompt: function(input) {
            return `As a lesson plan creation expert, develop a detailed lesson plan. First, identify the subject and class level from the user input. Then, create a structured lesson plan that includes objectives, materials needed, step-by-step instructions, and assessment methods. Ensure the plan is suitable for the specified class level and effectively covers the subject matter. The subject and class level are: "${input}". Present the lesson plan in a detailed outline or structured format with clear headings.`;
        }
    },
    {
        id: 'Presentation_Slide_Ideas',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/7522/7522027.png",
        alt: "Presentation Slide Ideas",
        title: "Presentation Slide Ideas",
        description: "An AI tool that suggests ideas for your presentation slides based on your topic.",
        inputCheck: true,
        npInputLabel: 'Enter your presentation topic',
        textareaCheck: true,
        nptextareaLabel: 'Enter number of slide (maximum 30)*',
        generatePrompt: function(input, textarea) {
            return `As a presentation slide idea generator, suggest ideas for presentation slides. First, identify the presentation topic from the user input. Then, generate a range of slide ideas for ${textarea} slides, including potential titles, main points, visual elements, and suggested content for each slide. Ensure the ideas are relevant, engaging, and well-suited to the topic. The presentation topic is: "${input}". Present the slide ideas in a list format, with each idea clearly outlined.`;
        }
    },
    {
        id: 'Paragraph_Summarizer',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/1311/1311602.png",
        alt: "Paragraph Summarizer",
        title: "Paragraph Summarizer",
        description: "An AI tool that summarizes paragraphs into concise points.",
        inputCheck: false,
        npInputLabel: '',
        textareaCheck: true,
        nptextareaLabel: 'Enter text to summarize',
        generatePrompt: function(textarea) {
            return `As a paragraph summarizer, summarize the following text into concise points. Analyze the text to extract the key points and essential information, and condense it into a series of clear and concise points that capture the main ideas. The text to summarize is: "${textarea}". Present the summary in a bullet-point or numbered list format, with each point representing a key idea from the text.`;
        }
    }, {
        id: 'Blog_Title',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/4693/4693321.png",
        alt: "Blog Title",
        title: "Blog Title",
        description: "An AI tool that generates blog titles based on your blog information.",
        inputCheck: true,
        npInputLabel: 'Enter your blog niche',
        textareaCheck: true,
        nptextareaLabel: 'Enter blog outline',
        generatePrompt: function(input, textarea) {
            return `As a blog title generator, create a catchy and relevant blog title based on the provided information. First, identify the blog niche from the user input. Then, review the blog outline to understand the key themes, topics, and unique points. Generate a blog title that is engaging, reflective of the content, and aligns with the niche and outline. The blog niche is: "${input}". The blog outline is: "${textarea}". Present the title in a single line.`;
        }
    },
    {
        id: 'Blog_Content',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
        alt: "Blog Content",
        title: "Blog Content",
        description: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
        inputCheck: true,
        npInputLabel: 'Enter your blog title',
        textareaCheck: true,
        nptextareaLabel: 'Enter blog outline',
        generatePrompt: function(input, textarea) {
            return `As a blog content generator, create engaging and well-written blog content based on the provided information. First, identify the blog title from the user input. Then, review the blog outline (if provided) to understand any specific points, themes, or structure to include. Generate content that aligns with the title and outline, ensuring it is relevant and suitable for the target audience. The blog title is: "${input}". The blog outline is: "${textarea}". Present the content as a coherent and structured article.`;
        }
    },
    {
        id: 'Blog_Topic_Ideas',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
        alt: "Blog Topic Ideas",
        title: "Blog Topic Ideas",
        description: "An AI tool that generates blog topic ideas for your chosen niche.",
        inputCheck: true,
        npInputLabel: 'Enter your niche',
        textareaCheck: false,
        nptextareaLabel: '',
        generatePrompt: function(input) {
            return `As a blog topic ideas generator, create a range of creative and engaging blog topic ideas based on the provided niche. First, identify the niche from the user input. Then, generate diverse and relevant topic ideas that align with the niche and appeal to the target audience. The blog niche is: "${input}". Present the topic ideas in a list format, with each idea clearly outlined.`;
        }
    },
    {
        id: 'Youtube_SEO_Title',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
        alt: "Youtube SEO Title",
        title: "Youtube SEO Title",
        description: "An AI tool that generates SEO-friendly YouTube video titles based on your keywords and description outline.",
        inputCheck: true,
        npInputLabel: 'Enter your YouTube video topic keywords',
        textareaCheck: true,
        nptextareaLabel: 'Enter YouTube description outline here',
        generatePrompt: function(input, textarea) {
            return `As a YouTube SEO title generator, create an SEO-friendly video title based on the provided information. First, identify the YouTube video topic keywords from the user input. If a description outline is provided, review it to understand additional context. Generate a catchy and SEO-optimized title that reflects the keywords and aligns with the description outline [ total number of title Generate is top 5 ]. The keywords are: "${input}". The description outline is: "${textarea}". Present the title in a single line.`;
        }
    },
    {
        id: 'Youtube_Description',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
        alt: "Youtube Description",
        title: "Youtube Description",
        description: "An AI tool that generates YouTube video descriptions based on your topic or title.",
        inputCheck: true,
        npInputLabel: 'Enter your video topic/title',
        textareaCheck: true,
        nptextareaLabel: 'Enter YouTube outline here',
        generatePrompt: function(input, textarea) {
            return `As a YouTube video description generator, create an SEO-optimized video description based on the provided information. First, identify the video topic or title from the user input. If an outline is provided, review it to incorporate additional context and details. Generate an engaging description that aligns with the topic/title and is optimized for search engines. The topic/title is: "${input}". The outline is: "${textarea}". Present the description with the following sections:


                    1. Video Description (sub heading in center):

                               - Introduction: Briefly introduce the content or theme of the video. Mention what viewers can expect to see or learn.
                               - What’s Inside the Video: Provide a summary of the main segments or features. Include any key highlights or standout moments.
                               - Why You Should Watch: Explain the value or entertainment factor of the video. Highlight any unique aspects or reasons why this video is special or timely.
                               - What to Expect: Describe any prerequisites or background knowledge that might enhance the viewing experience (if applicable). For music videos: Mention the artist, song, and any special features (e.g., collaborations). For action/dance/movies: Tease the content without giving away too much. For news/technology: Highlight the main stories or tech topics covered.
                               - Timestamps: Offer a breakdown of the video with timestamps for easy navigation (optional but useful for longer videos). Include the start times for each major segment or topic.
                               - Call to Action: Encourage viewers to like, share, and subscribe to your channel. Invite them to comment with their thoughts, questions, or feedback.
                               - Additional Resources: Include links to related content or additional information. For music: Link to the artist’s profile or album. For technology: Link to articles or product reviews.
                               - Social Media & Contact Information: Provide links to your social media profiles where viewers can follow for updates. Include any relevant contact information for inquiries or collaborations.
                               - keywords: List relevant keywords that describe the video’s content (useful for search optimization).
                               - Tags: List relevant Tags that describe the video’s content (useful for search optimization).`;
        }
    },
    {
        id: 'Youtube_Hashtags',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/4674/4674918.png",
        alt: "Youtube Hashtags",
        title: "Youtube Hashtags",
        description: "An AI tool that generates YouTube Hashtags based on your video topic or title and description outline.",
        inputCheck: true,
        npInputLabel: 'Enter your video topic/title',
        textareaCheck: true,
        nptextareaLabel: 'Enter YouTube outline here (optional)',
        generatePrompt: function(input, textarea) {
            return `As a YouTube Hashtags generator, create relevant and effective Hashtags for the provided video topic/title. First, identify the video topic or title from the user input. If a description outline is provided, review it for additional context. Generate a set of Hashtags that are related to the topic/title and outline. Ensure the Hashtags are varied and optimized for search engine visibility. The video topic/title is: "${input}". The description outline is: "${textarea}". Present the Hashtags in a list format with each Hashtags on a new line or separated by commas.`;
        }
    },
    {
        id: 'Rewrite_Article',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
        alt: "Rewrite Article",
        title: "Rewrite Article (Plagiarism Free)",
        description: "Use this tool to rewrite an existing article or blog post to bypass AI detectors and make it plagiarism free.",
        inputCheck: false,
        npInputLabel: '',
        textareaCheck: true,
        nptextareaLabel: 'Provide your article/blog post or any other content to rewrite.',
        generatePrompt: function(textarea) {
            return `As a content rewriter, rewrite the following article or blog post to make it plagiarism-free and bypass AI detectors. First, analyze the provided content to understand its key points and structure. Then, rewrite the text while maintaining the original meaning but changing the wording and structure to ensure it is free from plagiarism. Ensure that the rewritten content is coherent and readable. The provided content is: "${textarea}". Present the rewritten article or blog post in a complete text format.`;
        }
    },
    {
        id: 'Text_Improver',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/1686/1686815.png",
        alt: "Text Improver",
        title: "Text Improver",
        description: "This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.",
        inputCheck: false,
        npInputLabel: '',
        textareaCheck: true,
        nptextareaLabel: 'Enter text that you want to re-write or improve',
        generatePrompt: function(textarea) {
            return `As a text improvement expert, refine the following text by eliminating errors and redundancies, and enhance its clarity. First, analyze the provided text to identify errors, redundancies, and areas for better wording. Then, improve the text by correcting errors, removing redundancies, and offering a comprehensive tone analysis. Suggest better word choices to enhance readability. The provided text is: "${textarea}". Present the refined text as a complete, revised version. and in last then write by corrected sentence`;
        }
    }, {
        id: 'Project_Proposal_Generator',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/1509/1509612.png",
        alt: "Project Proposal Generator",
        title: "Project Proposal Generator",
        description: "An AI tool that generates project proposals based on your project idea and objectives.",
        inputCheck: true,
        npInputLabel: 'Enter your project idea',
        textareaCheck: true,
        nptextareaLabel: 'Enter your project objectives',
        generatePrompt: function(input, textarea) {
            return `As a project proposal generator, create a detailed project proposal for the project idea: ${input}. First, analyze the project idea to understand its scope and requirements. Then, incorporate the provided project objectives to outline specific goals and deliverables. Generate a comprehensive proposal that includes an introduction, project scope, objectives, methodology, timeline, and expected outcomes. The project objectives are: "${textarea}". Present the proposal in a structured document format.`;
        }
    },
    {
        id: 'Lab_Report_Generator',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/17084/17084918.png",
        alt: "Lab Report Generator",
        title: "Lab Report Generator",
        description: "An AI tool that generates lab reports based on your experiment details.",
        inputCheck: true,
        npInputLabel: 'Enter your experiment title',
        textareaCheck: true,
        nptextareaLabel: 'Enter your experiment details',
        generatePrompt: function(input, textarea) {
            return `As a lab report generator, create a detailed lab report for the experiment titled: ${input}. First, analyze the experiment title to understand its main focus. Then, incorporate the provided experiment details to include specific information on methodology, results, and analysis. Generate a comprehensive lab report that includes sections for introduction, methodology, results, discussion, and conclusion. The experiment details are: "${textarea}". Present the report in a structured document format.`;
        }
    },
    {
        id: 'Math_Problem_Solver',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/2436/2436635.png",
        alt: "Math Problem Solver",
        title: "Math Problem Solver",
        description: "An AI tool that solves math problems step-by-step.",
        inputCheck: false,
        npInputLabel: '',
        textareaCheck: true,
        nptextareaLabel: 'Enter your math problem',
        generatePrompt: function(textarea) {
            return `As a math problem solver, solve the following math problem step-by-step: ${textarea}. Break down the problem into smaller, manageable steps, solve each step systematically, and provide a clear explanation of each part of the process. Present the solution in a step-by-step format.`;
        }
    },
    {
        id: 'Science_Experiment_Ideas',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/9750/9750906.png",
        alt: "Science Experiment Ideas",
        title: "Science Experiment Ideas",
        description: "An AI tool that suggests science experiment ideas based on your chosen topic.",
        inputCheck: true,
        npInputLabel: 'Enter your science topic',
        textareaCheck: false,
        nptextareaLabel: '',
        generatePrompt: function(input) {
            return `As a science experiment advisor, suggest science experiment ideas for the topic: ${input}. Generate a range of creative and relevant experiment ideas, ensuring they are feasible and suitable for the topic. Present the ideas in a clear and organized list format.`;
        }
    },
    {
        id: 'Book_Recommendation',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/10221/10221707.png",
        alt: "Book Recommendation",
        title: "Book Recommendation",
        description: "An AI tool that recommends books based on your interests and reading history.",
        inputCheck: true,
        npInputLabel: 'Enter your interests or favorite genres',
        textareaCheck: false,
        nptextareaLabel: '',
        generatePrompt: function(input) {
            return `As a book recommendation expert, recommend books based on the interests or genres: ${input}. Suggest a variety of books that align with these preferences. Present the recommendations in a clear and organized list format.`;
        }
    },

    {
        id: 'Coding_Tutor',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/8761/8761020.png",
        alt: "Coding Tutor",
        title: "Coding Tutor",
        description: "An AI tool that provides coding help and explanations for programming concepts.",
        inputCheck: true,
        npInputLabel: 'Enter your programming language',
        textareaCheck: true,
        nptextareaLabel: 'Enter your coding question or issue',
        generatePrompt: function(input, textarea) {
            return `As a coding tutor, provide help and explanations for the following issue in ${input}: ${textarea}. Address the problem with clear explanations and solutions, ensuring the guidance is relevant to the specified programming language.`;
        }
    },
    {
        id: 'Resume_Builder',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/2986/2986483.png",
        alt: "Resume Builder",
        title: "Resume Builder",
        description: "An AI tool that generates a professional resume based on your details and job target.",
        inputCheck: true,
        npInputLabel: 'Enter your job target',
        textareaCheck: true,
        nptextareaLabel: 'Enter your personal and work details',
        generatePrompt: function(input, textarea) {
            return `Generate a professional resume for the job target: ${input}. Personal and work details: ${textarea}.`;
        }
    },
    {
        id: 'Cover_Letter_Generator',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/6186/6186023.png",
        alt: "Cover Letter Generator",
        title: "Cover Letter Generator",
        description: "An AI tool that generates a cover letter based on your job application details.",
        inputCheck: true,
        npInputLabel: 'Enter the job title and company',
        textareaCheck: true,
        nptextareaLabel: 'Enter your qualifications and experience',
        generatePrompt: function(input, textarea) {
            return `acts as a cover letter generator.
                    Generate a compelling cover letter.
                        1 Identify the job title and company from the ${input} .
                        2 Include relevant details from the  ${textarea} .
                        3 if there is about a user name and detail from the  ${textarea}.
                        4 Craft an engaging introduction, summarize qualifications and experience, highlight achievements, and conclude with a strong closing statement.
                    The user is applying for a job and needs a cover letter that aligns with the job and company
                    Provide a structured cover letter with distinct sections: Introduction, Experience and Skills, Certifications, Company Fit, and Closing.
                    Key Points of the Cover Letter:
                        - Introduction: Clearly states the position being applied for and briefly mentions qualifications.
                        - Experience and Skills: Highlights relevant achievements and skills from past roles.
                        - Certifications: Lists certifications to demonstrate additional qualifications.
                        - Company Fit: Expresses enthusiasm for the company and how the candidate’s skills align with the company’s goals.
                        - Closing: Includes a call to action for an interview and provides contact information.`;
        }
    },
    {
        id: 'Quiz_Question_Generator',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/5732/5732057.png",
        alt: "Quiz Question Generator",
        title: "Quiz Question Generator",
        description: "An AI tool that generates quiz questions based on your topic or subject.",
        inputCheck: true,
        npInputLabel: 'Enter your topic or subject',
        textareaCheck: false,
        nptextareaLabel: ')',
        generatePrompt: function(input) {
            return `As an expert quiz question generator, create a comprehensive set of quiz questions based on the provided topic or subject. Start by identifying the topic or subject from the user input. Then, develop a diverse set of questions that thoroughly cover various aspects of the topic, ensuring a balanced mix of difficulty levels. For multiple-choice questions, list each option on a new line beneath the question. At the end, provide the correct answers or key points for each question, listed separately in a clear and organized manner, with each answer on a new line. The topic or subject is: "${input}". Present the quiz questions in a numbered or bulleted list format with each option in new new line, with the correct answers listed at the end.`;
        }
    }, {
        id: 'YouTube_Thumbnail_Generator_tips',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/17520/17520262.png",
        alt: "YouTube Thumbnail Generator Idea",
        title: "YouTube Thumbnail Generator Idea",
        description: "An AI tool that give you idea to creates eye-catching thumbnails for your YouTube videos.",
        inputCheck: true,
        npInputLabel: 'Enter your video title',
        textareaCheck: true,
        nptextareaLabel: 'Enter specific thumbnail details or themes',
        generatePrompt: function(input, textarea) {
            return `As a YouTube thumbnail design consultant, provide ideas for creating an eye-catching thumbnail. First, identify the video title from the user input. Optionally, incorporate any specific details or themes provided. Generate ideas for the thumbnail design, including visual elements, text placement, color schemes, and other relevant details. Ensure the ideas are engaging, relevant to the video content, and suitable for attracting viewers. The video title is: "${input}". For optional details or themes: "${textarea}". Present the ideas in a clear format with design suggestions.`;
        }
    },
    {
        id: 'YouTube_Title_Optimizer',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
        alt: "YouTube Title Optimizer",
        title: "YouTube Title Optimizer",
        description: "An AI tool that helps optimize your YouTube video titles for better visibility.",
        inputCheck: true,
        npInputLabel: 'Enter your current video title',
        textareaCheck: true,
        nptextareaLabel: 'Enter keywords or phrases you want to include',
        generatePrompt: function(input, textarea) {
            return `As a YouTube title optimization expert, transform the video title for maximum impact. Begin by analyzing the current video title provided: "${input}". If the user has supplied additional keywords or phrases: "${textarea}", strategically incorporate them to enhance the title's relevance and searchability. Generate a powerful and optimized version of the title that significantly improves visibility and engagement on YouTube. Present the final optimized title clearly, with a focus on how the keywords or phrases have been effectively integrated to attract more viewers.`;
        }
    },
    {
        id: 'YouTube_Script_Assistant',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/2922/2922565.png",
        alt: "YouTube Script Assistant",
        title: "YouTube Script Assistant",
        description: "An AI tool that helps you write scripts for your YouTube videos.",
        inputCheck: true,
        npInputLabel: 'Enter your video topic',
        textareaCheck: true,
        nptextareaLabel: 'Enter key points or segments to cover',
        generatePrompt: function(input, textarea) {
            return `As a YouTube scriptwriting assistant, create a compelling script for the video topic: "${input}". If additional key points or segments have been provided: "${textarea}", incorporate them into the script. Develop a detailed and engaging script with a clear structure, including an introduction, main content, and conclusion. Ensure the script is tailored to the topic and effectively communicates the message to the target audience.`;
        }
    },

    {
        id: 'Workout_Planner',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/3664/3664446.png",
        alt: "Workout Planner",
        title: "Workout Planner",
        description: "An AI tool that creates personalized workout plans based on your fitness level and goals.",
        inputCheck: true,
        npInputLabel: 'Enter your fitness goal (e.g., muscle gain, weight loss)',
        textareaCheck: false,
        nptextareaLabel: '',
        generatePrompt: function(input) {
            return `As a workout planner, create a personalized workout plan tailored to the fitness goal: "${input}". Ensure the plan is suitable for the individual's fitness level and provides a structured routine.`;
        }
    },
    {
        id: 'Meal_Planner',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/9757/9757195.png",
        alt: "Meal Planner",
        title: "Meal Planner",
        description: "An AI tool that creates customized meal plans based on your dietary preferences and health goals.",
        inputCheck: true,
        npInputLabel: 'Enter your dietary preferences (e.g., vegan, low-carb)',
        textareaCheck: false,
        nptextareaLabel: '',
        generatePrompt: function(input) {
            return `As a meal planner, create a customized meal plan that aligns with the dietary preferences: "${input}". Ensure the meal plan supports the individual's health and fitness goals.`;
        }
    },
    {
        id: 'Symptom_Checker',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/670/670875.png",
        alt: "Symptom Checker",
        title: "Symptom Checker",
        description: "An AI tool that analyzes symptoms to provide potential health conditions.",
        inputCheck: false,
        npInputLabel: '',
        textareaCheck: true,
        nptextareaLabel: 'Enter your symptoms',
        generatePrompt: function(textarea) {
            return `add this in heading Symptom Checker and in sub heading  🚨 **Alert:** This AI tool is not a substitute for professional medical advice. Please consult a healthcare professional for a proper diagnosis and treatment. [ Dr. Aditya Gupta 👨🏽‍⚕️ ]\n
             Now, based on the following symptoms: "${textarea}", provide a list of potential health conditions that may be associated with these symptoms. Include suggestions for further actions or when to seek medical advice. Please keep your response informative and concise.`;

        }
    },
    {
        id: 'Mental_Health_Advisor',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/3257/3257860.png",
        alt: "Mental Health Advisor",
        title: "Mental Health Advisor",
        description: "An AI tool that provides mental health advice and coping strategies.",
        inputCheck: true,
        npInputLabel: 'Enter your current mental state or concern',
        textareaCheck: false,
        nptextareaLabel: '',
        generatePrompt: function(input) {
            return `As a mental health advisor, provide advice and coping strategies based on the current mental state or concern: "${input}". Offer support and practical suggestions to help manage this mental health concern.`;
        }
    },
    {
        id: 'Sleep_Tracker',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/14778/14778579.png",
        alt: "Sleep Tracker",
        title: "Sleep Tracker",
        description: "An AI tool that analyzes sleep patterns to provide recommendations for better sleep.",
        inputCheck: false,
        npInputLabel: '',
        textareaCheck: true,
        nptextareaLabel: 'Enter your sleep pattern details',
        generatePrompt: function(textarea) {
            return `As a sleep tracker, analyze the following sleep pattern details: "${textarea}". Provide recommendations to improve sleep quality based on the analysis.`;
        }
    },
    {
        id: 'Hydration_Tracker',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/4721/4721070.png",
        alt: "Hydration Tracker",
        title: "Hydration Tracker",
        description: "An AI tool that tracks daily water intake and provides hydration tips.",
        inputCheck: false,
        npInputLabel: '',
        textareaCheck: true,
        nptextareaLabel: 'Enter your daily water intake details',
        generatePrompt: function(textarea) {
            return `As a hydration tracker, analyze the following daily water intake details: "${textarea}". Provide tips to ensure proper hydration based on the analysis.`;
        }
    },
    {
        id: 'Stress_Manager',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/11315/11315969.png",
        alt: "Stress Manager",
        title: "Stress Manager",
        description: "An AI tool that offers personalized stress management techniques based on your current stress level and specific stress-related concerns.",
        inputCheck: true,
        npInputLabel: 'Enter your current stress level (e.g., low, medium, high)',
        textareaCheck: true,
        nptextareaLabel: 'Describe the specific sources or situations contributing to your stress',
        generatePrompt: function(input, textarea) {
            return `As a stress management expert, provide tailored techniques and strategies based on the user's current stress level and specific stressors. The user's current stress level is "${input}". They have described their stress sources or situations as follows: "${textarea}". Offer a detailed and personalized plan to manage and reduce stress, including practical steps, relaxation exercises, and coping strategies. Ensure the recommendations address the specific concerns mentioned and are appropriate for the stress level indicated.`;
        }
    },
    {
        id: 'Yoga_Guide',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/8086/8086179.png",
        alt: "Yoga Guide",
        title: "Yoga Guide",
        description: "An AI tool that suggests personalized yoga routines based on your fitness and relaxation goals, tailored to your specific needs.",
        inputCheck: true,
        npInputLabel: 'Enter your yoga goal (e.g., relaxation, flexibility)',
        textareaCheck: true,
        nptextareaLabel: 'Provide any specific preferences or limitations (e.g., injuries, preferred duration)',
        generatePrompt: function(input, textarea) {
            return `As a yoga guide, provide a detailed yoga routine tailored to the user's goal: "${input}". Consider the following additional details: "${textarea}". Your response should include a relevant sequence of poses and practices that address the user's fitness or relaxation goal, taking into account any preferences or limitations mentioned. Outline the routine clearly, specifying each pose, its duration, and any modifications or tips to enhance effectiveness. Ensure that the suggested routine is actionable, suitable for the user's context, and sets clear expectations for outcomes. Provide follow-up advice or resources to help the user stay on track with their yoga practice.`;
        }
    },
    {
        id: 'Health_Journal',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/3799/3799748.png",
        alt: "Health Journal",
        title: "Health Journal",
        description: "An AI tool that helps you maintain a daily health journal to track physical and mental well-being.",
        inputCheck: true,
        npInputLabel: 'Enter today’s physical or mental health experiences',
        textareaCheck: false,
        nptextareaLabel: '',
        generatePrompt: function(input) {
            return `As a health journal assistant, summarize today’s health experiences: "${input}". Provide an analysis and suggestions for maintaining or improving well-being.`;
        }
    }

];

//* ------------------------------------------  *
//* ------------Sub-------------------------  *
//* ------------------------------------------  *


let toolCardSection = document.querySelector('.section-content-2');
let toolCardSectionSpinner = document.getElementById('spinner');

function createCard(each) {

    let featureCard = document.createElement('div');
    featureCard.classList.add('feature-card-2');

    let featureCardImgCont = document.createElement('div');
    featureCardImgCont.classList.add('feature-card-cont-img-2');

    let featureCardImg = document.createElement('img');
    featureCardImg.setAttribute('src', each.imgSrc);
    featureCardImg.setAttribute('alt', each.alt);
    featureCardImgCont.appendChild(featureCardImg);

    featureCard.appendChild(featureCardImgCont);


    let featureCardH3 = document.createElement('h3');
    featureCardH3.textContent = each.title;
    featureCard.appendChild(featureCardH3);

    let featureCardP = document.createElement('p');
    featureCardP.textContent = each.description;
    featureCard.appendChild(featureCardP);

    let featureCardButton = document.createElement('button');
    featureCardButton.textContent = 'Open Here';
    featureCardButton.setAttribute('id', each.id);
    featureCardButton.setAttribute('onclick', `callNextPage('${each.id}')`);
    featureCard.appendChild(featureCardButton);


    toolCardSection.appendChild(featureCard);
}


function renderAllCards() {
    toolCardSection.innerHTML = '';
    for (let each of templates) {
        createCard(each);
    }
}

// Initial render of all cards
renderAllCards();



//find need card 
function findCard(query) {
    toolCardSection.innerHTML = '';
    toolCardSectionSpinner.classList.toggle("d-none");

    let found = false;
    for (let each of templates) {
        if (each.title.toLowerCase().includes(query.toLowerCase())) {
            createCard(each); // Function to create and append card elements
            found = true;
        }
    }

    if (!found) {
        let notFound = {
            imgSrc: "https://cdn.iconscout.com/icon/free/png-256/free-data-not-found-1965034-1662569.png",
            alt: "No Tool Found!",
            title: "Tool Not Found",
            description: "Sorry, no tools match your search"
        };
        createCard(notFound); // Create and append the "not found" card
    }
}

//serch part 
let searchInputEl = document.getElementById('toolFind');

searchInputEl.addEventListener('keyup', function(event) {
    if (event.target.value === '') {
        renderAllCards();
    } else {
        findCard(searchInputEl.value.toLowerCase());
    }
});




/*
======================================================================
Tools response direct 
======================================================================
*/

const downloadPdfCSS = ` body {
                        padding: 16px;
                        color: #1fc440;
                        font-size: 16px;
                        line-height: 1.6;
                    }

                    body strong {
                        color: #4a148c;
                        font-weight: bold;
                        background: linear-gradient(135deg, #ffffff 0%, #e3e3e3 100%);
                        padding: 2px 4px;
                        border-radius: 4px;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    }

                    body ul,
                    body ol {
                        margin: 16px auto;
                        color: #d32f2f;
                        background: #f9f9f9;
                        padding: 10px 20px;
                        border-left: 4px solid #d32f2f;
                        border-radius: 4px;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    }

                    body ul li,
                    body ol li {
                        padding: 8px 0;
                        color: #424242;
                    }

                    body p {
                        margin: 14px auto;
                        color: #1a237e;
                        font-size: 16px;
                        line-height: 1.8;
                    }

                    body img {
                        max-width: 100%;
                        height: auto;
                        display: block;
                        margin: 10px 0;
                    }

                    body video {
                        max-width: 100%;
                        height: auto;
                        display: block;
                        margin: 10px 0;
                    }`;

function callToolResponsePage(idx) {
    // Find the template based on the provided index
    const template = templates.find(template => template.id === idx);

    if (template) {
        calledToNextPage2();
        // Select the next page section
        const nextPageSection = document.getElementById('nextPage2');

        // Create the loader wrapper div
        const loaderWrapperDiv = document.createElement('div');
        loaderWrapperDiv.id = 'loader-wrapper2';
        loaderWrapperDiv.className = 'loader-wrapper d-none';

        // Create the loader div inside the loader wrapper
        const loaderDiv = document.createElement('div');
        loaderDiv.className = 'loader';

        // Create the loader text paragraph
        const loaderText = document.createElement('p');
        loaderText.className = 'loader-text';
        loaderText.textContent = 'Generating content, please wait...';

        // Append the loader and text to the loader wrapper
        loaderWrapperDiv.appendChild(loaderDiv);
        loaderWrapperDiv.appendChild(loaderText);

        // Append the loader wrapper to the nextPage2 section
        nextPageSection.appendChild(loaderWrapperDiv);

        // Create the container for the page content
        const containerFluidDiv = document.createElement("div");
        containerFluidDiv.className = "container-fluid";

        // Create the row for the top buttons
        const rowDiv1 = createButtonRow2();
        containerFluidDiv.appendChild(rowDiv1);

        // Create the row for the content
        const rowDiv2 = createContentRow(template);
        containerFluidDiv.appendChild(rowDiv2);

        // Append the container to the next page section
        nextPageSection.appendChild(containerFluidDiv);

        // Initialize the Quill editor
        const quill = new Quill('#editor', {
            theme: 'snow',
            modules: {
                toolbar: [
                    [{
                        'header': [1, 2, 3, 4, 5, 6, false]
                    }],
                    ['bold', 'italic', 'underline', 'strike'],
                    ['blockquote', 'code-block'],
                    [{
                        'list': 'ordered'
                    }, {
                        'list': 'bullet'
                    }],
                    [{
                        'script': 'sub'
                    }, {
                        'script': 'super'
                    }],
                    [{
                        'indent': '-1'
                    }, {
                        'indent': '+1'
                    }],
                    [{
                        'direction': 'rtl'
                    }],
                    [{
                        'size': ['small', false, 'large', 'huge']
                    }],
                    [{
                        'color': []
                    }, {
                        'background': []
                    }],
                    [{
                        'font': []
                    }],
                    [{
                        'align': []
                    }],
                    ['link', 'image', 'video'],
                    ['clean']
                ]
            }
        });

        // Generate button click handler
        const generateButton = document.querySelector('.generate-button');
        generateButton.onclick = async () => {
            let userInput, textareaValue;

            //add 
            document.getElementById('loader-wrapper2').classList.remove('d-none');

            if (template.inputCheck) {
                userInput = DOMPurify.sanitize(document.getElementById('blog-topic').value);
            }

            if (template.textareaCheck) {
                textareaValue = DOMPurify.sanitize(document.getElementById('blog-outline').value);
            }

            let prompt;
            if (template.inputCheck && template.textareaCheck) {
                prompt = template.generatePrompt(userInput, textareaValue);
            } else if (template.inputCheck) {
                prompt = template.generatePrompt(userInput);
            } else {
                prompt = template.generatePrompt(textareaValue);
            }

            try {
                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GeminiFlashKey}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{
                                text: prompt,
                            }],
                        }],
                    }),
                });

                if (!response.ok) {
                    throw new Error(`Gemini API request failed with status ${response.status}`);
                }

                const data = await response.json();
                const generatedContent = data.candidates[0].content.parts[0].text;
                const sanitizedContent = DOMPurify.sanitize(marked.parse(generatedContent));
                quill.clipboard.dangerouslyPasteHTML(sanitizedContent);

            } catch (error) {
                console.error('Error communicating with Gemini API:', error);
                const editorDiv = document.getElementById('editor');
                editorDiv.textContent = 'Sorry, there was an error processing your request.';
            } finally {
                // Hide loader
                document.getElementById('loader-wrapper2').classList.add('d-none');
            }
        };

        // Copy button click handler
        const copyButton = document.querySelector('.copy-button');
        copyButton.addEventListener('click', () => {
            const content = quill.getText();
            navigator.clipboard.writeText(content)
                .then(() => alert('Content copied to clipboard!'))
                .catch(err => console.error('Could not copy text: ', err));
        });


        // Select all elements with the class 'download-button'
        // Download functionality 
        const downloadButtons = document.querySelectorAll('.download-button');
        const downloadPopup = document.createElement('div');
        downloadPopup.className = 'next-page-download-popup';
        downloadPopup.id = 'nextPageDownloadPopup';
        downloadPopup.innerHTML = `
            <div class="next-page-download-popup-content">
                <button class="next-page-download-close-btn" id="nextPageDownloadClosePopup">×</button>
                <h3>Select Download Format</h3> 
                <button class="next-page-download-option" id="pdfD" data-format="pdf">PDF <img src="https://cdn-icons-png.flaticon.com/128/1859/1859430.png"></button>
                <button class="next-page-download-option" id="imageD" data-format="image">Image</button>
                <button class="next-page-download-option" id="textD" data-format="text">Text</button>       
            </div>
        `;
        document.body.appendChild(downloadPopup);

        downloadButtons.forEach(downloadButton => {
            downloadButton.addEventListener('click', () => {
                downloadPopup.style.display = 'block';
            });
        });

        const closePopup = document.getElementById('nextPageDownloadClosePopup');
        const downloadOptions = document.querySelectorAll('.next-page-download-option');

        closePopup.addEventListener('click', () => {
            downloadPopup.style.display = 'none';
        });
        document.getElementById('back-button-np2').addEventListener('click', () => {
            downloadPopup.style.display = 'none';
        });

        downloadOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                downloadPopup.style.display = 'none';
                quillContentElement = document.querySelector('.ql-editor');
                downloadContent2(e.target.dataset.format, quillContentElement);
            });
        });

        // Quill text-change event listener
        quill.on('text-change', function(delta, oldDelta, source) {
            if (source === 'user') {
                copyButton.removeEventListener('click', copyButton.clickHandler);

                copyButton.clickHandler = () => {
                    navigator.clipboard.writeText(quill.root.innerHTML)
                        .then(() => alert('Content copied to clipboard!'))
                        .catch(err => console.error('Could not copy text: ', err));
                };

                copyButton.addEventListener('click', copyButton.clickHandler);
            }
        });
    }
}

function downloadContent2(format, quillContentElement) {
    if (!quillContentElement) return;

    const contentHTML = quillContentElement.innerHTML;

    // Create a temporary container for styling 
    const tempContainer = document.createElement('div');
    tempContainer.style.width = quillContentElement.offsetWidth + 'px';
    tempContainer.style.height = quillContentElement.scrollHeight + 'px';
    tempContainer.style.overflow = 'hidden';
    tempContainer.style.paddingLeft = '20px';
    tempContainer.innerHTML = contentHTML;
    document.body.appendChild(tempContainer);

    switch (format) {
        case 'image':
            html2canvas(tempContainer, {
                    scale: 2
                })
                .then(canvas => {
                    const link = document.createElement('a');
                    link.href = canvas.toDataURL('image/png');
                    link.download = 'generated_content.png';
                    link.click();
                })
                .finally(() => {
                    document.body.removeChild(tempContainer);
                });
            break;

        case 'text':
            const textContent = quillContentElement.innerText;
            const textBlob = new Blob([textContent], {
                type: 'text/plain'
            });
            const textLink = document.createElement('a');
            textLink.href = URL.createObjectURL(textBlob);
            textLink.download = 'generated_content.txt';
            textLink.click();
            document.body.removeChild(tempContainer);
            break;

        case 'pdf':
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            document.body.appendChild(iframe);

            const doc = iframe.contentWindow.document;
            doc.open();
            doc.write(`
                <html>
                <head>
                    <title>Document</title>
                    <style>
                       ${downloadPdfCSS}
                    </style>
                </head>
                <body>
                    ${contentHTML}
                </body>
                </html>
            `);
            doc.close();

            setTimeout(() => {
                iframe.contentWindow.focus();
                iframe.contentWindow.print();

                iframe.contentWindow.onafterprint = () => {
                    document.body.removeChild(iframe);
                };

                document.body.removeChild(tempContainer);
            }, 500);
            break;
        default:
            console.error("Invalid download format specified.");
    }
}


// Function to create the row for the top buttons2
function createButtonRow2() {
    const rowDiv1 = document.createElement("div");
    rowDiv1.className = "nextPageUpperBottomCard";

    // Home button
    const backButton1 = document.createElement("button");
    backButton1.type = "button";
    backButton1.id = 'back-button-np2';
    backButton1.className = "back-button ml-2 mr-2";
    backButton1.innerHTML = '<i class="fa-solid fa-house"></i>Home';
    backButton1.onclick = () => {
        backFromNextPage2();
        document.getElementById('nextPage2').innerHTML = '';
    };
    rowDiv1.appendChild(backButton1);

    // LinkedIn button
    const backButton2 = document.createElement("button");
    backButton2.type = "button";
    backButton2.className = "linkedin-button";
    backButton2.innerHTML = '<i class="fa-brands fa-linkedin"></i>Linkedin';
    backButton2.addEventListener('click', () => {
        window.open('https://in.linkedin.com/in/adityagupta-profile', '_blank');
    });
    rowDiv1.appendChild(backButton2);

    return rowDiv1;
}
/*
======================================================================
Tools response not d
======================================================================
*/

function callNextPage(idx) {
    // Find the template based on the provided index
    const template = templates.find(template => template.id === idx);

    if (template) {
        // Hide the tool section
        calledToNextPage1();
        // Select the next page section

        const nextPageSection = document.getElementById('nextPage1');

        // Create the loader wrapper div
        const loaderWrapperDiv = document.createElement('div');
        loaderWrapperDiv.id = 'loader-wrapper1';
        loaderWrapperDiv.className = 'loader-wrapper d-none';

        // Create the loader div inside the loader wrapper
        const loaderDiv = document.createElement('div');
        loaderDiv.className = 'loader';

        // Create the loader text paragraph
        const loaderText = document.createElement('p');
        loaderText.className = 'loader-text';
        loaderText.textContent = 'Generating content, please wait...';

        // Append the loader and text to the loader wrapper
        loaderWrapperDiv.appendChild(loaderDiv);
        loaderWrapperDiv.appendChild(loaderText);

        // Append the loader wrapper to the nextPage2 section
        nextPageSection.appendChild(loaderWrapperDiv);


        // Create the container for the page content
        const containerFluidDiv = document.createElement("div");
        containerFluidDiv.className = "container-fluid";

        // Create the row for the top buttons
        const rowDiv1 = createButtonRow1();
        containerFluidDiv.appendChild(rowDiv1);

        // Create the row for the content
        const rowDiv2 = createContentRow(template);
        containerFluidDiv.appendChild(rowDiv2);

        // Append the container to the next page section
        nextPageSection.appendChild(containerFluidDiv);

        // Initialize the Quill editor
        const quill = new Quill('#editor', {
            theme: 'snow',
            modules: {
                toolbar: [
                    [{
                        'header': [1, 2, 3, 4, 5, 6, false]
                    }],
                    ['bold', 'italic', 'underline', 'strike'],
                    ['blockquote', 'code-block'],
                    [{
                        'list': 'ordered'
                    }, {
                        'list': 'bullet'
                    }],
                    [{
                        'script': 'sub'
                    }, {
                        'script': 'super'
                    }],
                    [{
                        'indent': '-1'
                    }, {
                        'indent': '+1'
                    }],
                    [{
                        'direction': 'rtl'
                    }],
                    [{
                        'size': ['small', false, 'large', 'huge']
                    }],
                    [{
                        'color': []
                    }, {
                        'background': []
                    }],
                    [{
                        'font': []
                    }],
                    [{
                        'align': []
                    }],
                    ['link', 'image', 'video'],
                    ['clean']
                ]
            }
        });

        // Generate button click handler
        const generateButton = document.querySelector('.generate-button');
        generateButton.onclick = async () => {
            let userInput, textareaValue;
            //add 
            document.getElementById('loader-wrapper1').classList.remove('d-none');
            if (template.inputCheck) {
                userInput = DOMPurify.sanitize(document.getElementById('blog-topic').value);
            }

            if (template.textareaCheck) {
                textareaValue = DOMPurify.sanitize(document.getElementById('blog-outline').value);
            }

            let prompt;
            if (template.inputCheck && template.textareaCheck) {
                prompt = template.generatePrompt(userInput, textareaValue);
            } else if (template.inputCheck) {
                prompt = template.generatePrompt(userInput);
            } else {
                prompt = template.generatePrompt(textareaValue);
            }

            try {
                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GeminiFlashKey}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{
                                text: prompt,
                            }],
                        }],
                    }),
                });

                if (!response.ok) {
                    throw new Error(`Gemini API request failed with status ${response.status}`);
                }

                const data = await response.json();
                const generatedContent = data.candidates[0].content.parts[0].text;
                const sanitizedContent = DOMPurify.sanitize(marked.parse(generatedContent));
                quill.clipboard.dangerouslyPasteHTML(sanitizedContent);

            } catch (error) {
                console.error('Error communicating with Gemini API:', error);
                const editorDiv = document.getElementById('editor');
                editorDiv.textContent = 'Sorry, there was an error processing your request.';
            } finally {
                // Hide loader
                document.getElementById('loader-wrapper1').classList.add('d-none');
            }
        };

        // Copy button click handler
        const copyButton = document.querySelector('.copy-button');
        copyButton.addEventListener('click', () => {
            const content = quill.getText();
            navigator.clipboard.writeText(content)
                .then(() => alert('Content copied to clipboard!'))
                .catch(err => console.error('Could not copy text: ', err));
        });

        // Download button click handler
        // Download functionality 
        const downloadButtons = document.querySelectorAll('.download-button');
        const downloadPopup = document.createElement('div');
        downloadPopup.className = 'next-page-download-popup';
        downloadPopup.id = 'nextPageDownloadPopup';
        downloadPopup.innerHTML = `
            <div class="next-page-download-popup-content">
                <button class="next-page-download-close-btn" id="nextPageDownloadClosePopup">×</button>
                <h3>Select Download Format</h3> 
                <button class="next-page-download-option" id="pdfD" data-format="pdf">PDF <img src="https://cdn-icons-png.flaticon.com/128/1859/1859430.png"></button>
                <button class="next-page-download-option" id="imageD" data-format="image">Image</button>
                <button class="next-page-download-option" id="textD" data-format="text">Text</button>       
            </div>
        `;
        document.body.appendChild(downloadPopup);

        downloadButtons.forEach(downloadButton => {
            downloadButton.addEventListener('click', () => {
                downloadPopup.style.display = 'block';
            });
        });

        const closePopup = document.getElementById('nextPageDownloadClosePopup');
        const downloadOptions = document.querySelectorAll('.next-page-download-option');

        closePopup.addEventListener('click', () => {
            downloadPopup.style.display = 'none';
        });

        // Assuming 'back-button-np1' is the correct ID for the back button
        document.getElementById('back-button-np1').addEventListener('click', () => {
            downloadPopup.style.display = 'none';
        });

        downloadOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                downloadPopup.style.display = 'none';
                downloadContent1(e.target.dataset.format, quill); // Pass the Quill instance
            });
        });


        // Quill text-change event listener
        quill.on('text-change', function(delta, oldDelta, source) {
            if (source === 'user') {
                copyButton.removeEventListener('click', copyButton.clickHandler);

                copyButton.clickHandler = () => {
                    const content = quill.root.innerText;
                    navigator.clipboard.writeText(content)
                        .then(() => alert('Content copied to clipboard!'))
                        .catch(err => console.error('Could not copy text: ', err));
                };

                copyButton.addEventListener('click', copyButton.clickHandler);
            }
        });
    }
}


function downloadContent1(format, quill) {
    const contentHTML = quill.container.firstChild.innerHTML;

    // Create a temporary container for styling 
    const tempContainer = document.createElement('div');
    tempContainer.style.width = quill.container.offsetWidth + 'px';
    tempContainer.style.height = quill.container.offsetHeight + 'px';
    tempContainer.style.overflow = 'hidden';
    tempContainer.style.paddingLeft = '20px';
    tempContainer.innerHTML = contentHTML;
    document.body.appendChild(tempContainer);

    switch (format) {
        case 'image':
            html2canvas(tempContainer, {
                    scale: 2
                })
                .then(canvas => {
                    const link = document.createElement('a');
                    link.href = canvas.toDataURL('image/png');
                    link.download = 'generated_content.png';
                    link.click();
                })
                .finally(() => {
                    document.body.removeChild(tempContainer);
                });
            break;

        case 'text':
            const textContent = quill.getText();
            const textBlob = new Blob([textContent], {
                type: 'text/plain'
            });
            const textLink = document.createElement('a');
            textLink.href = URL.createObjectURL(textBlob);
            textLink.download = 'generated_content.txt';
            textLink.click();
            document.body.removeChild(tempContainer);
            break;

        case 'pdf':
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            document.body.appendChild(iframe);

            const doc = iframe.contentWindow.document;
            doc.open();
            doc.write(`
                <html>
                <head>
                    <title>Document</title>
                    <style>
                        ${downloadPdfCSS}
                    </style>
                </head>
                <body>
                    ${contentHTML} 
                </body>
                </html>
            `);
            doc.close();

            setTimeout(() => {
                iframe.contentWindow.focus();
                iframe.contentWindow.print();

                iframe.contentWindow.onafterprint = () => {
                    document.body.removeChild(iframe);
                };

                document.body.removeChild(tempContainer);
            }, 500);
            break;

        default:
            console.error("Invalid download format specified.");
    }
}


// Function to create the row for the top buttons1
function createButtonRow1() {
    const rowDiv1 = document.createElement("div");
    rowDiv1.className = "nextPageUpperBottomCard";

    // Home button
    const backButton1 = document.createElement("button");
    backButton1.type = "button";
    backButton1.id = 'back-button-np1';
    backButton1.className = "back-button ml-2 mr-2";
    backButton1.innerHTML = '<i class="fa-solid fa-house"></i>Home';
    backButton1.onclick = () => {
        backFromNextPage1();
        document.getElementById('nextPage1').innerHTML = '';

    };
    rowDiv1.appendChild(backButton1);

    // LinkedIn button
    const backButton2 = document.createElement("button");
    backButton2.type = "button";
    backButton2.className = "linkedin-button";
    backButton2.innerHTML = '<i class="fa-brands fa-linkedin"></i>Linkedin';
    backButton2.addEventListener('click', () => {
        window.open('https://in.linkedin.com/in/adityagupta-profile', '_blank');
    });
    rowDiv1.appendChild(backButton2);

    return rowDiv1;
}

// Function to create the row for the content
function createContentRow(template) {
    const rowDiv2 = document.createElement("div");
    rowDiv2.className = "row";

    // Create the sidebar with template information
    const sidebarDiv = createSidebar(template);
    rowDiv2.appendChild(sidebarDiv);

    // Create the main content with the editor and buttons
    const mainContentDiv = createMainContent();
    rowDiv2.appendChild(mainContentDiv);

    return rowDiv2;
}

// Function to create the sidebar with template information
function createSidebar(template) {
    const sidebarDiv = document.createElement("div");
    sidebarDiv.className = "col-md-3 nextPageSideCard";

    // Image
    const img = document.createElement("img");
    img.src = template.imgSrc;
    img.alt = template.alt;
    sidebarDiv.appendChild(img);

    // Title
    const h2 = document.createElement("h2");
    h2.textContent = DOMPurify.sanitize(template.title);
    sidebarDiv.appendChild(h2);

    // Description
    const p1 = document.createElement("p");
    p1.textContent = DOMPurify.sanitize(template.description);
    sidebarDiv.appendChild(p1);

    // Input and Textarea (if applicable)
    if (template.inputCheck) {
        const label1 = document.createElement("label");
        label1.htmlFor = "blog-topic";
        label1.textContent = DOMPurify.sanitize(template.npInputLabel);
        sidebarDiv.appendChild(label1);

        const input = document.createElement("input");
        input.type = "text";
        input.id = "blog-topic";
        input.placeholder = DOMPurify.sanitize(template.npInputLabel);
        sidebarDiv.appendChild(input);
    }

    if (template.textareaCheck) {
        const label2 = document.createElement("label");
        label2.htmlFor = "blog-outline";
        label2.textContent = DOMPurify.sanitize(template.nptextareaLabel);
        sidebarDiv.appendChild(label2);

        const textarea = document.createElement("textarea");
        textarea.id = "blog-outline";
        textarea.placeholder = DOMPurify.sanitize(template.nptextareaLabel);
        sidebarDiv.appendChild(textarea);
    }

    // Generate button
    const generateButton = document.createElement("button");
    generateButton.className = "btn btn-primary generate-button";
    generateButton.textContent = "Generate Content";
    sidebarDiv.appendChild(generateButton);

    return sidebarDiv;
}

// Function to create the main content with editor and buttons
function createMainContent() {
    const mainContentDiv = document.createElement("div");
    mainContentDiv.className = "col-md-9 nextPageResponseCard";

    // Info for smaller screens
    const p3 = document.createElement('p');
    p3.className = "d-md-none";
    p3.style.color = "#1fc440";
    p3.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
    p3.style.border = "3px solid #51388c";
    p3.style.width = "100%";
    p3.style.textAlign = "center";
    p3.textContent = "SCROLL DOWN";
    mainContentDiv.appendChild(p3);

    // Quill editor
    const editorDiv = document.createElement("div");
    editorDiv.id = "editor";
    mainContentDiv.appendChild(editorDiv);

    // Buttons container
    const mainDownContentDiv = document.createElement('div');
    mainDownContentDiv.classList.add('nextPageUpperBottomCard');

    // Download button
    const downloadButton = document.createElement("button");
    downloadButton.className = "download-button";
    downloadButton.innerHTML = '<i class="fas fa-download"></i> Download';
    mainDownContentDiv.appendChild(downloadButton);

    // Copy button
    const copyButton = document.createElement("button");
    copyButton.className = "copy-button";
    copyButton.innerHTML = '<i class="fas fa-copy"></i> Copy';
    mainDownContentDiv.appendChild(copyButton);

    mainContentDiv.appendChild(mainDownContentDiv);

    return mainContentDiv;
}


//* ------------------------------------------  *
//* ------------Game 1-------------------------  *
//* ------------------------------------------  *

let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("game1userInput");
let autoRestart = document.getElementById("gameResult1");
let randomNum = Math.ceil(Math.random() * 100);

function game1updateRandomNumber() {
    randomNum = Math.ceil(Math.random() * 100);
}

function game1hideMessage(element) {
    if (element === userInput) {
        setTimeout(() => {
            element.value = '';
            element.style.backgroundColor = '';
        }, 3000);
    } else {
        setTimeout(() => {
            element.textContent = '';
            element.style.backgroundColor = '';
        }, 3000);
    }
}

function game1checkGuess() {
    console.log(randomNum);
    let num = parseInt(userInput.value);

    if (num > randomNum) {
        gameResult.style.backgroundColor = "blue";
        gameResult.textContent = num + " is too high! Try again.";
        game1hideMessage(gameResult);
    } else if (num < randomNum) {
        gameResult.style.backgroundColor = "blue";
        gameResult.textContent = num + " is too low! Try again.";
        game1hideMessage(gameResult);
    } else if (num === randomNum) {
        gameResult.style.backgroundColor = "green";
        gameResult.textContent = "Congratulations! You guessed right.";
        autoRestart.textContent = "The game will auto-restart :)";
        game1hideMessage(gameResult);
        game1hideMessage(autoRestart);
        game1hideMessage(userInput);
        game1updateRandomNumber();
    } else {
        gameResult.style.backgroundColor = "red";
        gameResult.textContent = "Please enter a valid number!";
        game1hideMessage(gameResult);
    }
}

//* ------------------------------------------  *
//* ------------Game 2-------------------------  *
//* ------------------------------------------  *

// Game 2

const triviaData = {
    "categories": [{
        "name": "Computer",
        "questions": [{
            "question": "What is the brain of a computer called?",
            "options": ["CPU", "RAM", "Hard Drive", "Monitor"],
            "answer": "CPU"
        }, {
            "question": "What does HTML stand for?",
            "options": ["HyperText Markup Language", "High-Tech Machine Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
            "answer": "HyperText Markup Language"
        }, {
            "question": "What is the difference between a CPU and a GPU?",
            "options": ["CPU handles general processing, GPU specializes in graphics", "GPU handles general processing, CPU specializes in graphics", "They both handle the same tasks", "They are not related"],
            "answer": "CPU handles general processing, GPU specializes in graphics"
        }, {
            "question": "What is the purpose of RAM in a computer?",
            "options": ["Stores the operating system and programs", "Provides long-term storage for data", "Connects the computer to the internet", "Displays images on the screen"],
            "answer": "Stores the operating system and programs"
        }, {
            "question": "What is a binary code?",
            "options": ["A code that uses only 0s and 1s", "A code that uses letters and numbers", "A code used for encryption", "A code used for programming"],
            "answer": "A code that uses only 0s and 1s"
        }, {
            "question": "What is a software?",
            "options": ["A set of instructions that tells a computer what to do", "A physical component of a computer", "A type of data storage", "A network connection"],
            "answer": "A set of instructions that tells a computer what to do"
        }, {
            "question": "What is the difference between a hardware and a software?",
            "options": ["Hardware is the physical components, software is the instructions", "Software is the physical components, hardware is the instructions", "They are both physical components", "They are both sets of instructions"],
            "answer": "Hardware is the physical components, software is the instructions"
        }, {
            "question": "What is an algorithm?",
            "options": ["A set of steps to solve a problem", "A type of programming language", "A data storage method", "A network protocol"],
            "answer": "A set of steps to solve a problem"
        }, {
            "question": "What is the internet?",
            "options": ["A global network of computers", "A type of data storage", "A software program", "A physical device"],
            "answer": "A global network of computers"
        }, {
            "question": "What is a website?",
            "options": ["A collection of web pages accessible over the internet", "A software program", "A physical device", "A data storage method"],
            "answer": "A collection of web pages accessible over the internet"
        }, {
            "question": "What is a search engine?",
            "options": ["A tool used to find information on the internet", "A type of web browser", "A software program", "A physical device"],
            "answer": "A tool used to find information on the internet"
        }, {
            "question": "What is the difference between a web browser and a search engine?",
            "options": ["A web browser lets you visit websites, a search engine helps you find them", "A search engine lets you visit websites, a web browser helps you find them", "They are the same thing", "They are not related"],
            "answer": "A web browser lets you visit websites, a search engine helps you find them"
        }, {
            "question": "What is a file?",
            "options": ["A collection of data stored on a computer", "A type of software", "A physical device", "A network connection"],
            "answer": "A collection of data stored on a computer"
        }, {
            "question": "What is a folder?",
            "options": ["A container for files and other folders", "A type of software", "A physical device", "A network connection"],
            "answer": "A container for files and other folders"
        }, {
            "question": "What is the difference between a file and a folder?",
            "options": ["A file contains data, a folder contains files and other folders", "A folder contains data, a file contains files and other folders", "They are the same thing", "They are not related"],
            "answer": "A file contains data, a folder contains files and other folders"
        }, {
            "question": "What is a virus?",
            "options": ["A type of malware that can damage a computer", "A type of software", "A physical device", "A network connection"],
            "answer": "A type of malware that can damage a computer"
        }, {
            "question": "What is a firewall?",
            "options": ["A security system that protects a computer from unauthorized access", "A type of software", "A physical device", "A network connection"],
            "answer": "A security system that protects a computer from unauthorized access"
        }, {
            "question": "What is a password?",
            "options": ["A secret code used to access a computer or account", "A type of software", "A physical device", "A network connection"],
            "answer": "A secret code used to access a computer or account"
        }]
    }, {
        "name": "Influencers",
        "questions": [{
            "question": "Which social media platform did Elon Musk purchase in 2022?",
            "options": ["Twitter", "Instagram", "Facebook", "TikTok"],
            "answer": "Twitter"
        }, {
            "question": "Who is the most followed person on Instagram as of 2023?",
            "options": ["Cristiano Ronaldo", "Lionel Messi", "Kylie Jenner", "Selena Gomez"],
            "answer": "Cristiano Ronaldo"
        }, {
            "question": "What is the name of the popular social media platform known for short-form video content?",
            "options": ["TikTok", "Instagram", "YouTube", "Twitter"],
            "answer": "TikTok"
        }, {
            "question": "Who is considered the 'Queen of Instagram'?",
            "options": ["Kylie Jenner", "Selena Gomez", "Ariana Grande", "Kim Kardashian"],
            "answer": "Kylie Jenner"
        }, {
            "question": "What is the name of the social media platform that focuses on professional networking?",
            "options": ["LinkedIn", "Twitter", "Facebook", "Instagram"],
            "answer": "LinkedIn"
        }, {
            "question": "What is the term for a person who has a large following on social media and influences their audience?",
            "options": ["Influencer", "Blogger", "Vlogger", "Content Creator"],
            "answer": "Influencer"
        }, {
            "question": "What is the name of the social media platform that was originally known as 'Facemash'?",
            "options": ["Facebook", "Twitter", "Instagram", "Snapchat"],
            "answer": "Facebook"
        }, {
            "question": "What is the name of the social media platform that is known for its ephemeral messages?",
            "options": ["Snapchat", "Instagram", "Twitter", "Facebook"],
            "answer": "Snapchat"
        }, {
            "question": "What is the name of the social media platform that was founded by Jack Dorsey?",
            "options": ["Twitter", "Facebook", "Instagram", "Snapchat"],
            "answer": "Twitter"
        }, {
            "question": "What is the name of the social media platform that is owned by Meta Platforms?",
            "options": ["Facebook", "Instagram", "WhatsApp", "All of the above"],
            "answer": "All of the above"
        }, {
            "question": "What is the name of the social media platform that is known for its focus on live streaming?",
            "options": ["Twitch", "YouTube", "Facebook", "Instagram"],
            "answer": "Twitch"
        }, {
            "question": "What is the name of the social media platform that is known for its focus on gaming?",
            "options": ["Discord", "Twitch", "YouTube", "Facebook"],
            "answer": "Discord"
        }, {
            "question": "What is the name of the social media platform that is known for its focus on sharing photos and videos?",
            "options": ["Instagram", "Facebook", "Twitter", "Snapchat"],
            "answer": "Instagram"
        }, {
            "question": "What is the name of the social media platform that is known for its focus on sharing news and information?",
            "options": ["Twitter", "Facebook", "Instagram", "Snapchat"],
            "answer": "Twitter"
        }, {
            "question": "What is the name of the social media platform that is known for its focus on connecting with friends and family?",
            "options": ["Facebook", "Twitter", "Instagram", "Snapchat"],
            "answer": "Facebook"
        }, {
            "question": "What is the name of the social media platform that is known for its focus on sharing short videos?",
            "options": ["TikTok", "Instagram", "YouTube", "Snapchat"],
            "answer": "TikTok"
        }, {
            "question": "What is the name of the social media platform that is known for its focus on sharing music?",
            "options": ["Spotify", "Apple Music", "SoundCloud", "All of the above"],
            "answer": "All of the above"
        }, {
            "question": "What is the name of the social media platform that is known for its focus on sharing stories?",
            "options": ["Instagram", "Snapchat", "Facebook", "Twitter"],
            "answer": "Instagram"
        }]
    }, {
        "name": "YouTubers",
        "questions": [{
            "question": "What year did YouTube launch?",
            "options": ["2003", "2005", "2007", "2009"],
            "answer": "2005"
        }, {
            "question": "Which YouTuber has the most subscribers as of 2023?",
            "options": ["T-Series", "PewDiePie", "Cocomelon", "SET India"],
            "answer": "T-Series"
        }, {
            "question": "What is the name of the YouTube channel that is known for its educational content?",
            "options": ["Khan Academy", "Crash Course", "TED-Ed", "All of the above"],
            "answer": "All of the above"
        }, {
            "question": "What is the name of the YouTube channel that is known for its gaming content?",
            "options": ["PewDiePie", "Markiplier", "Jacksepticeye", "All of the above"],
            "answer": "All of the above"
        }, {
            "question": "What is the name of the YouTube channel that is known for its comedy content?",
            "options": ["PewDiePie", "MrBeast", "Ryan Higa", "All of the above"],
            "answer": "All of the above"
        }, {
            "question": "What is the name of the YouTube channel that is known for its beauty and fashion content?",
            "options": ["James Charles", "Jeffree Star", "NikkieTutorials", "All of the above"],
            "answer": "All of the above"
        }, {
            "question": "What is the name of the YouTube channel that is known for its music content?",
            "options": ["Vevo", "Justin Bieber", "Taylor Swift", "All of the above"],
            "answer": "All of the above"
        }, {
            "question": "What is the name of the YouTube channel that is known for its vlogging content?",
            "options": ["Casey Neistat", "David Dobrik", "Logan Paul", "All of the above"],
            "answer": "All of the above"
        }, {
            "question": "What is the name of the YouTube channel that is known for its food content?",
            "options": ["Tasty", "Bon Appétit", "Food Wishes", "All of the above"],
            "answer": "All of the above"
        }, {
            "question": "What is the name of the YouTube channel that is known for its travel content?",
            "options": ["The Points Guy", "Travel on the Brain", "Hey Nadine", "All of the above"],
            "answer": "All of the above"
        }, {
            "question": "What is the name of the YouTube channel that is known for its educational content for kids?",
            "options": ["Cocomelon", "Pinkfong!", "ChuChu TV", "All of the above"],
            "answer": "All of the above"
        }, {
            "question": "What is the name of the YouTube channel that is known for its science content?",
            "options": ["Veritasium", "SciShow", "Vsauce", "All of the above"],
            "answer": "All of the above"
        }, {
            "question": "What is the name of the YouTube channel that is known for its history content?",
            "options": ["History Matters", "The Great War", "Extra Credits", "All of the above"],
            "answer": "All of the above"
        }, {
            "question": "What is the name of the YouTube channel that is known for its technology content?",
            "options": ["TechCrunch", "The Verge", "CNET", "All of the above"],
            "answer": "All of the above"
        }, {
            "question": "What is the name of the YouTube channel that is known for its sports content?",
            "options": ["ESPN", "Bleacher Report", "SportsCenter", "All of the above"],
            "answer": "All of the above"
        }, {
            "question": "What is the name of the YouTube channel that is known for its news content?",
            "options": ["CNN", "BBC News", "Reuters", "All of the above"],
            "answer": "All of the above"
        }, {
            "question": "What is the name of the YouTube channel that is known for its entertainment content?",
            "options": ["Netflix", "Hulu", "Amazon Prime Video", "All of the above"],
            "answer": "All of the above"
        }, {
            "question": "What is the name of the YouTube channel that is known for its documentary content?",
            "options": ["National Geographic", "BBC Earth", "Discovery Channel", "All of the above"],
            "answer": "All of the above"
        }]
    }, {
        "name": "Facts",
        "questions": [{
            "question": "What is the capital of Australia?",
            "options": ["Sydney", "Melbourne", "Canberra", "Perth"],
            "answer": "Canberra"
        }, {
            "question": "How many hearts does an octopus have?",
            "options": ["1", "2", "3", "4"],
            "answer": "3"
        }, {
            "question": "What is the smallest country in the world?",
            "options": ["Vatican City", "Monaco", "Nauru", "Tuvalu"],
            "answer": "Vatican City"
        }, {
            "question": "What is the largest ocean in the world?",
            "options": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
            "answer": "Pacific Ocean"
        }, {
            "question": "What is the highest mountain in the world?",
            "options": ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
            "answer": "Mount Everest"
        }, {
            "question": "What is the longest river in the world?",
            "options": ["Nile River", "Amazon River", "Yangtze River", "Mississippi River"],
            "answer": "Nile River"
        }, {
            "question": "What is the largest desert in the world?",
            "options": ["Antarctica", "Arctic", "Sahara Desert", "Arabian Desert"],
            "answer": "Antarctica"
        }, {
            "question": "What is the largest rainforest in the world?",
            "options": ["Amazon Rainforest", "Congo Rainforest", "New Guinea Rainforest", "Valdivian Temperate Rainforest"],
            "answer": "Amazon Rainforest"
        }, {
            "question": "What is the hottest planet in our solar system?",
            "options": ["Venus", "Mercury", "Mars", "Jupiter"],
            "answer": "Venus"
        }, {
            "question": "What is the smallest planet in our solar system?",
            "options": ["Mercury", "Mars", "Venus", "Earth"],
            "answer": "Mercury"
        }, {
            "question": "What is the name of the largest moon in our solar system?",
            "options": ["Ganymede", "Titan", "Callisto", "Io"],
            "answer": "Ganymede"
        }, {
            "question": "What is the name of the first person to walk on the moon?",
            "options": ["Neil Armstrong", "Buzz Aldrin", "Michael Collins", "Edwin Aldrin"],
            "answer": "Neil Armstrong"
        }, {
            "question": "What is the name of the first woman to walk in space?",
            "options": ["Valentina Tereshkova", "Sally Ride", "Svetlana Savitskaya", "Judith Resnik"],
            "answer": "Valentina Tereshkova"
        }, {
            "question": "What is the name of the first animal to be sent into space?",
            "options": ["Laika", "Ham", "Albert II", "Able"],
            "answer": "Laika"
        }, {
            "question": "What is the name of the first artificial satellite to orbit the Earth?",
            "options": ["Sputnik 1", "Explorer 1", "Vanguard 1", "Luna 1"],
            "answer": "Sputnik 1"
        }, {
            "question": "What is the name of the first spacecraft to land on the moon?",
            "options": ["Apollo 11", "Luna 2", "Surveyor 1", "Ranger 7"],
            "answer": "Apollo 11"
        }, {
            "question": "What is the name of the first human to orbit the Earth?",
            "options": ["Yuri Gagarin", "Alan Shepard", "John Glenn", "Valentina Tereshkova"],
            "answer": "Yuri Gagarin"
        }, {
            "question": "What is the name of the first space shuttle to be launched into space?",
            "options": ["Columbia", "Challenger", "Discovery", "Atlantis"],
            "answer": "Columbia"
        }, {
            "question": "What is the name of the first space station to be assembled in space?",
            "options": ["International Space Station", "Salyut 1", "Skylab", "Mir"],
            "answer": "Salyut 1"
        }]
    }, {
        "name": "Science",
        "questions": [{
            "question": "What is the chemical symbol for gold?",
            "options": ["Go", "Ag", "Au", "Fe"],
            "answer": "Au"
        }, {
            "question": "What is the speed of light?",
            "options": ["299,792,458 meters per second", "186,282 miles per second", "Both a and b", "None of the above"],
            "answer": "Both a and b"
        }, {
            "question": "What is the name of the smallest particle of an element that can exist?",
            "options": ["Atom", "Molecule", "Ion", "Proton"],
            "answer": "Atom"
        }, {
            "question": "What is the name of the force that keeps objects on the ground?",
            "options": ["Gravity", "Friction", "Magnetism", "Electromagnetism"],
            "answer": "Gravity"
        }, {
            "question": "What is the name of the process by which water changes from a liquid to a gas?",
            "options": ["Evaporation", "Condensation", "Freezing", "Melting"],
            "answer": "Evaporation"
        }, {
            "question": "What is the name of the unit used to measure temperature?",
            "options": ["Celsius", "Fahrenheit", "Kelvin", "All of the above"],
            "answer": "All of the above"
        }, {
            "question": "What is the name of the force that opposes motion?",
            "options": ["Friction", "Gravity", "Magnetism", "Electromagnetism"],
            "answer": "Friction"
        }, {
            "question": "What is the name of the law that states that energy cannot be created or destroyed, only transformed?",
            "options": ["Law of Conservation of Energy", "Law of Thermodynamics", "Law of Gravity", "Law of Motion"],
            "answer": "Law of Conservation of Energy"
        }, {
            "question": "What is the name of the process by which plants convert sunlight into energy?",
            "options": ["Photosynthesis", "Respiration", "Transpiration", "Pollination"],
            "answer": "Photosynthesis"
        }, {
            "question": "What is the name of the process by which plants release water vapor into the atmosphere?",
            "options": ["Transpiration", "Respiration", "Photosynthesis", "Pollination"],
            "answer": "Transpiration"
        }, {
            "question": "What is the name of the process by which plants reproduce?",
            "options": ["Pollination", "Fertilization", "Germination", "All of the above"],
            "answer": "All of the above"
        }, {
            "question": "What is the name of the part of a plant that absorbs water and nutrients from the soil?",
            "options": ["Roots", "Stem", "Leaves", "Flowers"],
            "answer": "Roots"
        }, {
            "question": "What is the name of the part of a plant that supports the leaves and flowers?",
            "options": ["Stem", "Roots", "Leaves", "Flowers"],
            "answer": "Stem"
        }, {
            "question": "What is the name of the part of a plant that makes food for the plant?",
            "options": ["Leaves", "Roots", "Stem", "Flowers"],
            "answer": "Leaves"
        }, {
            "question": "What is the name of the part of a plant that attracts insects for pollination?",
            "options": ["Flowers", "Roots", "Stem", "Leaves"],
            "answer": "Flowers"
        }, {
            "question": "What is the name of the gas that is essential for plant growth?",
            "options": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
            "answer": "Carbon dioxide"
        }, {
            "question": "What is the name of the gas that is released by plants during photosynthesis?",
            "options": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
            "answer": "Oxygen"
        }, {
            "question": "What is the name of the process by which animals obtain energy from food?",
            "options": ["Respiration", "Photosynthesis", "Transpiration", "Pollination"],
            "answer": "Respiration"
        }]
    }, {
        "name": "Biology",
        "questions": [{
            "question": "What is the process by which plants convert sunlight into energy?",
            "options": ["Photosynthesis", "Respiration", "Transpiration", "Pollination"],
            "answer": "Photosynthesis"
        }, {
            "question": "What is the basic unit of life?",
            "options": ["Cell", "Tissue", "Organ", "Organism"],
            "answer": "Cell"
        }, {
            "question": "What are the two main types of cells?",
            "options": ["Prokaryotic and Eukaryotic", "Plant and Animal", "Somatic and Germ", "Unicellular and Multicellular"],
            "answer": "Prokaryotic and Eukaryotic"
        }, {
            "question": "What is the name of the process by which cells divide?",
            "options": ["Mitosis", "Meiosis", "Binary fission", "All of the above"],
            "answer": "All of the above"
        }, {
            "question": "What is the name of the genetic material found in the nucleus of a cell?",
            "options": ["DNA", "RNA", "Protein", "Carbohydrate"],
            "answer": "DNA"
        }, {
            "question": "What is the name of the process by which DNA is copied?",
            "options": ["Replication", "Transcription", "Translation", "Mutation"],
            "answer": "Replication"
        }, {
            "question": "What is the name of the process by which DNA is used to make proteins?",
            "options": ["Translation", "Transcription", "Replication", "Mutation"],
            "answer": "Translation"
        }, {
            "question": "What is the name of the process by which RNA is used to make proteins?",
            "options": ["Transcription", "Translation", "Replication", "Mutation"],
            "answer": "Transcription"
        }, {
            "question": "What is the name of the process by which organisms change over time?",
            "options": ["Evolution", "Adaptation", "Natural selection", "All of the above"],
            "answer": "All of the above"
        }, {
            "question": "What is the name of the theory that explains the origin of life on Earth?",
            "options": ["Theory of Evolution", "Theory of Abiogenesis", "Theory of Panspermia", "Theory of Creationism"],
            "answer": "Theory of Abiogenesis"
        }, {
            "question": "What is the name of the process by which organisms obtain energy from food?",
            "options": ["Respiration", "Photosynthesis", "Digestion", "All of the above"],
            "answer": "All of the above"
        }, {
            "question": "What is the name of the system that transports blood throughout the body?",
            "options": ["Circulatory system", "Respiratory system", "Digestive system", "Nervous system"],
            "answer": "Circulatory system"
        }, {
            "question": "What is the name of the system that is responsible for breathing?",
            "options": ["Respiratory system", "Circulatory system", "Digestive system", "Nervous system"],
            "answer": "Respiratory system"
        }, {
            "question": "What is the name of the system that is responsible for breaking down food?",
            "options": ["Digestive system", "Respiratory system", "Circulatory system", "Nervous system"],
            "answer": "Digestive system"
        }, {
            "question": "What is the name of the system that controls the body's functions?",
            "options": ["Nervous system", "Circulatory system", "Respiratory system", "Digestive system"],
            "answer": "Nervous system"
        }, {
            "question": "What is the name of the largest organ in the human body?",
            "options": ["Skin", "Liver", "Brain", "Heart"],
            "answer": "Skin"
        }, {
            "question": "What is the name of the smallest unit of a muscle?",
            "options": ["Muscle fiber", "Myofibril", "Sarcomere", "Actin"],
            "answer": "Muscle fiber"
        }, {
            "question": "What is the name of the protein that is responsible for muscle contraction?",
            "options": ["Actin", "Myosin", "Troponin", "Tropomyosin"],
            "answer": "Myosin"
        }]
    }, {
        "name": "Math",
        "questions": [{
            "question": "What is the sum of the angles in a triangle?",
            "options": ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
            "answer": "180 degrees"
        }, {
            "question": "What is the square root of 144?",
            "options": ["12", "14", "16", "18"],
            "answer": "12"
        }, {
            "question": "What is the formula for the area of a rectangle?",
            "options": ["length x width", "length + width", "length x height", "length + height"],
            "answer": "length x width"
        }, {
            "question": "What is the formula for the perimeter of a rectangle?",
            "options": ["2 x (length + width)", "length x width", "length + width", "2 x (length x width)"],
            "answer": "2 x (length + width)"
        }, {
            "question": "What is the formula for the area of a circle?",
            "options": ["πr²", "2πr", "πd", "πr"],
            "answer": "πr²"
        }, {
            "question": "What is the formula for the circumference of a circle?",
            "options": ["2πr", "πr²", "πd", "πr"],
            "answer": "2πr"
        }, {
            "question": "What is the formula for the volume of a cube?",
            "options": ["side³", "side²", "side x height", "side x width"],
            "answer": "side³"
        }, {
            "question": "What is the formula for the surface area of a cube?",
            "options": ["6 x side²", "6 x side³", "side²", "side³"],
            "answer": "6 x side²"
        }, {
            "question": "What is the formula for the volume of a rectangular prism?",
            "options": ["length x width x height", "length x width", "length + width + height", "2 x (length + width + height)"],
            "answer": "length x width x height"
        }, {
            "question": "What is the formula for the surface area of a rectangular prism?",
            "options": ["2 x (length x width + length x height + width x height)", "length x width x height", "length x width", "length + width + height"],
            "answer": "2 x (length x width + length x height + width x height)"
        }, {
            "question": "What is the formula for the volume of a sphere?",
            "options": ["(4/3)πr³", "4πr²", "2πr", "πr²"],
            "answer": "(4/3)πr³"
        }, {
            "question": "What is the formula for the surface area of a sphere?",
            "options": ["4πr²", "(4/3)πr³", "2πr", "πr²"],
            "answer": "4πr²"
        }, {
            "question": "What is the formula for the volume of a cylinder?",
            "options": ["πr²h", "2πrh", "πd", "πr²"],
            "answer": "πr²h"
        }, {
            "question": "What is the formula for the surface area of a cylinder?",
            "options": ["2πrh + 2πr²", "πr²h", "2πrh", "πr²"],
            "answer": "2πrh + 2πr²"
        }, {
            "question": "What is the formula for the volume of a cone?",
            "options": ["(1/3)πr²h", "πr²h", "2πrh", "πr²"],
            "answer": "(1/3)πr²h"
        }, {
            "question": "What is the formula for the surface area of a cone?",
            "options": ["πrl + πr²", "(1/3)πr²h", "πr²h", "2πrh"],
            "answer": "πrl + πr²"
        }, {
            "question": "What is the formula for the volume of a pyramid?",
            "options": ["(1/3)Bh", "Bh", "2Bh", "(1/2)Bh"],
            "answer": "(1/3)Bh"
        }, {
            "question": "What is the formula for the surface area of a pyramid?",
            "options": ["(1/2)pl + B", "(1/3)Bh", "Bh", "2Bh"],
            "answer": "(1/2)pl + B"
        }]
    }]
};;


// Variables to store state
let selectedCategory, currentQuestionIndex, score, timerInterval;
const quizDuration = 15;

// Initialize quiz
function initQuiz() {
    document.getElementById('game2-category-selection').innerHTML = triviaData.categories.map(category => `
        <div class="game2-category-card" onclick="startQuiz('${category.name}')">
            <h2 class="game2-category-card-text">${category.name}</h2> 
        </div>
    `).join('');
}

// Start quiz with selected category
function startQuiz(categoryName) {
    selectedCategory = triviaData.categories.find(cat => cat.name === categoryName);
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('game2-category-selection').style.display = 'none';
    document.getElementById('game2-quiz-container').style.display = 'flex';
    showQuestion();
}

// Show question
function showQuestion() {
    const question = selectedCategory.questions[currentQuestionIndex];
    document.getElementById('game2-question-text').textContent = question.question;
    document.getElementById('game2-options-area').innerHTML = question.options.map(option => `
<div class="game2-option" onclick="selectAnswer('${option}')">${option}</div>
`).join('');

    // Update the question tracker
    document.getElementById('game2-question-number').textContent =
        `Question ${currentQuestionIndex + 1} of ${selectedCategory.questions.length}`;

    resetTimer();
}

// Select answer
function selectAnswer(selectedOption) {
    const question = selectedCategory.questions[currentQuestionIndex];
    clearInterval(timerInterval);
    if (selectedOption === question.answer) {
        score++;
        document.getElementById('game2-score').textContent = `Score: ${score*10}`;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedCategory.questions.length) {
        showQuestion();
    } else {
        document.getElementById('game2-score').textContent = `Score: 0`;
        showResults();
    }
}

// Reset timer
function resetTimer() {
    clearInterval(timerInterval);
    let timeLeft = quizDuration;
    document.getElementById('game2-timer').textContent = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('game2-timer').textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            selectAnswer(null);
        }
    }, 1000);
}

// Show results
function showResults() {
    clearInterval(timerInterval);
    document.getElementById('game2-quiz-container').style.display = 'none';
    document.getElementById('game2-results-popup').style.display = 'block';
    document.getElementById('game2-attempts').textContent = selectedCategory.questions.length;
    document.getElementById('game2-correct').textContent = score;
    document.getElementById('game2-wrong').textContent = selectedCategory.questions.length - score;
    document.getElementById('game2-final-score').textContent = `${score*10} outoff ${selectedCategory.questions.length*10}`;
}

// Back to category selection
document.getElementById('game2-back-button').onclick = function() {
    document.getElementById('game2-results-popup').style.display = 'none';
    document.getElementById('game2-category-selection').style.display = 'flex';
};

// Stop quiz
document.getElementById('game2-stop-quiz').onclick = function() {
    document.getElementById('game2-score').textContent = `Score: 0`;
    showResults();
};

// Initialize on load
window.onload = initQuiz;

//* ------------------------------------------  *
//* ------------Game 3-------------------------  *
//* ------------------------------------------  *

let currMoleTile;
let currCannonBallTile1;
let currCannonBallTile2;
let score3 = 0;
let gameOver = false;
let timeLeft = 90;
let moleHit = false;
let moleInterval;
let cannonBallInterval;
let timerInterval3;

const moleImages = [
    "./mashub some imp image/standMole.png",
        "./mashub some imp image/insidelandmole.png"
];

function startGame3() {
    // Reset game state
    score3 = 0;
    timeLeft = 90;
    gameOver = false;
    moleHit = false;
    currMoleTile = null;
    currCannonBallTile1 = null;
    currCannonBallTile2 = null;
    clearInterval(moleInterval);
    clearInterval(cannonBallInterval);
    clearInterval(timerInterval3);

    // Clear the game board
    document.getElementById("game3-board").innerHTML = "";

    // Recreate the game board dynamically
    setGame();

    // Update score and timer displays
    document.getElementById("game3-score").innerText = "Score: 0";
    document.getElementById("game3-timer").innerText = "Time: 90";

    // Hide start screen and popup, show game info and board
    document.getElementById("game3-startScreen").style.display = "none";
    document.getElementById("game3-popup").style.display = "none";
    document.getElementById("game3-info").style.display = "flex";
    document.getElementById("game3-board").style.display = "flex";

    startTimer();
}

function setGame() {
    const gameBoard = document.getElementById("game3-board"); // Get the game board container

    // Create 9 (or however many) tiles dynamically
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        tile.addEventListener("touchstart", selectTile);
        gameBoard.appendChild(tile); // Add each tile to the container
    }

    moleInterval = setInterval(setMole, 1500);
    cannonBallInterval = setInterval(setCannonBall, 1500);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver) return;
    if (currMoleTile) {
        currMoleTile.innerHTML = "";
        moleHit = false;
    }

    let mole = document.createElement("img");
    mole.src = moleImages[Math.floor(Math.random() * moleImages.length)];
    mole.alt = 'monty mole';

    let num = getRandomTile();

    // Ensure mole doesn't overlap with cannonballs
    while (
        (currCannonBallTile1 && currCannonBallTile1.id == num) ||
        (currCannonBallTile2 && currCannonBallTile2.id == num)
    ) {
        num = getRandomTile();
    }

    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setCannonBall() {
    if (gameOver) return;

    // Clear previous cannonball tiles 
    if (currCannonBallTile1) currCannonBallTile1.innerHTML = "";
    if (currCannonBallTile2) currCannonBallTile2.innerHTML = "";

    let cannonBall1 = document.createElement("img");
    cannonBall1.src = "./mashub some imp image/bomb.png";
    cannonBall1.id = 'bombIdx1';
    cannonBall1.alt = 'cannonball image 1';

    let cannonBall2 = document.createElement("img");
    cannonBall2.src = "./mashub some imp image/bomb.png";
    cannonBall2.id = 'bombIdx2';
    cannonBall2.alt = 'cannonball image 2';

    let num1 = getRandomTile();
    let num2 = getRandomTile();

    // Ensure cannonballs don't overlap with the mole or each other
    while (
        (currMoleTile && (currMoleTile.id == num1 || currMoleTile.id == num2)) ||
        (num1 === num2)
    ) {
        num1 = getRandomTile();
        num2 = getRandomTile();
    }

    currCannonBallTile1 = document.getElementById(num1);
    currCannonBallTile2 = document.getElementById(num2);
    currCannonBallTile1.appendChild(cannonBall1);
    currCannonBallTile2.appendChild(cannonBall2);
}

function selectTile() {
    if (gameOver) return;

    if (this == currMoleTile && !moleHit) {
        score3 += 10;
        document.getElementById("game3-score").innerText = "Score: " + score3;
        moleHit = true;
        currMoleTile.innerHTML = '';
        currCannonBallTile1.innerHTML = '';
        currCannonBallTile2.innerHTML = '';
    } else if (this == currCannonBallTile1 || this == currCannonBallTile2) {
        if (this == currCannonBallTile1) {
            document.getElementById('bombIdx1').src = './mashub some imp image/blastbomb.png';
            endGame();
        } else {
            document.getElementById('bombIdx2').src = './mashub some imp image/blastbomb.png';
            endGame();
        }
    }
}

function startTimer() {
    timerInterval3 = setInterval(function() {
        if (gameOver) {
            clearInterval(timerInterval3);
            return;
        }
        timeLeft--;
        document.getElementById("game3-timer").innerText = "Time: " + timeLeft;

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function endGame() {
    gameOver = true;
    clearInterval(moleInterval);
    clearInterval(cannonBallInterval);
    clearInterval(timerInterval3);
    document.getElementById("game3-finalScore").innerText = "Your Score: " + score3;
    document.getElementById("game3-popup").style.display = "flex";
}

function restartGame3() {
    score3 = 0;
    timeLeft = 90;
    gameOver = false;
    moleHit = false;
    currMoleTile = null;
    currCannonBallTile1 = null;
    currCannonBallTile2 = null;

    document.getElementById("game3-board").innerHTML = "";
    document.getElementById("game3-score").innerText = "Score: 0";
    document.getElementById("game3-timer").innerText = "Time: 90";
    document.getElementById("game3-popup").style.display = "none";

    startGame3();
}

//* ------------------------------------------  *
//* ------------Mashubtodo-List-------------------------  *
//* ------------------------------------------  *

const todoForm = document.querySelector('.multihub-todolist-form');
const todoInput = document.getElementById('multihub-todolist-input');
const todoListUL = document.getElementById('multihub-todolist-list');

let allTodos = getTodos();
updateTodoList();

todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    addTodo();
})

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText.length > 0) {
        const todoObject = {
            text: todoText,
            completed: false
        }
        allTodos.push(todoObject);
        updateTodoList();
        saveTodos();
        todoInput.value = "";
    }
}

function updateTodoList() {
    todoListUL.innerHTML = "";
    allTodos.forEach((todo, todoIndex) => {
        todoItem = createTodoItem(todo, todoIndex);
        todoListUL.append(todoItem);
    })
}

function createTodoItem(todo, todoIndex) {
    const todoId = "multihub-todolist-todo-" + todoIndex;
    const todoLI = document.createElement("li");
    const todoText = todo.text;
    todoLI.className = "multihub-todolist-todo";
    todoLI.innerHTML = `
              <input type="checkbox" id="${todoId}">
              <label class="multihub-todolist-custom-checkbox" for="${todoId}"> 
                  <svg fill="transparent" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
              </label>
              <label for="${todoId}" class="multihub-todolist-todo-text"> 
                  ${todoText}
              </label>
              <button class="multihub-todolist-delete-button"> 
                  <svg fill="var(--secondary-color)" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
              </button>
          `
    const deleteButton = todoLI.querySelector(".multihub-todolist-delete-button");
    deleteButton.addEventListener("click", () => {
        deleteTodoItem(todoIndex);
    })
    const checkbox = todoLI.querySelector("input");
    checkbox.addEventListener("change", () => {
        allTodos[todoIndex].completed = checkbox.checked;
        saveTodos();
    })
    checkbox.checked = todo.completed;
    return todoLI;
}

function deleteTodoItem(todoIndex) {
    allTodos = allTodos.filter((_, i) => i !== todoIndex);
    saveTodos();
    updateTodoList();
}

function saveTodos() {
    const todosJson = JSON.stringify(allTodos);
    localStorage.setItem("todos", todosJson);
}

function getTodos() {
    const todos = localStorage.getItem("todos") || "[]";
    return JSON.parse(todos);
}

//* ------------------------------------------  *
//* ------------nav-------------------------  *
//* ------------------------------------------  *


const mainSection = document.getElementById('mainSection');

const toolSection = document.getElementById('toolSection');
const nextPage1Section = document.getElementById('nextPage1');
const nextPage2Section = document.getElementById('nextPage2');

const game1sec = document.getElementById('game1sec');
const game2sec = document.getElementById('game2sec');
const game3sec = document.getElementById('game3sec');


function calledToNextPage2() {
    mainSection.classList.add('d-none') ;
    nextPage2Section.classList.remove('d-none'); 
}

function backFromNextPage2() {

    mainSection.classList.remove('d-none');
    nextPage2Section.classList.add('d-none');
}



function openMoreToolSection() {
    mainSection.classList.add('d-none'); 
    toolSection.classList.remove('d-none'); 
}

function calledToNextPage1() {
    toolSection.classList.add('d-none');
    nextPage1Section.classList.remove('d-none'); 
}

function backToHome() {
    mainSection.classList.remove('d-none');
    toolSection.classList.add('d-none');
}

function backFromNextPage1() {
    nextPage1Section.classList.add('d-none'); 
    toolSection.classList.remove('d-none'); 
}

function game1open() {
    mainSection.classList.add('d-none');
    game1sec.classList.remove('d-none');
}

function backToHomeFromGame1() {
    mainSection.classList.remove('d-none');
    game1sec.classList.add('d-none');
}

function game2open() {
    mainSection.classList.add('d-none');
    game2sec.classList.remove('d-none');
}

function backToHomeFromGame2() {
    document.getElementById('game2-results-popup').style.display = 'none';
    document.getElementById('game2-quiz-container').style.display = 'none';
    document.getElementById('game2-category-selection').style.display = 'flex';
    mainSection.classList.remove('d-none');
    game2sec.classList.add('d-none');
}


function game3open() {
    mainSection.classList.add('d-none');
    game3sec.classList.remove('d-none');
    document.getElementById('game3-startScreen').style.display = 'flex';
    document.getElementById('game3-info').style.display = 'none'; 
    document.getElementById('game3-board').style.display = 'none'; 
}

function backToHomeFromGame3() {

    game3sec.classList.add('d-none');
    document.getElementById('game3-startScreen').style.display = 'flex';
    document.getElementById('game3-info').style.display = 'none';
    document.getElementById('game3-board').style.display = 'none';
    mainSection.classList.remove('d-none');
    document.getElementById("game3-popup").style.display = "none";
}

//* ------------------------------------------  *
//* ---------------Contact Form submission----------------------  *
//* ------------------------------------------  *


const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);

    // Create a plain object to hold the data
    const data = {};
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }

    const json = JSON.stringify(data);
    result.innerHTML = "🔔 Please wait...";
    result.style.display = "block";
    result.classList.add("show");

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "✅ Form submitted successfully";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "‼️ Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
                result.classList.remove("show");
            }, 3000);
        });
});


//* ------------------------------------------  *
//* -------------------------------------------  *
//* ------------------------------------------  *


const viewMoreGamesBtn = document.getElementById("viewMoreGamesBtn");
const notification = document.getElementById("result3");

viewMoreGamesBtn.addEventListener("click", () => {
    notification.innerHTML = 'Exciting news! 🎉 More games are on the way! 🎲 <br>Stay tuned as we work hard to bring you fresh and thrilling <br>experiences that you\'ll love. Get ready to dive into <br>new adventures and challenges—coming very soon!';
    notification.classList.add("show"); 

    setTimeout(() => {
        notification.classList.remove("show"); 
    }, 3000);
});

//* ------------------------------------------  *
//* -------------------------------------------  *
//* ------------------------------------------  *

