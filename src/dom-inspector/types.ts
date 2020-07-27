import { BlockComponentProps } from 'mic-global';

/**
 * Props of DomInspector component
 */
export interface DomInspectorProps extends BlockComponentProps {
  /**
   * A specific node to inspect
   */
  dom: Node;
}