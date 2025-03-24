<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feedback Form</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
    <script src="script.js" defer></script>
</head>
<body>

<form id="feedbackForm">
    <h2>Feedback Form</h2>
    <input type="text" name="company_name" placeholder="Company Name" required>
    <select name="satisfaction" required>
        <option value="">Satisfaction (1-5)</option>
        <option value="1">1 - Poor</option>
        <option value="2">2 - Fair</option>
        <option value="3">3 - Good</option>
        <option value="4">4 - Very Good</option>
        <option value="5">5 - Excellent</option>
    </select>
    <textarea name="feedback" placeholder="Your Feedback" rows="4" required></textarea>
    <button type="submit">Submit</button>
</form>

</body>
</html>
