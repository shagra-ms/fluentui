import { isConformant as baseIsConformant } from '@fluentui/react-conformance';
import makeStylesTests from '@fluentui/react-conformance-make-styles';
import type { IsConformantOptions, TestObject } from '@fluentui/react-conformance';

export function isConformant<TProps = {}>(
  testInfo: Omit<IsConformantOptions<TProps>, 'componentPath'> & { componentPath?: string },
) {
  const defaultOptions: Partial<IsConformantOptions<TProps>> = {
    asPropHandlesRef: true,
    componentPath: module!.parent!.filename.replace('.test', ''),
    // https://github.com/microsoft/fluentui/issues/19522
    skipAsPropTests: true,
    extraTests: makeStylesTests as TestObject<TProps>,
  };

  baseIsConformant(defaultOptions, testInfo);
}
