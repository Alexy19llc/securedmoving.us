<template>
    <div>
      <MainNav />
      <!-- Begin Main -->
      <section>
        <ContentDoc>
          <template v-slot="{ doc }">
            <div class="mx-auto">
              <ContentDoc />
            </div>
          </template>
          <template #not-found>
            <Title>{{ notFoundCont.title }}</Title>
            <Meta name="description" :content="notFoundCont.description" />
                <div class="prose mx-auto">
                  <ContentRenderer>
                    <ContentRendererMarkdown :value="notFoundCont" />
                  </ContentRenderer>
                </div>
          </template>
      </ContentDoc>
      </section>
      <!-- End Main -->
    </div>
  </template>
  
  <script setup>
    definePageMeta({
      layout: false,
    })

    const notFoundCont = await queryContent('service-area/all-areas').findOne()
    const { page } = useContent()
    useContentHead(page)
  </script>