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

"use client";

import { useLocale } from '@/components/LocaleProvider';

export default function GoogleAdsUserDataSend() {
  const { locale } = useLocale();
  return (
    <div className="mx-auto max-w-2xl lg:max-w-5xl">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-100">
          {locale === 'ja' ? 'Google Ads API を用いて、ユーザーデータを Google 広告へ送信する機能を開発' : 'Develop a feature to send user data to Google Advertising using the Google Ads API.'}
        </h1>
        <p className="mt-6 text-base text-zinc-400">
          {locale === 'ja' ? 'Microsoft Bing API を活用し、Microsoft Advertising にオフラインコンバージョンデータを送信する処理を構築しました。広告クリックを起点とした電話発信イベントなどを計測対象としています。' : 'I have developed a process that sends offline conversion data to Microsoft Advertising using the Microsoft Bing API. This process tracks Bing ads displayed on Microsoft Advertising, where a phone call is triggered after an ad click.'}
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <h1 className="text-1xl tracking-tight sm:text-3xl text-zinc-100">{locale === 'ja' ? '技術スタック' : 'Technology Stack'}</h1>
        <p className="mt-6 text-base text-zinc-400">
          {locale === 'ja' ? '使用言語 (PHP)' : 'Programming languages used (PHP)'}<br />
          Frameworks and libraries (Guzzle, BEAR.Sunday)<br />
          {locale === 'ja' ? 'クラウド・API (GCP, Google Ads API)' : 'Cloud Services and APIs (GCP, Google Ads API)'}<br />
          Development Tools (php-cs-fixer, PHPUnit, PHPStan, PHPMD, PHP_CodeSniffer, Composer, Docker)<br />
          Version Control System (Git, GitHub)<br />
          Communication Tools (Slack)<br />
        </p>
      </div>
      <div className="mt-6 sm:mt-10">
        <h1 className="text-1xl tracking-tight sm:text-3xl text-zinc-100">{locale === 'ja' ? '担当領域' : 'Responsibilities'}</h1>
        <p className="mt-6 text-base text-zinc-400">
          {locale === 'ja' ? '要件整理 / 技術調査 / 詳細設計 / 実装 / デプロイ / テスト' : 'Requirements Gathering / Research / Detailed Specification / Development / Deployment / Test'}
        </p>
      </div>
      <div className="mt-6 sm:mt-10">
        <h1 className="text-1xl tracking-tight sm:text-3xl text-zinc-100">{locale === 'ja' ? 'テストとデバッグ' : 'Testing and Debugging'}</h1>
        <p className="mt-6 text-bold text-white">{locale === 'ja' ? '単体テスト:' : 'Unit Test:'}</p>
        <p className="mt-1 text-base text-zinc-400">
          {locale === 'ja' ? 'MongoDB にテストデータを投入し、Microsoft Ads API を通じて、指定したパラメータに基づくコンバージョンデータが正しく取得できるか（ロジック検証を含む）を確認しました。フィルタや期間指定が意図通りに作用し、件数や内容が正しいことを検証しています。' : 'We insert test data into MongoDB and verify, including logic validation, whether conversion data based on specified parameters is correctly retrieved through the Microsoft Ads API. Specifically, we checked that filtering and time range application function as intended, returning the correct count and data content.'}
        </p>
        <p className="mt-6 text-bold text-white">{locale === 'ja' ? '総合テスト:' : 'Comprehensive Test:'}</p>
        <p className="mt-1 text-base text-zinc-400">
          {locale === 'ja' ? '正常系では、コンバージョン件数や金額のバリエーションを含め、Microsoft Advertising へのデータ送信が成功することを確認しました。あわせて、アクセストークン取得失敗や送信失敗などの異常系もテストしています。' : 'In the tests, we verified the successful transmission of conversion data to Microsoft Advertising under normal conditions, with variations in conversion count and conversion value. Additionally, we conducted failure scenario tests, including cases where the access token retrieval fails and cases where the conversion transmission itself fails.'}
        </p>
      </div>
      <div className="mt-6 sm:mt-10">
        <h1 className="text-1xl tracking-tight sm:text-3xl text-zinc-100">{locale === 'ja' ? '成果' : 'Results and Outcomes'}</h1>
        <p className="mt-6 text-base text-zinc-400">
          {locale === 'ja' ? 'オフラインコンバージョンを Microsoft Advertising へ送信できるようにしたことで、オンライン広告が電話購入・問い合わせにどの程度寄与したかを可視化できるようになりました。これにより広告効果を総合的に把握し、より精度の高いリターゲティングやターゲティング最適化が可能となり、ROI 向上と効果的なマーケティング戦略の構築に貢献しました。' : 'By enabling the client to send offline conversion data to Microsoft Advertising, they can measure how much their online ads contribute to phone purchases and inquiries. This provides a comprehensive understanding of ad effectiveness, allowing for more precise optimization of retargeting and targeting strategies. Consequently, the client can enhance ROI and build more effective marketing strategies.'}
        </p>
      </div>
    </div>
  );
}
