
import React, { useState } from 'react';
import DesignOne from '@/components/DesignOne';
import DesignTwo from '@/components/DesignTwo';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [activeDesign, setActiveDesign] = useState<'design1' | 'design2'>('design1');

  return (
    <div className="min-h-screen">
      {/* Design Switcher */}
      <div className="fixed top-4 right-4 z-50 bg-white shadow-lg rounded-lg p-2 flex gap-2">
        <Button 
          variant={activeDesign === 'design1' ? 'default' : 'outline'} 
          size="sm"
          onClick={() => setActiveDesign('design1')}
        >
          Design Navy
        </Button>
        <Button 
          variant={activeDesign === 'design2' ? 'default' : 'outline'} 
          size="sm"
          onClick={() => setActiveDesign('design2')}
        >
          Design Orange
        </Button>
      </div>

      {/* Render active design */}
      {activeDesign === 'design1' ? <DesignOne /> : <DesignTwo />}
    </div>
  );
};

export default Index;
