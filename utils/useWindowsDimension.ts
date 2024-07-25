import { useEffect, useState } from 'react';

type WindowDimensions = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const getWindowSizeLabel = (width: number | undefined): WindowDimensions => {
  if (width === undefined) return 'xs';
  if (width >= 2560) return '2xl';
  if (width >= 1920) return 'xl';
  if (width >= 1280) return 'lg';
  if (width >= 960) return 'md';
  if (width >= 600) return 'sm';
  return 'xs';
};

export const useWindowDimensions = (): WindowDimensions => {
  const [windowSize, setWindowSize] = useState<WindowDimensions>('xs');

  useEffect(() => {
    function handleResize(): void {
      setWindowSize(getWindowSizeLabel(window.innerWidth));
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
