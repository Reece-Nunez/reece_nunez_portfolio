import androidAppImage from "/src/assets/Android Application.jpg";
import weatherDashboardVideo from "/src/assets/weather-dashboard.mp4";
import goGirlPaintingVideo from "/src/assets/go-girlpainting-video.mp4";
import springWebAppImage from "/src/assets/spring-web-application.jpg";
import stockSyncImage from "/src/assets/image.png";
import constructionFormVideo from "/src/assets/construction-form.mp4";
import farmExpenseVideo from "/src/assets/farmExpenseVideo.mp4";

export const data = [
  {
    id: 1,
    img: stockSyncImage,
    title: "StockSync FullStack Inventory Manager",
    desc: "",
    link: "",
    git: "https://github.com/Reece-Nunez/StockSync",
  },
  {
    id: 3,
    img: androidAppImage,
    title: "Android Vacation Tracker",
    desc: "",
    link: "",
    git: "https://github.com/Reece-Nunez/Android_Vacation_Tracker",
  },
  {
    id: 7,
    img: springWebAppImage,
    title: "Spring Boot Store Web Application",
    desc: "",
    link: "",
    git: "https://github.com/Reece-Nunez/Spring_Boot_Web_Application",
  },
  {
    id: 2,
    video: weatherDashboardVideo,
    title: "Weather Dashboard Application",
    desc: "A sleek, interactive weather app that displays current and forecasted weather for any location. Features include real-time city search with autocomplete, current location weather detection, dark mode, and error handling with animated modals. Built with React, Axios, and the OpenWeather API, this mobile-friendly app delivers a polished and responsive user experience.",
    link: "",
    git: "https://github.com/Reece-Nunez/weather_dashboard",
  },
  {
    id: 5,
    video: goGirlPaintingVideo,
    title: "Go-Girl Painting LLC Website",
    desc: "A vibrant, user-friendly website designed for Go Girl Painting, showcasing services, project galleries, and client testimonials.",
    link: "https://go-girlpainting.com",
    git: "https://github.com/Reece-Nunez/Interactive_UX_Website",
  },
  {
    id: 6,
    video: constructionFormVideo,
    title: "Construction Project Management API & Form Handler",
    desc: "Designed a serverless construction project management form and API using AWS Lambda, API Gateway, and Amplify. The API securely handles project data submissions, including project details, budgets, and timelines, with input validation and CORS management. Integrated a React-based front-end form with Axios to ensure seamless communication with the backend. This project highlights expertise in full-stack development, serverless architecture, and API integration.",
    link: "https://master.d2oohta4kgmxke.amplifyapp.com/",
    git: "https://github.com/Reece-Nunez/construction-form",
  },
  {
    id: 4,
    video: farmExpenseVideo,
    title: "Farm Expense Tracker",
    desc: "A full-stack farm financial management app built with React, Vite, and Tailwind CSS. It uses AWS Amplify for authentication and hosting, with GraphQL APIs for real-time data storage. The app features expense and income tracking, an Analytics Dashboard, and a Node.js/Express backend for seamless data management.",
    link: "https://main.d1vmyzw49srl6b.amplifyapp.com",
    git: "https://github.com/Reece-Nunez/farm-expense-tracker",
  },
];
