<script setup lang="ts">
import type { IconSize, IShapeIconProps } from '@/types/icon'
import { computed } from 'vue'

/** Props */
const props = withDefaults(defineProps<IShapeIconProps>(), {
  shape: 'lighting-1',
  size: 'md',
  decorative: true,
  ariaLabel: null,
  title: null
})

/** Data */
const sizeMap: Record<IconSize, number> = {
  xs: 24,
  sm: 32,
  md: 45,
  lg: 64,
  xl: 80
}

/** Computed */
const resolvedSize = computed(() => {
  if (typeof props.size === 'number')
    return props.size

  if (!props.size)
    return sizeMap.md

  return sizeMap[props.size as IconSize] ?? sizeMap.md
})
const ariaHidden = computed(() => (props.decorative ? true : undefined))
const ariaRole = computed(() => (props.decorative ? undefined : 'img'))
const ariaLabel = computed(() => {
  if (props.decorative)
    return undefined

  return props.ariaLabel ?? props.title ?? undefined
})
</script>

<template>
  <div>
    <!-- Lightning -->
    <svg
      v-if="shape === 'lighting-1'"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 200 200"
      :width="resolvedSize"
      :height="resolvedSize"
      :role="ariaRole"
      :aria-hidden="ariaHidden"
      :aria-label="ariaLabel"
      class="coolshapes misc-4"
    >
      <g clip-path="url(#cs_clip_1_misc-4)">
        <mask id="cs_mask_1_misc-4" style="mask-type:alpha" width="137" height="200" x="31" y="0" maskUnits="userSpaceOnUse"><path fill="#fff" d="M82 124H44.017c-9.288 0-15.054-10.119-10.334-18.135l58.26-98.942C99.186-5.377 118-.23 118 14.053V76h37.982c9.288 0 15.054 10.12 10.334 18.135l-58.26 98.942C100.813 205.377 82 200.23 82 185.948V124z" /></mask><g mask="url(#cs_mask_1_misc-4)"><path fill="#fff" d="M200 0H0v200h200V0z" /><path fill="url(#paint0_linear_748_5038)" d="M200 0H0v200h200V0z" /><g filter="url(#filter0_f_748_5038)"><path fill="#18A0FB" d="M216 79H96v135h120V79z" /></g></g></g><defs><filter id="filter0_f_748_5038" width="245" height="260" x="33.5" y="16.5" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix" /><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" /><feGaussianBlur result="effect1_foregroundBlur_748_5038" stdDeviation="31.25" /></filter><linearGradient id="paint0_linear_748_5038" x1="38" x2="119" y1="14.5" y2="181.5" gradientUnits="userSpaceOnUse"><stop stop-color="#FFE500" /><stop offset="1" stop-color="#07FFE1" /></linearGradient><clipPath id="cs_clip_1_misc-4"><path fill="#fff" d="M0 0H200V200H0z" /></clipPath></defs><g style="mix-blend-mode:overlay" mask="url(#cs_mask_1_misc-4)"><path fill="gray" stroke="transparent" d="M200 0H0v200h200V0z" filter="url(#cs_noise_1_misc-4)" /></g><defs><filter id="cs_noise_1_misc-4" width="100%" height="100%" x="0%" y="0%" filterUnits="objectBoundingBox"><feTurbulence baseFrequency="0.6" numOctaves="5" result="out1" seed="4" /><feComposite in="out1" in2="SourceGraphic" operator="in" result="out2" /><feBlend in="SourceGraphic" in2="out2" mode="overlay" result="out3" /></filter></defs>
    </svg>

    <!-- Shapes -->
    <svg
      v-else-if="shape === 'shape-1'"
      :width="resolvedSize"
      :height="resolvedSize"
      :role="ariaRole"
      :aria-hidden="ariaHidden"
      :aria-label="ariaLabel"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_238_1184)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.00242398 200C0.000809232 199.834 0 199.667 0 199.5C0 174.111 18.7366 153.097 43.1371 149.533C18.7701 146.188 0 125.286 0 100C0 72.3858 22.3858 50 50 50H50.5C22.7765 50 0.270718 27.6601 0.00242398 0H199.998C199.729 27.6601 177.224 50 149.5 50H150C177.614 50 200 72.3858 200 100C200 125.286 181.23 146.188 156.863 149.533C181.263 153.097 200 174.111 200 199.5C200 199.667 199.999 199.834 199.998 200H0.00242398Z" fill="url(#paint0_linear_238_1184)" />
      </g>
      <defs>
        <linearGradient id="paint0_linear_238_1184" x1="177" y1="-9.23648e-06" x2="39.5" y2="152.5" gradientUnits="userSpaceOnUse">
          <stop stop-color="#B0B9FF" />
          <stop offset="1" stop-color="#E7E9FF" />
        </linearGradient>
        <clipPath id="clip0_238_1184">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
    <svg
      v-else-if="shape === 'shape-2'"
      :width="resolvedSize"
      :height="resolvedSize"
      :role="ariaRole"
      :aria-hidden="ariaHidden"
      :aria-label="ariaLabel"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_234_854)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M44 0H0V150C0 177.614 22.3858 200 50 200H94V50C94 22.3858 71.6142 0 44 0ZM156 0C128.386 0 106 22.3858 106 50V200H150C177.614 200 200 177.614 200 150V0H156Z" fill="url(#paint0_linear_234_854)" />
      </g>
      <defs>
        <linearGradient id="paint0_linear_234_854" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
          <stop stop-color="#DF99F7" />
          <stop offset="1" stop-color="#FFDBB0" />
        </linearGradient>
        <clipPath id="clip0_234_854">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
    <svg
      v-else-if="shape === 'shape-3'"
      :width="resolvedSize"
      :height="resolvedSize"
      :role="ariaRole"
      :aria-hidden="ariaHidden"
      :aria-label="ariaLabel"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_231_648)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M100 33.6449C92.7738 33.6449 86.9159 39.5028 86.9159 46.729H53.271C53.271 20.9213 74.1923 0 100 0C125.808 0 146.729 20.9213 146.729 46.729C146.729 72.5367 125.808 93.4579 100 93.4579V59.8131C107.226 59.8131 113.084 53.9551 113.084 46.729C113.084 39.5028 107.226 33.6449 100 33.6449ZM166.355 100C166.355 92.7738 160.497 86.9159 153.271 86.9159L153.271 53.271C179.079 53.271 200 74.1923 200 100C200 125.808 179.079 146.729 153.271 146.729C127.463 146.729 106.542 125.808 106.542 100H140.187C140.187 107.226 146.045 113.084 153.271 113.084C160.497 113.084 166.355 107.226 166.355 100ZM46.729 113.084C39.5028 113.084 33.6449 107.226 33.6449 100C33.6449 92.7738 39.5028 86.9159 46.729 86.9159C53.9551 86.9159 59.8131 92.7738 59.8131 100H93.4579C93.4579 74.1923 72.5367 53.271 46.729 53.271C20.9213 53.271 0 74.1923 0 100C0 125.808 20.9213 146.729 46.729 146.729V113.084ZM100 166.355C107.226 166.355 113.084 160.497 113.084 153.271H146.729C146.729 179.079 125.808 200 100 200C74.1923 200 53.271 179.079 53.271 153.271C53.271 127.463 74.1923 106.542 100 106.542L100 140.187C92.7738 140.187 86.9159 146.045 86.9159 153.271C86.9159 160.497 92.7738 166.355 100 166.355Z" fill="url(#paint0_linear_231_648)" />
      </g>
      <defs>
        <linearGradient id="paint0_linear_231_648" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
          <stop stop-color="#B8DBFC" />
          <stop offset="1" stop-color="#F8FBFE" />
        </linearGradient>
        <clipPath id="clip0_231_648">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
    <svg
      v-else-if="shape === 'shape-4'"
      :width="resolvedSize"
      :height="resolvedSize"
      :role="ariaRole"
      :aria-hidden="ariaHidden"
      :aria-label="ariaLabel"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    > <g clip-path="url(#clip0_104_61)"> <path d="M100 200C93.4028 200 87.3264 198.351 81.7708 195.052C76.3889 191.927 72.0486 187.674 68.75 182.292C65.625 176.736 64.0625 170.66 64.0625 164.062C64.0625 155.729 65.9722 148.785 69.7917 143.229C73.6111 137.674 79.5139 131.163 87.5 123.698C93.4028 118.316 96.3542 113.194 96.3542 108.333V103.646H91.6667C86.2847 103.646 78.9062 109.028 69.5312 119.792C60.3299 130.556 49.1319 135.937 35.9375 135.937C29.3403 135.937 23.2639 134.375 17.7083 131.25C12.3264 127.951 7.98611 123.611 4.6875 118.229C1.5625 112.674 0 106.597 0 100C0 93.4028 1.5625 87.4132 4.6875 82.0312C7.98611 76.4757 12.3264 72.1354 17.7083 69.0104C23.2639 65.7118 29.3403 64.0625 35.9375 64.0625C48.9583 64.0625 60.0694 69.3576 69.2708 79.9479C78.4722 90.5382 85.9375 95.8333 91.6667 95.8333H96.3542V91.6667C96.3542 86.8055 93.4028 81.684 87.5 76.3021L81.5104 70.8333C77.1701 66.8403 73.1771 62.066 69.5312 56.5104C65.8854 50.7812 64.0625 43.9236 64.0625 35.9375C64.0625 29.3403 65.625 23.3507 68.75 17.9688C72.0486 12.4132 76.3889 8.07292 81.7708 4.94791C87.3264 1.6493 93.4028 0 100 0C106.597 0 112.587 1.6493 117.969 4.94791C123.524 8.24652 127.865 12.5868 130.99 17.9688C134.288 23.3507 135.937 29.3403 135.937 35.9375C135.937 48.9583 130.642 60.0694 120.052 69.2708C109.462 78.4722 104.167 85.9375 104.167 91.6667V95.8333H108.333C114.236 95.8333 121.701 90.5382 130.729 79.9479C139.583 69.3576 150.694 64.0625 164.063 64.0625C170.66 64.0625 176.649 65.7118 182.031 69.0104C187.587 72.1354 191.927 76.3889 195.052 81.7708C198.351 87.1528 200 93.2292 200 100C200 106.597 198.351 112.674 195.052 118.229C191.927 123.611 187.587 127.951 182.031 131.25C176.649 134.375 170.66 135.937 164.063 135.937C155.903 135.937 148.872 133.941 142.969 129.948C137.24 125.955 130.816 120.139 123.698 112.5C118.316 106.597 113.194 103.646 108.333 103.646H104.167V108.333C104.167 114.757 109.462 122.222 120.052 130.729C130.642 139.236 135.937 150.347 135.937 164.062C135.937 170.66 134.288 176.736 130.99 182.292C127.865 187.674 123.611 191.927 118.229 195.052C112.847 198.351 106.771 200 100 200Z" fill="url(#paint0_linear_104_61)" /> </g> <defs> <linearGradient id="paint0_linear_104_61" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse"> <stop stop-color="#DF99F7" /> <stop offset="1" stop-color="#FFDBB0" /> </linearGradient> <clipPath id="clip0_104_61"> <rect width="200" height="200" fill="white" /> </clipPath> </defs> </svg>

    <!-- Circles -->
    <svg
      v-else-if="shape === 'circle-1'"
      :width="resolvedSize"
      :height="resolvedSize"
      :role="ariaRole"
      :aria-hidden="ariaHidden"
      :aria-label="ariaLabel"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    > <path fill-rule="evenodd" clip-rule="evenodd" d="M32 100.641C32 68.391 54.1651 41.3515 84 34.1102V1.28125C36.3772 8.98855 0 50.5392 0 100.641C0 150.742 36.3772 192.293 84 200V167.171C54.1651 159.93 32 132.89 32 100.641ZM200 100.641C200 150.742 163.623 192.293 116 200V167.171C145.835 159.93 168 132.89 168 100.641C168 68.391 145.835 41.3515 116 34.1102V1.28125C163.623 8.98855 200 50.5392 200 100.641Z" fill="url(#paint0_linear_231_555)" /> <defs> <linearGradient id="paint0_linear_231_555" x1="157.5" y1="33.0763" x2="44.7421" y2="148.561" gradientUnits="userSpaceOnUse"> <stop offset="0.0509862" stop-color="#FFB6E1" /> <stop offset="1" stop-color="#FBE3EA" /> </linearGradient> </defs> </svg>
    <svg
      v-else-if="shape === 'circle-2'"
      :width="resolvedSize"
      :height="resolvedSize"
      :role="ariaRole"
      :aria-hidden="ariaHidden"
      :aria-label="ariaLabel"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    > <g clip-path="url(#clip0_227_43)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M188 100C188 148.601 148.601 188 100 188C51.3989 188 12 148.601 12 100C12 51.3989 51.3989 12 100 12C148.601 12 188 51.3989 188 100ZM200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100ZM100 111C106.075 111 111 106.075 111 100C111 93.9249 106.075 89 100 89C93.9249 89 89 93.9249 89 100C89 106.075 93.9249 111 100 111Z" fill="url(#paint0_linear_227_43)" /> </g> <defs> <linearGradient id="paint0_linear_227_43" x1="157.5" y1="32" x2="44" y2="147.5" gradientUnits="userSpaceOnUse"> <stop offset="0.0509862" stop-color="#FFB6E1" /> <stop offset="1" stop-color="#FBE3EA" /> </linearGradient> <clipPath id="clip0_227_43"> <rect width="200" height="200" fill="white" /> </clipPath> </defs> </svg>
    <svg
      v-else-if="shape === 'circle-3'"
      :width="resolvedSize"
      :height="resolvedSize"
      :role="ariaRole"
      :aria-hidden="ariaHidden"
      :aria-label="ariaLabel"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    > <path fill-rule="evenodd" clip-rule="evenodd" d="M199.06 140.014C199.605 145.51 195.075 150 189.552 150H153.302C147.779 150 143.42 145.463 142.173 140.083C137.681 120.698 120.304 106.25 99.5522 106.25C78.8007 106.25 61.4237 120.698 56.931 140.083C55.6841 145.463 51.325 150 45.8022 150H9.55217C4.02932 150 -0.500355 145.51 0.0445342 140.014C5.0553 89.4741 47.6939 50 99.5522 50C151.41 50 194.049 89.4741 199.06 140.014Z" fill="url(#paint0_linear_104_151)" /> <defs> <linearGradient id="paint0_linear_104_151" x1="156.795" y1="66" x2="111.742" y2="157.282" gradientUnits="userSpaceOnUse"> <stop offset="0.0509862" stop-color="#FFB6E1" /> <stop offset="1" stop-color="#FBE3EA" /> </linearGradient> </defs> </svg>
    <svg
      v-else-if="shape === 'circle-4'"
      :width="resolvedSize"
      :height="resolvedSize"
      :role="ariaRole"
      :aria-hidden="ariaHidden"
      :aria-label="ariaLabel"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    > <g clip-path="url(#clip0_104_157)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M100 200C155.228 200 200 155.228 200 100C200 44.7715 155.228 0 100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200ZM100 143.75C124.162 143.75 143.75 124.162 143.75 100C143.75 75.8375 124.162 56.25 100 56.25C75.8375 56.25 56.25 75.8375 56.25 100C56.25 124.162 75.8375 143.75 100 143.75Z" fill="url(#paint0_linear_104_157)" /> </g> <defs> <linearGradient id="paint0_linear_104_157" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse"> <stop stop-color="#DF99F7" /> <stop offset="1" stop-color="#FFDBB0" /> </linearGradient> <clipPath id="clip0_104_157"> <rect width="200" height="200" fill="white" /> </clipPath> </defs> </svg>

    <!-- Blobs -->
    <svg
      v-else-if="shape === 'blob-1'"
      :width="resolvedSize"
      :height="resolvedSize"
      :role="ariaRole"
      :aria-hidden="ariaHidden"
      :aria-label="ariaLabel"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    > <g clip-path="url(#clip0_221_10)"> <path d="M0 0H100C155.228 0 200 44.7715 200 100V200H100C44.7715 200 0 155.228 0 100V0Z" fill="url(#paint0_linear_221_10)" /> </g> <defs> <linearGradient id="paint0_linear_221_10" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse"> <stop stop-color="#A7B5FF" /> <stop offset="1" stop-color="#F3ACFF" /> </linearGradient> <clipPath id="clip0_221_10"> <rect width="200" height="200" fill="white" /> </clipPath> </defs> </svg>
    <svg
      v-else-if="shape === 'blob-2'"
      :width="resolvedSize"
      :height="resolvedSize"
      :role="ariaRole"
      :aria-hidden="ariaHidden"
      :aria-label="ariaLabel"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    > <g clip-path="url(#clip0_103_21)"> <path d="M71.5579 16.3347C84.3365 -5.4449 115.825 -5.44489 128.603 16.3347L129.067 17.1257C134.963 27.1733 145.709 33.378 157.358 33.4596L158.276 33.466C183.527 33.6428 199.271 60.9123 186.798 82.8687L186.345 83.6661C180.591 93.7953 180.591 106.205 186.345 116.334L186.798 117.131C199.271 139.088 183.527 166.357 158.276 166.534L157.358 166.54C145.709 166.622 134.963 172.827 129.067 182.874L128.603 183.665C115.825 205.445 84.3365 205.445 71.5579 183.665L71.0938 182.874C65.1986 172.827 54.4517 166.622 42.8027 166.54L41.8856 166.534C16.6346 166.357 0.890585 139.088 13.3629 117.131L13.8159 116.334C19.5698 106.205 19.5698 93.7953 13.8159 83.6661L13.3629 82.8687C0.890585 60.9123 16.6346 33.6428 41.8856 33.466L42.8027 33.4596C54.4518 33.378 65.1986 27.1733 71.0938 17.1257L71.5579 16.3347Z" fill="url(#paint0_linear_103_21)" /> </g> <defs> <linearGradient id="paint0_linear_103_21" x1="100.081" y1="0" x2="100.081" y2="200" gradientUnits="userSpaceOnUse"> <stop stop-color="#B8DBFC" /> <stop offset="1" stop-color="#F8FBFE" /> </linearGradient> <clipPath id="clip0_103_21"> <rect width="200" height="200" fill="white" /> </clipPath> </defs> </svg>
    <svg
      v-else-if="shape === 'blob-3'"
      :width="resolvedSize"
      :height="resolvedSize"
      :role="ariaRole"
      :aria-hidden="ariaHidden"
      :aria-label="ariaLabel"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    > <g clip-path="url(#clip0_103_15)"> <path d="M93.6797 5.15479C97.359 2.15401 102.641 2.15401 106.32 5.15479L114.253 11.625C116.75 13.6608 120.074 14.3696 123.183 13.5291L133.039 10.8652C137.616 9.62811 142.432 11.775 144.572 16.0058L149.229 25.2154C150.679 28.0814 153.416 30.0768 156.588 30.5793L166.717 32.184C171.384 32.9234 174.897 36.829 175.139 41.5483L175.672 51.9384C175.836 55.133 177.519 58.0565 180.199 59.8033L188.865 65.452C192.811 68.0247 194.427 73.0033 192.743 77.4035L189.015 87.1465C187.874 90.1271 188.225 93.4731 189.958 96.1526L195.618 104.899C198.175 108.852 197.629 114.053 194.306 117.389L186.976 124.748C184.722 127.011 183.684 130.214 184.184 133.369L185.815 143.668C186.552 148.327 183.933 152.868 179.531 154.564L169.921 158.264C166.93 159.416 164.672 161.931 163.849 165.029L161.188 175.047C159.973 179.623 155.716 182.719 150.989 182.466L140.78 181.92C137.567 181.748 134.468 183.132 132.452 185.639L126.014 193.647C123.04 197.346 117.876 198.445 113.653 196.277L104.567 191.612C101.7 190.141 98.2999 190.141 95.4331 191.612L86.3465 196.277C82.1243 198.445 76.9601 197.346 73.9862 193.647L67.548 185.639C65.5321 183.132 62.433 181.748 59.2203 181.92L49.0111 182.466C44.284 182.719 40.0271 179.623 38.8119 175.047L36.1507 165.029C35.3279 161.931 33.0702 159.416 30.0792 158.264L20.4691 154.564C16.0666 152.868 13.4477 148.327 14.1855 143.668L15.8162 133.369C16.3157 130.214 15.2781 127.011 13.024 124.748L5.69367 117.389C2.37113 114.053 1.82509 108.852 4.38248 104.899L10.0415 96.1526C11.7752 93.4731 12.1257 90.1271 10.9851 87.1465L7.25661 77.4035C5.57276 73.0033 7.18856 68.0247 11.1354 65.452L19.8014 59.8033C22.4812 58.0565 24.1636 55.133 24.3275 51.9384L24.8607 41.5483C25.1029 36.829 28.6155 32.9234 33.2828 32.184L43.4118 30.5793C46.5838 30.0768 49.3214 28.0814 50.7708 25.2154L55.4283 16.0058C57.5679 11.775 62.3844 9.6281 66.9613 10.8652L76.8169 13.5291C79.9264 14.3696 83.2504 13.6608 85.7465 11.625L93.6797 5.15479Z" fill="url(#paint0_linear_103_15)" /> </g> <defs> <linearGradient id="paint0_linear_103_15" x1="177" y1="-9.23648e-06" x2="39.5" y2="152.5" gradientUnits="userSpaceOnUse"> <stop stop-color="#B0B9FF" /> <stop offset="1" stop-color="#E7E9FF" /> </linearGradient> <clipPath id="clip0_103_15"> <rect width="200" height="200" fill="white" /> </clipPath> </defs> </svg>
    <svg
      v-else-if="shape === 'blob-4'"
      :width="resolvedSize"
      :height="resolvedSize"
      :role="ariaRole"
      :aria-hidden="ariaHidden"
      :aria-label="ariaLabel"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    > <path d="M0 47.4235C0 38.0237 6.53608 29.9057 15.7703 28.1488C36.4827 24.2081 73.3424 18 100 18C126.658 18 163.517 24.2081 184.23 28.1488C193.464 29.9057 200 38.0237 200 47.4235V150.374C200 159.424 193.931 167.333 185.12 169.396C164.683 174.181 127.351 181.934 100 181.934C72.6487 181.934 35.3172 174.181 14.8798 169.396C6.06883 167.333 0 159.424 0 150.374V47.4235Z" fill="url(#paint0_linear_105_435)" /> <defs> <linearGradient id="paint0_linear_105_435" x1="100" y1="18" x2="100" y2="181.934" gradientUnits="userSpaceOnUse"> <stop stop-color="#A7B5FF" /> <stop offset="1" stop-color="#F3ACFF" /> </linearGradient> </defs> </svg>
    <svg
      v-else-if="shape === 'blob-5'"
      :width="resolvedSize"
      :height="resolvedSize"
      :role="ariaRole"
      :aria-hidden="ariaHidden"
      :aria-label="ariaLabel"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    > <g clip-path="url(#clip0_116_2)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M29.2893 29.2893C19.2658 39.3128 15.6458 53.315 18.4294 66.2123C7.34132 73.3638 0 85.8246 0 100C-1.74156e-06 114.175 7.34132 126.636 18.4294 133.788C15.6458 146.685 19.2658 160.687 29.2893 170.711C39.3129 180.734 53.315 184.354 66.2123 181.571C73.3639 192.659 85.8246 200 100 200C114.175 200 126.636 192.659 133.788 181.571C146.685 184.354 160.687 180.734 170.711 170.711C180.734 160.687 184.354 146.685 181.571 133.788C192.659 126.636 200 114.175 200 100C200 85.8246 192.659 73.3638 181.571 66.2123C184.354 53.315 180.734 39.3129 170.711 29.2893C160.687 19.2658 146.685 15.6458 133.788 18.4294C126.636 7.34133 114.175 0 100 0C85.8246 0 73.3638 7.34131 66.2123 18.4293C53.315 15.6458 39.3129 19.2658 29.2893 29.2893Z" fill="url(#paint0_linear_116_2)" /> </g> <defs> <linearGradient id="paint0_linear_116_2" x1="177" y1="-9.23648e-06" x2="39.5" y2="152.5" gradientUnits="userSpaceOnUse"> <stop stop-color="#B0B9FF" /> <stop offset="1" stop-color="#E7E9FF" /> </linearGradient> <clipPath id="clip0_116_2"> <rect width="200" height="200" fill="white" /> </clipPath> </defs> </svg>
    <svg
      v-else-if="shape === 'blob-6'"
      :width="resolvedSize"
      :height="resolvedSize"
      :role="ariaRole"
      :aria-hidden="ariaHidden"
      :aria-label="ariaLabel"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    > <g clip-path="url(#clip0_119_275)"> <path d="M127.14 200C99.9942 200 99.9943 167.423 72.8487 167.423C41.6048 167.423 0 158.386 0 127.133C0 99.9885 32.5678 99.9885 32.5678 72.8445C32.5678 41.6139 41.6048 0 72.8602 0C100.006 0 100.006 32.5774 127.151 32.5774C158.384 32.5774 200 41.6139 200 72.8675C200 100.012 167.421 100.012 167.421 127.156C167.409 158.444 158.384 200 127.14 200Z" fill="url(#paint0_linear_119_275)" /> </g> <defs> <linearGradient id="paint0_linear_119_275" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse"> <stop stop-color="#DF99F7" /> <stop offset="1" stop-color="#FFDBB0" /> </linearGradient> <clipPath id="clip0_119_275"> <rect width="200" height="200" fill="white" /> </clipPath> </defs> </svg>
    <svg
      v-else-if="shape === 'blob-7'"
      :width="resolvedSize"
      :height="resolvedSize"
      :role="ariaRole"
      :aria-hidden="ariaHidden"
      :aria-label="ariaLabel"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    > <g clip-path="url(#clip0_119_282)"> <path d="M123.344 200C100 200 100 143.969 76.6558 143.969C49.7872 143.969 0 150.205 0 123.338C0 99.9951 56.0242 99.995 56.0242 76.652C56.0242 49.7946 49.7872 0 76.6558 0C100 0 100 56.0313 123.344 56.0313C150.213 56.0313 200 49.7946 200 76.652C200 99.995 143.966 99.9951 143.966 123.338C143.966 150.205 150.213 200 123.344 200Z" fill="url(#paint0_linear_119_282)" /> </g> <defs> <linearGradient id="paint0_linear_119_282" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse"> <stop stop-color="#B8DBFC" /> <stop offset="1" stop-color="#F8FBFE" /> </linearGradient> <clipPath id="clip0_119_282"> <rect width="200" height="200" fill="white" /> </clipPath> </defs> </svg>

    <!-- Stars -->
    <svg
      v-else-if="shape === 'star-1'"
      :width="resolvedSize"
      :height="resolvedSize"
      :role="ariaRole"
      :aria-hidden="ariaHidden"
      :aria-label="ariaLabel"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    > <g clip-path="url(#clip0_104_40)"> <path d="M100.254 200C97.0998 200 94.4337 197.716 93.6699 194.656C91.2352 184.903 86.5744 174.531 79.6875 163.542C71.5278 150.347 59.8958 138.108 44.7917 126.823C31.6549 116.894 18.5181 110.123 5.38138 106.511C2.27005 105.656 0 102.897 0 99.6702V99.6702C0 96.5066 2.18273 93.7795 5.22473 92.9109C18.1045 89.2335 30.5122 83.2631 42.4479 75C56.1632 65.4514 67.6215 53.993 76.8229 40.625C84.9629 28.7165 90.5507 16.9388 93.5863 5.29207C94.3815 2.24095 97.0676 0 100.221 0V0C103.409 0 106.114 2.29058 106.89 5.3833C108.642 12.3654 111.38 19.512 115.104 26.8229C119.792 35.8507 125.781 44.5312 133.073 52.8646C140.538 61.0243 148.872 68.4028 158.073 75C170.097 83.5231 182.32 89.5111 194.744 92.964C197.792 93.8109 200 96.5244 200 99.6874V99.6874C200 102.898 197.725 105.634 194.629 106.483C186.754 108.642 178.648 112.124 170.313 116.927C160.243 122.83 150.868 129.861 142.187 138.021C133.507 146.007 126.389 154.427 120.833 163.281C113.933 174.293 109.267 184.745 106.837 194.639C106.083 197.708 103.413 200 100.254 200V200Z" fill="url(#paint0_linear_104_40)" /> </g> <defs> <linearGradient id="paint0_linear_104_40" x1="27.5" y1="19" x2="149" y2="174.5" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFD9A0" /> <stop offset="1" stop-color="#FFF5F1" /> </linearGradient> <clipPath id="clip0_104_40"> <rect width="200" height="200" fill="white" /> </clipPath> </defs> </svg>
    <svg
      v-else-if="shape === 'star-2'"
      :width="resolvedSize"
      :height="resolvedSize"
      :role="ariaRole"
      :aria-hidden="ariaHidden"
      :aria-label="ariaLabel"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    > <g clip-path="url(#clip0_104_215)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M100 100C100 100 112.5 66.5265 112.5 42.8571C112.5 19.1878 106.904 0 100 0C93.0964 0 87.5 19.1878 87.5 42.8571C87.5 66.5265 100 100 100 100ZM100 100C100 100 114.831 132.508 131.567 149.245C148.304 165.982 165.829 175.592 170.711 170.711C175.592 165.829 165.982 148.304 149.245 131.567C132.508 114.831 100 100 100 100ZM100 100C100 100 133.474 87.5 157.143 87.5C180.812 87.5 200 93.0964 200 100C200 106.904 180.812 112.5 157.143 112.5C133.474 112.5 100 100 100 100ZM100 100C100 100 67.4918 114.831 50.755 131.567C34.0183 148.304 24.4077 165.829 29.2893 170.711C34.1709 175.592 51.696 165.982 68.4327 149.245C85.1695 132.508 100 100 100 100ZM100 100L100 100C100.028 100.074 112.5 133.5 112.5 157.143C112.5 180.812 106.904 200 100 200C93.0964 200 87.5 180.812 87.5 157.143C87.5 133.474 100 100 100 100ZM100 100C100 100 66.5265 87.5 42.8571 87.5C19.1878 87.5 0 93.0964 0 100C0 106.904 19.1878 112.5 42.8571 112.5C66.5265 112.5 100 100 100 100ZM100 99.9999C100 99.9999 132.508 85.1694 149.245 68.4327C165.982 51.6959 175.592 34.1708 170.711 29.2893C165.829 24.4077 148.304 34.0183 131.567 50.755C114.831 67.4918 100 99.9999 100 99.9999ZM68.4327 50.755C85.1695 67.4918 100 100 100 100C100 100 67.4918 85.1695 50.7551 68.4327C34.0183 51.696 24.4078 34.1709 29.2893 29.2893C34.1709 24.4078 51.696 34.0183 68.4327 50.755Z" fill="url(#paint0_linear_104_215)" /> </g> <defs> <linearGradient id="paint0_linear_104_215" x1="157.5" y1="32" x2="44" y2="147.5" gradientUnits="userSpaceOnUse"> <stop offset="0.0509862" stop-color="#FFB6E1" /> <stop offset="1" stop-color="#FBE3EA" /> </linearGradient> <clipPath id="clip0_104_215"> <rect width="200" height="200" fill="white" /> </clipPath> </defs> </svg>
    <svg
      v-else-if="shape === 'star-3'"
      :width="resolvedSize"
      :height="resolvedSize"
      :role="ariaRole"
      :aria-hidden="ariaHidden"
      :aria-label="ariaLabel"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    > <g clip-path="url(#clip0_116_153)"> <path d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z" fill="url(#paint0_linear_116_153)" /> </g> <defs> <linearGradient id="paint0_linear_116_153" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse"> <stop stop-color="#DF99F7" /> <stop offset="1" stop-color="#FFDBB0" /> </linearGradient> <clipPath id="clip0_116_153"> <rect width="200" height="200" fill="white" /> </clipPath> </defs> </svg>
    <svg
      v-else-if="shape === 'star-4'"
      :width="resolvedSize"
      :height="resolvedSize"
      :role="ariaRole"
      :aria-hidden="ariaHidden"
      :aria-label="ariaLabel"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    > <g clip-path="url(#clip0_103_9)"> <path d="M89.9318 6.12863C94.1569 -2.04288 105.843 -2.04288 110.068 6.12863L136.973 58.1644C138.051 60.2496 139.75 61.9486 141.836 63.0268L193.871 89.9318C202.043 94.1569 202.043 105.843 193.871 110.068L141.836 136.973C139.75 138.051 138.051 139.75 136.973 141.836L110.068 193.871C105.843 202.043 94.1569 202.043 89.9318 193.871L63.0268 141.836C61.9486 139.75 60.2496 138.051 58.1644 136.973L6.12863 110.068C-2.04288 105.843 -2.04288 94.1569 6.12863 89.9318L58.1644 63.0268C60.2496 61.9486 61.9486 60.2496 63.0268 58.1644L89.9318 6.12863Z" fill="url(#paint0_linear_103_9)" /> </g> <defs> <linearGradient id="paint0_linear_103_9" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse"> <stop stop-color="#DF99F7" /> <stop offset="1" stop-color="#FFDBB0" /> </linearGradient> <clipPath id="clip0_103_9"> <rect width="200" height="200" fill="white" /> </clipPath> </defs> </svg>
    <svg
      v-else-if="shape === 'star-5'"
      :width="resolvedSize"
      :height="resolvedSize"
      :role="ariaRole"
      :aria-hidden="ariaHidden"
      :aria-label="ariaLabel"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    > <path d="M100 0L124.1 58.2576L186.603 50L148.2 100L186.603 150L124.1 141.742L100 200L75.9 141.742L13.3975 150L51.8 100L13.3975 50L75.9 58.2576L100 0Z" fill="url(#paint0_linear_103_2)" /> <defs> <linearGradient id="paint0_linear_103_2" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse"> <stop stop-color="#A7B5FF" /> <stop offset="1" stop-color="#F3ACFF" /> </linearGradient> </defs> </svg>
    <svg
      v-else-if="shape === 'star-6'"
      :width="resolvedSize"
      :height="resolvedSize"
      :role="ariaRole"
      :aria-hidden="ariaHidden"
      :aria-label="ariaLabel"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    > <g clip-path="url(#clip0_104_26)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M107.143 0H92.8571V82.7556L34.3401 24.2385L24.2386 34.3401L82.7556 92.8571H0V107.143H82.7555L24.2386 165.66L34.3401 175.761L92.8571 117.244V200H107.143V117.244L165.66 175.761L175.761 165.66L117.244 107.143H200V92.8571H117.244L175.761 34.34L165.66 24.2385L107.143 82.7555V0Z" fill="url(#paint0_linear_104_26)" /> </g> <defs> <linearGradient id="paint0_linear_104_26" x1="20.5" y1="16" x2="100" y2="200" gradientUnits="userSpaceOnUse"> <stop stop-color="#ACAAFF" /> <stop offset="1" stop-color="#C0E8FF" /> </linearGradient> <clipPath id="clip0_104_26"> <rect width="200" height="200" fill="white" /> </clipPath> </defs> </svg>
    <svg
      v-else-if="shape === 'star-7'"
      :width="resolvedSize"
      :height="resolvedSize"
      :role="ariaRole"
      :aria-hidden="ariaHidden"
      :aria-label="ariaLabel"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    > <g clip-path="url(#clip0_118_208)"> <path d="M100 200C97.1048 105.262 94.738 102.91 0 100C94.738 97.1048 97.0903 94.738 100 0C102.895 94.738 105.262 97.0903 200 100C105.262 102.91 102.91 105.233 100 200Z" fill="url(#paint0_linear_118_208)" /> </g> <defs> <linearGradient id="paint0_linear_118_208" x1="14" y1="26" x2="179" y2="179.5" gradientUnits="userSpaceOnUse"> <stop stop-color="#E9B8FF" /> <stop offset="1" stop-color="#F9ECFF" /> </linearGradient> <clipPath id="clip0_118_208"> <rect width="200" height="200" fill="white" /> </clipPath> </defs> </svg>
    <svg
      v-else-if="shape === 'star-8'"
      :width="resolvedSize"
      :height="resolvedSize"
      :role="ariaRole"
      :aria-hidden="ariaHidden"
      :aria-label="ariaLabel"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    > <g clip-path="url(#clip0_118_195)"> <path d="M100 0L101.459 91.7276L134.202 6.03074L104.2 92.7254L164.279 23.3956L106.435 94.6006L186.603 50L107.893 97.127L198.481 82.6352L108.4 100L198.481 117.365L107.893 102.873L186.603 150L106.435 105.399L164.279 176.604L104.2 107.275L134.202 193.969L101.459 108.272L100 200L98.5414 108.272L65.798 193.969L95.8 107.275L35.7212 176.604L93.5652 105.399L13.3975 150L92.1066 102.873L1.51923 117.365L91.6 100L1.51923 82.6352L92.1066 97.127L13.3975 50L93.5652 94.6006L35.7212 23.3956L95.8 92.7254L65.798 6.03074L98.5414 91.7276L100 0Z" fill="url(#paint0_linear_118_195)" /> </g> <defs> <linearGradient id="paint0_linear_118_195" x1="157.5" y1="32" x2="44" y2="147.5" gradientUnits="userSpaceOnUse"> <stop offset="0.0509862" stop-color="#FFB6E1" /> <stop offset="1" stop-color="#FBE3EA" /> </linearGradient> <clipPath id="clip0_118_195"> <rect width="200" height="200" fill="white" /> </clipPath> </defs> </svg>
  </div>
</template>
