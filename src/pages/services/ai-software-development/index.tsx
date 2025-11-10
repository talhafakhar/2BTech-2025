import Footer from '@/components/Footer/footer';
import HeroSection from '@/components/services/HeroSection';
import React from "react";
import AboutSection from "@/components/services/AboutSection";
import Banner from "@/components/Home/bannerSection";
import FaqSection from "@/components/Home/FaqSection";
import {FAQPageJsonLd, NextSeo, WebPageJsonLd} from "next-seo";
import FinalCTASection from "@/components/services/FinalCTASection";
import ServiceSection from "@/components/services/ServicesSection";
import OurFlowSection from "@/components/services/OurFlowSection";
import OurModals from "@/components/services/ModalSection";
import WhatIsSection from "@/components/services/WhatIsSection";
import OurStack from "@/components/services/stackSection";

export default function AiSoftwareDevelopment() {
    const faqs = [
        {
            id: 1,
            question: "What AI software development services does 2BTech offer?",
            answer:
                "2BTech provides comprehensive AI software development services including custom AI model development, machine learning development, deep learning solutions, computer vision development, natural language processing, predictive analytics, AI chatbot development, and AI integration services. Our artificial intelligence services span multiple industries and use cases, delivering tailored solutions that address specific business challenges and drive measurable results.",
        },
        {
            id: 2,
            question: "How long does an AI software development project take?",
            answer:
                "Project timelines vary based on complexity and scope. Simple AI integrations typically take 6-8 weeks, while comprehensive machine learning development projects range from 3-6 months. Custom AI model development for complex use cases may require 6-12 months. We provide accurate timeline estimates during our initial consultation phase, ensuring transparent planning and realistic expectations aligned with your business objectives.",
        },
        {
            id: 3,
            question: "What is the cost of AI software development?",
            answer:
                "AI software development costs depend on project complexity, technology requirements, data volume, and integration needs. Basic AI solutions start at $30,000-$75,000, while enterprise-grade custom AI model development ranges from $100,000-$500,000+. We offer flexible engagement models (fixed price or dedicated team) and provide detailed cost breakdowns with transparent pricing that demonstrates clear ROI potential.",
        },
        {
            id: 4,
            question: "What industries benefit most from AI software development?",
            answer:
                "All industries benefit from artificial intelligence services. We specialize in healthcare (diagnostic AI, patient monitoring), finance (fraud detection, risk assessment), retail (personalization, inventory optimization), manufacturing (predictive maintenance, quality control), education (adaptive learning), logistics (route optimization), and customer service (AI chatbots). Each industry has unique opportunities for AI-driven transformation.",
        },
        {
            id: 5,
            question: "Do I need existing data to start AI software development?",
            answer:
                "While historical data enhances machine learning development effectiveness, it's not always mandatory. We can work with limited datasets using transfer learning, data augmentation, or synthetic data generation. For some computer vision development and NLP projects, we leverage pre-trained models fine-tuned to your needs. We assess your data situation during consultation and recommend optimal approaches.",
        },
        {
            id: 6,
            question: "How do you ensure AI model accuracy and reliability?",
            answer:
                "We employ rigorous testing methodologies, cross-validation techniques, and continuous monitoring. Our custom AI model development process includes extensive training, validation, and testing phases. We use performance metrics like accuracy, precision, recall, F1-scores, and ROC curves to evaluate models. Post-deployment, we implement monitoring systems that track performance, detect drift, and enable continuous improvement.",
        },
        {
            id: 7,
            question: "Can AI solutions integrate with our existing systems?",
            answer:
                "Absolutely. Our AI software development services prioritize seamless integration with existing infrastructure. We work with legacy systems, modern cloud platforms, APIs, databases, and enterprise software. Whether you use SAP, Salesforce, custom platforms, or proprietary systems, our team ensures smooth integration through APIs, microservices architecture, and careful planning that minimizes disruption.",
        },
        {
            id: 8,
            question: "What's the difference between machine learning and deep learning?",
            answer:
                "Machine learning development involves algorithms that learn patterns from data to make predictions or decisions. Deep learning solutions are a subset of ML using neural networks with multiple layers, capable of learning complex patterns from vast amounts of unstructured data. Deep learning excels at image recognition, NLP, and complex pattern recognition, while traditional ML works well for structured data analysis.",
        },
        {
            id: 9,
            question: "How do you handle data security and privacy in AI development?",
            answer:
                "Data security is paramount in our AI software development process. We implement end-to-end encryption, secure data transmission, access controls, and compliance with regulations (GDPR, HIPAA, CCPA). We offer on-premise deployment, private cloud options, and federated learning approaches. All team members sign NDAs, and we follow security best practices throughout development, deployment, and maintenance.",
        },
        {
            id: 10,
            question: "What support do you provide after AI solution deployment?",
            answer:
                "2BTech provides comprehensive post-deployment support including performance monitoring, model retraining, bug fixes, feature enhancements, and technical assistance. We offer flexible maintenance packages ensuring your AI solutions remain effective as data patterns evolve. Our team provides training, documentation, and ongoing consultation to maximize value and adapt solutions to changing business needs.",
        },
        {
            id: 11,
            question: "How does custom AI model development differ from using pre-built AI?",
            answer:
                "Custom AI model development creates solutions specifically designed for your unique data, business processes, and objectives, delivering superior performance and competitive advantages. Pre-built AI offers faster deployment but limited customization. We assess your needs and recommend the optimal approach—sometimes combining pre-trained models with custom development for the best balance of speed, cost, and performance.",
        },
        {
            id: 12,
            question: "What ROI can we expect from AI software development?",
            answer:
                "ROI varies by use case but our clients typically see significant returns. Common benefits include 30-60% operational cost reduction, 40-80% time savings on automated tasks, 25-50% revenue increases through personalization, and 50-90% improvement in accuracy for specific tasks. Most projects achieve positive ROI within 6-18 months. We work with you to define success metrics and track ROI throughout implementation.",
        },
    ];
    const StackIcons = {
        TensorFlow: () =>     <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
            viewBox="-9 0 274 274"
            className="w-14 h-14"
        >
            <g id="SVGRepo_iconCarrier">
                <path
                    fill="#E55B2D"
                    d="M145.726 42.065v42.07l72.861 42.07v-42.07zM0 84.135v42.07l36.43 21.03V105.17zm109.291 21.035-36.43 21.034v126.2l36.43 21.035v-84.135l36.435 21.035v-42.07l-36.435-21.034z"
                ></path>
                <path
                    fill="#ED8E24"
                    d="M145.726 42.065 36.43 105.17v42.065l72.861-42.065v42.065l36.435-21.03zM255.022 63.1l-36.435 21.035v42.07l36.435-21.035zm-72.865 84.135-36.43 21.035v42.07l36.43-21.036zm-36.43 63.104-36.436-21.035v84.135l36.435-21.035z"
                ></path>
                <path
                    fill="#F8BF3C"
                    d="M145.726 0 0 84.135l36.43 21.035 109.296-63.105 72.861 42.07L255.022 63.1zm0 126.204-36.435 21.03 36.435 21.036 36.43-21.035z"
                ></path>
            </g>
        </svg>,
        PyTorch: () =>     <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
            viewBox="-27 0 310 310"
            className="w-14 h-14"
        >
            <path
                id="SVGRepo_iconCarrier"
                fill="#EE4C2C"
                d="M218.281 90.106c50.292 50.292 50.292 130.969 0 181.61-49.244 50.292-130.27 50.292-180.562 0s-50.292-131.318 0-181.61L127.825 0v45.053l-8.382 8.382-59.721 59.722c-37.72 37.02-37.72 97.79 0 135.509 37.02 37.719 97.79 37.719 135.509 0 37.719-37.02 37.719-97.79 0-135.51zm-45.053-5.588c-9.259 0-16.764-7.505-16.764-16.764 0-9.258 7.505-16.764 16.764-16.764 9.258 0 16.764 7.506 16.764 16.764 0 9.259-7.506 16.764-16.764 16.764"
            ></path>
        </svg>,
        'Scikit-learn': () =>    <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            id="Layer_1"
            className="w-14 h-14"
            x="0"
            y="0"
            version="1.1"
            viewBox="0 0 277.319 149.559"
        >
            <g id="g3" transform="translate(-120.609 -220.26)">
                <path
                    id="path5"
                    fill="#f89939"
                    d="M333.32 347.348c33.869-33.867 39.498-83.146 12.572-110.07-26.922-26.921-76.199-21.293-110.066 12.572-33.867 33.866-24.07 98.568-12.57 110.07 9.293 9.293 76.199 21.293 110.064-12.572"
                ></path>
                <path
                    id="path7"
                    fill="#3499cd"
                    d="M194.35 298.411c-19.648-19.648-48.242-22.919-63.867-7.295-15.621 15.622-12.355 44.22 7.297 63.865 19.652 19.654 57.195 13.969 63.863 7.295 5.396-5.387 12.361-44.215-7.293-63.865"
                ></path>
            </g>
            <g id="g9" transform="translate(-120.609 -220.26)">
                <g id="g11" fill="#010101">
                    <path
                        id="path13"
                        d="M262.143 339.047q-5.207 4.794-9.133 7.068-3.925 2.28-7.488 2.279-4.1 0-6.607-3.178c-1.674-2.121-2.508-4.965-2.508-8.543q0-8.043 3.486-19.301c2.32-7.51 5.145-14.43 8.463-20.761l9.729-3.602q.459-.154.691-.154c.738 0 1.348.544 1.816 1.627q.71 1.632.711 4.388.001 7.813-3.602 15.129-3.602 7.317-11.26 15.627-.307 3.983-.307 5.477 0 3.333 1.225 5.285c.818 1.305 1.902 1.953 3.256 1.953q2.07.002 4.406-1.49c1.555-.998 3.93-3.064 7.121-6.207v4.403zm-14.668-14.973a46.7 46.7 0 0 0 7.891-12.121q3.024-6.712 3.023-11.549c0-.94-.139-1.704-.418-2.278q-.423-.863-1.074-.864c-.941 0-2.316 2.352-4.117 7.057q-2.701 7.057-5.305 19.755"
                    ></path>
                    <path
                        id="path15"
                        d="M290.795 339.047q-4.863 4.794-8.732 7.068c-2.58 1.52-5.424 2.279-8.541 2.279q-5.209 0-8.41-3.33c-2.131-2.225-3.195-5.146-3.195-8.773 0-5.412 1.875-10.309 5.633-14.688 3.75-4.381 7.914-6.57 12.484-6.57q3.56.001 5.707 1.84 2.145 1.84 2.145 4.826 0 7.929-16.852 12.869 1.53 7.467 8.004 7.469 2.528 0 4.824-1.357 2.3-1.364 6.934-6.035zm-20.07-7.084q9.804-2.758 9.805-10.188-.001-3.676-2.68-3.676-2.528-.002-4.824 3.85-2.303 3.846-2.301 10.014"
                    ></path>
                    <path
                        id="path17"
                        d="M331.701 339.047q-6.13 5.823-8.77 7.588-2.643 1.76-5.057 1.76-6.052 0-5.707-10.686-3.83 5.474-7.068 8.084-3.233 2.603-6.684 2.602-3.366.001-5.725-3.158c-1.573-2.107-2.354-4.691-2.354-7.758q0-5.742 3.156-10.955 3.163-5.208 8.102-8.424c3.293-2.145 6.207-3.219 8.732-3.219q4.79 0 6.705 4.404l7.828-4.326h2.148l-3.381 11.221q-2.606 8.467-2.607 11.607-.001 3.293 2.336 3.293 1.489 0 3.291-1.59 1.8-1.591 5.053-4.846v4.403zm-28.037 2.109q3.828 0 7.223-6.529 3.39-6.534 3.389-12.049c0-1.428-.322-2.547-.957-3.35q-.961-1.209-2.566-1.207-3.834 0-7.258 6.512-3.429 6.514-3.43 11.986.001 2.07 1.016 3.354c.676.856 1.534 1.283 2.583 1.283"
                    ></path>
                    <path
                        id="path19"
                        d="M360.314 339.047q-9.615 9.423-14.824 9.424-2.34-.001-3.945-1.969c-1.07-1.316-1.609-2.945-1.609-4.887q.001-5.399 5.785-14.477-2.835 1.455-6.205 2.029-2.491 4.597-7.814 9.879h-.879v-3.443a50 50 0 0 0 5.4-6.666q-3.297-1.457-3.295-4.326c0-1.969.668-4.068 2.012-6.305q2.01-3.348 5.535-3.348c1.992 0 2.986 1.018 2.986 3.062q0 2.412-1.725 6.895c4.238-.461 7.941-3.701 11.109-9.729l3.484-.154-3.562 9.805q-2.22 6.207-2.871 8.447c-.433 1.492-.652 2.816-.652 3.963 0 1.074.25 1.932.746 2.566.498.643 1.17.959 2.012.959q1.378-.002 2.643-.936c.842-.631 2.732-2.359 5.67-5.193z"
                    ></path>
                    <path
                        id="path21"
                        d="M397.928 339.047c-5.898 6.234-10.957 9.348-15.168 9.348q-2.567 0-4.137-1.801-1.573-1.798-1.572-4.824 0-4.1 3.373-12.523c1.199-3.014 1.801-4.932 1.801-5.746 0-.818-.322-1.227-.957-1.227q-.537.001-1.418.535c-.539.357-1.164.859-1.879 1.496a43 43 0 0 0-2.145 2.141 61 61 0 0 0-2.219 2.453l-2.148 2.492q-1.416 1.721-1.76 3.637-.576 3.256-.768 5.979-.116 2.024-.115 5.477l-8.465 1.988q-.42-5.172-.422-7.697 0-6.167 1.438-11.682c.957-3.68 2.494-7.814 4.615-12.412l9.344-1.799q-2.947 7.93-3.867 12.484c4.188-4.672 7.508-7.906 9.969-9.709 2.457-1.801 4.645-2.697 6.557-2.697 1.299 0 2.385.49 3.25 1.471.869.982 1.301 2.215 1.301 3.689q0 3.674-3.291 12.104-2.262 5.78-2.262 7.51 0 2.305 1.881 2.305c1.867 0 4.891-2.465 9.064-7.393z"
                    ></path>
                </g>
            </g>
            <text
                id="text25"
                x="153.333"
                y="81.946"
                fill="#fff"
                fontFamily="Helvetica"
                fontSize="23.08"
                style={{ lineHeight: "0%" }}
            >
                scikit
            </text>
        </svg>,
        Keras: () =>   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-14 h-14">
            <path
                id="SVGRepo_iconCarrier"
                d="M32 0H0v32h32zM11.266 6.88l.266.224v8.323l8.615-8.599h2.615l.266.531-6.854 6.802 7.297 10.583-.271.401h-2.583l-6.203-9.172-2.88 2.771v6.135l-.25.266H9.336l-.266-.266V7.103l.224-.224z"
            ></path>
        </svg>,
        "OpenAI GPT-4": () =>    <svg
            xmlns="http://www.w3.org/2000/svg"
           className="w-14 h-14"
            fill="none"
            viewBox="0 0 30 30"
        >
            <circle cx="15" cy="15" r="15" fill="#0FA37F"></circle>
            <path
                fill="#fff"
                d="m15.063 3.897.082.02a5.95 5.95 0 0 1 2.508 1.289c.116.098.205.199.298.32a.3.3 0 0 0 .16.115c.127-.004.24-.022.363-.047.273-.054.54-.063.817-.062h.069a5.4 5.4 0 0 1 1.187.125c.98.214 1.9.675 2.626 1.361.081.078.081.078.169.145.119.094.21.204.307.32l.082.096a5.75 5.75 0 0 1 1.306 4.254l-.006.07a2.5 2.5 0 0 1-.1.437c-.125.351-.125.351-.11.71.08.14.194.244.312.352.093.094.16.201.228.313l.04.065a5.75 5.75 0 0 1 .683 4.376 8 8 0 0 1-.129.44 5.3 5.3 0 0 1-.897 1.646l-.069.09c-.779.981-1.93 1.723-3.175 1.978h-.131l-.013.05c-.36 1.321-1.402 2.45-2.574 3.136-1.378.779-3.005.945-4.531.542-.89-.248-1.9-.762-2.492-1.485a.8.8 0 0 0-.155-.143 1 1 0 0 0-.27.02l-.158.022-.082.012a3 3 0 0 1-.381.02h-.384c-.39-.002-.77-.013-1.15-.107l-.083-.02c-1.058-.261-1.982-.755-2.754-1.517l-.148-.14c-1.002-.936-1.52-2.395-1.57-3.73a6 6 0 0 1 .163-1.498l.016-.068q.018-.072.041-.143a.8.8 0 0 0 .042-.217 1 1 0 0 0-.156-.214l-.102-.118-.052-.06c-.902-1.064-1.22-2.569-1.123-3.922.139-1.495.906-2.91 2.066-3.878a6 6 0 0 1 1.77-.978c.119-.041.231-.073.357-.088a.85.85 0 0 0 .353-.11c.116-.167.17-.37.232-.56.197-.558.59-1.069 1-1.49.08-.08.08-.08.147-.167.096-.117.208-.207.325-.302l.1-.082c1.344-1.08 3.237-1.601 4.946-1.178m-4.471 2.819a4 4 0 0 0-.379.508l-.064.098a4 4 0 0 0-.362.774l-.037.102c-.238.69-.21 1.42-.212 2.139v.272l-.003.854q-.001.492-.005.982-.004.382-.004.763 0 .228-.002.454-.003.214-.001.426l-.001.156c-.015.276-.015.276.1.515.076.05.147.087.231.121l.107.063.098.055.112.063.117.065.695.39.097.056.179.101.08.045.068.04c.048.03.048.03.085.027v-.1a1295 1295 0 0 1 .01-3.581l.003-1.556.002-.693.001-.255v-.074a.78.78 0 0 1 .202-.523c.138-.108.28-.196.436-.277l.157-.084.085-.046q.234-.128.464-.263.415-.24.832-.477l.107-.06.215-.123.746-.424.433-.246q.66-.375 1.321-.748c-.607-.633-1.63-.947-2.494-.978-1.338-.028-2.505.472-3.42 1.439m5.89 1.253q-.254.146-.508.288-.457.256-.91.518-.426.244-.853.484a100 100 0 0 0-1.354.772l-.108.06q-.05.03-.1.057c-.08.041-.08.041-.109.113a4 4 0 0 0-.004.203v.269l.001.143v.377l.002.385.001.755.22-.109.064-.03q.219-.107.429-.233l.142-.083.077-.046q.245-.141.492-.28l.11-.063.223-.127.537-.305.641-.365q.515-.292 1.026-.586a132 132 0 0 1 .988-.565q.284-.16.573-.307l.11-.056a.64.64 0 0 1 .496-.02c.214.095.418.206.623.32l.11.061q.33.184.657.374a56 56 0 0 0 .733.42l.223.127 1.187.675.111.063.217.123q.238.135.474.274l.08.046.14.085c.122.073.122.073.262.09.171-1.147-.136-2.267-.825-3.198a5 5 0 0 0-.224-.259l-.045-.05c-.79-.85-1.848-1.266-3-1.348-1.1-.027-1.989.41-2.91.948M7.706 9.471l-.072.036a4.8 4.8 0 0 0-.895.592l-.063.05c-.787.637-1.263 1.685-1.379 2.664a6 6 0 0 0-.01.543c.004.303.033.585.108.878l.032.124c.33 1.193 1.135 2.049 2.197 2.654l.096.055q.322.184.645.367.27.152.537.305l.641.364 1.03.589.965.553.102.058.178.1.099.059c.095.047.095.047.183.014l.085-.05.098-.056.104-.062.109-.063.225-.131q.217-.129.437-.253l.29-.167q.232-.134.467-.26a1 1 0 0 0-.264-.196l-.102-.058-.11-.061-.116-.065-.24-.135-.544-.31-.213-.12-2.13-1.212-.319-.181-.547-.31a69 69 0 0 1-.704-.4 11 11 0 0 1-.293-.17.8.8 0 0 1-.27-.58 53.644 53.644 0 0 1-.004-.955l-.001-.457-.002-.863-.002-.984q-.004-1.01-.004-2.02c-.133 0-.229.056-.344.114m10.113 1.137c-.05.03-.05.03-.103.059l-.112.064-.114.066-.24.136q-.181.105-.364.207l-.058.034-.279.158-.102.058-.089.05-.083.048q-.045.026-.093.05l-.071.047v.065l.07.04q.8.448 1.594.9l.32.183q.514.292 1.027.587.426.245.856.486.582.328 1.16.662l.237.134.069.039.175.097a.77.77 0 0 1 .292.393q.006.11.005.221v.069l.002.228v.163l.005.908.005.878.016 3.057.188-.077.105-.043a4 4 0 0 0 .366-.181l.068-.038a3.2 3.2 0 0 0 .518-.372l.082-.07a4.2 4.2 0 0 0 1.447-2.844 4.25 4.25 0 0 0-1.07-3.094c-.462-.512-1.028-.833-1.628-1.167q-.25-.141-.498-.285-.426-.246-.856-.487-.478-.268-.952-.542l-.841-.48q-.354-.2-.704-.406c-.172-.1-.179-.099-.35-.001m-3.004 1.705-.093.054-.102.06-.216.125-.057.033q-.343.198-.69.394a6 6 0 0 0-.2.119 1.7 1.7 0 0 1-.33.137c-.235.088-.436.18-.588.385-.157.397-.101.884-.086 1.3q.003.195 0 .389-.002.187.003.376v.178c-.008.32-.008.32.138.591.134.1.28.172.434.237.098.044.187.096.279.15l.197.113.218.124.169.095q.234.134.47.267l.165.094.102.058.089.05q.086.05.17.104c.075.05.075.05.164.027.159-.073.307-.16.458-.248l.211-.123.112-.065q.263-.151.53-.3.42-.235.837-.475l.068-.04c.1-.054.1-.054.188-.124a6 6 0 0 0 .016-.251q0-.04.003-.08.017-.367.024-.735.005-.246.018-.493c.068-.688.068-.688-.134-1.32-.183-.16-.39-.245-.62-.319a1.6 1.6 0 0 1-.33-.166l-.19-.108-.652-.374q-.055-.03-.11-.063l-.208-.122-.094-.054-.082-.048c-.12-.061-.171-.016-.28.048m3.688 1.921v.1l-.011 3.604a437 437 0 0 1-.007 2.076v.188q0 .128-.002.255v.075a.65.65 0 0 1-.187.474 2 2 0 0 1-.34.234q-.3.176-.606.345-.12.068-.243.136l-.061.035q-.306.172-.611.346l-.106.06-.21.12-.532.302-.107.061-1.343.763-.275.156-.104.058-.094.053-.083.047-.059.042v.064q.095.079.197.15l.062.043a4.38 4.38 0 0 0 3.16.675q.193-.039.382-.093l.073-.02a4.24 4.24 0 0 0 2.156-1.465l.067-.085c.61-.79.82-1.707.826-2.684l.001-.164q.007-.741.008-1.484.003-.547.008-1.096l.003-.771q0-.231.004-.461.003-.216.001-.433l.002-.159c.015-.28.015-.28-.1-.522a1.2 1.2 0 0 0-.23-.12l-.1-.059-.089-.048-.1-.055-.105-.057a26 26 0 0 1-.803-.453 5 5 0 0 0-.318-.173l-.07-.034zm-1.224 3.473-.093.053-.102.06q-.453.26-.908.517-.477.268-.952.542l-1.037.592q-.214.12-.428.243l-.211.12-.545.31c-.639.364-.639.364-.937.53l-.063.036a.8.8 0 0 1-.42.122l-.09.002c-.226-.023-.414-.13-.605-.244l-.147-.087-.081-.048q-.247-.144-.495-.283l-.22-.126q-.056-.03-.113-.063l-.537-.306-.213-.121-.426-.242-.107-.06-.212-.122-.543-.309-.222-.125-.107-.06-.475-.274-.08-.047-.142-.084c-.105-.068-.105-.068-.226-.09-.221.942.027 1.99.525 2.81.18.282.389.535.622.775l.068.073c.709.739 1.78 1.154 2.798 1.196.386.01.756-.02 1.132-.106l.07-.015c.574-.137 1.083-.413 1.586-.712q.242-.141.488-.28l.221-.125.224-.128.43-.244.107-.06.704-.404q.435-.25.87-.495.39-.218.777-.44l.068-.039c.083-.048.154-.091.223-.159.01-.094.01-.094.007-.206v-.064l-.001-.21v-.145l-.003-.773-.003-.766c-.064 0-.123.05-.176.08"
            ></path>
        </svg>,
        'Hugging Face': () =>     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 80 80" className="w-14 h-14">
            <g id="SVGRepo_iconCarrier">
                <path
                    fill="url(#paint0_radial)"
                    d="M40.475 69.95c16.83 0 30.475-13.644 30.475-30.475C70.95 22.645 57.306 9 40.475 9 23.645 9 10 22.644 10 39.475c0 16.83 13.644 30.475 30.475 30.475"
                ></path>
                <path
                    fill="url(#paint1_radial)"
                    d="M40.475 69.95c16.83 0 30.475-13.644 30.475-30.475C70.95 22.645 57.306 9 40.475 9 23.645 9 10 22.644 10 39.475c0 16.83 13.644 30.475 30.475 30.475"
                    opacity="0.5"
                ></path>
                <path
                    fill="url(#paint2_radial)"
                    d="M40.475 69.95c16.83 0 30.475-13.644 30.475-30.475C70.95 22.645 57.306 9 40.475 9 23.645 9 10 22.644 10 39.475c0 16.83 13.644 30.475 30.475 30.475"
                    opacity="0.5"
                ></path>
                <path
                    fill="url(#paint3_radial)"
                    d="M40.475 69.95c16.83 0 30.475-13.644 30.475-30.475C70.95 22.645 57.306 9 40.475 9 23.645 9 10 22.644 10 39.475c0 16.83 13.644 30.475 30.475 30.475"
                    opacity="0.5"
                ></path>
                <path
                    fill="url(#paint4_linear)"
                    d="M50.95 24.266c.283-1.19 1.73-1.63 3.955-1.12 1.885.44 5.769 2.424 7.767 6.747.369.794-.524.978-.935.425-1.404-1.885-5.642-4.89-9.398-5.343-1.517-.185-1.39-.71-1.39-.71"
                ></path>
                <path
                    fill="url(#paint5_radial)"
                    d="M53.87 31.226s4.904 1.36 5.641 5.386c.043.255.057.51 0 .765-.085.51-.652.964-1.446.312-4.96-3.969-8.377-3.09-10.9-2.509-.992.227-1.63-.85-1.219-1.616.128-.227.213-.468.383-.652 2.636-3.076 7.54-1.686 7.54-1.686"
                ></path>
                <path
                    fill="url(#paint6_linear)"
                    d="M53.558 32.402s3.997 1.106 5.982 4.663c0-.156 0-.297-.029-.453-.737-4.026-5.641-5.387-5.641-5.387s-4.904-1.389-7.54 1.687c-.1.114-.185.241-.256.369 3.487-2.013 7.484-.879 7.484-.879"
                ></path>
                <path
                    fill="url(#paint7_linear)"
                    d="M30 24.266c-.283-1.19-1.73-1.63-3.954-1.12-1.886.44-5.77 2.424-7.768 6.747-.369.794.524.978.935.425 1.404-1.885 5.642-4.89 9.398-5.343 1.517-.185 1.39-.71 1.39-.71"
                ></path>
                <path
                    fill="url(#paint8_radial)"
                    d="M27.08 31.226s-4.904 1.36-5.641 5.386c-.043.255-.057.51 0 .765.085.51.652.964 1.446.312 4.96-3.969 8.377-3.09 10.9-2.509.992.227 1.63-.85 1.219-1.616-.128-.227-.213-.468-.383-.652-2.637-3.076-7.54-1.686-7.54-1.686"
                ></path>
                <path
                    fill="url(#paint9_linear)"
                    d="M27.392 32.402s-3.997 1.106-5.982 4.663c0-.156 0-.297.029-.453.737-4.026 5.641-5.387 5.641-5.387s4.905-1.389 7.541 1.687c.1.114.184.241.255.369-3.487-2.013-7.484-.879-7.484-.879"
                ></path>
                <path
                    fill="#643800"
                    d="M53.94 48.39a.79.79 0 0 0-.694.213c-3.274 3.076-8.32 4.72-12.119 4.72h-1.304c-3.799 0-8.859-1.644-12.12-4.72a.83.83 0 0 0-.694-.212c-.255.042-.396.34-.269.58a15.69 15.69 0 0 0 13.58 7.84h.34c5.612 0 10.786-2.992 13.578-7.84a.414.414 0 0 0-.297-.58"
                ></path>
                <path
                    fill="url(#paint10_linear)"
                    d="M53.94 48.39a.79.79 0 0 0-.694.213c-3.274 3.076-8.32 4.72-12.119 4.72h-1.304c-3.799 0-8.859-1.644-12.12-4.72a.83.83 0 0 0-.694-.212c-.255.042-.396.34-.269.58.028.043.057.1.085.143.27-.156.539-.298.836.028 3.105 3.487 7.711 5.57 12.644 5.57h.34c4.961 0 9.596-2.112 12.7-5.64.284-.327.553-.171.808 0 .014-.03.043-.072.057-.1.142-.241 0-.525-.27-.581"
                ></path>
                <path
                    fill="url(#paint11_radial)"
                    d="M40.475 69.95c16.83 0 30.475-13.644 30.475-30.475C70.95 22.645 57.306 9 40.475 9 23.645 9 10 22.644 10 39.475c0 16.83 13.644 30.475 30.475 30.475"
                ></path>
                <path
                    fill="url(#paint12_radial)"
                    d="M40.475 69.95c16.83 0 30.475-13.644 30.475-30.475C70.95 22.645 57.306 9 40.475 9 23.645 9 10 22.644 10 39.475c0 16.83 13.644 30.475 30.475 30.475"
                ></path>
                <path
                    fill="url(#paint13_linear)"
                    d="M20.177 58.285c.34.297.666.694.567.822-.099.127-.482-.029-.78-.27-.311-.24-.58 2.722-.623 2.878-.028.113-.666 1.077-.964 1.942-.1.283.029 1.105-.014 1.162-.17.227-.198.51-.836.156-.638-.355-.709 2.14 0 2.509 1.204.623 3.798 3.401 6.718 3.033 3.374-.44 6.039-4.352 5.713-6.931-.326-2.58-1.22-3.459-1.446-5.628-.199-1.842 1.02-2.877.907-3.798-.1-.766-1.262-.808-1.644-.766-.666.085-2.268 1.163-1.97 3.402.113.879-.029 1.701-.936 1.815s-2.055-.979-2.778-1.857"
                ></path>
                <path
                    fill="url(#paint14_linear)"
                    d="M29.419 54.16c-.057-.425-.425-.624-.808-.709.638 1.417-1.602 1.772-.964 6.775s-2.083 6.832-3.26 7.243-3.288.752-5.174-1.02c-.58-.553-1.091-.836-1.956-1.29-.198.595-.283 2.07.27 2.353 1.204.624 3.798 3.402 6.718 3.033 3.374-.44 6.039-4.351 5.713-6.931s-1.22-3.458-1.446-5.627c-.199-1.871 1.02-2.906.907-3.827"
                ></path>
                <path
                    fill="url(#paint15_linear)"
                    d="M17.527 64.989c-.638-.354-2.183-1.432-3.147-1.9-.964-.481-1.673-.311-2.013.51-.34.837 1.375 1.787 1.772 2.056.61.397 2.679 1.489 3.388 1.857"
                ></path>
                <path
                    fill="url(#paint16_linear)"
                    d="M19.34 61.715c-.042.156-.552 0-1.615-.68-.808-.525-3.005-2.056-4.224-2.694-1.233-.638-2.098-.808-2.622-.17-.525.638.099 1.517 1.035 2.14 1.162.78 2.466 1.531 3.699 2.254.978.567 2.92 2.027 2.75 2.24"
                ></path>
                <path
                    fill="url(#paint17_linear)"
                    d="M15.613 62.58c.921.538 2.693 1.856 2.764 2.196.184-.397-.383-1.445-.893-1.771-2.934-1.886-6.506-4.494-6.804-4.31 0 .54.525 1.163 1.22 1.63 1.162.766 2.466 1.531 3.713 2.254"
                ></path>
                <path
                    fill="url(#paint18_linear)"
                    d="M22.09 56.754c-.722-.88-3.288-3.757-3.897-4.65-.596-.893-1.418-.893-1.985-.496s-.737 1.191.525 2.892c1.02 1.389 1.998 2.24 3.458 3.785l1.843-.37z"
                ></path>
                <path
                    fill="url(#paint19_linear)"
                    d="M19.965 58.851c-.312-.24-3.147-2.792-3.8-3.302-1.218-.936-2.962-3.104-4.266-1.744-.694.723-.099 1.46.185 1.744.283.283 3.898 3.118 4.238 3.345s3.062 2.665 3.019 2.807"
                ></path>
                <path
                    fill="url(#paint20_linear)"
                    d="M20.177 58.285c.284.326.652.666.581.807.865-.907-1.644-2.735-2.792-4.124-.893-1.078-1.077-2.665-1.715-3.402-.014.014-.029.014-.043.028-.567.397-.737 1.19.525 2.892 1.006 1.403 2.013 2.183 3.444 3.799"
                ></path>
                <path
                    fill="url(#paint21_linear)"
                    d="M16.322 58.908c.34.227 3.062 2.665 3.019 2.807.638-1.134-2.693-3.8-4.408-5.032-1.489-1.078-1.914-2.183-3.246-2.594-.34.624.142 1.219.397 1.474.297.283 3.898 3.118 4.238 3.345"
                ></path>
                <path
                    fill="url(#paint22_linear)"
                    d="M19.298 61.786c-.085.07-.255.099-.552-.029.212.142.425.184.552.029"
                ></path>
                <path
                    fill="url(#paint23_linear)"
                    d="M18.165 65.046c.099-.057.155-.114.155-.17-.17.17-.212.439-.793.113-.638-.354-2.183-1.432-3.147-1.9-.425-.212-.794-.297-1.12-.255.51.185.326.326 1.474.865.624.284 2.778 1.701 3.43 1.347"
                ></path>
                <path
                    fill="url(#paint24_linear)"
                    d="M15.897 60.269c.935.68 2.764 2.041 3.359 1.545-.17.085-.709-.241-1.53-.766-.809-.524-3.006-2.055-4.225-2.693-.992-.51-1.758-.723-2.282-.44 1.786.114 3.799 1.702 4.678 2.354"
                ></path>
                <path
                    fill="url(#paint25_linear)"
                    d="M16.435 56.272c1.404 1.034 3.459 3.416 4.28 2.863-.14.057-.467-.085-.75-.298-.312-.24-3.147-2.792-3.8-3.302-.85-.652-1.941-1.886-2.961-2.14 1.09.595 2.097 2.04 3.231 2.877"
                ></path>
                <path
                    fill="url(#paint26_linear)"
                    d="M23.735 58.27c-.595-.368-1.205-.992-1.644-1.516-.723-.88-3.289-3.757-3.898-4.65a1.9 1.9 0 0 0-.596-.58c.284.41.44.992 1.078 1.714 1.02 1.163 2.494 3.034 3.047 3.686.539.652 1.46 2.055 2.013 1.346"
                ></path>
                <path
                    fill="url(#paint27_linear)"
                    d="M28.37 68.008c-.496-.879-1.12-1.36-1.857-.737-1.998 1.715-4.564 1.56-8.05-.581-3.105-1.914-4.664-2.693-6.138-2.99-.17.807 1.417 1.7 1.8 1.941.61.397 2.679 1.488 3.387 1.857 1.205.623 3.8 3.402 6.72 3.033 1.643-.213 3.103-1.233 4.138-2.523"
                ></path>
                <path
                    fill="url(#paint28_radial)"
                    d="M28.512 57.958c-.199-1.842 1.02-2.877.907-3.798-.028-.27-.198-.454-.411-.567.34.68-.17 1.389-.893 2.58-.78 1.29-.765 3.118.113 4.847.88 1.73.383 4.323-.822 5.287s-2.509 4.664-7.994 1.375a7 7 0 0 0-1.007-.61c-2.282-1.034-3.387-1.502-4.493-2.282-.213-.155-.85-.78-1.36-.425.425.581 1.318 1.092 1.601 1.276.61.397 2.68 1.488 3.388 1.857.085.042.198.113.297.184.029.014.057.043.085.057.015 0 .015.014.029.014.014.014.042.028.056.043 0 0 .015 0 .015.014.737.51 1.757 1.375 2.962 2.012.1.057.213.114.326.156.114.057.213.1.326.142.822.34 1.701.539 2.622.411 3.374-.44 6.039-4.351 5.713-6.931-.355-2.594-1.233-3.473-1.46-5.642"
                ></path>
                <path
                    fill="url(#paint29_linear)"
                    d="M60.773 58.285c-.34.297-.667.694-.567.822.099.127.482-.029.78-.27.311-.24.58 2.722.623 2.878.028.113.666 1.077.964 1.942.1.283-.029 1.105.014 1.162.17.227.198.51.836.156.638-.355.709 2.14 0 2.509-1.205.623-3.798 3.401-6.718 3.033-3.374-.44-6.039-4.352-5.713-6.931.326-2.58 1.22-3.459 1.446-5.628.199-1.842-1.02-2.877-.907-3.798.1-.766 1.261-.808 1.644-.766.666.085 2.268 1.163 1.97 3.402-.113.879.029 1.701.936 1.815s2.055-.979 2.778-1.857"
                ></path>
                <path
                    fill="url(#paint30_linear)"
                    d="M51.531 54.16c.057-.425.425-.624.808-.709-.638 1.417 1.602 1.772.964 6.775s2.083 6.832 3.26 7.243 3.288.752 5.174-1.02c.58-.553 1.091-.836 1.956-1.29.198.595.283 2.07-.27 2.353-1.205.624-3.798 3.402-6.718 3.033-3.374-.44-6.039-4.351-5.713-6.931s1.22-3.458 1.446-5.627c.199-1.871-1.02-2.906-.907-3.827"
                ></path>
                <path
                    fill="url(#paint31_linear)"
                    d="M63.423 64.989c.638-.354 2.183-1.432 3.147-1.9.964-.481 1.673-.311 2.013.51.34.837-1.375 1.787-1.772 2.056-.61.397-2.679 1.489-3.388 1.857"
                ></path>
                <path
                    fill="url(#paint32_linear)"
                    d="M61.61 61.715c.042.156.552 0 1.615-.68.808-.525 3.005-2.056 4.224-2.694 1.233-.638 2.098-.808 2.622-.17.525.638-.099 1.517-1.034 2.14-1.163.78-2.467 1.531-3.7 2.254-.978.567-2.92 2.027-2.75 2.24"
                ></path>
                <path
                    fill="url(#paint33_linear)"
                    d="M65.337 62.58c-.921.538-2.693 1.856-2.764 2.196-.184-.397.383-1.445.893-1.771 2.934-1.886 6.506-4.494 6.804-4.31 0 .54-.525 1.163-1.22 1.63-1.162.766-2.466 1.531-3.713 2.254"
                ></path>
                <path
                    fill="url(#paint34_linear)"
                    d="M58.86 56.754c.722-.88 3.288-3.757 3.897-4.65.596-.893 1.418-.893 1.985-.496s.737 1.191-.525 2.892c-1.02 1.389-1.998 2.24-3.458 3.785l-1.843-.37z"
                ></path>
                <path
                    fill="url(#paint35_linear)"
                    d="M60.986 58.851c.311-.24 3.146-2.792 3.798-3.302 1.22-.936 2.963-3.104 4.267-1.744.694.723.099 1.46-.184 1.744-.284.283-3.898 3.118-4.239 3.345s-3.061 2.665-3.019 2.807"
                ></path>
                <path
                    fill="url(#paint36_linear)"
                    d="M60.773 58.285c-.284.326-.652.666-.581.807-.865-.907 1.644-2.735 2.792-4.124.893-1.078 1.077-2.665 1.715-3.402.014.014.028.014.043.028.567.397.737 1.19-.525 2.892-1.006 1.403-2.013 2.183-3.444 3.799"
                ></path>
                <path
                    fill="url(#paint37_linear)"
                    d="M64.628 58.908c-.34.227-3.061 2.665-3.019 2.807-.638-1.134 2.693-3.8 4.408-5.032 1.489-1.078 1.914-2.183 3.246-2.594.34.624-.141 1.219-.397 1.474-.297.283-3.897 3.118-4.238 3.345"
                ></path>
                <path
                    fill="url(#paint38_linear)"
                    d="M61.652 61.786c.085.07.255.099.553-.029-.213.142-.426.184-.553.029"
                ></path>
                <path
                    fill="url(#paint39_linear)"
                    d="M62.785 65.046c-.099-.057-.155-.114-.155-.17.17.17.212.439.793.113.638-.354 2.183-1.432 3.147-1.9.425-.212.794-.297 1.12-.255-.51.185-.326.326-1.474.865-.624.284-2.778 1.701-3.43 1.347"
                ></path>
                <path
                    fill="url(#paint40_linear)"
                    d="M65.054 60.269c-.936.68-2.765 2.041-3.36 1.545.17.085.709-.241 1.531-.766.808-.524 3.005-2.055 4.224-2.693.992-.51 1.758-.723 2.282-.44-1.786.114-3.799 1.702-4.677 2.354"
                ></path>
                <path
                    fill="url(#paint41_linear)"
                    d="M64.515 56.272c-1.404 1.034-3.459 3.416-4.28 2.863.14.057.467-.085.75-.298.312-.24 3.147-2.792 3.8-3.302.85-.652 1.941-1.886 2.962-2.14-1.092.595-2.098 2.04-3.232 2.877"
                ></path>
                <path
                    fill="url(#paint42_linear)"
                    d="M57.215 58.27c.595-.368 1.205-.992 1.644-1.516.723-.88 3.289-3.757 3.898-4.65.184-.269.383-.453.596-.58-.284.41-.44.992-1.078 1.714-1.02 1.163-2.494 3.034-3.047 3.686s-1.46 2.055-2.013 1.346"
                ></path>
                <path
                    fill="url(#paint43_linear)"
                    d="M52.58 68.008c.496-.879 1.12-1.36 1.857-.737 1.998 1.715 4.564 1.56 8.05-.581 3.105-1.914 4.664-2.693 6.138-2.99.17.807-1.417 1.7-1.8 1.941-.61.397-2.679 1.488-3.387 1.857-1.205.623-3.8 3.402-6.72 3.033-1.643-.213-3.103-1.233-4.138-2.523"
                ></path>
                <path
                    fill="url(#paint44_radial)"
                    d="M52.438 57.958c.199-1.842-1.02-2.877-.907-3.798.028-.27.198-.454.411-.567-.34.68.17 1.389.893 2.58.78 1.29.765 3.118-.113 4.847-.88 1.73-.383 4.323.822 5.287s2.509 4.664 7.994 1.375c.34-.24.68-.454 1.007-.61 2.282-1.034 3.387-1.502 4.493-2.282.212-.155.85-.78 1.36-.425-.425.581-1.318 1.092-1.601 1.276-.61.397-2.68 1.488-3.388 1.857a2.5 2.5 0 0 0-.297.184c-.029.014-.057.043-.086.057-.014 0-.014.014-.028.014-.014.014-.042.028-.057.043 0 0-.014 0-.014.014-.737.51-1.757 1.375-2.962 2.012-.1.057-.213.114-.326.156a3 3 0 0 1-.326.142c-.822.34-1.701.539-2.623.411-3.373-.44-6.038-4.351-5.712-6.931.355-2.594 1.233-3.473 1.46-5.642"
                ></path>
                <defs>
                    <linearGradient
                        id="paint4_linear"
                        x1="56.742"
                        x2="57.469"
                        y1="27.711"
                        y2="24.584"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.001" stopColor="#3C2200"></stop>
                        <stop offset="1" stopColor="#7A4400"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint6_linear"
                        x1="54.312"
                        x2="53.375"
                        y1="29.69"
                        y2="33.102"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.001" stopColor="#3C2200"></stop>
                        <stop offset="1" stopColor="#512D00"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint7_linear"
                        x1="24.207"
                        x2="23.48"
                        y1="27.695"
                        y2="24.567"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.001" stopColor="#3C2200"></stop>
                        <stop offset="1" stopColor="#7A4400"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint9_linear"
                        x1="26.619"
                        x2="27.556"
                        y1="29.673"
                        y2="33.085"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.001" stopColor="#3C2200"></stop>
                        <stop offset="1" stopColor="#512D00"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint10_linear"
                        x1="40.475"
                        x2="40.475"
                        y1="50.543"
                        y2="55.093"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.001" stopColor="#3C2200"></stop>
                        <stop offset="1" stopColor="#512D00"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint13_linear"
                        x1="29.184"
                        x2="25.566"
                        y1="70.573"
                        y2="64.421"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.001" stopColor="#FFCB4B"></stop>
                        <stop offset="1" stopColor="#FFD748"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint14_linear"
                        x1="29.177"
                        x2="22.703"
                        y1="65.995"
                        y2="60.024"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.001" stopColor="#FFCB4B"></stop>
                        <stop offset="1" stopColor="#FFD748"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint15_linear"
                        x1="13.161"
                        x2="16.697"
                        y1="63.764"
                        y2="65.726"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.001" stopColor="#FFCB4B"></stop>
                        <stop offset="1" stopColor="#FFD748"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint16_linear"
                        x1="10.646"
                        x2="17.517"
                        y1="57.012"
                        y2="62.569"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.001" stopColor="#FFCB4B"></stop>
                        <stop offset="1" stopColor="#FFD748"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint17_linear"
                        x1="16.648"
                        x2="13.579"
                        y1="59.163"
                        y2="62.903"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FFBC47" stopOpacity="0"></stop>
                        <stop offset="1" stopColor="#FFA754"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint18_linear"
                        x1="17.074"
                        x2="21.316"
                        y1="52.858"
                        y2="57.946"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.001" stopColor="#FFCB4B"></stop>
                        <stop offset="1" stopColor="#FFD748"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint19_linear"
                        x1="13.422"
                        x2="18.978"
                        y1="54.496"
                        y2="60.279"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.001" stopColor="#FFCB4B"></stop>
                        <stop offset="1" stopColor="#FFD748"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint20_linear"
                        x1="19.782"
                        x2="16.287"
                        y1="53.812"
                        y2="57.893"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FFBC47" stopOpacity="0"></stop>
                        <stop offset="1" stopColor="#FFA754"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint21_linear"
                        x1="16.864"
                        x2="12.453"
                        y1="56.629"
                        y2="60.816"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FFBC47" stopOpacity="0"></stop>
                        <stop offset="1" stopColor="#FFA754"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint22_linear"
                        x1="20.347"
                        x2="16.614"
                        y1="60.517"
                        y2="64.061"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FFBC47" stopOpacity="0"></stop>
                        <stop offset="1" stopColor="#FFA754"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint23_linear"
                        x1="13.226"
                        x2="18.241"
                        y1="62.275"
                        y2="65.38"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FFBC47" stopOpacity="0"></stop>
                        <stop offset="1" stopColor="#FFBC47"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint24_linear"
                        x1="12.993"
                        x2="17.483"
                        y1="57.252"
                        y2="62.478"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FFBC47" stopOpacity="0"></stop>
                        <stop offset="1" stopColor="#FFBC47"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint25_linear"
                        x1="15.952"
                        x2="17.198"
                        y1="57.28"
                        y2="56.044"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FFBC47" stopOpacity="0"></stop>
                        <stop offset="1" stopColor="#FFA754"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint26_linear"
                        x1="22.229"
                        x2="19.912"
                        y1="59.405"
                        y2="52.751"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FFBC47" stopOpacity="0"></stop>
                        <stop offset="1" stopColor="#FFBC47"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint27_linear"
                        x1="19.599"
                        x2="17.619"
                        y1="66.76"
                        y2="69.114"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.312" stopColor="#FFBC47" stopOpacity="0"></stop>
                        <stop offset="1" stopColor="#FF8900"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint29_linear"
                        x1="51.758"
                        x2="55.376"
                        y1="70.57"
                        y2="64.418"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.001" stopColor="#FFCB4B"></stop>
                        <stop offset="1" stopColor="#FFD748"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint30_linear"
                        x1="51.765"
                        x2="58.239"
                        y1="65.992"
                        y2="60.022"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.001" stopColor="#FFCB4B"></stop>
                        <stop offset="1" stopColor="#FFD748"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint31_linear"
                        x1="67.781"
                        x2="64.245"
                        y1="63.762"
                        y2="65.723"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.001" stopColor="#FFCB4B"></stop>
                        <stop offset="1" stopColor="#FFD748"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint32_linear"
                        x1="70.296"
                        x2="63.425"
                        y1="57.01"
                        y2="62.566"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.001" stopColor="#FFCB4B"></stop>
                        <stop offset="1" stopColor="#FFD748"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint33_linear"
                        x1="64.294"
                        x2="67.363"
                        y1="59.16"
                        y2="62.901"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FFBC47" stopOpacity="0"></stop>
                        <stop offset="1" stopColor="#FFA754"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint34_linear"
                        x1="63.868"
                        x2="59.626"
                        y1="52.855"
                        y2="57.944"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.001" stopColor="#FFCB4B"></stop>
                        <stop offset="1" stopColor="#FFD748"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint35_linear"
                        x1="67.52"
                        x2="61.964"
                        y1="54.493"
                        y2="60.276"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.001" stopColor="#FFCB4B"></stop>
                        <stop offset="1" stopColor="#FFD748"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint36_linear"
                        x1="61.16"
                        x2="64.655"
                        y1="53.809"
                        y2="57.89"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FFBC47" stopOpacity="0"></stop>
                        <stop offset="1" stopColor="#FFA754"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint37_linear"
                        x1="64.078"
                        x2="68.489"
                        y1="56.626"
                        y2="60.814"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FFBC47" stopOpacity="0"></stop>
                        <stop offset="1" stopColor="#FFA754"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint38_linear"
                        x1="60.595"
                        x2="64.328"
                        y1="60.514"
                        y2="64.058"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FFBC47" stopOpacity="0"></stop>
                        <stop offset="1" stopColor="#FFA754"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint39_linear"
                        x1="67.716"
                        x2="62.701"
                        y1="62.273"
                        y2="65.378"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FFBC47" stopOpacity="0"></stop>
                        <stop offset="1" stopColor="#FFBC47"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint40_linear"
                        x1="67.949"
                        x2="63.459"
                        y1="57.25"
                        y2="62.475"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FFBC47" stopOpacity="0"></stop>
                        <stop offset="1" stopColor="#FFBC47"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint41_linear"
                        x1="64.99"
                        x2="63.744"
                        y1="57.277"
                        y2="56.042"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FFBC47" stopOpacity="0"></stop>
                        <stop offset="1" stopColor="#FFA754"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint42_linear"
                        x1="58.713"
                        x2="61.03"
                        y1="59.402"
                        y2="52.748"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FFBC47" stopOpacity="0"></stop>
                        <stop offset="1" stopColor="#FFBC47"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint43_linear"
                        x1="61.343"
                        x2="63.323"
                        y1="66.757"
                        y2="69.111"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.312" stopColor="#FFBC47" stopOpacity="0"></stop>
                        <stop offset="1" stopColor="#FF8900"></stop>
                    </linearGradient>
                    <radialGradient
                        id="paint0_radial"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="translate(34.479 27.125)scale(36.7641)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FFDF30"></stop>
                        <stop offset="1" stopColor="#FFB82E"></stop>
                    </radialGradient>
                    <radialGradient
                        id="paint1_radial"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="translate(34.479 27.125)scale(28.924)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FFE95F"></stop>
                        <stop offset="1" stopColor="#FFBB47" stopOpacity="0"></stop>
                    </radialGradient>
                    <radialGradient
                        id="paint2_radial"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="rotate(-2.77 984.972 -470.1)scale(12.8185 10.1427)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FF4C00"></stop>
                        <stop offset="0.154" stopColor="#FF4C00"></stop>
                        <stop offset="0.179" stopColor="#FF4C00"></stop>
                        <stop offset="0.4" stopColor="#FA4C0B" stopOpacity="0.732"></stop>
                        <stop offset="0.78" stopColor="#EE4B27" stopOpacity="0.268"></stop>
                        <stop offset="1" stopColor="#E64A3A" stopOpacity="0"></stop>
                    </radialGradient>
                    <radialGradient
                        id="paint3_radial"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="rotate(-177.23 29.099 22.838)scale(12.8185 10.1427)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FF4C00"></stop>
                        <stop offset="0.154" stopColor="#FF4C00"></stop>
                        <stop offset="0.179" stopColor="#FF4C00"></stop>
                        <stop offset="0.4" stopColor="#FA4C0B" stopOpacity="0.732"></stop>
                        <stop offset="0.78" stopColor="#EE4B27" stopOpacity="0.268"></stop>
                        <stop offset="1" stopColor="#E64A3A" stopOpacity="0"></stop>
                    </radialGradient>
                    <radialGradient
                        id="paint5_radial"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="matrix(5.27314 1.48023 -.71409 2.54386 53.106 34.007)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.001" stopColor="#7A4400"></stop>
                        <stop offset="1" stopColor="#643800"></stop>
                    </radialGradient>
                    <radialGradient
                        id="paint8_radial"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="matrix(-5.27315 1.48023 -.71409 -2.54386 27.821 34.02)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.001" stopColor="#7A4400"></stop>
                        <stop offset="1" stopColor="#643800"></stop>
                    </radialGradient>
                    <radialGradient
                        id="paint11_radial"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="rotate(-177.23 10.63 30.289)scale(12.8185 10.1427)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#7A4400" stopOpacity="0.5"></stop>
                        <stop offset="0.601" stopColor="#894D00" stopOpacity="0.198"></stop>
                        <stop offset="0.995" stopColor="#965500" stopOpacity="0"></stop>
                    </radialGradient>
                    <radialGradient
                        id="paint12_radial"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="rotate(-2.77 1293.108 -1234.08)scale(12.8185 10.1427)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#7A4400" stopOpacity="0.5"></stop>
                        <stop offset="0.601" stopColor="#894D00" stopOpacity="0.198"></stop>
                        <stop offset="0.995" stopColor="#965500" stopOpacity="0"></stop>
                    </radialGradient>
                    <radialGradient
                        id="paint28_radial"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="rotate(40.804 -70.24 56.932)scale(14.4497 13.1168)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.613" stopColor="#FFBC47" stopOpacity="0"></stop>
                        <stop offset="1" stopColor="#FF8900"></stop>
                    </radialGradient>
                    <radialGradient
                        id="paint44_radial"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="rotate(139.196 19.29 41.16)scale(14.4497 13.1168)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.613" stopColor="#FFBC47" stopOpacity="0"></stop>
                        <stop offset="1" stopColor="#FF8900"></stop>
                    </radialGradient>
                </defs>
            </g>
        </svg>,
        spaCy: () => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                className="w-14 h-14"
            >
                <circle cx="32" cy="32" r="30" fill="#007BFF" /> {/* Blue circle */}
                <text
                    x="32"
                    y="38"
                    fontSize="24"
                    fontWeight="bold"
                    textAnchor="middle"
                    fill="white"
                    fontFamily="Arial, sans-serif"
                >
                    CA
                </text>
            </svg>
        ),
        LangChain: () =>       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 80 41" className="w-14 h-14">
            <path
                fill="CurrentColor"
                d="M61.514 11.157a3.94 3.94 0 0 0-2.806 1.158l-3.018 3.01a3.95 3.95 0 0 0-1.147 3.095l.019.191a3.9 3.9 0 0 0 1.128 2.314c.435.434.914.709 1.496.9q.046.263.047.53c0 .797-.31 1.546-.874 2.107l-.186.186c-1.008-.344-1.848-.847-2.607-1.604a6.9 6.9 0 0 1-1.927-3.67l-.034-.193-.153.124a4 4 0 0 0-.294.265l-3.018 3.01a3.957 3.957 0 0 0 2.807 6.757 3.96 3.96 0 0 0 2.806-1.158l3.019-3.01a3.96 3.96 0 0 0 0-5.599 3.9 3.9 0 0 0-1.462-.92 3.252 3.252 0 0 1 .924-2.855 6.9 6.9 0 0 1 2.664 1.656 6.9 6.9 0 0 1 1.926 3.67l.035.193.153-.124q.155-.125.296-.267l3.018-3.01a3.956 3.956 0 0 0-2.808-6.756z"
            ></path>
            <path
                fill="CurrentColor"
                d="M59.897.149h-39.49C9.153.149 0 9.279 0 20.5c0 11.222 9.154 20.351 20.406 20.351h39.49c11.253 0 20.407-9.13 20.407-20.35C80.303 9.277 71.149.148 59.897.148M40.419 32.056c-.651.134-1.384.158-1.882-.36-.183.42-.612.199-.943.144-.03.085-.057.16-.085.246-1.1.073-1.925-1.046-2.449-1.89-1.04-.562-2.222-.904-3.285-1.492-.062.968.15 2.17-.774 2.794-.047 1.862 2.824.22 3.088 1.608-.204.022-.43-.033-.594.124-.749.726-1.608-.55-2.471-.023-1.16.582-1.276 1.059-2.71 1.179-.08-.12-.047-.2.02-.273.404-.468.433-1.02 1.122-1.22-.71-.111-1.303.28-1.901.59-.778.317-.772-.717-1.968.054-.132-.108-.069-.206.007-.289.304-.37.704-.425 1.155-.405-2.219-1.233-3.263 1.508-4.288.145-.308.081-.424.358-.618.553-.167-.183-.04-.405-.033-.62-.2-.094-.453-.139-.394-.459-.391-.132-.665.1-.957.32-.263-.203.178-.5.26-.712.234-.407.769-.084 1.04-.377.772-.437 1.847.273 2.729.153.68.085 1.52-.61 1.179-1.305-.726-.926-.598-2.137-.614-3.244-.09-.645-1.643-1.467-2.092-2.163-.555-.627-.987-1.353-1.42-2.068-1.561-3.014-1.07-6.886-3.037-9.685-.89.49-2.048.259-2.816-.399-.414.377-.432.87-.465 1.392-.994-.99-.87-2.863-.075-3.966a5.3 5.3 0 0 1 1.144-1.11c.098-.07.131-.14.129-.25.786-3.524 6.144-2.845 7.838-.348 1.229 1.537 1.6 3.57 2.994 4.997 1.875 2.047 4.012 3.85 5.742 6.03 1.637 1.992 2.806 4.328 3.826 6.683.416.782.42 1.74 1.037 2.408.304.403 1.79 1.5 1.467 1.888.186.403 1.573.959 1.092 1.35zm26.026-12.024-3.018 3.01a6.96 6.96 0 0 1-2.875 1.728l-.056.016-.02.053a6.9 6.9 0 0 1-1.585 2.446l-3.019 3.01a6.94 6.94 0 0 1-4.932 2.035 6.94 6.94 0 0 1-4.932-2.035 6.95 6.95 0 0 1 0-9.838l3.018-3.01a6.9 6.9 0 0 1 2.871-1.721l.055-.017.02-.053a6.9 6.9 0 0 1 1.59-2.454l3.019-3.01a6.94 6.94 0 0 1 4.932-2.035c1.865 0 3.616.723 4.932 2.035a6.9 6.9 0 0 1 2.04 4.92c0 1.86-.724 3.607-2.04 4.918z"
            ></path>
            <path
                fill="CurrentColor"
                d="M28.142 28.413c-.265 1.03-.35 2.782-1.694 2.832-.11.595.413.819.89.627.472-.215.696.171.855.556.729.106 1.806-.242 1.847-1.103-1.088-.625-1.424-1.813-1.896-2.914z"
            ></path>
        </svg>,
        OpenCV: () =>      <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
            viewBox="-30.5 0 317 317"
            className="w-14 h-14"
        >
            <g id="SVGRepo_iconCarrier">
                <path
                    fill="#FF0101"
                    d="M96.899 111.577C73.524 98.082 62.129 70.57 69.114 44.5S99.725.299 126.716.299s50.616 18.129 57.602 44.2c6.985 26.07-4.41 53.583-27.785 67.078L138.578 80.48a23.724 23.724 0 1 0-23.724 0z"
                ></path>
                <path
                    fill="#0101FF"
                    d="M224.6 126.014c23.374 13.496 34.77 41.008 27.784 67.08-6.985 26.07-30.61 44.199-57.601 44.199s-50.617-18.129-57.602-44.2c-6.986-26.07 4.41-53.583 27.785-67.079l17.955 31.1a23.724 23.724 0 1 0 23.724 0z"
                ></path>
                <path
                    fill="#01FF01"
                    d="M119.567 177.659c0 26.99-18.129 50.616-44.2 57.602-26.07 6.985-53.583-4.41-67.078-27.785s-9.609-52.9 9.477-71.985 48.61-22.972 71.984-9.477l-17.955 31.1a23.724 23.724 0 1 0 11.862 20.545z"
                ></path>
                <path
                    fill="#050505"
                    d="M17.33 251.59c5.046-.453 10.15-.449 15.17.27 3.096.548 6.38 1.349 8.704 3.605 2.436 2.718 3.035 6.494 3.57 9.974.878 7.222.775 14.547 0 21.773-.518 3.528-1.027 7.338-3.339 10.206-2.521 2.56-6.246 3.288-9.662 3.827-5.043.63-10.159.775-15.223.27-3.429-.351-7.008-.955-9.927-2.911-1.888-1.199-2.903-3.314-3.592-5.364-1.383-4.273-1.558-8.81-1.747-13.262-.021-5.882.09-11.824 1.237-17.612.621-2.702 1.375-5.672 3.656-7.475 3.215-2.333 7.304-2.898 11.152-3.3m.834 8.062c-2.123.32-4.769.496-6.049 2.474-1.117 2.95-1.079 6.169-1.306 9.273-.107 5.535-.385 11.121.471 16.614.317 1.853.968 4.062 3.027 4.606 4.465 1.366 9.242 1.135 13.844.873 2.295-.35 5.339-.548 6.456-2.95 1.28-3.655 1.19-7.602 1.349-11.42-.052-5.369.248-10.84-1.036-16.093-.309-1.866-2.244-2.662-3.883-2.992-4.23-.83-8.596-.728-12.873-.385m45.095 8.669c3.066-1.948 6.871-2.265 10.407-1.944 3.301.283 6.965 1.404 8.733 4.444 2.111 3.814 2.23 8.322 2.376 12.577-.094 4.375-.175 8.943-1.982 13.01-1.031 2.47-3.403 4.088-5.942 4.726-3.887.955-8.16 1.057-11.905-.492-2.025-.792-3.425-2.513-4.585-4.277v19.996H51.8c.005-16.55-.008-33.104.005-49.654q4.156-.02 8.305 0c-.095 1.703-.189 3.403-.236 5.111 1.028-1.254 1.982-2.633 3.386-3.497m2.787 4.469c-2.037.158-4.255 1.169-4.833 3.3-1.092 3.76-.899 7.74-.74 11.61.265 2.522.577 5.771 3.262 6.901 2.885 1.118 6.216 1.058 9.135.103 2.526-.89 2.894-3.861 3.16-6.156.265-3.802.359-7.68-.386-11.434-.252-1.456-1.002-2.959-2.423-3.57-2.243-.99-4.777-.938-7.175-.754m28.974-4.405c4.208-2.162 9.135-2.24 13.754-2.02 3.845.32 8.51.962 10.63 4.64 2.389 4.439 2 9.662 2.333 14.533H98.316c.274 2.513-.051 5.223 1.216 7.526 1.083 1.82 3.382 2.192 5.325 2.3 2.402.016 4.988.213 7.2-.904 1.268-.993 1.277-2.757 1.44-4.213q4.109-.006 8.219 0c-.103 2.86-.471 6.062-2.766 8.074-3.446 3.091-8.378 3.412-12.787 3.498-3.891-.116-8.001-.313-11.486-2.23-2.82-1.666-3.72-5.086-4.217-8.1-.629-4.478-.787-9.041-.252-13.536.437-3.55 1.391-7.723 4.812-9.568m5.004 5.45c-1.79 1.63-1.614 4.336-1.69 6.553 5.033.026 10.068.013 15.107.005-.009-1.995.184-4.17-.895-5.946-1.058-1.439-3.04-1.533-4.666-1.709-2.625-.038-5.519-.325-7.856 1.096m39.945-5.472c2.963-2.055 6.79-2.341 10.275-1.939 2.966.313 6.109 1.443 7.86 4.003 1.554 2.123 1.986 4.829 2.007 7.401-.013 7.852.005 15.699-.004 23.55q-4.071.006-8.13 0c-.012-7.427.01-14.85-.012-22.274-.082-1.622-.017-3.497-1.238-4.747-1.3-1.409-3.343-1.683-5.162-1.67-2.2-.013-4.58.364-6.276 1.884-1.657 1.412-2.286 3.69-2.295 5.796-.013 7.004.005 14.007-.008 21.007q-4.066.011-8.126.004-.006-17.338 0-34.676c2.663-.008 5.33-.004 7.993 0-.013 2.03-.214 4.046-.274 6.075.873-1.64 1.79-3.37 3.39-4.414m34.86-15.188c4.487-1.507 9.268-1.721 13.96-1.888 4.547.021 9.298.064 13.545 1.896 2.158.9 3.652 2.868 4.38 5.043 1.185 3.25 1.22 6.768 1.245 10.189-3.129 0-6.258.008-9.383-.005-.052-2.405.132-5.102-1.358-7.149-1.506-1.54-3.86-1.537-5.86-1.772-4.067-.077-8.3-.338-12.197 1.066-1.404.445-2.131 1.85-2.414 3.202-.8 3.63-.805 7.376-.8 11.08.047 4.948-.03 9.97 1.027 14.837.278 1.78 1.918 2.877 3.562 3.27 3.801.947 7.77.81 11.652.578 2.025-.265 4.491-.398 5.763-2.256 1.357-2.217 1.13-4.944 1.057-7.436 3.16-.012 6.314-.008 9.474 0-.039 3.935-.107 7.997-1.537 11.722-.737 1.947-2.256 3.6-4.226 4.345-3.865 1.55-8.103 1.648-12.204 1.896-4.757.082-9.573-.034-14.222-1.143-2.727-.71-5.706-1.96-6.97-4.67-1.613-3.583-1.908-7.569-2.324-11.426-.346-5.094-.569-10.197-.445-15.3.244-4.131.62-8.485 2.851-12.085 1.186-2.004 3.267-3.258 5.424-3.994m35.194-1.443c3.262.004 6.524-.09 9.782.047 3.172 10.064 6.657 20.026 9.859 30.078 1.245 3.861 2.127 7.834 3.416 11.683 1.443-4.153 2.367-8.468 3.78-12.63 3.13-9.721 6.344-19.413 9.47-29.135 3.219-.137 6.446-.017 9.67-.06v1.066c-5.3 16.152-10.475 32.346-15.668 48.537-4.846.098-9.7.111-14.547-.009-5.163-16.554-10.574-33.031-15.762-49.577"
                ></path>
            </g>
        </svg>,
        YOLO: () =>       <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-14 h-14"
        >
            <path
                fill="#ffeb3b"
                d="M34 42H14c-4.411 0-8-3.589-8-8V14c0-4.411 3.589-8 8-8h20c4.411 0 8 3.589 8 8v20c0 4.411-3.589 8-8 8"
            ></path>
            <path
                fill="#212121"
                d="M24 24c0 2.237-1.752 4.05-3.913 4.05s-3.913-1.813-3.913-4.05 1.752-4.05 3.913-4.05S24 21.763 24 24m-3.913-2.236c-1.081 0-1.957 1.001-1.957 2.236s.876 2.236 1.957 2.236 1.957-1.001 1.957-2.236-.876-2.236-1.957-2.236M39 24c0 2.237-1.752 4.05-3.913 4.05s-3.913-1.813-3.913-4.05 1.752-4.05 3.913-4.05S39 21.763 39 24m-3.913-2.236c-1.081 0-1.957 1.001-1.957 2.236s.876 2.236 1.957 2.236 1.957-1.001 1.957-2.236-.876-2.236-1.957-2.236M27.261 25.957v-5.87h-1.957v7.826h5.218v-1.956zM16.174 20.087l-2.609 4.565v3.261h-1.956v-3.261L9 20.087h1.957l1.63 2.609 1.63-2.609z"
            ></path>
        </svg>,
        Detectron2: () => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                className="w-14 h-14"
            >
                <circle cx="32" cy="32" r="30" fill="#000000" /> {/* Black circle */}
                <text
                    x="32"
                    y="38"
                    fontSize="24"
                    fontWeight="bold"
                    textAnchor="middle"
                    fill="white"
                    fontFamily="Arial, sans-serif"
                >
                    D2
                </text>
            </svg>
        ),
        "Vision Transformer": () => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                className="w-14 h-14"
            >
                <circle cx="32" cy="32" r="30" fill="#111111" /> {/* Dark circle */}
                <text
                    x="32"
                    y="38"
                    fontSize="22"
                    fontWeight="bold"
                    textAnchor="middle"
                    fill="white"
                    fontFamily="Arial, sans-serif"
                >
                    VT
                </text>
            </svg>
        ),
        MediaPipe: () => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                className="w-14 h-14"
            >
                <circle cx="32" cy="32" r="30" fill="#111111" /> {/* Dark background */}
                <text
                    x="32"
                    y="38"
                    fontSize="20"
                    fontWeight="bold"
                    textAnchor="middle"
                    fill="white"
                    fontFamily="Arial, sans-serif"
                >
                    MP
                </text>
            </svg>
        ),
        "AWS SageMaker": () =>      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="w-14 h-14">
            <g id="SVGRepo_iconCarrier">
                <path
                    fill="#252F3E"
                    d="M4.51 7.687q0 .297.058.475.061.175.17.384a.23.23 0 0 1 .037.123q.001.08-.1.16l-.336.224a.26.26 0 0 1-.138.048q-.08-.001-.16-.074a1.7 1.7 0 0 1-.192-.251 4 4 0 0 1-.165-.315q-.622.737-1.564.737-.672 0-1.064-.385-.393-.384-.394-1.025-.001-.682.484-1.1c.325-.278.756-.416 1.304-.416q.27.002.564.042c.197.027.4.07.612.118v-.39q-.001-.608-.25-.854-.254-.248-.868-.246-.279-.001-.574.07a4 4 0 0 0-.575.181 2 2 0 0 1-.186.07.3.3 0 0 1-.085.016q-.112.001-.112-.166v-.262c0-.085.01-.15.037-.186a.4.4 0 0 1 .15-.113q.278-.144.67-.24.39-.103.83-.101.948 0 1.394.432.44.432.442 1.314v1.73h.01zm-2.161.811q.261 0 .548-.096c.191-.064.362-.182.505-.342a.85.85 0 0 0 .181-.341c.032-.129.054-.283.054-.465V7.03a4 4 0 0 0-.49-.09 4 4 0 0 0-.5-.033c-.357 0-.618.07-.793.214q-.262.215-.26.614-.002.374.196.566.192.198.559.197m4.273.577c-.096 0-.16-.016-.202-.054-.043-.032-.08-.106-.112-.208l-1.25-4.127a1 1 0 0 1-.049-.214c0-.085.043-.133.128-.133h.522q.15-.001.207.053c.043.032.075.107.107.208l.894 3.535.83-3.535q.038-.16.1-.208a.37.37 0 0 1 .214-.053h.425c.102 0 .17.016.213.053.043.032.08.107.101.208l.841 3.578.92-3.578a.46.46 0 0 1 .107-.208.35.35 0 0 1 .208-.053h.495c.085 0 .133.043.133.133q-.002.04-.01.086a1 1 0 0 1-.038.133l-1.283 4.127q-.048.16-.111.209a.34.34 0 0 1-.203.053h-.457q-.15.001-.213-.053c-.043-.038-.08-.107-.101-.214L8.213 5.37l-.82 3.439q-.038.159-.1.213c-.043.038-.118.054-.213.054h-.458zm6.838.144a3.5 3.5 0 0 1-.82-.096c-.266-.064-.473-.134-.612-.214-.085-.048-.143-.101-.165-.15a.4.4 0 0 1-.031-.149v-.272q.001-.167.122-.166a.3.3 0 0 1 .096.016c.032.011.08.032.133.054.18.08.378.144.585.187.213.042.42.064.633.064q.505 0 .777-.176a.57.57 0 0 0 .277-.508.52.52 0 0 0-.144-.373q-.144-.152-.537-.278l-.772-.24c-.388-.123-.676-.305-.851-.545a1.27 1.27 0 0 1-.266-.774q0-.336.143-.593c.096-.17.224-.32.384-.438a1.7 1.7 0 0 1 .553-.277c.213-.064.436-.091.67-.091.118 0 .24.005.357.021a3.4 3.4 0 0 1 .649.145q.143.048.224.096a.5.5 0 0 1 .16.133.3.3 0 0 1 .047.176v.251q-.001.17-.122.171a.6.6 0 0 1-.202-.064 2.4 2.4 0 0 0-1.022-.208c-.303 0-.543.048-.708.15q-.249.148-.25.475 0 .225.16.379c.106.101.303.202.585.293l.756.24q.576.184.825.513.246.33.244.748 0 .345-.138.619a1.4 1.4 0 0 1-.388.47q-.247.197-.591.299a2.5 2.5 0 0 1-.761.112"
                ></path>
                <g fill="#F90" fillRule="evenodd" clipRule="evenodd">
                    <path d="M14.465 11.813c-1.75 1.297-4.294 1.986-6.481 1.986-3.065 0-5.827-1.137-7.913-3.027-.165-.15-.016-.353.18-.235 2.257 1.313 5.04 2.109 7.92 2.109 1.941 0 4.075-.406 6.039-1.239.293-.133.543.192.255.406"></path>
                    <path d="M15.194 10.98c-.223-.287-1.479-.138-2.048-.069-.17.022-.197-.128-.043-.24 1-.705 2.645-.502 2.836-.267.192.24-.053 1.89-.99 2.68-.143.123-.281.06-.218-.1.213-.53.687-1.72.463-2.003z"></path>
                </g>
            </g>
        </svg>,
        Docker: () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="w-12 h-12">
            <g id="SVGRepo_iconCarrier">
                <circle cx="16" cy="16" r="14" fill="#1794D4"></circle>
                <path
                    fill="#fff"
                    d="M18 7h-2v2h2zM10 10h2v2h-2zM6.002 16.941C6.172 19.843 7.9 24 14 24c6.8 0 9.833-5 10.5-7.5.833 0 2.7-.5 3.5-2.5-.5-.5-2.5-.5-3.5 0 0-.8-.5-2.5-1.5-3-.667.667-1.7 2.4-.5 4-.5 1-1.833 1-2.5 1H6.943c-.53 0-.973.413-.941.941M9 13H7v2h2z"
                ></path>
                <path
                    fill="#fff"
                    d="M10 13h2v2h-2zM15 13h-2v2h2zM16 13h2v2h-2zM21 13h-2v2h2zM15 10h-2v2h2zM16 10h2v2h-2z"
                ></path>
            </g>
        </svg>,
        Kubernetes: () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="w-12 h-12">
            <g id="SVGRepo_iconCarrier">
                <path
                    fill="#326DE6"
                    d="M4.5 14.569c.214.278.539.431.874.431h5.251c.335 0 .66-.165.875-.434l3.258-4.178c.214-.278.288-.633.214-.978l-1.165-5.207a1.13 1.13 0 0 0-.606-.777l-4.714-2.31A1.06 1.06 0 0 0 8.002 1c-.168 0-.335.038-.485.115l-4.715 2.32a1.13 1.13 0 0 0-.605.777L1.032 9.42c-.084.345 0 .7.214.978l3.254 4.17z"
                ></path>
                <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M12.741 9.128q.147.003.293.024l.058.013.031.008a.31.31 0 0 1 .26.371.306.306 0 0 1-.396.223h-.004l-.003-.001-.003-.002-.03-.006-.05-.01a3 3 0 0 1-.274-.106 3 3 0 0 0-.533-.157.24.24 0 0 0-.171.064l-.131-.023a3.97 3.97 0 0 1-1.764 2.212q.022.063.051.123a.24.24 0 0 0-.023.18 3 3 0 0 0 .271.484q.09.117.164.244l.028.057.012.025a.306.306 0 0 1-.381.44.3.3 0 0 1-.172-.18l-.01-.02-.028-.058a3 3 0 0 1-.089-.28 3 3 0 0 0-.21-.512.24.24 0 0 0-.156-.095l-.03-.053-.035-.064a3.97 3.97 0 0 1-2.823-.007l-.07.125a.25.25 0 0 0-.132.064 2.1 2.1 0 0 0-.237.548 3 3 0 0 1-.088.28l-.025.05-.013.027v.001a.306.306 0 0 1-.421.173.31.31 0 0 1-.173-.314.3.3 0 0 1 .041-.12l.014-.03.026-.052q.074-.127.164-.244.162-.234.277-.496a.3.3 0 0 0-.028-.173l.056-.133A3.97 3.97 0 0 1 4.22 9.532l-.134.023a.34.34 0 0 0-.176-.062 3 3 0 0 0-.533.156q-.135.06-.274.105l-.05.011-.03.007H3.02l-.002.002h-.005a.308.308 0 0 1-.397-.349.31.31 0 0 1 .261-.245l.005-.001h.002l.006-.002c.024-.006.054-.014.076-.018q.146-.02.293-.023a3 3 0 0 0 .549-.09.4.4 0 0 0 .131-.133l.128-.037a3.94 3.94 0 0 1 .625-2.752l-.098-.087a.34.34 0 0 0-.062-.176 3 3 0 0 0-.455-.319 3 3 0 0 1-.254-.148l-.048-.038-.015-.013-.004-.003a.323.323 0 0 1-.076-.45.3.3 0 0 1 .244-.107.37.37 0 0 1 .213.08l.022.017q.026.02.046.037.108.101.202.213.188.206.412.372a.24.24 0 0 0 .182.018l.11.078a3.94 3.94 0 0 1 2.552-1.224l.008-.129a.33.33 0 0 0 .099-.158 3 3 0 0 0-.034-.553 3 3 0 0 1-.042-.29v-.087A.306.306 0 0 1 8 2.82a.31.31 0 0 1 .306.337v.087a3 3 0 0 1-.041.29 3 3 0 0 0-.035.553.24.24 0 0 0 .1.153v.007l.007.129c.967.088 1.87.522 2.54 1.223l.116-.082a.34.34 0 0 0 .186-.02q.224-.166.412-.373.094-.112.202-.213l.051-.04.017-.014a.307.307 0 1 1 .381.477l-.024.02q-.023.02-.043.034a3 3 0 0 1-.254.148 3 3 0 0 0-.455.32.24.24 0 0 0-.058.172l-.05.044-.058.053a3.95 3.95 0 0 1 .637 2.745l.123.036a.34.34 0 0 0 .133.132q.27.072.548.09M7.291 5.24q.16-.036.326-.056l-.09 1.6-.008.004a.27.27 0 0 1-.293.256.27.27 0 0 1-.135-.05l-.002.001-1.316-.93c.419-.41.945-.696 1.518-.825m1.618 1.75 1.308-.924a3.2 3.2 0 0 0-1.833-.882l.09 1.598h.002a.27.27 0 0 0 .294.256.27.27 0 0 0 .135-.05zm2.248 1.656L9.609 8.2l-.002-.006a.27.27 0 0 1-.185-.343.27.27 0 0 1 .08-.12L9.5 7.73l1.195-1.067c.366.594.527 1.29.46 1.983zM9.096 9.5l.618 1.49a3.15 3.15 0 0 0 1.275-1.598l-1.593-.269-.002.003a.26.26 0 0 0-.166.023.27.27 0 0 0-.13.348zm-.385 1.905c-.573.13-1.17.1-1.727-.088l.777-1.4h.001a.27.27 0 0 1 .475-.001h.006l.779 1.402a3 3 0 0 1-.311.087m-2.418-.422.611-1.474-.004-.006a.268.268 0 0 0-.297-.37L6.6 9.13l-1.579.267a3.16 3.16 0 0 0 1.272 1.586m-.997-4.32 1.201 1.071-.001.007a.269.269 0 0 1-.106.462l-.001.005-1.54.443a3.13 3.13 0 0 1 .447-1.988m2.95 1.154h-.492l-.307.38.11.476.443.213.442-.212.11-.476z"
                    clipRule="evenodd"
                ></path>
            </g>
        </svg>,
        "Google Cloud AI": () => <svg className="w-14 h-14" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 16 16">
            <g id="SVGRepo_iconCarrier">
                <path
                    fill="#EA4335"
                    d="m10.313 5.376 1.887-1.5-.332-.414a5.94 5.94 0 0 0-5.586-1.217 5.89 5.89 0 0 0-3.978 4.084c-.03.113.312-.098.463-.056l2.608-.428s.127-.124.201-.205c1.16-1.266 3.126-1.432 4.465-.354z"
                ></path>
                <path
                    fill="#4285F4"
                    d="M13.637 6.3a5.84 5.84 0 0 0-1.77-2.838l-1.83 1.82a3.23 3.23 0 0 1 1.193 2.564v.323c.9 0 1.63.725 1.63 1.62 0 .893-.73 1.619-1.63 1.619l-3.257-.003-.325.035v2.507l.325.053h3.257a4.23 4.23 0 0 0 4.08-2.962A4.2 4.2 0 0 0 13.636 6.3z"
                ></path>
                <path
                    fill="#34A853"
                    d="M4.711 13.999H7.97v-2.594H4.71c-.232 0-.461-.066-.672-.161l-.458.14-1.313 1.297-.114.447a4.25 4.25 0 0 0 2.557.87z"
                ></path>
                <path
                    fill="#FBBC05"
                    d="M4.711 5.572A4.23 4.23 0 0 0 .721 8.44a4.21 4.21 0 0 0 1.433 4.688l1.89-1.884a1.617 1.617 0 0 1 .44-3.079 1.63 1.63 0 0 1 1.714.936l1.89-1.878A4.24 4.24 0 0 0 4.71 5.572z"
                ></path>
            </g>
        </svg>,
        "Microsoft Azure AI": () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="w-12 h-12">
            <path
                id="SVGRepo_iconCarrier"
                fill="#0089D6"
                d="m7.47 12.412 3.348-.592.031-.007-1.722-2.049a292 292 0 0 1-1.723-2.058c0-.01 1.779-4.909 1.789-4.926a789 789 0 0 1 2.934 5.066l2.95 5.115.023.039-10.948-.001zM.9 11.788c0-.003.811-1.412 1.803-3.131L4.507 5.53l2.102-1.764C7.765 2.797 8.714 2 8.717 2a.4.4 0 0 1-.033.085L6.4 6.981l-2.24 4.808-1.63.002c-.897.001-1.63 0-1.63-.003"
            ></path>
        </svg>,
        "Apache Spark": () =>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-14 h-14">
            <path
                id="SVGRepo_iconCarrier"
                d="M14.417 0c-.568.016-1.125.286-1.594.807q-.389.44-.661.964c-.469.885-.563 1.885-.74 2.854q-.492 2.727-.969 5.453c-.036.214-.125.302-.323.359-2.359.745-4.719 1.484-7.063 2.25a6.6 6.6 0 0 0-1.484.672c-1.391.885-1.599 2.339-.557 3.615.464.563 1.057.953 1.714 1.245 1.469.656 2.938 1.302 4.401 1.964.026.01.047.016.068.026h-.005l1.745.714v.094c-.266 2.708-.521 5.417-.776 8.13-.052.557-.016 1.104.182 1.641.422 1.156 1.417 1.526 2.505.932.495-.271.891-.661 1.25-1.089 1.828-2.167 3.661-4.328 5.484-6.5.146-.177.271-.198.484-.13.464.156.927.307 1.391.464h.005c.026.016.057.026.094.042l.193.057c1.661.552 3.573 1.031 5.234 1.583.536.177.833.219 1.396.13.417-.063.792-.083 1.104-.313a2.52 2.52 0 0 0 1.318-2.245c-.005-.568-.208-1.083-.469-1.578-1.094-2.078-2.182-4.151-3.281-6.224-.104-.198-.099-.323.052-.5 1.839-2.151 3.672-4.313 5.51-6.474.359-.427.682-.875.87-1.411.411-1.167-.12-2.094-1.333-2.318a3.7 3.7 0 0 0-1.646.089c-2.635.698-5.266 1.391-7.891 2.094-.234.063-.349.021-.474-.193a439 439 0 0 0-3.229-5.354 6 6 0 0 0-.87-1.135c-.495-.49-1.068-.729-1.635-.714zm.229 4.938a.8.8 0 0 1 .25.281q1.743 2.89 3.479 5.786c.094.156.182.208.37.156q3.052-.814 6.104-1.62c.49-.13.979-.255 1.474-.385a.6.6 0 0 1-.135.266 2855 2855 0 0 1-5.036 5.917c-.146.177-.161.297-.057.495 1.25 2.406 2.359 4.411 3.333 6.349l-4.927-1.359-2.156-.719c-.214-.073-.333-.042-.479.13-1.661 1.984-3.339 3.964-5.01 5.943a.53.53 0 0 1-.24.172c.047-.5.089-1.005.135-1.51.203-2.099.396-4.193.604-6.292-.042-.422.156-.536-.432-.724-1.99-.792-4.458-1.76-6.417-2.542a.74.74 0 0 1 .318-.177q3.593-1.142 7.193-2.276c.167-.052.266-.12.281-.307.016-.198.068-.396.099-.589l.969-5.453c.094-.516.188-1.026.281-1.542z"
            ></path>
        </svg>,
        "Pandas": () =>   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-14 h-14">
            <g id="SVGRepo_iconCarrier">
                <g id="ah">
                    <path
                        id="ai"
                        fill="#8598ab"
                        d="M15.1 53.48 16.86 50l9.35-18.52-6.51 2.11-7.29 6.26c-.23.38-.31.82-.23 1.25l2.65 11.53c.07.3.16.58.28.87Z"
                    ></path>
                    <path
                        id="aj"
                        fill="#d7e5eb"
                        d="m16.01 6.51 2.96.84.34 2.28.11 2.2-3.05 1.04-1.71-1.55c-.44-.4-.58-1.04-.35-1.59l1.06-2.52c.13-.29.35-.54.63-.69Z"
                    ></path>
                    <path
                        id="ak"
                        fill="#c0d8df"
                        d="m16.01 6.51 2.07 6.06 2.55-2.9-4.62-3.15Z"
                    ></path>
                    <path
                        id="al"
                        fill="#e2eef2"
                        d="M22.84 5.74 21.73 9.5l-2.41.12-3.3-3.11c.23-.14.49-.22.76-.23h5.58l.5-.54Z"
                    ></path>
                    <path
                        id="am"
                        fill="#d7e5eb"
                        d="m47.14 50-9.35-18.52-5.71-2.02-5.89 2.02L16.84 50l15.15 3.39L47.12 50Z"
                    ></path>
                    <path
                        id="an"
                        fill="#758797"
                        d="M26.2 31.48 12.68 43.36l-.52-2.26c-.09-.4-.04-.82.14-1.2l7.24-5.62 6.65-2.8Z"
                    ></path>
                    <path
                        id="ao"
                        fill="#9dacb9"
                        d="m12.4 39.84 13.81-8.37-1.95-1.25-3.67 1.25-7.93 7.93c-.1.13-.19.28-.25.43Z"
                    ></path>
                    <path
                        id="ap"
                        fill="#f0f4f6"
                        d="m26.27 59 1.62-3.03L24.44 50h-7.58l-1.76 3.48c.13.33.29.65.49.95l2.4 3.72c.34.52.92.84 1.54.84h6.74Z"
                    ></path>
                    <path id="aq" fill="#c0d8df" d="M26.2 31.48 16.85 50l2.64.59z"></path>
                    <path
                        id="ar"
                        fill="#e2eef2"
                        d="m16.86 50-1.76 3.48c.13.33.29.65.49.95L17.25 57l2.46-7h-2.84Z"
                    ></path>
                    <path id="as" fill="#c0d8df" d="M37.8 31.48 47.15 50l-2.64.59z"></path>
                    <path
                        id="at"
                        fill="#e2eef2"
                        d="m47.14 50 1.76 3.48c-.13.33-.29.65-.49.95L46.75 57l-2.46-7h2.84Z"
                    ></path>
                    <path
                        id="au"
                        fill="#8598ab"
                        d="m37.73 59-1.62-3.03L39.56 50h2.98v-2.58l-5.27-5.66H26.73l-5.27 5.66V50h2.98l3.45 5.97L26.27 59h11.47Z"
                    ></path>
                    <path
                        id="av"
                        fill="#f0f4f6"
                        d="M48.9 53.48 47.14 50h-7.58l-3.45 5.97L37.73 59h6.73c.62 0 1.21-.32 1.54-.84l2.4-3.72c.19-.3.36-.62.49-.95Z"
                    ></path>
                    <path
                        id="aw"
                        fill="#8598ab"
                        d="m51.69 39.9-7.24-5.62-6.65-2.8L47.15 50l1.76 3.48c.12-.28.21-.57.28-.87l2.65-11.53c.09-.4.04-.82-.14-1.2Z"
                    ></path>
                    <path
                        id="ax"
                        fill="#758797"
                        d="m37.8 31.48 13.52 11.88.52-2.26c.09-.4.04-.82-.14-1.2l-7.24-5.62-6.65-2.8Z"
                    ></path>
                    <path
                        id="ay"
                        fill="#9dacb9"
                        d="m43.42 31.48-3-1.64-2.62 1.64 13.9 8.42c-.09-.18-.2-.34-.34-.49l-7.93-7.93Z"
                    ></path>
                    <path
                        id="b`"
                        fill="#f9fbfc"
                        d="m24.34 19.38-6.65 5.11 2.89 6.99h22.84l.21-.21 2.87-6.78-6.65-5.12h-15.5Z"
                    ></path>
                    <path
                        id="ba"
                        fill="#9dacb9"
                        d="m38.58 20.21 5.56 4.28.36-4.82-2.32-2.4-3.6 2.95Z"
                    ></path>
                    <path
                        id="bb"
                        fill="#9dacb9"
                        d="m20.05 24.49 5.56-4.28-3.6-2.95-2.32 2.4.36 4.82Z"
                    ></path>
                    <path
                        id="bc"
                        fill="#d7e5eb"
                        d="m47.99 6.51-2.96.84-.34 2.28-.11 2.2 3.05 1.04 1.71-1.55c.44-.4.58-1.04.35-1.59l-1.06-2.52c-.13-.29-.35-.54-.63-.69Z"
                    ></path>
                    <path
                        id="bd"
                        fill="#c0d8df"
                        d="m47.99 6.51-2.07 6.06-2.55-2.9 4.62-3.15Z"
                    ></path>
                    <path
                        id="be"
                        fill="#e2eef2"
                        d="m41.16 5.74 1.11 3.76 2.41.12 3.3-3.11a1.6 1.6 0 0 0-.76-.23h-5.58l-.5-.54Z"
                    ></path>
                    <path
                        id="bf"
                        fill="#f0f4f6"
                        d="m22.84 5.74-.49.55-2.99 3.29-2.99 3.29-.48.52-.11.12c-.43.48-.67 1.1-.67 1.74V25c0 .64.25 1.25.71 1.71l4.77 4.77-.53-6.99-.36-4.82 2.32-2.4 3.6 2.95 6.48 5.31 6.48-5.31 3.6-2.95 2.32 2.4-.36 4.82-.51 6.78 4.56-4.56c.45-.45.71-1.07.71-1.71v-9.75c0-.64-.24-1.26-.67-1.74l-.58-.64-2.94-3.24-3.53-3.89c-.43-.47-1.03-.74-1.67-.74H24.53c-.63 0-1.24.27-1.67.74Z"
                    ></path>
                    <path d="m11.19 41.32 2.65 11.53c.18.76.48 1.48.9 2.13l2.4 3.72c.52.81 1.42 1.3 2.38 1.3h24.94c.97 0 1.86-.48 2.38-1.3l2.4-3.73c.42-.66.73-1.37.9-2.13l2.65-11.53c.22-.95-.06-1.92-.75-2.61l-7.22-7.23 4.06-4.06c.65-.64 1-1.5 1-2.41v-9.75c0-.85-.3-1.67-.85-2.31l.97-.88c.76-.69 1-1.78.6-2.72l-1.07-2.52a2.5 2.5 0 0 0-2.31-1.53h-5.13l-.2-.22C41.27 4.39 40.39 4 39.48 4H24.5c-.92 0-1.8.39-2.41 1.07l-.2.22h-5.13a2.5 2.5 0 0 0-2.31 1.53l-1.07 2.52c-.4.94-.16 2.04.6 2.72l.97.88a3.56 3.56 0 0 0-.85 2.31V25c0 .91.35 1.77 1 2.41l4.06 4.06-7.22 7.23c-.69.69-.97 1.66-.75 2.61Zm1.95-.45c-.03-.14.07-.25.11-.37l10.49-6.36-8.34 16.53zm7.62-20.28c-.03-.35.1-.69.34-.95l.91-.95s.07-.03.11 0l1.84 1.53-3.05 2.35zm.75 9.89-.42-5.52 4.45-3.42 5.05 4.2c.82.68 2 .68 2.82 0l5.05-4.2 4.45 3.42-.42 5.52H21.51m21.58-7.91-3.05-2.35 1.84-1.53s.08-.02.11 0l.91.95c.24.25.37.6.34.95zm-.49 23.44-3.91-4.2c-.62-.67-1.5-1.05-2.41-1.05h-8.54c-.91 0-1.79.38-2.41 1.05l-3.91 4.2c-.61.66-.95 1.51-.95 2.41V49H18.5l8.34-16.52H37.2L45.54 49h-1.98v-.58c0-.9-.34-1.76-.95-2.41Zm-6.92 11.26.39.73h-8.13l.39-.73a2.8 2.8 0 0 0-.06-2.72l-2.48-4.2c-.49-.83-1.4-1.35-2.37-1.35h-.96v-.58c0-.39.15-.76.41-1.05l3.91-4.2c.24-.26.59-.41.95-.41h8.54c.36 0 .7.15.95.41l3.91 4.2c.27.29.41.66.41 1.05V49h-.96c-.97 0-1.88.52-2.37 1.35l-2.48 4.2a2.8 2.8 0 0 0-.06 2.72Zm-16.85.34-2.4-3.72c-.09-.14-.11-.3-.19-.44L17.47 51h5.94c.27 0 .51.14.65.37l2.48 4.2c.14.23.14.52.02.76L25.67 58h-6.14c-.29 0-.55-.14-.7-.38Zm26.34 0c-.15.24-.42.38-.7.38h-6.14l-.89-1.67a.76.76 0 0 1 .02-.76l2.48-4.2c.13-.23.38-.37.65-.37h5.94l1.23 2.45c-.07.14-.1.31-.19.45zm3.43-6.94-8.34-16.53 10.49 6.36c.04.13.14.24.11.37zm-3.1-15.7-4.12-2.5h1.63l2.5 2.5Zm3.16-24.4-.96.88-1.61-1.78 1.78-1.68.89 2.12c.07.16.03.35-.1.46m-2.95-3.3-.97.92-.83-.92zm-25.63 0-.8.88-.96-.88h1.75Zm-4.85 2.83.9-2.14 1.81 1.66-1.65 1.82-.96-.88a.4.4 0 0 1-.1-.46m1.29 15.88c-.26-.26-.41-.63-.41-1v-9.73c0-.4.15-.77.41-1.07l.59-.64 5.98-6.59.49-.54c.24-.26.58-.41.93-.41h14.98c.35 0 .69.15.93.41l.49.54 6.56 7.23c.27.29.41.67.41 1.07V25c0 .37-.15.74-.41 1l-2.86 2.86.61-8.12c.07-.92-.26-1.82-.9-2.49l-.91-.95c-.75-.78-1.99-.85-2.82-.15l-8.47 7.04a.21.21 0 0 1-.26 0l-8.47-7.04c-.83-.69-2.07-.62-2.82.15l-.91.95c-.64.66-.97 1.57-.9 2.49l.61 8.13-2.86-2.86ZM21 32.45h1.63l-4.12 2.5 2.5-2.5Z"></path>
                </g>
            </g>
        </svg>,
        "NumPy": () =>   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-14 h-14">
            <g id="SVGRepo_iconCarrier">
                <path
                    fill="#4dabcf"
                    d="M14.048 7.689 9.405 5.327 4.309 7.89l4.769 2.413zM16.177 8.771l4.868 2.476-5.051 2.556-4.776-2.417zM22.678 5.363l5.001 2.527-4.472 2.263-4.879-2.479zM20.526 4.274 16.023 2 11.57 4.239l4.639 2.358zM17.006 23.809V30l5.454-2.742-.006-6.194zM22.452 18.903l-.006-6.129-5.44 2.725v6.131zM29 17.754v6.215l-4.652 2.339-.003-6.186zM29 15.581v-6.09l-4.661 2.335.004 6.141z"
                ></path>
                <path
                    fill="#4d77cf"
                    d="m15.08 15.5-3.674-1.861v8.045S6.913 12.05 6.5 11.185a.9.9 0 0 0-.331-.264C5.361 10.5 3 9.29 3 9.29V23.5l3.266 1.76v-7.428s4.445 8.607 4.49 8.7a4 4 0 0 0 .968 1.32c.635.423 3.357 2.073 3.357 2.073Z"
                ></path>
            </g>
        </svg>,
        "Apache Kafka": () =>   <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="w-16 h-16"
            viewBox="0 0 74 28"
        >
            <g clipPath="url(#clip0_19_33930)">
                <path
                    fill="#EAB657"
                    d="M30.101 20.46c-.369-2.277-2.017-3.98-2.017-3.98.339.346.53.815.53 1.304s-.191.958-.53 1.304l-4.659 4.731a1.875 1.875 0 0 0 0 2.61l.658.675c.34.345.8.54 1.279.54.48 0 .94-.195 1.279-.54l1.767-1.795c1.632-1.65 1.932-3.37 1.693-4.85"
                ></path>
                <path
                    fill="#71BBAC"
                    d="m41.673 26.482-.656.671a1.8 1.8 0 0 1-1.282.532c-.48-.003-.939-.2-1.276-.548l-5.889-6.086 1.935-1.984a1.85 1.85 0 0 0 .53-1.304 1.87 1.87 0 0 0-.53-1.303l-1.912-1.95 4.22-4.248c-1.65 1.648-1.956 3.366-1.721 4.846.346 2.294 1.992 3.992 1.992 3.992l4.617 4.775a1.85 1.85 0 0 1 .516 1.31 1.88 1.88 0 0 1-.544 1.297"
                ></path>
                <path
                    fill="#2B3B4C"
                    d="M35.08 15.112c.36 2.29 2.005 3.988 2.005 3.988a1.85 1.85 0 0 1-.52-1.307 1.87 1.87 0 0 1 .538-1.3l4.678-4.712a1.85 1.85 0 0 0 .538-1.3 1.88 1.88 0 0 0-.521-1.308l-.658-.678a1.8 1.8 0 0 0-1.274-.55 1.78 1.78 0 0 0-1.282.532l-1.776 1.788c-1.654 1.648-1.96 3.367-1.728 4.847"
                ></path>
                <path
                    fill="#CE686B"
                    d="m34.518 16.495-1.934-1.982-5.914-6.061a1.8 1.8 0 0 0-1.278-.54c-.479 0-.939.194-1.278.54l-.663.672a1.86 1.86 0 0 0-.53 1.304c0 .49.191.958.53 1.304l4.638 4.755s1.648 1.702 2.017 3.978c.239 1.48-.061 3.2-1.706 4.857l4.206-4.268 1.912-1.95a1.85 1.85 0 0 0 .53-1.305 1.88 1.88 0 0 0-.53-1.305"
                ></path>
                <path
                    fill="#71BBAC"
                    d="m34.518 16.495-1.935-1.981-1.925 1.99a1.87 1.87 0 0 0-.521 1.308c.003.489.196.957.536 1.3l1.924 1.937 1.911-1.95c.34-.345.53-.812.532-1.3a1.86 1.86 0 0 0-.522-1.304"
                    opacity="0.5"
                ></path>
            </g>
            <defs>
                <clipPath id="clip0_19_33930">
                    <path fill="#fff" d="M0 0h93.333v28H0z"></path>
                </clipPath>
            </defs>
        </svg>,
        "Airflow": () =>  <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 256 256"
            className="w-14 h-14"
        >
            <g id="SVGRepo_iconCarrier">
                <defs>
                    <radialGradient
                        id="radialGradient-1"
                        cx="0%"
                        cy="100%"
                        r="120.116%"
                        fx="0%"
                        fy="100%"
                        gradientTransform="translate(0 .167)scale(.83253)"
                    >
                        <stop offset="0%" stopColor="#00C812"></stop>
                        <stop offset="100%" stopColor="#006E00"></stop>
                    </radialGradient>
                    <radialGradient
                        id="radialGradient-2"
                        cx="0%"
                        cy="0%"
                        r="120.116%"
                        fx="0%"
                        fy="0%"
                        gradientTransform="matrix(0 .83253 -.83253 0 0 0)"
                    >
                        <stop offset="0%" stopColor="#56AFFD"></stop>
                        <stop offset="100%" stopColor="#04A3FF"></stop>
                    </radialGradient>
                    <radialGradient
                        id="radialGradient-3"
                        cx="100%"
                        cy="0%"
                        r="120.116%"
                        fx="100%"
                        fy="0%"
                        gradientTransform="matrix(-.83253 0 0 -.83253 1.833 0)"
                    >
                        <stop offset="0%" stopColor="#DF1F00"></stop>
                        <stop offset="100%" stopColor="#560D00"></stop>
                    </radialGradient>
                    <radialGradient
                        id="radialGradient-4"
                        cx="100%"
                        cy="100.001%"
                        r="120.116%"
                        fx="100%"
                        fy="100.001%"
                        gradientTransform="matrix(0 -.83254 .83253 0 .167 1.833)"
                    >
                        <stop offset="0%" stopColor="#00FFFD"></stop>
                        <stop offset="100%" stopColor="#00DAFF"></stop>
                    </radialGradient>
                    <radialGradient
                        id="radialGradient-5"
                        cx="0%"
                        cy="100%"
                        r="100%"
                        fx="0%"
                        fy="100%"
                    >
                        <stop offset="0%" stopColor="#008200"></stop>
                        <stop offset="100%" stopColor="#007500"></stop>
                    </radialGradient>
                    <radialGradient
                        id="radialGradient-6"
                        cx="0%"
                        cy="0%"
                        r="100%"
                        fx="0%"
                        fy="0%"
                        gradientTransform="matrix(0 1 -1 0 0 0)"
                    >
                        <stop offset="0%" stopColor="#3166D4"></stop>
                        <stop offset="100%" stopColor="#1A509E"></stop>
                    </radialGradient>
                    <radialGradient
                        id="radialGradient-7"
                        cx="100%"
                        cy="0%"
                        r="100%"
                        fx="100%"
                        fy="0%"
                        gradientTransform="matrix(-1 0 0 -1 2 0)"
                    >
                        <stop offset="0%" stopColor="#8E1400"></stop>
                        <stop offset="100%" stopColor="#4B0B00"></stop>
                    </radialGradient>
                    <radialGradient
                        id="radialGradient-8"
                        cx="100%"
                        cy="100.001%"
                        r="99.999%"
                        fx="100%"
                        fy="100.001%"
                        gradientTransform="matrix(0 -1 1 0 0 2)"
                    >
                        <stop offset="0%" stopColor="#0090C4"></stop>
                        <stop offset="100%" stopColor="#005D8C"></stop>
                    </radialGradient>
                    <radialGradient
                        id="radialGradient-9"
                        cx="0%"
                        cy="99.999%"
                        r="100%"
                        fx="0%"
                        fy="99.999%"
                        gradientTransform="matrix(1 0 0 .99999 0 0)"
                    >
                        <stop offset="0%" stopColor="#00CD1C"></stop>
                        <stop offset="100%" stopColor="#00E950"></stop>
                    </radialGradient>
                    <radialGradient
                        id="radialGradient-10"
                        cx="0%"
                        cy="0%"
                        r="100%"
                        fx="0%"
                        fy="0%"
                        gradientTransform="rotate(90)"
                    >
                        <stop offset="0%" stopColor="#B1C8FD"></stop>
                        <stop offset="100%" stopColor="#7EC3FD"></stop>
                    </radialGradient>
                    <radialGradient
                        id="radialGradient-11"
                        cx="100%"
                        cy="0%"
                        r="100%"
                        fx="100%"
                        fy="0%"
                        gradientTransform="matrix(-1 0 0 -1 2 0)"
                    >
                        <stop offset="0%" stopColor="#E12A00"></stop>
                        <stop offset="100%" stopColor="#B62F00"></stop>
                    </radialGradient>
                    <radialGradient
                        id="radialGradient-12"
                        cx="100%"
                        cy="100%"
                        r="99.998%"
                        fx="100%"
                        fy="100%"
                        gradientTransform="matrix(0 -1 1.00002 0 0 2)"
                    >
                        <stop offset="0%" stopColor="#00B6DD"></stop>
                        <stop offset="100%" stopColor="#0FF"></stop>
                    </radialGradient>
                </defs>
                <path
                    fill="url(#radialGradient-1)"
                    d="M179.2 230.4H256L133.12 128c-1.687 37.193 14.687 73.58 46.08 102.4"
                ></path>
                <path
                    fill="url(#radialGradient-2)"
                    d="M25.6 179.2V256L128 133.12a115 115 0 0 0-5.225-.118c-35.36.002-69.708 16.279-97.175 46.198"
                ></path>
                <path
                    fill="url(#radialGradient-3)"
                    d="M0 25.6 122.88 128c1.687-37.192-14.687-73.58-46.08-102.4z"
                ></path>
                <path
                    fill="url(#radialGradient-4)"
                    d="M230.4 0 128 122.879c37.193 1.688 73.58-14.687 102.4-46.08z"
                ></path>
                <path
                    fill="url(#radialGradient-5)"
                    d="M128 128c-11.479 29.755-9.745 60.086 5.12 89.601 15.36 7.679 28.16 12.799 46.08 12.799-31.393-28.82-47.767-65.207-46.08-102.4z"
                ></path>
                <path
                    fill="url(#radialGradient-6)"
                    d="M38.4 133.12c-7.679 15.361-12.8 28.16-12.8 46.08 28.819-31.393 65.207-47.766 102.4-46.08V128c-12.944-4.993-25.994-7.486-39.04-7.486-16.946.001-33.884 4.207-50.56 12.606"
                ></path>
                <path
                    fill="url(#radialGradient-7)"
                    d="M122.88 128H128c11.478-29.755 9.745-60.087-5.12-89.6-15.36-7.68-28.159-12.8-46.08-12.8 31.393 28.82 47.767 65.208 46.08 102.4"
                ></path>
                <path
                    fill="url(#radialGradient-8)"
                    d="M128 122.879V128c29.755 11.478 60.086 9.744 89.6-5.121 7.68-15.358 12.8-28.158 12.8-46.08-28.82 31.393-65.207 47.768-102.4 46.08"
                ></path>
                <path
                    fill="url(#radialGradient-9)"
                    d="m71.68 166.4 61.44 51.201C118.255 188.086 116.521 157.755 128 128c-1.776-.592-3.858-.876-6.158-.876-17.599.001-47.898 16.635-50.162 39.276"
                ></path>
                <path
                    fill="url(#radialGradient-10)"
                    d="M38.4 133.12c29.514-14.865 59.845-16.598 89.6-5.12 5.12-15.359-12.8-53.76-38.4-56.32z"
                ></path>
                <path
                    fill="url(#radialGradient-11)"
                    d="M128 128c15.36 5.12 53.759-12.8 56.32-38.4l-61.44-51.2c14.865 29.513 16.598 59.845 5.12 89.6"
                ></path>
                <path
                    fill="url(#radialGradient-12)"
                    d="M128 128c-5.12 15.361 12.8 53.76 38.4 56.32l51.2-61.441c-29.514 14.865-59.845 16.599-89.6 5.121"
                ></path>
                <path d="M128 121.6a6.4 6.4 0 1 1 0 12.8 6.4 6.4 0 0 1 0-12.8"></path>
            </g>
        </svg>,
        "Python": () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-14 h-14">
            <g id="SVGRepo_iconCarrier">
                <defs>
                    <linearGradient
                        id="a"
                        x1="-133.268"
                        x2="-133.198"
                        y1="-202.91"
                        y2="-202.84"
                        gradientTransform="matrix(189.38 0 0 189.81 25243.061 38519.17)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor="#387eb8"></stop>
                        <stop offset="1" stopColor="#366994"></stop>
                    </linearGradient>
                    <linearGradient
                        id="b"
                        x1="-133.575"
                        x2="-133.495"
                        y1="-203.203"
                        y2="-203.133"
                        gradientTransform="matrix(189.38 0 0 189.81 25309.061 38583.42)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor="#ffe052"></stop>
                        <stop offset="1" stopColor="#ffc331"></stop>
                    </linearGradient>
                </defs>
                <path
                    fill="url(#a)"
                    d="M15.885 2.1c-7.1 0-6.651 3.07-6.651 3.07v3.19h6.752v1H6.545S2 8.8 2 16.005s4.013 6.912 4.013 6.912H8.33v-3.361s-.13-4.013 3.9-4.013h6.762s3.772.06 3.772-3.652V5.8s.572-3.712-6.842-3.712Zm-3.732 2.137a1.214 1.214 0 1 1-1.183 1.244v-.02a1.214 1.214 0 0 1 1.214-1.214Z"
                ></path>
                <path
                    fill="url(#b)"
                    d="M16.085 29.91c7.1 0 6.651-3.08 6.651-3.08v-3.18h-6.751v-1h9.47S30 23.158 30 15.995s-4.013-6.912-4.013-6.912H23.64V12.4s.13 4.013-3.9 4.013h-6.765S9.2 16.356 9.2 20.068V26.2s-.572 3.712 6.842 3.712h.04Zm3.732-2.147A1.214 1.214 0 1 1 21 26.519v.03a1.214 1.214 0 0 1-1.214 1.214z"
                ></path>
            </g>
        </svg>,
        "Java": () =>   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="w-14> h-14">
            <g id="SVGRepo_iconCarrier">
                <path
                    fill="#E76F00"
                    d="M16.05 8.44C22.638 3.327 19.257 0 19.257 0c.503 5.287-5.444 6.536-7.038 10.17-1.088 2.479.745 4.65 3.829 7.385-.273-.606-.694-1.194-1.12-1.79-1.451-2.034-2.964-4.152 1.122-7.324"
                ></path>
                <path
                    fill="#E76F00"
                    d="M17.102 18.677s1.982-1.6.412-3.376c-5.32-6.03 5.82-8.765 5.82-8.765-6.802 3.277-5.787 5.221-4.077 7.584 1.83 2.534-2.155 4.557-2.155 4.557"
                ></path>
                <path
                    fill="#5382A1"
                    d="M22.937 23.446c6.105-3.12 3.282-6.118 1.312-5.714-.483.099-.698.184-.698.184s.18-.276.522-.396c3.898-1.347 6.895 3.975-1.259 6.083 0 0 .095-.083.123-.157M10.233 19.497c-3.82-.502 2.095-1.883 2.095-1.883s-2.297-.152-5.122 1.19c-3.34 1.59 8.262 2.312 14.268.759.624-.42 1.487-.783 1.487-.783s-2.457.431-4.905.634c-2.995.247-6.21.295-7.823.083M11.686 22.476c-2.13-.217-.735-1.232-.735-1.232-5.512 1.799 3.067 3.839 10.769 1.624-.819-.284-1.34-.803-1.34-.803-3.764.713-5.939.69-8.694.41M12.615 25.7c-2.129-.241-.886-.953-.886-.953-5.003 1.375 3.044 4.215 9.414 1.53-1.043-.398-1.79-.859-1.79-.859-2.842.529-4.16.57-6.739.281"
                ></path>
                <path
                    fill="#5382A1"
                    d="M25.939 27.339s.92.745-1.014 1.322c-3.677 1.096-15.304 1.426-18.534.044-1.161-.497 1.016-1.186 1.701-1.33.714-.153 1.123-.125 1.123-.125-1.292-.894-8.347 1.757-3.584 2.516 12.988 2.071 23.677-.933 20.308-2.427"
                ></path>
                <path
                    fill="#5382A1"
                    d="M28 28.968c-.213 2.727-9.212 3.3-15.073 2.931-3.823-.24-4.589-.843-4.6-.852 3.659.593 9.828.701 14.83-.224C27.59 30.002 28 28.968 28 28.968"
                ></path>
            </g>
        </svg>,
        "C++": () =>   <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-14 h-14"
            preserveAspectRatio="xMinYMin meet"
            viewBox="0 0 256 288"
        >
            <path
                fill="#5C8DBC"
                d="M255.569 84.72c-.002-4.83-1.035-9.098-3.124-12.761-2.052-3.602-5.125-6.621-9.247-9.008-34.025-19.619-68.083-39.178-102.097-58.817-9.17-5.294-18.061-5.101-27.163.269C100.395 12.39 32.59 51.237 12.385 62.94 4.064 67.757.015 75.129.013 84.711 0 124.166.013 163.62 0 203.076c.002 4.724.991 8.909 2.988 12.517 2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.269 34.015-19.64 68.075-39.198 102.105-58.817 4.217-2.44 7.333-5.544 9.386-9.252 1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345"
            ></path>
            <path
                fill="#1A4674"
                d="M128.182 143.509 2.988 215.593c2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.269 34.015-19.64 68.075-39.198 102.105-58.817 4.217-2.44 7.333-5.544 9.386-9.252z"
            ></path>
            <path
                fill="#1A4674"
                d="M91.101 164.861c7.285 12.718 20.98 21.296 36.69 21.296 15.807 0 29.58-8.687 36.828-21.541l-36.437-21.107z"
            ></path>
            <path
                fill="#1B598E"
                d="M255.569 84.72c-.002-4.83-1.035-9.098-3.124-12.761l-124.263 71.55 124.413 72.074c1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345"
            ></path>
            <path
                fill="#FFF"
                d="M248.728 148.661h-9.722v9.724h-9.724v-9.724h-9.721v-9.721h9.721v-9.722h9.724v9.722h9.722zm-35.475 0h-9.721v9.724h-9.722v-9.724h-9.722v-9.721h9.722v-9.722h9.722v9.722h9.721z"
            ></path>
            <path
                fill="#FFF"
                d="M164.619 164.616c-7.248 12.854-21.021 21.541-36.828 21.541-15.71 0-29.405-8.578-36.69-21.296a42.06 42.06 0 0 1-5.574-20.968c0-23.341 18.923-42.263 42.264-42.263 15.609 0 29.232 8.471 36.553 21.059l36.941-21.272c-14.683-25.346-42.096-42.398-73.494-42.398-46.876 0-84.875 38-84.875 84.874 0 15.378 4.091 29.799 11.241 42.238 14.646 25.48 42.137 42.637 73.634 42.637 31.555 0 59.089-17.226 73.714-42.781z"
            ></path>
        </svg>,
        "JavaScript": () =>   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="w-14 h-14">
            <g id="SVGRepo_iconCarrier">
                <path fill="#FFCA28" d="M2 2h28v28H2z"></path>
                <path
                    fill="#3E3E3E"
                    d="m19 25.288 2.061-1.364c.162.507 1.185 1.713 2.477 1.713 1.293 0 1.893-.706 1.893-1.174 0-1.275-1.32-1.725-1.954-1.94a4 4 0 0 1-.246-.09l-.133-.053c-.705-.269-3.306-1.262-3.306-4.143 0-3.172 3.062-3.537 3.754-3.537.453 0 2.63.056 3.716 2.094l-2 1.396c-.439-.889-1.167-1.182-1.616-1.182-1.108 0-1.338.812-1.338 1.182 0 1.037 1.203 1.502 2.22 1.894.265.103.518.2.734.303 1.107.523 2.738 1.38 2.738 4.076C28 25.813 26.867 28 24.015 28c-3.83 0-4.846-2.3-5.015-2.712M9 25.559l2.149-1.364c.168.508.822 1.443 1.772 1.443.949 0 1.435-.975 1.435-1.443V15h2.642v9.195c.043 1.269-.66 3.805-3.765 3.805C10.38 28 9.193 26.304 9 25.56"
                ></path>
            </g>
        </svg>,
    };
    const techCategories = [
        {
            title: "AI & Machine Learning",
            icons: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"]
        },
        {
            title: "Deep Learning & NLP",
            icons: ["OpenAI GPT-4", "Hugging Face", "spaCy", "LangChain"],
        },
        {
            title: "Programming Languages",
            icons: ["Python", "Java", "C++", "JavaScript"],
        },
        {
            title: "Data Processing",
            icons: ["Apache Spark", "Pandas", "NumPy", "Apache Kafka", "Airflow"],
        },
        {
            title: "Cloud & Infrastructure",
            icons: ["AWS SageMaker", "Google Cloud AI", "Microsoft Azure AI", "Docker", "Kubernetes"],
        },
        {
            title: "Computer Vision",
            icons: ["OpenCV", "YOLO", "Detectron2", "Vision Transformer", "MediaPipe"],
        },



    ];
    const definitionOne = [
        {
            title: "Proven Expertise",
            description:
                "Our certified AI specialists bring 7+ years of combined experience delivering 14+ successful AI projects across healthcare, finance, retail, and technology sectors, ensuring innovative solutions backed by proven methodologies and industry best practices.",
        },
        {
            title: "Custom-Tailored Solutions",
            description:
                "We don't offer one-size-fits-all approaches. Every AI software development project receives personalized attention, with solutions precisely engineered to address your specific business challenges, workflows, and strategic objectives for maximum impact and ROI.",
        },
        {
            title: "Cutting-Edge Technology Stack",
            description:
                "Leverage the latest artificial intelligence services powered by TensorFlow, PyTorch, OpenAI, AWS, and Azure. Our technology expertise ensures your AI solutions are built on robust, scalable, future-proof foundations that adapt to evolving business needs.",
        },
        {
            title: "End-to-End Support",
            description:
                "From initial consultation through deployment and beyond, 2BTech provides comprehensive support throughout your AI journey. Our dedicated team ensures seamless integration, continuous optimization, training, and ongoing maintenance for sustained success.",
        },
    ];
    return (
        <div className="font-syne">
            <NextSeo
                title="AI Software Development Services | Machine Learning & Custom AI - 2BTech"
                description="Transform your business with 2BTech's AI software development services. Expert machine learning development, custom AI model development, computer vision, and deep learning solutions. Get 15% off your first project."
                canonical="https://2btech.com/services/ai-software-development"
                openGraph={{
                    url: "https://2btech.com/services/ai-software-development",
                    title:"AI Software Development Services | Machine Learning & Custom AI - 2BTech",
                    description:"Transform your business with 2BTech's AI software development services. Expert machine learning development, custom AI model development, computer vision, and deep learning solutions. Get 15% off your first project.",
                    images: [
                        {
                            url: "https://2btech.com/assets/services/hero/ai-software-development.webp",
                            width: 1200,
                            height: 630,
                            alt: "AI Software Development Services | Machine Learning & Custom AI - 2BTech",
                        },
                    ],
                    siteName: "2BTech",
                }}
                twitter={{
                    handle: "@2btech",
                    site: "@2btech",
                    cardType: "summary_large_image",
                }}
            />
            <WebPageJsonLd
                id="https://2btech.com/services/ai-software-development"
                url="https://2btech.com/services/ai-software-development"
                title="AI Software Development Services | Machine Learning & Custom AI - 2BTech"
                description="Transform your business with 2BTech's AI software development services. Expert machine learning development, custom AI model development, computer vision, and deep learning solutions. Get 15% off your first project."
                lastReviewed={new Date().toISOString()}
            />
            <FAQPageJsonLd
                mainEntity={faqs.map((faq) => ({
                    questionName: faq.question,
                    acceptedAnswerText: faq.answer,
                }))}
            />
            <HeroSection
                title=" AI Software Development That Drives Results"
                description="Transform your business with custom AI software development services designed to deliver innovation and measurable growth"
                formLabel="Get Free AI Software Development Consultation"
                buttonText="Get Free Consultation"
                TrustBar={() => (
                    <div></div>
                )}
            />
            <AboutSection
                title="Leading AI Software Development Company"
                description="At 2BTech, we specialize in AI software development services that empower businesses to unlock their full potential through intelligent automation and data-driven decision-making. As a trusted AI software development company, we create custom AI solutions tailored to your unique challenges and objectives. Our expert team leverages cutting-edge artificial intelligence services including machine learning development, deep learning solutions, and computer vision development to build scalable, high-performance applications. From startups to enterprises, we deliver AI-powered solutions that streamline operations, enhance customer experiences, and drive sustainable competitive advantages in today's digital-first marketplace
                "
                src="/assets/services/aiSoftware/aiSoftware.webp"
                width={500}
            />
            <ServiceSection
                heading="AI Software Development Services"
                subHeading="Our AI Software Development Expertise"
                description=" 2BTech offers comprehensive AI software development services designed to revolutionize your business operations. From custom AI model development to intelligent automation, our artificial intelligence services deliver innovative solutions that solve real-world challenges and accelerate digital transformation"
                arrowImage="/assets/services/down-arrow.svg"
                services={[
                    {
                        id:1,
                        title: "Custom AI Model Development",
                        description:
                            "Build tailored AI models with TensorFlow, PyTorch, and Keras for precise, scalable, and intelligent business solutions.",
                    },
                    {
                        id:2,
                        title: "LLM Fine-Tuning",
                        description:
                            "Fine-tune advanced language models like GPT, T5, and LLaMA using Hugging Face tools for domain-specific AI applications.",
                    },
                    {
                        id: 3,
                        title: "Deep Learning",
                        highlightImage: "/assets/services/aiSoftware/deepLearning.webp",
                        description:
                            "Develop powerful neural networks for vision, text, and predictive tasks using TensorFlow and PyTorch frameworks."                    },
                    {
                        id: 4,
                        title: "Computer Vision",
                        description:
                            "Implement AI-driven image and video analysis with YOLO, OpenCV, and Detectron2 for automation and quality control.",
                    },
                    {
                        id: 5,
                        title: "Natural Language Processing (NLP)",
                        description:
                            "Leverage transformer models for sentiment analysis, chatbots, and document understanding with spaCy and Hugging Face.",
                    },
                    {
                        id: 6,
                        title: "Time Series Forecasting",
                        description:
                            "Predict trends and optimize planning using Prophet, ARIMA, and LSTM-based forecasting models.",


                    },
                    {
                        id: 7,
                        title: "Conversational AI",
                        description:
                            "Build intelligent, context-aware chatbots using Rasa, LangChain, and Dialogflow for seamless customer interaction.",
                    },
                    {
                        id: 8,
                        title: "MLOps & Model Deployment",
                        description:
                            "Automate ML pipelines and deploy scalable models with MLflow, Kubeflow, and cloud-based MLOps tools.",
                    },
                    {
                        id: 9,
                        title: "LLM Integration",
                        description:
                            "Integrate GPT-4, Claude, Gemini, or open-source LLMs with APIs, RAG, and custom prompt engineering workflows.",
                    },
                    {
                        id: 10,
                        title: "Vector Databases & Semantic Search",
                        description:
                            "Power RAG and search systems using Pinecone, Weaviate, and ChromaDB for instant, intelligent data retrieval.",
                    },
                    {
                        id: 11,
                        title: "AutoML & Neural Architecture Search",
                        description:
                            "Accelerate AI development with AutoML tools like H2O.ai and AutoKeras for automated model optimization.",
                    },

                    {
                        id: 12,
                        title: "Reinforcement Learning",
                        smallImage: "/assets/services/aiSoftware/ReinforcementLearning.svg",
                        description:
                            "Develop self-learning agents using Stable Baselines3 and RLlib for robotics, gaming, and autonomous systems.",},
                ]}
            />
            <WhatIsSection
                heading="Why 2BTech Is Your"
                highlight="Trusted AI Development Partner"
                description="Choosing the right AI development partner is crucial for successful digital transformation. Here's why 2BTech stands out:"
                definitionOne={definitionOne}
                imageOne="/assets/services/aiSoftware/why.webp"
            />
            <OurModals
                headingHighlight=" Flexible Engagement Models "
                heading="Designed for Your Project Requirements"
                src="/assets/services/aiSoftware/aiSoftwareModal.webp"
                description=" 2BTech offers flexible hiring models for AI software development services, ensuring you get the right team structure, expertise, and budget alignment for successful project delivery and long-term partnership."
                subheading="Fixed Price Model"
                subDescription="  Perfect for well-defined AI projects with clear scope and requirements. Get transparent pricing, guaranteed deliverables, and predictable timelines—ideal for businesses seeking budget certainty and structured project execution."
                subheadingTwo="Dedicated Team Model"
                subDescriptionTwo="Scale your capabilities with dedicated AI developers who integrate seamlessly into your workflow. Enjoy full control, flexible resource allocation, and direct communication for evolving projects requiring ongoing development"
            />
            <OurStack
                heading="C Advanced Technologies Powering"
                description="Industry-leading frameworks and tools for exceptional AI solutions"
                highlightHeading="Our AI Software Development"
                stackIcons={StackIcons}
                techCategories={techCategories}
            />

            <OurFlowSection
                heading="Unlock AI's Transformative"
                headingHighlight="Business Potential"
                description="Many businesses miss critical opportunities for growth, efficiency, and innovation by not fully leveraging AI software development capabilities."
                services={[
                    {
                        title: "Accelerate Innovation & Time-to-Market",
                        duration: "",
                        description:
                            "AI software development enables rapid prototyping, automated testing, and continuous improvement. Launch products faster, iterate efficiently, and stay ahead of competitors with intelligent workflows that reduce time-to-market by 50%.",
                    },
                    {
                        title: "Enhance Operational Efficiency",
                        duration: "",
                        description:
                            "Automate repetitive tasks, optimize resource allocation, and streamline complex workflows. Our artificial intelligence services reduce operational costs by up to 40% while improving accuracy, productivity, and employee satisfaction across all functions.",
                    },
                    {
                        title: "Drive Data-Driven Decision Making",
                        duration: "",
                        description:
                            "Transform raw data into strategic insights with machine learning development and predictive analytics. Make informed decisions backed by real-time intelligence, forecast trends, and identify opportunities before competitors do.",
                    },
                    {
                        title: "Elevate Customer Experience",
                        duration: "",
                        description:
                            "Deliver personalized, 24/7 customer engagement through AI chatbots and recommendation engines. Increase satisfaction by 45%, reduce response times dramatically, and build lasting relationships that drive loyalty and retention.",
                    },
                    {
                        title: "Scale Seamlessly & Cost-Effectively",
                        duration: "",
                        description:
                            "Build AI infrastructure that grows with your business demands. Our scalable solutions handle increased workloads, expanding user bases, and new market entries without compromising performance or requiring major reinvestment.",
                    },
                    {
                        title: "Gain Competitive Advantage",
                        duration: "",
                        description:
                            "Stay ahead in your industry with cutting-edge AI capabilities. Custom AI model development delivers proprietary algorithms and innovative features that differentiate your brand and create sustainable market leadership.",
                    },
                ]}
            />
            <Banner
                title="Transform Your Business with AI"
                description="Innovate. Automate. Scale. Succeed."
                src="/assets/services/aiSoftware/aiSoftwareBannerBg.jpg"
            />
            <FaqSection
                Faq={faqs}
            />
            <FinalCTASection
                heading="Ready to Transform Your Business with AI Software Development?"
                description="Don't let competitors gain the AI advantage. Partner with 2BTech today and leverage cutting-edge artificial intelligence services to drive innovation, efficiency, and growth. Our expert team specializes in custom AI model development, machine learning development, computer vision development, and deep learning solutions designed specifically for your business needs. From initial strategy to deployment and beyond, we're committed to your success"
            />
            <Footer/>
        </div>
    );
}