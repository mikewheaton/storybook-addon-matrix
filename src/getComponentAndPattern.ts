import { StoryContext } from '@storybook/addons';
import { ErrorProps } from './components/Error';
import { MatrixProps } from './components/Matrix';

type CoponentAndPattern = {
  errors: ErrorProps['messages'];
  component?: MatrixProps['component'];
  pattern?: MatrixProps['propsPattern'];
};

export function getComponentAndPattern({ parameters }: StoryContext): CoponentAndPattern {
  const {
    component,
    matrix: { pattern },
  } = parameters;
  const errors: ErrorProps['messages'] = [];
  if (!component) {
    errors.push('Default export component must be present');
  }
  if (!pattern) {
    errors.push('Parameter pattern must be present');
  }
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  if (errors.length !== 0) {
    return { errors };
  }
  return {
    errors,
    component,
    pattern,
  };
}
