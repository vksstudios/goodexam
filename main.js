// goodmorning-mailer.js
// Run: node goodmorning-mailer.js

const nodemailer = require("nodemailer");
const fs = require("fs");

// ===============================
// CONFIG
// ===============================
const IMAGE_PATH = "/root/goodexam/image.jpeg";
// ===============================
// EMAIL TRANSPORT
// ===============================
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "srivastava546558624696@gmail.com",
        pass: "rwosyadxklvukdqu"
    }
});

// ===============================
// CHECK IMAGE EXISTS
// ===============================
if (!fs.existsSync(IMAGE_PATH)) {
    console.log("❌ Image not found:", IMAGE_PATH);
    process.exit(1);
}

// ===============================
// EMAIL OPTIONS
// ===============================
const mailOptions = {
    from: '"Your Robot" <srivastava546558624696@gmail.com>',
    to: "soumyasingh.op.icrt@gmail.com",
    subject: "🌞 Good Morning Sunshine!",

    html: `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">

        <style>
            body {
                margin: 0;
                padding: 20px;
                background: #fff7f2;
                font-family: 'Segoe UI', sans-serif;
            }

            .container {
                max-width: 650px;
                margin: auto;
                background: #ffffff;
                border-radius: 25px;
                overflow: hidden;
                box-shadow: 0 12px 35px rgba(0,0,0,0.12);
            }

            .header {
                background: linear-gradient(135deg, #ffb6c1, #ffd580);
                padding: 45px 20px;
                text-align: center;
                color: white;
            }

            .header h1 {
                margin: 0;
                font-size: 40px;
            }

            .header p {
                margin-top: 12px;
                font-size: 18px;
                opacity: 0.95;
            }

            .main-image {
                width: 100%;
                display: block;
            }

            .content {
                padding: 35px;
                text-align: center;
                color: #444;
            }

            .content h2 {
                color: #ff7b9c;
                font-size: 30px;
                margin-bottom: 15px;
            }

            .content p {
                font-size: 17px;
                line-height: 1.8;
            }

            .cute {
                font-size: 22px;
                margin-top: 20px;
            }

            .footer {
                background: #fff0f5;
                text-align: center;
                padding: 18px;
                color: #888;
                font-size: 14px;
            }

        </style>
    </head>

    <body>

        <div class="container">

            <div class="header">
                <h1>🌞 Good Morning 🌸</h1>
                <p>Hope your day starts with smiles & happiness ✨</p>
            </div>

            <!-- EMBEDDED IMAGE -->
            <img src="cid:goodmorningimage" class="main-image" alt="Morning Image">

            <div class="content">

                <h2>Hello Sunshine ☀️</h2>

                <p>
                    Wakey wakey sleepyhead 💖<br><br>

                    Sending you warm hugs, happy vibes,
                    cozy smiles and lots of positivity for today 🌷✨
                </p>

                <p class="cute">
                    Have the cutest and most amazing day ever 🐻💛
                </p>

            </div>

            <div class="footer">
                Made with ☕ + 💖 using Node.js & Nodemailer
            </div>

        </div>

    </body>
    </html>
    `,

    attachments: [
        {
            filename: "image.jpeg",
            path: IMAGE_PATH,
            cid: "goodmorningimage"
        }
    ]
};

// ===============================
// SEND EMAIL
// ===============================
transporter.sendMail(mailOptions, (error, info) => {

    if (error) {
        console.log("❌ Error sending email:");
        console.log(error);
    } else {
        console.log("✅ Email sent successfully!");
        console.log(info.response);
    }

});