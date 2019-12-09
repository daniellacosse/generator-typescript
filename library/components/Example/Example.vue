<template>
  <div class="Example">{{ greeting }}, {{ message }}!</div>
</template>

<script lang="ts">
import exampleMessage from "helpers/exampleMessage";

/**
 * This `Example` component should be replaced.
 * It is meant to demonstrate how components are to be built in this system.
 */
export default {
  props: {
    /** specify how we are to greet the user */
    greeting: {
      default: "Hello",
      type: String
    }
  },
  data(): ExampleData {
    return {
      message: exampleMessage()
    };
  }
};
</script>

<style scoped>
.Example {
  color: var(--brand-color);
}
</style>
