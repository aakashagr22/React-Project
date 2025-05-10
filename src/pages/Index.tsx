


import React, { useState } from 'react';
import WebDashboard from '@/components/WebDashboard';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import OnboardingDark from '@/components/OnboardingDark';
import WebForm from '@/components/WebForm';
import StatusBar from '@/components/StatusBar';

const Index: React.FC = () => {
  return (
    <><StatusBar></StatusBar>
    <div className="min-h-screen bg-[#15161a] py-10">
      
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-8">Travel App UI</h1>
        
        <div className="flex justify-center">
          <Sheet>
            <SheetTrigger asChild>
              <div className="cursor-pointer">
                <h2 className="text-xl text-gray-300 text-center mb-4">Click Dashboard to Open Onboarding</h2>
                <WebDashboard />
              </div>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md p-0 bg-transparent border-none">
              <WebForm />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div></>
  );
};

export default Index;
