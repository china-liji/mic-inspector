import { createStyles, Styles, EM, UseStyles } from 'mic-global';

/**
 * A method to create property component styles
 * @param className A string represents the class name
 * @param styles An object represetns the component styles
 */
export const createPropertyComponentStyles = (className: string, styles: Styles): UseStyles<string> => {
  return createStyles(
    className,
    {
      fontFamily: 'Menlo, monospace',
      lineHeight: EM.M5,
      ...styles,
    }
  );
};