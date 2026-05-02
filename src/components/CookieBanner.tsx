import { useEffect, useState } from "react";
import { cookieConfig } from "../config";

type ConsentState = "accepted" | "rejected" | "undecided";

function getConsent(): ConsentState {
  const value = sessionStorage.getItem(cookieConfig.acceptTrackingCookieName);
  if (value === "yes") return "accepted";
  if (value === "no") return "rejected";
  return "undecided";
}

function enableGA() {
  document.querySelectorAll<HTMLScriptElement>("script[data-ga-id]").forEach((el) => {
    if (el.type === "text/plain") {
      el.type = "text/javascript";
      if (el.src) {
        const script = document.createElement("script");
        script.src = el.src;
        script.async = true;
        document.head.appendChild(script);
      }
    }
  });
}

export default function CookieBanner() {
  const [consent, setConsent] = useState<ConsentState>("accepted");

  useEffect(() => {
    const current = getConsent();
    setConsent(current);
    if (current === "accepted") {
      enableGA();
    }
  }, []);

  const accept = () => {
    sessionStorage.setItem(cookieConfig.acceptTrackingCookieName, "yes");
    setConsent("accepted");
    enableGA();
  };

  const reject = () => {
    sessionStorage.setItem(cookieConfig.acceptTrackingCookieName, "no");
    setConsent("rejected");
  };

  if (consent !== "undecided") {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 px-4 pb-4 z-50">
      <div className="pointer-events-auto mx-auto max-w-screen rounded-xl bg-white p-6 ring-1 ring-gray-900/10 dark:bg-gray-900 dark:ring-gray-50/10">
        <p className="text-sm leading-6 text-gray-900 dark:text-gray-50">
          このWebサイトは、サービス利用動向の調査をする為に、
          第三者企業によるクッキー、画像ファイル（ウェブビーコン）などを用い、トラフィックデータの収集を行っています。これらの収集を許可していただけますか？詳細は次のにある規約をご覧ください。
          <a
            href="/privacy-policy"
            className="font-semibold text-primary-600 hover:text-primary-500 underline"
          >
            個人情報保護方針
          </a>
        </p>
        <div className="mt-4 flex items-center justify-end gap-x-5">
          <button
            type="button"
            className="rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
            onClick={accept}
          >
            許可
          </button>
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-700 dark:text-gray-200"
            onClick={reject}
          >
            拒否
          </button>
        </div>
      </div>
    </div>
  );
}
