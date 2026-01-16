<template>
  <h2>Material adicional</h2>
  <div v-html="markdown.render(header)" />

  <CodeImageCard title="if" :code="code_if" image="./if.png" />
  <CodeImageCard title="if/else" :code="code_else" image="./else.png" />
  <CodeImageCard title="if/elif/else" :code="code_elif" image="./elif.png" />
</template>

<script>
import MarkdownIt from 'markdown-it';
import highlight from '../../../utils/highlight';
import CodeImageCard from './CodeImageCard.vue';

export default {
  name: 'IfElseInformation',
  components: {
    CodeImageCard
  },
  setup() {
    const markdown = new MarkdownIt({ highlight });
    return { markdown };
  },
  data() {
    return {
      header: 'Diagramas de flujo de `if`, `if/else` y `if/elif/else`. Para cada uno de estos caso, se deja tanto un pseudo-código como el diagrama asociado al mismo.',
      code_if: `\`\`\`python
# Código antes if
# ...

if condición:
  # Código A
  # ...

# Código después if
# ...
\`\`\``,
      code_else: `\`\`\`python
# Código antes if/else
# ...

if condición:
  # Código A
  # ...
else:
  # Código B
  # ...

# Código después if/else
# ...
\`\`\``,
      code_elif: `\`\`\`python
# Código antes
# ...

if condición_1:
  # Código 1
  # ...
elif condición_2:
  # Código 2
  # ...
# ...
elif condición_N:
  # Código N
  # ...
else:
  # Código N + 1
  # ...

# Código después
# ...
\`\`\``,
    };
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  margin-top: 14px;
  margin-left: 14px;
}
.code {
  width: min-content;
}
</style>
