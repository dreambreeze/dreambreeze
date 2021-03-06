<template>
  <button
    :class="[
      'd-btn',
      `d-btn-${buttonType}`,
      { 'd-btn-disabled': disabled || loading },
      `d-btn-${size}`,
      { 'icon-s-only': icon },
    ]"
    :disabled="disabled || loading"
    type="button"
  >
    <d-icon
      v-if="icon"
      :style="{fontSize: iconSize}"
      class="iconfont"
    >{{ icon }}
    </d-icon>
    <d-icon
      v-if="loading"
      :rotate="true"
      class="loading-icon iconfont"
    >&#xe65f;
    </d-icon>
    <template v-if="$slots.default">
      <slot></slot>
    </template>
  </button>
</template>

<script>
import DIcon from '../icon/d-icon'

export default {
  name: 'DButton',
  components: {
    DIcon
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    buttonType: {
      type: String,
      default: 'primary'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'default'
    },
    iconSize: {
      type: Boolean,
      default: false
    },
    iconText: {
      type: String,
      default: ''
    },
    placement: {
      type: String,
      default: 'top'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/variables.scss';

@-webkit-keyframes loadingCircle {
  100% {
    transform: rotate(360deg);
  }
}

.loading-icon {
  margin: 0 5px 0 0;
  color: #2A7AB0;
}

.d-btn {
  font-weight: 400;
  color: $font-500;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0 16px;
  font-size: 1rem;
  height: 32px;
  border-radius: 0.25rem;
  outline: none;
  cursor: pointer;
  min-width: 60px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  &.d-btn-disabled,
  &.d-btn-disabled:hover,
  &.d-btn-disabled:focus,
  &.d-btn-disabled:active {
    opacity: 0.65;
    cursor: not-allowed;
  }

  @each $size, $value in $sizes {
    &.d-btn-#{$size} {
      padding: 0 #{$value / 4 + 6}px;

      &.icon-d-btn {
        width: #{$value}px;
        padding: 0;

        &.icon-s-only {
          min-width: #{$value}px;
          border-color: rgba(255, 255, 255, 0);
          background-color: rgba(255, 255, 255, 0);
          align-items: center !important;
          color: $font-400;

          &:hover {
            background-color: $background-200;
          }

          &.d-btn-disabled {
            border-color: rgba(255, 255, 255, 0);
            background-color: rgba(255, 255, 255, 0);
            color: $font-400;
          }
        }
      }
    }
  }

  & .loading {
    animation: loadingCircle 1s infinite linear;
  }

  & > svg ~ span {
    margin-left: 4px;
  }

  $types: (
    'primary': $theme-primary,
    'success': map-get($theme, 'green'),
    'danger': map-get($theme, 'red'),
    'warning': map-get($theme, 'yellow'),
    'info': map-get($theme, 'cyan'),
  );
  @each $type, $value in $types {
    &.d-btn-#{$type} {
      &,
      &.d-btn-disabled:hover {
        @if $value == map-get($theme, 'yellow') {
          color: $font;
        } @else {
          color: $white;
        }
        background-color: $value;
        border-color: $value;
      }

      &:hover {
        background-color: darken($value, 10%);
        border-color: darken($value, 10%);
      }

      &:active,
      &:focus {
        background-color: darken($value, 10%);
        border-color: darken($value, 10%);
        box-shadow: 0 0 0 3px lighten($value, 30%);
      }
    }
    &.d-btn-outline-#{$type} {
      & {
        @if $value == map-get($theme, 'yellow') {
          color: darken($value, 40%);
        } @else {
          color: $value;
        }
        border-color: $value;
      }

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        border-color: darken($value, 10%);
      }

      &.d-btn-disabled:hover {
        color: $value;
        border-color: $value;
        background-color: initial;
      }

      &:active {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
      }

    }
  }
}
</style>
