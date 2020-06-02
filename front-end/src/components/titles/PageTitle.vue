<template>
  <h1 id="page-title" class="page-title">
    <span :class="background">
      {{ text }}
    </span>
  </h1>
</template>

<script>
// Styles
import '@/components/titles/PageTitle.scss'

export default {
  name: 'PageTitle',
  props: {
    text: {
      default: 'Título da Página'
    }, 
    background: {
      default: 'background'
    }
  }
}
</script>