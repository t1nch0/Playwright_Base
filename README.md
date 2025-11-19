A robust, scalable test automation framework built with **Playwright** and **TypeScript**, implementing industry best practices for end-to-end testing. Designed for reliability, maintainability, and seamless CI/CD integration.
## 🚀 Features

- **🛠 TypeScript** - Full type safety and enhanced developer experience
- **📄 Page Object Model** - Sustainable and reusable test architecture
- **⚙️ Multi-Environment Ready** - Configured for multiple enviroments with few changes
- **🌐 Cross-Browser Testing** - Support for Chromium, Firefox, WebKit, chrome
- **🔁 CI/CD Pipeline** - Automated testing via GitHub Actions with reports available to downlaod
- **🔁 Winston logger** - Added logger functionality to trace and easy debug once we have issues
- **📊 HTML Reports** - Built-in test execution reporting
- **🎯 Visual Testing** - Screenshot on failure

🔁 CI/CD Pipeline
The framework includes a GitHub Actions workflow that automatically:

✅ Runs test suite on demand

✅ Executes tests across multiple browsers

✅ Generates and uploads HTML test report, logger file 

✅ Provides detailed test execution status 

✅ tags available in CICD to select scenarios

View the latest run: https://github.com/t1nch0/Playwright_Base/actions/workflows/playwright.yml/badge.svg

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/t1nch0/Playwright_Base.git
   cd Playwright_Base
2. **Install dependencies**
bash
npm install
3. **Install Playwright browsers**
bash
npx playwright install
4. **🎯 Running Tests**
Run all tests in headed mode:
bash
npm test

🤝 Contributing
Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

💡 Built with ❤️ by t1nch0 - Senior SDET & Automation Architect  