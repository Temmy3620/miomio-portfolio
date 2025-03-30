//export default function GoogleAdsUserDataSend() {
//  return (
//    <div className="mx-auto max-w-2xl lg:max-w-5xl">
//      <header className="max-w-2xl">
//        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-100">
//          In preparation...
//        </h1>
//      </header>
//    </div>
//  );
//}

export default function GoogleAdsUserDataSend() {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-5xl">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-100">
          Develop a feature to send user data to Google Advertising using the Google Ads API.
        </h1>
        <p className="mt-6 text-base text-zinc-400">
          I have developed a process that sends offline conversion data to Microsoft Advertising using the Microsoft Bing API. This process tracks Bing ads displayed on Microsoft Advertising, where a phone call is triggered after an ad click.
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <h1 className="text-1xl tracking-tight sm:text-3xl text-zinc-100">Technology Stack</h1>
        <p className="mt-6 text-base text-zinc-400">
          Programming languages used (PHP)<br />
          Frameworks and libraries (Guzzle, BEAR.Sunday)<br />
          Cloud Services and APIs (GCP, Google Ads API)<br />
          Development Tools (php-cs-fixer, PHPUnit, PHPStan, PHPMD, PHP_CodeSniffer, Composer, Docker)<br />
          Version Control System (Git, GitHub)<br />
          Communication Tools (Slack)<br />
        </p>
      </div>
      <div className="mt-6 sm:mt-10">
        <h1 className="text-1xl tracking-tight sm:text-3xl text-zinc-100">Responsibilities</h1>
        <p className="mt-6 text-base text-zinc-400">
          Requirements Gathering / Research / Detailed Specification / Development / Deployment / Test
        </p>
      </div>
      <div className="mt-6 sm:mt-10">
        <h1 className="text-1xl tracking-tight sm:text-3xl text-zinc-100">Testing and Debugging</h1>
        <p className="mt-6 text-bold text-white">Unit Test:</p>
        <p className="mt-1 text-base text-zinc-400">
          We insert test data into MongoDB and verify, including logic validation, whether conversion data based on specified parameters is correctly retrieved through the Microsoft Ads API. Specifically, we checked that filtering and time range application function as intended, returning the correct count and data content.
        </p>
        <p className="mt-6 text-bold text-white">Comprehensive Test:</p>
        <p className="mt-1 text-base text-zinc-400">
          In the tests, we verified the successful transmission of conversion data to Microsoft Advertising under normal conditions, with variations in conversion count and conversion value. Additionally, we conducted failure scenario tests, including cases where the access token retrieval fails and cases where the conversion transmission itself fails.
        </p>
      </div>
      <div className="mt-6 sm:mt-10">
        <h1 className="text-1xl tracking-tight sm:text-3xl text-zinc-100">Results and Outcomes</h1>
        <p className="mt-6 text-base text-zinc-400">
          By enabling the client to send offline conversion data to Microsoft Advertising, they can measure how much their online ads contribute to phone purchases and inquiries. This provides a comprehensive understanding of ad effectiveness, allowing for more precise optimization of retargeting and targeting strategies. Consequently, the client can enhance ROI and build more effective marketing strategies.
        </p>
      </div>
    </div>
  );
}
