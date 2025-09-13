import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Star, Users, Award, Clock, Phone } from "lucide-react";
import React from "react";
import { format } from 'date-fns';

const initialData = {
    courses: [
        { title: "Basic Housekeeping Skills", description: "A foundational course covering essential home cleaning and maintenance techniques.", price: 150, duration_minutes: 120, prerequisites: [], created_at: new Date("2024-01-15") },
        { title: "Child Care Essentials", description: "Learn fundamental skills for safe and effective child care.", price: 150, duration_minutes: 150, prerequisites: [], created_at: new Date("2024-02-20") }
    ,
    modules: [
        { course_title: "Basic Housekeeping Skills", title: "Module 1: Cleaning Tools & Techniques", description: "An overview of common cleaning tools and their proper use.", order_in_course: 1, created_at: new Date("2024-03-01") },
        { course_title: "Basic Housekeeping Skills", title: "Module 2: Kitchen & Bathroom Hygiene", description: "Focus on sanitary cleaning practices for key areas of the home.", order_in_course: 2, created_at: new Date("2024-03-15") }
    ],
    lessons: [
        { module_title: "Module 1: Cleaning Tools & Techniques", title: "Lesson 1.1: Vacuuming Best Practices", content_type: "video", content_url: "https://your-cloud-storage-url/video1.mp4", order_in_module: 1, duration_minutes: 15, created_at: new Date("2024-04-01") },
        { module_title: "Module 1: Cleaning Tools & Techniques", title: "Lesson 1.2: All-Purpose Cleaners", content_type: "text", content_url: "https://your-cloud-storage-url/text1.html", order_in_module: 2, duration_minutes: 10, created_at: new Date("2024-04-15") }
    ]
};

const ForWorkersPage = () => {
    const [selectedCourse, setSelectedCourse = React.useState(null);
  const [selectedModule, setSelectedModule] = React.useState(null);
    const [modalOpen, setModalOpen] = React.useState(false);
    const [selectedLessonContent, setSelectedLessonContent] = React.useState(null);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setSelectedModule(null);
  };
  const handleModuleClick = (module) => {
    setSelectedModule(module);
  };

    const handleWatchLesson = (lesson) => {
        if (lesson.content_type === "video") {
            window.open(lesson.content_url, "_blank");
        } else if (lesson.content_type === "text") {
            setSelectedLessonContent("Placeholder: Displaying text content from " + lesson.content_url);
            setModalOpen(true);
        }
};

    const closeModal = () => {
        setModalOpen(false);
        setSelectedLessonContent(null);
    };

    const handleWhatsAppContact = () => {
      window.open("https://wa.me/27611565699?text=Hi! I'm interested in starting my journey as a worker with JobzaR. Can you help me get started?", "_blank");
    };

    const skills = [
      "Domestic Work", "Gardening", "Cleaning", "Childcare", "Elderly Care",
      "Handyman Services", "Painting", "Plumbing", "Electrical Work", "Security"
    ];

    const benefits = [
      { icon: Award, title: "Professional Certification", desc: "Get certified for just R150" },
      { icon: Users, title: "Access to Clients", desc: "Connect with verified households and businesses" },
      { icon: Star, title: "Build Your Reputation", desc: "Earn ratings and reviews from satisfied clients" },
      { icon: Clock, title: "Flexible Schedule", desc: "Work when it suits you" }
    ];

    return (





                            JobzaR


                    <Button variant="outline" onClick={() => window.location.href = '/'}>
                      Back to Home
                    </Button>





                    Start Your Professional Journey


                    Join thousands of skilled workers who have transformed their careers with JobzaR.
                    Get certified, connect with clients, and build a sustainable income.

                <Button
                  size="lg"
                  className="text-lg px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
                  onClick={handleWhatsAppContact}
                >
                  Get Started Today - R150
                </Button>




                    How It Works for Workers





                                1

                            Register & Pay


                            Sign up and pay the one-time R150 certification fee to get started






                                2

                            Get Trained


                            Complete our professional training program and receive your certification






                                3

                            Get Matched


                            We connect you with verified clients who need your specific skills






                                4

                            Start Earning


                            Begin working with clients and build your reputation while earning income







                    Skills We Certify


                    {skills.map((skill, index) => (






                    ))}





                    Why Choose JobzaR?

                Placeholder text for the "Why Choose JobzaR" section. This is where you would put the reasons why workers should choose JobzaR.




                    Our Courses


                    {initialData.courses.map((course) => (








                    ))}



            {selectedCourse && (


                        {selectedCourse.title} - Modules


                        {initialData.modules
                            .filter((module) => module.course_title === selectedCourse.title)
                            .map((module) => (








                            ))}


            )}

            {selectedModule && (


                        {selectedModule.title} - Lessons


                        {initialData.lessons
                            .filter((lesson) => lesson.module_title === selectedModule.title)
                            .map((lesson) => (




                                                <img
                                                    src={lesson.content_type === "video" ? "/video-icon.png" : "/text-icon.png"}
                                                    alt={lesson.content_type === "video" ? "Video" : "Text"}
                                                    className="w-6 h-6 mr-2"
                                                />
                                                {lesson.title}





                                        Created on: {format(lesson.created_at, 'MMMM dd, yyyy')}

                                            {lesson.content_type === "video" ? "Watch Lesson" : "Read Lesson"}



                            ))}


            )}

            {modalOpen && (




                                Lesson Content



                            {selectedLessonContent}



                                Close




            )}



                    Benefits of Choosing JobzaR


                    {benefits.map((benefit, index) => (











                    ))}





                    Ready to Transform Your Career?


                    Join JobzaR today and start your journey to professional success





                                Contact Us on WhatsApp



                            Learn More





    );
};

export default ForWorkersPage;