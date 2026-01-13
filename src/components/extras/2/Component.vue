<template>
  <h2>Material adicional</h2>
  <div v-html="markdown.render(header)" />

  <h4><code>if</code></h4>
  <Card>
    <template #content>
      <div class="flex align-items-start">
        <div v-html="markdown.render(code_if)" class="code" />
        <img src="./if.png" />
      </div>
    </template>
  </Card>

  <h4><code>if/else</code></h4>
  <Card>
    <template #content>
      <div class="flex align-items-start">
        <div v-html="markdown.render(code_else)" class="code" />
        <img src="./else.png" />
      </div>
    </template>
  </Card>

  <h4><code>if/elif/else</code></h4>
  <Card>
    <template #content>
      <div class="flex align-items-start">
        <div v-html="markdown.render(code_elif)" class="code" />
        <img src="./elif.png" />
      </div>
    </template>
  </Card>
</template>

<script>
import MarkdownIt from 'markdown-it';
import highlight from '../../../utils/highlight';

export default {
  name: 'Class2ExtraInformation',
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
