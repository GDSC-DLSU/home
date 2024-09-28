const departmentsProgramsMap = {
    CCS: [
        "Bachelor of Science in Computer Science Major in Software Technology",
        "Bachelor of Science in Computer Science Major in Network and Information Security",
        "Bachelor of Science in Computer Science Major in Computer Systems Engineering",
        "Bachelor of Science in Information Systems",
        "Bachelor of Science in Information Technology",
        "Bachelor of Science in Interactive Entertainment Major in Game Art and Design",
        "Bachelor of Science in Interactive Entertainment Major in Game Development",
        "Bachelor of Science (Honors) in Computer Science and Master of Science in Computer Science"
    ],
    BAGCED: [
        "Bachelor of Early Childhood Education",
        "Bachelor of Secondary Education Major in English",
        "Bachelor of Secondary Education Major in Science with specialization in Biology",
        "Bachelor of Secondary Education Major in Science with specialization in Chemistry",
        "Bachelor of Secondary Education Major in Science with specialization in Physics",
        "Bachelor of Secondary Education Major in Mathematics",
        "Bachelor of Arts in English Language Studies",
        "Bachelor in Human Services"
    ],
    COS: [
        "Bachelor of Science in Biochemistry",
        "Bachelor of Science in Biology Major in Medical Biology (BS BIO-MED)",
        "Bachelor of Science in Biology Major in Systematics and Ecology (BS BIO-SEC)",
        "Bachelor of Science in Biology Major in Molecular Biology and Biotechnology (BS BIO-MBB)",
        "Bachelor of Science in Chemistry",
        "Bachelor of Science in Chemistry minor in Business Studies",
        "Bachelor of Science in Human Biology",
        "Bachelor of Science in Mathematics with specialization in Business Application",
        "Bachelor of Science in Mathematics with specialization in Computer Applications",
        "Bachelor of Science in Statistics major in Actuarial Science",
        "BS in Physics Minor in Economics",
        "BS in Physics Minor in Finance",
        "BS in Physics with specialization in Materials Science",
        "Bachelor of Science in Physics with Specialization in Medical Instrumentation",
        "Bachelor of Science in Premed Physics",
        "Bachelor of Science in Animal Biology"
    ],
    GCOE: [
        "Bachelor of Science in Chemical Engineering",
        "Bachelor of Science in Civil Engineering",
        "Bachelor of Science in Computer Engineering",
        "Bachelor of Science in Electronics Engineering",
        "Bachelor of Science in Industrial Engineering",
        "Bachelor of Science in Industrial Engineering with specialization in Data Analytics",
        "Bachelor of Science in Industrial Engineering with specialization in Information Technology",
        "Bachelor of Science in Industrial Engineering with specialization in Service Management",
        "Bachelor of Science in Industrial Engineering (Honors) and Master of Science in Industrial Engineering",
        "Bachelor of Science in Manufacturing and Robotics Engineering with specialization in Industrial Automation",
        "Bachelor of Science in Manufacturing and Robotics Engineering with specialization in Human Robot Interaction",
        "Bachelor of Science in Mechanical Engineering with Specialization in Mechatronics Engineering",
        "Bachelor of Science in Mechanical Engineering (Honors) with specialization in Mechatronics Engineering and Master of Science in Mechanical Engineering",
        "Bachelor of Science in Chemical Engineering (Honors) and Master of Science in Chemical Engineering",
        "Bachelor of Science in Civil Engineering (Honors) and Master of Science in Civil Engineering",
        "Bachelor of Science in Electronics Engineering (Honors) and Master of Science in Electronics and Communications Engineering",
        "Bachelor of Science in Manufacturing Engineering and Management with specialization in Mechatronics and Robotics Engineering and Master of Science in Manufacturing Engineering"
    ],
    RVRCOB: [
        "Bachelor of Science in Accountancy",
        "Bachelor of Science in Advertising Management",
        "Bachelor of Science in Applied Corporate Management",
        "Bachelor of Science in Business Management",
        "Bachelor of Science in Entrepreneurship",
        "Bachelor of Science in Interdisciplinary Business Studies",
        "Bachelor of Science in Legal Management",
        "Bachelor of Science in Management of Financial Institutions",
        "Bachelor of Science in Marketing Management",
        "Bachelor of Science in Management Accounting with Business Analytics",
        "Bachelor of Science in Management Accounting"
    ],
    SOE: [
        "Bachelor of Science in Applied Economics (Honors) and Master of Science in Economics",
        "Bachelor of Science in Applied Economics Major in Industrial Economics",
        "Bachelor of Science in Applied Economics Major in Financial Economics",
        "Bachelor of Arts (AB) Major in Economics",
        "Bachelor of Science in Applied Economics major in Industrial Economics and Bachelor of Science in Accountancy",
        "Bachelor of Science in Applied Economics major in Industrial Economics and Bachelor of Science in Advertising Management",
        "Bachelor of Science in Applied Economics major in Industrial Economics and Bachelor of Science in Applied Corporate Management",
        "Bachelor of Science in Applied Economics major in Industrial Economics and Bachelor of Science in Business Management",
        "Bachelor of Science in Applied Economics major in Industrial Economics and Bachelor of Science in Legal Management",
        "Bachelor of Science in Applied Economics major in Industrial Economics and Bachelor of Science in Management of Financial Institutions",
        "Bachelor of Science in Applied Economics major in Industrial Economics and Bachelor of Science in Marketing Management",
        "Bachelor of Science in Applied Economics major in Financial Economics and Bachelor of Science in Accountancy",
        "Bachelor of Science in Applied Economics major in Financial Economics and Bachelor of Science in Advertising Management",
        "Bachelor of Science in Applied Economics major in Financial Economics and Bachelor of Science in Applied Corporate Management",
        "Bachelor of Science in Applied Economics major in Financial Economics and Bachelor of Science in Business Management",
        "Bachelor of Science in Applied Economics major in Financial Economics and Bachelor of Science in Legal Management",
        "Bachelor of Science in Applied Economics major in Financial Economics and Bachelor of Science in Management of Financial Institutions",
        "Bachelor of Science in Applied Economics major in Financial Economics and Bachelor of Science in Marketing Management"
    ],
    CLA: [
        "Bachelor of Arts in Behavioral Sciences, Major in Organizational and Social Systems Development",
        "Bachelor of Arts in Development Studies",
        "Bachelor of Arts in History",
        "Bachelor of Arts in Southeast Asian Studies",
        "AB in International Studies, Major in American Studies",
        "AB in International Studies, Major in European Studies",
        "AB in International Studies, Major in Japanese Studies",
        "AB in International Studies major in Chinese Studies",
        "Bachelor of Arts in Literature Major in Creative Writing",
        "Bachelor of Arts in Literature Major in Literary and Cultural Studies",
        "Bachelor of Arts in Philippine Studies, Major in Filipino in Mass Media (AB-PHS)",
        "Bachelor of Arts in Political Science",
        "Bachelor of Arts in Communication Arts",
        "Bachelor of Arts in Organizational Communication",
        "AB, Major in Philosophy",
        "Bachelor of Arts in Psychology",
        "Bachelor of Science in Psychology",
        "Bachelor of Arts in Sociology",
        "Bachelor of Arts in Behavioral Sciences major in Organizational and Social Systems Development and Master of Arts in Behavioral Sciences",
        "Bachelor of Arts in Philosophy and Artificial Intelligence",
        "Bachelor of Arts (AB) in Behavioral Sciences major in Organizational and Social Systems Development and BS in Advertising Management",
        "Bachelor of Arts (AB) in Behavioral Sciences major in Organizational and Social Systems Development and BS in Applied Corporate Management",
        "Bachelor of Arts (AB) in Behavioral Sciences major in Organizational and Social Systems Development and BS in Accountancy",
        "Bachelor of Arts (AB) in Behavioral Sciences major in Organizational and Social Systems Development and BS in Management of Financial Institutions",
        "Bachelor of Arts (AB) in Behavioral Sciences major in Organizational and Social Systems Development and BS in Legal Management",
        "Bachelor of Arts (AB) in Behavioral Sciences major in Organizational and Social Systems Development and BS in Business Management",
        "Bachelor of Arts (AB) in Behavioral Sciences major in Organizational and Social Systems Development and BS in Marketing Management",
        "Bachelor of Arts (AB) in Behavioral Sciences major in Organizational and Social Systems Development and BS in Entrepreneurship",
        "AB in Development Studies and BS in Advertising Management",
        "AB in Development Studies and BS in Applied Corporate Management",
        "AB in Development Studies and BS in Accountancy",
        "AB in Development Studies and BS in Management of Financial Institutions",
        "AB in Development Studies and BS in Legal Management",
        "AB in Development Studies and BS in Business Management",
        "AB in Development Studies and BS in Marketing Management",
        "AB in Development Studies and BS in Entrepreneurship",
        "AB in History and BS in Advertising Management",
        "AB in History and BS in Applied Corporate Management",
        "AB in History and BS in Accountancy",
        "AB in History and BS in Management of Financial Institutions",
        "AB in History and BS in Legal Management",
        "AB in History and BS in Business Management",
        "AB in History and BS in Marketing Management",
        "AB in History and BS in Entrepreneurship",
        "AB in Literature major in Creative Writing and BS in Advertising Management",
        "AB in Literature major in Creative Writing and BS in Applied Corporate Management",
        "AB in Literature major in Creative Writing and BS in Accountancy",
        "AB in Literature major in Creative Writing and BS in Management of Financial Institutions",
        "AB in Literature major in Creative Writing and BS in Legal Management",
        "AB in Literature major in Creative Writing and BS in Business Management",
        "AB in Literature major in Creative Writing and BS in Marketing Management",
        "AB in Literature major in Creative Writing and BS in Entrepreneurship",
        "AB in Literature major in Literary and Cultural Studies and BS in Advertising Management",
        "AB in Literature major in Literary and Cultural Studies and BS in Applied Corporate Management",
        "AB in Literature major in Literary and Cultural Studies and BS in Accountancy",
        "AB in Literature major in Literary and Cultural Studies and BS in Management of Financial Institutions",
        "AB in Literature major in Literary and Cultural Studies and BS in Legal Management",
        "AB in Literature major in Literary and Cultural Studies and BS in Business Management",
        "AB in Literature major in Literary and Cultural Studies and BS in Marketing Management",
        "AB in Literature major in Literary and Cultural Studies and BS in Entrepreneurship",
        "AB major in Organizational Communication and BS in Advertising Management",
        "AB major in Organizational Communication and BS in Applied Corporate Management",
        "AB major in Organizational Communication and BS in Accountancy",
        "AB major in Organizational Communication and BS in Management of Financial Institutions",
        "AB major in Organizational Communication and BS in Legal Management",
        "AB major in Organizational Communication and BS in Business Management",
        "AB major in Organizational Communication and BS in Marketing Management",
        "AB major in Organizational Communication and BS in Entrepreneurship",
        "AB major in Philosophy and BS in Advertising Management",
        "AB major in Philosophy and BS in Applied Corporate Management",
        "AB major in Philosophy and BS in Accountancy",
        "AB major in Philosophy and BS in Management of Financial Institutions",
        "AB major in Philosophy and BS in Legal Management",
        "AB major in Philosophy and BS in Business Management",
        "AB major in Philosophy and BS in Marketing Management",
        "AB major in Philosophy and BS in Entrepreneurship",
        "AB major in Political Science and BS in Advertising Management",
        "AB major in Political Science and BS in Applied Corporate Management",
        "AB major in Political Science and BS in Accountancy",
        "AB major in Political Science and BS in Management of Financial Institutions",
        "AB major in Political Science and BS in Legal Management",
        "AB major in Political Science and BS in Business Management",
        "AB major in Political Science and BS in Marketing Management",
        "AB major in Political Science and BS in Entrepreneurship",
        "AB major in Psychology and BS in Advertising Management",
        "AB major in Psychology and BS in Applied Corporate Management",
        "AB major in Psychology and BS in Accountancy",
        "AB major in Psychology and BS in Management of Financial Institutions",
        "AB major in Psychology and BS in Legal Management",
        "AB major in Psychology and BS in Business Management",
        "AB major in Psychology and BS in Marketing Management",
        "AB major in Psychology and BS in Entrepreneurship",
        "AB major in Communication Arts and BS in Advertising Management",
        "AB major in Communication Arts and BS in Applied Corporate Management",
        "AB major in Communication Arts and BS in Accountancy",
        "AB major in Communication Arts and BS in Management of Financial Institutions",
        "AB major in Communication Arts and BS in Legal Management",
        "AB major in Communication Arts and BS in Business Management",
        "AB major in Communication Arts and BS in Marketing Management",
        "AB major in Communication Arts and BS in Entrepreneurship",
        "AB in International Studies major in American Studies and BS in Advertising Management",
        "AB in International Studies major in American Studies and BS in Applied Corporate Management",
        "AB in International Studies major in American Studies and BS in Accountancy",
        "AB in International Studies major in American Studies and BS in Management of Financial Institutions",
        "AB in International Studies major in American Studies and BS in Legal Management",
        "AB in International Studies major in American Studies and BS in Business Management",
        "AB in International Studies major in American Studies and BS in Marketing Management",
        "AB in International Studies major in American Studies and BS in Entrepreneurship",
        "AB in International Studies major in Chinese Studies and BS in Advertising Management",
        "AB in International Studies major in Chinese Studies and BS in Applied Corporate Management",
        "AB in International Studies major in Chinese Studies and BS in Accountancy",
        "AB in International Studies major in Chinese Studies and BS in Management of Financial Institutions",
        "AB in International Studies major in Chinese Studies and BS in Legal Management",
        "AB in International Studies major in Chinese Studies and BS in Business Management",
        "AB in International Studies major in Chinese Studies and BS in Marketing Management",
        "AB in International Studies major in Chinese Studies and BS in Entrepreneurship",
        "AB in International Studies major in European Studies and BS in Advertising Management",
        "AB in International Studies major in European Studies and BS in Applied Corporate Management",
        "AB in International Studies major in European Studies and BS in Accountancy",
        "AB in International Studies major in European Studies and BS in Management of Financial Institutions",
        "AB in International Studies major in European Studies and BS in Legal Management",
        "AB in International Studies major in European Studies and BS in Business Management",
        "AB in International Studies major in European Studies and BS in Marketing Management",
        "AB in International Studies major in European Studies and BS in Entrepreneurship",
        "AB in International Studies major in Japanese Studies and BS in Advertising Management",
        "AB in International Studies major in Japanese Studies and BS in Applied Corporate Management",
        "AB in International Studies major in Japanese Studies and BS in Accountancy",
        "AB in International Studies major in Japanese Studies and BS in Management of Financial Institutions",
        "AB in International Studies major in Japanese Studies and BS in Legal Management",
        "AB in International Studies major in Japanese Studies and BS in Business Management",
        "AB in International Studies major in Japanese Studies and BS in Marketing Management",
        "AB in International Studies major in Japanese Studies and BS in Entrepreneurship",
        "Bachelor of Arts in Southeast Asian Studies and BS in Advertising Management",
        "Bachelor of Arts in Southeast Asian Studies and BS in Applied Corporate Management",
        "Bachelor of Arts in Southeast Asian Studies and BS in Accountancy",
        "Bachelor of Arts in Southeast Asian Studies and BS in Management of Financial Institutions",
        "Bachelor of Arts in Southeast Asian Studies and BS in Legal Management",
        "Bachelor of Arts in Southeast Asian Studies and BS in Business Management",
        "Bachelor of Arts in Southeast Asian Studies and BS in Marketing Management",
        "Bachelor of Arts in Southeast Asian Studies and BS in Entrepreneurship",
        "AB in Philippine Studies major in Filipino in Mass Media and BS in Advertising Management",
        "AB in Philippine Studies major in Filipino in Mass Media and BS in Applied Corporate Management",
        "AB in Philippine Studies major in Filipino in Mass Media and BS in Accountancy",
        "AB in Philippine Studies major in Filipino in Mass Media and BS in Management of Financial Institutions",
        "AB in Philippine Studies major in Filipino in Mass Media and BS in Legal Management",
        "AB in Philippine Studies major in Filipino in Mass Media and BS in Business Management",
        "AB in Philippine Studies major in Filipino in Mass Media and BS in Marketing Management",
        "AB in Philippine Studies major in Filipino in Mass Media and BS in Entrepreneurship"
    ]
};

export default departmentsProgramsMap;