import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomeWebpage1 from "./HomeWebpage1";
import AboutWebpage1 from "./AboutWebpage1";
import CoursesWebpage1 from "./CoursesWebpage1";
import NewsEvantsWebpage1 from "./NewsEvantsWebpage1.js";
import ContactusWebpage1 from "./ContactusWebpage1";
import LoginWebpage1 from "./LoginWebpage1";
import WelcomeWebpage1 from "./WelcomeWebpage1";
import DashboardPage from "./DashboardPage.js";
import StudentListPage from "./StudentListPage.js";
import TeacherListPage from "./TeacherListPage.js";
import CourseListPage from "./CourseListPage.js";

function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<HomeWebpage1 />} />
         <Route path="/about" element={<AboutWebpage1 />} />
         <Route path="/courses" element={<CoursesWebpage1 />} />
         <Route path="/news" element={<NewsEvantsWebpage1 />} />
         <Route path="/contact" element={<ContactusWebpage1 />} />
         <Route path="/login" element={<LoginWebpage1 />} />

         <Route path="/welcome" element={<WelcomeWebpage1 />} />
         <Route path="/dashboard" element={<DashboardPage />} />
         <Route path="/studentlist" element={<StudentListPage />} />
         <Route path="/courselist" element={<CourseListPage />} />
         <Route path="/teacherlist" element={<TeacherListPage />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;