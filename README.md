# 📦 AI Powered Inventory Management System

A scalable and modular AI powered web application built with **Node/Express JS** for managing inventory. It automatically adds and update stock list using YOLOv8 object detection model. It provides stock analysis, smart recommendations and invoice management serivices. 

<br>

## 🚀 Features

- 📷 AI driven CRUD operations on stock list using YOLOv8 object detection model.  
- 📈 Data visualization using charts and graphs for smart analysis.  
- 💬 Smart Recommendations for making smater decisions using **Gemini**.  
- 🧾 Support for Invoice generation.  
- ⚡ Clean, modular and layered architecture.
- 🧑 JWT for user authentication and role-based authorization.
- 🔒 Custom Restful API for object detection protecting user data.

<br>

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/zaidkhatri-dev/AI_Powered_Inventory_Management_System
cd AI_Powered_Inventory_Management_System
```

### 2. Install requirements

```bash
npm install
```

### 3. Create .env file and write 'GEMINI_API_KEY=\<your api key\>'

### 4. Run the server

```bash
npm start
```

### 5. Clone repository (for Computer Vision enabled stock management feature)

```bash
git clone https://github.com/zaidkhatri-dev/Object-Detection-API
cd Object-Detection-API
```

### 6. Run the API

```bash
uvicorn model_api:app --reload --port 5000
```

<br>



## 📌 Technologies Used

- Node/Express - for building the backend.
- HTML/CSS/EJS - for building user interface.
- YOLOv8 - for Object Detection.
- FastAPI - for building custom microservice API.
- Gemini API - for smart recommendations.
- pdfkit - for invoice generation.

<br>

## 📄 License

This project is open-source and available under the MIT License.

<br>

## 📬 Contact

Feel free to contact on [linkedin](https://www.linkedin.com/in/zaid-khatri-dev/) or email at zaidkhatri.work@gmail.com 