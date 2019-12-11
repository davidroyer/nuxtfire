<template>
  <VApp>
    <VSiteHeader />
    <VContent />
    <VMobileNav />
    <VSiteFooter />
  </VApp>
</template>

<script>
import VContent from '@/components/layout/VContent'
import VMobileNav from '@/components/layout/VMobileNav'
import VSiteHeader from '@/components/layout/VSiteHeader'

export default {
  components: {
    VMobileNav,
    VContent,
    VSiteHeader,
    VSiteFooter: () => import('@/components/layout/VSiteFooter')
  }
}
</script>
