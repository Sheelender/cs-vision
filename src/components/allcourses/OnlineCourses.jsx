import React, { useState } from "react"
import "./courses.css"
import { online } from "../../dummydata"
import Heading from "../common/heading/Heading"
import { Link } from "react-router-dom"
import comingsoon from '../assets/comingsoon.png'

const OnlineCourses = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [selected, setSelected] = useState('');
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const openPopup = (id) => {
    console.log("openPopup method called")
    setIsPopupOpen(true);
    setSelected(id)
  };

  const closePopup = () => {
    console.log("closePopup method called")
    setIsPopupOpen(false);
    setOpenAccordion(false);
  };
  console.log("")

  return (
    <>
      <section className='online'>
        <div className='container'>
          <Heading subtitle='COURSES' title='Browse Our Online Courses' show="false" />
          <div className='content grid3'>
            {online.map((val) => (
              <div className='box' onClick={() => openPopup(val.id)}>
                <div className='img' >
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}
                  <br></br>
                  <p> {val.price}</p>
                </h1>
                {
                  val.courseUrl !== '#'
                    ?
                    <Link to={val.courseUrl} target="_blank">
                      <span>{val.course}</span>
                    </Link>
                    :
                    <span>{val.course}</span>
                }

              </div>
            ))}
          </div>
        </div>
        {isPopupOpen && (
          <div className="popup-overlay">
            <div className="popup-content">
              <h2>Curriculum</h2>
              <p>Best-in-class content by leading faculties & industry leaders in form of Live Classes, Projects, Industry Case studies & Assignments.</p>
              <div className="accordion">
                {accordionData[selected] && accordionData[selected].map((item) => (
                  <div
                    key={item.id}
                    className={`card ${openAccordion === item.id ? 'open' : ''}`}
                    onClick={() => toggleAccordion(item.id)}
                  >
                    <div className="card-header">
                      <span className={`milestone ${item.className}`}>
                        STEP {item.id}
                      </span>
                      <h4>{item.title}</h4>
                      <div className="iconCourse">
                        {openAccordion === item.id ? '▲' : '▼'}
                      </div>
                    </div>
                    {openAccordion === item.id && (
                      <div className="card-body">
                        <div className="content-columns">
                          <ul>
                            {item.content.slice(0, Math.ceil(item.content.length / 2)).map((contentItem, index) => (
                              <li key={index}>{contentItem}</li>
                            ))}
                          </ul>
                          <ul>
                            {item.content.slice(Math.ceil(item.content.length / 2)).map((contentItem, index) => (
                              <li key={index}>{contentItem}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                {
                  accordionData[selected] === undefined || accordionData[selected] === null || accordionData[selected].length === 0
                  &&
                  <img src={comingsoon}
                    // style={{
                    //   height: "91%",
                    //   width: "18%",
                    //   marginLeft: "-81px",
                    //   marginBottom: "-15%"
                    // }}
                    alt="logo"></img>
                }
              </div>

              <button onClick={closePopup}>Close</button>
            </div>
          </div>
        )}
      </section>
    </>
  )
}

const accordionData = {
  1: [
    {
      "id": 1,
      "title": "Getting Started with Web Development",
      "content": [
        "How the Internet Works",
        "Client-Server Architecture",
        "Static vs. Dynamic Websites",
        "DNS and HTTP/HTTPS"
      ],
      "className": "milestone-1"
    },
    {
      "id": 2,
      "title": "HTML Basics",
      "content": [
        "Introduction to HTML",
        "HTML Tags and Attributes",
        "Lists, Tables, and Forms",
        "HTML Forms and Form Validation",
        "Semantic Elements and Accessibility"
      ],
      "className": "milestone-2"
    },
    {
      "id": 3,
      "title": "CSS Basics and Advanced Topics",
      "content": [
        "CSS Syntax and Selectors",
        "Box Model and Layouts",
        "CSS Flexbox and Grid",
        "Responsive Design and Media Queries",
        "CSS Animations and SASS/SCSS Basics",
        "Bootstrap 5 Components (Grid, Navbar, Modals)"
      ],
      "className": "milestone-3"
    },
    {
      "id": 4,
      "title": "JavaScript Essentials",
      "content": [
        "Variables, Data Types, and Operators",
        "Functions and Arrays",
        "DOM Manipulation and Event Handling",
        "Modern JavaScript (ES6 Features: Promises, Async/Await)",
        "Advanced Topics: Closures, Prototypes, and Event Loop"
      ],
      "className": "milestone-4"
    },
    {
      "id": 5,
      "title": "React Basics",
      "content": [
        "Introduction to React and JSX Syntax",
        "Components, Props, and State",
        "React Hooks: useState, useEffect, useContext",
        "Conditional Rendering and Event Handling",
        "React Router: Nested Routes and Redirects"
      ],
      "className": "milestone-1"
    },
    {
      "id": 6,
      "title": "Advanced React",
      "content": [
        "State Management (Context API, Redux Toolkit)",
        "Performance Optimization: memo, useMemo, useCallback",
        "Code Splitting and Lazy Loading",
        "Error Boundaries and React Query",
        "Form Handling with Formik/Yup"
      ],
      "className": "milestone-2"
    },
    {
      "id": 7,
      "title": "Front-End Deployment",
      "content": [
        "Deploying React Apps to Netlify or Vercel",
        "Setting Up CI/CD Pipelines for Front-End"
      ],
      "className": "milestone-3"
    },
    {
      "id": 8,
      "title": "Java Fundamentals",
      "content": [
        "Core Java Concepts (OOP, Streams, Collections)",
        "Exception Handling and Multithreading",
        "File Handling and JDBC"
      ],
      "className": "milestone-4"
    },
    {
      "id": 9,
      "title": "Spring Boot Basics",
      "content": [
        "Introduction to Spring Boot",
        "RESTful APIs with @RestController",
        "Spring Boot Annotations: @Service, @Repository",
        "Dependency Injection and IoC"
      ],
      "className": "milestone-1"
    },
    {
      "id": 10,
      "title": "Database Integration with Spring Boot",
      "content": [
        "SQL Basics: CRUD Operations",
        "Spring Data JPA and Hibernate",
        "Entity Relationships: One-to-One, One-to-Many, Many-to-Many",
        "Connecting to MySQL/PostgreSQL"
      ],
      "className": "milestone-2"
    },
    {
      "id": 11,
      "title": "Spring Boot Security",
      "content": [
        "Authentication and Authorization with Spring Security",
        "JWT (JSON Web Tokens) for Stateless Security",
        "Role-Based Access Control"
      ],
      "className": "milestone-3"
    },
    {
      "id": 12,
      "title": "Advanced Spring Boot Topics",
      "content": [
        "Microservices Architecture with Spring Cloud",
        "Service Discovery (Eureka) and API Gateway (Zuul)",
        "Websockets for Real-Time Communication",
        "Spring Boot Testing with JUnit and Mockito"
      ],
      "className": "milestone-4"
    },
    {
      "id": 13,
      "title": "Back-End Deployment",
      "content": [
        "Containerizing Applications with Docker",
        "Deploying Spring Boot Apps to AWS Elastic Beanstalk or Heroku",
        "Setting Up CI/CD Pipelines for Back-End"
      ],
      "className": "milestone-1"
    },
    {
      "id": 14,
      "title": "Full Stack Integration",
      "content": [
        "Connecting React Front-End to Spring Boot Back-End",
        "Handling CORS and Proxy Setup",
        "API Integration with Axios",
        "Synchronizing Error Handling"
      ],
      "className": "milestone-2"
    },
    {
      "id": 15,
      "title": "End-to-End Deployment",
      "content": [
        "Deploying Full Stack Applications",
        "Monitoring and Log Aggregation with ELK Stack"
      ],
      "className": "milestone-3"
    },
    {
      "id": 16,
      "title": "Projects",
      "content": [
        "Basic: To-Do List, CRUD Application",
        "Intermediate: E-commerce App, Social Media Dashboard",
        "Advanced: Real-Time Chat App, Project Management Tool"
      ],
      "className": "milestone-4"
    }
  ]
  ,
  2: [
    {
      id: 1,
      title: "Getting Started with Programming Languages",
      content: [
        "Fundamentals of Programming",
        "Understanding What a Programming Language Is?",
        "Importance of Programming in Industry.",
        "Real-World Applications (without code examples)"
      ],
      className: "milestone-1"
    },
    {
      id: 2,
      title: "Essential Language Basics",
      content: [
        "Introduction to Programming Languages",
        "Data Types Overview",
        "Type Conversion and Typecasting",
        "Keywords and Reserved Words",
        "Variables and Their Usage",
        "Identifiers and Naming Conventions",
        "Operators and Their Functions"
      ],
      className: "milestone-2"
    },
    {
      id: 3,
      title: "Program Flow and Design",
      content: [
        "Control Flow Structures",
        "Looping and Iteration (Control Structures)",
        "Functions and Modular Design",
        "Classes and Object-Oriented Concepts",
        "Inheritance and Code Reusability",
        "Polymorphism for Flexibility",
        "Abstraction for Simplification",
        "Encapsulation for Data Protection"
      ],
      className: "milestone-3"
    }
    , {
      id: 4,
      title: "Object-Oriented Concepts",
      content: [
        "Classes and Objects",
        "Inheritance and Hierarchies",
        "Polymorphism for Versatility",
        "Abstraction for Simplified Interfaces",
        "Encapsulation for Secure Data Handling"
      ],
      className: "milestone-4"
    }
    ,
    {
      id: 5,
      title: "Production Level Essentials",
      content: [
        "Exception Handling for Error Management",
        "File Handling for Data Operations",
        "Code Debugging Techniques"
      ],
      className: "milestone-1"
    }
    ,
    {
      id: 6,
      title: "NumPy Essentials",
      content: [
        "Introduction to NumPy",
        "Performing Numerical Operations with NumPy"
      ],
      className: "milestone-2"
    }
    , {
      id: 7,
      title: "Pandas Essentials",
      content: [
        "Introduction to Pandas",
        "Dataset Handling and Data Processing with Pandas"
      ],
      className: "milestone-3"
    }
    ,
    {
      id: 8,
      title: "Statistics for Machine Learning",
      content: [
        "Probability and Statistics Fundamentals",
        "Understanding Population and Sample",
        "Gaussian Normal Distribution and CDF",
        "Characteristics of Symmetric Distribution and Skewness",
        "Standard Normal Variate and Standardization Techniques",
        "Kernel Density Estimation Methods",
        "Sampling Distribution and the Central Limit Theorem",
        "Q-Q Plot Analysis",
        "Overview of Various Distributions and Their Applications",
        "Chebyshev’s Inequality",
        "Discrete and Uniform Distributions",
        "Bernoulli and Binomial Distributions",
        "Log-Normal Distribution",
        "Power Law Distribution",
        "Box-Cox Transformation",
        "Applications of Non-Gaussian Distributions",
        "Co-Variance Analysis",
        "Pearson Correlation Coefficient",
        "Spearman Rank Correlation Coefficient",
        "Correlation vs. Causation",
        "Utilizing Correlations",
        "Introduction to Confidence Intervals",
        "Calculating Confidence Intervals",
        "Hypothesis Testing Techniques",
        "Resampling and Permutation Testing",
        "K-S Test for Distribution Similarity",
        "Proportional Sampling Methods"
      ],
      className: "milestone-4"
    }
    ,
    {
      "id": 9,
      "title": "Python Essentials for Machine Learning",
      "content": [
        "Basics of Data Sets",
        "Introduction to Dimensionality Reduction",
        "Row and Column Vectors",
        "Representation of Data Sets",
        "Representing Data Sets as a Matrix"
      ],
      "className": "milestone-1"
    }
    , {
      "id": 10,
      "title": "Data Analysis and Classification",
      "content": [
        "Factors Affecting Classification Algorithms",
        "Balanced vs Imbalanced Datasets",
        "Impact of Outliers",
        "Space and Runtime Complexity",
        "K Distance",
        "Multiclass Classification",
        "Time and Space Complexity of K-Nearest Neighbor",
        "Feature Importance",
        "Handling Categorical and Numerical Features",
        "Handling Missing Values",
        "Curse of Dimensionality",
        "Bias-Variance Tradeoff"
      ],
      "className": "milestone-2"
    }
    ,
    {
      "id": 11,
      "title": "Data Preprocessing and Dimensionality Reduction",
      "content": [
        "Data Preprocessing",
        "Mean of Data Matrix",
        "Column Standardization",
        "Covariance of Data Matrix",
        "MNIST Dataset",
        "PCA (Principal Component Analysis) for Dimensionality Reduction",
        "Limitations of PCA",
        "t-SNE for Dimensionality Reduction"
      ],
      "className": "milestone-3"
    }
    ,
    {
      "id": 12,
      "title": "Text-Focused Data Preprocessing",
      "content": [
        "Preprocessing Dataset",
        "Data Cleaning",
        "Convert Text to Vector",
        "Bag of Words",
        "Stemming",
        "TF-IDF",
        "Word2Vec"
      ],
      "className": "milestone-4"
    },
    {
      "id": 13,
      "title": "Python Visualizations and Microcontroller Case Study",
      "content": [
        "Matplotlib Introduction",
        "Plotting Various Types of Graphs (Scatter Plot, Line Plot, Histogram, etc.)",
        "I2C and On-Chip EEPROM",
        "Watchdog Timer",
        "Case Study of Microcontroller"
      ],
      "className": "milestone-1"
    },
    {
      "id": 14,
      "title": "Visualization Practicals",
      "content": [
        "Introduction to Iris Dataset",
        "2D Scatter Plots",
        "3D Scatter Plots",
        "Pair Plots",
        "Histograms and Probability Density Function (PDF)",
        "Univariate Analysis Using PDF",
        "Mean, Median, Variance, and Standard Deviation",
        "Cumulative Distribution Function (CDF)",
        "Percentiles and Quantiles",
        "Box Plots with Whiskers",
        "Violin Plots"
      ],
      "className": "milestone-2"
    },
    {
      "id": 15,
      "title": "Supervised Machine Learning Algorithms",
      "content": [
        "Naive Bayes Algorithm for Classification",
        "Logistic Regression",
        "Linear Regression",
        "Gradient Descent Algorithm",
        "Support Vector Machine",
        "Decision Tree Algorithm for Classification",
        "Ensembles",
        "Random Forest",
        "Gradient Boosting",
        "XGBoost and AdaBoost",
        "Classification & Regression in Machine Learning",
        "K-Nearest Neighbor",
        "Time and Space Complexity of K-Nearest Neighbor"
      ],
      "className": "milestone-3"
    },
    {
      "id": 16,
      "title": "Unsupervised Machine Learning Algorithms",
      "content": [
        "Clustering Algorithms",
        "K-Means Algorithm",
        "Agglomerative Clustering",
        "Density-Based Clustering (DBSCAN)"
      ],
      "className": "milestone-4"
    },
    {
      "id": 17,
      "title": "Model Performance Metrics",
      "content": [
        "Accuracy Measure of Classification Algorithm",
        "Accuracy",
        "Confusion Matrix",
        "ROC and AUC Curve",
        "Log-Loss",
        "R-Squared Coefficient of Determination",
        "Median Absolute Deviation (MAD)"
      ],
      "className": "milestone-1"
    },
    {
      "id": 18,
      "title": "Working with Different Types of Datasets",
      "content": [
        "Feature Engineering",
        "Moving Window for Time Series",
        "Fourier Decomposition",
        "Image Histogram",
        "Relational Data",
        "Graph Data",
        "Feature Binning",
        "Feature Slicing"
      ],
      "className": "milestone-2"
    },
    {
      "id": 19,
      "title": "Basics of Deep Learning",
      "content": [
        "Neural Networks and Deep Learning",
        "History of Neural Networks and Comparison with Biological Neurons",
        "Multilayer Perceptron",
        "Training a Single Layer Model",
        "Training MLP Model",
        "Backpropagation",
        "Activation Functions",
        "Vanishing Gradient Problem"
      ],
      "className": "milestone-3"
    },
    {
      "id": 20,
      "title": "Components of Deep Learning",
      "content": [
        "Deep Layer Perceptron",
        "Dropouts",
        "Regularization",
        "ReLU",
        "Optimizer: Hill Descent (2D)",
        "Optimizer: Hill Descent (3D)",
        "SGD",
        "Adam Optimizer Algorithm",
        "Softmax for Multiclass Classification",
        "TensorFlow and Keras",
        "GPU vs CPU",
        "Google Collaboratory"
      ],
      "className": "milestone-4"
    },
    {
      "id": 21,
      "title": "Deep Learning Algorithms",
      "content": [
        "Convolutional Networks",
        "Understanding Visual Cortex",
        "Edge Detection in Images",
        "Padding and Strides",
        "Convolutional Layer",
        "Max Pooling",
        "ImageNet Datasets",
        "AlexNet",
        "VGGNet",
        "Mini Project: Cats vs Dogs",
        "Given an Image of an Animal, Identify Whether It Is an Image of a Dog, Cat, or None"
      ],
      "className": "milestone-1"
    },
    {
      "id": 22,
      "title": "Advanced Deep Learning Algorithms",
      "content": [
        "Recurrent Neural Networks",
        "Training RNN Model by Backpropagation",
        "Types of RNN",
        "LSTM",
        "Deep RNN",
        "Bidirectional RNN"
      ],
      "className": "milestone-2"
    },
    {
      "id": 23,
      "title": "MLOps",
      "content": [
        "APIs",
        "Docker Containers",
        "Hosting"
      ],
      "className": "milestone-3"
    }
  ],
  3: [
    {
      "id": 1,
      "title": "Introduction to DevOps and Agile",
      "content": [
        "Understanding DevOps and Agile Practices",
        "DevOps Lifecycle and Workflow",
        "Key Differences: Agile vs DevOps",
        "Benefits and Business Value"
      ],
      "className": "milestone-1"
    },
    {
      "id": 2,
      "title": "Agile Methodologies and Scrum Framework",
      "content": [
        "Agile Manifesto and Principles",
        "Scrum Framework Overview",
        "Roles: Product Owner, Scrum Master, Development Team",
        "Events: Sprint Planning, Daily Stand-ups, Reviews, Retrospectives",
        "Scrum Artifacts: Product Backlog, Sprint Backlog, Increment"
      ],
      "className": "milestone-2"
    },
    {
      "id": 3,
      "title": "Version Control with Git and GitHub",
      "content": [
        "Basics of Git: Init, Add, Commit",
        "Branching and Merging Strategies",
        "Working with Remote Repositories (GitHub)",
        "Pull Requests and Code Review Process",
        "Git Workflow: Feature Branching, Forking, Rebase"
      ],
      "className": "milestone-3"
    },
    {
      "id": 4,
      "title": "CI/CD Pipeline and Automation",
      "content": [
        "Understanding CI/CD Concepts",
        "Jenkins for Continuous Integration",
        "GitHub Actions for CI/CD Pipelines",
        "Automated Build, Test, and Deploy",
        "Integrating Unit and Integration Testing"
      ],
      "className": "milestone-4"
    },
    {
      "id": 5,
      "title": "Infrastructure as Code (IaC)",
      "content": [
        "Introduction to Infrastructure as Code",
        "Terraform Basics: Providers, Resources, Variables",
        "Creating and Managing Infrastructure on AWS/Azure",
        "Terraform Modules and State Management"
      ],
      "className": "milestone-1"
    },
    {
      "id": 6,
      "title": "Containerization with Docker",
      "content": [
        "Introduction to Docker and Containers",
        "Docker CLI and Dockerfiles",
        "Building and Running Docker Containers",
        "Docker Compose for Multi-Container Apps",
        "Managing Docker Images and Volumes"
      ],
      "className": "milestone-2"
    },
    {
      "id": 7,
      "title": "Container Orchestration with Kubernetes",
      "content": [
        "Introduction to Kubernetes",
        "Kubernetes Architecture and Components",
        "Pods, Deployments, and Services",
        "Managing State with ConfigMaps and Secrets",
        "Helm Charts for Application Deployment"
      ],
      "className": "milestone-3"
    },
    {
      "id": 8,
      "title": "Monitoring, Logging, and Alerting",
      "content": [
        "Importance of Observability in DevOps",
        "Using Prometheus and Grafana for Monitoring",
        "Centralized Logging with ELK Stack",
        "Setting Up Alerts and Notifications",
        "Dashboards for Performance Tracking"
      ],
      "className": "milestone-4"
    },
    {
      "id": 9,
      "title": "Security and Compliance in DevOps",
      "content": [
        "DevSecOps Principles",
        "Integrating Security in CI/CD Pipeline",
        "Security Tools: SonarQube, OWASP ZAP",
        "Compliance Automation and Policy Enforcement"
      ],
      "className": "milestone-1"
    },
    {
      "id": 10,
      "title": "Project and Career Readiness",
      "content": [
        "Capstone Project: End-to-End DevOps Implementation",
        "Resume Building for DevOps Roles",
        "Mock Interviews and Real-time Scenarios",
        "GitHub Portfolio Creation and Optimization"
      ],
      "className": "milestone-2"
    }
  ],
  4: [
    {
      id: 1,
      title: "Introduction to IoT",
      content: [
        "What is IoT?",
        "History and Evolution of IoT",
        "Applications of IoT in Various Domains",
        "Benefits and Challenges of IoT",
        "Future of IoT"
      ],
      className: "milestone-1"
    },
    {
      id: 2,
      title: "IoT Architecture and Ecosystem",
      content: [
        "Four-Stage IoT Architecture",
        "IoT Components: Sensors, Actuators, Gateways, Cloud",
        "Edge vs Cloud Computing in IoT",
        "IoT Communication Models",
        "IoT Network Protocol Stack Overview"
      ],
      className: "milestone-2"
    },
    {
      id: 3,
      title: "IoT Communication Technologies",
      content: [
        "Bluetooth, BLE, ZigBee, Z-Wave",
        "Wi-Fi and Ethernet",
        "Cellular Technologies: 3G, 4G, 5G, NB-IoT",
        "LPWAN Technologies: LoRa, SigFox",
        "IoT Protocols: MQTT, CoAP, HTTP/HTTPS, AMQP"
      ],
      className: "milestone-3"
    },
    {
      id: 4,
      title: "Sensors and Actuators",
      content: [
        "Types of Sensors: Temperature, Light, Proximity, etc.",
        "Types of Actuators: Motors, Relays, etc.",
        "Interfacing Sensors and Actuators with Microcontrollers",
        "Signal Conditioning and ADC/DAC Basics"
      ],
      className: "milestone-4"
    },
    {
      id: 5,
      title: "IoT Hardware Platforms",
      content: [
        "Overview of Arduino and Its Ecosystem",
        "Raspberry Pi for IoT Applications",
        "NodeMCU and ESP32 Boards",
        "Selecting the Right Board for Your IoT Project"
      ],
      className: "milestone-1"
    },
    {
      id: 6,
      title: "IoT Software & Programming",
      content: [
        "Introduction to Arduino IDE",
        "Programming with Python on Raspberry Pi",
        "Firmware Development for IoT Devices",
        "Basic GPIO Programming"
      ],
      className: "milestone-2"
    },
    {
      id: 7,
      title: "IoT Data Management & Cloud Integration",
      content: [
        "Data Acquisition and Storage",
        "Cloud Platforms: AWS IoT, Azure IoT, Google Cloud IoT",
        "Real-Time Data Streaming and Visualization",
        "IoT Dashboards and Analytics Tools"
      ],
      className: "milestone-3"
    },
    {
      id: 8,
      title: "IoT Security and Privacy",
      content: [
        "Common IoT Security Challenges",
        "Data Encryption Techniques for IoT",
        "Secure Communication Protocols",
        "Best Practices for IoT Device Security",
        "Firmware Updates and Patch Management"
      ],
      className: "milestone-4"
    },
    {
      id: 9,
      title: "IoT Project Design and Deployment",
      content: [
        "IoT Solution Design Methodology",
        "Power Management for IoT Devices",
        "Prototyping and Testing",
        "Deployment Strategies",
        "Scalability Considerations"
      ],
      className: "milestone-1"
    },
    {
      id: 10,
      title: "Capstone IoT Projects",
      content: [
        "Smart Home Automation Project",
        "Environmental Monitoring System",
        "IoT-based Health Monitoring System",
        "Smart Agriculture System",
        "Mini Project Presentation & Evaluation"
      ],
      className: "milestone-2"
    }
  ],
  5: [
    {
      id: 1,
      title: "Introduction to Cloud Computing",
      content: [
        "What is Cloud Computing?",
        "History and Evolution of Cloud",
        "Benefits and Challenges of Cloud Computing",
        "Types of Cloud Deployment Models: Public, Private, Hybrid",
        "Cloud Service Models: IaaS, PaaS, SaaS"
      ],
      className: "milestone-1"
    },
    {
      id: 2,
      title: "Cloud Computing Architecture",
      content: [
        "Frontend and Backend of Cloud",
        "Cloud Infrastructure Components",
        "Virtualization and Hypervisors",
        "Multi-Tenancy and Scalability",
        "High Availability and Disaster Recovery"
      ],
      className: "milestone-2"
    },
    {
      id: 3,
      title: "Cloud Service Providers",
      content: [
        "Overview of AWS, Microsoft Azure, and Google Cloud Platform",
        "Service Comparison Across Providers",
        "Free Tiers and Getting Started with Cloud Accounts",
        "Use Cases by Providers"
      ],
      className: "milestone-3"
    },
    {
      id: 4,
      title: "Virtualization and Containers",
      content: [
        "Virtual Machines vs Containers",
        "Introduction to Docker",
        "Using Docker to Containerize Applications",
        "Overview of Kubernetes for Orchestration"
      ],
      className: "milestone-4"
    },
    {
      id: 5,
      title: "Compute Services",
      content: [
        "Amazon EC2, Azure Virtual Machines, Google Compute Engine",
        "Instance Types and Pricing Models",
        "Auto-Scaling and Load Balancing",
        "Hands-on: Deploying a VM in the Cloud"
      ],
      className: "milestone-1"
    },
    {
      id: 6,
      title: "Storage and Databases",
      content: [
        "Cloud Storage Types: Block, Object, File",
        "S3, Azure Blob Storage, Google Cloud Storage",
        "Cloud Databases: RDS, DynamoDB, Firestore",
        "Backup, Archiving, and Data Lifecycle"
      ],
      className: "milestone-2"
    },
    {
      id: 7,
      title: "Networking in Cloud",
      content: [
        "Virtual Private Cloud (VPC)",
        "Subnets, IP Addressing, Route Tables",
        "Security Groups and Network ACLs",
        "Cloud Load Balancers and Gateways"
      ],
      className: "milestone-3"
    },
    {
      id: 8,
      title: "Security and Identity Management",
      content: [
        "Cloud Security Best Practices",
        "IAM: Roles, Policies, and Permissions",
        "Encryption in Transit and at Rest",
        "Monitoring and Logging"
      ],
      className: "milestone-4"
    },
    {
      id: 9,
      title: "Cloud DevOps and CI/CD",
      content: [
        "DevOps Overview in Cloud Environment",
        "CI/CD Pipeline Tools: CodePipeline, Jenkins, GitHub Actions",
        "Infrastructure as Code (IaC): Terraform and CloudFormation",
        "Monitoring with CloudWatch, Azure Monitor, etc."
      ],
      className: "milestone-1"
    },
    {
      id: 10,
      title: "Cloud Projects and Certification Path",
      content: [
        "Mini Projects: Web Hosting, Serverless App, IoT Backend, etc.",
        "Capstone Project: Multi-Tier Architecture in Cloud",
        "Cloud Certification Roadmap: AWS, Azure, GCP",
        "Final Presentation and Assessment"
      ],
      className: "milestone-2"
    }
  ],
  6: [
    {
      id: 1,
      title: "Introduction to Generative AI",
      content: [
        "What is Generative AI?",
        "Evolution from Traditional AI to Generative AI",
        "Applications of Generative AI (Art, Music, Code, Text, etc.)",
        "Ethical Considerations and Bias in Generative Models"
      ],
      className: "milestone-1"
    },
    {
      id: 2,
      title: "Core Concepts of Generative Models",
      content: [
        "Discriminative vs Generative Models",
        "Overview of Generative Algorithms",
        "Types: GANs, VAEs, Transformers",
        "Latent Space and Sampling Methods"
      ],
      className: "milestone-2"
    },
    {
      id: 3,
      title: "Working with Large Language Models (LLMs)",
      content: [
        "Understanding LLMs (e.g., GPT, BERT, LLaMA)",
        "Training Basics: Tokenization, Attention, Transformers",
        "Fine-tuning vs Prompt Engineering",
        "Use Cases: Chatbots, Content Creation, Summarization"
      ],
      className: "milestone-3"
    },
    {
      id: 4,
      title: "Generative Adversarial Networks (GANs)",
      content: [
        "Introduction to GAN Architecture: Generator vs Discriminator",
        "Training Challenges and Solutions (Mode Collapse, etc.)",
        "Variants: DCGAN, CycleGAN, StyleGAN",
        "Hands-on: Creating a GAN for Image Generation"
      ],
      className: "milestone-4"
    },
    {
      id: 5,
      title: "Text Generation and Prompt Engineering",
      content: [
        "Generating Text with GPT",
        "Prompt Engineering Techniques and Tools",
        "Zero-shot, Few-shot, and Chain-of-Thought Prompting",
        "Hands-on: Building AI Content Creator with LLMs"
      ],
      className: "milestone-1"
    },
    {
      id: 6,
      title: "Image, Audio, and Video Generation",
      content: [
        "AI Image Generation Tools: DALL·E, Midjourney, Stable Diffusion",
        "Text-to-Image and Image-to-Image Translation",
        "Voice Cloning and AI Music with Jukebox",
        "Video Synthesis Tools and Applications"
      ],
      className: "milestone-2"
    },
    {
      id: 7,
      title: "Responsible AI and Safety in Generation",
      content: [
        "Bias, Fairness, and Safety in Generative AI",
        "Deepfakes and Misinformation",
        "Content Filtering and Moderation",
        "Regulations and AI Ethics Frameworks"
      ],
      className: "milestone-3"
    },
    {
      id: 8,
      title: "Generative AI APIs and Tools",
      content: [
        "OpenAI, Cohere, Anthropic APIs Overview",
        "Using Hugging Face Transformers and Spaces",
        "Integrating LLMs in Applications",
        "Building with LangChain, Pinecone, and Vector DBs"
      ],
      className: "milestone-4"
    },
    {
      id: 9,
      title: "Projects with Generative AI",
      content: [
        "Mini Projects: AI Poster Generator, Chatbot, Code Assistant",
        "Build Your Own AI Image Generator",
        "AI Story Writer with Voice Narration",
        "Deploying GenAI Projects on Web or Mobile"
      ],
      className: "milestone-1"
    },
    {
      id: 10,
      title: "Trends and Certification",
      content: [
        "Future of Generative AI in Jobs and Industry",
        "AI Certifications to Consider (DeepLearning.AI, OpenAI, etc.)",
        "Final Capstone: Personalized GenAI Project",
        "Showcasing Projects and Portfolio Tips"
      ],
      className: "milestone-2"
    }
  ],
  7: [
    {
      id: 1,
      title: "Introduction to Cyber Security",
      content: [
        "Understanding Cyber Security: Definition and Importance",
        "The CIA Triad: Confidentiality, Integrity, Availability",
        "Types of Cyber Threats: Malware, Phishing, Ransomware, etc.",
        "Cyber Security in the Indian Context"
      ],
      className: "milestone-1"
    },
    {
      id: 2,
      title: "Networking Fundamentals",
      content: [
        "Basics of Networking: LAN, WAN, and Internet",
        "OSI and TCP/IP Models",
        "Common Protocols: HTTP, HTTPS, FTP, DNS, SSH",
        "Firewalls, NAT, and VPNs"
      ],
      className: "milestone-2"
    },
    {
      id: 3,
      title: "Cyber Crimes and Cyber Laws",
      content: [
        "Classification of Cyber Crimes",
        "Cyber Crime Targeting Computers and Mobiles",
        "Cyber Crime Against Individuals and Organizations",
        "Legal Framework: IT Act 2000 and Amendments",
        "Reporting Mechanisms and Legal Remedies"
      ],
      className: "milestone-3"
    },
    {
      id: 4,
      title: "Security Mechanisms and Tools",
      content: [
        "Antivirus and Anti-malware Solutions",
        "Intrusion Detection and Prevention Systems (IDS/IPS)",
        "Encryption Techniques: Symmetric and Asymmetric",
        "Digital Signatures and Certificates"
      ],
      className: "milestone-4"
    },
    {
      id: 5,
      title: "Ethical Hacking and Penetration Testing",
      content: [
        "Introduction to Ethical Hacking",
        "Penetration Testing Phases: Reconnaissance to Reporting",
        "Common Tools: Nmap, Metasploit, Burp Suite",
        "Setting Up a Lab Environment for Practice"
      ],
      className: "milestone-1"
    },
    {
      id: 6,
      title: "Web and Application Security",
      content: [
        "Understanding Web Vulnerabilities: OWASP Top 10",
        "Secure Coding Practices",
        "Authentication and Authorization Mechanisms",
        "Security Testing Tools and Techniques"
      ],
      className: "milestone-2"
    },
    {
      id: 7,
      title: "Data Privacy and Protection",
      content: [
        "Principles of Data Privacy",
        "Data Protection Techniques",
        "Compliance Standards: GDPR, HIPAA, etc.",
        "Privacy by Design and Default"
      ],
      className: "milestone-3"
    },
    {
      id: 8,
      title: "Cyber Security Management and Compliance",
      content: [
        "Risk Assessment and Management",
        "Security Policies and Procedures",
        "Incident Response Planning",
        "Compliance Frameworks and Auditing"
      ],
      className: "milestone-4"
    },
    {
      id: 9,
      title: "Cloud Security Essentials",
      content: [
        "Understanding Cloud Computing Models",
        "Security Challenges in Cloud Environments",
        "Cloud Security Tools and Best Practices",
        "Shared Responsibility Model"
      ],
      className: "milestone-1"
    },
    {
      id: 10,
      title: "Capstone Project and Evaluation",
      content: [
        "Conducting a Security Audit of a Sample System",
        "Identifying and Mitigating Vulnerabilities",
        "Documentation and Reporting",
        "Presentation and Peer Review"
      ],
      className: "milestone-2"
    }
  ],
  8: [
    {
      "id": 1,
      "title": "Introduction to Version Control",
      "content": [
        "What is Version Control?",
        "Benefits of Using Version Control Systems",
        "Difference Between Local and Remote Repositories",
        "Popular Version Control Systems (Git, SVN, etc.)"
      ],
      "className": "milestone-1"
    },
    {
      "id": 2,
      "title": "Getting Started with Git",
      "content": [
        "Installing Git on Your System",
        "Git Configuration (username, email, editor)",
        "Understanding Git Workflow (Working Directory, Staging Area, Repository)",
        "Basic Git Commands: init, add, commit, status, log"
      ],
      "className": "milestone-2"
    },
    {
      "id": 3,
      "title": "Working with Local Repositories",
      "content": [
        "Creating a New Git Repository",
        "Tracking and Untracking Files",
        "Viewing Commit History",
        "Undoing Changes and Git Checkout",
        "Using .gitignore to Ignore Files"
      ],
      "className": "milestone-3"
    },
    {
      "id": 4,
      "title": "Remote Repositories and GitHub",
      "content": [
        "What is GitHub?",
        "Creating a GitHub Account and Repository",
        "Connecting Local Repo to GitHub using SSH/HTTPS",
        "Pushing and Pulling Code",
        "Cloning Repositories"
      ],
      "className": "milestone-4"
    },
    {
      "id": 5,
      "title": "Branching and Merging",
      "content": [
        "What are Branches in Git?",
        "Creating and Switching Branches",
        "Merging Branches",
        "Resolving Merge Conflicts",
        "Using Rebase vs. Merge"
      ],
      "className": "milestone-1"
    },
    {
      "id": 6,
      "title": "Collaborating with GitHub",
      "content": [
        "Understanding Forking and Cloning",
        "Pull Requests and Code Review Process",
        "Using Issues for Bug Tracking and Feature Requests",
        "Creating and Merging Pull Requests",
        "GitHub Discussions and Wiki"
      ],
      "className": "milestone-2"
    },
    {
      "id": 7,
      "title": "Advanced Git Commands",
      "content": [
        "Stashing Changes",
        "Tagging Releases",
        "Cherry Picking Commits",
        "Resetting and Reverting Commits",
        "Working with Git Log and Aliases"
      ],
      "className": "milestone-3"
    },
    {
      "id": 8,
      "title": "Working with Teams and Organizations",
      "content": [
        "Creating GitHub Organizations",
        "Managing Team Members and Roles",
        "Collaborator Permissions",
        "Project Boards and Milestones",
        "Setting Up Branch Protection Rules"
      ],
      "className": "milestone-4"
    },
    {
      "id": 9,
      "title": "GitHub Workflows and Automation",
      "content": [
        "Introduction to GitHub Actions",
        "Creating CI/CD Workflows",
        "Using Pre-built GitHub Actions",
        "Automating Testing, Linting, and Deployments",
        "Using GitHub Secrets for Secure Tokens"
      ],
      "className": "milestone-1"
    },
    {
      "id": 10,
      "title": "Project and Portfolio Management on GitHub",
      "content": [
        "Creating a Professional README",
        "Organizing Repositories",
        "Using GitHub Pages to Host Static Sites",
        "Pinning Repositories on Profile",
        "Showcasing Contributions and Stats"
      ],
      "className": "milestone-2"
    },
    {
      "id": 11,
      "title": "Common Git Issues and Troubleshooting",
      "content": [
        "Fixing Detached HEAD State",
        "Recovering Deleted Commits",
        "Dealing with Merge Conflicts",
        "Authentication Issues with SSH/HTTPS",
        "Reset vs. Revert vs. Checkout"
      ],
      "className": "milestone-3"
    }
  ]
  ,
  9: [
    {
      "id": 1,
      "title": "Introduction to Java Programming",
      "content": [
        "Overview of Java: History and Features",
        "Setting Up Java Development Environment (JDK, IDEs)",
        "Java Syntax: Keywords, Data Types, and Variables",
        "Writing and Running the First Java Program"
      ],
      "className": "milestone-1"
    },
    {
      "id": 2,
      "title": "Control Structures in Java",
      "content": [
        "Decision Making: if, else, switch statements",
        "Loops: for, while, do-while loops",
        "Break and Continue Statements",
        "Nested Loops and Conditional Structures"
      ],
      "className": "milestone-2"
    },
    {
      "id": 3,
      "title": "Object-Oriented Programming (OOP) Concepts",
      "content": [
        "Classes and Objects in Java",
        "Encapsulation: Private and Public Access Modifiers",
        "Inheritance: Extending Classes and Overriding Methods",
        "Polymorphism: Method Overloading and Overriding"
      ],
      "className": "milestone-3"
    },
    {
      "id": 4,
      "title": "Exception Handling",
      "content": [
        "Understanding Exceptions and Errors in Java",
        "Try, Catch, and Finally Blocks",
        "Throw and Throws Keyword",
        "Custom Exception Classes"
      ],
      "className": "milestone-4"
    },
    {
      "id": 5,
      "title": "Java Collections Framework",
      "content": [
        "Introduction to Collections: List, Set, Map",
        "ArrayList, LinkedList, and HashSet",
        "HashMap, TreeMap, and HashTable",
        "Iterating Through Collections"
      ],
      "className": "milestone-1"
    },
    {
      "id": 6,
      "title": "File Handling in Java",
      "content": [
        "Reading from and Writing to Files",
        "Byte Streams and Character Streams",
        "BufferedReader and BufferedWriter",
        "Serialization and Deserialization in Java"
      ],
      "className": "milestone-2"
    },
    {
      "id": 7,
      "title": "Java GUI Development with Swing",
      "content": [
        "Introduction to Swing: JFrame, JPanel, etc.",
        "Creating GUI Components: Buttons, Labels, Text Fields",
        "Event Handling in GUI Applications",
        "Layout Managers and Customizing GUI"
      ],
      "className": "milestone-3"
    },
    {
      "id": 8,
      "title": "Database Connectivity in Java",
      "content": [
        "Introduction to JDBC (Java Database Connectivity)",
        "Connecting Java with MySQL Database",
        "Performing CRUD Operations with JDBC",
        "PreparedStatement and ResultSet"
      ],
      "className": "milestone-4"
    }
  ],
  10: [
    {
      "id": 1,
      "title": "Introduction to Interview Process",
      "content": [
        "Understanding the Importance of Interview Preparation",
        "Types of Interviews: Technical, HR, and Behavioral",
        "Common Interview Questions and How to Answer Them",
        "Importance of Researching the Company"
      ],
      "className": "milestone-1"
    },
    {
      "id": 2,
      "title": "Technical Interview Questions",
      "content": [
        "Coding Challenges: Data Structures and Algorithms",
        "Problem-Solving Approach: Breaking Down the Problem",
        "Common Algorithms: Sorting, Searching, Recursion",
        "Time Complexity and Space Complexity Analysis"
      ],
      "className": "milestone-2"
    },
    {
      "id": 3,
      "title": "System Design Interview",
      "content": [
        "Introduction to System Design Interviews",
        "Designing Scalable Systems: Load Balancing, Caching, Databases",
        "Common Design Patterns: Microservices, Monolithic Architecture",
        "Case Study: Designing a URL Shortening Service"
      ],
      "className": "milestone-3"
    },
    {
      "id": 4,
      "title": "Behavioral Interview Questions",
      "content": [
        "STAR Technique: Structuring Behavioral Answers",
        "Common Behavioral Questions: Strengths, Weaknesses, Conflict Resolution",
        "Handling Stressful Situations and Challenges",
        "How to Discuss Failures and Learnings"
      ],
      "className": "milestone-4"
    },
    {
      "id": 5,
      "title": "Mock Interviews with an Expert",
      "content": [
        "Scheduling and Preparing for a Mock Interview",
        "Receiving Feedback and Areas of Improvement",
        "Real-Time Mock Interview Simulations",
        "How to Handle Pressure in a Mock Interview"
      ],
      "className": "milestone-1"
    },
    {
      "id": 6,
      "title": "Technical Problem-Solving Session",
      "content": [
        "Breaking Down Complex Problems into Manageable Steps",
        "Discussing Multiple Approaches for Problem Solving",
        "Writing Clean and Efficient Code",
        "Handling Edge Cases and Constraints"
      ],
      "className": "milestone-2"
    },
    {
      "id": 7,
      "title": "Post-Interview Etiquette and Follow-up",
      "content": [
        "How to Send a Thank You Email",
        "Handling Multiple Job Offers and Negotiation",
        "Analyzing Your Performance After the Interview",
        "When and How to Follow Up on the Interview"
      ],
      "className": "milestone-3"
    },
    {
      "id": 8,
      "title": "Final Interview Evaluation and Feedback",
      "content": [
        "Collecting Feedback from the Interviewer",
        "Identifying Strengths and Areas for Improvement",
        "Evaluating the Overall Interview Experience",
        "Planning for Future Interviews Based on Feedback"
      ],
      "className": "milestone-4"
    }
  ],
  11: [
    {
      "id": 1,
      "title": "Digital Productivity & MS Office Fundamentals",
      "content": [
        "Understanding Digital Productivity and Workplace Skills",
        "Introduction to Microsoft Office: Word, Excel, and PowerPoint",
        "File and Folder Management, Cloud Storage, and Document Organization",
        "Keyboard Shortcuts, Productivity Techniques, and Efficient Workflows",
        "Working with Templates, Themes, and Professional Formatting Standards"
      ],
      "className": "milestone-1"
    },

    {
      "id": 2,
      "title": "MS Word – Professional Documents",
      "content": [
        "Creating and Formatting Professional Documents",
        "Page Layout, Styles, Themes, Headers, Footers, and Page Numbers",
        "Tables, Images, Shapes, SmartArt, Text Boxes, and Object Formatting",
        "References: Table of Contents, Footnotes, Citations, and Captions",
        "Mail Merge for Letters, Certificates, Labels, and Bulk Documents",
        "Creating Professional Reports, Resumes, Letters, and Project Documents"
      ],
      "className": "milestone-2"
    },

    {
      "id": 3,
      "title": "MS Word – Advanced Document Management",
      "content": [
        "Advanced Styles, Sections, Columns, and Document Layout",
        "Track Changes, Comments, Reviewing, and Collaborative Editing",
        "Document Protection, Accessibility, and Professional Formatting",
        "Creating Forms, Templates, and Reusable Document Structures",
        "Converting, Sharing, Printing, and Exporting Documents to PDF",
        "Practical Project: Creating a Complete Professional Report"
      ],
      "className": "milestone-3"
    },

    {
      "id": 4,
      "title": "MS Excel – Fundamentals & Formulas",
      "content": [
        "Understanding Workbooks, Worksheets, Rows, Columns, and Cell References",
        "Data Entry, Formatting, Number Formats, and Spreadsheet Organization",
        "Basic Formulas and Functions: SUM, AVERAGE, MIN, MAX, COUNT, and COUNTA",
        "Relative, Absolute, and Mixed Cell References",
        "Logical Functions: IF, AND, OR, IFERROR, and Nested IF",
        "Sorting, Filtering, Find & Replace, and Data Validation",
        "Practical Exercises Using Real-World Business and Student Data"
      ],
      "className": "milestone-4"
    },

    {
      "id": 5,
      "title": "MS Excel – Advanced Data Analysis",
      "content": [
        "Advanced Functions: SUMIF, SUMIFS, COUNTIF, COUNTIFS, AVERAGEIF, and AVERAGEIFS",
        "Lookup Functions: XLOOKUP, VLOOKUP, HLOOKUP, and INDEX-MATCH",
        "Text, Date, Time, and Mathematical Functions",
        "Conditional Formatting and Dynamic Data Highlighting",
        "Charts, Graphs, Sparklines, and Professional Data Visualization",
        "PivotTables, PivotCharts, Slicers, and Interactive Reports",
        "Practical Project: Creating an Interactive Sales or Performance Dashboard"
      ],
      "className": "milestone-1"
    },

    {
      "id": 6,
      "title": "MS Excel – Advanced Productivity & Automation",
      "content": [
        "Cleaning and Preparing Data for Analysis",
        "Excel Tables, Named Ranges, and Dynamic Data Structures",
        "What-If Analysis, Goal Seek, and Scenario-Based Analysis",
        "Introduction to Power Query for Data Import and Transformation",
        "Introduction to Macros and Excel Automation Concepts",
        "Building Automated Reports and Reusable Excel Templates",
        "Practical Project: Automated Business Data Analysis and Reporting"
      ],
      "className": "milestone-2"
    },

    {
      "id": 7,
      "title": "MS PowerPoint – Professional Presentations",
      "content": [
        "Presentation Planning: Audience, Objectives, and Storytelling",
        "Slides, Layouts, Themes, Fonts, Colors, and Design Principles",
        "Working with Images, Icons, Shapes, SmartArt, Tables, and Charts",
        "Animations, Transitions, Morph, and Professional Slide Effects",
        "Creating Infographics, Timelines, Process Diagrams, and Visual Stories",
        "Presenter View, Speaker Notes, Presentation Delivery, and Slide Management",
        "Practical Project: Creating a Professional Business or Academic Presentation"
      ],
      "className": "milestone-3"
    },

    {
      "id": 8,
      "title": "AI Productivity Tools & Prompt Engineering",
      "content": [
        "Introduction to Generative AI and AI-Powered Productivity",
        "Understanding AI Assistants and Their Practical Applications",
        "Prompt Engineering: Writing Clear, Effective, and Structured Prompts",
        "Using AI for Writing, Rewriting, Summarization, Brainstorming, and Research",
        "Using AI to Generate and Explain Excel Formulas and Analyze Data",
        "Using AI to Create Presentation Ideas, Slide Content, and Speaker Notes",
        "Using AI for Emails, Reports, Resumes, Content Creation, and Professional Communication",
        "AI Limitations, Fact-Checking, Privacy, Copyright, and Responsible AI Usage"
      ],
      "className": "milestone-4"
    },

    {
      "id": 9,
      "title": "AI + MS Office Integration & Smart Workflows",
      "content": [
        "Using AI to Improve Word Documents, Reports, and Professional Writing",
        "Using AI with Excel for Formula Generation, Data Analysis, and Insights",
        "Using AI to Transform Data into Summaries, Reports, and Business Insights",
        "Using AI to Design PowerPoint Presentations and Improve Visual Storytelling",
        "Creating AI-Assisted Templates, Checklists, Reports, and Productivity Systems",
        "Combining Word, Excel, PowerPoint, Email, and AI into End-to-End Workflows",
        "Real-World Productivity Scenarios: Save Time, Reduce Repetitive Work, and Improve Accuracy"
      ],
      "className": "milestone-1"
    },

    {
      "id": 10,
      "title": "Capstone Project – Complete Digital Productivity Solution",
      "content": [
        "Understanding and Planning a Real-World Productivity Project",
        "Creating a Professional Word Report with AI-Assisted Content",
        "Building an Excel Dataset, Analysis Sheet, Dashboard, and Business Insights",
        "Creating a PowerPoint Presentation from the Project Data",
        "Using AI to Analyze, Improve, Summarize, and Present Project Outcomes",
        "Integrating Multiple Office Applications into One Complete Workflow",
        "Final Project Presentation and Practical Demonstration",
        "Final Assessment, Performance Evaluation, and Feedback"
      ],
      "className": "milestone-2"
    }
  ],
  12: [
    {
      "id": 1,
      "title": "Advanced Excel Foundations & Professional Workflows",
      "content": [
        "Advanced Excel Interface, Workbook Management & Professional Formatting",
        "Working with Tables, Named Ranges and Structured References",
        "Data Validation, Advanced Sorting, Filtering and Custom Views",
        "Professional Spreadsheet Design, Best Practices and Error Prevention"
      ],
      "className": "milestone-1"
    },
    {
      "id": 2,
      "title": "Advanced Excel Formulas & Functions",
      "content": [
        "Logical Functions: IF, IFS, AND, OR, NOT and Nested Formulas",
        "Conditional Functions: SUMIF, SUMIFS, COUNTIF, COUNTIFS and AVERAGEIFS",
        "Text Functions: LEFT, RIGHT, MID, TEXT, TRIM, CLEAN, CONCAT and TEXTJOIN",
        "Date & Time Functions: TODAY, NOW, DATE, YEAR, MONTH, DAY, EOMONTH and NETWORKDAYS"
      ],
      "className": "milestone-2"
    },
    {
      "id": 3,
      "title": "Lookup, Reference & Dynamic Array Functions",
      "content": [
        "XLOOKUP: Exact Match, Approximate Match and Advanced Lookups",
        "INDEX & MATCH: Flexible Two-Way and Multi-Criteria Lookups",
        "VLOOKUP, HLOOKUP and Choosing the Right Lookup Method",
        "Dynamic Array Functions: FILTER, SORT, UNIQUE, SEQUENCE and SORTBY"
      ],
      "className": "milestone-3"
    },
    {
      "id": 4,
      "title": "Data Cleaning, Transformation & Analysis",
      "content": [
        "Identifying and Handling Missing, Duplicate and Inconsistent Data",
        "Data Cleaning with Text-to-Columns, Flash Fill, Find & Replace and Functions",
        "Working with Large Datasets and Converting Raw Data into Structured Tables",
        "Data Analysis Techniques for Business, Sales, HR and Financial Data"
      ],
      "className": "milestone-4"
    },
    {
      "id": 5,
      "title": "Pivot Tables, Pivot Charts & Advanced Reporting",
      "content": [
        "Creating and Managing Pivot Tables from Large Datasets",
        "Grouping, Filtering, Calculated Fields and Advanced Pivot Analysis",
        "Creating Pivot Charts, Slicers and Timelines",
        "Building Interactive Management Reports and Automated Summaries"
      ],
      "className": "milestone-1"
    },
    {
      "id": 6,
      "title": "Advanced Data Visualization & Interactive Dashboards",
      "content": [
        "Choosing the Right Charts for Different Business Scenarios",
        "Advanced Charts: Combo, Dynamic, KPI and Comparison Charts",
        "Creating Interactive Dashboards with Slicers, Drop-Downs and Dynamic Formulas",
        "Building Professional Sales, Finance, HR and Performance Dashboards"
      ],
      "className": "milestone-2"
    },
    {
      "id": 7,
      "title": "Excel Automation & Productivity Techniques",
      "content": [
        "Automating Repetitive Excel Tasks and Report Preparation",
        "Advanced Conditional Formatting and Dynamic Reporting Techniques",
        "Introduction to Excel Macros and VBA Automation Concepts",
        "Building Reusable Templates and Productivity-Focused Excel Workflows"
      ],
      "className": "milestone-3"
    },
    {
      "id": 8,
      "title": "AI Tools for Excel & Smart Data Analysis",
      "content": [
        "Introduction to Generative AI and Its Role in Excel Productivity",
        "Using AI to Generate, Explain and Troubleshoot Excel Formulas",
        "AI-Assisted Data Cleaning, Analysis, Summarization and Insight Generation",
        "Writing Effective AI Prompts for Excel, Data Analysis and Business Tasks"
      ],
      "className": "milestone-4"
    },
    {
      "id": 9,
      "title": "AI-Powered Reporting, Automation & Business Intelligence",
      "content": [
        "Using AI to Analyze Large Datasets and Identify Trends and Patterns",
        "Generating Automated Business Summaries, Insights and Recommendations",
        "AI-Assisted Dashboard Planning, Report Writing and Presentation Preparation",
        "Combining Excel with AI Tools to Improve Accuracy, Speed and Productivity"
      ],
      "className": "milestone-1"
    },
    {
      "id": 10,
      "title": "Capstone Projects & Job-Ready Excel Skills",
      "content": [
        "Real-World Sales Dashboard with Advanced Excel and AI Insights",
        "Employee Performance and HR Analytics Project",
        "Financial Data Analysis and Management Reporting Project",
        "Final Capstone: Build, Analyze and Present a Complete AI-Powered Excel Solution"
      ],
      "className": "milestone-2"
    }
  ],
  13: [
    {
      "id": 1,
      "title": "Introduction to Python Programming",
      "content": [
        "Introduction to Python and Its Real-World Applications",
        "Installing Python, VS Code, and Setting Up the Development Environment",
        "Understanding Python Syntax, Indentation, Comments, and Code Structure",
        "Writing and Running Your First Python Program",
        "Python Interpreter, Scripts, and Interactive Mode"
      ],
      "className": "milestone-1"
    },

    {
      "id": 2,
      "title": "Python Variables, Data Types & Operators",
      "content": [
        "Variables, Constants, Naming Conventions, and Dynamic Typing",
        "Understanding Numbers, Strings, Booleans, and None",
        "Arithmetic, Assignment, Comparison, Logical, and Bitwise Operators",
        "Type Conversion, Type Checking, and User Input",
        "Building Basic Programs Using Expressions and Operators"
      ],
      "className": "milestone-2"
    },

    {
      "id": 3,
      "title": "Conditional Statements & Loops",
      "content": [
        "Decision Making with if, elif, and else",
        "Nested Conditions and Multiple-Condition Logic",
        "for and while Loops with Practical Examples",
        "break, continue, and pass Statements",
        "Nested Loops, Pattern Programs, and Logic-Building Exercises",
        "Solving Real-World Problems Using Conditions and Iterations"
      ],
      "className": "milestone-3"
    },

    {
      "id": 4,
      "title": "Python Strings & Data Structures",
      "content": [
        "String Indexing, Slicing, Formatting, and Common String Methods",
        "Lists: Creation, Indexing, Slicing, and List Methods",
        "Tuples, Sets, and Dictionaries with Practical Use Cases",
        "Nested Data Structures and Iterating Through Collections",
        "List, Set, and Dictionary Comprehensions",
        "Choosing the Right Data Structure for a Problem"
      ],
      "className": "milestone-4"
    },

    {
      "id": 5,
      "title": "Functions, Modules & Code Reusability",
      "content": [
        "Creating and Calling Functions",
        "Parameters, Arguments, Return Values, and Default Arguments",
        "Variable-Length Arguments: *args and **kwargs",
        "Lambda Functions and Functional Programming Basics",
        "Scope, Local and Global Variables",
        "Importing Modules and Creating Custom Python Modules",
        "Working with Python's Built-in and Standard Library Modules"
      ],
      "className": "milestone-1"
    },

    {
      "id": 6,
      "title": "Object-Oriented Programming in Python",
      "content": [
        "Understanding Classes, Objects, Attributes, and Methods",
        "Constructors and the __init__ Method",
        "Encapsulation, Inheritance, Polymorphism, and Abstraction",
        "Instance, Class, and Static Methods",
        "Magic Methods and Operator Overloading",
        "Designing Reusable and Maintainable Python Applications"
      ],
      "className": "milestone-2"
    },

    {
      "id": 7,
      "title": "File Handling, Exceptions & Debugging",
      "content": [
        "Reading and Writing Text Files in Python",
        "Working with CSV, JSON, and Structured Data Files",
        "Exception Handling with try, except, else, and finally",
        "Raising Custom Exceptions and Creating Robust Programs",
        "Debugging Techniques and Understanding Common Python Errors",
        "Logging, Validation, and Writing Reliable Python Code"
      ],
      "className": "milestone-3"
    },

    {
      "id": 8,
      "title": "Advanced Python & Practical Programming",
      "content": [
        "Iterators, Iterables, and Generators",
        "Decorators and Context Managers",
        "Regular Expressions for Text Processing",
        "Working with Dates, Times, and Time Zones",
        "Virtual Environments and Package Management with pip",
        "Introduction to APIs and Making HTTP Requests",
        "Writing Clean, Modular, and Production-Ready Python Code"
      ],
      "className": "milestone-4"
    },

    {
      "id": 9,
      "title": "Python for Automation, Data & Real-World Applications",
      "content": [
        "Automating Repetitive Tasks with Python",
        "Working with Excel, CSV, and JSON Data",
        "Data Processing, Filtering, Sorting, and Transformation",
        "Web Data Collection and API-Based Data Retrieval",
        "Introduction to Data Analysis with NumPy and Pandas",
        "Creating Practical Automation Scripts and Productivity Tools",
        "Building Real-World Applications from Business Problems"
      ],
      "className": "milestone-1"
    },

    {
      "id": 10,
      "title": "Capstone Projects & Career-Ready Python",
      "content": [
        "Understanding the Software Development Project Lifecycle",
        "Project Planning, Problem Definition, and Solution Design",
        "Building a Complete Python Application from Scratch",
        "Applying Functions, OOP, File Handling, APIs, and Data Structures",
        "Testing, Debugging, Documentation, and Code Optimization",
        "Git and GitHub Basics for Managing Python Projects",
        "Portfolio Development and Presenting Python Projects",
        "Final Capstone Project and Practical Evaluation"
      ],
      "className": "milestone-2"
    }
  ],
  14: [
    {
      "id": 1,
      "title": "Java Fundamentals & Programming Foundations",
      "content": [
        "Introduction to Java and the Java Ecosystem",
        "Installing JDK, Setting Up IntelliJ IDEA/Eclipse and Running Your First Program",
        "Java Program Structure, Syntax, Keywords and Identifiers",
        "Variables, Data Types, Literals and Type Casting",
        "Operators, Expressions and Input/Output",
        "Conditional Statements: if, else-if, switch",
        "Loops: for, while, do-while and Nested Loops",
        "Break, Continue and Practical Control-Flow Problems"
      ],
      "className": "milestone-1"
    },
    {
      "id": 2,
      "title": "Methods, Arrays & String Programming",
      "content": [
        "Methods, Parameters, Return Types and Method Overloading",
        "Scope, Local Variables and Passing Values to Methods",
        "One-Dimensional and Multi-Dimensional Arrays",
        "Array Traversal, Searching, Sorting and Common Array Problems",
        "Strings, String Pool and Immutability",
        "StringBuilder and StringBuffer",
        "Common String Manipulation and Problem-Solving Techniques",
        "Practice Problems: Arrays, Strings and Pattern Programming"
      ],
      "className": "milestone-2"
    },
    {
      "id": 3,
      "title": "Object-Oriented Programming with Java",
      "content": [
        "Understanding Classes, Objects and Object-Oriented Thinking",
        "Constructors, this Keyword and Instance Members",
        "Encapsulation, Access Modifiers and Data Hiding",
        "Inheritance, super Keyword and Method Overriding",
        "Polymorphism: Compile-Time and Runtime Polymorphism",
        "Abstraction Using Abstract Classes and Interfaces",
        "Static, Final and Nested Classes",
        "Designing Real-World Applications Using OOP Principles"
      ],
      "className": "milestone-3"
    },
    {
      "id": 4,
      "title": "Exception Handling & Robust Java Applications",
      "content": [
        "Understanding Errors, Exceptions and Exception Hierarchy",
        "try, catch, finally and Multiple Catch Blocks",
        "throw and throws Keywords",
        "Checked vs Unchecked Exceptions",
        "Creating Custom Exceptions",
        "Exception Propagation and Best Practices",
        "Debugging Java Applications and Reading Stack Traces",
        "Building Reliable Programs Through Defensive Programming"
      ],
      "className": "milestone-4"
    },
    {
      "id": 5,
      "title": "Collections Framework & Generics",
      "content": [
        "Introduction to the Java Collections Framework",
        "List: ArrayList, LinkedList and Vector",
        "Set: HashSet, LinkedHashSet and TreeSet",
        "Map: HashMap, LinkedHashMap, TreeMap and Hashtable",
        "Queue, Deque and PriorityQueue",
        "Iterators, Enhanced for Loop and Collection Traversal",
        "Comparable vs Comparator and Custom Sorting",
        "Generics, Type Safety and Generic Classes/Methods"
      ],
      "className": "milestone-1"
    },
    {
      "id": 6,
      "title": "Modern Java, Functional Programming & Streams",
      "content": [
        "Lambda Expressions and Functional Interfaces",
        "Predicate, Consumer, Supplier and Function Interfaces",
        "Method References and Constructor References",
        "Stream API: filter, map, sorted, distinct and reduce",
        "Collecting, Grouping and Partitioning Stream Data",
        "Optional and Null-Safe Programming",
        "Modern Java Features: var, Records, Switch Expressions and Text Blocks",
        "Writing Clean, Concise and Maintainable Modern Java Code"
      ],
      "className": "milestone-2"
    },
    {
      "id": 7,
      "title": "File Handling, Multithreading & Concurrency",
      "content": [
        "Java I/O Fundamentals and File Operations",
        "Reading and Writing Text and Binary Files",
        "Serialization and Deserialization",
        "Introduction to Threads and the Thread Lifecycle",
        "Creating Threads Using Thread and Runnable",
        "Synchronization, Race Conditions and Thread Safety",
        "ExecutorService, Callable, Future and Thread Pools",
        "Concurrency Utilities, Locks and CompletableFuture"
      ],
      "className": "milestone-3"
    },
    {
      "id": 8,
      "title": "JDBC, SQL & Database Programming",
      "content": [
        "Introduction to Relational Databases and SQL",
        "Database Connectivity Using JDBC",
        "Connecting Java Applications with MySQL/PostgreSQL",
        "CRUD Operations: Create, Read, Update and Delete",
        "PreparedStatement, ResultSet and Parameterized Queries",
        "Transactions, Commit, Rollback and Batch Processing",
        "Connection Management and Database Best Practices",
        "Building a Database-Driven Java Application"
      ],
      "className": "milestone-4"
    },
    {
      "id": 9,
      "title": "Advanced Java & Backend Development",
      "content": [
        "Introduction to Backend Development with Java",
        "HTTP, REST APIs, JSON and Client-Server Architecture",
        "Building RESTful APIs Using Spring Boot",
        "Spring Core: Dependency Injection and Inversion of Control",
        "Spring MVC, Controllers, Services and Repository Architecture",
        "Spring Data JPA, Hibernate and Entity Relationships",
        "API Validation, Exception Handling and Authentication Basics",
        "Building and Testing Production-Ready Backend Services"
      ],
      "className": "milestone-1"
    },
    {
      "id": 10,
      "title": "Industry Project, Testing & Career Readiness",
      "content": [
        "Java Coding Standards, Clean Code and Design Principles",
        "Unit Testing with JUnit and Introduction to Mockito",
        "Git, GitHub and Professional Java Development Workflow",
        "Debugging, Logging and Performance Optimization",
        "Introduction to Design Patterns and SOLID Principles",
        "Capstone Project: Designing and Building a Complete Java Application",
        "Java Technical Interview: DSA, OOP, SQL and Backend Questions",
        "Resume Projects, GitHub Portfolio and Java Developer Career Roadmap"
      ],
      "className": "milestone-2"
    }
  ],
  15: [
    {
      "id": 1,
      "title": "Introduction to Artificial Intelligence & Machine Learning",
      "content": [
        "Understanding Artificial Intelligence, Machine Learning, Deep Learning and Generative AI",
        "Types of Machine Learning: Supervised, Unsupervised and Reinforcement Learning",
        "Real-World Applications of AI/ML Across Industries",
        "AI/ML Career Roadmap and Industry Skill Requirements"
      ],
      "className": "milestone-1"
    },
    {
      "id": 2,
      "title": "Python Programming for AI & ML",
      "content": [
        "Python Fundamentals: Variables, Data Types, Operators and Control Flow",
        "Functions, Modules, Packages, Exception Handling and File Operations",
        "Object-Oriented Programming and Writing Reusable Python Code",
        "Jupyter Notebook, Google Colab and Python Development Environment"
      ],
      "className": "milestone-2"
    },
    {
      "id": 3,
      "title": "Python for Data Analysis",
      "content": [
        "NumPy Arrays, Vectorization and Numerical Computation",
        "Pandas Series, DataFrames and Data Manipulation",
        "Data Filtering, Sorting, Grouping, Merging and Aggregation",
        "Importing and Exporting CSV, Excel, JSON and Database Data"
      ],
      "className": "milestone-3"
    },
    {
      "id": 4,
      "title": "Data Visualization & Exploratory Data Analysis",
      "content": [
        "Data Visualization Fundamentals and Choosing the Right Chart",
        "Matplotlib and Seaborn for Professional Data Visualization",
        "Exploratory Data Analysis: Patterns, Trends and Relationships",
        "Building Insightful EDA Reports from Real-World Datasets"
      ],
      "className": "milestone-4"
    },
    {
      "id": 5,
      "title": "Statistics & Mathematics for Machine Learning",
      "content": [
        "Descriptive Statistics: Mean, Median, Mode, Variance and Standard Deviation",
        "Probability, Distributions, Conditional Probability and Bayes Theorem",
        "Correlation, Covariance, Sampling and Hypothesis Testing",
        "Linear Algebra and Calculus Concepts Behind Machine Learning"
      ],
      "className": "milestone-1"
    },
    {
      "id": 6,
      "title": "Data Preprocessing & Feature Engineering",
      "content": [
        "Handling Missing Values, Duplicates, Inconsistent Data and Outliers",
        "Encoding Categorical Variables and Feature Scaling",
        "Feature Selection, Feature Extraction and Feature Engineering",
        "Building a Complete Machine Learning Data Preparation Pipeline"
      ],
      "className": "milestone-2"
    },
    {
      "id": 7,
      "title": "Machine Learning Fundamentals",
      "content": [
        "Understanding the Machine Learning Workflow from Data to Deployment",
        "Training, Validation and Testing Datasets",
        "Overfitting, Underfitting, Bias, Variance and Generalization",
        "Cross-Validation and Model Evaluation Strategies"
      ],
      "className": "milestone-3"
    },
    {
      "id": 8,
      "title": "Regression & Predictive Modeling",
      "content": [
        "Linear Regression and Multiple Linear Regression",
        "Polynomial Regression and Regularization Techniques",
        "Ridge, Lasso and Elastic Net Regression",
        "Regression Evaluation: MAE, MSE, RMSE and R² Score"
      ],
      "className": "milestone-4"
    },
    {
      "id": 9,
      "title": "Classification Algorithms",
      "content": [
        "Logistic Regression and K-Nearest Neighbors",
        "Decision Trees and Random Forest Classification",
        "Support Vector Machines and Naive Bayes",
        "Classification Evaluation: Accuracy, Precision, Recall, F1-Score and ROC-AUC"
      ],
      "className": "milestone-1"
    },
    {
      "id": 10,
      "title": "Advanced Machine Learning & Ensemble Methods",
      "content": [
        "Bagging, Boosting and Ensemble Learning Concepts",
        "Gradient Boosting, XGBoost and LightGBM",
        "Hyperparameter Tuning with Grid Search and Random Search",
        "Building Optimized Machine Learning Pipelines with Scikit-learn"
      ],
      "className": "milestone-2"
    },
    {
      "id": 11,
      "title": "Unsupervised Learning & Anomaly Detection",
      "content": [
        "K-Means, Hierarchical Clustering and DBSCAN",
        "Principal Component Analysis for Dimensionality Reduction",
        "Customer Segmentation and Pattern Discovery",
        "Anomaly Detection and Real-World Unsupervised Learning Applications"
      ],
      "className": "milestone-3"
    },
    {
      "id": 12,
      "title": "Deep Learning & Neural Networks",
      "content": [
        "Introduction to Neural Networks and Deep Learning",
        "Perceptrons, Layers, Activation Functions and Loss Functions",
        "Forward Propagation, Backpropagation and Gradient Descent",
        "Building Neural Networks using TensorFlow and PyTorch"
      ],
      "className": "milestone-4"
    },
    {
      "id": 13,
      "title": "Advanced Deep Learning",
      "content": [
        "Optimizers, Learning Rate Scheduling and Batch Normalization",
        "Dropout, Regularization and Techniques to Prevent Overfitting",
        "Transfer Learning and Pretrained Deep Learning Models",
        "Training, Validation and Optimization of Deep Learning Models"
      ],
      "className": "milestone-1"
    },
    {
      "id": 14,
      "title": "Computer Vision with AI",
      "content": [
        "Digital Images, Image Processing and Computer Vision Fundamentals",
        "Convolutional Neural Networks and Image Classification",
        "Image Augmentation, Transfer Learning and Feature Extraction",
        "Object Detection Concepts and YOLO-Based Applications"
      ],
      "className": "milestone-2"
    },
    {
      "id": 15,
      "title": "Natural Language Processing",
      "content": [
        "NLP Fundamentals and Text Data Processing",
        "Tokenization, Stopwords, Stemming, Lemmatization and TF-IDF",
        "Text Classification, Sentiment Analysis and Named Entity Recognition",
        "Word Embeddings and Introduction to Transformer-Based NLP"
      ],
      "className": "milestone-3"
    },
    {
      "id": 16,
      "title": "Generative AI & Large Language Models",
      "content": [
        "Understanding Generative AI and Large Language Models",
        "Transformer Architecture, Attention Mechanism and LLM Fundamentals",
        "Prompt Engineering, Few-Shot Learning and Structured Prompting",
        "Building AI-Powered Applications using Modern LLM APIs"
      ],
      "className": "milestone-4"
    },
    {
      "id": 17,
      "title": "LLM Applications, Embeddings & RAG",
      "content": [
        "Understanding Embeddings, Semantic Search and Vector Databases",
        "Retrieval-Augmented Generation Architecture and Workflow",
        "Document Loading, Chunking, Retrieval and Context Management",
        "Building a Production-Style AI Document Question-Answering System"
      ],
      "className": "milestone-1"
    },
    {
      "id": 18,
      "title": "AI Agents & Agentic AI",
      "content": [
        "Understanding AI Agents, Agentic Workflows and Tool Calling",
        "Building Multi-Step AI Workflows with Tools and External Data",
        "Memory, Planning, Reasoning and Task-Oriented AI Systems",
        "Developing AI Agents for Automation and Real-World Business Use Cases"
      ],
      "className": "milestone-2"
    },
    {
      "id": 19,
      "title": "SQL, MLOps & AI Model Deployment",
      "content": [
        "SQL for Data Science: Queries, Joins, CTEs and Window Functions",
        "Building ML APIs using FastAPI and Interactive Apps using Streamlit",
        "Git, GitHub, Docker and Fundamentals of ML Model Deployment",
        "Model Versioning, Monitoring, Pipelines and Production ML Concepts"
      ],
      "className": "milestone-3"
    },
    {
      "id": 20,
      "title": "Industry Projects, Capstone & Career Preparation",
      "content": [
        "End-to-End Projects in Prediction, Recommendation, NLP, Computer Vision and GenAI",
        "Building a Major Capstone Project from Problem Definition to Deployment",
        "GitHub Portfolio, Project Documentation, Resume and LinkedIn Preparation",
        "AI/ML Technical Interviews, Mock Interviews and Career Guidance"
      ],
      "className": "milestone-4"
    }
  ]
};

export default OnlineCourses
