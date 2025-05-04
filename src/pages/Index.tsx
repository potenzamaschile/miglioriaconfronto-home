
import React, { useState } from 'react';
import DesignOne from '@/components/DesignOne';
import DesignTwo from '@/components/DesignTwo';
import { Button } from '@/components/ui/button';

/**
 * Main page component that allows switching between different design variants
 * @returns The main page with design switching functionality
 */
const Index = () => {
  // Track which design is currently active
  const [activeDesign, setActiveDesign] = useState<'design1' | 'design2'>('design1');

  /**
   * Handles switching to a specific design variant
   * @param design - The design variant to switch to
   */
  const handleSwitchDesign = (design: 'design1' | 'design2') => {
    setActiveDesign(design);
  };

  return (
    <div className="min-h-screen">
      {/* Design Switcher Controls */}
      <DesignSwitcher 
        activeDesign={activeDesign} 
        onSwitchDesign={handleSwitchDesign} 
      />
      
      {/* Render the active design component */}
      {activeDesign === 'design1' ? <DesignOne /> : <DesignTwo />}
    </div>
  );
};

/**
 * Interface for the DesignSwitcher component props
 */
interface DesignSwitcherProps {
  activeDesign: 'design1' | 'design2';
  onSwitchDesign: (design: 'design1' | 'design2') => void;
}

/**
 * Component for switching between design variants
 */
const DesignSwitcher: React.FC<DesignSwitcherProps> = ({ 
  activeDesign, 
  onSwitchDesign 
}) => {
  return (
    <div className="fixed top-4 right-4 z-50 bg-white shadow-lg rounded-lg p-2 flex gap-2">
      <Button 
        variant={activeDesign === 'design1' ? 'default' : 'outline'} 
        size="sm"
        onClick={() => onSwitchDesign('design1')}
      >
        Design Pink
      </Button>
      <Button 
        variant={activeDesign === 'design2' ? 'default' : 'outline'} 
        size="sm"
        onClick={() => onSwitchDesign('design2')}
      >
        Design Orange
      </Button>
    </div>
  );
};

export default Index;
