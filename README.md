# ShareMe

ShareMe is a dynamic and user-friendly image-sharing platform where users can:
- Upload, save, and download images.
- Interact with others by dropping comments on images.
- Explore various categories of images.

## Features

### 1. **Image Management**
- **Upload**: Share your favorite moments by uploading images.
- **Save**: Keep a collection of your favorite images.
- **Download**: Save images to your device for offline use.

### 2. **Social Interaction**
- **Comments**: Engage with the community by commenting on images uploaded by others.

### 3. **Categorization**
- Browse images across multiple categories for an organized and enriching experience.

### 4. **Authentication**
- **Google OAuth**: Secure and seamless authentication to access the dashboard.

## Technology Stack

### 1. **Frontend**
- React.js: Provides a responsive and interactive user interface.

### 2. **Backend**
- Node.js: Handles server-side operations efficiently.

### 3. **Content Management**
- Sanity: Used for schema creation and management. The following schemas have been implemented:
  - **User**: Stores user details.
  - **Pin**: Manages image data and metadata.
  - **PostedBy**: Tracks the uploader of an image.
  - **Comment**: Stores user comments on images.
  - **Save**: Tracks saved images for users.

### 4. **Authentication**
- Google OAuth Cloud Service: Ensures secure access to the dashboard.

## Getting Started

### Prerequisites
- Node.js installed on your system.
- Sanity account for content management.
- Google Cloud account for OAuth configuration.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/AnujIstwal/shareme.git
   ```
2. Navigate to the project directory:
   ```bash
   cd shareme_frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up Sanity schemas and connect your project to the Sanity studio.
5. Configure Google OAuth credentials in your environment variables.

### Running the Application
Start the development server:
```bash
npm start
```
Access the application at `http://localhost:3000`.

## Project Structure
```plaintext
shareme_frontend/
|-- src/
|   |-- components/
|   |-- pages/
|   |-- assets/
|   |-- utils/
|-- sanity/
|-- public/
|-- .env
|-- package.json
|-- README.md
```

## Screenshots
![image](https://github.com/user-attachments/assets/1f4f12cb-8ec2-4410-bb9e-551f5e819c4f)

![image](https://github.com/user-attachments/assets/6a796ffe-3fad-411a-991f-4eb93eb66733)

![image](https://github.com/user-attachments/assets/025490bf-65b7-494f-910c-6c52ed4e9144)

![image](https://github.com/user-attachments/assets/ebb9f140-50e0-44bf-8cee-6136eb29c5b9)





## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add YourFeature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a pull request.



## Contact
For any questions or feedback, please reach out at anujistwal80@example.com.

