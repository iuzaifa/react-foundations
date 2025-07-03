% Resume for entry-level Software Engineering roles
\documentclass[letterpaper,11pt]{article}

% --------------- PACKAGES -----------------------
\usepackage{latexsym}
\usepackage[empty]{fullpage}
\usepackage{titlesec}
\usepackage{marvosym}
\usepackage[usenames,dvipsnames]{color}
\usepackage{enumitem}
\usepackage[hidelinks]{hyperref}
\usepackage{fancyhdr}
\usepackage{tabularx}
\usepackage{fontawesome}
\usepackage[dvipsnames]{xcolor}
\input{glyphtounicode}

% ---------- RESUME FORMAT ADJUSTMENTS -------------
\addtolength{\oddsidemargin}{-0.5in}
\addtolength{\evensidemargin}{-0.5in}
\addtolength{\textwidth}{1in}
\addtolength{\topmargin}{-0.5in}
\addtolength{\textheight}{1.0in}

\urlstyle{same}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

\titleformat{\section}{
  \vspace{-4pt}\scshape\raggedright\large
}{}{0em}{}[\color{black}\titlerule \vspace{-5pt}]

\pdfgentounicode=1

% Custom Resume Commands
\newcommand{\resumeItem}[1]{\item\small{{#1 \vspace{-2pt}}}}
\newcommand{\resumeSubheading}[4]{
  \vspace{-2pt}\item
  \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
    \textbf{#1} & #2 \\
    \textit{\small#3} & \textit{\small #4} \\
  \end{tabular*}\vspace{-7pt}
}
\newcommand{\resumeProjectHeading}[2]{
  \item
  \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
    \small#1 & #2 \\
  \end{tabular*}\vspace{-7pt}
}
\newcommand{\resumeItemListStart}{\begin{itemize}}
\newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-5pt}}

\begin{document}

% ----------- HEADER ------------------
\begin{center}
    \textbf{\Huge \scshape Abu Huzaifa} \\ \vspace{2pt}
    \href{https://www.linkedin.com/in/abu-huzaifa-7b40b9286/}{\textcolor{BlueViolet}{\faLinkedin\enspace \textbf{LinkedIn}}} $|$
    \href{https://github.com/iuzaifa/}{\textcolor{BlueViolet}{\faGithub\enspace \textbf{GitHub}}} $|$
    \small {\faMobile\enspace \textbf{+91-6387869214}} $|$
    \href{mailto:abuhuzaifaw7@gmail.com}{\textcolor{BlueViolet}{\faEnvelopeO\enspace \textbf{abuhuzaifaw7@gmail.com}}}
    $|$
    \href{https://leetcode.com/u/abuhuzaiifa/}{\textcolor{BlueViolet}{ \textbf{LeetCode}}}
    $|$
    \textbf{Delhi, New Delhi, India}
\end{center}

% ----------- EDUCATION ---------------
\section{Education}
\resumeItemListStart
\resumeSubheading
  {Dr. Ram Manohar Lohia Avadh University, Ayodhya}{2021 -- 2023}
  {Bachelor of Arts in Geography and Sociology}
\resumeItemListEnd

% ----------- WORK EXPERIENCE ---------
\section{Work Experience}
\resumeItemListStart

  \resumeSubheading
  {Code Compass LLP}{Gurgaon, India}
  {Java Developer}{June 2025 -- Present}
  \resumeItemListStart
    \resumeItem{Transformed a legacy monolith into Microservices-based architecture, improving scalability.}
    \resumeItem{Built a data processing ETL project using Spring Boot, exposing it via REST API.}
    \resumeItem{Created a Central Authentication System using JWT for unified login across projects.}
    \resumeItem{Developed Admin Dashboard to manage quiz content efficiently.}
    \resumeItem{Optimized backend and frontend performance, reducing server load by 25\%.}
    \resumeItem{Worked with Spring Boot, Oracle DB, Maven, Kafka, React.js, and Multi-threading.}
  \resumeItemListEnd

  \resumeSubheading
  {RS Top Coder Software Solutions}{Noida, India}
  {Website Design and Graphic Design}{June 2023 -- July 2024}
  \resumeItemListStart
    \resumeItem{Created visually appealing websites, logos, and graphics that improved clients’ digital presence and branding.}
    \resumeItem{Used tools like CorelDRAW, Adobe Illustrator, Photoshop, and Figma to deliver high-quality, creative designs.}
    \resumeItem{Built responsive and user-friendly layouts using HTML and CSS, ensuring optimal experience across devices.}
    \resumeItem{Collaborated with UX team to enhance user satisfaction, achieving a 80\% positive feedback rate.}
  \resumeItemListEnd

\resumeItemListEnd

% ----------- PROJECTS ----------------
\section{Projects}
\resumeItemListStart

\resumeProjectHeading
{\textbf{iNotebook}}{\emph{Node.js, Express.js, React.js, MongoDB}}
\resumeItemListStart
  \resumeItem{Created a secure note app with JWT authentication.}
  \resumeItem{Reduced login and note creation latency by 25\%.}
  \resumeItem{Responsive UI improved user return rate by 30\%.}
\resumeItemListEnd

\resumeProjectHeading
{\textbf{Online Marketplace App} $|$ \emph{\href{https://github.com/sarbjeet472001/online_marketplace}{\textcolor{BlueViolet}{GitHub}}}}{\emph{MERN Stack}}
\resumeItemListStart
  \resumeItem{Built a scalable e-commerce platform for 500+ users.}
  \resumeItem{Reduced checkout processing time by 40\%.}
  \resumeItem{Integrated secure payment gateway with improved reliability.}
  \resumeItem{Used MongoDB indexing to improve product search speed by 20\%.}
\resumeItemListEnd

\resumeItemListEnd

% ----------- TECHNICAL SKILLS --------
\section{Technical Skills}
\begin{itemize}
  \item \textbf{Languages:} Java, JavaScript, SQL 
  \item \textbf{Frameworks/Libraries:} Spring Boot, React.js, Bootstrap
  \item \textbf{Databases:} MySQL, MongoDB, Oracle, Postgres
  \item \textbf{Tools:} Git, Docker, Postman, IntelliJ IDEA
  \item \textbf{CI/CD:} GitHub CI/CD , Jenkins
  \item \textbf{Cloud:} AWS
  
\end{itemize}

% ----------- ACHIEVEMENTS ------------
\section{Achievements}
\resumeItemListStart
  \resumeItem{Max rating of \textbf{1721 on LeetCode}.}
  \resumeItem{\textbf{3-star coder on CodeChef}.}
  \resumeItem{Solved 500+ DSA problems on LeetCode and HackerRank.}
  \resumeItem{Ranked \textbf{33rd} on GeeksforGeeks for problem solving.}
\resumeItemListEnd

\end{document}
