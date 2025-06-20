import React from "react";
import { useRouter } from "next/navigation";

interface IButton {
  onClick: () => void;
  title: string;
  className?: string;
}

interface IFeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const Button = ({ onClick, title, className = "" }: IButton) => (
  <button
    onClick={onClick}
    className={`bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${className}`}
  >
    {title}
  </button>
);

const FeatureCard = ({ icon, title, description, delay = 0 }: IFeatureCard) => (
  <div
    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-start space-x-4">
      <div className="text-3xl flex-shrink-0">{icon}</div>
      <div>
        <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
          {title}
        </h4>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const HomeView = () => {
  const router = useRouter();

  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Intelligence",
      description:
        "Advanced AI continuously scans global news sources, analyzing and synthesizing complex disaster information into clear, comprehensive articles.",
    },
    {
      icon: "⚡",
      title: "Real-Time Coverage",
      description:
        "From earthquakes and hurricanes to wildfires and floods, we deliver breaking disaster news as it happens.",
    },
    {
      icon: "🌐",
      title: "Multi-Platform Reach",
      description:
        "Content automatically publishes across X, YouTube, TikTok, Instagram, and Facebook for maximum accessibility.",
    },
    {
      icon: "📱",
      title: "Always Accessible",
      description:
        "User-friendly platform designed for emergency responders, researchers, journalists, and concerned citizens.",
    },
    {
      icon: "🎯",
      title: "Categorized Content",
      description:
        "Intelligent organization by disaster type, severity, and location for easy navigation and relevance.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 dark:from-red-500/5 dark:to-orange-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="inline-flex items-center bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 px-4 py-2 rounded-full text-sm font-medium mb-8">
              🚨 Breaking News on Natural Disasters
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-6">
              The Natural Disaster Post
            </h1>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
              Stay Informed. Stay Prepared. Stay Connected.
            </h2>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Your premier destination for real-time coverage of natural
              disasters and emergency events worldwide, powered by advanced AI
              technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <a href="https://tndp.chaincuet.com/">
                <Button
                  onClick={() => router.push("https://tndp.chaincuet.com/")}
                  title="View Latest Reports"
                  className="text-lg px-10 py-5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose The Natural Disaster Post?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Cutting-edge technology meets comprehensive disaster reporting to
            keep you informed and prepared.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h3>
            <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto opacity-95">
              In an era where natural disasters are becoming more frequent and
              severe, timely and accurate information can save lives. We bridge
              the gap between raw news data and actionable intelligence,
              transforming complex disaster reporting into accessible, shareable
              content that helps communities stay prepared and informed.
            </p>
          </div>
        </div>
      </div>

      {/* What Sets Us Apart */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              What Sets Us Apart
            </h3>
            <div className="space-y-6">
              {[
                {
                  title: "Automated Excellence",
                  description:
                    "Fully automated system ensures 24/7 coverage without human bias or delay",
                },
                {
                  title: "Quality Assurance",
                  description:
                    "AI-generated content is carefully structured for accuracy and readability",
                },
                {
                  title: "Global Perspective",
                  description:
                    "Comprehensive coverage of disasters worldwide, not just local events",
                },
                {
                  title: "Social Media Integration",
                  description:
                    "Seamless distribution across all major platforms for maximum reach",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Trusted by Thousands
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Join thousands of users who rely on The Natural Disaster Post
                for their disaster awareness and emergency preparedness needs.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-red-600">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Coverage
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">
                    Global
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Reach
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">AI</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Powered
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Ahead of the Storm
            </h3>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Don't wait for disaster to strike. Get real-time updates and stay
              prepared with our comprehensive disaster reporting.
            </p>
            <a href="https://tndp.chaincuet.com/">
              <Button
                onClick={() => router.push("https://tndp.chaincuet.com/")}
                title="Access Disaster Reports Now"
                className="text-xl px-12 py-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
