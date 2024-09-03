import React from 'react';
import ProjectsView from "../../components/projects/ProjectsView";
import {PageSEO} from "../../components/layout/SEO";

const Index = () => {
  return (
      <>
          <PageSEO title={"Chaincue | Privacy"} description={"Chaincue | Projects"}/>
          <header className="bg-white dark:bg-gray-800 shadow">
              <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Chaincue Privacy Policy</h1>
              </div>
          </header>

          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <div className="px-4 py-6 sm:px-0">
                  <div className="bg-white dark:bg-gray-900 overflow-hidden shadow sm:rounded-lg">
                      <div className="p-6">
                          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Privacy Policy</h2>
                          <p className="mb-4 text-gray-800 dark:text-gray-300"><strong>Effective Date</strong>: 03-09-2024</p>
                          <p className="mb-4 text-gray-800 dark:text-gray-300"><strong>Last Updated</strong>: 03-09-2024</p>
                          <p className="mb-4 text-gray-800 dark:text-gray-300">
                              <strong>Chaincue</strong>
                              This Privacy Policy explains how your personal information is handled by our Android app.
                          </p>

                          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">1. Information We Collect</h3>
                          <p className="mb-4 text-gray-800 dark:text-gray-300"><strong>We do not collect or store any personal information about our users.</strong></p>
                          <p className="mb-4 text-gray-800 dark:text-gray-300">We do not collect, store, or log any data regarding your use of the App.
                              This includes but is not limited to:</p>
                          <ul className="list-disc pl-5 mb-4 text-gray-800 dark:text-gray-300">
                              <li><strong>Personal Information</strong>: We do not collect any personal information such
                                  as your name, email address, or contact details.
                              </li>
                              <li><strong>Usage Data</strong>: We do not collect or log information about your device,
                                  IP address, access times, or any other usage data.
                              </li>
                              <li><strong>Cookies and Tracking Technologies</strong>: We do not use cookies or any other
                                  tracking technologies.
                              </li>
                          </ul>

                          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">2. How We Use Your Information</h3>
                          <p className="mb-4 text-gray-800 dark:text-gray-300">Since we do not collect any data, we do not use your information in any
                              way. There are no personal data processing activities related to the use of this App.</p>

                          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">3. Data Security</h3>
                          <p className="mb-4 text-gray-800 dark:text-gray-300">As we do not collect or store any data, there is no risk of data breach or
                              unauthorized access to your personal information.</p>

                          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">4. Changes to This Privacy Policy</h3>
                          <p className="mb-4 text-gray-800 dark:text-gray-300">We may update our Privacy Policy from time to time. Any changes will be
                              effective immediately upon posting the updated policy on this page. We encourage you to
                              review this Privacy Policy periodically for any changes.</p>

                          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">5. Contact Us</h3>
                          <p className="text-gray-800 dark:text-gray-300">If you have any questions or concerns about this Privacy Policy, please contact us at</p>
                      </div>
                  </div>
              </div>
          </main>
      </>
  )
}

export default Index;
