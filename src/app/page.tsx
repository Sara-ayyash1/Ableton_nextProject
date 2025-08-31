"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // إعادة التوجيه للصفحة الافتراضية
    router.replace("/About"); // ضع هنا رابط الصفحة التي تريدها
  }, [router]);

  return null; 
}
