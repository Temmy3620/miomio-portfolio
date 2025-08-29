"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from '@/components/LocaleProvider';

export default function Page() {
  const router = useRouter();
  const { locale } = useLocale();

  useEffect(() => {
    router.push(`/profile?lang=${locale}`);
  }, [router, locale]);

  return (
    <></>
  );
};
