# MT5 AI Bot Creator 🤖📈

An AI-powered MQL5 Trading Bot Generator built with **Next.js**, **React**, and the **Google Gemini API**. This application empowers traders and developers to generate complex MetaTrader 5 trading algorithms (Expert Advisors) automatically by defining custom strategies through a modern user interface.

![Tech Stack](https://img.shields.io/badge/Next.js-Black?style=flat&logo=next.js)
![Tech Stack](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Tech Stack](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![AI](https://img.shields.io/badge/Google_Gemini-AI-orange?style=flat)

## 🚀 Key Features

- **Generative AI Integration**: Leverages Google Gemini to interpret natural language trading strategies and generate accurate, compilable MQL5 code.
- **Advanced Technical Indicators**: Built-in logic and templates for advanced multi-indicator strategies (e.g., Bollinger Bands + RSI combinations) targeting high-probability trade setups.
- **Interactive UI/UX**: A seamless, modern frontend designed to easily input parameters, risk management rules, and lot sizing.
- **Immediate Code Output**: Generates `.mq5` compliant scripts that can be immediately copied and compiled directly in MetaEditor for MetaTrader 5.
- **Fallback API Mocking**: Includes a sophisticated demo mock system with functional MQL5 structures (like the 95% win-rate targeted Bollinger+RSI strategy) specifically designed to bypass LLM rate limits during testing.

## 🛠 Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **AI Service**: Google Gemini API
- **Target Output**: MQL5 (MetaQuotes Language 5)

## 📦 Getting Started

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.x or newer)
- MetaTrader 5 (to compile and run the generated bots)
- A valid Google Gemini API Key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bekolibey/mt5-ai-bot-creator.git
   cd mt5-ai-bot-creator
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up the environment variables:
   Create a `.env.local` file in the root of the project and add your Gemini API Key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 💡 Usage Example
1. Enter your specific strategy in the prompt (e.g., "Create a bot that buys when RSI is below 30 and price touches the lower Bollinger Band").
2. Adjust your risk metrics (Stop Loss, Take Profit, Trailing Stop).
3. Click "Generate Bot".
4. Copy the outputted `.mq5` code, paste it into your MetaEditor, compile it, and attach it to your MT5 chart.

## 📝 License
This project is for educational and experimental purposes. Always practice strict risk management and backtest thoroughly in a demo environment before using any generated bot in live markets.
