    <template>
    <div class="mt-16 sm:mt-20 xl:mx-auto xl:max-w-7xl xl:px-8">
        <nuxt-img 
         :src="image.url" 
         :alt="image.alt" 
         provider="cloudinary"
         :modifiers="image.modifiers"
         width="1200"
         height="480"
         class="aspect-[5/2] w-full object-cover xl:rounded-3xl" />
    </div>
    </template>
    <script setup>
        const props = defineProps({
            image: {
                type: Object,
                url: {
                    type: String,
                    default: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80'
                },
                alt: {
                    type: String,
                    default: 'Fort Worth Moving Company'
                },
                modifiers: {
                    type: String,
                    default: ''
                }
            }
        })
    </script>