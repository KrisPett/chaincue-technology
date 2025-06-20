import React from "react";
import Button from "./Button";
import Image from "next/image";
// You'll need to replace these with appropriate disaster/news related icons
import aiLogo from "../../assets/image/ai-technology.png";
import newsLogo from "../../assets/image/news-monitoring.png";
import socialMediaLogo from "../../assets/image/social-media.png";
import realtimeLogo from "../../assets/image/realtime-alerts.png";
import globalLogo from "../../assets/image/global-coverage.png";
import { useRouter } from "next/navigation";

const HomeView = () => {
  const router = useRouter();
  return (
    <div className={"flex flex-col justify-center items-center mt-20"}>
      <article
        className={"flex flex-col w-5/6 lg:w-4/6 2xl:w-3/6 space-y-5 my-20"}
      >
        <h1 className={"text-4xl font-bold text-center mb-8"}>
          The Natural Disaster Post
        </h1>
        <h2 className={"text-2xl font-semibold text-center mb-6"}>
          Stay Informed. Stay Prepared. Stay Connected.
        </h2>

        <p className={"text-lg font-medium"}>
          Breaking News on Natural Disasters - Powered by Advanced AI Technology
        </p>

        <p>
          The Natural Disaster Post is your premier destination for real-time
          coverage of natural disasters and emergency events worldwide. Our
          cutting-edge platform combines artificial intelligence with
          comprehensive news monitoring to deliver accurate, timely, and
          accessible disaster reporting across all major social media platforms.
        </p>

        <div className={"space-y-4"}>
          <h3 className={"text-xl font-semibold"}>
            Why Choose The Natural Disaster Post?
          </h3>

          <div className={"space-y-3"}>
            <p>
              <span className={"font-semibold"}>
                🤖 AI-Powered Intelligence:
              </span>{" "}
              Our advanced AI system continuously scans global news sources,
              analyzing and synthesizing complex disaster information into
              clear, comprehensive articles that keep you informed without the
              noise.
            </p>

            <p>
              <span className={"font-semibold"}>⚡ Real-Time Coverage:</span>{" "}
              From earthquakes and hurricanes to wildfires and floods, we
              deliver breaking disaster news as it happens, ensuring you're
              always ahead of the curve.
            </p>

            <p>
              <span className={"font-semibold"}>🌐 Multi-Platform Reach:</span>{" "}
              Stay connected wherever you are. Our content automatically
              publishes across X (Twitter), YouTube, TikTok, Instagram, and
              Facebook, bringing critical information directly to your preferred
              platform.
            </p>

            <p>
              <span className={"font-semibold"}>📱 Always Accessible:</span>{" "}
              Whether you're an emergency responder, researcher, journalist, or
              concerned citizen, our user-friendly website provides easy access
              to the latest disaster reports, trends, and safety information.
            </p>

            <p>
              <span className={"font-semibold"}>🎯 Categorized Content:</span>{" "}
              Our intelligent system organizes content by disaster type,
              severity, and location, making it easy to find the information
              most relevant to you.
            </p>
          </div>
        </div>

        <div className={"bg-gray-100 p-6 rounded-lg dark:bg-zinc-600"}>
          <h3 className={"text-xl font-semibold mb-3 dark:text-white"}>
            Our Mission
          </h3>
          <p className="dark:text-white">
            In an era where natural disasters are becoming more frequent and
            severe, timely and accurate information can save lives. The Natural
            Disaster Post bridges the gap between raw news data and actionable
            intelligence, transforming complex disaster reporting into
            accessible, shareable content that helps communities stay prepared
            and informed.
          </p>
        </div>

        <div className={"space-y-3"}>
          <h3 className={"text-xl font-semibold"}>What Sets Us Apart</h3>
          <ul className={"space-y-2"}>
            <li>
              <span className={"font-semibold"}>Automated Excellence:</span> Our
              fully automated system ensures 24/7 coverage without human bias or
              delay
            </li>
            <li>
              <span className={"font-semibold"}>Quality Assurance:</span>{" "}
              AI-generated content is carefully structured for accuracy and
              readability
            </li>
            <li>
              <span className={"font-semibold"}>Global Perspective:</span>{" "}
              Comprehensive coverage of disasters worldwide, not just local
              events
            </li>
            <li>
              <span className={"font-semibold"}>Social Media Integration:</span>{" "}
              Seamless distribution across all major platforms for maximum reach
            </li>
          </ul>
        </div>

        <p className={"text-center font-medium text-lg mt-8"}>
          Join thousands of users who trust The Natural Disaster Post for their
          disaster awareness and emergency preparedness needs.
        </p>
      </article>
      <div className={"mt-10 mb-20"}>
        <a href="https://tndp.chaincuet.com/">
          <Button
            onClick={() => router.push("https://tndp.chaincuet.com/")}
            title="View Latest Disaster Reports"
          />
        </a>
      </div>
    </div>
  );
};

export default HomeView;
