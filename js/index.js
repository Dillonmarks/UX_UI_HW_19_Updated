// download.js

document.querySelector('.macbook-pro .download-resume').addEventListener('click', function() {
    // Assuming the resume file URL is 'your-resume-file.pdf'
    const resumeUrl = 'your-resume-file.pdf';
    
    // Create an anchor element to trigger the download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'your-resume.pdf'; // You can set the desired file name
    link.click();
  });
  