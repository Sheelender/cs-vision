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
                <Link to='https://classplusapp.com/w/wlp/plbxvb/csvisiondatascience' target="_blank">

                  <span>{val.course}</span>  </Link>

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
  1: [],
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
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  8: [],
  9: [],
  10: []
};

export default OnlineCourses
