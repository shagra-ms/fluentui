import { shorthands } from '@fluentui/react-make-styles';
import type { MakeStylesStyleRule } from '@fluentui/react-make-styles';
import type { Theme } from '@fluentui/react-theme';

/**
 * Helper that creates a makeStyles rule for an arrow element.
 * For runtime arrow size toggling simply create extra classnames to apply to the arrow element
 *
 * ```ts
 *   makeStyles({
 *     arrowWithSize: createArrowStyles(5),
 *
 *     arrowWithoutSize: createArrowStyles(),
 *     mediumArrow: { aspectRatio: 1, width: '4px' }
 *     smallArrow: { aspectRatio: 1, width: '2px' }
 *   })
 *   ...
 *
 *   state.arrowWithSize.className = styles.arrowWithSize
 *   state.arrowWithoutSize.className = mergeClasses(
 *     styles.arrowWithoutSize,
 *     state.smallArrow && styles.smallArrow,
 *     state.mediumArrow && styles.mediumArrow,
 *   )
 * ```
 *
 * @param size - dimensions of the square arrow element in pixels.
 */
export function createArrowStyles(size?: number): MakeStylesStyleRule<Theme> {
  return theme => ({
    position: 'absolute',
    backgroundColor: 'inherit',
    visibility: 'hidden',
    zIndex: -1,

    ...(size && {
      aspectRatio: '1',
      width: `${size}px`,
    }),

    ':before': {
      content: '""',
      ...shorthands.borderRadius('4px'),
      position: 'absolute',
      width: 'inherit',
      height: 'inherit',
      backgroundColor: 'inherit',
      visibility: 'visible',
      borderBottomRightRadius: theme.borderRadiusSmall,
      transform: 'rotate(var(--angle)) translate(0, 50%) rotate(45deg)',
    },

    ':global([data-popper-placement])': {
      ':before': {
        // Special border for High Contrast mode
        ...shorthands.borderRight('1px', 'solid', 'transparent'),
        ...shorthands.borderBottom('1px', 'solid', 'transparent'),
      },
    },

    // Popper sets data-popper-placement on the root element, which is used to align the arrow
    ':global([data-popper-placement^="top"])': {
      bottom: 0,
      '--angle': '0',
    },

    ':global([data-popper-placement^="right"])': {
      left: '0 /* @noflip */',
      '--angle': '90deg',
    },
    ':global([data-popper-placement^="bottom"])': {
      top: 0,
      '--angle': '180deg',
    },
    ':global([data-popper-placement^="left"])': {
      right: '0 /* @noflip */',
      '--angle': '270deg',
    },
  });
}
