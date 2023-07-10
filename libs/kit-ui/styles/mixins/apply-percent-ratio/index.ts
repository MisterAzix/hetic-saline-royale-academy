const getPercentRatio = (ratio: number) => {
  return `${(1 / ratio) * 100}%`;
};

export const applyPercentRatio = (defaultRatio: number, ratios?: string) => {
  return defaultRatio ? `${getPercentRatio(defaultRatio)}` : '';
};

// @mixin applyPercentRatios($default, $ratios: null) {
//   padding-bottom: getPercentRatio($default);
//
// @if $ratios {
//   @each $name, $ratio in $ratios {
//     @include from($name) {
//         padding-bottom: getPercentRatio($ratio);
//       }
//     }
//   }
// }
