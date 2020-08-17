import { BlockComponentProps } from 'mic-global';

/**
 * Props of DomInspector component
 */
export interface DomInspectorProps extends BlockComponentProps {
  /**
   * A specific node to inspect
   */
  dom: Node;

  /**
   * An integer specifying to which level the tree should be initially expanded.
   */
  expandLevel?: number;
}