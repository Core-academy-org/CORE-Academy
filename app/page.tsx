'use client';

import { LanguageProvider } from '@/context/LanguageContext';
import CoreAcademy from '@/components/CoreAcademy';

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <CoreAcademy />
      </main>
    </LanguageProvider>
  );
}
