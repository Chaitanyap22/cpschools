import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LandingContainer = styled.div`
    display: flex;
    flex-direction: column; /* Change the flex direction to column */
    min-height: 100vh; /* Ensure the container stretches to at least the full viewport height */
`;

const LandingMainContent = styled.div`
    flex: 1;
    padding: 20px;
`;

const LandingHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 10px 20px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const Footer = styled.footer`
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
`;

const FooterLinks = styled.div`
    display: flex;
    flex-direction: column;

    h4 {
        margin-bottom: 10px;
    }

    ul {
        list-style: none;
        padding: 0;

        li {
            margin-bottom: 5px;

            a {
                color: #fff;
                text-decoration: none;
                transition: color 0.2s ease-in-out;

                &:hover {
                    color: #ccc;
                }
            }
        }
    }
`;

const SocialIcons = styled.div`
    display: flex;
    align-items: center;

    i {
        font-size: 24px;
        margin-right: 10px;
        cursor: pointer;
        transition: color 0.2s ease-in-out;

        &:hover {
            color: #ccc;
        }
    }
`;

const LoginButton = styled(Link)`
    background-color: #333;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: #444;
    }
`;

const SignUpButton = styled(Link)`
    background-color: #333;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: #444;
    }
`;

const FeatureSection = styled.section`
    margin-top: 20px;

    h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
    }
`;

const FeatureGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
`;

const FeatureCard = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

    h4 {
        font-size: 1.2rem;
        margin-bottom: 10px;
    }

    p {
        margin: 0;
    }
`;

const studentFeatures = [
    {
        title: "Access homework assignments and due dates",
        description: "Stay up-to-date with your homework assignments and due dates.",
        icon: "icon1.png", // Replace with the actual icon path or class
    },
    {
        title: "Participate in online discussions and forums",
        description: "Engage in online discussions and forums with your peers.",
        icon: "icon2.png", // Replace with the actual icon path or class
    },
    {
        title: "Submit assignments and projects online",
        description: "Submit your assignments and projects conveniently online.",
        icon: "icon3.png", // Replace with the actual icon path or class
    },
    {
        title: "View class schedules and timetables",
        description: "Access your class schedules and timetables anytime.",
        icon: "icon4.png", // Replace with the actual icon path or class
    },
    {
        title: "Check grades and receive performance feedback",
        description: "Monitor your grades and receive valuable performance feedback.",
        icon: "icon5.png", // Replace with the actual icon path or class
    },
    {
        title: "Access educational resources and course materials",
        description: "Access a wide range of educational resources and course materials.",
        icon: "icon6.png", // Replace with the actual icon path or class
    },
    {
        title: "View exam schedules and results",
        description: "Stay informed about exam schedules and access your results.",
        icon: "icon7.png", // Replace with the actual icon path or class
    },
    {
        title: "Receive notifications and announcements",
        description: "Get important notifications and announcements from your school.",
        icon: "icon8.png", // Replace with the actual icon path or class
    },
    {
        title: "Request teacher meetings or appointments",
        description: "Easily request meetings or appointments with your teachers.",
        icon: "icon9.png", // Replace with the actual icon path or class
    },
    {
        title: "Participate in extracurricular activities",
        description: "Engage in various extracurricular activities and clubs.",
        icon: "icon10.png", // Replace with the actual icon path or class
    },
    {
        title: "Access the school library catalog and resources",
        description: "Explore the school library catalog and available resources.",
        icon: "icon11.png", // Replace with the actual icon path or class
    },
    {
        title: "Track attendance and tardiness records",
        description: "Keep track of your attendance and tardiness records.",
        icon: "icon12.png", // Replace with the actual icon path or class
    },
    {
        title: "Apply for scholarships and financial aid",
        description: "Apply for scholarships and financial aid opportunities.",
        icon: "icon13.png", // Replace with the actual icon path or class
    },
    {
        title: "Access career guidance and counseling services",
        description: "Receive career guidance and counseling support.",
        icon: "icon14.png", // Replace with the actual icon path or class
    },
    {
        title: "Participate in school clubs and organizations",
        description: "Join and participate in various school clubs and organizations.",
        icon: "icon15.png", // Replace with the actual icon path or class
    },
    {
        title: "View and print official certificates and transcripts",
        description: "Access and print your official certificates and transcripts.",
        icon: "icon16.png", // Replace with the actual icon path or class
    },
    {
        title: "Access virtual classrooms and e-learning materials",
        description: "Access virtual classrooms and e-learning materials for online learning.",
        icon: "icon17.png", // Replace with the actual icon path or class
    },
    {
        title: "Participate in school events and activities",
        description: "Participate in various school events and activities.",
        icon: "icon18.png", // Replace with the actual icon path or class
    },
    {
        title: "View and update personal contact information",
        description: "View and update your personal contact information.",
        icon: "icon19.png", // Replace with the actual icon path or class
    },
    {
        title: "Access a school-wide directory of students and staff",
        description: "Access a directory of students and staff within the school.",
        icon: "icon20.png", // Replace with the actual icon path or class
    },
    {
        title: "Participate in surveys and feedback collection",
        description: "Participate in surveys and provide valuable feedback.",
        icon: "icon21.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage personal behavior and discipline records",
        description: "Manage your personal behavior and discipline records.",
        icon: "icon22.png", // Replace with the actual icon path or class
    },
    {
        title: "Access a personal dashboard with important information",
        description: "Access a personal dashboard with essential information.",
        icon: "icon23.png", // Replace with the actual icon path or class
    },
    {
        title: "Receive important emergency notifications",
        description: "Receive critical emergency notifications from the school.",
        icon: "icon24.png", // Replace with the actual icon path or class
    },
    {
        title: "Request leave of absence or permissions online",
        description: "Submit requests for leave of absence or permissions online.",
        icon: "icon25.png", // Replace with the actual icon path or class
    },
    {
        title: "Access the school's social media and news updates",
        description: "Stay updated with the school's social media and news updates.",
        icon: "icon26.png", // Replace with the actual icon path or class
    },
    {
        title: "Participate in peer mentoring or tutoring programs",
        description: "Participate in peer mentoring or tutoring programs.",
        icon: "icon27.png", // Replace with the actual icon path or class
    },
    {
        title: "Access mental health and counseling services",
        description: "Access mental health and counseling services for support.",
        icon: "icon28.png", // Replace with the actual icon path or class
    },
    {
        title: "Submit requests for transcripts and recommendation letters",
        description: "Submit requests for transcripts and recommendation letters.",
        icon: "icon29.png", // Replace with the actual icon path or class
    },
    {
        title: "Access resources for college and career planning",
        description: "Access resources for college and career planning.",
        icon: "icon30.png", // Replace with the actual icon path or class
    },
    {
        title: "Participate in online assessment and testing",
        description: "Participate in online assessment and testing.",
        icon: "icon31.png", // Replace with the actual icon path or class
    },
    {
        title: "Access information on scholarships and grants",
        description: "Access information on scholarships and grants.",
        icon: "icon32.png", // Replace with the actual icon path or class
    },
    {
        title: "Receive automated attendance alerts and reminders",
        description: "Receive automated attendance alerts and reminders.",
        icon: "icon33.png", // Replace with the actual icon path or class
    },
];

const teachersandstaffFeatures = [
    {
        title: "Manage grades and assignments",
        description: "Efficiently manage grades and assignments for students.",
        icon: "icon1.png", // Replace with the actual icon path or class
    },
    {
        title: "Communicate with parents and students",
        description: "Facilitate communication with parents and students.",
        icon: "icon2.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage school finances and budgets",
        description: "Effectively manage school finances and budgets.",
        icon: "icon3.png", // Replace with the actual icon path or class
    },
    {
        title: "Generate reports and analytics",
        description: "Generate comprehensive reports and analytics for decision-making.",
        icon: "icon4.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage school inventory and supplies",
        description: "Keep track of school inventory and supplies.",
        icon: "icon5.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage transportation and bus routes",
        description: "Efficiently manage school transportation and bus routes.",
        icon: "icon6.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage school events and calendars",
        description: "Organize and manage school events and calendars.",
        icon: "icon7.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage school library and resources",
        description: "Administer the school library and available resources.",
        icon: "icon8.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage hostel and boarding facilities",
        description: "Supervise hostel and boarding facilities for students.",
        icon: "icon9.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage alumni and donor relations",
        description: "Maintain relationships with alumni and donors.",
        icon: "icon10.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage fundraising campaigns",
        description: "Organize and manage fundraising campaigns for the school.",
        icon: "icon11.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage human resources and payroll",
        description: "Administer human resources and payroll processes.",
        icon: "icon12.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage teacher and staff evaluations",
        description: "Conduct teacher and staff evaluations effectively.",
        icon: "icon13.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage student health and medical records",
        description: "Maintain student health and medical records.",
        icon: "icon14.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage student behavior and discipline",
        description: "Oversee student behavior and discipline records.",
        icon: "icon15.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage student clubs and extracurricular activities",
        description: "Organize and supervise student clubs and activities.",
        icon: "icon16.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage student admissions and enrollment",
        description: "Handle student admissions and enrollment processes.",
        icon: "icon17.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage student scholarships and financial aid",
        description: "Administer student scholarships and financial aid programs.",
        icon: "icon18.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage online learning and virtual classrooms",
        description: "Facilitate online learning and virtual classrooms.",
        icon: "icon19.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage school website and social media",
        description: "Maintain the school website and social media presence.",
        icon: "icon20.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage school security and emergency response",
        description: "Ensure school security and plan for emergency responses.",
        icon: "icon21.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage school facilities and maintenance",
        description: "Supervise school facilities and maintenance tasks.",
        icon: "icon22.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage school accreditation and compliance",
        description: "Ensure school accreditation and compliance with standards.",
        icon: "icon23.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage international student programs and visas",
        description: "Administer international student programs and visas.",
        icon: "icon24.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage special education and individualized learning plans",
        description: "Support special education and individualized learning plans.",
        icon: "icon25.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage teacher professional development and training",
        description: "Oversee teacher professional development and training programs.",
        icon: "icon26.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage school partnerships and collaborations",
        description: "Establish and manage school partnerships and collaborations.",
        icon: "icon27.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage school surveys and feedback",
        description: "Collect and analyze school surveys and feedback.",
        icon: "icon28.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage school data and privacy",
        description: "Ensure school data management and privacy compliance.",
        icon: "icon29.png", // Replace with the actual icon path or class
    },
    {
        title: "Attendance management",
        description: "Efficiently manage student attendance records.",
        icon: "icon30.png", // Replace with the actual icon path or class
    },
    {
        title: "Lesson planning and curriculum management",
        description: "Plan lessons and manage the school curriculum.",
        icon: "icon31.png", // Replace with the actual icon path or class
    },
    {
        title: "Online assignment submission and grading",
        description: "Enable online assignment submission and grading.",
        icon: "icon32.png", // Replace with the actual icon path or class
    },
    {
        title: "Parent-teacher conferences scheduling",
        description: "Schedule parent-teacher conferences efficiently.",
        icon: "icon33.png", // Replace with the actual icon path or class
    },
    {
        title: "Integration with learning management systems (LMS)",
        description: "Integrate with learning management systems for seamless teaching.",
        icon: "icon34.png", // Replace with the actual icon path or class
    },
    {
        title: "Library book check-out and inventory",
        description: "Manage library book check-out and inventory.",
        icon: "icon35.png", // Replace with the actual icon path or class
    },
    {
        title: "Staff and student performance evaluations",
        description: "Conduct staff and student performance evaluations.",
        icon: "icon36.png", // Replace with the actual icon path or class
    },
    {
        title: "Extracurricular activity management",
        description: "Manage extracurricular activities for students.",
        icon: "icon37.png", // Replace with the actual icon path or class
    },
    {
        title: "Student health and immunization records",
        description: "Maintain student health and immunization records.",
        icon: "icon38.png", // Replace with the actual icon path or class
    },
];

const schoolmanagementFeatures = [
    {
        title: "Manage school finances and budgets",
        description: "Effectively manage school finances and budgets.",
        icon: "icon1.png", // Replace with the actual icon path or class
    },
    {
        title: "Generate reports and analytics",
        description: "Generate comprehensive reports and analytics for decision-making.",
        icon: "icon2.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage school inventory and supplies",
        description: "Keep track of school inventory and supplies.",
        icon: "icon3.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage transportation and bus routes",
        description: "Efficiently manage school transportation and bus routes.",
        icon: "icon4.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage school events and calendars",
        description: "Organize and manage school events and calendars.",
        icon: "icon5.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage school library and resources",
        description: "Administer the school library and available resources.",
        icon: "icon6.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage hostel and boarding facilities",
        description: "Supervise hostel and boarding facilities for students.",
        icon: "icon7.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage alumni and donor relations",
        description: "Maintain relationships with alumni and donors.",
        icon: "icon8.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage fundraising campaigns",
        description: "Organize and manage fundraising campaigns for the school.",
        icon: "icon9.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage human resources and payroll",
        description: "Administer human resources and payroll processes.",
        icon: "icon10.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage teacher and staff evaluations",
        description: "Conduct teacher and staff evaluations effectively.",
        icon: "icon11.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage school security and emergency response",
        description: "Ensure school security and plan for emergency responses.",
        icon: "icon12.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage school facilities and maintenance",
        description: "Supervise school facilities and maintenance tasks.",
        icon: "icon13.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage school accreditation and compliance",
        description: "Ensure school accreditation and compliance with standards.",
        icon: "icon14.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage international student programs and visas",
        description: "Administer international student programs and visas.",
        icon: "icon15.png", // Replace with the actual icon path or class
    },
    {
        title: "Manage school data and privacy",
        description: "Ensure school data management and privacy compliance.",
        icon: "icon16.png", // Replace with the actual icon path or class
    },
    {
        title: "Admissions and enrollment management",
        description: "Handle student admissions and enrollment processes.",
        icon: "icon17.png", // Replace with the actual icon path or class
    },
    {
        title: "Financial aid and scholarship management",
        description: "Administer student scholarships and financial aid programs.",
        icon: "icon18.png", // Replace with the actual icon path or class
    },
    {
        title: "Staff and student attendance reporting",
        description: "Efficiently manage staff and student attendance records.",
        icon: "icon19.png", // Replace with the actual icon path or class
    },
    {
        title: "Timetable and scheduling management",
        description: "Manage school timetables and scheduling efficiently.",
        icon: "icon20.png", // Replace with the actual icon path or class
    },
    {
        title: "Inventory and asset tracking",
        description: "Track school inventory and assets effectively.",
        icon: "icon21.png", // Replace with the actual icon path or class
    },
    {
        title: "Parent engagement and communication",
        description: "Foster parent engagement and communication.",
        icon: "icon22.png", // Replace with the actual icon path or class
    },
    {
        title: "Alumni database and engagement",
        description: "Maintain an alumni database and engagement strategies.",
        icon: "icon23.png", // Replace with the actual icon path or class
    },
    {
        title: "Fundraising campaign tracking",
        description: "Track fundraising campaigns and progress.",
        icon: "icon24.png", // Replace with the actual icon path or class
    },
    {
        title: "Payroll and salary management",
        description: "Manage payroll and salary processes efficiently.",
        icon: "icon25.png", // Replace with the actual icon path or class
    },
    {
        title: "Performance appraisal and staff development",
        description: "Conduct staff performance appraisals and development programs.",
        icon: "icon26.png", // Replace with the actual icon path or class
    },
    {
        title: "Emergency response planning and communication",
        description: "Plan for emergency responses and effective communication.",
        icon: "icon27.png", // Replace with the actual icon path or class
    },
    {
        title: "Facility maintenance and repair tracking",
        description: "Track facility maintenance and repair tasks.",
        icon: "icon28.png", // Replace with the actual icon path or class
    },
    {
        title: "Regulatory compliance and reporting",
        description: "Ensure regulatory compliance and generate reports.",
        icon: "icon29.png", // Replace with the actual icon path or class
    },
    {
        title: "Visa and immigration document management",
        description: "Manage visa and immigration documents for international students.",
        icon: "icon30.png", // Replace with the actual icon path or class
    },
    {
        title: "Data security and privacy compliance",
        description: "Ensure data security and privacy compliance.",
        icon: "icon31.png", // Replace with the actual icon path or class
    },
    {
        title: "Admission interviews and assessments",
        description: "Conduct admission interviews and assessments.",
        icon: "icon32.png", // Replace with the actual icon path or class
    },
    {
        title: "Financial aid application and disbursement",
        description: "Handle financial aid applications and disbursements.",
        icon: "icon33.png", // Replace with the actual icon path or class
    },
    {
        title: "Resource allocation and optimization",
        description: "Optimize resource allocation for school operations.",
        icon: "icon34.png", // Replace with the actual icon path or class
    },
    {
        title: "Event scheduling and management",
        description: "Schedule and manage school events efficiently.",
        icon: "icon35.png", // Replace with the actual icon path or class
    },
    {
        title: "Library catalog and circulation system",
        description: "Manage the library catalog and circulation system.",
        icon: "icon36.png", // Replace with the actual icon path or class
    },
    {
        title: "Accommodation management for boarding facilities",
        description: "Manage accommodations for boarding facilities.",
        icon: "icon37.png", // Replace with the actual icon path or class
    },
];


const Landing = () => {
    return (
        <LandingContainer>
            <LandingMainContent>
                <LandingHeader>
                    <h1>CPSchools</h1>
                    <div>
                        <LoginButton to="/login">Login</LoginButton>
                        <SignUpButton to="/signup">Sign Up</SignUpButton>
                    </div>
                </LandingHeader>
                <h2>Welcome to CPSchools</h2>
                <p>The ultimate school management software</p>

                <FeatureSection>
                    <h3>For Students</h3>
                    <FeatureGrid>
                        {studentFeatures.map((feature, index) => (
                            <FeatureCard key={index}>
                                {/* Render the icon here */}
                                <img src={feature.icon} alt={`Icon for ${feature.title}`} />
                                <h4>{feature.title}</h4>
                                <p>{feature.description}</p>
                            </FeatureCard>
                        ))}
                    </FeatureGrid>

                    <h3>For Teachers and other staff</h3>
                    <FeatureGrid>
                        {teachersandstaffFeatures.map((feature, index) => (
                            <FeatureCard key={index}>
                                {/* Render the icon here */}
                                <img src={feature.icon} alt={`Icon for ${feature.title}`} />
                                <h4>{feature.title}</h4>
                                <p>{feature.description}</p>
                            </FeatureCard>
                        ))}
                    </FeatureGrid>

                    <h3>For School Management</h3>
                    <FeatureGrid>
                        {schoolmanagementFeatures.map((feature, index) => (
                            <FeatureCard key={index}>
                                {/* Render the icon here */}
                                <img src={feature.icon} alt={`Icon for ${feature.title}`} />
                                <h4>{feature.title}</h4>
                                <p>{feature.description}</p>
                            </FeatureCard>
                        ))}
                    </FeatureGrid>
                </FeatureSection>

            </LandingMainContent>
            <Footer>
                <FooterLinks>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Admissions</a></li>
                        <li><a href="#">Academics</a></li>
                        <li><a href="#">Campus Life</a></li>
                        <li><a href="#">Athletics</a></li>
                        <li><a href="#">Alumni</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </FooterLinks>
                <SocialIcons>
                    <h4>Follow Us</h4>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </SocialIcons>
            </Footer>
        </LandingContainer>
    );
};

export default Landing;
