
export default function MicrosoftBingApi() {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-5xl">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-100">
          In preparation...
        </h1>
      </header>
    </div>
  );
}
/*
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function MicrosoftBingApi() {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-5xl">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-100">
          Develop a feature to send conversion data to Microsoft Advertising using the Offline Conversion API.
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
          Cloud Services and APIs (Microsoft Azure, Microsoft Bing API)<br />
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
        <h1 className="text-1xl tracking-tight sm:text-3xl text-zinc-100">Implementation Steps</h1>
        <p className="mt-6 text-base text-zinc-400">
          I developed the Offline Conversion API using PHP to enable bulk submission of conversion data to each client’s Microsoft Advertising account. Of course, I also implemented error handling processes.
        </p>
        <div className="flex items-start text-white mt-5">
          <span className="mr-2 text-lg">・</span>
          <span>Get Access Token</span>
        </div>
        <SyntaxHighlighter language="php" style={prism} className="rounded-lg">
          {`

          use GuzzleHttp\Client;
          use GuzzleHttp\Exception\GuzzleException;

          $client = new Client();

          $params = [
            'form_params' => [
                'client_id' => $_ENV['MICROSOFT_ADS_CLIENT_ID'],
                'client_secret' => $_ENV['MICROSOFT_ADS_CLIENT_SECRET'],
                'refresh_token' => $_ENV['MICROSOFT_ADS_REFRESH_TOKEN'],
                'grant_type' => 'refresh_token',
                'scope' => 'https://ads.microsoft.com/msads.manage'
            ]
          ];


          try {
            $response = $client -> post($url, $params);
            $body = $response->getBody()->getContents();
            $data = json_decode($body, true);
            $access_token = $data['access_token'] ?? null;

            if ($access_token) {
              $this -> body['access_token'] = $access_token;
            } else {
              $this -> body['error'] = 'Failed to retrieve access token';
            }
          } catch (GuzzleException $e) {
            $this -> body['error'] = $e->getMessage();
          }

          echo $this -> body['access_token'];

        `}
        </SyntaxHighlighter>
        <div className="flex items-start text-white mt-5">
          <span className="mr-2 text-lg">・</span>
          <span>Send OfflineConvertion</span>
        </div>
        <SyntaxHighlighter language="php" style={prism} className="rounded-lg">
          {`
              use GuzzleHttp\Client;

              $client = new Client();

              $offlineConversionXml = <<<XML
                  <OfflineConversion>
                      <ConversionCurrencyCode i:nil="false">{$_ENV['Currency_Code']}</ConversionCurrencyCode>
                      <ConversionName i:nil="false">{$_ENV['CONVERSION_NAME']}</ConversionName>
                      <ConversionTime>{$_ENV[CONVERSION_TIME]}</ConversionTime>
                      <ConversionValue i:nil="false">{$_ENV['CONVERSION_VALUE']}</ConversionValue>
                      <MicrosoftClickId i:nil="false">{$_ENV['MICROSOFT_CLICK_ID']}</MicrosoftClickId>
                  </OfflineConversion>
          XML;

              $soapRequest = <<<XML
                <s:Envelope xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
                    <s:Header xmlns="https://bingads.microsoft.com/CampaignManagement/v13">
                        <Action mustUnderstand="1">ApplyOfflineConversions</Action>
                        <AuthenticationToken i:nil="false">{$access_token}</AuthenticationToken>
                        <CustomerAccountId i:nil="false">{$_ENV['MICROSOFT_ADS_ACCOUNT_ID']}</CustomerAccountId>
                        <CustomerId i:nil="false">{$_ENV['MICROSOFT_ADS_CUSTOMER_ID']}</CustomerId>
                        <DeveloperToken i:nil="false">{$_ENV['MICROSOFT_ADS_DEVELOPER_TOKEN']}</DeveloperToken>
                    </s:Header>
                    <s:Body>
                        <ApplyOfflineConversionsRequest xmlns="https://bingads.microsoft.com/CampaignManagement/v13">
                            <OfflineConversions i:nil="false">
                                {$offlineConversionXml}
                            </OfflineConversions>
                        </ApplyOfflineConversionsRequest>
                    </s:Body>
                </s:Envelope>
            XML;

              $response = $client->post(
                  $_ENV['CAMPAIGN_MANAGEMENT_ENTRY_POINT'],
                  [
                      'headers' => [
                          'Content-Type' => 'text/xml',
                          'SOAPAction' => 'ApplyOfflineConversions'
                      ],
                      'body' => $soapRequest
                  ]
              );

              echo $response;


          `}
        </SyntaxHighlighter>
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

        </p>
      </div>
    </div>
  );
}
*/
