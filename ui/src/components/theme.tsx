import { createContext, useContext, useEffect, useState } from 'react';
import { Theme } from '../types/types';

const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  useEffect(() => {
    switch (theme) {
      case 'light': {
        document.documentElement.style.setProperty('--background-color', `var(--background-color-${theme}-theme)`);
        document.documentElement.style.setProperty('--font-color', `var(--font-color-${theme}-theme)`);
        document.documentElement.style.setProperty('--icon-background-color-hover', `var(--icon-background-color-hover-${theme}-theme)`);
        document.documentElement.style.setProperty('--modal-background-color', `var(--modal-background-color-${theme}-theme)`);
        document.documentElement.style.setProperty('--modal-boxshadow', `var(--modal-boxshadow-${theme}-theme)`);
        document.documentElement.style.setProperty('--modal-lang-border', `var(--modal-lang-border-${theme}-theme)`);
        document.documentElement.style.setProperty('--modal-lang-border-hover', `var(--modal-lang-border-hover-${theme}-theme)`);
        document.documentElement.style.setProperty('--form-background-color', `var(--form-background-color-${theme}-theme)`);
        document.documentElement.style.setProperty('--textbox-background-color', `var(--textbox-background-color-${theme}-theme)`);
        document.documentElement.style.setProperty('--error', `var(--error-${theme}-theme)`);
        document.documentElement.style.setProperty('--footer-text-hover', `var(--footer-text-hover-${theme}-theme)`);
        break;
      }
      case 'dark': {
        document.documentElement.style.setProperty('--background-color', `var(--background-color-${theme}-theme)`);
        document.documentElement.style.setProperty('--font-color', `var(--font-color-${theme}-theme)`);
        document.documentElement.style.setProperty('--icon-background-color-hover', `var(--icon-background-color-hover-${theme}-theme)`);
        document.documentElement.style.setProperty('--modal-background-color', `var(--modal-background-color-${theme}-theme)`);
        document.documentElement.style.setProperty('--modal-boxshadow', `var(--modal-boxshadow-${theme}-theme)`);
        document.documentElement.style.setProperty('--modal-lang-border', `var(--modal-lang-border-${theme}-theme)`);
        document.documentElement.style.setProperty('--modal-lang-border-hover', `var(--modal-lang-border-hover-${theme}-theme)`);
        document.documentElement.style.setProperty('--form-background-color', `var(--form-background-color-${theme}-theme)`);
        document.documentElement.style.setProperty('--textbox-background-color', `var(--textbox-background-color-${theme}-theme)`);
        document.documentElement.style.setProperty('--error', `var(--error-${theme}-theme)`);
        document.documentElement.style.setProperty('--footer-text-hover', `var(--footer-text-hover-${theme}-theme)`);
        break;
      }
    }
  }, [theme]);

  return toggleTheme;
}

// eslint-disable-next-line
const ThemeContext = createContext<ReturnType<typeof useTheme>>(() => {});

export const ThemeProvider: React.FC<Theme> = (props) => {
  const toggleTheme = useTheme();

  return (
    <ThemeContext.Provider value={toggleTheme}>
      {/* eslint-disable-next-line */}
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useToggleTheme = () => useContext(ThemeContext);