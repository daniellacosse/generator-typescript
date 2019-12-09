<template>
  <main>
    -- Demo --
    <example />
  </main>
</template>

<script lang="ts">
import Example from "components/Example";

export default {
  components: { Example }
};
</script>

<style>
html,
body {
  all: initial;

  --brand-color: hsl(227, 60%, 50%);
}

main {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;
}
</style>
