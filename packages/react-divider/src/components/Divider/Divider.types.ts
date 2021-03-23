import * as React from 'react';
import { ComponentProps, ShorthandProps } from '@fluentui/react-utilities';

/**
 * Overrides react declaration of CSSProperties to allow using --divider-* as a valid style
 */
declare module 'react' {
  export interface CSSProperties {
    '--divider-borderMargin'?: string | number;
    '--divider-flexDirection'?: string;
    '--divider-fontColor'?: string;
    '--divider-fontFamily'?: string;
    '--divider-fontSize'?: string | number;
    '--divider-fontWeight'?: string | number;
    '--divider-lineHeight'?: string | number;
    '--divider-borderSize'?: string | number;
    '--divider-borderStyle'?: string;
    '--divider-color'?: string;
  }
}

/**
 * {@docCategory Divider}
 */
export interface DividerProps extends ComponentProps, React.HTMLAttributes<HTMLElement> {
  /**
   * Determines the alignment of the content within the divider.
   * @defaultvalue 'center'
   */
  alignContent?: 'start' | 'end' | 'center';

  /**
   * Predefined visual styles
   * @defaultvalue 'default'
   */
  appearance?: 'default' | 'subtle' | 'brand' | 'strong';

  /**
   * A divider can be classified as important to emphasize its content
   */
  important?: boolean;

  /**
   * Adds a 12px padding to the begining and end of the divider
   */
  inset?: boolean;

  /**
   * A divider can be horizontal (default) or vertical*/
  vertical?: boolean;

  /**
   * Accessibility wrapper for content when presented.
   * A shorthand prop can be a literal, object, or
   * JSX. The `children` prop of the object can be a render function,
   * taking in the original slot component and props.
   */
  wrapper?: ShorthandProps<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * {@docCategory Divider}
 */
export interface DividerState extends DividerProps {
  /**
   * Ref to the root slot
   */
  ref: React.MutableRefObject<HTMLElement>;

  /**
   * The Id created to expose accessability for readers
   */
  labelledById?: string;
}
