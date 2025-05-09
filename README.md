![Uploading image.png…]()

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Richdadbtc
## CSS File (styles.css)

Let's create the CSS file for your project:

```css:c%3A%5CUsers%5CUser%5CDesktop%5Cohara%5Cstyles.css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f5f7fb;
    color: #333;
}

.container {
    display: grid;
    grid-template-columns: 220px 1fr 320px;
    min-height: 100vh;
}

/* Sidebar Styles */
.sidebar {
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

.logo {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.logo-icon {
    width: 40px;
    height: 40px;
    background-color: #5b76f7;
    color: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;
    margin-right: 10px;
}

.join-btn {
    background-color: #5b76f7;
    color: white;
    border: none;
    padding: 12px;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    margin-bottom: 30px;
    transition: background-color 0.3s;
}

.join-btn:hover {
    background-color: #4a63d8;
}

.nav-menu {
    list-style: none;
    margin-bottom: auto;
}

.nav-menu li {
    padding: 12px 10px;
    margin-bottom: 5px;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #888;
    transition: background-color 0.3s;
}

.nav-menu li i {
    margin-right: 10px;
    width: 20px;
    text-align: center;
}

.nav-menu li:hover {
    background-color: #f0f3fa;
}

.nav-menu li.active {
    background-color: #f0f3fa;
    color: #5b76f7;
    font-weight: 500;
}

.upgrade-section {
    background-color: #f0f3fa;
    padding: 20px;
    border-radius: 12px;
    text-align: center;
    margin-top: 20px;
}

.folder-icon {
    width: 50px;
    height: 50px;
    background-color: #5b76f7;
    color: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    font-size: 20px;
}

.upgrade-section p {
    font-size: 14px;
    margin-bottom: 15px;
    color: #666;
}

.upgrade-section span {
    font-weight: bold;
}

.upgrade-btn {
    background-color: #5b76f7;
    color: white;
    border: none;
    padding: 8px 20px;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s;
}

.upgrade-btn:hover {
    background-color: #4a63d8;
}

/* Main Content Styles */
.main-content {
    padding: 20px 30px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

.search-bar {
    background-color: white;
    border-radius: 8px;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    width: 300px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.search-bar i {
    color: #888;
    margin-right: 10px;
}

.search-bar input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 14px;
}

.notification {
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.notification i {
    color: #888;
}

.user-profile {
    display: flex;
    align-items: center;
    background-color: white;
    padding: 5px 15px 5px 5px;
    border-radius: 30px;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.user-profile img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover;
}

.user-profile span {
    font-weight: 500;
    margin-right: 10px;
}

.courses-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.tabs {
    display: flex;
}

.tabs span {
    padding: 8px 15px;
    cursor: pointer;
    color: #888;
    position: relative;
}

.tabs span.active {
    color: #5b76f7;
    font-weight: 500;
}

.tabs span.active::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 3px;
    background-color: #5b76f7;
    border-radius: 3px;
}

.course-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 20px;
}

.course-card {
    background-color: #5b76f7;
    border-radius: 15px;
    padding: 20px;
    color: white;
    position: relative;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    height: 200px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.course-card.large {
    grid-column: span 2;
    height: 250px;
}

.course-info {
    position: relative;
    z-index: 2;
}

.course-info h3 {
    font-size: 22px;
    margin-bottom: 5px;
}

.course-info p {
    opacity: 0.8;
    margin-bottom: 15px;
}

.duration {
    background-color: rgba(255, 255, 255, 0.2);
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
}

.play-button {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 2;
    transition: background-color 0.3s;
}

.play-button:hover {
    background-color: rgba(255, 255, 255, 0.3);
}

.course-image {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 60%;
    height: 100%;
    z-index: 1;
    opacity: 0.3;
    overflow: hidden;
}

.course-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.instructor {
    position: absolute;
    bottom: 20px;
    right: 20px;
    z-index: 2;
}

.instructor img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 2px solid white;
    object-fit: cover;
}

/* Right Sidebar Styles */
.right-sidebar {
    background-color: white;
    padding: 30px 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

.progress-section, .upcoming-section, .download-section {
    margin-bottom: 40px;
}

.progress-section h3, .upcoming-section h3, .download-section h3 {
    margin-bottom: 20px;
    font-size: 18px;
    color: #333;
}

.progress-item {
    margin-bottom: 20px;
}

.progress-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.progress-header i {
    width: 30px;
    height: 30px;
    background-color: #f0f3fa;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
}

.progress-title h4 {
    font-size: 16px;
    margin-bottom: 3px;
}

.progress-title p {
    font-size: 12px;
    color: #888;
}

.progress-bar {
    height: 6px;
    background-color: #f0f3fa;
    border-radius: 3px;
    overflow: hidden;
}

.progress {
    height: 100%;
    border-radius: 3px;
}

.task-item {
    display: flex;
    align-items: center;
    background-color: #f0f3fa;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 15px;
}

.task-icon {
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
}

.task-info h4 {
    font-size: 14px;
    margin-bottom: 5px;
}

.task-info p {
    font-size: 12px;
    color: #888;
}

.download-content {
    display: flex;
    background-color: #f0f3fa;
    border-radius: 15px;
    padding: 20px;
    position: relative;
    overflow: hidden;
}

.download-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 2;
}

.download-buttons button {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    border: none;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.3s;
}

.download-buttons button:hover {
    background-color: #e6e9f0;
}

.download-image {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 70%;
    height: 100%;
}

.download-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

/* Responsive Styles */
@media (max-width: 1200px) {
    .container {
        grid-template-columns: 220px 1fr;
    }
    
    .right-sidebar {
        display: none;
    }
}

@media (max-width: 768px) {
    .container {
        grid-template-columns: 1fr;
    }
    
    .sidebar {
        display: none;
    }
    
    .course-cards {
        grid-template-columns: 1fr;
    }
    
    .course-card.large {
        grid-column: span 1;
    }
}/ohara.git# Ohara Learning Platform

A modern, responsive web application for online learning and course management.

## Overview

Ohara is a feature-rich learning platform that allows users to:
- Browse and join various courses
- Track learning progress
- Manage upcoming tasks
- Connect with other learners

## Features

- **Intuitive Dashboard**: Easy navigation through all platform features
- **Course Management**: View ongoing, favorite, and completed courses
- **Progress Tracking**: Visual representation of course completion status
- **Task Management**: Keep track of upcoming course activities
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Font Awesome for icons

## Project Structure
